"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");

const RUNNING_DIR = path.join(
  process.env.LOCALAPPDATA || "",
  "Temp",
  "avd",
  "running"
);
let currentOptions = { readyTimeout: 8000 };

function loadGrpc() {
  const candidates = [
    path.join(process.cwd(), "node_modules", "@aiot-toolkit", "emulator", "lib", "vvd", "grpc"),
    path.join(__dirname, "..", "..", "..", "..", "node_modules", "@aiot-toolkit", "emulator", "lib", "vvd", "grpc")
  ];

  for (const candidate of candidates) {
    try {
      return require(candidate);
    } catch (error) {
      // Try next candidate.
    }
  }

  throw new Error("Cannot find @aiot-toolkit/emulator. Run from a Vela project with node_modules installed.");
}

function parseIni(content) {
  return content.split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed[0] === "#") {
      return acc;
    }

    const index = trimmed.indexOf("=");
    if (index <= 0) {
      return acc;
    }

    acc[trimmed.slice(0, index)] = trimmed.slice(index + 1).replace(/^"|"$/g, "");
    return acc;
  }, {});
}

function readRunningEmulators() {
  if (!fs.existsSync(RUNNING_DIR)) {
    return [];
  }

  return fs
    .readdirSync(RUNNING_DIR)
    .filter((name) => name.endsWith(".ini"))
    .map((name) => {
      const file = path.join(RUNNING_DIR, name);
      return Object.assign({ file }, parseIni(fs.readFileSync(file, "utf8")));
    })
    .filter((item) => item["grpc.port"]);
}

function matchesTarget(item, target) {
  if (!target) {
    return true;
  }

  const serial = item["port.serial"] ? "emulator-" + item["port.serial"] : "";
  return [item["avd.id"], item["avd.name"], item["grpc.port"], item["port.serial"], serial].some(
    (value) => value === target
  );
}

function selectEmulator(target) {
  const running = readRunningEmulators();
  const selected = running.find((item) => matchesTarget(item, target));
  if (!selected) {
    const known = running
      .map((item) => `${item["avd.id"] || item["avd.name"]}(emulator-${item["port.serial"]})`)
      .join(", ");
    throw new Error(`No matching emulator. Running: ${known || "none"}`);
  }
  return selected;
}

function safeName(value) {
  return String(value || "emulator").replace(/[\\/:*?"<>|]/g, "_");
}

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "");
}

function parseOptions(argv) {
  const options = {
    out: path.join(os.homedir(), "Downloads"),
    wait: 1000,
    readyTimeout: 8000,
    count: 8,
    interval: 350
  };

  const rest = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--out") {
      i += 1;
      options.out = argv[i];
    } else if (arg === "--wait") {
      i += 1;
      options.wait = Number(argv[i]);
    } else if (arg === "--ready-timeout") {
      i += 1;
      options.readyTimeout = Number(argv[i]);
    } else if (arg === "--count") {
      i += 1;
      options.count = Number(argv[i]);
    } else if (arg === "--interval") {
      i += 1;
      options.interval = Number(argv[i]);
    } else {
      rest.push(arg);
    }
  }

  return { options, rest };
}

function outputPath(item, options, suffix) {
  const out = options.out || path.join(os.homedir(), "Downloads");
  const stats = fs.existsSync(out) ? fs.statSync(out) : null;
  if (stats && stats.isDirectory()) {
    const name = safeName(item["avd.id"] || item["avd.name"] || item["grpc.port"]);
    return path.join(out, `vela-${name}-${timestamp()}-${suffix}.png`);
  }
  return out;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function withTimeout(promise, ms, message) {
  let timer = null;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), ms);
  });

  return Promise.race([promise, timeout]).finally(() => {
    if (timer) {
      clearTimeout(timer);
    }
  });
}

async function withClient(item, callback) {
  const { createGrpcClient } = loadGrpc();
  const client = createGrpcClient({
    "grpc.port": item["grpc.port"],
    "grpc.token": item["grpc.token"] || ""
  });

  try {
    await withTimeout(
      client.waitForReady(),
      Math.max(1000, Number(currentOptions.readyTimeout) || 8000),
      `Timed out waiting for ${item["avd.id"] || item["grpc.port"]} gRPC on port ${item["grpc.port"]}. The running .ini may be stale or the emulator may have exited.`
    );
    return await callback(client);
  } finally {
    client.close();
  }
}

