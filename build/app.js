export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createAppHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/common/buildTarget.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var TARGET_ID = "W466";
                        var TARGET_WIDTH = 466;
                        var TARGET_HEIGHT = 466;
                        var TARGET_PROFILE = "circle";
                        var TARGET_SHAPE = "circle";
                        var _default = exports["default"] = {
                            id: TARGET_ID,
                            width: TARGET_WIDTH,
                            height: TARGET_HEIGHT,
                            profile: TARGET_PROFILE,
                            shape: TARGET_SHAPE
                        };
                    },
                    "./src/common/navGuard.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.navGuard = navGuard;
                        var lastNavAt = 0;
                        var NAV_LOCK_MS = 500;
                        function navGuard() {
                            const now = Date.now();
                            if (now - lastNavAt < NAV_LOCK_MS) return false;
                            lastNavAt = now;
                            return true;
                        }
                    },
                    "./src/global.js" (__unused_rspack_module, __unused_rspack_exports, __webpack_require__) {
                        "use strict";
                        var _buildTarget = _interopRequireDefault(__webpack_require__("./src/common/buildTarget.js"));
                        var _navGuard = __webpack_require__("./src/common/navGuard.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        __webpack_require__.g.buildTarget = _buildTarget.default;
                        __webpack_require__.g.navGuard = _navGuard.navGuard;
                    },
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.watch.dic.w466","name":"腕上词典","versionName":"3.0.0","versionCode":6,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch","band"],"features":[{"name":"system.router"},{"name":"system.vibrator"},{"name":"system.device"},{"name":"system.file"},{"name":"system.storage"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":"device-width"},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"},"pages/search":{"component":"search"},"pages/results":{"component":"results"},"pages/detail":{"component":"detail"},"pages/records":{"component":"records"},"pages/about":{"component":"about"},"pages/sponsor":{"component":"sponsor"},"pages/filter":{"component":"filter"},"pages/settings":{"component":"settings"}}}}');
                    }
                };
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
                var __webpack_exports__ = {};
                (()=>{
                    var $app_style$ = [];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        __webpack_require__("./src/global.js");
                        var _default = exports.default = {
                            data: {
                                screenShape: "circle",
                                screenWidth: 466,
                                screenHeight: 466,
                                screenAspectRatio: 1,
                                screenProfile: "circle"
                            },
                            onCreate () {
                                console.log("app created");
                                console.log("fixed W466 screen: circle 466x466");
                            },
                            onDestroy () {
                                console.log("app destroyed");
                            }
                        };
                    };
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.style = $app_style$;
                    $app_exports$.default.manifest = __webpack_require__("./src/manifest.json");
                    var $translateStyle$ = function(value) {
                        if ('string' == typeof value) return Object.fromEntries(value.split(';').filter((item)=>Boolean(item && item.trim())).map((item)=>{
                            const matchs = item.match(/([^:]+):(.*)/);
                            if (matchs && matchs.length > 2) return [
                                matchs[1].trim().replace(/-([a-z])/g, (_, match)=>match.toUpperCase()),
                                matchs[2].trim()
                            ];
                            return [];
                        }));
                        return value;
                    };
                    __webpack_require__.g.$translateStyle$ = $translateStyle$;
                })();
            })();
        };
        return createAppHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