async function capture(item, options, suffix) {
  return withClient(item, async (client) => {
    const image = await client.getScreenshot();
    if (!image || image.length === 0) {
      throw new Error(`Empty screenshot from ${item["avd.id"] || item["grpc.port"]}`);
    }

    const file = outputPath(item, options, suffix);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, image);
    console.log(file);
    return file;
  });
}

async function tap(item, x, y, options) {
  await withClient(item, async (client) => {
    client.sendMouse({ x, y, buttons: 1 });
    await sleep(120);
    client.sendMouse({ x, y, buttons: 0 });
    await sleep(options.wait);
  });
}

async function swipe(item, x1, y1, x2, y2, options) {
  await withClient(item, async (client) => {
    const steps = 12;
    client.sendMouse({ x: x1, y: y1, buttons: 1 });
    await sleep(50);

    for (let i = 1; i <= steps; i += 1) {
      const ratio = i / steps;
      const x = Math.round(x1 + (x2 - x1) * ratio);
      const y = Math.round(y1 + (y2 - y1) * ratio);
      client.sendMouse({ x, y, buttons: 1 });
      await sleep(25);
    }

    client.sendMouse({ x: x2, y: y2, buttons: 0 });
    await sleep(options.wait);
  });
}

async function printStatus(item) {
  await withClient(item, async (client) => {
    const status = await client.getStatus();
    const config = status.hardwareConfig || {};
    console.log(JSON.stringify({
      avd: item["avd.id"] || item["avd.name"],
      serial: item["port.serial"] ? `emulator-${item["port.serial"]}` : "",
      grpc: item["grpc.port"],
      booted: status.booted,
      width: config["hw.lcd.width"] || config["display.width"] || config["screen.width"] || "",
      height: config["hw.lcd.height"] || config["display.height"] || config["screen.height"] || "",
      hardwareConfig: config
    }, null, 2));
  });
}

function printList() {
  const running = readRunningEmulators();
  if (running.length === 0) {
    console.log("No running Vela emulators found.");
    return;
  }

  for (const item of running) {
    const serial = item["port.serial"] ? `emulator-${item["port.serial"]}` : "";
    console.log(`${item["avd.id"] || item["avd.name"] || "unknown"} ${serial} grpc=${item["grpc.port"]}`);
  }
}

async function main() {
  const [command, ...argv] = process.argv.slice(2);
  const { options, rest } = parseOptions(argv);
  currentOptions = options;

  if (!command || command === "help") {
    console.log("Usage:");
    console.log("  vela_emulator_qa.js list");
    console.log("  vela_emulator_qa.js screenshot <target> [--out path]");
    console.log("  vela_emulator_qa.js tap <target> <x> <y> [--wait ms] [--ready-timeout ms]");
    console.log("  vela_emulator_qa.js swipe <target> <x1> <y1> <x2> <y2> [--wait ms] [--ready-timeout ms]");
    console.log("  vela_emulator_qa.js tap-screenshot <target> <x> <y> [--wait ms] [--out dir]");
    console.log("  vela_emulator_qa.js frames <target> [--count n] [--interval ms] [--out dir]");
    console.log("  vela_emulator_qa.js status <target>");
    return;
  }

  if (command === "list") {
    printList();
    return;
  }

  const target = rest[0];
  const item = selectEmulator(target);

  if (command === "screenshot") {
    await capture(item, options, "screen");
    return;
  }

  if (command === "status") {
    await printStatus(item);
    return;
  }

  if (command === "tap") {
    await tap(item, Number(rest[1]), Number(rest[2]), options);
    return;
  }

  if (command === "swipe") {
    await swipe(item, Number(rest[1]), Number(rest[2]), Number(rest[3]), Number(rest[4]), options);
    return;
  }

  if (command === "tap-screenshot") {
    await capture(item, options, "before");
    await tap(item, Number(rest[1]), Number(rest[2]), options);
    await capture(item, options, "after");
    return;
  }

  if (command === "frames") {
    for (let i = 0; i < options.count; i += 1) {
      await capture(item, options, `frame-${String(i + 1).padStart(2, "0")}`);
      if (i < options.count - 1) {
        await sleep(options.interval);
      }
    }
    return;
  }

  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
