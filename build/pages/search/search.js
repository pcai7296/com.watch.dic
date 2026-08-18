export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/components/InputMethod/InputMethod.ux" (module, __unused_rspack_exports, __webpack_require__) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "page"
                                    ]
                                ],
                                {
                                    width: "100%",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item"
                                    ]
                                ],
                                {
                                    height: "52px",
                                    flex: 1
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn0"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "28px",
                                    backgroundColor: "rgba(38, 38, 38, 0)",
                                    borderRadius: 0,
                                    height: "52px",
                                    width: "52px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn02"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    backgroundColor: "rgba(38, 38, 38, 0)",
                                    borderRadius: "0px",
                                    fontSize: "32px",
                                    textAlign: "center",
                                    height: "42px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "circle-en-candidate"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    fontSize: "28px",
                                    textAlign: "center",
                                    height: "42px",
                                    lines: 1,
                                    textOverflow: "ellipsis",
                                    paddingRight: "10px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnfull"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    backgroundColor: "#262626",
                                    borderRadius: "12px",
                                    marginRight: "4px",
                                    height: "52px",
                                    width: "40px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnt9"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    backgroundColor: "#262626",
                                    borderRadius: "999px",
                                    marginRight: "4px",
                                    width: "94px",
                                    height: "60px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "caltext"
                                    ]
                                ],
                                {
                                    textAlign: "left",
                                    lineHeight: "38px",
                                    lines: 1,
                                    textOverflow: "ellipsis",
                                    color: "#0d84ff",
                                    height: "45px",
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    paddingLeft: "8px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list3"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    top: "38px",
                                    left: "78px",
                                    width: "324px",
                                    height: "160px",
                                    flexDirection: "column",
                                    backgroundColor: "#262626",
                                    borderRadius: "12px",
                                    paddingTop: "8px",
                                    paddingRight: "8px",
                                    paddingBottom: "8px",
                                    paddingLeft: "8px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item3"
                                    ]
                                ],
                                {
                                    width: "324px",
                                    height: "52px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn67"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginRight: "4px",
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        1,
                                        "keyboard67"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "0px",
                                    top: "82px",
                                    width: "100%",
                                    height: "170px"
                                }
                            ],
                            [
                                [
                                    [
                                        1,
                                        "keyboard66"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "0px",
                                    top: "82px",
                                    width: "100%",
                                    height: "170px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list67"
                                    ]
                                ],
                                {
                                    top: "0px",
                                    width: "96.4%",
                                    height: "170px",
                                    borderRadius: "30px",
                                    backgroundColor: "#262626",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px",
                                    paddingTop: "8px",
                                    paddingRight: "8px",
                                    paddingBottom: "8px",
                                    paddingLeft: "8px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item67"
                                    ]
                                ],
                                {
                                    height: "50px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn66"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginRight: "3px",
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list66"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "3px",
                                    top: "0px",
                                    width: "186px",
                                    height: "186px",
                                    borderRadius: "30px",
                                    backgroundColor: "#262626",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px",
                                    paddingTop: "10px",
                                    paddingRight: "10px",
                                    paddingBottom: "10px",
                                    paddingLeft: "10px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item66"
                                    ]
                                ],
                                {
                                    height: "42px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "waiting-keys"
                                    ]
                                ],
                                {
                                    width: "36px",
                                    height: "40px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "keyboard-rows-rect-t9"
                                    ]
                                ],
                                {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    flexShrink: 0,
                                    height: "55px",
                                    width: "100%"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnt9-rect"
                                    ]
                                ],
                                {
                                    flex: 1,
                                    height: "55px",
                                    marginTop: "0",
                                    marginRight: "3px",
                                    marginBottom: "0",
                                    marginLeft: "3px",
                                    width: "unset"
                                }
                            ]
                        ];
                        var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                            "use strict";
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.default = void 0;
                            var _system = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                            var _dicUtil = __webpack_require__("./src/components/InputMethod/assets/dicUtil.js");
                            var _suggestionState = __webpack_require__("./src/common/suggestionState.js");
                            function _interopRequireDefault(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            const KEY_MAPS = {
                                full: [
                                    [
                                        "Q",
                                        "W",
                                        "E",
                                        "R",
                                        "T",
                                        "Y",
                                        "U",
                                        "I",
                                        "O",
                                        "P"
                                    ],
                                    [
                                        "A",
                                        "S",
                                        "D",
                                        "F",
                                        "G",
                                        "H",
                                        "J",
                                        "K",
                                        "L"
                                    ],
                                    [
                                        "Z",
                                        "X",
                                        "C",
                                        "V",
                                        "B",
                                        "N",
                                        "M"
                                    ]
                                ],
                                sign: [
                                    [
                                        "1",
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6",
                                        "7",
                                        "8",
                                        "9",
                                        "0"
                                    ],
                                    [
                                        "~",
                                        "!",
                                        "@",
                                        "#",
                                        "%",
                                        "\u201c",
                                        "\u201d",
                                        "*",
                                        "?",
                                        "/"
                                    ],
                                    [
                                        "(",
                                        ")",
                                        "-",
                                        "_",
                                        ":",
                                        ";",
                                        "\uff0c",
                                        "\u3002",
                                        "."
                                    ]
                                ],
                                sign_jp: [
                                    [
                                        "1",
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6",
                                        "7",
                                        "8",
                                        "9",
                                        "0"
                                    ],
                                    [
                                        "~",
                                        "\u2022",
                                        "@",
                                        "#",
                                        "%",
                                        "\u300c",
                                        "\u300d",
                                        "*",
                                        "?",
                                        "/"
                                    ],
                                    [
                                        "(",
                                        ")",
                                        "-",
                                        "\u2026",
                                        ":",
                                        ";",
                                        "\u3001",
                                        "\u3002",
                                        "!"
                                    ]
                                ],
                                sign62: [
                                    [
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6",
                                        "7",
                                        "8",
                                        "9"
                                    ],
                                    [
                                        "!",
                                        "@",
                                        "#",
                                        "%",
                                        "\u201c",
                                        "\u201d",
                                        "*"
                                    ],
                                    [
                                        ")",
                                        "-",
                                        "_",
                                        ":",
                                        ";"
                                    ]
                                ],
                                sign62_jp: [
                                    [
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6",
                                        "7",
                                        "8",
                                        "9"
                                    ],
                                    [
                                        "\u2022",
                                        "@",
                                        "#",
                                        "%",
                                        "\u300c",
                                        "\u300d",
                                        "*"
                                    ],
                                    [
                                        ")",
                                        "-",
                                        "\u2026",
                                        ":",
                                        ";"
                                    ]
                                ],
                                full62: [
                                    [
                                        "W",
                                        "E",
                                        "R",
                                        "T",
                                        "Y",
                                        "U",
                                        "I",
                                        "O"
                                    ],
                                    [
                                        "S",
                                        "D",
                                        "F",
                                        "G",
                                        "H",
                                        "J",
                                        "K"
                                    ],
                                    [
                                        "X",
                                        "C",
                                        "V",
                                        "B",
                                        "N"
                                    ]
                                ],
                                t9: [
                                    [
                                        "abc",
                                        "def"
                                    ],
                                    [
                                        "ghi",
                                        "jkl",
                                        "mno"
                                    ],
                                    [
                                        "pqrs",
                                        "tuv",
                                        "wxyz"
                                    ]
                                ]
                            };
                            function doSearchDic(word, lang, cb) {
                                if (!word) return void cb([]);
                                const result = _dicUtil.SimpleInputMethod.getHanzi(word, lang);
                                cb(Array.isArray(result) && result[0] ? result[0] : []);
                            }
                            function deleteLast(t) {
                                if (t) return t.substr(0, t.length - 1);
                                return "";
                            }
                            var _default = exports.default = {
                                props: {
                                    hide: {
                                        default: true
                                    },
                                    keyboardtype: {
                                        default: "QWERTY"
                                    },
                                    maxlength: {
                                        default: 5
                                    },
                                    vibratemode: {
                                        default: ""
                                    },
                                    screentype: {
                                        default: "circle"
                                    }
                                },
                                data: {
                                    cval: "",
                                    resultList: [],
                                    resultList2: [],
                                    waitingList: [],
                                    waitingIndex: -1,
                                    lastWaitingStr: "",
                                    downFlag: "",
                                    lang: "en",
                                    numFlag: false,
                                    numFlag_jp: false,
                                    upperFlag: false,
                                    cvalList: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                    ],
                                    percent67: 52,
                                    percent66: 0,
                                    screenWidth: 432,
                                    keyboardLeftOffset: 120,
                                    keys: KEY_MAPS
                                },
                                onInit () {
                                    if ("cn" !== this.lang && "en" !== this.lang) {
                                        this.lang = "cn";
                                        this.numFlag_jp = false;
                                    }
                                    if (this.maxlength) {
                                        const tempCvalList = [];
                                        for(let i = 0; i < this.maxlength; i++)tempCvalList.push(i);
                                        this.cvalList = tempCvalList;
                                    }
                                    this.screenWidth = 432;
                                    this.keyboardLeftOffset = 120;
                                    this.$emit("ready", {});
                                    this.$watch("hide", "watchHidePropsChange");
                                    this.$watch("maxlength", "watchMaxLengthPropsChange");
                                    this.$watch("keyboardtype", "watchKeyboardTypePropsChange");
                                    (0, _suggestionState.onSuggestionsChange)((function() {
                                        if ("en" === this.lang) this.resetReslutList();
                                    }).bind(this));
                                },
                                onDestroy () {
                                    this.$unwatch("hide");
                                    this.$unwatch("maxlength");
                                    this.$unwatch("keyboardtype");
                                    (0, _suggestionState.onSuggestionsChange)(null);
                                },
                                addAllTxt (txt) {
                                    this.$emit("complete", {
                                        content: txt
                                    });
                                },
                                onRsSelect (txt) {
                                    this.onVibrate();
                                    let content = txt;
                                    if ("en" === this.lang) {
                                        const seed = this.normalizeEnglishSeed((0, _suggestionState.getSuggestionSeed)());
                                        const word = this.normalizeEnglishSeed(txt);
                                        if (seed && 0 === word.indexOf(seed) && word.length > seed.length) content = word.slice(seed.length);
                                    }
                                    this.cval = "";
                                    this.addAllTxt(content);
                                    this.clearWaiting();
                                    this.resetReslutList();
                                    this.downFlag = "";
                                },
                                onBtnClick (sign) {
                                    this.onVibrate();
                                    switch(sign){
                                        case "AC":
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "lang":
                                            this.lang = "cn" === this.lang ? "en" : "cn";
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "D":
                                            if (this.waitingIndex >= 0) {
                                                this.clearWaiting();
                                                this.resetReslutList();
                                            } else if (this.cval.length > 0) {
                                                this.cval = deleteLast(this.cval);
                                                this.resetReslutList();
                                            } else this.$emit("delete", {});
                                            break;
                                        case "space":
                                            this.addAllTxt(" ");
                                            break;
                                        case "down":
                                            this.downFlag = "down" === this.downFlag ? "" : "down";
                                            break;
                                        case "select":
                                            if (this.lastWaitingStr != sign && this.lastWaitingStr) {
                                                if ("cn" === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                else this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase());
                                                this.clearWaiting();
                                                this.resetReslutList();
                                            }
                                            break;
                                        case "switchNum":
                                            this.numFlag = false;
                                            this.numFlag_jp = false;
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "switchNum_jp":
                                            this.numFlag = false;
                                            this.numFlag_jp = false;
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "switchCn":
                                            this.numFlag = false;
                                            this.numFlag_jp = false;
                                            break;
                                        case "switchUpper":
                                            this.upperFlag = false;
                                            break;
                                        case "switchLow":
                                            this.upperFlag = false;
                                            break;
                                        default:
                                            if (1 === sign.length) this.addAllTxt(sign);
                                            else {
                                                if (this.waitingIndex >= 0) if (this.lastWaitingStr === sign) {
                                                    this.waitingIndex++;
                                                    if (this.waitingIndex >= this.lastWaitingStr.length) this.waitingIndex = 0;
                                                } else {
                                                    if ("cn" === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                    else this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase());
                                                    this.lastWaitingStr = sign;
                                                    this.waitingIndex = 0;
                                                    this.waitingList = sign.split("");
                                                }
                                                else {
                                                    this.lastWaitingStr = sign;
                                                    this.waitingIndex = 0;
                                                    this.waitingList = sign.split("");
                                                }
                                                this.resetReslutList();
                                            }
                                            break;
                                    }
                                },
                                clearWaiting () {
                                    this.waitingList = [];
                                    this.waitingIndex = -1;
                                    this.lastWaitingStr = "";
                                },
                                resetReslutList () {
                                    let watingStr = "";
                                    if (this.lastWaitingStr && this.lastWaitingStr[this.waitingIndex]) watingStr = this.lastWaitingStr[this.waitingIndex];
                                    if ("en" === this.lang) return void this.getEnglishResults((0, _suggestionState.getSuggestionSeed)());
                                    if (!(this.cval + watingStr) || "cn" !== this.lang) {
                                        this.resultList = [];
                                        this.setResultListAll();
                                        return;
                                    }
                                    this.getResultByWord(this.cval + watingStr);
                                },
                                setResultListAll () {
                                    this.resultList2 = [];
                                    let array = [];
                                    const rowSize = "en" === this.lang ? 1 : parseInt(this.maxlength);
                                    for(let i = 0; i < this.resultList.length; i++){
                                        array.push(this.resultList[i]);
                                        if (array.length === rowSize) {
                                            this.resultList2.push(array);
                                            array = [];
                                        }
                                    }
                                    if (array.length > 0 && array.length < rowSize) this.resultList2.push(array);
                                },
                                getResultByWord (val) {
                                    const that = this;
                                    doSearchDic(val, that.lang, function(data) {
                                        that.resultList = data;
                                        that.setResultListAll();
                                    });
                                },
                                getEnglishResults (seedValue) {
                                    const seed = this.normalizeEnglishSeed(seedValue);
                                    if (!seed) {
                                        this.resultList = [];
                                        this.setResultListAll();
                                        return;
                                    }
                                    this.resultList = this.parseEnglishSuggestions((0, _suggestionState.getSuggestions)());
                                    this.setResultListAll();
                                },
                                onSelect (num) {
                                    this.$emit("keyDown", {
                                        content: num
                                    });
                                    if ("T9" === this.keyboardtype && "pill-shaped" !== this.screentype) return void this.onBtnClick(num);
                                    this.onVibrate();
                                    if ("cn" !== this.lang || this.numFlag) if ("en" !== this.lang || this.numFlag) this.addAllTxt(num);
                                    else this.addAllTxt(num.toLowerCase());
                                    else this.cval += num.toLowerCase();
                                    this.resetReslutList();
                                },
                                onSelectWaiting (num) {
                                    this.onVibrate();
                                    if ("cn" === this.lang) this.cval += this.waitingList[num].toString();
                                    else this.addAllTxt(this.waitingList[num].toLowerCase());
                                    this.clearWaiting();
                                    this.resetReslutList();
                                },
                                watchHidePropsChange (newV) {
                                    this.$emit("visibilityChange", {
                                        visible: !newV
                                    });
                                },
                                watchMaxLengthPropsChange (newV) {
                                    if (newV) {
                                        const tempCvalList = [];
                                        for(let i = 0; i < newV; i++)tempCvalList.push(i);
                                        this.cvalList = tempCvalList;
                                    }
                                },
                                watchKeyboardTypePropsChange () {
                                    if ("cn" !== this.lang && "en" !== this.lang) {
                                        this.lang = "cn";
                                        this.numFlag_jp = false;
                                        this.cval = "";
                                        this.clearWaiting();
                                        this.resetReslutList();
                                    }
                                },
                                onVibrate () {
                                    if ("" != this.vibratemode) _system.default.vibrate({
                                        mode: this.vibratemode
                                    });
                                },
                                handelScroll (event) {
                                    let percentTemp67 = event.scrollX / 636 * 100 + 52.8;
                                    this.percent67 = parseInt(percentTemp67 <= 100 ? percentTemp67 : 100);
                                    let percentTemp66 = event.scrollX / 633 * 100;
                                    this.percent66 = parseInt(percentTemp66 <= 100 ? percentTemp66 : 100);
                                },
                                pushCval () {
                                    this.onVibrate();
                                    let temp = this.cval;
                                    this.cval = "";
                                    this.clearWaiting();
                                    this.resetReslutList();
                                    this.addAllTxt(temp);
                                },
                                normalizeEnglishSeed (value) {
                                    const text = (value || "").toLowerCase();
                                    const match = text.match(/[a-z][a-z'-]*$/);
                                    return match && match[0] ? match[0] : "";
                                },
                                parseEnglishSuggestions (value) {
                                    const text = value || "";
                                    if (!text) return [];
                                    const parts = text.split("|");
                                    const output = [];
                                    for(let i = 0; i < parts.length && output.length < 30; i++){
                                        const item = parts[i];
                                        if (item) output.push(item);
                                    }
                                    return output;
                                }
                            };
                        };
                        var $app_template$ = function(vm) {
                            const _vm_ = vm || this;
                            return aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "page"
                                    ],
                                    style: {
                                        flexDirection: "column"
                                    },
                                    show: function() {
                                        return !_vm_.hide;
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        style: {
                                            backgroundColor: "black"
                                        }
                                    }
                                }, [
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "circle" === _vm_.screentype;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    style: {
                                                        width: "480px",
                                                        height: "321px"
                                                    }
                                                }
                                            }, [
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "T9" != _vm_.keyboardtype;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                id: "full-keyboard",
                                                                style: {
                                                                    width: "480px",
                                                                    height: "321px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "78px",
                                                                        width: "324px",
                                                                        height: "52px",
                                                                        backgroundColor: "rgb(38, 38, 38)",
                                                                        borderRadius: "12px",
                                                                        borderTopColor: "#333333",
                                                                        borderRightColor: "#333333",
                                                                        borderBottomColor: "#333333",
                                                                        borderLeftColor: "#333333",
                                                                        borderStyle: "solid",
                                                                        borderTopWidth: "3px",
                                                                        borderRightWidth: "3px",
                                                                        borderBottomWidth: "3px",
                                                                        borderLeftWidth: "3px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    show: function() {
                                                                        return _vm_.resultList.length > 0;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "43px",
                                                                        left: "355px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/full/down.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("image", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            src: function() {
                                                                                return "/components/InputMethod/assets/full/" + _vm_.lang + ".png";
                                                                            },
                                                                            style: {
                                                                                position: "absolute",
                                                                                top: "38px",
                                                                                left: "7px",
                                                                                width: "67px",
                                                                                height: "52px"
                                                                            },
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onBtnClick("lang", evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "-4px",
                                                                        left: "78px",
                                                                        width: "324px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "caltext"
                                                                        ],
                                                                        style: {
                                                                            width: "296px"
                                                                        },
                                                                        value: function() {
                                                                            return _vm_.cval + "_";
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("scroll", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    id: "circleChineseCandidates",
                                                                    scrollX: function() {
                                                                        return true;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "80px",
                                                                        width: "277px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "cn" === _vm_.lang && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            height: "52px",
                                                                            flexDirection: "row",
                                                                            alignItems: "center"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.cvalList;
                                                                            },
                                                                            key: "$idx",
                                                                            value: "$item"
                                                                        }
                                                                    }, function($idx, $item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    show: function() {
                                                                                        return _vm_.resultList.length > $idx;
                                                                                    },
                                                                                    classList: [
                                                                                        "circle-en-candidate"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return _vm_.resultList[$idx];
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ])
                                                            ]),
                                                            aiot.__ce__("scroll", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    id: "circleEnglishCandidates",
                                                                    scrollX: function() {
                                                                        return true;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "80px",
                                                                        width: "277px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "en" === _vm_.lang && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            height: "52px",
                                                                            flexDirection: "row",
                                                                            alignItems: "center"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.cvalList;
                                                                            },
                                                                            key: "$idx",
                                                                            value: "$item"
                                                                        }
                                                                    }, function($idx, $item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    show: function() {
                                                                                        return _vm_.resultList.length > $idx;
                                                                                    },
                                                                                    classList: [
                                                                                        "circle-en-candidate"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return _vm_.resultList[$idx];
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ])
                                                            ]),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("list", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "list3"
                                                                            ]
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.resultList2;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "itemArray"
                                                                            }
                                                                        }, function($idx, itemArray) {
                                                                            return [
                                                                                aiot.__ce__("list-item", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        type: "waitingRows62t9",
                                                                                        classList: [
                                                                                            "item3"
                                                                                        ]
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return itemArray;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("div", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "item",
                                                                                                        "column",
                                                                                                        "center"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        height: "52px"
                                                                                                    }
                                                                                                }
                                                                                            }, [
                                                                                                aiot.__ce__("input", {
                                                                                                    __vm__: _vm_,
                                                                                                    __opts__: {
                                                                                                        classList: [
                                                                                                            "calbtn0"
                                                                                                        ],
                                                                                                        style: {
                                                                                                            width: "100%"
                                                                                                        },
                                                                                                        type: "button",
                                                                                                        value: function() {
                                                                                                            return item;
                                                                                                        },
                                                                                                        events: {
                                                                                                            click: function(evt) {
                                                                                                                return _vm_.onRsSelect(item, evt);
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }, [])
                                                                                            ])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "95px",
                                                                        left: "8px",
                                                                        width: "464px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/Q.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("Q", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["full62"][0];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/P.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("P", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "152px",
                                                                        left: "23px",
                                                                        width: "438px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/btA.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("A", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["full62"][1];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/L.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("L", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "209px",
                                                                        left: "56px",
                                                                        width: "368px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/Z.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("Z", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["full62"][2];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/M.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("M", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "95px",
                                                                        left: "8px",
                                                                        width: "464px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/1.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("1", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !!_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62_jp"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/0.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("0", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "152px",
                                                                        left: "23px",
                                                                        width: "438px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/2-1.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("~", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !!_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62_jp"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/2-2.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("?", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "209px",
                                                                        left: "56px",
                                                                        width: "368px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/3-1.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("(", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !!_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62_jp"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/3-2.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("\u3001", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/del.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "406px",
                                                                        width: "67px",
                                                                        height: "52px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/space.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "242px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("space", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/4-2.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "242px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onSelect("\u3002", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/4-1.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onSelect("\uFF0C", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag && !_vm_.numFlag_jp;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/4-1.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onSelect("\u3001", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag_jp;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "204px",
                                                                        left: "78px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/full/up.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return !("T9" != _vm_.keyboardtype);
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    width: "480px",
                                                                    height: "321px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "95px",
                                                                        width: "290px",
                                                                        height: "60px",
                                                                        backgroundColor: "rgb(38, 38, 38)",
                                                                        borderRadius: "999px",
                                                                        borderTopColor: "#333333",
                                                                        borderRightColor: "#333333",
                                                                        borderBottomColor: "#333333",
                                                                        borderLeftColor: "#333333",
                                                                        borderStyle: "solid",
                                                                        borderTopWidth: "3px",
                                                                        borderRightWidth: "3px",
                                                                        borderBottomWidth: "3px",
                                                                        borderLeftWidth: "3px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    show: function() {
                                                                        return _vm_.resultList.length > 0;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "44px",
                                                                        left: "338px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/full/down.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("image", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            src: function() {
                                                                                return "/components/InputMethod/assets/t9/" + _vm_.lang + ".png";
                                                                            },
                                                                            style: {
                                                                                position: "absolute",
                                                                                top: "35px",
                                                                                left: "31px",
                                                                                width: "60px",
                                                                                height: "60px"
                                                                            },
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onBtnClick("lang", evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "-4px",
                                                                        left: "95px",
                                                                        width: "145px",
                                                                        height: "40px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "caltext"
                                                                        ],
                                                                        style: {
                                                                            width: "145px"
                                                                        },
                                                                        value: function() {
                                                                            return _vm_.cval + "_";
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "-4px",
                                                                        left: "240px",
                                                                        width: "145px",
                                                                        height: "40px",
                                                                        justifyContent: "flex-end"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.waitingList;
                                                                        },
                                                                        key: "$idx",
                                                                        value: "$item"
                                                                    }
                                                                }, function($idx, $item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "waiting-keys"
                                                                                ],
                                                                                style: function() {
                                                                                    return __webpack_require__.g.$translateStyle$("color:" + ($idx === _vm_.waitingIndex ? "rgb(13,132,255)" : "white") + ";");
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelectWaiting($idx, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return _vm_.waitingList[$idx];
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("scroll", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    id: "circleT9Candidates",
                                                                    scrollX: function() {
                                                                        return true;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "39px",
                                                                        left: "105px",
                                                                        width: "233px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return ("cn" === _vm_.lang || "en" === _vm_.lang) && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            height: "52px",
                                                                            flexDirection: "row",
                                                                            alignItems: "center"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.cvalList;
                                                                            },
                                                                            key: "$idx",
                                                                            value: "$item"
                                                                        }
                                                                    }, function($idx, $item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    show: function() {
                                                                                        return _vm_.resultList.length > $idx;
                                                                                    },
                                                                                    classList: [
                                                                                        "circle-en-candidate"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return _vm_.resultList[$idx];
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ])
                                                            ]),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("list", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "list3"
                                                                            ]
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.resultList2;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "itemArray"
                                                                            }
                                                                        }, function($idx, itemArray) {
                                                                            return [
                                                                                aiot.__ce__("list-item", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        type: "waitingRows62full",
                                                                                        classList: [
                                                                                            "item3"
                                                                                        ]
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return itemArray;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("div", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "item",
                                                                                                        "column",
                                                                                                        "center"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        height: "52px"
                                                                                                    }
                                                                                                }
                                                                                            }, [
                                                                                                aiot.__ce__("input", {
                                                                                                    __vm__: _vm_,
                                                                                                    __opts__: {
                                                                                                        classList: [
                                                                                                            "calbtn0"
                                                                                                        ],
                                                                                                        style: {
                                                                                                            width: "100%"
                                                                                                        },
                                                                                                        type: "button",
                                                                                                        value: function() {
                                                                                                            return item;
                                                                                                        },
                                                                                                        events: {
                                                                                                            click: function(evt) {
                                                                                                                return _vm_.onRsSelect(item, evt);
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }, [])
                                                                                            ])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("select", evt);
                                                                            }
                                                                        },
                                                                        value: "选择"
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["t9"][0];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnt9"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item.toUpperCase();
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "163px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["t9"][1];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnt9"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item.toUpperCase();
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "227px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["t9"][2];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnt9"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item.toUpperCase();
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("7", evt);
                                                                            }
                                                                        },
                                                                        value: "7"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("8", evt);
                                                                            }
                                                                        },
                                                                        value: "8"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("9", evt);
                                                                            }
                                                                        },
                                                                        value: "9"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("4", evt);
                                                                            }
                                                                        },
                                                                        value: "4"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("5", evt);
                                                                            }
                                                                        },
                                                                        value: "5"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("6", evt);
                                                                            }
                                                                        },
                                                                        value: "6"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "163px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("1", evt);
                                                                            }
                                                                        },
                                                                        value: "1"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("2", evt);
                                                                            }
                                                                        },
                                                                        value: "2"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("3", evt);
                                                                            }
                                                                        },
                                                                        value: "3"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "227px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("\uFF0C", evt);
                                                                            }
                                                                        },
                                                                        value: "，"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("0", evt);
                                                                            }
                                                                        },
                                                                        value: "0"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("\u3002", evt);
                                                                            }
                                                                        },
                                                                        value: "。"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/t9/del.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "389px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/t9/space.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "389px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("space", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "204px",
                                                                        left: "78px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/full/up.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "rect" === _vm_.screentype;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    style: {
                                                        width: "100%",
                                                        height: "255px",
                                                        flexDirection: "column"
                                                    }
                                                }
                                            }, [
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "T9" == _vm_.keyboardtype && !_vm_.numFlag;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-11px",
                                                                    width: "100%",
                                                                    height: "276px",
                                                                    justifyContent: "center"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        top: "77px",
                                                                        height: "189px",
                                                                        width: "100%",
                                                                        alignItems: "stretch",
                                                                        justifyContent: "space-between",
                                                                        flexDirection: "column",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "3px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "3px"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "keyboard-rows-rect-t9"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "calbtnt9",
                                                                                "calbtnt9-rect"
                                                                            ],
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onSelect("select", evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("span", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                value: "选择"
                                                                            }
                                                                        }),
                                                                        aiot.__ci__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                shown: function() {
                                                                                    return 0 != _vm_.waitingList.length;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("span", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "waiting-keys"
                                                                                        ],
                                                                                        style: {
                                                                                            color: "rgb(13, 132, 255)"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelectWaiting(_vm_.waitingIndex, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return _vm_.waitingList[_vm_.waitingIndex].toUpperCase();
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.keys["t9"][0];
                                                                            },
                                                                            key: "$idx",
                                                                            value: "item"
                                                                        }
                                                                    }, function($idx, item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9",
                                                                                        "calbtnt9-rect"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect(item, evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return item.toUpperCase();
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ]),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "keyboard-rows-rect-t9"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.keys["t9"][1];
                                                                            },
                                                                            key: "$idx",
                                                                            value: "item"
                                                                        }
                                                                    }, function($idx, item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9",
                                                                                        "calbtnt9-rect"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect(item, evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return item.toUpperCase();
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ]),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "keyboard-rows-rect-t9"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.keys["t9"][2];
                                                                            },
                                                                            key: "$idx",
                                                                            value: "item"
                                                                        }
                                                                    }, function($idx, item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9",
                                                                                        "calbtnt9-rect"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect(item, evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return item.toUpperCase();
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ])
                                                            ])
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return !("T9" == _vm_.keyboardtype && !_vm_.numFlag);
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-11px",
                                                                    width: "100%",
                                                                    height: "276px",
                                                                    justifyContent: "center"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("progress", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    percent: function() {
                                                                        return _vm_.percent67;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        bottom: "12px",
                                                                        width: "80px",
                                                                        color: "#ffffff",
                                                                        strokeWidth: "6px",
                                                                        layerColor: "#262626"
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("scroll", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    id: "keyboard67",
                                                                    scrollX: function() {
                                                                        return true;
                                                                    },
                                                                    events: {
                                                                        scroll: function(evt) {
                                                                            return _vm_.handelScroll(evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    left: "6px",
                                                                                    flexDirection: "column"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "0px",
                                                                                        marginTop: "0px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["full"][0];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "32px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["full"][1];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "64px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["full"][2];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                }),
                                                                                aiot.__ce__("image", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        src: "/components/InputMethod/assets/horizontal/space.png",
                                                                                        style: {
                                                                                            width: "60px",
                                                                                            height: "60px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onBtnClick("space", evt);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ])
                                                                        ])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return _vm_.numFlag && !_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    left: "6px",
                                                                                    flexDirection: "column"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "0px",
                                                                                        marginTop: "0px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign"][0];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "32px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign"][1];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "64px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign"][2];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return _vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    left: "6px",
                                                                                    flexDirection: "column"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "0px",
                                                                                        marginTop: "0px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign_jp"][0];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "32px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign_jp"][1];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "64px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign_jp"][2];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ])
                                                                    ];
                                                                })
                                                            ])
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        style: {
                                                            width: "100%",
                                                            flexDirection: "row",
                                                            justifyContent: "center",
                                                            top: "6px",
                                                            paddingTop: "0",
                                                            paddingRight: "6px",
                                                            paddingBottom: "0",
                                                            paddingLeft: "6px"
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/cn.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("lang", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return ("cn" === _vm_.lang || "en" === _vm_.lang) && !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        flex: 1,
                                                                        height: "60px",
                                                                        backgroundColor: "#262626",
                                                                        borderTopColor: "#333333",
                                                                        borderRightColor: "#333333",
                                                                        borderBottomColor: "#333333",
                                                                        borderLeftColor: "#333333",
                                                                        borderTopWidth: "3px",
                                                                        borderRightWidth: "3px",
                                                                        borderBottomWidth: "3px",
                                                                        borderLeftWidth: "3px",
                                                                        borderRadius: "100px",
                                                                        flexDirection: "row",
                                                                        alignItems: "center",
                                                                        position: "relative"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("scroll", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        id: "cvalWaiting",
                                                                        scrollX: function() {
                                                                            return true;
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            width: "100%",
                                                                            height: "42px"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                position: "absolute",
                                                                                left: "20px",
                                                                                height: "42px",
                                                                                paddingRight: "60px",
                                                                                flexDirection: "row",
                                                                                alignItems: "center"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtn02"
                                                                                ],
                                                                                style: {
                                                                                    paddingRight: "10px",
                                                                                    flexShrink: 0
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.pushCval(evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return _vm_.cval;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.cvalList;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "$item"
                                                                            }
                                                                        }, function($idx, $item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        show: function() {
                                                                                            return _vm_.resultList.length > $idx;
                                                                                        },
                                                                                        classList: [
                                                                                            "calbtn02"
                                                                                        ],
                                                                                        style: {
                                                                                            paddingRight: "10px",
                                                                                            flexShrink: 0
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return _vm_.resultList[$idx];
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ]),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return _vm_.resultList.length > 0;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    right: "8px",
                                                                                    width: "60px",
                                                                                    height: "40px"
                                                                                },
                                                                                src: "/components/InputMethod/assets/horizontal/down2.png",
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("down", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/en.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("lang", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/del.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return !!_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/del2.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    })
                                                ]),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "down" === _vm_.downFlag;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    left: "0px",
                                                                    top: "0px",
                                                                    width: "100%",
                                                                    height: "252px",
                                                                    backgroundColor: "black",
                                                                    justifyContent: "center",
                                                                    flexDirection: "column",
                                                                    alignItems: "center"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("list", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "list67"
                                                                    ]
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.resultList2;
                                                                        },
                                                                        key: "$idx",
                                                                        value: "itemArray"
                                                                    }
                                                                }, function($idx, itemArray) {
                                                                    return [
                                                                        aiot.__ce__("list-item", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                type: "waitingRows67",
                                                                                classList: [
                                                                                    "item67"
                                                                                ]
                                                                            }
                                                                        }, [
                                                                            aiot.__cf__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    exp: function() {
                                                                                        return itemArray;
                                                                                    },
                                                                                    key: "$idx",
                                                                                    value: "item"
                                                                                }
                                                                            }, function($idx, item) {
                                                                                return [
                                                                                    aiot.__ce__("div", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            classList: [
                                                                                                "item",
                                                                                                "column",
                                                                                                "center"
                                                                                            ]
                                                                                        }
                                                                                    }, [
                                                                                        aiot.__ce__("input", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn02"
                                                                                                ],
                                                                                                style: {
                                                                                                    width: "100%"
                                                                                                },
                                                                                                type: "button",
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                },
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onRsSelect(item, evt);
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ])
                                                                                ];
                                                                            })
                                                                        ])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        marginTop: "5px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/horizontal/up2.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "pill-shaped" === _vm_.screentype;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    style: {
                                                        width: "100%",
                                                        height: "305px"
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        style: {
                                                            position: "absolute",
                                                            left: "0px",
                                                            top: "34px",
                                                            width: "100%",
                                                            height: "276px"
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("progress", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            percent: function() {
                                                                return 30 + _vm_.percent66;
                                                            },
                                                            type: "arc",
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$("start-angle:204deg;total-angle:-48deg;width:188px;height:188px;top:82px;left:2px;position:absolute;color:#ffffff;stroke-width:6px;layer-color:#262626;margin-left: " + _vm_.keyboardLeftOffset + "px;");
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("scroll", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            id: "keyboard66",
                                                            scrollX: function() {
                                                                return true;
                                                            },
                                                            events: {
                                                                scroll: function(evt) {
                                                                    return _vm_.handelScroll(evt);
                                                                }
                                                            },
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$("padding-left: " + _vm_.keyboardLeftOffset + "px;padding-right: " + _vm_.keyboardLeftOffset + "px;");
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return !_vm_.numFlag;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            left: "3px",
                                                                            flexDirection: "column"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "0px",
                                                                                marginTop: "0px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["full"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "32px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["full"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "64px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["full"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        }),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/arc/space.png",
                                                                                style: {
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("space", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ])
                                                                ])
                                                            ];
                                                        }),
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return _vm_.numFlag && !_vm_.numFlag_jp;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            left: "3px",
                                                                            flexDirection: "column"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "0px",
                                                                                marginTop: "0px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "32px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "64px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ])
                                                            ];
                                                        }),
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return _vm_.numFlag_jp;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            left: "3px",
                                                                            flexDirection: "column"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "0px",
                                                                                marginTop: "0px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign_jp"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "32px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign_jp"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "64px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign_jp"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ])
                                                            ];
                                                        })
                                                    ])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        style: function() {
                                                            return __webpack_require__.g.$translateStyle$("position: absolute;left: " + _vm_.keyboardLeftOffset + "px;top: 0px;width: 192px;height: 110px;");
                                                        },
                                                        static: true
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            style: {
                                                                position: "absolute",
                                                                left: "3px",
                                                                top: "47px",
                                                                width: "186px",
                                                                height: "60px"
                                                            },
                                                            src: "/components/InputMethod/assets/arc/search.png"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("scroll", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            id: "cvalWaiting",
                                                            scrollX: function() {
                                                                return true;
                                                            },
                                                            style: {
                                                                position: "absolute",
                                                                left: "15px",
                                                                top: "56px",
                                                                width: "144px",
                                                                height: "42px"
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    left: "0px",
                                                                    top: "0px",
                                                                    height: "42px",
                                                                    paddingRight: "20px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "calbtn02"
                                                                    ],
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.pushCval(evt);
                                                                        }
                                                                    },
                                                                    value: function() {
                                                                        return _vm_.cval;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__cf__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    exp: function() {
                                                                        return _vm_.cvalList;
                                                                    },
                                                                    key: "$idx",
                                                                    value: "$item"
                                                                }
                                                            }, function($idx, $item) {
                                                                return [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            show: function() {
                                                                                return _vm_.resultList.length > $idx;
                                                                            },
                                                                            classList: [
                                                                                "calbtn02"
                                                                            ],
                                                                            style: {
                                                                                paddingRight: "10px"
                                                                            },
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                }
                                                                            },
                                                                            value: function() {
                                                                                return _vm_.resultList[$idx];
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ];
                                                            })
                                                        ])
                                                    ]),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            show: function() {
                                                                return _vm_.resultList.length > 0;
                                                            },
                                                            style: {
                                                                position: "absolute",
                                                                left: "120px",
                                                                top: "57px",
                                                                width: "60px",
                                                                height: "40px"
                                                            },
                                                            src: "/components/InputMethod/assets/arc/down2.png",
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("down", evt);
                                                                }
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: function() {
                                                                return "/components/InputMethod/assets/arc/" + _vm_.lang + ".png";
                                                            },
                                                            style: {
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "9px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("lang", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && !_vm_.numFlag_jp;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/components/InputMethod/assets/arc/del.png",
                                                            style: {
                                                                position: "absolute",
                                                                left: "135px",
                                                                top: "0px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("D", evt);
                                                                }
                                                            }
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "down" === _vm_.downFlag;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "47px",
                                                                    width: "100%",
                                                                    height: "263px",
                                                                    backgroundColor: "black"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: function() {
                                                                        return __webpack_require__.g.$translateStyle$("position: absolute;left: " + _vm_.keyboardLeftOffset + "px;width: 192px;height: 263px;");
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("list", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "list66"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.resultList2;
                                                                            },
                                                                            key: "$idx",
                                                                            value: "itemArray"
                                                                        }
                                                                    }, function($idx, itemArray) {
                                                                        return [
                                                                            aiot.__ce__("list-item", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    type: "waitingRows66",
                                                                                    classList: [
                                                                                        "item66"
                                                                                    ]
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return itemArray;
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "item",
                                                                                                    "column",
                                                                                                    "center"
                                                                                                ]
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__ce__("input", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn0"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        width: "100%"
                                                                                                    },
                                                                                                    type: "button",
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(item, evt);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ];
                                                                    })
                                                                ]),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "196px",
                                                                            left: "56px",
                                                                            width: "80px",
                                                                            height: "60px"
                                                                        },
                                                                        src: "/components/InputMethod/assets/arc/up2.png",
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("down", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    })
                                ])
                            ]);
                        };
                        module.exports = function($app_exports$) {
                            $app_script$({}, $app_exports$, $app_require$1);
                            $app_exports$.default.template = $app_template$;
                            $app_exports$.default.style = $app_style$;
                        };
                    },
                    "./src/common/buildTarget.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var TARGET_ID = "W432";
                        var TARGET_WIDTH = 432;
                        var TARGET_HEIGHT = 514;
                        var TARGET_PROFILE = "rect";
                        var TARGET_SHAPE = "rect";
                        var _default = exports["default"] = {
                            id: TARGET_ID,
                            width: TARGET_WIDTH,
                            height: TARGET_HEIGHT,
                            profile: TARGET_PROFILE,
                            shape: TARGET_SHAPE
                        };
                    },
                    "./src/common/dictCodec.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.decodeDeltaIds = decodeDeltaIds;
                        exports.decodePrefixField = decodePrefixField;
                        exports.parseBase36 = parseBase36;
                        exports.parseInflectionValue = parseInflectionValue;
                        const BASE36_DIGITS = "0123456789abcdefghijklmnopqrstuvwxyz";
                        const BASE64URL_DIGITS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
                        function parseBase36(value) {
                            if ("string" != typeof value || !/^[0-9a-z]+$/.test(value)) return -1;
                            let result = 0;
                            for(let i = 0; i < value.length; i++){
                                const digit = BASE36_DIGITS.indexOf(value.charAt(i));
                                if (digit < 0) return -1;
                                result = 36 * result + digit;
                                if (result > 9007199254740991) return -1;
                            }
                            return result;
                        }
                        function decodePrefixField(value, previous) {
                            if ("string" != typeof value || !value || "string" != typeof previous) return null;
                            const prefixLength = BASE36_DIGITS.indexOf(value.charAt(0));
                            if (prefixLength < 0 || prefixLength > previous.length) return null;
                            return previous.slice(0, prefixLength) + value.slice(1);
                        }
                        function decodeBase64Bytes(value) {
                            if ("string" != typeof value || !value || !/^[A-Za-z0-9_-]+$/.test(value) || value.length % 4 === 1) return null;
                            const bytes = [];
                            let accumulator = 0;
                            let bitCount = 0;
                            for(let i = 0; i < value.length; i++){
                                const digit = BASE64URL_DIGITS.indexOf(value.charAt(i));
                                if (digit < 0) return null;
                                accumulator = 64 * accumulator + digit;
                                bitCount += 6;
                                while(bitCount >= 8){
                                    bitCount -= 8;
                                    const divisor = Math.pow(2, bitCount);
                                    bytes.push(0xff & Math.floor(accumulator / divisor));
                                    accumulator %= divisor;
                                }
                            }
                            if (bitCount > 0 && (accumulator & (1 << bitCount) - 1) !== 0) return null;
                            return bytes;
                        }
                        function decodeDeltaIds(value) {
                            const bytes = decodeBase64Bytes(value);
                            if (!bytes) return [];
                            const ids = [];
                            let current = 0;
                            let delta = 0;
                            let shift = 0;
                            for(let i = 0; i < bytes.length; i++){
                                const byte = bytes[i];
                                const payload = 0x7f & byte;
                                if (shift > 53 || 53 === shift && payload > 1) return [];
                                delta += payload * Math.pow(2, shift);
                                if (0x80 & byte) {
                                    shift += 7;
                                    continue;
                                }
                                current += delta;
                                if (ids.length > 0 && current <= ids[ids.length - 1]) return [];
                                if (current < 0 || current > 14941) return [];
                                ids.push(current);
                                delta = 0;
                                shift = 0;
                            }
                            if (0 !== shift || 0 === ids.length) return [];
                            return ids;
                        }
                        function parseInflectionValue(value) {
                            if ("string" != typeof value || !value) return null;
                            if ("@" === value.charAt(0)) {
                                const entryId = parseBase36(value.slice(1));
                                return entryId >= 0 ? {
                                    entryId: entryId
                                } : null;
                            }
                            return {
                                word: value
                            };
                        }
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
                    "./src/common/suggestionState.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.getSuggestionSeed = getSuggestionSeed;
                        exports.getSuggestions = getSuggestions;
                        exports.onSuggestionsChange = onSuggestionsChange;
                        exports.setSuggestionSeed = setSuggestionSeed;
                        exports.setSuggestions = setSuggestions;
                        let _seed = "";
                        let _suggestions = "";
                        let _callback = null;
                        function getSuggestionSeed() {
                            return _seed;
                        }
                        function setSuggestionSeed(v) {
                            _seed = v;
                        }
                        function getSuggestions() {
                            return _suggestions;
                        }
                        function setSuggestions(v) {
                            _suggestions = v;
                            if (_callback) _callback(v);
                        }
                        function onSuggestionsChange(cb) {
                            _callback = cb;
                        }
                    },
                    "./src/components/InputMethod/assets/dic.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.dict = void 0;
                        const dict = exports.dict = {
                            a: "阿啊呵腌嗄吖锕",
                            e: "额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",
                            ai: "爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",
                            ei: "诶",
                            xi: "系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",
                            yi: "一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",
                            an: "安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",
                            han: "厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",
                            ang: "昂仰盎肮",
                            ao: "奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",
                            wa: "瓦挖娃洼袜蛙凹哇佤娲呙腽",
                            yu: "于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",
                            niu: "牛纽扭钮拗妞忸狃",
                            o: "哦噢喔",
                            ba: "把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",
                            pa: "怕帕爬扒趴琶啪葩耙杷钯筢",
                            pi: "被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",
                            bi: "比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",
                            bai: "百白败摆伯拜柏佰掰呗擘捭稗",
                            bo: "波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",
                            bei: "北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",
                            ban: "办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",
                            pan: "判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",
                            bin: "份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",
                            bang: "帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",
                            pang: "旁庞乓磅螃彷滂逄耪",
                            beng: "泵崩蚌蹦迸绷甭嘣甏堋",
                            bao: "报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",
                            bu: "不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",
                            pu: "普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",
                            mian: "面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",
                            po: "破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",
                            fan: "反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",
                            fu: "府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",
                            ben: "本体奔苯笨夯贲锛畚坌",
                            feng: "风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",
                            bian: "变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",
                            pian: "便片篇偏骗翩扁骈胼蹁谝犏缏",
                            zhen: "镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",
                            biao: "表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",
                            piao: "票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",
                            huo: "和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",
                            bie: "别鳖憋瘪蹩",
                            min: "民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",
                            fen: "分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",
                            bing: "并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",
                            geng: "更耕颈庚耿梗埂羹哽赓绠鲠",
                            fang: "方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",
                            xian: "现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",
                            fou: "不否缶",
                            ca: "拆擦嚓礤",
                            cha: "查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",
                            cai: "才采财材菜彩裁蔡猜踩睬",
                            can: "参残餐灿惨蚕掺璨惭粲孱骖黪",
                            shen: "信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",
                            cen: "参岑涔",
                            san: "三参散伞叁糁馓毵",
                            cang: "藏仓苍沧舱臧伧",
                            zang: "藏脏葬赃臧奘驵",
                            chen: "称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",
                            cao: "草操曹槽糙嘈漕螬艚屮",
                            ce: "策测册侧厕栅恻",
                            ze: "责则泽择侧咋啧仄箦赜笮舴昃迮帻",
                            zhai: "债择齐宅寨侧摘窄斋祭翟砦瘵哜",
                            dao: "到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",
                            ceng: "层曾蹭噌",
                            zha: "查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",
                            chai: "差拆柴钗豺侪虿瘥",
                            ci: "次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",
                            zi: "资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",
                            cuo: "措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",
                            chan: "产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",
                            shan: "山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",
                            zhan: "展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",
                            xin: "新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",
                            lian: "联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",
                            chang: "场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",
                            zhang: "长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",
                            chao: "超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",
                            zhao: "着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",
                            zhou: "调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",
                            che: "车彻撤尺扯澈掣坼砗屮",
                            ju: "车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",
                            cheng: "成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",
                            rong: "容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",
                            sheng: "生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",
                            deng: "等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",
                            zhi: "制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",
                            zheng: "政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",
                            tang: "堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",
                            chi: "持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",
                            shi: "是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",
                            qi: "企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",
                            chuai: "揣踹啜搋膪",
                            tuo: "托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",
                            duo: "多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",
                            xue: "学血雪削薛穴靴谑噱鳕踅泶彐",
                            chong: "重种充冲涌崇虫宠忡憧舂茺铳艟",
                            chou: "筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",
                            qiu: "求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",
                            xiu: "修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",
                            chu: "出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",
                            tuan: "团揣湍疃抟彖",
                            zhui: "追坠缀揣椎锥赘惴隹骓缒",
                            chuan: "传川船穿串喘椽舛钏遄氚巛舡",
                            zhuan: "专转传赚砖撰篆馔啭颛",
                            yuan: "元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",
                            cuan: "窜攒篡蹿撺爨汆镩",
                            chuang: "创床窗闯幢疮怆",
                            zhuang: "装状庄壮撞妆幢桩奘僮戆",
                            chui: "吹垂锤炊椎陲槌捶棰",
                            chun: "春纯醇淳唇椿蠢鹑朐莼肫蝽",
                            zhun: "准屯淳谆肫窀",
                            cu: "促趋趣粗簇醋卒蹴猝蹙蔟殂徂",
                            dun: "吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",
                            qu: "区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",
                            xu: "需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",
                            chuo: "辍绰戳淖啜龊踔辶",
                            zu: "组族足祖租阻卒俎诅镞菹",
                            ji: "济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",
                            cong: "从丛匆聪葱囱琮淙枞骢苁璁",
                            zong: "总从综宗纵踪棕粽鬃偬枞腙",
                            cou: "凑辏腠楱",
                            cui: "衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",
                            wei: "为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",
                            cun: "村存寸忖皴",
                            zuo: "作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",
                            zuan: "钻纂攥缵躜",
                            da: "大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",
                            dai: "大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",
                            tai: "大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",
                            ta: "他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",
                            dan: "但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",
                            lu: "路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",
                            tan: "谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",
                            ren: "人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",
                            jie: "家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",
                            yan: "研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",
                            dang: "当党档荡挡宕砀铛裆凼菪谠",
                            tao: "套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",
                            tiao: "条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",
                            te: "特忑忒铽慝",
                            de: "的地得德底锝",
                            dei: "得",
                            di: "的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",
                            ti: "体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",
                            tui: "推退弟腿褪颓蜕忒煺",
                            you: "有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",
                            dian: "电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",
                            tian: "天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",
                            zhu: "主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",
                            nian: "年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",
                            diao: "调掉雕吊钓刁貂凋碉鲷叼铫铞",
                            yao: "要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",
                            die: "跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",
                            she: "设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",
                            ye: "业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",
                            xie: "些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",
                            zhe: "这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",
                            ding: "定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",
                            diu: "丢铥",
                            ting: "听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",
                            dong: "动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",
                            tong: "同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",
                            zhong: "中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",
                            dou: "都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",
                            du: "度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",
                            duan: "断段短端锻缎煅椴簖",
                            dui: "对队追敦兑堆碓镦怼憝",
                            rui: "瑞兑锐睿芮蕊蕤蚋枘",
                            yue: "月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",
                            tun: "吞屯囤褪豚臀饨暾氽",
                            hui: "会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",
                            wu: "务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",
                            ya: "亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",
                            he: "和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",
                            wo: "我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",
                            en: "恩摁蒽",
                            n: "嗯唔",
                            er: "而二尔儿耳迩饵洱贰铒珥佴鸸鲕",
                            fa: "发法罚乏伐阀筏砝垡珐",
                            quan: "全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",
                            fei: "费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",
                            pei: "配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",
                            ping: "平评凭瓶冯屏萍苹乒坪枰娉俜鲆",
                            fo: "佛",
                            hu: "和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",
                            ga: "夹咖嘎尬噶旮伽尕钆尜",
                            ge: "个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",
                            ha: "哈蛤铪",
                            xia: "下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",
                            gai: "改该盖概溉钙丐芥赅垓陔戤",
                            hai: "海还害孩亥咳骸骇氦嗨胲醢",
                            gan: "干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",
                            gang: "港钢刚岗纲冈杠缸扛肛罡戆筻",
                            jiang: "将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",
                            hang: "行航杭巷夯吭桁沆绗颃",
                            gong: "工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",
                            hong: "红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",
                            guang: "广光逛潢犷胱咣桄",
                            qiong: "穷琼穹邛茕筇跫蛩銎",
                            gao: "高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",
                            hao: "好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",
                            li: "理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",
                            jia: "家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",
                            luo: "落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",
                            ke: "可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",
                            qia: "卡恰洽掐髂袷咭葜",
                            gei: "给",
                            gen: "根跟亘艮哏茛",
                            hen: "很狠恨痕哏",
                            gou: "构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",
                            kou: "口扣寇叩抠佝蔻芤眍筘",
                            gu: "股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",
                            pai: "牌排派拍迫徘湃俳哌蒎",
                            gua: "括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",
                            tou: "投头透偷愉骰亠",
                            guai: "怪拐乖",
                            kuai: "会快块筷脍蒯侩浍郐蒉狯哙",
                            guan: "关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",
                            wan: "万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",
                            ne: "呢哪呐讷疒",
                            gui: "规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",
                            jun: "军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",
                            jiong: "窘炯迥炅冂扃",
                            jue: "决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",
                            gun: "滚棍辊衮磙鲧绲丨",
                            hun: "婚混魂浑昏棍珲荤馄诨溷阍",
                            guo: "国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",
                            hei: "黑嘿嗨",
                            kan: "看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",
                            heng: "衡横恒亨哼珩桁蘅",
                            mo: "万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",
                            peng: "鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",
                            hou: "后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",
                            hua: "化华划话花画滑哗豁骅桦猾铧砉",
                            huai: "怀坏淮徊槐踝",
                            huan: "还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",
                            xun: "讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",
                            huang: "黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",
                            nai: "能乃奶耐奈鼐萘氖柰佴艿",
                            luan: "乱卵滦峦鸾栾銮挛孪脔娈",
                            qie: "切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",
                            jian: "建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",
                            nan: "南难男楠喃囡赧腩囝蝻",
                            qian: "前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",
                            qiang: "强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",
                            xiang: "向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",
                            jiao: "教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",
                            zhuo: "着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",
                            qiao: "桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",
                            xiao: "小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",
                            si: "司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",
                            kai: "开凯慨岂楷恺揩锴铠忾垲剀锎蒈",
                            jin: "进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",
                            qin: "亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",
                            jing: "经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",
                            ying: "应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",
                            jiu: "就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",
                            zui: "最罪嘴醉咀蕞觜",
                            juan: "卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",
                            suan: "算酸蒜狻",
                            yun: "员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",
                            qun: "群裙逡麇",
                            ka: "卡喀咖咔咯佧胩",
                            kang: "康抗扛慷炕亢糠伉钪闶",
                            keng: "坑铿吭",
                            kao: "考靠烤拷铐栲尻犒",
                            ken: "肯垦恳啃龈裉",
                            yin: "因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",
                            kong: "空控孔恐倥崆箜",
                            ku: "苦库哭酷裤枯窟挎骷堀绔刳喾",
                            kua: "跨夸垮挎胯侉",
                            kui: "亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",
                            kuan: "款宽髋",
                            kuang: "况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",
                            que: "确却缺雀鹊阙瘸榷炔阕悫",
                            kun: "困昆坤捆琨锟鲲醌髡悃阃",
                            kuo: "扩括阔廓蛞",
                            la: "拉落垃腊啦辣蜡喇剌旯砬邋瘌",
                            lai: "来莱赖睐徕籁涞赉濑癞崃疠铼",
                            lan: "兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",
                            lin: "林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",
                            lang: "浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",
                            liang: "量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",
                            lao: "老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",
                            mu: "目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",
                            le: "了乐勒肋叻鳓嘞仂泐",
                            lei: "类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",
                            sui: "随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",
                            lie: "列烈劣裂猎冽咧趔洌鬣埒捩躐",
                            leng: "冷愣棱楞塄",
                            ling: "领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",
                            lia: "俩",
                            liao: "了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",
                            liu: "流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",
                            lun: "论轮伦仑纶沦抡囵",
                            lv: "率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",
                            lou: "楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",
                            mao: "贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",
                            long: "龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",
                            nong: "农浓弄脓侬哝",
                            shuang: "双爽霜孀泷",
                            shu: "术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",
                            shuai: "率衰帅摔甩蟀",
                            lve: "略掠锊",
                            ma: "么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",
                            me: "么麽",
                            mai: "买卖麦迈脉埋霾荬劢",
                            man: "满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",
                            mi: "米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",
                            men: "们门闷瞒汶扪焖懑鞔钔",
                            mang: "忙盲茫芒氓莽蟒邙硭漭",
                            meng: "蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",
                            miao: "苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",
                            mou: "某谋牟缪眸哞鍪蛑侔厶",
                            miu: "缪谬",
                            mei: "美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",
                            wen: "文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",
                            mie: "灭蔑篾乜咩蠛",
                            ming: "明名命鸣铭冥茗溟酩瞑螟暝",
                            na: "内南那纳拿哪娜钠呐捺衲镎肭",
                            nei: "内那哪馁",
                            nuo: "难诺挪娜糯懦傩喏搦锘",
                            ruo: "若弱偌箬",
                            nang: "囊馕囔曩攮",
                            nao: "脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",
                            ni: "你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",
                            nen: "嫩恁",
                            neng: "能",
                            nin: "您恁",
                            niao: "鸟尿溺袅脲茑嬲",
                            nie: "摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",
                            niang: "娘酿",
                            ning: "宁凝拧泞柠咛狞佞聍甯",
                            nu: "努怒奴弩驽帑孥胬",
                            nv: "女钕衄恧",
                            ru: "入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",
                            nuan: "暖",
                            nve: "虐疟",
                            re: "热若惹喏",
                            ou: "区欧偶殴呕禺藕讴鸥瓯沤耦怄",
                            pao: "跑炮泡抛刨袍咆疱庖狍匏脬",
                            pou: "剖掊裒",
                            pen: "喷盆湓",
                            pie: "瞥撇苤氕丿",
                            pin: "品贫聘频拼拚颦姘嫔榀牝",
                            se: "色塞瑟涩啬穑铯槭",
                            qing: "情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",
                            zan: "赞暂攒堑昝簪糌瓒錾趱拶",
                            shao: "少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",
                            sao: "扫骚嫂梢缫搔瘙臊埽缲鳋",
                            sha: "沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",
                            xuan: "县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",
                            ran: "然染燃冉苒髯蚺",
                            rang: "让壤攘嚷瓤穰禳",
                            rao: "绕扰饶娆桡荛",
                            reng: "仍扔",
                            ri: "日",
                            rou: "肉柔揉糅鞣蹂",
                            ruan: "软阮朊",
                            run: "润闰",
                            sa: "萨洒撒飒卅仨脎",
                            suo: "所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",
                            sai: "思赛塞腮噻鳃",
                            shui: "说水税谁睡氵",
                            sang: "桑丧嗓搡颡磉",
                            sen: "森",
                            seng: "僧",
                            shai: "筛晒",
                            shang: "上商尚伤赏汤裳墒晌垧觞殇熵绱",
                            xing: "行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",
                            shou: "收手受首售授守寿瘦兽狩绶艏扌",
                            shuo: "说数硕烁朔铄妁槊蒴搠",
                            su: "速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",
                            shua: "刷耍唰",
                            shuan: "栓拴涮闩",
                            shun: "顺瞬舜吮",
                            song: "送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",
                            sou: "艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",
                            sun: "损孙笋荪榫隼狲飧",
                            teng: "腾疼藤滕誊",
                            tie: "铁贴帖餮萜",
                            tu: "土突图途徒涂吐屠兔秃凸荼钍菟堍酴",
                            wai: "外歪崴",
                            wang: "王望往网忘亡旺汪枉妄惘罔辋魍",
                            weng: "翁嗡瓮蓊蕹",
                            zhua: "抓挝爪",
                            yang: "样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",
                            xiong: "雄兄熊胸凶匈汹芎",
                            yo: "哟唷",
                            yong: "用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",
                            za: "杂扎咱砸咋匝咂拶",
                            zai: "在再灾载栽仔宰哉崽甾",
                            zao: "造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",
                            zei: "贼",
                            zen: "怎谮",
                            zeng: "增曾综赠憎锃甑罾缯",
                            zhei: "这",
                            zou: "走邹奏揍诹驺陬楱鄹鲰",
                            zhuai: "转拽",
                            zun: "尊遵鳟樽撙",
                            dia: "嗲",
                            nou: "耨"
                        };
                    },
                    "./src/components/InputMethod/assets/dicUtil.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.SimpleInputMethod = void 0;
                        var _dic = __webpack_require__("./src/components/InputMethod/assets/dic.js");
                        var _dic_jp = __webpack_require__("./src/components/InputMethod/assets/dic_jp.js");
                        let SimpleInputMethod = exports.SimpleInputMethod = {
                            dict: {}
                        };
                        SimpleInputMethod.initDict = function() {
                            this.dict.py2hz = _dic.dict;
                            this.dict.py2hz2 = {};
                            this.dict.py2hz2['i'] = 'i';
                            for(let key in this.dict.py2hz){
                                let ch = key[0];
                                if (!this.dict.py2hz2[ch]) this.dict.py2hz2[ch] = this.dict.py2hz[key];
                            }
                            this.dict.romaji2kanji = _dic_jp.dict;
                        };
                        SimpleInputMethod.getSingleHanzi = function(pinyin, lang = 'cn') {
                            if ('cn' === lang) return this.dict.py2hz2[pinyin] || this.dict.py2hz[pinyin] || '';
                            if ('jp' === lang) return this.dict.romaji2kanji[pinyin] || '';
                            return '';
                        };
                        SimpleInputMethod.getHanzi = function(pinyin, lang = 'cn') {
                            let result = this.getSingleHanzi(pinyin, lang);
                            if (result) return [
                                result.split(''),
                                pinyin
                            ];
                            let max = Math.min(pinyin.length, 6);
                            for(let len = max; len >= 1; len--){
                                let head = pinyin.substr(0, len);
                                let rs = this.getSingleHanzi(head, lang);
                                if (rs) return [
                                    rs.split(''),
                                    head
                                ];
                            }
                            return [
                                [],
                                ''
                            ];
                        };
                        SimpleInputMethod.initDict();
                    },
                    "./src/components/InputMethod/assets/dic_jp.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.dict = void 0;
                        const dict = exports.dict = {
                            ai: "哀挨愛曖相藍",
                            awa: "哀淡併泡",
                            aku: "悪握空",
                            o: "おオ悪汚押下起降緒小織生惜惜折帯置追尾負雄落老和",
                            waru: "悪",
                            nigi: "握",
                            atsu: "圧厚集暑熱",
                            atsuka: "扱",
                            a: "あア宛会開挙合合在充当編飽明明明有余揚浴",
                            arashi: "嵐",
                            an: "安案暗行",
                            yasu: "安休",
                            kura: "暗倉蔵比",
                            i: "いイ以衣位囲医依委威畏胃為尉異移萎偉椅意違彙維慰遺緯易忌居井生逝癒唯要",
                            koromo: "衣",
                            kurai: "位",
                            kako: "囲",
                            e: "えエ依回会絵獲恵江餌重笑得柄",
                            yuda: "委",
                            oso: "畏恐恐教襲遅",
                            koto: "異琴言事殊",
                            utsu: "移鬱映撃写討",
                            na: "なナ萎慣菜成投那奈南納無名鳴",
                            era: "偉選",
                            chiga: "違",
                            nagusa: "慰",
                            yui: "遺由唯",
                            iki: "域粋息",
                            iku: "育幾行",
                            soda: "育",
                            haguku: "育",
                            ichi: "一壱市",
                            itsu: "一逸五",
                            hito: "一人等",
                            ibara: "茨",
                            imo: "芋",
                            in: "引印因咽姻員院淫陰飲隠韻音",
                            hi: "ひヒ引火干灯日比皮妃否批彼披肥非卑飛疲秘秘被悲扉費碑罷避泌氷冷",
                            shirushi: "印",
                            yo: "よヨ因詠寄寄呼四世善代読夜与予余誉預良",
                            mida: "淫乱",
                            kage: "陰陰影",
                            no: "のノ飲延載述乗乗伸野",
                            kaku: "隠画各角拡革格核殻郭覚較隔閣確獲嚇穫客欠",
                            u: "うウ右宇羽雨飢熱植生請打得売浮埋有憂",
                            yuu: "右夕由友有勇幽悠郵湧猶裕遊雄誘憂融優",
                            migi: "右",
                            ha: "はハ羽映栄果果歯刃生晴掃端張貼跳吐把波派破覇剥葉履",
                            hane: "羽",
                            ame: "雨天",
                            ama: "雨甘天尼",
                            uta: "唄歌謡",
                            une: "畝",
                            ura: "浦恨裏",
                            un: "運雲",
                            hako: "運箱",
                            kumo: "雲曇",
                            ei: "永泳英映栄営詠影鋭衛",
                            naga: "永長眺流",
                            oyo: "泳及及",
                            saka: "栄逆逆酒盛坂",
                            itona: "営",
                            surudo: "鋭",
                            eki: "易疫益液駅役",
                            yasa: "易優",
                            yaku: "疫益厄役約訳薬躍",
                            etsu: "悦越謁閲",
                            ko: "こコ越去拠虚凝己戸古呼固孤弧股虎故枯個庫湖雇誇鼓錮顧黄込込混子小超懲濃肥粉木籠",
                            en: "円延沿炎宴怨媛援園煙猿遠鉛塩演縁艶",
                            maru: "円丸丸",
                            so: "そソ沿初染狙阻祖租素措粗組疎訴塑遡礎想添",
                            honoo: "炎",
                            on: "怨遠音恩温穏御",
                            sono: "園",
                            kemu: "煙",
                            kemuri: "煙",
                            saru: "猿",
                            too: "遠十通通",
                            namari: "鉛",
                            shio: "塩潮",
                            fuchi: "縁",
                            tsuya: "艶",
                            kega: "汚",
                            yogo: "汚",
                            kitana: "汚",
                            ou: "王凹央応往押旺欧殴桜翁奥横皇黄",
                            kota: "応",
                            nagu: "殴",
                            sakura: "桜",
                            oku: "奥屋億憶臆後送贈遅",
                            yoko: "横",
                            oka: "岡丘侵犯冒",
                            ya: "やヤ屋家矢辞焼痩八冶夜野弥",
                            osore: "虞",
                            otsu: "乙",
                            ore: "俺",
                            oro: "卸愚",
                            oroshi: "卸",
                            oto: "音落劣",
                            ne: "ねネ音根寝値練",
                            atata: "温暖",
                            oda: "穏",
                            ka: "かカ下化火加可仮何花佳価果河苛科架架夏家荷華菓貨渦過嫁暇禍靴寡歌箇稼課蚊掛且刈換欠兼懸枯交香鹿借書飾替貸代賭日描変",
                            ge: "げゲ下夏牙解外",
                            shita: "下親舌慕",
                            shimo: "下霜",
                            moto: "下基求元本",
                            sa: "さサ下覚割去左佐沙査砂唆差差詐鎖再作指触挿茶提避冷裂",
                            kuda: "下管砕",
                            ke: "けケ化仮家華気懸蹴毛",
                            ba: "ばバ化場馬婆罵",
                            ho: "ほホ火干穂彫帆歩保哺捕補舗欲",
                            kuwa: "加詳桑",
                            kari: "仮狩",
                            nani: "何",
                            nan: "何男南軟難納",
                            hana: "花華鼻放離話",
                            atai: "価値",
                            kawa: "河革渇乾川皮",
                            natsu: "夏懐納",
                            ie: "家",
                            ni: "に二荷児仁逃二尼弐",
                            uzu: "渦",
                            su: "すス過吸好済済酢擦子捨主守州住須数素巣澄透透統",
                            ayama: "過謝",
                            yome: "嫁",
                            totsu: "嫁凸突",
                            hima: "暇",
                            kutsu: "靴屈掘窟",
                            kase: "稼",
                            ga: "がガ牙瓦我画芽賀雅餓",
                            kiba: "牙",
                            kawara: "瓦",
                            ware: "我",
                            wa: "わはワ我割沸湧輪和話",
                            me: "めメ芽雌女目",
                            kai: "介回灰会快戒改怪拐悔海界皆械絵開階楷解塊潰壊懐諧貝街",
                            mawa: "回",
                            hai: "灰入拝杯背肺俳配排敗廃輩",
                            kokoroyo: "快",
                            imashi: "戒",
                            arata: "改新",
                            aya: "怪危誤妖",
                            ku: "くク悔九久朽宮供区句苦駆庫口工功紅貢酌食組暮来",
                            kuya: "悔",
                            umi: "海",
                            mina: "皆",
                            hira: "開平",
                            to: "とト解戸採撮止止執十図遂跳斗吐妬徒途都渡塗賭土度登頭泊富閉捕問問溶留",
                            katamari: "塊",
                            tsubu: "潰粒",
                            kowa: "壊声怖",
                            futokoro: "懐",
                            gai: "外劾害崖涯街慨蓋該概骸",
                            soto: "外",
                            hoka: "外他",
                            hazu: "外弾",
                            gake: "崖",
                            machi: "街町",
                            futa: "蓋双二",
                            kaki: "垣柿",
                            onoono: "各",
                            kado: "角門",
                            tsuno: "角募",
                            kou: "格仰後口工公勾孔功巧広甲交光向后好江考行坑孝抗攻更効幸拘肯侯厚恒洪皇紅荒郊香候校耕航貢降高康控梗黄喉慌港硬絞項溝鉱構綱酵稿興衡鋼講購乞神請耗恋",
                            kara: "殻空唐絡",
                            obo: "覚溺",
                            heda: "隔",
                            tashi: "確",
                            gaku: "学岳楽額顎",
                            mana: "学",
                            take: "岳丈竹",
                            raku: "楽絡落酪",
                            tano: "楽頼",
                            hitai: "額",
                            ago: "顎",
                            kakari: "掛係",
                            kata: "潟形型肩堅固固語硬難片方",
                            katsu: "括活喝渇割葛滑褐轄合勝担",
                            wari: "割",
                            kuzu: "葛崩",
                            kotsu: "滑骨",
                            sube: "滑全",
                            name: "滑",
                            kabu: "株",
                            kama: "釜鎌構窯",
                            kan: "干刊甘汗缶完肝官冠巻看陥乾勘患貫寒喚堪換敢棺款間閑勧寛幹感漢慣管関歓監緩憾還館環簡観韓艦鑑甲神",
                            ase: "汗焦",
                            kimo: "肝",
                            kanmuri: "冠",
                            ma: "まマ巻間曲交真増馬負舞麻摩磨魔目",
                            maki: "巻牧",
                            ochii: "陥",
                            otoshii: "陥",
                            wazura: "患煩",
                            tsuranu: "貫",
                            samu: "寒",
                            ta: "たタ堪矯建手食垂炊絶絶足他多汰太耐断田立立",
                            ken: "間犬件見券肩建研県倹兼剣拳軒健険圏堅検嫌献絹遣権憲賢謙鍵繭顕験懸",
                            aida: "間",
                            susu: "勧進薦",
                            miki: "幹",
                            seki: "関寂夕斥石赤昔析隻席脊惜戚責跡積績籍",
                            kaka: "関掲抱",
                            yuru: "緩許",
                            yakata: "館",
                            kanga: "鑑考",
                            gan: "丸含岸岩玩眼頑顔願元",
                            fuku: "含吹伏服副幅復福腹複覆噴膨",
                            kishi: "岸",
                            iwa: "岩",
                            gen: "眼嫌験元幻玄言弦限原現舷減源厳",
                            manako: "眼",
                            kao: "顔香",
                            nega: "願",
                            ki: "きキ企伎危机気岐希忌汽奇祈季紀軌既記起飢鬼帰基寄規亀喜幾揮期棋貴棄毀旗器畿輝機騎決己効黄斬消生切着聴聞木利",
                            kuwada: "企",
                            abu: "危",
                            tsukue: "机",
                            ino: "祈",
                            sude: "既",
                            shiru: "記汁",
                            oni: "鬼",
                            kae: "帰返",
                            motoi: "基",
                            kame: "亀",
                            yoroko: "喜",
                            go: "ごゴ期御五互午呉後娯悟碁語誤護",
                            tatto: "貴",
                            touto: "貴",
                            hata: "旗機端畑",
                            utsuwa: "器",
                            kagaya: "輝",
                            gi: "ぎギ技宜偽欺義疑儀戯擬犠議",
                            waza: "技業",
                            itsuwa: "偽",
                            nise: "偽",
                            azamu: "欺",
                            utaga: "疑",
                            tawamu: "戯",
                            kiku: "菊聞",
                            kichi: "吉",
                            kitsu: "吉喫詰",
                            tsu: "つツ詰詰告就津尽積積着釣通漬摘都付連",
                            kyaku: "却客脚",
                            kya: "脚",
                            ashi: "脚足",
                            giyaku: "逆虐",
                            shiita: "虐",
                            kyuu: "九久及弓丘旧休吸朽臼求究泣急級糾宮救球給嗅窮",
                            kokono: "九九",
                            hisa: "久",
                            yumi: "弓",
                            usu: "臼薄薄",
                            kiwa: "究窮極極際",
                            naku: "泣",
                            isogu: "急",
                            guu: "宮偶遇隅",
                            miya: "宮",
                            sukuu: "救",
                            tama: "球玉弾霊",
                            kagu: "嗅",
                            giyuu: "牛",
                            ushi: "牛後",
                            kyo: "去巨居拒拠挙虚許距",
                            koba: "拒",
                            gyo: "魚御漁",
                            uo: "魚",
                            sakana: "魚",
                            ryou: "漁了両良料涼猟陵量僚領寮療瞭糧霊",
                            kyou: "凶共叫狂京享供協況峡挟狭恐恭胸脅強教郷境橋矯鏡競響驚兄経香興",
                            tomo: "共供友",
                            sake: "叫酒",
                            kuru: "狂苦苦繰",
                            kei: "京境競兄刑形系径茎係型契計恵啓掲渓経蛍敬景軽傾携継詣慶憬稽憩警鶏",
                            sona: "供備",
                            hasa: "挟",
                            semai: "狭",
                            seba: "狭",
                            uyauya: "恭",
                            mune: "胸旨棟",
                            muna: "胸棟",
                            obiya: "脅",
                            odo: "脅躍踊",
                            gou: "強郷業号合拷剛傲豪",
                            tsuyo: "強",
                            shi: "しシ強絞士子支止氏仕史司四市矢旨死死糸至伺志私使刺始姉枝祉肢姿思指施師恣紙脂視紫詞歯嗣試詩資飼誌雌摯賜諮示次自占染知締敷閉",
                            oshi: "教",
                            sakai: "境",
                            hashi: "橋走端箸",
                            kagami: "鏡",
                            kiso: "競",
                            se: "せセ競攻施瀬世責背迫",
                            hibi: "響",
                            odoro: "驚",
                            gyou: "仰暁業凝形行",
                            ao: "仰青青",
                            oo: "仰多大大覆",
                            akatsuki: "暁",
                            kyoku: "曲局極",
                            goku: "極獄",
                            gyoku: "玉",
                            kin: "巾斤均近金菌勤琴筋僅禁緊錦謹襟今",
                            chika: "近",
                            kon: "金建献今困昆恨根婚混痕紺魂墾懇",
                            kane: "金鐘",
                            kana: "金奏",
                            gon: "勤権言厳",
                            tsuto: "勤努務",
                            suji: "筋",
                            wazu: "僅",
                            nishiki: "錦",
                            tsutsushi: "謹慎",
                            eri: "襟",
                            gin: "吟銀",
                            niga: "苦",
                            kakeru: "駆",
                            karu: "駆軽狩",
                            gu: "ぐグ具惧愚",
                            kuu: "空",
                            sora: "空",
                            akeru: "空",
                            sumi: "隅速炭墨",
                            kushi: "串",
                            horu: "掘",
                            kuma: "熊",
                            kun: "君訓勲薫",
                            kimi: "君",
                            kaoru: "薫",
                            gun: "軍郡群",
                            mu: "むム群向向蒸武謀矛務無夢霧六",
                            mura: "群村",
                            ani: "兄",
                            katachi: "形",
                            kuki: "茎",
                            kakaru: "係",
                            chigiru: "契",
                            haka: "計図測墓謀量",
                            megu: "恵巡",
                            he: "へ経減",
                            hotaru: "蛍",
                            uyama: "敬",
                            katamuku: "傾",
                            katamukeru: "傾",
                            tazusa: "携",
                            tsugu: "継次接",
                            mou: "詣設亡望毛妄盲耗猛網",
                            iko: "憩",
                            niwatori: "鶏",
                            gei: "芸迎鯨",
                            muka: "迎",
                            kujira: "鯨",
                            geki: "隙劇撃激",
                            suki: "隙",
                            hage: "激励",
                            keta: "桁",
                            ketsu: "欠穴血決結傑潔",
                            ana: "穴",
                            chi: "ちチ血散散治質千地池知値恥致遅痴稚置緻乳",
                            musu: "結",
                            yu: "ゆユ結逝湯由油喩愉諭輸癒遊揺揺揺揺",
                            isagiyo: "潔",
                            getsu: "月",
                            gatsu: "月合",
                            tsuki: "月",
                            inu: "犬",
                            mi: "みミ見三実身診眉未味魅",
                            togu: "研",
                            tsurugi: "剣",
                            kobushi: "拳",
                            noki: "軒",
                            suko: "健少",
                            kewa: "険",
                            kira: "嫌",
                            iya: "嫌卑",
                            kinu: "絹",
                            tsuka: "遣仕使塚疲捕",
                            kashiko: "賢",
                            kagi: "鍵限",
                            mayu: "繭眉",
                            maboroshi: "幻",
                            iu: "言",
                            tsuru: "弦鶴",
                            hara: "原腹払",
                            arawa: "現著表",
                            minamoto: "源",
                            ogoso: "厳",
                            kibi: "厳",
                            onore: "己",
                            furu: "古振奮",
                            mata: "股又",
                            tora: "虎捉",
                            yue: "故",
                            mizuumi: "湖",
                            yatou: "雇",
                            hoko: "誇矛",
                            tsuzumi: "鼓",
                            kaeri: "顧省",
                            itsutsu: "五",
                            taga: "互",
                            nochi: "後",
                            ato: "後痕跡",
                            sato: "悟諭里",
                            kuchi: "口",
                            ooyake: "公",
                            takumi: "巧",
                            hiroi: "広",
                            hiromaru: "広",
                            hirogaru: "広",
                            maji: "交",
                            hikaru: "光",
                            hikari: "光",
                            kono: "好",
                            yuku: "行",
                            okona: "行",
                            sara: "更皿",
                            fu: "ふフ更降拭殖触振増踏不夫父付布扶府怖附訃負赴浮婦符富普腐敷膚賦譜阜風伏歩老",
                            saiwa: "幸",
                            sachi: "幸",
                            shiawa: "幸",
                            beni: "紅",
                            kurenai: "紅",
                            arai: "荒",
                            areru: "荒",
                            arasu: "荒",
                            sourou: "候",
                            tagaya: "耕",
                            mitsu: "貢三密蜜",
                            taka: "高高",
                            hika: "控",
                            nodo: "喉",
                            awateru: "慌",
                            minato: "港",
                            shibo: "絞搾",
                            mizo: "溝",
                            tsuna: "綱",
                            oko: "興怒",
                            hagane: "鋼",
                            koku: "克告谷刻国黒穀酷石",
                            tani: "谷",
                            kiza: "刻兆",
                            kuni: "国",
                            kuro: "黒黒",
                            hone: "骨",
                            koma: "駒困細",
                            koro: "頃殺転",
                            ima: "今",
                            majiru: "混",
                            tamashii: "魂",
                            nengo: "懇",
                            hidari: "左",
                            sha: "砂写社車舎者射捨赦斜煮遮謝",
                            suna: "砂",
                            sosonoka: "唆",
                            kusari: "鎖",
                            za: "ざザ座挫",
                            suwa: "座",
                            sai: "才再災妻采砕宰栽彩採済祭斎細菜最裁債催塞歳載際埼財殺西切",
                            futata: "再",
                            wazawa: "災",
                            tsuma: "妻爪",
                            irodo: "彩",
                            matsu: "祭祭松待末抹",
                            hoso: "細",
                            motto: "最",
                            tatsu: "裁達竜",
                            saba: "裁",
                            moyoo: "催",
                            soku: "塞即束足促則息捉速側測",
                            fusa: "塞房",
                            sei: "歳情井世正生成西声制姓征性青斉政星牲省凄逝清盛婿晴勢聖誠精製誓静請整醒背",
                            zai: "在材剤財罪",
                            tsumi: "罪",
                            saki: "崎先",
                            saku: "作削昨柵索策酢搾錯咲冊裂",
                            tsuku: "作創造突",
                            kezu: "削",
                            satsu: "冊札刷刹拶殺察撮擦早",
                            fuda: "札",
                            suru: "刷",
                            setsu: "刹殺切折拙窃接設雪摂節説",
                            zatsu: "雑",
                            zou: "雑象造像増憎蔵贈臓",
                            san: "三山参桟蚕惨産傘散算酸賛",
                            mittsu: "三",
                            yama: "山",
                            mai: "参舞米毎妹枚昧埋",
                            kaiko: "蚕",
                            zan: "惨残斬暫",
                            miji: "惨",
                            umu: "産",
                            ubu: "産",
                            kasa: "傘重",
                            sui: "酸出水吹垂炊帥粋衰推酔遂睡穂",
                            noko: "残",
                            sasa: "支",
                            uji: "氏",
                            ji: "じジ仕示字寺次耳自似児事侍治持時滋慈辞磁餌璽除地路",
                            yotsu: "四",
                            yottsu: "四",
                            yon: "四",
                            ito: "糸",
                            ita: "至傷致痛悼板",
                            ukaga: "伺",
                            kokoroza: "志",
                            kokorozashi: "志",
                            watakushi: "私",
                            watashi: "私",
                            sasu: "刺",
                            haji: "始初恥",
                            ane: "姉",
                            eda: "枝",
                            sugata: "姿",
                            omo: "思主重面",
                            yubi: "指",
                            hodoko: "施",
                            kami: "紙上神髪",
                            abura: "脂油",
                            murasaki: "紫",
                            kokoro: "試心",
                            tamesu: "試",
                            kau: "飼買",
                            mesu: "雌召",
                            tamawaru: "賜",
                            hakaru: "諮",
                            shimesu: "示",
                            aza: "字鮮",
                            tera: "寺",
                            tsugi: "次",
                            mimi: "耳",
                            mizukara: "自",
                            niru: "似煮",
                            zu: "ずズ事図豆頭",
                            samurai: "侍",
                            osa: "治収修納抑",
                            nao: "治直",
                            motsu: "持物",
                            toki: "時",
                            itsukushi: "慈",
                            esa: "餌",
                            shika: "鹿",
                            shiki: "式識色織",
                            jiku: "軸",
                            shichi: "七質",
                            nana: "七斜",
                            nanatsu: "七",
                            nano: "七",
                            shitsu: "叱失室疾執湿嫉漆質",
                            shikaru: "叱",
                            ushina: "失",
                            muro: "室",
                            shuu: "執収囚州舟秀周宗拾秋臭修袖終羞習週就衆集愁酬醜蹴襲祝",
                            shime: "湿",
                            urushi: "漆",
                            jitsu: "実十日",
                            mino: "実",
                            shiba: "芝縛",
                            yashiro: "社",
                            kuruma: "車",
                            mono: "者物",
                            iru: "射煎鋳入",
                            saegi: "遮",
                            ja: "邪蛇",
                            da: "だダ蛇出打妥唾堕惰駄抱",
                            hebi: "蛇",
                            shaku: "尺借酌釈爵石赤昔",
                            jaku: "若弱寂着",
                            nyaku: "若",
                            waka: "若別",
                            mo: "もモ若盛喪藻燃茂模漏",
                            yowa: "弱弱",
                            sabi: "寂寂",
                            shu: "手主守朱取狩首殊珠酒腫種趣修衆",
                            te: "てテ手照照",
                            nushi: "主",
                            mamoru: "守",
                            mori: "守森",
                            toru: "取",
                            kubi: "首",
                            hareru: "腫",
                            harasu: "腫",
                            tane: "種",
                            omomuki: "趣",
                            ju: "寿受呪授需儒樹就従",
                            kotobuki: "寿",
                            ukeru: "受",
                            ukaru: "受",
                            norou: "呪",
                            sazu: "授",
                            fune: "舟船",
                            funa: "舟船",
                            hii: "秀",
                            mawari: "周",
                            sou: "宗双壮早争走奏相荘草送倉捜挿桑掃曹曽巣爽窓創喪痩葬装僧想層総遭槽踪操燥霜騒藻贈",
                            juu: "拾十汁充住柔重従渋銃獣縦中",
                            hiro: "拾",
                            aki: "秋",
                            kusa: "臭草",
                            nio: "臭匂",
                            sode: "袖",
                            owa: "終",
                            nara: "習並倣",
                            tsuke: "就",
                            tsudo: "集",
                            ure: "愁憂",
                            miniku: "醜",
                            nyuu: "柔入乳",
                            yawara: "柔",
                            chou: "重丁弔庁兆町長挑帳張彫眺釣頂鳥朝貼超腸跳徴嘲潮澄調聴懲",
                            shou: "従小升少召匠床抄肖尚招承昇松沼昭宵将消症祥称笑唱商渉章紹訟勝掌晶焼焦硝粧詔証象傷奨照詳彰障憧衝賞償礁鐘上井正生声姓性青政星省清精相装",
                            shitaga: "従従",
                            shibu: "渋",
                            kemono: "獣",
                            tate: "縦盾",
                            shuku: "叔祝宿淑粛縮",
                            iwau: "祝",
                            yado: "宿",
                            chiji: "縮",
                            juku: "塾熱",
                            shutsu: "出",
                            de: "でデ出弟",
                            jutsu: "述術",
                            shun: "俊春瞬旬",
                            haru: "春",
                            matata: "瞬",
                            jun: "旬巡盾准殉純循順準潤遵",
                            uruo: "潤",
                            uru: "潤",
                            sho: "処初所書庶暑署緒諸",
                            hatsu: "初鉢発髪法",
                            ui: "初",
                            tokoro: "所",
                            cho: "緒著貯",
                            jo: "女如助序叙徐除",
                            nyo: "女如",
                            nyou: "女尿",
                            onna: "女",
                            tasu: "助",
                            suke: "助",
                            nozoku: "除",
                            chiisa: "小",
                            masu: "升",
                            sukuna: "少",
                            toko: "床常",
                            yuka: "床",
                            maneku: "招",
                            uketamawa: "承",
                            nobo: "昇上登",
                            numa: "沼",
                            yoi: "宵",
                            kesu: "消",
                            wara: "笑",
                            tona: "唱隣",
                            akina: "商",
                            masa: "勝正",
                            kogeru: "焦",
                            kogasu: "焦",
                            mikotonori: "詔",
                            kizu: "傷築",
                            teru: "照",
                            sawaru: "障",
                            akoga: "憧",
                            tsuguna: "償",
                            jou: "上丈冗条状乗城浄剰常情場畳蒸縄壌嬢錠譲醸成盛静定",
                            ue: "上",
                            uwa: "上",
                            ageru: "上",
                            shiro: "城代白",
                            tsune: "常",
                            nasa: "情",
                            tata: "畳",
                            tatami: "畳",
                            nawa: "縄苗",
                            yuzu: "譲",
                            kamo: "醸",
                            shoku: "色拭食植殖飾触嘱織職",
                            iro: "色",
                            nugu: "拭",
                            jiki: "食直",
                            joku: "辱",
                            hazukashi: "辱",
                            shiri: "尻",
                            shin: "心申伸芯臣身辛侵信津神唇娠振浸真針深紳進森診寝慎新審震薪親請",
                            mousu: "申",
                            jin: "臣神人刃仁尽迅甚陣尋腎",
                            karai: "辛",
                            kuchibiru: "唇",
                            furuu: "振震",
                            hita: "浸",
                            hari: "針",
                            fuka: "深",
                            atarashii: "新",
                            nii: "新",
                            takigi: "薪",
                            oya: "親",
                            nin: "人任妊忍認",
                            hanaha: "甚",
                            tazu: "尋訪",
                            mizu: "水",
                            otoro: "衰",
                            osu: "推雄",
                            you: "酔八幼用羊妖洋要容庸揚揺葉陽溶腰様瘍踊窯養擁謡曜",
                            zui: "随髄",
                            suu: "枢崇数",
                            kazu: "数",
                            kazo: "数",
                            sueru: "据",
                            sugi: "杉",
                            suso: "裾",
                            sun: "寸",
                            ze: "ぜゼ是",
                            tada: "正但",
                            nama: "生怠",
                            nishi: "西",
                            koe: "声肥",
                            matsurigoto: "政",
                            hoshi: "星",
                            habu: "省",
                            kiyoi: "清",
                            muko: "婿",
                            ikio: "勢",
                            makoto: "誠",
                            chikau: "誓",
                            shizu: "静沈鎮",
                            totono: "整調",
                            zei: "税説",
                            ishi: "石",
                            aka: "赤明",
                            akaramu: "赤",
                            mukashi: "昔",
                            ori: "折",
                            tsutana: "拙",
                            yuki: "雪",
                            sechi: "節",
                            fushi: "節",
                            toku: "説匿特得督徳篤読",
                            zetsu: "舌絶",
                            sen: "千川仙占先宣専泉浅洗染扇栓旋船戦煎羨腺詮践箋銭潜線遷選薦繊鮮",
                            urana: "占",
                            moppa: "専",
                            izumi: "泉",
                            asai: "浅",
                            ara: "洗粗",
                            ougi: "扇",
                            ikusa: "戦",
                            tataka: "戦闘",
                            uraya: "羨",
                            urayama: "羨",
                            zeni: "銭",
                            hiso: "潜",
                            mogu: "潜",
                            zen: "全前善然禅漸膳繕",
                            matta: "全",
                            mae: "前",
                            nen: "然年念捻粘燃",
                            tsukuro: "繕",
                            nera: "狙",
                            haba: "阻幅",
                            kumi: "組",
                            uto: "疎疎",
                            utta: "訴",
                            sakanobo: "遡",
                            ishizue: "礎",
                            haya: "早",
                            araso: "争",
                            saga: "捜探",
                            zo: "ぞゾ曽",
                            sawa: "爽騒沢",
                            mado: "窓惑",
                            houmu: "葬",
                            yosoo: "装",
                            au: "遭",
                            misao: "操",
                            ayatsu: "操",
                            niku: "憎肉",
                            taba: "束",
                            unaga: "促",
                            hayai: "速",
                            gawa: "側",
                            zoku: "俗族属賊続",
                            tsuzu: "続続",
                            sotsu: "卒率",
                            ritsu: "率律慄",
                            hiki: "率匹",
                            son: "存村孫尊損遜",
                            zon: "存",
                            mago: "孫",
                            tattoi: "尊",
                            toutoi: "尊",
                            soko: "損底",
                            tsuba: "唾",
                            tai: "太対体耐待怠胎退帯泰堆袋逮替貸隊滞態戴大代台",
                            futo: "太",
                            tsui: "対追椎墜費",
                            tei: "体丁低呈廷弟定底抵邸亭貞帝訂庭逓停偵堤提程艇締諦",
                            karada: "体",
                            okota: "怠",
                            shirizo: "退",
                            obi: "帯",
                            fukuro: "袋",
                            todokoo: "滞",
                            dai: "大代台第題弟内",
                            taki: "滝",
                            taku: "宅択沢卓拓託濯度",
                            daku: "諾濁",
                            nigo: "濁",
                            datsu: "脱奪",
                            nu: "ぬヌ脱塗抜",
                            uba: "奪",
                            tana: "棚",
                            dare: "誰",
                            tan: "丹旦担単炭胆探淡短嘆端綻誕鍛壇反",
                            dan: "旦団男段断弾暖談壇",
                            nina: "担",
                            sagu: "探",
                            mijika: "短",
                            nage: "嘆嘆",
                            hokoro: "綻",
                            kita: "鍛北来",
                            ton: "団屯豚頓問",
                            otoko: "男",
                            kotowa: "断",
                            hiku: "弾低",
                            ike: "池",
                            hajiru: "恥",
                            chiku: "竹畜逐蓄築",
                            takuwa: "蓄",
                            chitsu: "秩窒",
                            cha: "茶",
                            chaku: "着嫡",
                            chuu: "中仲虫沖宙忠抽注昼柱衷酎鋳駐",
                            naka: "中仲半",
                            mushi: "虫",
                            oki: "沖",
                            soso: "注",
                            hiru: "昼",
                            hashira: "柱",
                            ichijiru: "著",
                            tomura: "弔",
                            ido: "挑",
                            itada: "頂",
                            itadaki: "頂",
                            tori: "鳥",
                            asa: "朝麻",
                            azake: "嘲",
                            shira: "調白",
                            choku: "直勅捗",
                            tadachi: "直",
                            chin: "沈珍朕陳賃鎮",
                            mezura: "珍",
                            tsuu: "通痛",
                            kayo: "通",
                            tsubo: "坪",
                            tsume: "爪冷",
                            otouto: "弟",
                            sada: "定",
                            niwa: "庭",
                            tsutsumi: "堤",
                            hodo: "程",
                            akira: "諦明",
                            dei: "泥",
                            doro: "泥",
                            teki: "的笛摘滴適敵",
                            mato: "的",
                            fue: "笛",
                            shizuku: "滴",
                            shitata: "滴",
                            kataki: "敵",
                            deki: "溺",
                            tetsu: "迭哲鉄徹撤",
                            ten: "天典店点展添転填殿",
                            mise: "店",
                            den: "田伝殿電",
                            tsuta: "伝",
                            tono: "殿",
                            dono: "殿",
                            neta: "妬",
                            miyako: "都",
                            wata: "渡綿",
                            do: "ど土奴努度怒",
                            tsuchi: "土",
                            tabi: "度旅",
                            ika: "怒",
                            tou: "刀冬灯当投豆東到逃倒凍唐島桃討透党悼盗陶塔搭棟湯痘登答等筒統稲踏糖頭謄藤闘騰道読納",
                            katana: "刀",
                            fuyu: "冬",
                            mame: "豆",
                            higashi: "東",
                            noga: "逃",
                            tao: "倒",
                            koo: "凍",
                            kogo: "凍",
                            shima: "島",
                            momo: "桃",
                            nusu: "盗",
                            kotaeru: "答",
                            tsutsu: "筒包",
                            ine: "稲",
                            ina: "稲否",
                            atama: "頭",
                            kashira: "頭",
                            fuji: "藤",
                            dou: "同洞胴動堂童道働銅導瞳",
                            ona: "同",
                            hora: "洞",
                            ugo: "動動",
                            warabe: "童",
                            michi: "道",
                            hatara: "働",
                            michibi: "導",
                            hitomi: "瞳",
                            touge: "峠",
                            doku: "毒独読",
                            hitori: "独",
                            tochi: "栃",
                            todo: "届",
                            buta: "豚",
                            don: "貪鈍曇丼",
                            musabo: "貪",
                            nibu: "鈍",
                            donburi: "丼",
                            nai: "内亡",
                            uchi: "内",
                            nashi: "梨",
                            nazo: "謎",
                            nabe: "鍋",
                            minami: "南",
                            yawa: "軟和",
                            muzuka: "難",
                            futatsu: "二",
                            niji: "虹",
                            nichi: "日",
                            chichi: "乳父",
                            maka: "任",
                            shino: "忍",
                            mito: "認",
                            nei: "寧",
                            netsu: "熱",
                            toshi: "年",
                            neba: "粘",
                            nou: "悩納能脳農濃",
                            naya: "悩",
                            nami: "波並",
                            yabu: "破敗",
                            uma: "馬",
                            nonoshi: "罵",
                            oga: "拝",
                            sakazuki: "杯",
                            somu: "背",
                            kuba: "配",
                            suta: "廃",
                            bai: "売倍梅培陪媒買賠",
                            ume: "梅",
                            tsuchika: "培",
                            haku: "白伯拍泊迫剥舶博薄",
                            byaku: "白",
                            shiroi: "白",
                            hyou: "拍氷表俵票評漂標兵",
                            baku: "博麦漠縛爆暴幕",
                            usui: "薄",
                            mugi: "麦",
                            hatake: "畑",
                            hada: "肌",
                            hachi: "八鉢蜂",
                            yatsu: "八",
                            yattsu: "八",
                            hotsu: "発法欲",
                            batsu: "伐抜罰閥末",
                            bachi: "罰",
                            han: "反半氾犯帆汎伴判坂阪板版班畔般販斑飯搬煩頒範繁藩凡",
                            hon: "反本奔翻",
                            soru: "反",
                            ban: "伴判板晩番蛮盤万",
                            tomona: "伴",
                            meshi: "飯",
                            bon: "煩凡盆",
                            kare: "彼",
                            kano: "彼",
                            tobu: "飛",
                            koumu: "被",
                            kanashii: "悲",
                            tobira: "扉",
                            bi: "びビ尾眉美備微鼻",
                            utsuku: "美",
                            hiza: "膝",
                            hiji: "肘",
                            hitsu: "匹必泌筆",
                            kanara: "必",
                            fude: "筆",
                            hime: "姫",
                            hyaku: "百",
                            koori: "氷",
                            omote: "表面",
                            tawara: "俵",
                            tadayo: "漂",
                            byou: "苗秒病描猫平",
                            nae: "苗",
                            hei: "病丙平兵併並柄陛閉塀幣弊蔽餅",
                            yamu: "病",
                            yamai: "病",
                            ega: "描",
                            neko: "猫",
                            hin: "品浜貧賓頻",
                            shina: "品",
                            hama: "浜",
                            bin: "貧敏瓶便",
                            mazu: "貧",
                            bu: "ぶブ不侮武部舞分歩奉無",
                            fuu: "夫富封風",
                            otto: "夫",
                            nuno: "布",
                            omomu: "赴",
                            tomi: "富",
                            kusaru: "腐",
                            anado: "侮",
                            hou: "封方包芳邦奉宝抱放放法泡胞俸倣峰砲崩訪報蜂豊飽褒縫",
                            kaze: "風",
                            kaza: "風",
                            kutsugae: "覆",
                            futsu: "払沸",
                            butsu: "仏物",
                            hotoke: "仏",
                            fun: "粉紛雰噴墳憤奮分",
                            kona: "粉",
                            magi: "紛",
                            ikidoo: "憤",
                            bun: "分文聞",
                            wakeru: "分",
                            mon: "文聞門紋問",
                            fumi: "文",
                            taira: "平",
                            gara: "柄",
                            mochi: "餅用",
                            bei: "米",
                            kome: "米",
                            heki: "壁璧癖",
                            kabe: "壁",
                            kuse: "癖",
                            betsu: "別蔑",
                            sage: "蔑",
                            hen: "片辺返変偏遍編",
                            ata: "辺与",
                            be: "べ辺",
                            katayo: "偏",
                            ben: "弁便勉",
                            tayo: "便頼",
                            aru: "歩",
                            ayu: "歩",
                            tamo: "保",
                            ogina: "補",
                            bo: "ぼボ母募墓慕暮簿模",
                            haha: "母",
                            kanba: "芳",
                            tatematsu: "奉",
                            takara: "宝",
                            ida: "抱",
                            mine: "峰",
                            otozu: "訪",
                            muku: "報",
                            yuta: "豊",
                            akasu: "飽",
                            homeru: "褒",
                            nuu: "縫",
                            bou: "亡乏忙坊妨忘防房肪某冒剖紡望傍帽棒貿貌暴膨謀妄",
                            tobo: "乏",
                            isoga: "忙",
                            botsu: "坊没勃",
                            samata: "妨",
                            wasu: "忘",
                            fuse: "防",
                            tsumu: "紡",
                            nozo: "望臨",
                            katawa: "傍",
                            aba: "暴",
                            hoo: "頬",
                            hoku: "北",
                            boku: "木朴牧睦僕墨撲目",
                            moku: "木目黙",
                            hori: "堀",
                            hiruga: "翻",
                            miga: "磨",
                            imouto: "妹",
                            maku: "幕膜",
                            makura: "枕",
                            sue: "末",
                            man: "万満慢漫",
                            michiru: "満",
                            aji: "味味",
                            misaki: "岬",
                            myaku: "脈",
                            myou: "妙名命明冥",
                            min: "民眠",
                            tami: "民",
                            nemuru: "眠",
                            yume: "夢",
                            kiri: "霧",
                            musume: "娘",
                            mei: "名命明迷冥盟銘鳴",
                            inochi: "命",
                            mayo: "迷",
                            metsu: "滅",
                            horo: "滅",
                            men: "免面綿麺",
                            manuka: "免",
                            tsura: "面連",
                            shige: "茂",
                            ami: "網",
                            dama: "黙",
                            yoru: "夜",
                            wake: "訳",
                            kusuri: "薬",
                            yami: "闇",
                            yoshi: "由",
                            isa: "勇",
                            aso: "遊",
                            saso: "誘",
                            sugu: "優",
                            homare: "誉",
                            azu: "預",
                            osana: "幼",
                            hitsuji: "羊",
                            kaname: "要",
                            koshi: "腰",
                            sama: "様",
                            yashina: "養",
                            utai: "謡",
                            yoku: "抑沃浴欲翌翼",
                            tsubasa: "翼",
                            ra: "らラ拉裸羅",
                            hadaka: "裸",
                            rai: "来雷頼礼",
                            kaminari: "雷",
                            ratsu: "辣",
                            ran: "乱卵覧濫藍欄",
                            tamago: "卵",
                            ri: "りリ吏利里理痢裏履璃離",
                            riku: "陸立",
                            ryuu: "立柳流留竜粒隆硫",
                            richi: "律",
                            ryaku: "略",
                            yanagi: "柳",
                            ru: "るル流留瑠",
                            ryo: "侶旅虜慮",
                            suzu: "涼涼鈴",
                            misasagi: "陵",
                            rou: "糧露老労弄郎朗浪廊楼漏籠",
                            kate: "糧",
                            ryoku: "力緑",
                            riki: "力",
                            chikara: "力",
                            roku: "緑六録麓",
                            midori: "緑",
                            rin: "林厘倫輪隣臨鈴",
                            hayashi: "林",
                            tonari: "隣",
                            re: "れレ",
                            rui: "涙累塁類",
                            namida: "涙",
                            tagu: "類",
                            rei: "令礼冷励戻例鈴零霊隷齢麗",
                            modo: "戻",
                            tato: "例",
                            uruwa: "麗",
                            reki: "暦歴",
                            koyomi: "暦",
                            retsu: "列劣烈裂",
                            ren: "恋連廉練錬",
                            koi: "恋恋",
                            ro: "ろロ呂炉賂路露",
                            tsuyu: "露",
                            moteaso: "弄",
                            hoga: "朗",
                            kago: "籠",
                            muttsu: "六",
                            mui: "六",
                            fumoto: "麓",
                            ron: "論",
                            nago: "和",
                            hanashi: "話",
                            wai: "賄",
                            makana: "賄",
                            waki: "脇",
                            waku: "惑枠",
                            wan: "湾腕",
                            ude: "腕",
                            nn: "んン",
                            lya: "ゃャ",
                            lyu: "ゅュ",
                            lyo: "ょョ",
                            wo: "をヲ",
                            li: "ぃィ",
                            lu: "ぅゥ",
                            le: "ぇェ",
                            la: "ぁァ",
                            lo: "ぉォ",
                            tt: "っッ",
                            di: "ぢヂ",
                            du: "づヅ",
                            pa: "ぱパ",
                            pi: "ぴピ",
                            pu: "ぷプ",
                            pe: "ぺ",
                            po: "ぽポ"
                        };
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
                    $app_exports$['input-method'] = __webpack_require__("./src/components/InputMethod/InputMethod.ux");
                    var $app_style$ = [
                        [
                            [
                                [
                                    0,
                                    "page"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "100%",
                                paddingTop: "8px",
                                backgroundColor: "#020813",
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "top-row"
                                ]
                            ],
                            {
                                width: "432px",
                                height: "72px",
                                paddingLeft: "14px",
                                paddingRight: "8px",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "back-btn"
                                ]
                            ],
                            {
                                width: "48px",
                                height: "48px",
                                marginLeft: "15px",
                                marginRight: "8px",
                                flexShrink: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "check-btn"
                                ]
                            ],
                            {
                                width: "48px",
                                height: "48px",
                                marginLeft: "15px",
                                marginRight: "8px",
                                flexShrink: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-box"
                                ]
                            ],
                            {
                                width: "296px",
                                height: "52px",
                                borderTopWidth: "2px",
                                borderRightWidth: "2px",
                                borderBottomWidth: "2px",
                                borderLeftWidth: "2px",
                                borderTopColor: "#ffffff",
                                borderRightColor: "#ffffff",
                                borderBottomColor: "#ffffff",
                                borderLeftColor: "#ffffff",
                                borderRadius: "18px",
                                backgroundColor: "#08172b",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                paddingLeft: "14px",
                                paddingRight: "14px",
                                paddingBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-text"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "36px",
                                color: "#ffffff",
                                fontSize: "26px",
                                fontWeight: 700,
                                textAlign: "left"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "edit-row"
                                ]
                            ],
                            {
                                width: "256px",
                                height: "72px",
                                marginTop: "4px",
                                marginBottom: "6px",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "move-left-btn"
                                ]
                            ],
                            {
                                width: "80px",
                                height: "72px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "move-right-btn"
                                ]
                            ],
                            {
                                width: "80px",
                                height: "72px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "clear-btn"
                                ]
                            ],
                            {
                                width: "80px",
                                height: "72px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-box-rect"
                                ]
                            ],
                            {
                                width: "296px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-text-rect"
                                ]
                            ],
                            {
                                fontSize: "22px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-box-circle"
                                ]
                            ],
                            {
                                width: "62%",
                                marginTop: "8px",
                                marginBottom: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-text-circle"
                                ]
                            ],
                            {
                                fontSize: "22px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hint-area"
                                ]
                            ],
                            {
                                width: "100%",
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hint-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "18px",
                                textAlign: "center",
                                height: "24px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page-circle"
                                ]
                            ],
                            {
                                paddingTop: "16px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page-rect"
                                ]
                            ],
                            {
                                paddingTop: "8px"
                            }
                        ]
                    ];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.device"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.file"));
                        var _system5 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _suggestionState = __webpack_require__("./src/common/suggestionState.js");
                        var _dictCodec = __webpack_require__("./src/common/dictCodec.js");
                        var _buildTarget = _interopRequireDefault(__webpack_require__("./src/common/buildTarget.js"));
                        var _navGuard = __webpack_require__("./src/common/navGuard.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const ENGLISH_SUFFIXES = [
                            "s",
                            "ed",
                            "ing",
                            "er",
                            "est",
                            "ly",
                            "tion",
                            "ment",
                            "ness",
                            "able",
                            "ful",
                            "less",
                            "ive",
                            "al",
                            "ous",
                            "ity"
                        ];
                        var TAG_CODE_MAP = {
                            z: 'zk',
                            g: 'gk',
                            4: 'cet4',
                            6: 'cet6',
                            k: 'ky',
                            t: 'toefl',
                            i: 'ielts',
                            e: 'gre'
                        };
                        var TAG_LABELS = [
                            'zk',
                            'gk',
                            'cet4',
                            'cet6',
                            'ky',
                            'ielts',
                            'toefl',
                            'gre'
                        ];
                        var _default = exports.default = {
                            protected: {
                                queryParam: "",
                                autoSearch: "",
                                searchMode: "",
                                inflectDepth: "",
                                screenProfile: "rect"
                            },
                            private: {
                                query: "",
                                cursorIndex: 0,
                                displayText: "",
                                englishSeed: "",
                                englishSuggestionsText: "",
                                keyboardHidden: false,
                                keyboardType: "QWERTY",
                                screenType: "rect",
                                maxLength: 15,
                                vibrateMode: "short",
                                lastToastAt: 0,
                                toastCooldown: 1500,
                                touchStartX: -1,
                                touchStartY: -1,
                                destroyed: false,
                                autoSearchPending: false,
                                englishSuggestionCache: null,
                                englishSuggestionParsed: null,
                                englishSuggestionPending: null,
                                englishSuggestionOrder: null,
                                englishSuggestionToken: 0,
                                englishSuggestionEnabled: true,
                                searchSwipeExitLocked: true,
                                searchSubmitLocked: false,
                                _suggestionTimer: null,
                                autoSearchTimer: null,
                                marqueeTimer: null,
                                tapTimes: [],
                                marqueeActive: false,
                                marqueeSpeed: 40
                            },
                            _expandTag (s) {
                                if (!s) return '';
                                s = s.replace(/\r/g, '');
                                if (s.indexOf(',') < 0 && /^[0-9a-f]+$/.test(s)) {
                                    var mask = parseInt(s, 16);
                                    var labels = [];
                                    for(var bit = 0; bit < TAG_LABELS.length; bit++)if (mask & 1 << bit) labels.push(TAG_LABELS[bit]);
                                    return labels.join(' ');
                                }
                                return s.split(',').map(function(c) {
                                    return TAG_CODE_MAP[c] || c;
                                }).filter(Boolean).join(' ');
                            },
                            _decodeWordPrefix (parts, prevWord) {
                                return (0, _dictCodec.decodePrefixField)(parts[0], prevWord) || "";
                            },
                            _parseSuggestionLines (text) {
                                var rows = text.split("\n");
                                var out = [];
                                var prevWord = "";
                                for(var i = 0; i < rows.length; i++){
                                    var parts = rows[i].split("\t");
                                    if (parts.length >= 3) {
                                        var word = this._decodeWordPrefix(parts, prevWord);
                                        prevWord = word;
                                        out.push({
                                            word: word,
                                            entryId: parts[1],
                                            tags: parts[2] || ''
                                        });
                                    }
                                }
                                return out;
                            },
                            onInit () {
                                this.englishSuggestionCache = {};
                                this.englishSuggestionParsed = {};
                                this.englishSuggestionPending = {};
                                this.englishSuggestionOrder = [];
                                this.loadEnglishSuggestionSetting();
                                this.loadSearchSwipeExitSetting();
                                this.applyScreenInfo(_buildTarget.default);
                                const app = this.$app.$def;
                                _system.default.getInfo({
                                    success: (data)=>{
                                        app.updateScreenInfo(data);
                                        this.applyScreenInfo(app.data);
                                        this.refreshDisplay();
                                    },
                                    fail: (data, code)=>{
                                        console.log("search device.getInfo failed; using compiled target: " + code);
                                    }
                                });
                                if (this.queryParam) {
                                    this.query = this.queryParam;
                                    this.cursorIndex = this.query.length;
                                }
                                this.keyboardHidden = "1" === this.autoSearch;
                                this.refreshDisplay();
                                if ("1" === this.autoSearch && this.query) {
                                    this.autoSearchPending = true;
                                    this.autoSearchTimer = setTimeout(()=>{
                                        this.autoSearchTimer = null;
                                        if (!this.destroyed && this.autoSearchPending) {
                                            this.autoSearchPending = false;
                                            this.performSearch();
                                        }
                                    }, 500);
                                }
                            },
                            applyScreenInfo (data) {
                                const screenShape = data.shape || data.screenShape || "rect";
                                const screenWidth = Number(data.width || data.screenWidth || 432);
                                this.screenType = screenShape;
                                this.screenProfile = data.profile || data.screenProfile || "rect";
                                this.maxLength = this.getMaxLength(screenShape, screenWidth);
                            },
                            getMaxLength (screenShape, screenWidth) {
                                if ("circle" === screenShape) return 12;
                                if ("rect" === screenShape) return screenWidth >= 400 ? 15 : 11;
                                return 5;
                            },
                            onDestroy () {
                                this.destroyed = true;
                                this.englishSuggestionToken++;
                                if (this._suggestionTimer) {
                                    clearTimeout(this._suggestionTimer);
                                    this._suggestionTimer = null;
                                }
                                if (this.autoSearchTimer) {
                                    clearTimeout(this.autoSearchTimer);
                                    this.autoSearchTimer = null;
                                }
                                if (this.marqueeTimer) {
                                    clearTimeout(this.marqueeTimer);
                                    this.marqueeTimer = null;
                                }
                                this.englishSuggestionCache = null;
                                this.englishSuggestionParsed = null;
                                this.englishSuggestionPending = null;
                                this.englishSuggestionOrder = null;
                                this.stopMarquee();
                            },
                            onShow () {
                                this.searchSubmitLocked = false;
                                this.loadEnglishSuggestionSetting();
                                this.loadSearchSwipeExitSetting();
                            },
                            onReady () {
                                if (this.autoSearchPending) {
                                    this.autoSearchPending = false;
                                    if (this.autoSearchTimer) {
                                        clearTimeout(this.autoSearchTimer);
                                        this.autoSearchTimer = null;
                                    }
                                    this.performSearch();
                                }
                            },
                            onBackPress () {
                                if (!(0, _navGuard.navGuard)()) return;
                                return this.searchSwipeExitLocked;
                            },
                            toggleKeyboard () {
                                this.keyboardHidden = !this.keyboardHidden;
                                this.refreshDisplay();
                            },
                            onInputBoxClick () {
                                if (!(0, _navGuard.navGuard)()) return;
                                var now = Date.now();
                                this.tapTimes.push(now);
                                this.tapTimes = this.tapTimes.filter(function(t) {
                                    return now - t <= 1500;
                                });
                                if (this.tapTimes.length >= 3) {
                                    this.tapTimes = [];
                                    _system2.default.replace({
                                        uri: "/pages/filter",
                                        params: {
                                            mode: "input",
                                            queryParam: this.query
                                        }
                                    });
                                    return;
                                }
                                this.toggleKeyboard();
                            },
                            onVisibilityChange (evt) {
                                if (evt && evt.detail) this.keyboardHidden = !evt.detail.visible;
                                this.refreshDisplay();
                            },
                            onKeyDown (evt) {
                                console.log("key down: " + JSON.stringify(evt));
                            },
                            onDelete () {
                                if (this.cursorIndex > 0) {
                                    this.query = this.query.slice(0, this.cursorIndex - 1) + this.query.slice(this.cursorIndex);
                                    this.cursorIndex--;
                                }
                                this.refreshDisplay();
                                this.scheduleSuggestionUpdate();
                            },
                            onComplete (evt) {
                                if (evt && evt.detail && evt.detail.content) {
                                    const content = evt.detail.content;
                                    this.query = this.query.slice(0, this.cursorIndex) + content + this.query.slice(this.cursorIndex);
                                    this.cursorIndex += content.length;
                                }
                                this.refreshDisplay();
                                this.scheduleSuggestionUpdate();
                            },
                            clearText () {
                                this.query = "";
                                this.cursorIndex = 0;
                                this.refreshDisplay();
                                this.scheduleSuggestionUpdate();
                            },
                            moveLeft () {
                                if (this.cursorIndex > 0) this.cursorIndex--;
                                this.refreshDisplay();
                            },
                            moveRight () {
                                if (this.cursorIndex < this.query.length) this.cursorIndex++;
                                this.refreshDisplay();
                            },
                            onSearchButtonClick () {
                                if (!(0, _navGuard.navGuard)()) return;
                                if (!this.query) return void _system2.default.back();
                                this.performSearch();
                            },
                            performSearch () {
                                if (this.searchSubmitLocked) return;
                                const normalized = this.normalizeWord(this.query);
                                this.keyboardHidden = true;
                                this.refreshDisplay();
                                if (!normalized) return;
                                if (!this.validateQuery(normalized)) return;
                                this.searchSubmitLocked = true;
                                _system2.default.push({
                                    uri: "/pages/results",
                                    params: {
                                        query: normalized,
                                        searchMode: this.searchMode || "",
                                        inflectDepth: this.inflectDepth || "0"
                                    }
                                });
                            },
                            validateQuery (query) {
                                if ("inflect" === this.searchMode) {
                                    if (!this.isEnglishWord(query)) {
                                        this.showToast("只能输入英文");
                                        return false;
                                    }
                                    return true;
                                }
                                const hasChinese = this.hasChinese(query);
                                const hasEnglish = this.hasEnglish(query);
                                if (hasChinese && hasEnglish) {
                                    this.showToast("输入非法");
                                    return false;
                                }
                                if (hasChinese) {
                                    if (!this.isChineseQuery(query)) {
                                        this.showToast("输入非法");
                                        return false;
                                    }
                                    return true;
                                }
                                if (!this.isEnglishWord(query)) {
                                    this.showToast("输入非法");
                                    return false;
                                }
                                return true;
                            },
                            showToast (message) {
                                const now = Date.now();
                                if (now - this.lastToastAt < this.toastCooldown) return;
                                this.lastToastAt = now;
                                _system3.default.showToast({
                                    message: message,
                                    duration: 1500
                                });
                            },
                            onTouchStart (evt) {
                                const point = this.getTouchPoint(evt);
                                if (point) {
                                    this.touchStartX = point.clientX;
                                    this.touchStartY = point.clientY;
                                }
                            },
                            onTouchEnd (evt) {
                                const point = this.getTouchPoint(evt);
                                if (!point || this.touchStartX < 0) return;
                                const endX = point.clientX;
                                const endY = point.clientY;
                                const appData = this.$app && this.$app.$def && this.$app.$def.data || {};
                                const sw = appData.screenWidth || 212;
                                const sh = appData.screenHeight || 520;
                                const startsInLeftQuarter = this.touchStartX <= 0.25 * sw;
                                const endsAtRightQuarter = endX >= 0.75 * sw;
                                const mostlyHorizontal = Math.abs(endY - this.touchStartY) <= 120;
                                const validStartZone = this.keyboardHidden || this.touchStartY <= 0.35 * sh;
                                if (!this.searchSwipeExitLocked && startsInLeftQuarter && endsAtRightQuarter && mostlyHorizontal && validStartZone) _system2.default.back();
                                this.touchStartX = -1;
                                this.touchStartY = -1;
                            },
                            getTouchPoint (evt) {
                                if (evt && evt.changedTouches && evt.changedTouches.length > 0) return evt.changedTouches[0];
                                if (evt && evt.touches && evt.touches.length > 0) return evt.touches[0];
                                return null;
                            },
                            refreshDisplay () {
                                if (!this.query) {
                                    this.stopMarquee();
                                    this.cursorIndex = 0;
                                    this.displayText = "";
                                    this.englishSeed = "";
                                    this.englishSuggestionsText = "";
                                    this.englishSuggestionToken++;
                                    (0, _suggestionState.setSuggestionSeed)("");
                                    (0, _suggestionState.setSuggestions)("");
                                    return;
                                }
                                if (this.cursorIndex < 0) this.cursorIndex = 0;
                                if (this.cursorIndex > this.query.length) this.cursorIndex = this.query.length;
                                if (this.query.length > this.maxLength && this.keyboardHidden) this.startMarquee();
                                else {
                                    this.stopMarquee();
                                    this.displayText = this.query.slice(0, this.cursorIndex) + (this.keyboardHidden ? "" : "_") + this.query.slice(this.cursorIndex);
                                }
                                this.updateEnglishSeed();
                            },
                            startMarquee () {
                                this.marqueeSpeed = this.calcMarqueeSpeed(this.query.length);
                                this.displayText = this.query + "   " + this.query;
                                if (this.marqueeTimer) clearTimeout(this.marqueeTimer);
                                this.marqueeTimer = setTimeout(()=>{
                                    this.marqueeTimer = null;
                                    if (this.destroyed) return;
                                    const el = this.$element("marquee-text");
                                    if (el && el.start) el.start();
                                }, 50);
                            },
                            stopMarquee () {
                                if (this.marqueeTimer) {
                                    clearTimeout(this.marqueeTimer);
                                    this.marqueeTimer = null;
                                }
                                const el = this.$element("marquee-text");
                                if (el && el.stop) el.stop();
                            },
                            calcMarqueeSpeed (textLength) {
                                const extra = Math.max(0, textLength - this.maxLength);
                                return Math.max(40, Math.min(60, Math.round(40 + 1.5 * extra)));
                            },
                            updateEnglishSeed () {
                                var text = this.query.slice(0, this.cursorIndex).toLowerCase();
                                var match = text.match(/[a-z][a-z'-]*$/);
                                this.englishSeed = match && match[0] ? match[0] : "";
                            },
                            refreshEnglishSuggestions (seed) {
                                if (!this.englishSuggestionEnabled) return void this.clearEnglishSuggestions();
                                const normalized = this.normalizeEnglishSeed(seed);
                                const suggestionToken = ++this.englishSuggestionToken;
                                if (!normalized) {
                                    this.englishSuggestionsText = "";
                                    (0, _suggestionState.setSuggestionSeed)("");
                                    (0, _suggestionState.setSuggestions)("");
                                    return;
                                }
                                this.loadEnglishSuggestionSource(normalized.charAt(0), (source)=>{
                                    if (suggestionToken !== this.englishSuggestionToken) return;
                                    this.applyEnglishSuggestions(normalized, source);
                                });
                            },
                            scheduleSuggestionUpdate () {
                                if (this._suggestionTimer) {
                                    clearTimeout(this._suggestionTimer);
                                    this._suggestionTimer = null;
                                }
                                if (!this.englishSuggestionEnabled || !this.englishSeed) return void this.clearEnglishSuggestions();
                                var self = this;
                                this._suggestionTimer = setTimeout(function() {
                                    self._suggestionTimer = null;
                                    self.refreshEnglishSuggestions(self.englishSeed);
                                }, 200);
                            },
                            loadEnglishSuggestionSource (letter, done) {
                                if (Object.prototype.hasOwnProperty.call(this.englishSuggestionParsed, letter)) {
                                    this._touchEnglishSuggestion(letter);
                                    done(this.englishSuggestionParsed[letter]);
                                    return;
                                }
                                if (Object.prototype.hasOwnProperty.call(this.englishSuggestionCache, letter)) {
                                    var _rows = this.englishSuggestionCache[letter] || "";
                                    var _parsed = _rows ? this._parseSuggestionLines(_rows) : [];
                                    this._cacheEnglishSuggestion(letter, _parsed);
                                    delete this.englishSuggestionCache[letter];
                                    done(_parsed);
                                    return;
                                }
                                if (this.englishSuggestionPending[letter]) return void this.englishSuggestionPending[letter].push(done);
                                this.englishSuggestionPending[letter] = [
                                    done
                                ];
                                _system4.default.readText({
                                    uri: "/common/dict/words/word_" + letter + ".txt",
                                    encoding: "utf-8",
                                    success: (data)=>{
                                        if (this.destroyed) return;
                                        var text = data && data.text ? data.text : "";
                                        var parsed = text ? this._parseSuggestionLines(text) : [];
                                        this._cacheEnglishSuggestion(letter, parsed);
                                        var pending = this.englishSuggestionPending[letter] || [];
                                        delete this.englishSuggestionPending[letter];
                                        for(var i = 0; i < pending.length; i++)pending[i](parsed);
                                    },
                                    fail: ()=>{
                                        if (this.destroyed) return;
                                        this._cacheEnglishSuggestion(letter, []);
                                        var pending = this.englishSuggestionPending[letter] || [];
                                        delete this.englishSuggestionPending[letter];
                                        for(var i = 0; i < pending.length; i++)pending[i]([]);
                                    }
                                });
                            },
                            loadEnglishSuggestionSetting () {
                                _system5.default.get({
                                    key: "dic_english_suggestions",
                                    default: "1",
                                    success: (data)=>{
                                        if (this.destroyed) return;
                                        const value = data && (data.value || data);
                                        this.englishSuggestionEnabled = "0" !== value;
                                        if (this.englishSuggestionEnabled) {
                                            this.updateEnglishSeed();
                                            this.scheduleSuggestionUpdate();
                                        } else this.clearEnglishSuggestions();
                                    },
                                    fail: (data, code)=>{
                                        console.log("search storage.get failed: " + code);
                                    }
                                });
                            },
                            loadSearchSwipeExitSetting () {
                                _system5.default.get({
                                    key: "dic_search_swipe_exit_locked",
                                    default: "1",
                                    success: (data)=>{
                                        if (this.destroyed) return;
                                        const value = data && (data.value || data);
                                        this.searchSwipeExitLocked = "0" !== value;
                                    },
                                    fail: (data, code)=>{
                                        console.log("search swipe setting get failed: " + code);
                                    }
                                });
                            },
                            clearEnglishSuggestions () {
                                this.englishSuggestionToken++;
                                if (this._suggestionTimer) {
                                    clearTimeout(this._suggestionTimer);
                                    this._suggestionTimer = null;
                                }
                                this.englishSuggestionsText = "";
                                (0, _suggestionState.setSuggestionSeed)("");
                                (0, _suggestionState.setSuggestions)("");
                            },
                            _touchEnglishSuggestion (letter) {
                                var index = this.englishSuggestionOrder.indexOf(letter);
                                if (index >= 0) this.englishSuggestionOrder.splice(index, 1);
                                this.englishSuggestionOrder.push(letter);
                            },
                            _cacheEnglishSuggestion (letter, rows) {
                                this.englishSuggestionParsed[letter] = rows;
                                this._touchEnglishSuggestion(letter);
                                while(this.englishSuggestionOrder.length > 3)delete this.englishSuggestionParsed[this.englishSuggestionOrder.shift()];
                            },
                            applyEnglishSuggestions (normalized, rows) {
                                var items = [];
                                var seen = {};
                                this.scanEnglishSuggestionRows(rows, normalized, items, seen);
                                var suggestions = this.buildEnglishSuggestions(normalized, items, seen).join("|");
                                this.englishSuggestionsText = suggestions;
                                (0, _suggestionState.setSuggestionSeed)(normalized);
                                (0, _suggestionState.setSuggestions)(suggestions);
                            },
                            scanEnglishSuggestionRows (rows, seed, items, seen) {
                                for(var i = 0; i < rows.length; i++){
                                    var row = rows[i];
                                    if (row && row.entryId && /^[0-9a-z]+$/.test(row.entryId)) {
                                        var word = this.normalizeEnglishSeed(row.word);
                                        if (word && word !== seed && !seen[word] && 0 === word.indexOf(seed)) {
                                            seen[word] = true;
                                            items.push({
                                                word: word,
                                                score: this.scoreEnglishCandidate(seed, word, this._expandTag(row.tags || ""))
                                            });
                                            if (items.length >= 80) break;
                                        }
                                    }
                                }
                            },
                            buildEnglishSuggestions (seed, items, seen) {
                                items.sort((left, right)=>{
                                    if (right.score !== left.score) return right.score - left.score;
                                    return left.word.length - right.word.length;
                                });
                                const output = [];
                                for(let i = 0; i < items.length && output.length < 30; i++)output.push(items[i].word);
                                if (seed.length >= 2) {
                                    for(let i = 0; i < ENGLISH_SUFFIXES.length && output.length < 30; i++){
                                        const suffix = ENGLISH_SUFFIXES[i];
                                        const combined = seed + suffix;
                                        if (!seen[combined] && output.indexOf(suffix) < 0) output.push(suffix);
                                    }
                                }
                                return output;
                            },
                            scoreEnglishCandidate (seed, word, tag) {
                                let score = 100 - (word.length - seed.length) * 4;
                                const tags = tag || "";
                                if (tags.indexOf("zk") >= 0) score += 40;
                                if (tags.indexOf("gk") >= 0) score += 36;
                                if (tags.indexOf("cet4") >= 0) score += 30;
                                if (tags.indexOf("cet6") >= 0 || tags.indexOf("ky") >= 0) score += 18;
                                if (tags.indexOf("toefl") >= 0 || tags.indexOf("ielts") >= 0) score += 8;
                                if (tags.indexOf("gre") >= 0) score -= 8;
                                return score;
                            },
                            normalizeEnglishSeed (value) {
                                const text = (value || "").toLowerCase();
                                const match = text.match(/[a-z][a-z'-]*$/);
                                return match && match[0] ? match[0] : "";
                            },
                            normalizeWord (value) {
                                return (value || "").toLowerCase().trim();
                            },
                            isEnglishWord (value) {
                                return /^[a-z][a-z'-]{0,20}$/.test(value || "");
                            },
                            hasEnglish (value) {
                                return /[a-z]/.test(value || "");
                            },
                            hasChinese (value) {
                                const text = value || "";
                                for(let i = 0; i < text.length; i++){
                                    const ch = text.charAt(i);
                                    if (ch >= "\u4e00" && ch <= "\u9fff") return true;
                                }
                                return false;
                            },
                            isChineseQuery (value) {
                                const text = value || "";
                                for(let i = 0; i < text.length; i++){
                                    const ch = text.charAt(i);
                                    if (ch < "\u4e00" || ch > "\u9fff") return false;
                                }
                                return text.length > 0;
                            }
                        };
                        const moduleOwn = exports.default || module.exports;
                        const accessors = [
                            'public',
                            'protected',
                            'private'
                        ];
                        if (moduleOwn.data && accessors.some(function(acc) {
                            return moduleOwn[acc];
                        })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                        if (!moduleOwn.data) {
                            moduleOwn.data = {};
                            moduleOwn._descriptor = {};
                            accessors.forEach(function(acc) {
                                const accType = typeof moduleOwn[acc];
                                if ('object' === accType) {
                                    moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                    for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                        access: acc
                                    };
                                } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                            });
                        }
                    };
                    var $app_template$ = function(vm) {
                        const _vm_ = vm || this;
                        return aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: function() {
                                    const $classValue$ = "page page-" + _vm_.screenProfile;
                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                    return $classValue$;
                                },
                                events: {
                                    touchstart: function(evt) {
                                        return _vm_.onTouchStart(evt);
                                    },
                                    touchend: function(evt) {
                                        return _vm_.onTouchEnd(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "top-row"
                                    ]
                                }
                            }, [
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return !_vm_.query;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "back-btn"
                                                ],
                                                src: "/common/icons/Back_B.png",
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onSearchButtonClick(evt);
                                                    }
                                                }
                                            }
                                        }, [])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.query;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "check-btn"
                                                ],
                                                src: "/common/icons/check-btn-blue.png",
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onSearchButtonClick(evt);
                                                    }
                                                }
                                            }
                                        }, [])
                                    ];
                                }),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "input-box input-box-" + _vm_.screenProfile;
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onInputBoxClick(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("marquee", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            id: "marquee-text",
                                            classList: function() {
                                                const $classValue$ = "input-text input-text-" + _vm_.screenProfile;
                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                return $classValue$;
                                            },
                                            scrollamount: function() {
                                                return _vm_.marqueeSpeed;
                                            },
                                            direction: "left",
                                            loop: "-1",
                                            textOffset: "40",
                                            value: function() {
                                                return _vm_.displayText;
                                            }
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "edit-row edit-row-" + _vm_.screenProfile;
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "move-left-btn"
                                        ],
                                        src: "/common/icons/btn_back_thin.png",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.moveLeft(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "clear-btn"
                                        ],
                                        src: "/common/icons/btn_delete_fat.png",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.clearText(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "move-right-btn"
                                        ],
                                        src: "/common/icons/btn_back_mirror_thin.png",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.moveRight(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.keyboardHidden;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hint-area"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "hint-text"
                                                ],
                                                value: "清空即可退出"
                                            }
                                        }, [])
                                    ])
                                ];
                            }),
                            aiot.__cc__("input-method", {
                                __vm__: _vm_,
                                __opts__: {
                                    hide: function() {
                                        return _vm_.keyboardHidden;
                                    },
                                    keyboardtype: function() {
                                        return _vm_.keyboardType;
                                    },
                                    maxlength: function() {
                                        return _vm_.maxLength;
                                    },
                                    vibratemode: function() {
                                        return _vm_.vibrateMode;
                                    },
                                    screentype: function() {
                                        return _vm_.screenType;
                                    },
                                    events: {
                                        "visibility-change": function(evt) {
                                            return _vm_.onVisibilityChange(evt);
                                        },
                                        "key-down": function(evt) {
                                            return _vm_.onKeyDown(evt);
                                        },
                                        delete: function(evt) {
                                            return _vm_.onDelete(evt);
                                        },
                                        complete: function(evt) {
                                            return _vm_.onComplete(evt);
                                        },
                                        ready: function(evt) {
                                            return _vm_.onReady(evt);
                                        }
                                    },
                                    englishonly: function() {
                                        return "inflect" === _vm_.searchMode;
                                    }
                                }
                            }, [])
                        ]);
                    };
                    $app_exports$['entry'] = function($app_exports$) {
                        $app_script$({}, $app_exports$, $app_require$1);
                        $app_exports$.default.template = $app_template$;
                        $app_exports$.default.style = $app_style$;
                    };
                })();
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXHNlYXJjaFxcc2VhcmNoLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3NyYy9jb21wb25lbnRzL0lucHV0TWV0aG9kL0lucHV0TWV0aG9kLnV4Iiwid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvY29tbW9uL2J1aWxkVGFyZ2V0LmpzIiwid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvY29tbW9uL2RpY3RDb2RlYy5qcyIsIndlYnBhY2s6Ly/ohZXkuIror43lhbgvc3JjL2NvbW1vbi9uYXZHdWFyZC5qcyIsIndlYnBhY2s6Ly/ohZXkuIror43lhbgvc3JjL2NvbW1vbi9zdWdnZXN0aW9uU3RhdGUuanMiLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3NyYy9jb21wb25lbnRzL0lucHV0TWV0aG9kL2Fzc2V0cy9kaWMuanMiLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3NyYy9jb21wb25lbnRzL0lucHV0TWV0aG9kL2Fzc2V0cy9kaWNVdGlsLmpzIiwid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvY29tcG9uZW50cy9JbnB1dE1ldGhvZC9hc3NldHMvZGljX2pwLmpzIiwid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvcGFnZXMvc2VhcmNoL3NlYXJjaC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VcIiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCIgc2hvdz1cInt7IWhpZGV9fVwiPlxyXG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6YmxhY2tcIiA+XHJcbiAgICAgIDwhLS0g5ZyG5bGPNjIgLS0+XHJcbiAgICAgIDxkaXYgaWY9XCJ7e3NjcmVlbnR5cGU9PT0nY2lyY2xlJ319XCIgc3R5bGU9XCJ3aWR0aDogNDgwcHg7aGVpZ2h0OiAzMjFweDtcIj5cclxuICAgICAgICA8IS0tIOWFqOmUruebmCAtLT5cclxuXHRcdDwhLS0g6L+Z6YeM5pivNDgwcHjlnIbooajlsY/luZXnmoTplK7nm5ggLS0+XHJcbiAgICAgICAgPGRpdiBpZD1cImZ1bGwta2V5Ym9hcmRcIiBpZj1cInt7a2V5Ym9hcmR0eXBlIT0nVDknfX1cIiBzdHlsZT1cIndpZHRoOiA0ODBweDtoZWlnaHQ6IDMyMXB4O1wiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzhweDtsZWZ0Ojc4cHg7d2lkdGg6MzI0cHg7aGVpZ2h0OjUycHg7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMzgsMzgsMzgpO2JvcmRlci1yYWRpdXM6IDEycHg7Ym9yZGVyOiAzcHggc29saWQgIzMzMzMzM1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycmJiAhbnVtRmxhZ319XCI+PC9kaXY+XHJcbiAgICAgICAgICA8aW1nIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gMH19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjQzcHg7bGVmdDozNTVweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL2Rvd24ucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cclxuICAgICAgICAgIDwhLS0g5bim5Y+Y6YeP55qE55u45a+56Lev5b6E5ZyoIGFpb3QtdG9va2l0IDIuMC40IOS4reS/ruWkjSAtLT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBvbmVudHMvSW5wdXRNZXRob2QvYXNzZXRzL2Z1bGwve3tsYW5nfX0ucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM4cHg7bGVmdDo3cHg7d2lkdGg6NjdweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdsYW5nJylcIiBpZj1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZ319XCIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOi00cHg7bGVmdDo3OHB4O3dpZHRoOjMyNHB4O1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgY3ZhbH19XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsdGV4dFwiIHN0eWxlPVwid2lkdGg6Mjk2cHg7XCI+IHt7Y3ZhbH19XyA8L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzY3JvbGxcclxuICAgICAgICAgICAgaWQ9XCJjaXJjbGVDaGluZXNlQ2FuZGlkYXRlc1wiXHJcbiAgICAgICAgICAgIHNjcm9sbC14PVwie3t0cnVlfX1cIlxyXG4gICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzhweDtsZWZ0OjgwcHg7d2lkdGg6Mjc3cHg7aGVpZ2h0OjUycHg7XCJcclxuICAgICAgICAgICAgc2hvdz1cInt7bGFuZyA9PT0gJ2NuJyAmJiAhbnVtRmxhZ319XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJoZWlnaHQ6NTJweDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgICAgICBmb3I9XCJ7e2N2YWxMaXN0fX1cIlxyXG4gICAgICAgICAgICAgICAgc2hvdz1cInt7cmVzdWx0TGlzdC5sZW5ndGggPiAkaWR4fX1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjaXJjbGUtZW4tY2FuZGlkYXRlXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uUnNTZWxlY3QocmVzdWx0TGlzdFskaWR4XSlcIlxyXG4gICAgICAgICAgICAgID57e3Jlc3VsdExpc3RbJGlkeF19fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3Njcm9sbD5cclxuICAgICAgICAgIDxzY3JvbGxcclxuICAgICAgICAgICAgaWQ9XCJjaXJjbGVFbmdsaXNoQ2FuZGlkYXRlc1wiXHJcbiAgICAgICAgICAgIHNjcm9sbC14PVwie3t0cnVlfX1cIlxyXG4gICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzhweDtsZWZ0OjgwcHg7d2lkdGg6Mjc3cHg7aGVpZ2h0OjUycHg7XCJcclxuICAgICAgICAgICAgc2hvdz1cInt7bGFuZyA9PT0gJ2VuJyAmJiAhbnVtRmxhZ319XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJoZWlnaHQ6NTJweDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgICAgICBmb3I9XCJ7e2N2YWxMaXN0fX1cIlxyXG4gICAgICAgICAgICAgICAgc2hvdz1cInt7cmVzdWx0TGlzdC5sZW5ndGggPiAkaWR4fX1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjaXJjbGUtZW4tY2FuZGlkYXRlXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uUnNTZWxlY3QocmVzdWx0TGlzdFskaWR4XSlcIlxyXG4gICAgICAgICAgICAgID57e3Jlc3VsdExpc3RbJGlkeF19fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3Njcm9sbD5cclxuICAgICAgICAgIDwhLS0g6L+Z6YeM5L2/55Soc2hvd+S8muWvvOiHtOavj+asoei+k+WFpemDveS8muWKoOi9veWFqOmDqOWAmemAieWIl+ihqO+8jOW+iOWNoSAtLT5cclxuICAgICAgICAgIDxsaXN0IGNsYXNzPVwibGlzdDNcIiBpZj1cInt7ZG93bkZsYWc9PT0nZG93bid9fVwiPlxyXG4gICAgICAgICAgICA8bGlzdC1pdGVtIHR5cGU9XCJ3YWl0aW5nUm93czYydDlcIiBjbGFzcz1cIml0ZW0zXCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBzdHlsZT1cImhlaWdodDo1MnB4O1wiIGZvcj1cInt7aXRlbSBpbiBpdGVtQXJyYXl9fVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY2FsYnRuMFwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7e2l0ZW19fVwiIEBjbGljaz1cIm9uUnNTZWxlY3QoaXRlbSlcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpc3QtaXRlbT5cclxuICAgICAgICAgIDwvbGlzdD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk1cHg7bGVmdDo4cHg7d2lkdGg6NDY0cHg7aGVpZ2h0OjUycHg7XCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmIW51bUZsYWd9fVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvUS5wbmdcIiBzdHlsZT1cIndpZHRoOjU0cHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ1EnKVwiIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuZnVsbFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydmdWxsNjInXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL1AucG5nXCIgc3R5bGU9XCJ3aWR0aDo1NHB4O2hlaWdodDo1MnB4O1wiIEBjbGljaz1cIm9uU2VsZWN0KCdQJylcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoxNTJweDtsZWZ0OjIzcHg7d2lkdGg6NDM4cHg7aGVpZ2h0OjUycHg7XCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmIW51bUZsYWd9fVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvYnRBLnBuZ1wiIHN0eWxlPVwid2lkdGg6NjBweDtoZWlnaHQ6NTJweDttYXJnaW4tcmlnaHQ6IDRweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnQScpXCIgLz5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGw2MiddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvTC5wbmdcIiBzdHlsZT1cIndpZHRoOjYwcHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ0wnKVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIwOXB4O2xlZnQ6NTZweDt3aWR0aDozNjhweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9aLnBuZ1wiIHN0eWxlPVwid2lkdGg6NzJweDtoZWlnaHQ6NTJweDttYXJnaW4tcmlnaHQ6IDRweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnWicpXCIgLz5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGw2MiddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvTS5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ00nKVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk1cHg7bGVmdDo4cHg7d2lkdGg6NDY0cHg7aGVpZ2h0OjUycHg7XCIgc2hvdz1cInt7bnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xLnBuZ1wiIHN0eWxlPVwid2lkdGg6NTRweDtoZWlnaHQ6NTJweDttYXJnaW4tcmlnaHQ6IDRweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnMScpXCIgLz5cclxuICAgICAgICAgICAgPHRleHQgaWY9XCJ7eyFudW1GbGFnX2pwfX1cIiBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbjYyJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGVsc2UgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242Ml9qcCddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvMC5wbmdcIiBzdHlsZT1cIndpZHRoOjU0cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJzAnKVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjE1MnB4O2xlZnQ6MjNweDt3aWR0aDo0MzhweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tudW1GbGFnfX1cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzItMS5wbmdcIiBzdHlsZT1cIndpZHRoOjYwcHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ34nKVwiIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0IGlmPVwie3shbnVtRmxhZ19qcH19XCIgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242MiddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBlbHNlIGNsYXNzPVwiY2FsYnRuZnVsbFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduNjJfanAnXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzItMi5wbmdcIiBzdHlsZT1cIndpZHRoOjYwcHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJz8nKVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIwOXB4O2xlZnQ6NTZweDt3aWR0aDozNjhweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tudW1GbGFnfX1cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzMtMS5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJygnKVwiIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0IGlmPVwie3shbnVtRmxhZ19qcH19XCIgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242MiddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBlbHNlIGNsYXNzPVwiY2FsYnRuZnVsbFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduNjJfanAnXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzMtMi5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgScpXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL2RlbC5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzhweDtsZWZ0OjQwNnB4O3dpZHRoOjY3cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnRCcpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyB9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvc3BhY2UucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MjQycHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3BhY2UnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgfX1cIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzQtMi5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjY2cHg7bGVmdDoyNDJweDt3aWR0aDoxMjBweDtoZWlnaHQ6NDhweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgn44CCJylcIiBzaG93PVwie3tudW1GbGFnIH19XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC80LTEucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ++8jCcpXCIgc2hvdz1cInt7bnVtRmxhZyAmJiAhbnVtRmxhZ19qcH19XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC80LTEucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgScpXCIgc2hvdz1cInt7bnVtRmxhZ19qcH19XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIwNHB4O2xlZnQ6NzhweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL3VwLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0g5Lmd6ZSuIC0tPlxyXG4gICAgICAgIDxkaXYgZWxzZSBzdHlsZT1cIndpZHRoOiA0ODBweDtoZWlnaHQ6IDMyMXB4O1wiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0Ojk1cHg7d2lkdGg6MjkwcHg7aGVpZ2h0OjYwcHg7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMzgsMzgsMzgpO2JvcmRlci1yYWRpdXM6IDk5OXB4O2JvcmRlcjogM3B4IHNvbGlkICMzMzMzMzNcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYgIW51bUZsYWd9fVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzaG93PVwie3tyZXN1bHRMaXN0Lmxlbmd0aCA+IDB9fVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDo0NHB4O2xlZnQ6MzM4cHg7XCIgc3JjPVwiLi9hc3NldHMvZnVsbC9kb3duLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XHJcbiAgICAgICAgICA8IS0tIOW4puWPmOmHj+eahOebuOWvuei3r+W+hOWcqCBhaW90LXRvb2tpdCAyLjAuNCDkuK3kv67lpI0gLS0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wb25lbnRzL0lucHV0TWV0aG9kL2Fzc2V0cy90OS97e2xhbmd9fS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0OjMxcHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIGlmPVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnfX1cIiAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6LTRweDtsZWZ0Ojk1cHg7d2lkdGg6MTQ1cHg7aGVpZ2h0OjQwcHg7XCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiBjdmFsfX1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWx0ZXh0XCIgc3R5bGU9XCJ3aWR0aDoxNDVweDtcIj4ge3tjdmFsfX1fIDwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnfX1cIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6LTRweDtsZWZ0OjI0MHB4O3dpZHRoOjE0NXB4O2hlaWdodDo0MHB4O2p1c3RpZnktY29udGVudDpmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBmb3I9XCJ7e3dhaXRpbmdMaXN0fX1cIiBjbGFzcz1cIndhaXRpbmcta2V5c1wiIHN0eWxlPVwiY29sb3I6e3skaWR4PT09d2FpdGluZ0luZGV4ID8gJ3JnYigxMywxMzIsMjU1KScgOiAnd2hpdGUnfX07XCIgQGNsaWNrPVwib25TZWxlY3RXYWl0aW5nKCRpZHgpXCI+e3t3YWl0aW5nTGlzdFskaWR4XX19PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c2Nyb2xsXHJcbiAgICAgICAgICAgIGlkPVwiY2lyY2xlVDlDYW5kaWRhdGVzXCJcclxuICAgICAgICAgICAgc2Nyb2xsLXg9XCJ7e3RydWV9fVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOXB4O2xlZnQ6MTA1cHg7d2lkdGg6MjMzcHg7aGVpZ2h0OjUycHg7XCJcclxuICAgICAgICAgICAgc2hvdz1cInt7KGxhbmcgPT09ICdjbicgfHwgbGFuZyA9PT0gJ2VuJykgJiYgIW51bUZsYWd9fVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwiaGVpZ2h0OjUycHg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtcIj5cclxuICAgICAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICAgICAgZm9yPVwie3tjdmFsTGlzdH19XCJcclxuICAgICAgICAgICAgICAgIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gJGlkeH19XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2lyY2xlLWVuLWNhbmRpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblJzU2VsZWN0KHJlc3VsdExpc3RbJGlkeF0pXCJcclxuICAgICAgICAgICAgICA+e3tyZXN1bHRMaXN0WyRpZHhdfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zY3JvbGw+XHJcbiAgICAgICAgICA8IS0tIOi/memHjOS9v+eUqHNob3fkvJrlr7zoh7Tmr4/mrKHovpPlhaXpg73kvJrliqDovb3lhajpg6jlgJnpgInliJfooajvvIzlvojljaEgLS0+XHJcbiAgICAgICAgICA8bGlzdCBjbGFzcz1cImxpc3QzXCIgaWY9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIj5cclxuICAgICAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwid2FpdGluZ1Jvd3M2MmZ1bGxcIiBjbGFzcz1cIml0ZW0zXCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBzdHlsZT1cImhlaWdodDo1MnB4O1wiIGZvcj1cInt7aXRlbSBpbiBpdGVtQXJyYXl9fVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY2FsYnRuMFwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7e2l0ZW19fVwiIEBjbGljaz1cIm9uUnNTZWxlY3QoaXRlbSlcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpc3QtaXRlbT5cclxuICAgICAgICAgIDwvbGlzdD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDo5NXB4O3dpZHRoOjI5NHB4O2hlaWdodDo2MHB4O1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycmJiFudW1GbGFnfX1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCdzZWxlY3QnKVwiPumAieaLqTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWyd0OSddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbS50b1VwcGVyQ2FzZSgpfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjE2M3B4O2xlZnQ6OTVweDt3aWR0aDoyOTRweDtoZWlnaHQ6NjBweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1sndDknXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW0udG9VcHBlckNhc2UoKX19PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyMjdweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmIW51bUZsYWd9fVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3Q5J11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtLnRvVXBwZXJDYXNlKCl9fTwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7bnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgnNycpXCI+NzwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCc4JylcIj44PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzknKVwiPjk8L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDo5NXB4O3dpZHRoOjI5NHB4O2hlaWdodDo2MHB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzQnKVwiPjQ8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgnNScpXCI+NTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCc2JylcIj42PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoxNjNweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7bnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgnMScpXCI+MTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCcyJylcIj4yPC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzMnKVwiPjM8L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIyN3B4O2xlZnQ6OTVweDt3aWR0aDoyOTRweDtoZWlnaHQ6NjBweDtcIiBzaG93PVwie3tudW1GbGFnfX1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCfvvIwnKVwiPu+8jDwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCcwJylcIj4wPC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgicpXCI+44CCPC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Q5L2RlbC5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0OjM4OXB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdEJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnIH19XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvdDkvc3BhY2UucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDozODlweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3BhY2UnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgfX1cIiAvPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjA0cHg7bGVmdDo3OHB4O1wiIHNyYz1cIi4vYXNzZXRzL2Z1bGwvdXAucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nZG93bid9fVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIOaWueWxjzY3IC0tPlxyXG4gICAgICA8ZGl2IGlmPVwie3tzY3JlZW50eXBlPT09J3JlY3QnfX1cIiBzdHlsZT1cIndpZHRoOiAxMDAlO2hlaWdodDogMjU1cHg7ZmxleC1kaXJlY3Rpb246IGNvbHVtblwiPlxyXG4gICAgICAgIDwhLS0g5Lmd6ZSu5Lit5paHIC0tPlxyXG4gICAgICAgIDxkaXYgaWY9XCJ7e2tleWJvYXJkdHlwZT09J1Q5JyAmJiAhbnVtRmxhZ319XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTExcHg7d2lkdGg6MTAwJTtoZWlnaHQ6Mjc2cHg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwidG9wOjc3cHg7aGVpZ2h0OjE4OXB4O3dpZHRoOjEwMCU7YWxpZ24taXRlbXM6IHN0cmV0Y2g7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47cGFkZGluZzo2cHggM3B4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dzLXJlY3QtdDlcIj5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5IGNhbGJ0bnQ5LXJlY3RcIiBAY2xpY2s9XCJvblNlbGVjdCgnc2VsZWN0JylcIj5cclxuICAgICAgICAgICAgICAgIOmAieaLqVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWY9XCJ7e3dhaXRpbmdMaXN0Lmxlbmd0aCAhPSAwfX1cIiBjbGFzcz1cIndhaXRpbmcta2V5c1wiIHN0eWxlPVwiY29sb3I6cmdiKDEzLDEzMiwyNTUpO1wiIEBjbGljaz1cIm9uU2VsZWN0V2FpdGluZyh3YWl0aW5nSW5kZXgpXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7d2FpdGluZ0xpc3Rbd2FpdGluZ0luZGV4XS50b1VwcGVyQ2FzZSgpfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OSBjYWxidG50OS1yZWN0XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3Q5J11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtLnRvVXBwZXJDYXNlKCl9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dzLXJlY3QtdDlcIj5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5IGNhbGJ0bnQ5LXJlY3RcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1sndDknXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW0udG9VcHBlckNhc2UoKX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd3MtcmVjdC10OVwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDkgY2FsYnRudDktcmVjdFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWyd0OSddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbS50b1VwcGVyQ2FzZSgpfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBlbHNlIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMXB4O3dpZHRoOjEwMCU7aGVpZ2h0OjI3NnB4O2p1c3RpZnktY29udGVudDogY2VudGVyXCI+XHJcbiAgICAgICAgICA8cHJvZ3Jlc3MgcGVyY2VudD1cInt7cGVyY2VudDY3fX1cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2JvdHRvbTogMTJweDt3aWR0aDo4MHB4O2NvbG9yOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjZweDtsYXllci1jb2xvcjojMjYyNjI2O1wiPjwvcHJvZ3Jlc3M+XHJcbiAgICAgICAgICA8c2Nyb2xsIGlkPVwia2V5Ym9hcmQ2N1wiIHNjcm9sbC14PVwie3t0cnVlfX1cIiBvbnNjcm9sbD1cImhhbmRlbFNjcm9sbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlmPVwie3shbnVtRmxhZ319XCIgc3R5bGU9XCJsZWZ0OiA2cHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMHB4O21hcmdpbi10b3A6IDBweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGwnXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMnB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydmdWxsJ11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogNjRweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbCddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdGF0aWMgc3JjPVwiLi9hc3NldHMvaG9yaXpvbnRhbC9zcGFjZS5wbmdcIiBzdHlsZT1cIndpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzcGFjZScpXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWY9XCJ7e251bUZsYWcgJiYgIW51bUZsYWdfanB9fVwiIHN0eWxlPVwibGVmdDogNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBweDttYXJnaW4tdG9wOiAwcHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzJweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbiddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDY0cHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ24nXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWY9XCJ7e251bUZsYWdfanB9fVwiIHN0eWxlPVwibGVmdDogNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBweDttYXJnaW4tdG9wOiAwcHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduX2pwJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzJweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbl9qcCddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDY0cHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ25fanAnXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3Njcm9sbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB0b3A6NnB4OyBwYWRkaW5nOjAgNnB4O1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2NuLnBuZ1wiIHN0eWxlPVwicGFkZGluZzogNnB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdsYW5nJylcIiBpZj1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiBsYW5nPT09J2NuJ319XCIgLz5cclxuICAgICAgICAgIDxkaXYgaWY9XCJ7eyhsYW5nID09PSAnY24nIHx8IGxhbmcgPT09ICdlbicpICYmICFudW1GbGFnfX1cIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7ZmxleDogMTtoZWlnaHQ6IDYwcHg7YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O2JvcmRlci1jb2xvcjogIzMzMzMzMzsgYm9yZGVyLXdpZHRoOiAzcHg7IGJvcmRlci1yYWRpdXM6IDEwMHB4O2ZsZXgtZGlyZWN0aW9uOiByb3c7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO1wiPlxyXG4gICAgICAgICAgICA8c2Nyb2xsIGlkPVwiY3ZhbFdhaXRpbmdcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo0MnB4O1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDoyMHB4O2hlaWdodDo0MnB4O3BhZGRpbmctcmlnaHQ6NjBweDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG4wMlwiIHN0eWxlPVwicGFkZGluZy1yaWdodDoxMHB4O2ZsZXgtc2hyaW5rOjA7XCIgQGNsaWNrPVwicHVzaEN2YWxcIj57e2N2YWx9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGZvcj1cInt7Y3ZhbExpc3R9fVwiIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gJGlkeH19XCIgY2xhc3M9XCJjYWxidG4wMlwiIHN0eWxlPVwicGFkZGluZy1yaWdodDoxMHB4O2ZsZXgtc2hyaW5rOjA7XCIgQGNsaWNrPVwib25Sc1NlbGVjdChyZXN1bHRMaXN0WyRpZHhdKVwiPnt7cmVzdWx0TGlzdFskaWR4XX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3Njcm9sbD5cclxuICAgICAgICAgICAgPGltZyBpZj1cInt7cmVzdWx0TGlzdC5sZW5ndGggPiAwfX1cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3JpZ2h0OiA4cHg7IHdpZHRoOiA2MHB4O2hlaWdodDogNDBweDtcIiBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2Rvd24yLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaG9yaXpvbnRhbC9lbi5wbmdcIiBzdHlsZT1cInBhZGRpbmc6IDZweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnbGFuZycpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIGlmPVwie3shbnVtRmxhZ319XCIgc3JjPVwiLi9hc3NldHMvaG9yaXpvbnRhbC9kZWwucG5nXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNnB4O3BhZGRpbmc6IDZweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnRCcpXCIgLz5cclxuICAgICAgICAgIDxpbWcgZWxzZSBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2RlbDIucG5nXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNnB4O3BhZGRpbmc6IDZweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdEJylcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0g6L+Z6YeM5L2/55Soc2hvd+S8muWvvOiHtOavj+asoei+k+WFpemDveS8muWKoOi9veWFqOmDqOWAmemAieWIl+ihqO+8jOW+iOWNoSAtLT5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDBweDt0b3A6IDBweDt3aWR0aDogMTAwJTtoZWlnaHQ6IDI1MnB4O2JhY2tncm91bmQtY29sb3I6IGJsYWNrOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlclwiIGlmPVwie3tkb3duRmxhZz09PSdkb3duJ319XCI+XHJcbiAgICAgICAgICA8bGlzdCBzdGF0aWMgY2xhc3M9XCJsaXN0NjdcIj5cclxuICAgICAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwid2FpdGluZ1Jvd3M2N1wiIGNsYXNzPVwiaXRlbTY3XCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNhbGJ0bjAyXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7aXRlbX19XCIgQGNsaWNrPVwib25Sc1NlbGVjdChpdGVtKVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGlzdC1pdGVtPlxyXG4gICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgPGltZyBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tdG9wOjVweFwiIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvdXAyLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIOiDtuWbiuWxjzY2IC0tPlxyXG4gICAgICA8ZGl2IGlmPVwie3tzY3JlZW50eXBlPT09J3BpbGwtc2hhcGVkJ319XCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtoZWlnaHQ6IDMwNXB4XCI+XHJcbiAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjBweDt0b3A6MzRweDt3aWR0aDoxMDAlO2hlaWdodDoyNzZweDtcIj5cclxuICAgICAgICAgIDxwcm9ncmVzcyBwZXJjZW50PVwie3szMCtwZXJjZW50NjZ9fVwiIHR5cGU9XCJhcmNcIiBzdHlsZT1cInN0YXJ0LWFuZ2xlOjIwNGRlZzt0b3RhbC1hbmdsZTotNDhkZWc7d2lkdGg6MTg4cHg7aGVpZ2h0OjE4OHB4O3RvcDo4MnB4O2xlZnQ6MnB4O3Bvc2l0aW9uOmFic29sdXRlO2NvbG9yOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjZweDtsYXllci1jb2xvcjojMjYyNjI2O21hcmdpbi1sZWZ0OiB7e2tleWJvYXJkTGVmdE9mZnNldH19cHg7XCI+PC9wcm9ncmVzcz5cclxuICAgICAgICAgIDxzY3JvbGwgaWQ9XCJrZXlib2FyZDY2XCIgc2Nyb2xsLXg9XCJ7e3RydWV9fVwiIG9uc2Nyb2xsPVwiaGFuZGVsU2Nyb2xsXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IHt7a2V5Ym9hcmRMZWZ0T2Zmc2V0fX1weDtwYWRkaW5nLXJpZ2h0OiB7e2tleWJvYXJkTGVmdE9mZnNldH19cHg7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWY9XCJ7eyFudW1GbGFnfX1cIiBzdHlsZT1cImxlZnQ6IDNweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwcHg7bWFyZ2luLXRvcDogMHB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbCddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMycHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGwnXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2NHB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydmdWxsJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0YXRpYyBzcmM9XCIuL2Fzc2V0cy9hcmMvc3BhY2UucG5nXCIgc3R5bGU9XCJ3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3BhY2UnKVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlmPVwie3tudW1GbGFnICYmICFudW1GbGFnX2pwfX1cIiBzdHlsZT1cImxlZnQ6IDNweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwcHg7bWFyZ2luLXRvcDogMHB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbiddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMycHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ24nXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2NHB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlmPVwie3tudW1GbGFnX2pwfX1cIiBzdHlsZT1cImxlZnQ6IDNweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwcHg7bWFyZ2luLXRvcDogMHB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbl9qcCddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMycHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ25fanAnXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2NHB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduX2pwJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zY3JvbGw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDoge3trZXlib2FyZExlZnRPZmZzZXR9fXB4O3RvcDogMHB4O3dpZHRoOiAxOTJweDtoZWlnaHQ6IDExMHB4O1wiPiBcclxuICAgICAgICAgIDxpbWcgc3RhdGljIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDNweDt0b3A6IDQ3cHg7d2lkdGg6IDE4NnB4O2hlaWdodDogNjBweDtcIiBzcmM9XCIuL2Fzc2V0cy9hcmMvc2VhcmNoLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8c2Nyb2xsIGlkPVwiY3ZhbFdhaXRpbmdcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMTVweDt0b3A6IDU2cHg7d2lkdGg6IDE0NHB4O2hlaWdodDogNDJweDtcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwcHg7dG9wOiAwcHg7aGVpZ2h0OiA0MnB4O3BhZGRpbmctcmlnaHQ6MjBweFwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuMDJcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6MTBweFwiIEBjbGljaz1cInB1c2hDdmFsXCI+e3tjdmFsfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgZm9yPVwie3tjdmFsTGlzdH19XCIgc2hvdz1cInt7cmVzdWx0TGlzdC5sZW5ndGggPiAkaWR4fX1cIiBjbGFzcz1cImNhbGJ0bjAyXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjEwcHhcIiBAY2xpY2s9XCJvblJzU2VsZWN0KHJlc3VsdExpc3RbJGlkeF0pXCI+e3tyZXN1bHRMaXN0WyRpZHhdfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zY3JvbGw+XHJcbiAgICAgICAgICA8aW1nIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gMH19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMTIwcHg7dG9wOiA1N3B4O3dpZHRoOiA2MHB4O2hlaWdodDogNDBweDtcIiBzcmM9XCIuL2Fzc2V0cy9hcmMvZG93bjIucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cclxuICAgICAgICAgIDwhLS0g5bim5Y+Y6YeP55qE55u45a+56Lev5b6E5ZyoIGFpb3QtdG9va2l0IDIuMC40IOS4reS/ruWkjSAtLT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBvbmVudHMvSW5wdXRNZXRob2QvYXNzZXRzL2FyYy97e2xhbmd9fS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6OXB4O3dpZHRoOiA0OHB4O2hlaWdodDogNDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdsYW5nJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmICFudW1GbGFnX2pwfX1cIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9hcmMvZGVsLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDEzNXB4O3RvcDogMHB4O3dpZHRoOiA0OHB4O2hlaWdodDogNDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdEJylcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0g6L+Z6YeM5L2/55Soc2hvd+S8muWvvOiHtOavj+asoei+k+WFpemDveS8muWKoOi9veWFqOmDqOWAmemAieWIl+ihqO+8jOW+iOWNoSAtLT5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDogNDdweDt3aWR0aDogMTAwJTtoZWlnaHQ6IDI2M3B4O2JhY2tncm91bmQtY29sb3I6IGJsYWNrO1wiIGlmPVwie3tkb3duRmxhZz09PSdkb3duJ319XCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IHt7a2V5Ym9hcmRMZWZ0T2Zmc2V0fX1weDt3aWR0aDogMTkycHg7aGVpZ2h0OiAyNjNweDtcIj4gXHJcbiAgICAgICAgICAgIDxsaXN0IHN0YXRpYyBjbGFzcz1cImxpc3Q2NlwiPlxyXG4gICAgICAgICAgICAgIDxsaXN0LWl0ZW0gdHlwZT1cIndhaXRpbmdSb3dzNjZcIiBjbGFzcz1cIml0ZW02NlwiIGZvcj1cInt7aXRlbUFycmF5IGluIHJlc3VsdExpc3QyfX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY2FsYnRuMFwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7e2l0ZW19fVwiIEBjbGljaz1cIm9uUnNTZWxlY3QoaXRlbSlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgIDwvbGlzdD5cclxuICAgICAgICAgICAgPGltZyBzdGF0aWMgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjE5NnB4O2xlZnQ6NTZweDt3aWR0aDogODBweDtoZWlnaHQ6IDYwcHg7XCIgc3JjPVwiLi9hc3NldHMvYXJjL3VwMi5wbmdcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdkb3duJylcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgdmlicmF0b3IgZnJvbSBcIkBzeXN0ZW0udmlicmF0b3JcIjtcclxuaW1wb3J0IHsgU2ltcGxlSW5wdXRNZXRob2QgfSBmcm9tIFwiLi9hc3NldHMvZGljVXRpbC5qc1wiO1xyXG5pbXBvcnQge2dldFN1Z2dlc3Rpb25TZWVkLCBnZXRTdWdnZXN0aW9ucywgb25TdWdnZXN0aW9uc0NoYW5nZX0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdWdnZXN0aW9uU3RhdGVcIlxyXG5jb25zdCBLRVlfTUFQUyA9IHtcclxuICBmdWxsOiBbXHJcbiAgICBbXCJRXCIsIFwiV1wiLCBcIkVcIiwgXCJSXCIsIFwiVFwiLCBcIllcIiwgXCJVXCIsIFwiSVwiLCBcIk9cIiwgXCJQXCJdLFxyXG4gICAgW1wiQVwiLCBcIlNcIiwgXCJEXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSlwiLCBcIktcIiwgXCJMXCJdLFxyXG4gICAgW1wiWlwiLCBcIlhcIiwgXCJDXCIsIFwiVlwiLCBcIkJcIiwgXCJOXCIsIFwiTVwiXVxyXG4gIF0sXHJcbiAgc2lnbjogW1xyXG4gICAgW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiXSxcclxuICAgIFtcIn5cIiwgXCIhXCIsIFwiQFwiLCBcIiNcIiwgXCIlXCIsIFwiXFx1MjAxY1wiLCBcIlxcdTIwMWRcIiwgXCIqXCIsIFwiP1wiLCBcIi9cIl0sXHJcbiAgICBbXCIoXCIsIFwiKVwiLCBcIi1cIiwgXCJfXCIsIFwiOlwiLCBcIjtcIiwgXCJcXHVmZjBjXCIsIFwiXFx1MzAwMlwiLCBcIi5cIl1cclxuICBdLFxyXG4gIHNpZ25fanA6IFtcclxuICAgIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIl0sXHJcbiAgICBbXCJ+XCIsIFwiXFx1MjAyMlwiLCBcIkBcIiwgXCIjXCIsIFwiJVwiLCBcIlxcdTMwMGNcIiwgXCJcXHUzMDBkXCIsIFwiKlwiLCBcIj9cIiwgXCIvXCJdLFxyXG4gICAgW1wiKFwiLCBcIilcIiwgXCItXCIsIFwiXFx1MjAyNlwiLCBcIjpcIiwgXCI7XCIsIFwiXFx1MzAwMVwiLCBcIlxcdTMwMDJcIiwgXCIhXCJdXHJcbiAgXSxcclxuICBzaWduNjI6IFtcclxuICAgIFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdLFxyXG4gICAgW1wiIVwiLCBcIkBcIiwgXCIjXCIsIFwiJVwiLCBcIlxcdTIwMWNcIiwgXCJcXHUyMDFkXCIsIFwiKlwiXSxcclxuICAgIFtcIilcIiwgXCItXCIsIFwiX1wiLCBcIjpcIiwgXCI7XCJdXHJcbiAgXSxcclxuICBzaWduNjJfanA6IFtcclxuICAgIFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdLFxyXG4gICAgW1wiXFx1MjAyMlwiLCBcIkBcIiwgXCIjXCIsIFwiJVwiLCBcIlxcdTMwMGNcIiwgXCJcXHUzMDBkXCIsIFwiKlwiXSxcclxuICAgIFtcIilcIiwgXCItXCIsIFwiXFx1MjAyNlwiLCBcIjpcIiwgXCI7XCJdXHJcbiAgXSxcclxuICBmdWxsNjI6IFtcclxuICAgIFtcIldcIiwgXCJFXCIsIFwiUlwiLCBcIlRcIiwgXCJZXCIsIFwiVVwiLCBcIklcIiwgXCJPXCJdLFxyXG4gICAgW1wiU1wiLCBcIkRcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJKXCIsIFwiS1wiXSxcclxuICAgIFtcIlhcIiwgXCJDXCIsIFwiVlwiLCBcIkJcIiwgXCJOXCJdXHJcbiAgXSxcclxuICB0OTogW1xyXG4gICAgW1wiYWJjXCIsIFwiZGVmXCJdLFxyXG4gICAgW1wiZ2hpXCIsIFwiamtsXCIsIFwibW5vXCJdLFxyXG4gICAgW1wicHFyc1wiLCBcInR1dlwiLCBcInd4eXpcIl1cclxuICBdXHJcbn1cclxuZnVuY3Rpb24gZG9TZWFyY2hEaWMod29yZCwgbGFuZywgY2IpIHtcclxuICBpZiAoIXdvcmQpIHtcclxuICAgIGNiKFtdKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IFNpbXBsZUlucHV0TWV0aG9kLmdldEhhbnppKHdvcmQsIGxhbmcpO1xyXG4gIGNiKEFycmF5LmlzQXJyYXkocmVzdWx0KSAmJiByZXN1bHRbMF0gPyByZXN1bHRbMF0gOiBbXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUxhc3QodCkge1xyXG4gIGlmICh0KSB7XHJcbiAgICByZXR1cm4gdC5zdWJzdHIoMCwgdC5sZW5ndGggLSAxKTtcclxuICB9XHJcbiAgcmV0dXJuIFwiXCI7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBoaWRlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAga2V5Ym9hcmR0eXBlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiUVdFUlRZXCIsXHJcbiAgICB9LFxyXG4gICAgbWF4bGVuZ3RoOiB7XHJcbiAgICAgIGRlZmF1bHQ6IDUsXHJcbiAgICB9LFxyXG4gICAgdmlicmF0ZW1vZGU6IHtcclxuICAgICAgZGVmYXVsdDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzY3JlZW50eXBlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiY2lyY2xlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgY3ZhbDogXCJcIixcclxuICAgIHJlc3VsdExpc3Q6IFtdLFxyXG4gICAgcmVzdWx0TGlzdDI6IFtdLFxyXG4gICAgd2FpdGluZ0xpc3Q6IFtdLFxyXG4gICAgd2FpdGluZ0luZGV4OiAtMSxcclxuICAgIGxhc3RXYWl0aW5nU3RyOiBcIlwiLFxyXG4gICAgZG93bkZsYWc6IFwiXCIsXHJcbiAgICBsYW5nOiBcImVuXCIsXHJcbiAgICBudW1GbGFnOiBmYWxzZSxcclxuICAgIG51bUZsYWdfanA6IGZhbHNlLFxyXG4gICAgdXBwZXJGbGFnOiBmYWxzZSxcclxuICAgIGN2YWxMaXN0OiBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICBwZXJjZW50Njc6IDUyLFxyXG4gICAgcGVyY2VudDY2OiAwLFxyXG4gICAgLy8g6ZKI5a+5c2NyZWVuU2hhcGXkuLpyZWN055qE6K6+5aSH77yM5Lya6Ieq5Yqo6I635Y+Wc2NyZWVuV2lkdGjlubbnu5HlrprliLDmoLlkaXZcclxuICAgIC8vIOi/meagt+S+v+iDveWQjOaXtumAgumFjW42N+WSjG82NeeUmuiHs+aYr+WQjue7reiuvuWkh++8jOS9huWunumZheaViOaenOWPr+iDveWPl2Rlc2lnbldpZHRo5b2x5ZONXHJcbiAgICBzY3JlZW5XaWR0aDogNDMyLFxyXG4gICAga2V5Ym9hcmRMZWZ0T2Zmc2V0OiAxMjAsXHJcbiAgICBrZXlzOiBLRVlfTUFQUyxcclxuICB9LFxyXG4gIG9uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmxhbmcgIT09IFwiY25cIiAmJiB0aGlzLmxhbmcgIT09IFwiZW5cIikge1xyXG4gICAgICB0aGlzLmxhbmcgPSBcImNuXCI7XHJcbiAgICAgIHRoaXMubnVtRmxhZ19qcCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWF4bGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBDdmFsTGlzdCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4bGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0ZW1wQ3ZhbExpc3QucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmN2YWxMaXN0ID0gdGVtcEN2YWxMaXN0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JlZW5XaWR0aCA9IDQzMlxyXG4gICAgdGhpcy5rZXlib2FyZExlZnRPZmZzZXQgPSAxMjBcclxuICAgIHRoaXMuJGVtaXQoXCJyZWFkeVwiLCB7fSlcclxuICAgIHRoaXMuJHdhdGNoKFwiaGlkZVwiLCBcIndhdGNoSGlkZVByb3BzQ2hhbmdlXCIpO1xyXG4gICAgdGhpcy4kd2F0Y2goXCJtYXhsZW5ndGhcIiwgXCJ3YXRjaE1heExlbmd0aFByb3BzQ2hhbmdlXCIpO1xyXG4gICAgdGhpcy4kd2F0Y2goXCJrZXlib2FyZHR5cGVcIiwgXCJ3YXRjaEtleWJvYXJkVHlwZVByb3BzQ2hhbmdlXCIpO1xyXG4gICAgb25TdWdnZXN0aW9uc0NoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmxhbmcgPT09IFwiZW5cIikge1xyXG4gICAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KClcclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpKVxyXG4gIH0sXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgdGhpcy4kdW53YXRjaChcImhpZGVcIilcclxuICAgIHRoaXMuJHVud2F0Y2goXCJtYXhsZW5ndGhcIilcclxuICAgIHRoaXMuJHVud2F0Y2goXCJrZXlib2FyZHR5cGVcIilcclxuICAgIG9uU3VnZ2VzdGlvbnNDaGFuZ2UobnVsbClcclxuICB9LFxyXG4gIGFkZEFsbFR4dCh0eHQpIHtcclxuICAgIHRoaXMuJGVtaXQoXCJjb21wbGV0ZVwiLCB7IGNvbnRlbnQ6IHR4dCB9KTtcclxuICB9LFxyXG4gIG9uUnNTZWxlY3QodHh0KSB7XHJcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0eHQ7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSBcImVuXCIpIHtcclxuICAgICAgY29uc3Qgc2VlZCA9IHRoaXMubm9ybWFsaXplRW5nbGlzaFNlZWQoZ2V0U3VnZ2VzdGlvblNlZWQoKSk7XHJcbiAgICAgIGNvbnN0IHdvcmQgPSB0aGlzLm5vcm1hbGl6ZUVuZ2xpc2hTZWVkKHR4dCk7XHJcbiAgICAgIGlmIChzZWVkICYmIHdvcmQuaW5kZXhPZihzZWVkKSA9PT0gMCAmJiB3b3JkLmxlbmd0aCA+IHNlZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgY29udGVudCA9IHdvcmQuc2xpY2Uoc2VlZC5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmN2YWwgPSBcIlwiO1xyXG4gICAgdGhpcy5hZGRBbGxUeHQoY29udGVudCk7XHJcbiAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xyXG4gICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcclxuICAgIHRoaXMuZG93bkZsYWcgPSBcIlwiO1xyXG4gIH0sXHJcbiAgb25CdG5DbGljayhzaWduKSB7XHJcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xyXG4gICAgc3dpdGNoIChzaWduKSB7XHJcbiAgICAgIGNhc2UgXCJBQ1wiOlxyXG4gICAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcclxuICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibGFuZ1wiOlxyXG4gICAgICAgIHRoaXMubGFuZyA9IHRoaXMubGFuZyA9PT0gXCJjblwiID8gXCJlblwiIDogXCJjblwiO1xyXG4gICAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcclxuICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRFwiOlxyXG4gICAgICAgIGlmICh0aGlzLndhaXRpbmdJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xyXG4gICAgICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3ZhbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmN2YWwgPSBkZWxldGVMYXN0KHRoaXMuY3ZhbCk7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiZGVsZXRlXCIsIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzcGFjZVwiOlxyXG4gICAgICAgIHRoaXMuYWRkQWxsVHh0KFwiIFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRvd25cIjpcclxuICAgICAgICB0aGlzLmRvd25GbGFnID0gdGhpcy5kb3duRmxhZyA9PT0gXCJkb3duXCIgPyBcIlwiIDogXCJkb3duXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzZWxlY3RcIjpcclxuICAgICAgICBpZiAodGhpcy5sYXN0V2FpdGluZ1N0ciAhPSBzaWduICYmIHRoaXMubGFzdFdhaXRpbmdTdHIpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN2YWwgKz0gdGhpcy53YWl0aW5nTGlzdFt0aGlzLndhaXRpbmdJbmRleF07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEFsbFR4dCh0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInN3aXRjaE51bVwiOlxyXG4gICAgICAgIHRoaXMubnVtRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubnVtRmxhZ19qcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcclxuICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic3dpdGNoTnVtX2pwXCI6XHJcbiAgICAgICAgdGhpcy5udW1GbGFnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5udW1GbGFnX2pwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdmFsID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xyXG4gICAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzd2l0Y2hDblwiOlxyXG4gICAgICAgIHRoaXMubnVtRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubnVtRmxhZ19qcCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic3dpdGNoVXBwZXJcIjpcclxuICAgICAgICB0aGlzLnVwcGVyRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic3dpdGNoTG93XCI6XHJcbiAgICAgICAgdGhpcy51cHBlckZsYWcgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpZiAoc2lnbi5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMuYWRkQWxsVHh0KHNpZ24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy53YWl0aW5nSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0V2FpdGluZ1N0ciA9PT0gc2lnbikge1xyXG4gICAgICAgICAgICAgIHRoaXMud2FpdGluZ0luZGV4Kys7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMud2FpdGluZ0luZGV4ID49IHRoaXMubGFzdFdhaXRpbmdTdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRpbmdJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdmFsICs9IHRoaXMud2FpdGluZ0xpc3RbdGhpcy53YWl0aW5nSW5kZXhdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFsbFR4dChcclxuICAgICAgICAgICAgICAgICAgdGhpcy53YWl0aW5nTGlzdFt0aGlzLndhaXRpbmdJbmRleF0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMubGFzdFdhaXRpbmdTdHIgPSBzaWduO1xyXG4gICAgICAgICAgICAgIHRoaXMud2FpdGluZ0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICB0aGlzLndhaXRpbmdMaXN0ID0gc2lnbi5zcGxpdChcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0V2FpdGluZ1N0ciA9IHNpZ247XHJcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ0luZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy53YWl0aW5nTGlzdCA9IHNpZ24uc3BsaXQoXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG4gIGNsZWFyV2FpdGluZygpIHtcclxuICAgIHRoaXMud2FpdGluZ0xpc3QgPSBbXTtcclxuICAgIHRoaXMud2FpdGluZ0luZGV4ID0gLTE7XHJcbiAgICB0aGlzLmxhc3RXYWl0aW5nU3RyID0gXCJcIjtcclxuICB9LFxyXG4gIHJlc2V0UmVzbHV0TGlzdCgpIHtcclxuICAgIGxldCB3YXRpbmdTdHIgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMubGFzdFdhaXRpbmdTdHIgJiYgdGhpcy5sYXN0V2FpdGluZ1N0clt0aGlzLndhaXRpbmdJbmRleF0pIHtcclxuICAgICAgd2F0aW5nU3RyID0gdGhpcy5sYXN0V2FpdGluZ1N0clt0aGlzLndhaXRpbmdJbmRleF07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSBcImVuXCIpIHtcclxuICAgICAgdGhpcy5nZXRFbmdsaXNoUmVzdWx0cyhnZXRTdWdnZXN0aW9uU2VlZCgpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCEodGhpcy5jdmFsICsgd2F0aW5nU3RyKSB8fCB0aGlzLmxhbmcgIT09IFwiY25cIikge1xyXG4gICAgICB0aGlzLnJlc3VsdExpc3QgPSBbXTtcclxuICAgICAgdGhpcy5zZXRSZXN1bHRMaXN0QWxsKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0UmVzdWx0QnlXb3JkKHRoaXMuY3ZhbCArIHdhdGluZ1N0cik7XHJcbiAgfSxcclxuICBzZXRSZXN1bHRMaXN0QWxsKCkge1xyXG4gICAgdGhpcy5yZXN1bHRMaXN0MiA9IFtdO1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBjb25zdCByb3dTaXplID0gdGhpcy5sYW5nID09PSBcImVuXCIgPyAxIDogcGFyc2VJbnQodGhpcy5tYXhsZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXJyYXkucHVzaCh0aGlzLnJlc3VsdExpc3RbaV0pO1xyXG4gICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSByb3dTaXplKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRMaXN0Mi5wdXNoKGFycmF5KTtcclxuICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCAmJiBhcnJheS5sZW5ndGggPCByb3dTaXplKSB7XHJcbiAgICAgIHRoaXMucmVzdWx0TGlzdDIucHVzaChhcnJheSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRSZXN1bHRCeVdvcmQodmFsKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIGRvU2VhcmNoRGljKHZhbCwgdGhhdC5sYW5nLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB0aGF0LnJlc3VsdExpc3QgPSBkYXRhO1xyXG4gICAgICB0aGF0LnNldFJlc3VsdExpc3RBbGwoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0RW5nbGlzaFJlc3VsdHMoc2VlZFZhbHVlKSB7XHJcbiAgICBjb25zdCBzZWVkID0gdGhpcy5ub3JtYWxpemVFbmdsaXNoU2VlZChzZWVkVmFsdWUpO1xyXG4gICAgaWYgKCFzZWVkKSB7XHJcbiAgICAgIHRoaXMucmVzdWx0TGlzdCA9IFtdO1xyXG4gICAgICB0aGlzLnNldFJlc3VsdExpc3RBbGwoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXN1bHRMaXN0ID0gdGhpcy5wYXJzZUVuZ2xpc2hTdWdnZXN0aW9ucyhnZXRTdWdnZXN0aW9ucygpKTtcclxuICAgIHRoaXMuc2V0UmVzdWx0TGlzdEFsbCgpO1xyXG4gIH0sXHJcbiAgb25TZWxlY3QobnVtKSB7XHJcbiAgICB0aGlzLiRlbWl0KFwia2V5RG93blwiLCB7IGNvbnRlbnQ6IG51bSB9KTtcclxuICAgIGlmICh0aGlzLmtleWJvYXJkdHlwZSA9PT0gXCJUOVwiICYmIHRoaXMuc2NyZWVudHlwZSAhPT0gXCJwaWxsLXNoYXBlZFwiKSB7XHJcbiAgICAgIHRoaXMub25CdG5DbGljayhudW0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gXCJjblwiICYmICF0aGlzLm51bUZsYWcpIHtcclxuICAgICAgdGhpcy5jdmFsICs9IG51bS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxhbmcgPT09IFwiZW5cIiAmJiAhdGhpcy5udW1GbGFnKSB7XHJcbiAgICAgIHRoaXMuYWRkQWxsVHh0KG51bS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQWxsVHh0KG51bSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gIH0sXHJcbiAgb25TZWxlY3RXYWl0aW5nKG51bSkge1xyXG4gICAgdGhpcy5vblZpYnJhdGUoKTtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIikge1xyXG4gICAgICB0aGlzLmN2YWwgKz0gdGhpcy53YWl0aW5nTGlzdFtudW1dLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZEFsbFR4dCh0aGlzLndhaXRpbmdMaXN0W251bV0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xyXG4gICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcclxuICB9LFxyXG4gIHdhdGNoSGlkZVByb3BzQ2hhbmdlKG5ld1YpIHtcclxuICAgIHRoaXMuJGVtaXQoXCJ2aXNpYmlsaXR5Q2hhbmdlXCIsIHsgdmlzaWJsZTogIW5ld1YgfSk7XHJcbiAgfSxcclxuICB3YXRjaE1heExlbmd0aFByb3BzQ2hhbmdlKG5ld1YpIHtcclxuICAgIGlmIChuZXdWKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBDdmFsTGlzdCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Y7IGkrKykge1xyXG4gICAgICAgIHRlbXBDdmFsTGlzdC5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3ZhbExpc3QgPSB0ZW1wQ3ZhbExpc3Q7XHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaEtleWJvYXJkVHlwZVByb3BzQ2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMubGFuZyAhPT0gXCJjblwiICYmIHRoaXMubGFuZyAhPT0gXCJlblwiKSB7XHJcbiAgICAgIHRoaXMubGFuZyA9IFwiY25cIjtcclxuICAgICAgdGhpcy5udW1GbGFnX2pwID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XHJcbiAgICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XHJcbiAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblZpYnJhdGUoKSB7XHJcbiAgICBpZiAodGhpcy52aWJyYXRlbW9kZSAhPSBcIlwiKSB7XHJcbiAgICAgIHZpYnJhdG9yLnZpYnJhdGUoeyBtb2RlOiB0aGlzLnZpYnJhdGVtb2RlIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGFuZGVsU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBsZXQgcGVyY2VudFRlbXA2NyA9IChldmVudC5zY3JvbGxYIC8gNjM2KSAqIDEwMCArIDUyLjg7XHJcbiAgICB0aGlzLnBlcmNlbnQ2NyA9IHBhcnNlSW50KHBlcmNlbnRUZW1wNjcgPD0gMTAwID8gcGVyY2VudFRlbXA2NyA6IDEwMCk7XHJcbiAgICBsZXQgcGVyY2VudFRlbXA2NiA9IChldmVudC5zY3JvbGxYIC8gNjMzKSAqIDEwMDtcclxuICAgIHRoaXMucGVyY2VudDY2ID0gcGFyc2VJbnQocGVyY2VudFRlbXA2NiA8PSAxMDAgPyBwZXJjZW50VGVtcDY2IDogMTAwKTtcclxuICB9LFxyXG4gIHB1c2hDdmFsKCkge1xyXG4gICAgdGhpcy5vblZpYnJhdGUoKTtcclxuICAgIGxldCB0ZW1wID0gdGhpcy5jdmFsO1xyXG4gICAgdGhpcy5jdmFsID0gXCJcIjtcclxuICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XHJcbiAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgdGhpcy5hZGRBbGxUeHQodGVtcCk7XHJcbiAgfSxcclxuICBub3JtYWxpemVFbmdsaXNoU2VlZCh2YWx1ZSkge1xyXG4gICAgY29uc3QgdGV4dCA9ICh2YWx1ZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9bYS16XVthLXonLV0qJC8pO1xyXG4gICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzBdID8gbWF0Y2hbMF0gOiBcIlwiO1xyXG4gIH0sXHJcbiAgcGFyc2VFbmdsaXNoU3VnZ2VzdGlvbnModmFsdWUpIHtcclxuICAgIGNvbnN0IHRleHQgPSB2YWx1ZSB8fCBcIlwiO1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcnRzID0gdGV4dC5zcGxpdChcInxcIik7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoICYmIG91dHB1dC5sZW5ndGggPCAzMDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBwYXJ0c1tpXTtcclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICBvdXRwdXQucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnBhZ2Uge1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDowO1xyXG5cdGJvdHRvbTowXHJcbn1cclxuLml0ZW0ge1xyXG5cdGhlaWdodDo1MnB4O1xyXG5cdGZsZXg6MVxyXG59XHJcbi5jYWxidG4wIHtcclxuXHRjb2xvcjojZmZmO1xyXG5cdGZvbnQtc2l6ZToyOHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgzOCwzOCwzOCwwKTtcclxuXHRib3JkZXItcmFkaXVzOjA7XHJcblx0aGVpZ2h0OjUycHg7XHJcblx0d2lkdGg6NTJweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlclxyXG59XHJcbi5jYWxidG4wMiB7XHJcblx0Y29sb3I6cmdiKDI1NSwyNTUsMjU1KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzgsMzgsMzgsMCk7XHJcblx0Ym9yZGVyLXJhZGl1czowcHg7XHJcblx0Zm9udC1zaXplOjMycHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0aGVpZ2h0OjQycHg7XHJcbn1cclxuLmNpcmNsZS1lbi1jYW5kaWRhdGUge1xyXG5cdGNvbG9yOnJnYigyNTUsMjU1LDI1NSk7XHJcblx0Zm9udC1zaXplOjI4cHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0aGVpZ2h0OjQycHg7XHJcblx0bGluZXM6MTtcclxuXHR0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG5cdHBhZGRpbmctcmlnaHQ6MTBweDtcclxufVxyXG4uY2FsYnRuZnVsbCB7XHJcblx0Y29sb3I6I2ZmZjtcclxuXHRmb250LXNpemU6MjRweDtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzI2MjYyNjtcclxuXHRib3JkZXItcmFkaXVzOjEycHg7XHJcblx0bWFyZ2luLXJpZ2h0OjRweDtcclxuXHRoZWlnaHQ6NTJweDtcclxuXHR3aWR0aDo0MHB4O1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdGJvcmRlcjozcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KVxyXG59XHJcbi5jYWxidG50OSB7XHJcblx0Y29sb3I6I2ZmZjtcclxuXHRmb250LXNpemU6MjVweDtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzI2MjYyNjtcclxuXHRib3JkZXItcmFkaXVzOjk5OXB4O1xyXG5cdG1hcmdpbi1yaWdodDo0cHg7XHJcblx0d2lkdGg6OTRweDtcclxuXHRoZWlnaHQ6NjBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNilcclxufVxyXG4uY2FsdGV4dCB7XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdGxpbmUtaGVpZ2h0OjM4cHg7XHJcblx0bGluZXM6MTtcclxuXHR0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG5cdGNvbG9yOiMwZDg0ZmY7XHJcblx0aGVpZ2h0OjQ1cHg7XHJcblx0Zm9udC1zaXplOjI4cHg7XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0cGFkZGluZy1sZWZ0OjhweFxyXG59XHJcbi5saXN0MyB7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0dG9wOjM4cHg7XHJcblx0bGVmdDo3OHB4O1xyXG5cdHdpZHRoOjMyNHB4O1xyXG5cdGhlaWdodDoxNjBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O1xyXG5cdGJvcmRlci1yYWRpdXM6MTJweDtcclxuXHRwYWRkaW5nOjhweFxyXG59XHJcbi5pdGVtMyB7XHJcblx0d2lkdGg6MzI0cHg7XHJcblx0aGVpZ2h0OjUycHhcclxufVxyXG4uY2FsYnRuNjcge1xyXG5cdGNvbG9yOnJnYigyNTUsMjU1LDI1NSk7XHJcblx0Zm9udC1zaXplOjMycHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigzOCwzOCwzOCk7XHJcblx0bWFyZ2luLXJpZ2h0OjRweDtcclxuXHR3aWR0aDo2MHB4O1xyXG5cdGhlaWdodDo2MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6MzBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XHJcbn1cclxuI2tleWJvYXJkNjcge1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGxlZnQ6MHB4O1xyXG5cdHRvcDo4MnB4O1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OjE3MHB4O1xyXG59XHJcbiNrZXlib2FyZDY2IHtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRsZWZ0OjBweDtcclxuXHR0b3A6ODJweDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDoxNzBweDtcclxufVxyXG4ubGlzdDY3IHtcclxuXHR0b3A6MHB4O1xyXG5cdHdpZHRoOjk2LjQlO1xyXG5cdGhlaWdodDoxNzBweDtcclxuXHRib3JkZXItcmFkaXVzOjMwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O1xyXG5cdGJvcmRlcjozcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcclxuXHRwYWRkaW5nOjhweDtcclxufVxyXG4uaXRlbTY3IHtcclxuXHRoZWlnaHQ6NTBweDtcclxufVxyXG4uY2FsYnRuNjYge1xyXG5cdGNvbG9yOnJnYigyNTUsMjU1LDI1NSk7XHJcblx0Zm9udC1zaXplOjMycHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigzOCwzOCwzOCk7XHJcblx0bWFyZ2luLXJpZ2h0OjNweDtcclxuXHR3aWR0aDo2MHB4O1xyXG5cdGhlaWdodDo2MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6MzBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XHJcbn1cclxuLmxpc3Q2NiB7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDozcHg7XHJcblx0dG9wOjBweDtcclxuXHR3aWR0aDoxODZweDtcclxuXHRoZWlnaHQ6MTg2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czozMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzI2MjYyNjtcclxuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XHJcblx0cGFkZGluZzoxMHB4XHJcbn1cclxuLml0ZW02NiB7XHJcblx0aGVpZ2h0OjQycHg7XHJcbn1cclxuLndhaXRpbmcta2V5cyB7XHJcblx0d2lkdGg6MzZweDtcclxuXHRoZWlnaHQ6NDBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5rZXlib2FyZC1yb3dzLXJlY3QtdDkge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FsYnRudDktcmVjdCB7XHJcbiAgZmxleDoxO1xyXG4gIGhlaWdodDo1NXB4O1xyXG4gIG1hcmdpbjowIDNweDtcclxuICB3aWR0aDp1bnNldDtcclxufVxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIFRBUkdFVF9JRCA9IFwiVzQzMlwiXG52YXIgVEFSR0VUX1dJRFRIID0gNDMyXG52YXIgVEFSR0VUX0hFSUdIVCA9IDUxNFxudmFyIFRBUkdFVF9QUk9GSUxFID0gXCJyZWN0XCJcbnZhciBUQVJHRVRfU0hBUEUgPSBcInJlY3RcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlkOiBUQVJHRVRfSUQsXG4gIHdpZHRoOiBUQVJHRVRfV0lEVEgsXG4gIGhlaWdodDogVEFSR0VUX0hFSUdIVCxcbiAgcHJvZmlsZTogVEFSR0VUX1BST0ZJTEUsXG4gIHNoYXBlOiBUQVJHRVRfU0hBUEVcbn0iLCJjb25zdCBCQVNFMzZfRElHSVRTID0gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIlxyXG5jb25zdCBCQVNFNjRVUkxfRElHSVRTID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS1fXCJcclxuXHJcbmZ1bmN0aW9uIHBhcnNlQmFzZTM2KHZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCAhL15bMC05YS16XSskLy50ZXN0KHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIC0xXHJcbiAgfVxyXG4gIGxldCByZXN1bHQgPSAwXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZGlnaXQgPSBCQVNFMzZfRElHSVRTLmluZGV4T2YodmFsdWUuY2hhckF0KGkpKVxyXG4gICAgaWYgKGRpZ2l0IDwgMCkge1xyXG4gICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuICAgIHJlc3VsdCA9IHJlc3VsdCAqIDM2ICsgZGlnaXRcclxuICAgIGlmIChyZXN1bHQgPiA5MDA3MTk5MjU0NzQwOTkxKSB7XHJcbiAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY29kZVByZWZpeEZpZWxkKHZhbHVlLCBwcmV2aW91cykge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgIXZhbHVlIHx8IHR5cGVvZiBwcmV2aW91cyAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgY29uc3QgcHJlZml4TGVuZ3RoID0gQkFTRTM2X0RJR0lUUy5pbmRleE9mKHZhbHVlLmNoYXJBdCgwKSlcclxuICBpZiAocHJlZml4TGVuZ3RoIDwgMCB8fCBwcmVmaXhMZW5ndGggPiBwcmV2aW91cy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIHJldHVybiBwcmV2aW91cy5zbGljZSgwLCBwcmVmaXhMZW5ndGgpICsgdmFsdWUuc2xpY2UoMSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb2RlQmFzZTY0Qnl0ZXModmFsdWUpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8ICF2YWx1ZSB8fCAhL15bQS1aYS16MC05Xy1dKyQvLnRlc3QodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCAlIDQgPT09IDEpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBieXRlcyA9IFtdXHJcbiAgbGV0IGFjY3VtdWxhdG9yID0gMFxyXG4gIGxldCBiaXRDb3VudCA9IDBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBkaWdpdCA9IEJBU0U2NFVSTF9ESUdJVFMuaW5kZXhPZih2YWx1ZS5jaGFyQXQoaSkpXHJcbiAgICBpZiAoZGlnaXQgPCAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBhY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yICogNjQgKyBkaWdpdFxyXG4gICAgYml0Q291bnQgKz0gNlxyXG4gICAgd2hpbGUgKGJpdENvdW50ID49IDgpIHtcclxuICAgICAgYml0Q291bnQgLT0gOFxyXG4gICAgICBjb25zdCBkaXZpc29yID0gTWF0aC5wb3coMiwgYml0Q291bnQpXHJcbiAgICAgIGJ5dGVzLnB1c2goTWF0aC5mbG9vcihhY2N1bXVsYXRvciAvIGRpdmlzb3IpICYgMHhmZilcclxuICAgICAgYWNjdW11bGF0b3IgJT0gZGl2aXNvclxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoYml0Q291bnQgPiAwICYmIChhY2N1bXVsYXRvciAmICgoMSA8PCBiaXRDb3VudCkgLSAxKSkgIT09IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIHJldHVybiBieXRlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNvZGVEZWx0YUlkcyh2YWx1ZSkge1xyXG4gIGNvbnN0IGJ5dGVzID0gZGVjb2RlQmFzZTY0Qnl0ZXModmFsdWUpXHJcbiAgaWYgKCFieXRlcykge1xyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG5cclxuICBjb25zdCBpZHMgPSBbXVxyXG4gIGxldCBjdXJyZW50ID0gMFxyXG4gIGxldCBkZWx0YSA9IDBcclxuICBsZXQgc2hpZnQgPSAwXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgYnl0ZSA9IGJ5dGVzW2ldXHJcbiAgICBjb25zdCBwYXlsb2FkID0gYnl0ZSAmIDB4N2ZcclxuICAgIGlmIChzaGlmdCA+IDUzIHx8IChzaGlmdCA9PT0gNTMgJiYgcGF5bG9hZCA+IDEpKSB7XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgZGVsdGEgKz0gcGF5bG9hZCAqIE1hdGgucG93KDIsIHNoaWZ0KVxyXG4gICAgaWYgKGJ5dGUgJiAweDgwKSB7XHJcbiAgICAgIHNoaWZ0ICs9IDdcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGN1cnJlbnQgKz0gZGVsdGFcclxuICAgIGlmIChpZHMubGVuZ3RoID4gMCAmJiBjdXJyZW50IDw9IGlkc1tpZHMubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudCA8IDAgfHwgY3VycmVudCA+IDE0OTQxKSB7XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgaWRzLnB1c2goY3VycmVudClcclxuICAgIGRlbHRhID0gMFxyXG4gICAgc2hpZnQgPSAwXHJcbiAgfVxyXG4gIGlmIChzaGlmdCAhPT0gMCB8fCBpZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbiAgcmV0dXJuIGlkc1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUluZmxlY3Rpb25WYWx1ZSh2YWx1ZSkge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBpZiAodmFsdWUuY2hhckF0KDApID09PSBcIkBcIikge1xyXG4gICAgY29uc3QgZW50cnlJZCA9IHBhcnNlQmFzZTM2KHZhbHVlLnNsaWNlKDEpKVxyXG4gICAgcmV0dXJuIGVudHJ5SWQgPj0gMCA/IHtlbnRyeUlkOiBlbnRyeUlkfSA6IG51bGxcclxuICB9XHJcbiAgcmV0dXJuIHt3b3JkOiB2YWx1ZX1cclxufVxyXG5cclxuZXhwb3J0IHtkZWNvZGVEZWx0YUlkcywgZGVjb2RlUHJlZml4RmllbGQsIHBhcnNlQmFzZTM2LCBwYXJzZUluZmxlY3Rpb25WYWx1ZX1cclxuIiwiLy8g5a+86Iiq6Ziy6L+e54K577ya5pe26Ze056qX5Y+j5YaF5Y+q5pS+6KGM5LiA5qyh6aG16Z2i6Lez6L2s77yM6Ziy5q2i6L+e54K55omT5byA5aSa5Liq6YeN5aSN6aG16Z2iXG4vLyDvvIjov57ngrnlkIzkuIDmjInpkq7kvJogcHVzaCDlpJrkuKrpobXpnaLlrp7kvovvvIzlr7zoh7Tov5Tlm57plK7pnIDopoHlpJrmjInlh6DmrKHmiY3og73lm57kuIrkuIDnuqfvvIlcbnZhciBsYXN0TmF2QXQgPSAwXG52YXIgTkFWX0xPQ0tfTVMgPSA1MDBcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdkd1YXJkKCkge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gIGlmIChub3cgLSBsYXN0TmF2QXQgPCBOQVZfTE9DS19NUykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGxhc3ROYXZBdCA9IG5vd1xuICByZXR1cm4gdHJ1ZVxufSIsIi8vIFNoYXJlZCBzdGF0ZSBmb3IgRW5nbGlzaCBhdXRvY29tcGxldGUgc3VnZ2VzdGlvbnNcclxuLy8gQXZvaWRzIHBhc3Npbmcgc2VlZC9zdWdnZXN0aW9ucyBkYXRhIHRocm91Z2ggY29tcG9uZW50IHByb3BzLFxyXG4vLyB3aGljaCBjYW4gdHJpZ2dlciBuYXRpdmUgY3Jhc2hlcyBkdXJpbmcgRE9NIGNyZWF0aW9uIG9uIFZlbGFcclxuXHJcbmxldCBfc2VlZCA9IFwiXCJcclxubGV0IF9zdWdnZXN0aW9ucyA9IFwiXCJcclxubGV0IF9jYWxsYmFjayA9IG51bGxcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdWdnZXN0aW9uU2VlZCgpIHtcclxuICByZXR1cm4gX3NlZWRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN1Z2dlc3Rpb25TZWVkKHYpIHtcclxuICBfc2VlZCA9IHZcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1Z2dlc3Rpb25zKCkge1xyXG4gIHJldHVybiBfc3VnZ2VzdGlvbnNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN1Z2dlc3Rpb25zKHYpIHtcclxuICBfc3VnZ2VzdGlvbnMgPSB2XHJcbiAgaWYgKF9jYWxsYmFjaykge1xyXG4gICAgX2NhbGxiYWNrKHYpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25TdWdnZXN0aW9uc0NoYW5nZShjYikge1xyXG4gIF9jYWxsYmFjayA9IGNiXHJcbn1cclxuIiwiLyoqXHJcbiAqIOaUtuW9leW4uOeUqOaxieWtlzY3NjPkuKrvvIzkuI3mlK/mjIHlo7DosIPvvIzmlK/mjIHlpJrpn7PlrZfvvIzlubbmjInnhafmsYnlrZfkvb/nlKjpopHnjofnlLHkvY7liLDpq5jmjpLluo9cclxuICovXHJcbmNvbnN0IGRpY3QgPSB7XCJhXCI6XCLpmL/llYrlkbXohYzll4TlkJbplJVcIixcImVcIjpcIuminemYv+S/hOaBtum5hemBj+mEguWOhOmlv+WzqOaJvOWopemzhOWTpuibvuWZqeaEleiuuemUt+WeqeWpgOm5l+iQvOiwlOiOquiFremUh+mimuWRg+mYj+WxmeiLiui9rVwiLFwiYWlcIjpcIueIseWfg+iJvueijeeZjOWTgOaMqOefrumamOiUvOWUieeakeWTjumcreaNseaap+WrkuWXs+eRt+WXjOmUv+eguVwiLFwiZWlcIjpcIuivtlwiLFwieGlcIjpcIuezu+ilv+W4reaBr+W4jOS5oOWQuOWWnOe7huaekOaIj+a0l+aCiemUoea6quaDnOeogOiireWklea0kuaZsOaYlOeJuuiFiueDr+eGmeWqs+agluiGnemameeKgOi5iuehkuWFrueGhOabpuemp+WsieeOuuWlmuaxkOW+mee+sumTo+a3heWYu+atmeeGueefveifi+mDl+WUj+eamemasOaoqOa1oOW/vuicpeaqhOmDhOe/lemYi+mzg+iIvuWxo+iRuOieheWSreeynuini+ast+WDlumGr+m8t+ijvOepuOmlqeiIhOemiuivtuiPpeiTsFwiLFwieWlcIjpcIuS4gOS7peW3suaEj+iuruS5ieebiuS6v+aYk+WMu+iJuumjn+S+neenu+iho+W8guS8iuS7quWunOWwhOmBl+eWkeavheiwiuS6pueWq+W9ueW/huaKkeWwvuS5meivkee/vOibh+a6ouakheayguazhOmAuOiageWkt+mCkeaAoee7juW9neijlOWnqOeGoOi0u+efo+WxuemikOWAmuivo+iDsOWllee/jOeWmeW8iOi9tuibvumpv+WjueeMl+iHhuW8i+mTseaXlua8qui/pOS9mue/iuivkuaAv+eXjeaHv+mltOWzhOaPluecmemVkuS7oem7n+iChOWSv+e/s+aMuee8ouWRk+WIiOWSpuW2t+e+v+mSh+auquiNkeiWj+ictOmVseWZq+eZlOiLoeaCkuWXjOeYl+ihpOS9vuWfuOWcr+iIo+mFj+WKk1wiLFwiYW5cIjpcIuWuieahiOaMieWyuOaal+mejeawqOS/uuiDuumTteiwmeW6tem7r+m5jOahieWfr+eKtOaPnuWOguW5v1wiLFwiaGFuXCI6XCLljoLmsYnpn6nlkKvml7Hlr5LmsZfmtrXlh73llormhr7nvZXnhIrnv7Dpgq/mkrzngJrmhqjmjY3phaPmgo3pvL7pgpfpopTomrbmmZfoj6Hml7DpobjnirTnhJPmkpZcIixcImFuZ1wiOlwi5piC5Luw55uO6IKuXCIsXCJhb1wiOlwi5aWl5r6z5YKy54as5Ye56bOM5pWW6YGo6Y+W6KKE5Z2z57+x5Ze35ouX5oeK5bKZ6J6v6aqc542S6Y+K6Im55aqq5buS6IGxXCIsXCJ3YVwiOlwi55Om5oyW5aiD5rS86KKc6JuZ5Ye55ZOH5L2k5aiy5ZGZ6IW9XCIsXCJ5dVwiOlwi5LqO5LiO6IKy5L2Z6aKE5Z+f5LqI6YGH5aWl6K+t6KqJ546J6bG86Zuo5riU6KOV5oSI5aix5qyy5ZCB6IiG5a6H57696YC+6LGr6YOB5a+T5ZC+54ux5Za75b6h5rW05oSJ56a55L+e6YKq5qaG5oSa5rid5bCJ5rek6Jme5bG/5bOq57Kl6amt55Gc56a65q+T6ZKw6ZqF6IqL54ao55iA6L+C54Wc5pix5rGp5pa86Ie+55uC6IG/56u96JC45aaq6IW05ZyE6LCV6KeO5o+E6b6J6LCA5L+j6aaA5bq+5aak55iQ6ay75qyk6bms6ZiI5bWb6Zup6bmG5ZyJ6Jyu5Lyb57qh56qs56qz6aWr6JOj54uz6IKA6IiB6J2T54egXCIsXCJuaXVcIjpcIueJm+e6veaJremSruaLl+WmnuW/uOeLg1wiLFwib1wiOlwi5ZOm5Zmi5ZaUXCIsXCJiYVwiOlwi5oqK5YWr5be05ouU5Lyv5ZCn5Z2d54i46Zy4572i6Iqt6LeL5omS5Y+t6Z2255ak56yG6ICZ6bKF57KR5bKc54Ge6ZKv5o2M6I+d6a2D6IyHXCIsXCJwYVwiOlwi5oCV5biV54is5omS6La055C25ZWq6JGp6ICZ5p236ZKv562iXCIsXCJwaVwiOlwi6KKr5om55Ymv5ZCm55qu5Z2P6L6f5ZWk5Yy55oqr55ay572i5YO75q+X5Z2v6IS+6K2s5YqI5aqy5bGB55C16YKz6KOo55ee55mW6ZmC5LiV5p6H5Zm86Zy55ZCh57qw56CS6ZON5reg6YOr5Z+k5r+e552l6IqY6JqN5Zyu6byZ57206Jyx55aL6LKU5Luz5bqA5pOX55ST6Zm0XCIsXCJiaVwiOlwi5q+U5b+F5biB56yU5q+V56eY6YG/6Zet5L2b6L6f5aOB5byK5b286YC856Kn6by76IeC6JS95ouC5rOM55Kn5bqH55e55q+Z5by85YyV6YSZ6Zmb6KOo6LSy5pWd6JOW5ZCh56+m57qw5L++6ZOL5q+W562a6I246Jac5ami5ZOU6Le45r+e56eV6I2c5oSO552l5aaj6IqY566F6auA55WA5ruX54u06JCG5ayW6KWe6IitXCIsXCJiYWlcIjpcIueZvueZvei0peaRhuS8r+aLnOafj+S9sOaOsOWRl+aTmOaNreeol1wiLFwiYm9cIjpcIuazouWNmuaSreWLg+aLqOiWhOS9m+S8r+eOu+aQj+afj+aziuiItuWJpea4pOWNnOmps+ewv+iEluiGiuewuOiPoOektOeulOmTguS6s+mSteW4m+aTmOmlvei3m+mSuei2teaql+WVtem5geaTl+i4o1wiLFwiYmVpXCI6XCLljJfooqvlpIflgI3og4zmna/li4PotJ3ovojmgrLnopHoh4LljZHmgpbmg6vok5PpmYLpkqHni4jlkZfnhJnnopropJnlurPpnrTlrZvpuY7pgrbpkL5cIixcImJhblwiOlwi5Yqe54mI5Y2K54+t6Iis5p2/6aKB5Ly05pCs5paR5omu5ouM5omz55Oj5Z2C6Ziq57uK6ZKj55ii6Iio55mNXCIsXCJwYW5cIjpcIuWIpOebmOeVqua9mOaUgOebvOaLmueVlOiDluWPm+aLjOi5kuejkOeIv+ifoOazruiiouilu+S4rFwiLFwiYmluXCI6XCLku73lrr7popHmu6jmlozlvazmv5LmrqHnvKTprJPmp5/mkYjohpHnjqLplZTosbPpq4zlgqdcIixcImJhbmdcIjpcIuW4rumCpuW9reaXgeamnOajkuiGgOmVkee7keWCjeejheiajOiwpOaihua1nOiSoVwiLFwicGFuZ1wiOlwi5peB5bqe5LmT56OF6J6D5b235ruC6YCE6ICqXCIsXCJiZW5nXCI6XCLms7XltKnomozouabov7jnu7fnlK3lmKPnlI/loItcIixcImJhb1wiOlwi5oql5L+d5YyF5a6d5pq06IOe6JaE54iG54Ku6aWx5oqx5aCh5Yml6bKN5pud6JGG54CR6LG55Yio6KSS6Zu55a2i6Iue54Wy6KST6La16bio6b6F5Yu5XCIsXCJidVwiOlwi5LiN6YOo5q2l5biD6KGl5o2V5aCh5Z+U5Y2c5Z+g57C/5ZO65oCW6ZKa5Y2f55O/6YCL5pmh6Yat6ZK4XCIsXCJwdVwiOlwi5pmu5pq06ZO65rWm5py05aCh6JGh6LCx5Z+U5omR5LuG6JKy5pud54CR5rql6I6G5ZyD55Ke5r+u6I+p6Lm85YyN5ZmX5rCG5pS16ZWo5pS06ZWkXCIsXCJtaWFuXCI6XCLpnaLmo4nlhY3nu7XnvIXli4nnnKDlhpXlqKnohbzmuJHmuY7mspTpu77lroDnnIRcIixcInBvXCI6XCLnoLTnuYHlnaHov6vpoofmnLTms4rlqYbms7zprYTnspXphLHnj4DpmYLlj7XnrLjms7rnmqTpkovpkrdcIixcImZhblwiOlwi5Y+N6IyD54qv57mB6aWt5rOb57+75Yeh6L+U55Wq6LSp54Om5oua5biG5qiK6Jep55++5qK16JWD6ZKS5bmh55WI6Jip6Lmv54eUXCIsXCJmdVwiOlwi5bqc5pyN5Ymv6LSf5a+M5aSN56aP5aSr5aaH5bmF5LuY5om254i256ym6ZmE6IWQ6LW05L2b5rWu6KaG6L6F5YKF5LyP5oqa6LWL6L6Q6IW55byX6IKk6Zic6KKx57ya55Sr5rCf5pan5a2a5pW35L+v5ouC5L+Y5ZKQ6IWR5a216IqZ5raq6Yec6ISv6Iyv6aal5a6T57uC6K6j5ZGL572Y6bq46J2g5YyQ6Iq+6JyJ6LeX5Yer5ruP6J2u6am457uL6Jqo56Cp5qG06LWZ6I+U5ZGS6La66Iu75ouK6Zid6bKL5oCr56iD6YOb6I6p5bme56WT6Im06bu76bu86bOGXCIsXCJiZW5cIjpcIuacrOS9k+WllOiLr+esqOWkr+i0sumUm+eVmuWdjFwiLFwiZmVuZ1wiOlwi6aOO5Liw5bCB5bOw5aWJ5Yek6ZSL5Yav6YCi57yd6JyC5p6r55av6K6954O95L+45rKj6YWG56Cc6JGR5ZSqXCIsXCJiaWFuXCI6XCLlj5jkvr/ovrnnvJbpgY3ovqnpnq3ovqjotKzljL7miYHljZ7msbTovqvnoK3oi4TonZnps4rlvIHnqobnrL7nhbjopIrnoqXlv63nvI9cIixcInBpYW5cIjpcIuS+v+eJh+evh+WBj+mql+e/qeaJgemqiOiDvOi5geiwneeKj+e8j1wiLFwiemhlblwiOlwi6ZWH55yf6ZKI5Zyz5oyv6ZyH54+N6Zi16K+K5aGr5L6m6Ie76LSe5p6V5qGi6LWI56Wv5bin55SE5paf57yc566055a556Cn5qab6bip6L2456i55rqx6JOB6IOX5qS55pyV55Wb5rWIXCIsXCJiaWFvXCI6XCLooajmoIflvarplZboo7Hpo5rohpjpo5nplbPlqYrpqqDpo5HmnZPpq5/ps5TngaznmK1cIixcInBpYW9cIjpcIuelqOactOa8gumjmOWrlueTouWJvee8peaujeeen+mqoOWYjOiOqeietVwiLFwiaHVvXCI6XCLlkozmtLvmiJbotKfojrfngavkvJnmg5HpnI3npbjosYHlmq/ol7/plKrooJbpkqzogKDplazlpKXngazlipDmlIlcIixcImJpZVwiOlwi5Yir6bOW5oaL55iq6LmpXCIsXCJtaW5cIjpcIuawkeaVj+mXvemXteeav+azr+Wyt+aCr+ePieaKv+m7vue8l+eOn+aEjeiLoOmzmFwiLFwiZmVuXCI6XCLliIbku73nurflpYvnsonmsJvoiqzmhKTnsqrlnZ/msb7nhJrphZrlkKnlv7/mo7znjqLpvKLngLXlgb7psrxcIixcImJpbmdcIjpcIuW5tueXheWFteWGsOWxj+mlvOeCs+enieS4meaRkuafhOann+emgOaei+mCtOWGq1wiLFwiZ2VuZ1wiOlwi5pu06ICV6aKI5bqa6IC/5qKX5Z+C57655ZO96LWT57ug6bKgXCIsXCJmYW5nXCI6XCLmlrnmlL7miL/pmLLorr/nurroirPku7/lnYrlpqjogqrpgqHoiKvlvbfmnovpsoLljJrpkqtcIixcInhpYW5cIjpcIueOsOWFiOWOv+ingee6v+mZkOaYvumZqeeMrumynOa0l+Wuque6pOmZt+mXsui0pOS7meihlOaOgOWSuOWrjOaOuue+oeW8puiFuueXq+WotOiIt+mmhemFsOmTo+WGvOa2juaaueexvOmUqOiLi+iarOi3ueWymOiXk+eHuem5h+awmeiOtumcsOi3o+eMg+W9oeelhuethVwiLFwiZm91XCI6XCLkuI3lkKbnvLZcIixcImNhXCI6XCLmi4bmk6blmpPnpKRcIixcImNoYVwiOlwi5p+l5a+f5beu6Iy25o+S5Y+J5Yi56Iys5qWC5bKU6K+n56K05ZqT5Zaz5ae55p2I5rGK6KGp5pC95qeO6ZWy6Iu05qqr6aaH6ZS454y5XCIsXCJjYWlcIjpcIuaJjemHh+i0ouadkOiPnOW9qeijgeiUoeeMnOi4qeedrFwiLFwiY2FuXCI6XCLlj4LmrovppJDngb/mg6jompXmjrrnkqjmg63nsrLlrbHpqpbpu6pcIixcInNoZW5cIjpcIuS/oea3seWPgui6q+elnuS7gOWuoeeUs+eUmuayiOS8uOaFjua4l+iCvue7heiOmOWRu+WptuWooOegt+icg+WTguakueiRmuWQsuezgea4luivnOiwguefp+iDglwiLFwiY2VuXCI6XCLlj4LlspHmtpRcIixcInNhblwiOlwi5LiJ5Y+C5pWj5Lye5Y+B57OB6aaT5q+1XCIsXCJjYW5nXCI6XCLol4/ku5Poi43msqfoiLHoh6fkvKdcIixcInphbmdcIjpcIuiXj+iEj+iRrOi1g+iHp+WlmOmptVwiLFwiY2hlblwiOlwi56ew6ZmI5rKI5rKJ5pmo55Cb6Iej5bCY6L6w6KGs6LaB5b+x6YO05a646LCM56Kc5ZeU5oq75qaH5Lyn6LC26b6A6IKcXCIsXCJjYW9cIjpcIuiNieaTjeabueanveezmeWYiOa8leierOiJmuWxrlwiLFwiY2VcIjpcIuetlua1i+WGjOS+p+WOleagheaBu1wiLFwiemVcIjpcIui0o+WImeazveaLqeS+p+WSi+WVp+S7hOeupui1nOesruiItOaYg+i/ruW4u1wiLFwiemhhaVwiOlwi5YC65oup6b2Q5a6F5a+o5L6n5pGY56qE5paL56Wt57+f56Cm55i15ZOcXCIsXCJkYW9cIjpcIuWIsOmBk+WvvOWym+WAkuWIgOebl+eou+i5iOaCvOaNo+WPqOelt+eEmOawmOe6m+WIguW4seW/iVwiLFwiY2VuZ1wiOlwi5bGC5pu+6Lmt5ZmMXCIsXCJ6aGFcIjpcIuafpeaJjueCuOiviOmXuOa4o+WSi+S5jeamqOalguacreagheecqOWSpOafnuWWs+WWi+mToeiaseWQkuaAjeegn+aPuOeXhOWTs+m9hFwiLFwiY2hhaVwiOlwi5beu5ouG5p+06ZKX6LG65L6q6Jm/55ilXCIsXCJjaVwiOlwi5qyh5q2k5beu6K+N6L6e5Yi655O356OB5YW55oWI6Iyo6LWQ56Wg5Ly66ZuM55a16bma57ON5ZGy57KiXCIsXCJ6aVwiOlwi6LWE6Ieq5a2Q5a2X6b2Q5ZKo5ruL5LuU5ae/57Sr5YW55a2c5reE57G95qKT6bK75riN5aeK5ZCx56et5oGj55S+5a2z6Ki+5ruT6ZSx6L6O6LaR6b6H6LWA55ym57yB5ZGy56yr6LCY5bWr6aut6IyI57Ki6Kec6ICUXCIsXCJjdW9cIjpcIuaOqumUmeeji+aMq+aQk+aSrui5iemUieWOneW1r+eXpOefrOeYpeiEnum5vlwiLFwiY2hhblwiOlwi5Lqn5Y2V6ZiQ5bSt57yg5o6656aF6aKk6ZOy6J2J5pCA5r266J++6aaL5b+P5am15a2x6KeH5bub6LCE6LCX5r626aqj57686LqU6JKH5YaBXCIsXCJzaGFuXCI6XCLlsbHljZXlloTpmZXpl6rooavmk4XmsZXmiYfmjrrnj4rnpoXliKDohrPnvK7otaHphK/moIXnhb3lp5fot5rps53lrJfmvbjorqroiKLoi6vnlp3mjrjohrvpkpDliaHon67oip/ln4/lvaHpqp9cIixcInpoYW5cIjpcIuWxleaImOWNoOermeW0reeymOa5m+ayvueeu+mipOipueaWqeebj+i+l+e7veavoeagiOiYuOaXg+iwteaQjFwiLFwieGluXCI6XCLmlrDlv4Pkv6HovpvmrKPolqrppqjpkavoiq/plIzlv7vojpjmmJXooYXmrYblm5/lv4TplaFcIixcImxpYW5cIjpcIuiBlOi/nue7g+W7ieeCvOiEuOiOsuaBi+mTvuW4mOaAnOa2n+aVm+eQj+mVsOa/gualnemyouauk+a9i+ijouijo+iHgeWlgeiOtuigiuiUuVwiLFwiY2hhbmdcIjpcIuWcuumVv+WOguW4uOWBv+aYjOWUseeVheWAoeWwneiCoOaVnuWAmOeMluWovOa3jOijs+W+nOaYtuaAheWrpuiPlumys+mYiuS8peiLjOawheaDnemsr1wiLFwiemhhbmdcIjpcIumVv+W8oOeroOmanOa2qOaOjOW4kOiDgOW9sOS4iOS7l+a8s+aon+i0puadlueSi+W2guS7ieeYtOifkeeNkOW5m+mEo+WrnFwiLFwiY2hhb1wiOlwi6LaF5pyd5r2u54KS6ZKe5oqE5bei5ZC15Ym/57uw5Ziy5pmB54Sv6ICW5oCKXCIsXCJ6aGFvXCI6XCLnnYDnhafmi5vmib7lj6zmnJ3otbXlhYbmmK3ogofnvanpkormsrzlmLLniKror4/mv6/llYHmo7nnrIpcIixcInpob3VcIjpcIuiwg+W3nuWRqOa0suiIn+mqpOi9tOaYvOWumeeypeeaseiCmOWSkuW4muiDhOe7iee6o+Wmr+WVgeivjOe5h+eioeexgOmFjuiNrlwiLFwiY2hlXCI6XCLovablvbvmkqTlsLrmia/mvojmjqPlnbznoJflsa5cIixcImp1XCI6XCLovablsYDmja7lhbfkuL7kuJTlsYXliaflt6jogZrmuKDot53lj6Xmi5Lkv7Hmn5zoj4rmi5jngqzmoZTmg6fnn6npnqDpqbnplK/ouJ7lkoDnnr/mnrjmjqzmsq7ojpLmqZjpo5Pnlr3pkpzotoTouL3pgb3nkJrpvoPmpJDoi6Poo77mppjni5nlgKjmponoi7TorrXpm47plJTnqq3pnqvniovlsabphrVcIixcImNoZW5nXCI6XCLmiJDnqIvln47mib/np7Dnm5vmiqLkuZjor5rlkYjlh4Dmg6nmkpHmvoTnp6TmqZnpqovpgJ7nnqDkuJ7mmZ/pk5vln5XloY3om4/mn73pk5bphbLoo47mnqhcIixcInJvbmdcIjpcIuWuueiNo+iejee7kua6tuiTieeGlOaIjuamleiMuOWGl+W1mOiCnOeLqOidvlwiLFwic2hlbmdcIjpcIueUn+WjsOWNh+iDnOebm+S5mOWco+WJqeeJsueUuOecgee7s+esmeeUpeW1iuaZn+a4keecmlwiLFwiZGVuZ1wiOlwi562J55m76YKT54Gv5r6E5Yez556q6Lms5ZmU56O05bad6ZWr57Cm5oilXCIsXCJ6aGlcIjpcIuWItuS5i+ayu+i0qOiBjOWPquW/l+iHs+aMh+e7h+aUr+WAvOefpeivhuebtOiHtOaJp+e9ruatouakjee6uOaLk+aZuuauluenqeaXqOWdgOa7nuawj+aeneiKneiEguW4nOaxgeiCouaMmueomumFr+aOt+WzmeeCmeagieS+hOiKt+eqkuWSq+WQsei2vueXlOicmOmDheahjumbieeliemDpumZn+eXo+ibreW4meaes+i4r+W+teiDneaggOi0veell+ixuOm4t+aRrei9teWNrui9vuW9mOinr+e1t+i3luWftOWkgum7ueW/rumqmOiGo+i4rFwiLFwiemhlbmdcIjpcIuaUv+ato+ivgeS6ieaVtOW+gemDkeS4geeXh+aMo+iSuOedgemTruetneaLr+WzpeaAlOivpOeLsOW+temSslwiLFwidGFuZ1wiOlwi5aCC5ZSQ57OW5rGk5aGY6Lq66Laf5YCY5qOg54Or5reM6Iab5pCq6ZWX5YKl6J6z5rqP5biR576w5qiY6Yaj6J6X6ICl6ZO055GtXCIsXCJjaGlcIjpcIuaMgeWQg+axoOi/n+i1pOmpsOWwuuaWpem9v+e/heWMmeeXtOiAu+eCveS+iOW8m+WPseWVu+Wdu+ecmeWXpOWigOWTp+iMjOixieaVleesnumlrOi4n+iaqeafouWquOmtkeevquikq+W9s+m4seiereeYm+ecteWCulwiLFwic2hpXCI6XCLmmK/ml7blrp7kuovluILljYHkvb/kuJbmlr3lvI/lir/op4bor4bluIjlj7LnpLrnn7Ppo5/lp4vlo6vlpLHpgILor5Xku4Dms73lrqTkvLzor5fppbDmrpbph4rpqbbmsI/noZXpgJ3mub/omoDni67oqpPmi77lsLjljJnku5Xmn7/nn6Lls5nkvo3lmazll5zmoIXmi63lmJjlsY7mgYPovbzombHogIboiJDojrPpk4josKXngrvosZXpsqXppaPonqvphb7nra7ln5jlvJHnpLvok43psrrotLNcIixcInFpXCI6XCLkvIHlhbbotbfmnJ/msJTkuIPlmajmsb3lpYfpvZDlkK/ml5fmo4vlprvlvIPmj63mnp3mrafmrLrpqpHlpZHov4Tkup/mvIbmiJrlsoLnqL3lspDnkKbmoJbnvInnkKrms6PkuZ7noIznpYHltI7nu67npbrnpYjlh4Tmt4fmnZ7ohJDpupLlnLvmhqnoiqrkvI7kv5/nlabogIbokbrmso/okIvpqpDps43ntqborqvolbLlsbrpooDkupPnopvmn5LllZDmsZTntq7okIHlmIHom7Tmp63mrLnoipHmoaTkuIzonJ5cIixcImNodWFpXCI6XCLmj6PouLnllZzmkIvohqpcIixcInR1b1wiOlwi5omY6ISx5ouT5ouW5aal6am86ZmA5rKx6bi16amu5ZS+5qSt5Z2o5L2X56Cj6LeO5bq55p+B5qmQ5LmH6ZOK5rKy6YWh6byN566o5p+dXCIsXCJkdW9cIjpcIuWkmuW6puWkuuactei6sumTjumai+WShOWgleiIteWem+aDsOWThui4sei3uuaOh+WJgeafgee8jeaysuijsOWTmumas1wiLFwieHVlXCI6XCLlrabooYDpm6rliYrolpvnqbTpnbTosJHlmbHps5XouIXms7blvZBcIixcImNob25nXCI6XCLph43np43lhYXlhrLmtozltIfomavlrqDlv6HmhqfoiILojLrpk7PoiZ9cIixcImNob3VcIjpcIuetueaKvee7uOmFrOaEgeS4keiHreS7h+eVtOeooOeehei4jOaDhuS/pueYs+mboOW4sVwiLFwicWl1XCI6XCLmsYLnkIPnp4vkuJjpgrHku4fphYvoo5jpvp/lm5rpgZLps4Xomazomq/ms4XmpbjmuavnirDpgJHlt6/oib3kv4XonaTotYfpvL3ns5dcIixcInhpdVwiOlwi5L+u56eA5LyR5a6/6KKW57uj6Iet5py96ZSI576e5ZeF5bKr5rq05bql6aaQ5ZK76au56bi66LKFXCIsXCJjaHVcIjpcIuWHuuWkhOehgOWIneWKqemZpOWCqOeVnOinpualmuWOqOmbj+efl+apsemUhOa7gei6h+aAtee7jOaQkOWIjeicjem7nOadtei5sOS6jeaol+aGt+alrlwiLFwidHVhblwiOlwi5Zui5o+j5rmN55aD5oqf5b2WXCIsXCJ6aHVpXCI6XCLov73lnaDnvIDmj6PmpI7plKXotZjmg7TpmrnpqpPnvJJcIixcImNodWFuXCI6XCLkvKDlt53oiLnnqb/kuLLllpjmpL3oiJvpko/pgYTmsJrlt5voiKFcIixcInpodWFuXCI6XCLkuJPovazkvKDotZrnoJbmkrDnr4bpppTlla3poptcIixcInl1YW5cIjpcIuWFg+WRmOmZouWOn+a6kOi/nOaEv+WbreaPtOWchue8mOiigeaAqOa4iuiLkeWum+WGpOWqm+eMv+Weo+ayheWhrOWeuOm4s+i+lem4oueRl+WcnOeIsOiKq+m8i+apvOieiOecoueuouaOvlwiLFwiY3VhblwiOlwi56qc5pSS56+h6Lm/5pK654io5rGG6ZWpXCIsXCJjaHVhbmdcIjpcIuWIm+W6iueql+mXr+W5oueWruaAhlwiLFwiemh1YW5nXCI6XCLoo4XnirbluoTlo67mkp7lpobluaLmoanlpZjlg67miIZcIixcImNodWlcIjpcIuWQueWegumUpOeCiuakjumZsuanjOaNtuajsFwiLFwiY2h1blwiOlwi5pil57qv6YaH5rez5ZSH5qS/6KCi6bmR5pyQ6I686IKr6J29XCIsXCJ6aHVuXCI6XCLlh4blsa/mt7PosIbogqvnqoBcIixcImN1XCI6XCLkv4PotovotqPnspfnsIfphovljZLoubTnjJ3ouZnolJ/mroLlvoJcIixcImR1blwiOlwi5ZCo6aG/55u+5pWm6Lmy5aKp5Zuk5rKM6ZKd54KW55u56YGB6La456CY56SFXCIsXCJxdVwiOlwi5Yy65Y675Y+W5puy6LaL5rig6Laj6amx5bGI6Lqv6KGi5ai256Wb556/5bKW6b6L6KeR5pyQ6JuQ55mv6JuG6Iuj6ZiS6K+O5Yqs6JWW6Jin5rCN6bui6KC855Kp6bq06biy56OyXCIsXCJ4dVwiOlwi6ZyA6K6457ut6aG75bqP5b6Q5LyR6JOE55Wc6Jma5ZCB57uq5Y+Z5pet6YKq5oGk5aKf5qCp57Wu5Zyp5am/5oiM6IOl5ZiY5rWS54Wm6YWX6K+p5pyQ55ux6JO/5rqG5rSr6aG85YuW57OI56CJ6YaRXCIsXCJjaHVvXCI6XCLovo3nu7DmiLPmt5bllZzpvorouJTovrZcIixcInp1XCI6XCLnu4Tml4/otrPnpZbnp5/pmLvljZLkv47or4XplZ7oj7lcIixcImppXCI6XCLmtY7mnLrlhbbmioDln7rorrDorqHns7vmnJ/pmYXlj4rpm4bnuqflh6Dnu5nnp6/mnoHlt7HnuqrljbPnu6flh7vml6Lmv4Dnu6nmgKXlpYflkInlraPpvZDnlr7ov7npuKHliYLovpHnsY3lr4TmjKTlnL7lhoDkup/lr4LmmqjohIrot7vogoznqL3lv4zppaXnpa3nvInmo5jnn7bmsbLnlbjlp6zol4nnmKDpqqXnvoHlppPorqXnqLfok5/mgrjlq4nlsozlj73kvI7psqvor5jmpavojaDmiJ/nrpXpnIHltYfop4rpuoLnlb/njpHnrIjnioToiqjllKflsZDpq7vmiKLkvbblgYjnrITot73okrrkuanlkq3otY3ltbToma7mjo7pvZHmrpvpsprliZ7mtI7kuIzlorzolbrlvZDoirDlk5xcIixcImNvbmdcIjpcIuS7juS4m+WMhuiBquiRseWbseeQrua3meaenumqouiLgeeSgVwiLFwiem9uZ1wiOlwi5oC75LuO57u85a6X57q16Liq5qOV57K96ayD5YGs5p6e6IWZXCIsXCJjb3VcIjpcIuWHkei+j+iFoOalsVwiLFwiY3VpXCI6XCLoobDlgqzltJTohIbnv6DokIPnsrnmkafnkoDnmIHmgrTmt6zllZDpmrnmr7PmprFcIixcIndlaVwiOlwi5Li65L2N5aeU5pyq57u05Y2r5Zu06L+d5aiB5Lyf5Y2x5ZGz5b6u5ZSv6LCT5Lyq5oWw5bC+6a2P6Z+m6IOD55WP5bi35ZaC5beN6JCO6JSa57qs5r2N5bCJ5rit5oOf6JaH6IuH54Kc5Zyp5aiT6K+/546u5bS05qGF5YGO6YC25YCt54yl5ZuX6JGz6ZqX55e/54ys5rag5bWs6Z+q54Wo6ImJ6Zq55biP6Zex5rSn5rKp6ZqI6bKU6LuOXCIsXCJjdW5cIjpcIuadkeWtmOWvuOW/lueatFwiLFwienVvXCI6XCLkvZzlgZrluqflt6blnZDmmKjkvZDnkKLmkq7npZrmn57llJHlmKzphaLmgI3nrK7pmLzog5lcIixcInp1YW5cIjpcIumSu+e6guaUpee8tei6nFwiLFwiZGFcIjpcIuWkp+i+vuaJk+etlOaQreayk+eYqeaDruWXkuWTkuiAt+mekemdvOikoeesquaAm+WmslwiLFwiZGFpXCI6XCLlpKfku6PluKblvoXotLfmr5LmiLTooovmrbnlkYbpmrbpgK7lsrHlgqPmo6PmgKDmrobpu5vnlJnln63or5Lnu5DnjrPlkZTov6hcIixcInRhaVwiOlwi5aSn5Y+w5aSq5oCB5rOw5oqs6IOO5rGw6ZKb6IuU6Ja56IK96LeG6YKw6bKQ6YWe6aqA54KxXCIsXCJ0YVwiOlwi5LuW5a6D5aW55ouT5aGU6LiP5aGM5qa75rKT5ryv542t5ZeS5oye6LmL6La/6YGi6ZOK6bOO5rq76Ze8XCIsXCJkYW5cIjpcIuS9huWNleefs+aLheS4ueiDhuaXpuW8ueibi+a3oeivnuawrumDuOiAveaumuaDruWEi+eciOeWuOa+ueaOuOiGu+WVlueuquiBg+iQj+eYhei1lVwiLFwibHVcIjpcIui3r+WFremZhuW9lee7v+mcsumygeWNoueCiem5v+emhOi1guiKpuW6kOeijOm6k+miheazuOWNpOa9num5rei+mOiZj+eSkOa8ieWZnOaIrumyiOaOs+apuei9s+mAr+a4jOiTvOaSuOm4rOagjOawh+iDqumVpeewj+iIu+i+guWehlwiLFwidGFuXCI6XCLosIjmjqLlnabmkYrlvLnngq3lnZvmu6notKrlj7nosK3mva3norPmr6/nmKvmqoDnl7DoopLlnY3opoPlv5DmmJnpg6/mvrnpkr3plKxcIixcInJlblwiOlwi5Lq65Lu76K6k5LuB5b+N6Z+n5YiD57qr6aWq5aaK6I2P56iU5aOs5Lue6L2r5Lq76KG9XCIsXCJqaWVcIjpcIuWutue7k+ino+S7t+eVjOaOpeiKguWlueWxiuS7i+mYtuihl+WAn+adsOa0geaIquWnkOaPreaNt+WKq+aIkueahuerreahlOivq+alt+enuOedq+iXieaLruiKpeivmOeio+WXn+miieiap+WtkeWpleeWluahgOiupueWpeWBiOe+r+iit+WTnOWWiOWNqemykumqsVwiLFwieWFuXCI6XCLnoJTkuKXpqozmvJToqIDnnLzng5/msr/lu7bnm5Dngo7nh5XlsqnlrrToibPpopzmrrflvabmjqnmt7npmI7ooY3pk4Xpm4Hlkr3ljoznhLDloLDnoJrllIHnhInmmY/mqpDonJLlpYTkv6johYzlpo3osJrlhZbnrbXnhLHlgYPpl6vlq6PphKLmua7otZ3og63nkLDmu5/pmInprYfphb3pg77mgbnltKboiqvliaHpvLnoj7jppI3ln4/osLPorqDljqPnvahcIixcImRhbmdcIjpcIuW9k+WFmuaho+iNoeaMoeWuleeggOmTm+ijhuWHvOiPquiwoFwiLFwidGFvXCI6XCLlpZforqjot7PpmbbmtpvpgIPmoYPokITmt5jmjo/mu5Tpn6zlj6jmtK7llZXnu6bppZXpvJdcIixcInRpYW9cIjpcIuadoeiwg+aMkei3s+i/ouecuuiLleeqleespOS9u+WVgeeynOmrq+mTq+elp+m+huicqemyplwiLFwidGVcIjpcIueJueW/keW/kumTveaFnVwiLFwiZGVcIjpcIueahOWcsOW+l+W+t+W6lemUnVwiLFwiZGVpXCI6XCLlvpdcIixcImRpXCI6XCLnmoTlnLDnrKzmj5DkvY7lupXmirXlvJ/ov6rpgJLluJ3mlYzloKTokoLnvJTmu7TmtqTnv5/lqKPnrJvmo6PojbvosJvni4TpgrjlmIDnoKXlnbvor4vlq6HplZ3norLpqrbmsJDmn6LnsbTnvp3nnYfop4xcIixcInRpXCI6XCLkvZPmj5DpopjlvJ/mm7/moq/ouKLmg5XliZTouYTmo6PllbzlsYnliYPmtpXplJHlgJzmgozpgJblmo/ojZHpho3nu6jpuYjnvIfoo7xcIixcInR1aVwiOlwi5o6o6YCA5byf6IW/6KSq6aKT6JyV5b+S54W6XCIsXCJ5b3VcIjpcIuacieeUseWPiOS8mOa4uOayueWPi+WPs+mCruWwpOW/p+W5vOeKueivseaCoOW5veS9kemHieafmumTgOmxv+Wbv+mFieaUuOm7neiOoOeMt+ido+eWo+WRpuiatOiOuOiOnOmTleWupee5h+WNo+eJlum8rOWwouiasOS+kVwiLFwiZGlhblwiOlwi55S154K55bqX5YW45aWg55S456KY5reA5q6/5Z6r6aKg5ruH55mr5beF5oOm5o6C55mc54635L2D6Liu6Z2b6ZK/57Cf5Z2r6Zi9XCIsXCJ0aWFuXCI6XCLlpKnnlLDmt7vloavnlJznlLjmgazohYbkvYPoiJTpkr/pmJflv53mroTnlYvmoJ3mjq1cIixcInpodVwiOlwi5Li75pyv5L2P5rOo5Yqp5bGe6YCQ5a6B6JGX562R6am75pyx54+g56Wd54yq6K+45p+x56u56ZO45qCq556p5Zix6LSu54Wu54Ob6IuO6KSa6Jub5ouE6ZOi5rSZ56u66JuA5ria5Lyr5p285L6P5r6N6K+b6Iyx566454K36LqF57+l5r206YK+5qeg6Iiz5qml5Li255iD6bqI55awXCIsXCJuaWFuXCI6XCLlubTlv7Xphb/ovpfnor7lu7/mjbvmkrXmi4jolKvpsrbln53psofovofpu49cIixcImRpYW9cIjpcIuiwg+aOiembleWQiumSk+WIgeiyguWHi+eiiemyt+WPvOmTq+mTnlwiLFwieWFvXCI6XCLopoHkuYjnuqboja/pgoDmkYfogIDohbDpgaXlp5rnqpHnkbblkqzlsKfpkqXosKPogrTlpK3kvqXlkIbnlp/lppblubrmnbPoiIDnqpXnqojmm5zpuZ7niLvnuYflvq3ovbrpk6vps5DltL7nj6dcIixcImRpZVwiOlwi6LeM5Y+g6J226L+t56Kf54i56LCN54mS6ICL5L2a5ZaL5aCe55Oe6bK95Z6k5o+y6LmAXCIsXCJzaGVcIjpcIuiuvuekvuaRhOa2ieWwhOaKmOiIjeibh+aLvuiIjOWlouaFkei1pui1iuS9mOm6neatmeeVsuWOjeeMnuaPsua7oFwiLFwieWVcIjpcIuS4muS5n+WknOWPtuWwhOmHjua2suWGtuWWnemhteeIt+iAtumCquWSveaksOeDqOaOluaLveabs+aZlOiwkuiFi+WZjuaPtumdpemCuumTmOaPslwiLFwieGllXCI6XCLkupvop6PljY/lhpnooYDlj7bosKLmorDpnovog4HmlpzmkLrmh4jlpZHljbjosJDms4Ton7npgqrmrYfms7vlsZHmjJ/nh67mpq3onY7mkrflgZXkurXmpZTpoonnvKzpgoLpspHngKPli7Dmpo3olqTnu4HmuKvlu6jnjazoup5cIixcInpoZVwiOlwi6L+Z6ICF552A6JGX5rWZ5oqY5ZOy6JSX6YGu6L6Z6L6E5p+Y6ZSX6KS26JyH6Juw6bmn6LCq6LWt5pG65LmH56OU6J6rXCIsXCJkaW5nXCI6XCLlrprorqLpobbkuIHpvI7nm6/pkonplK3lj67ku4Ppk6TnlLrphYrllbbnoofohZrnlpTnjo7ogLVcIixcImRpdVwiOlwi5Lii6ZOlXCIsXCJ0aW5nXCI6XCLlkKzluq3lgZzljoXlu7fmjLrkuq3oiYflqbfmsYDpk6Tng4PpnIbnlLronJPokbbmooPojptcIixcImRvbmdcIjpcIuWKqOS4nOiRo+WGrOa0nuaHguWGu+agi+S+l+WSmuWzkuawoeaBq+iDtOehkOWejOm4q+WyveiDqFwiLFwidG9uZ1wiOlwi5ZCM6YCa57uf56ul55eb6ZOc5qG25qGQ562S5b2k5L6X5L2f5r285o2F6YWu56C8556z5oG45bOS5Lud5Ze15YOu5Z6M6Iy8XCIsXCJ6aG9uZ1wiOlwi5Lit6YeN56eN5LyX57uI6ZKf5b+g5Luy6KG36IK/6Li15Yai55uF6Jqj5b+q6ZS66Iiv6J695aSCXCIsXCJkb3VcIjpcIumDveaWl+ivu+ixhuaKluWFnOmZoemAl+eqpua4juiaqueXmOiUuOmSreevvFwiLFwiZHVcIjpcIuW6pumDveeLrOedo+ivu+avkua4oeadnOWgtei1jOedueiCmumVgOa4juesg+eruuWYn+eKiuWmkueJjeigueakn+m7qeiKj+mrkVwiLFwiZHVhblwiOlwi5pat5q6155+t56uv6ZS757yO54WF5qS057CWXCIsXCJkdWlcIjpcIuWvuemYn+i/veaVpuWFkeWghueik+mVpuaAvOaGnVwiLFwicnVpXCI6XCLnkZ7lhZHplJDnnb/oiq7olYrolaTomovmnphcIixcInl1ZVwiOlwi5pyI6K+057qm6LaK5LmQ6LeD5YWR6ZiF5bKz57Kk5oKm5puw6ZKl5qCO6ZK65qi+54C56b6g5ZOV5YiWXCIsXCJ0dW5cIjpcIuWQnuWxr+WbpOikquixmuiHgOmlqOaavuawvVwiLFwiaHVpXCI6XCLkvJrlm57mjKXmsYfmg6DovonmgaLlvr3nu5jmr4HmhafngbDotL/ljYnmgpTnp73muoPojZ/mmZblvZforrPor7Lnj7LloJXor5nolZnmmabnnaLpur7ng6nojLTllpnmoafom5TmtITmtY3ombrmgZron6rlkrTpmrPnvIvlk5VcIixcInd1XCI6XCLliqHnianml6DkupTmrabljYjlkLToiJ7kvI3msaHkuYzor6/kuqHmgbblsYvmmaTmgp/lkL7pm77oipzmoqfli7/lt6vkvq7lnZ7mr4vor6zlkZzpkqjpgqzmjYLpuZzlhYDlqbrlpqnmlrzmiIrpuYnmta/onIjllJTpqpvku7XnhJDoirTpi4jlupHpvK/nib7mgIPlnKzlv6Tnl6bov5XmnYzlr6TpmKJcIixcInlhXCI6XCLkuprljovpm4XniZnmirzpuK3lkYDovafmtq/ltJbpgqroir3lk5HorrbpuKblqIXooZnkuKvompznoqPlnq3kvKLmsKnmoaDnkIrmj6DlkJbnnZrnl5bnlovov5PlsojnoJFcIixcImhlXCI6XCLlkozlkIjmsrPkvZXmoLjnm5botLrllp3otavojbfnm5LpuaTlkJPlkbXoi5vnpr7oj4/lo5HopJDmtrjpmILpmJblir7or4Ppoozll6zosonmm7fnv67nuqXnm41cIixcIndvXCI6XCLmiJHmj6Hnqp3msoPljafmjJ3mtqHmlqHmuKXluYTonJfllpTlgK3ojrTpvozogp/noapcIixcImVuXCI6XCLmganmkYHokr1cIixcIm5cIjpcIuWXr+WUlFwiLFwiZXJcIjpcIuiAjOS6jOWwlOWEv+iAs+i/qemltea0sei0sOmTkuePpeS9tOm4uOmylVwiLFwiZmFcIjpcIuWPkeazlee9muS5j+S8kOmYgOetj+egneWeoeePkFwiLFwicXVhblwiOlwi5YWo5p2D5Yi45rOJ5ZyI5ouz5Yqd54qs6ZOo55eK6K+g6I2D6Yab6Jy36aKn57u754qt562M6ayI5oKb6L6B55WOXCIsXCJmZWlcIjpcIui0uemdnumjnuiCpeW6n+iPsuiCuuWVoeayuOWMquaWkOicmuWmg+ivveaJiee/oemcj+WQoOe7r+iFk+eXseiKvua3neaCseeLkuamp+egqemyseevmumVhFwiLFwicGVpXCI6XCLphY3ln7nlnY/otZTkvanpmarmspvoo7Tog5rlpoPpnIjmt6Dml4bluJTlkbjphoXovpTplKtcIixcInBpbmdcIjpcIuW5s+ivhOWHreeTtuWGr+Wxj+iQjeiLueS5kuWdquaesOWoieS/nOmyhlwiLFwiZm9cIjpcIuS9m1wiLFwiaHVcIjpcIuWSjOaKpOiuuOaIt+aguOa5luS6kuS5juWRvOiDoeaIj+W/veiZjuayqueziuWjtuiRq+eLkOidtOW8p+eRmua1kum5hOeQpeaJiOWUrOa7ueaDmuelnOWbq+aWm+esj+iKtOmGkOeMouaAmeWUv+aIveansuins+eFs+m5leWGseeToOiZjeWytem5seeDgOi9t1wiLFwiZ2FcIjpcIuWkueWSluWYjuWwrOWZtuaXruS8veWwlemShuWwnFwiLFwiZ2VcIjpcIuS4quWQiOWQhOmdqeagvOatjOWTpeeblumalOWJsumYgeaIiOiRm+m4veaQgeiDs+iIuOeWmemTrOmqvOibpOWSr+WcqumViemijOS7oeehjOWXnemssuiGiOe6peiivOaQv+WhpeWTv+iZvFwiLFwiaGFcIjpcIuWTiOibpOmTqlwiLFwieGlhXCI6XCLkuIvlpI/ls6HljqbovpbpnJ7lpLnomb7ni63lkJPkvqDmmofpgZDnno7ljKPnkZXllKzlkbfpu6DnoZbnvYXni47nmJXmn5lcIixcImdhaVwiOlwi5pS56K+l55uW5qaC5rqJ6ZKZ5LiQ6Iql6LWF5Z6T6ZmU5oikXCIsXCJoYWlcIjpcIua1t+i/mOWus+WtqeS6peWSs+mquOmqh+awpuWXqOiDsumGolwiLFwiZ2FuXCI6XCLlubLmhJ/otbbmlaLnlJjogp3mnYbotaPkub7mn5HlsLTnq7/np4bmqYTnn7jmt6boi7fmk4DphZDnu4Dms5Tlnanml7DnlrPmvolcIixcImdhbmdcIjpcIua4r+mSouWImuWyl+e6suWGiOadoOe8uOaJm+iCm+e9oeaIhuetu1wiLFwiamlhbmdcIjpcIuWwhuW8uuaxn+a4r+WlluiusumZjeeWhuiSi+WnnOa1huWMoOmFseWDteahqOe7m+e8sOeKn+ixh+ekk+a0muiMs+ezqOiAqVwiLFwiaGFuZ1wiOlwi6KGM6Iiq5p2t5be35aSv5ZCt5qGB5rKG57uX6aKDXCIsXCJnb25nXCI6XCLlt6XlhazlhbHkvpvlip/nuqLotKHmlLvlrqvlt6npvprmga3mi7HouqzlvJPmsZ7omqPnj5nop6XogrHlu75cIixcImhvbmdcIjpcIue6ouWuj+a0qui9sOiZuem4v+W8mOWThOeDmOazk+ioh+iVu+mXs+iup+iNrem7ieiWqFwiLFwiZ3VhbmdcIjpcIuW5v+WFiemAm+a9oueKt+iDseWSo+ahhFwiLFwicWlvbmdcIjpcIuept+eQvOepuemCm+iMleeth+i3q+ibqemKjlwiLFwiZ2FvXCI6XCLpq5jlkYrmkJ7nqL/oho/ns5XplZDnmovnvpTplIbmnbLpg5znnb7or7Dol4Hnr5nnvJ/mp4Hmp5RcIixcImhhb1wiOlwi5aW95Y+35q+r6LGq6ICX5rWp6YOd55qT5piK55qL6JK/5aOV54GP5ZqO5r+g6Jqd6LKJ6aKi5Zel6JaF5ZqGXCIsXCJsaVwiOlwi55CG5Yqb5Yip56uL6YeM5p2O5Y6G5L6L56a75Yqx56S85Li96buO55KD5Y6J5Y6Y57KS6I6J5qKo6Zq25qCX6I2U5rKl54qB5ryT5ZOp54u46Jec572556+x6bKk56C65ZCP5r6n5L+Q6aqK5rqn56C+6I6F6ZSC56yg6KCh6JuO55ei6Zuz5L+q5YKI6Ya05qCO6YOm5L+a5p6l5Zax6YCm5aiM6bmC5oi+56Cs5ZSz5Z2c55ag6JyK6bun54yB6ayy57Kd6JOg5ZGW6Lee55as57yh6bKh6bOi5aug6KmI5oKd6IuI56+l6L25XCIsXCJqaWFcIjpcIuWutuWKoOS7t+WBh+S9s+aetueUsuWYiei0vumpvuWrgeWkueeovOmSvuaMn+aLrui/puS8vemiiua1g+aet+aIm+iNmueXgumiiemVk+ess+ePiOWyrOiDm+iiiOmDj+iRreiit+eYlemTl+i3j+ibseaBneWTv1wiLFwibHVvXCI6XCLokL3nvZfnu5zmtJvpgLvonrrplKPpqobokJ3oo7jmvK/ng5nmkZ7pqqHlkq/nrqnnj57mjYvojabnoYzpm5LmpKTplZnot57nmLDms7rohLbnjKHlgK7ooINcIixcImtlXCI6XCLlj6/np5HlhYvlrqLliLvor77popfmuLTlo7Pmn6/mo7XlkbXlnbfmgaroi5vlkrPno5Xnj4LnqJ7nnozmupjovbLnqqDll5HnlrTonYzlsqLpk6rpoo/pq4HomrXnvILmsKrpqpLpkrbplJ5cIixcInFpYVwiOlwi5Y2h5oGw5rS95o6Q6auC6KK35ZKt6JGcXCIsXCJnZWlcIjpcIue7mVwiLFwiZ2VuXCI6XCLmoLnot5/kupjoia7lk4/ojJtcIixcImhlblwiOlwi5b6I54ug5oGo55eV5ZOPXCIsXCJnb3VcIjpcIuaehOi0reWkn+WPpeayn+eLl+mSqeaLmOWLvuiLn+WeouaeuOevneS9neWqvuivn+Wyo+W9gOe8keessemesuinj+mBmFwiLFwia291XCI6XCLlj6PmiaPlr4flj6nmiqDkvZ3olLvoiqTnnI3nrZhcIixcImd1XCI6XCLogqHlj6Tpob7mlYXlm7rpvJPpqqjkvLDosLfotL7lp5HlraTpm4fovpzoj4fmsr3lkpXlkbHplKLpkrTnro3msanmoo/nl7zltK7ovbHpuKrnia/om4ror4Lmr4LpuZjoj7DnvZ/lmI/oh4zop5rnnr3om4TphaTnib/psrRcIixcInBhaVwiOlwi54mM5o6S5rS+5ouN6L+r5b6Y5rmD5L+z5ZOM6JKOXCIsXCJndWFcIjpcIuaLrOaMgueTnOWIruWvoeWNpuWRseikguWJkOiDjeivlum4ueagneWRmVwiLFwidG91XCI6XCLmipXlpLTpgI/lgbfmhInpqrDkuqBcIixcImd1YWlcIjpcIuaAquaLkOS5llwiLFwia3VhaVwiOlwi5Lya5b+r5Z2X56236ISN6JKv5L6p5rWN6YOQ6JKJ54uv5ZOZXCIsXCJndWFuXCI6XCLlhbPnrqHop4LppoblrpjotK/lhqDmg6/ngYznvZDojp7nurbmo7rmlqHnn5zlgIzpubPps4/nm6XmjrzmtqtcIixcIndhblwiOlwi5LiH5a6M5pma5rm+546p56KX6aG95oy95byv6JST5Li46I6e55qW5a6b5amJ6IWV6Jy/5oOL54O355Cs55W56LGM5Ymc57qo57u+6ISY6I+A6IqE566iXCIsXCJuZVwiOlwi5ZGi5ZOq5ZGQ6K6355aSXCIsXCJndWlcIjpcIuinhOi0teW9kui9qOahguafnOWcremsvOehheeRsOi3qum+n+WMrumXuuivoeeZuOmznOahp+eaiOmykeWIveaZt+WCgOecreWmq+eCheW6i+ewi+WIv+WuhOWMplwiLFwianVuXCI6XCLlhpvlnYfkv4rlkJvls7voj4znq6Ppkqfpqo/pvp/mtZrpmr3pg6HnraDnmrLpuofmjYNcIixcImppb25nXCI6XCLnqpjngq/ov6XngoXlhoLmiYNcIixcImp1ZVwiOlwi5Yaz57ud6KeS6KeJ5o6Y5bSb6K+A542X5oqJ54i15Zq85YCU5Y6l6JWo5pSr54+P55+N6Lm26LCy6ZWi6bOc5Zmx5qG35ZmY5pKF5qmb5a2T6KeW5YqC54idXCIsXCJndW5cIjpcIua7muajjei+iuihruejmemyp+e7suS4qFwiLFwiaHVuXCI6XCLlqZrmt7fprYLmtZHmmI/mo43nj7LojaTppoTor6jmurfpmI1cIixcImd1b1wiOlwi5Zu96L+H5p6c6YOt6ZSF6KO55bi85rah5qSB5ZuX6J2I6Jmi6IGS5Z+a5o6054yT5bSe6Jy+5ZGZ6aaYXCIsXCJoZWlcIjpcIum7keWYv+WXqFwiLFwia2FuXCI6XCLnnIvliIrli5jloKrlnY7noI3kvoPltYzmp5vnnrDpmJrpvpvmiKHlh7XojrBcIixcImhlbmdcIjpcIuihoeaoquaBkuS6qOWTvOePqeahgeiYhVwiLFwibW9cIjpcIuS4h+ayoeS5iOaooeacq+WGkuiOq+aRqeWiqOm7mOejqOaRuOa8oOiEieiGnOmtlOayq+mZjOaKueWvnuiYkeaRueiTpummjeiMieWYv+iwn+eno+ifhuiyieWrq+mVhuaugeiAseWst+m6veeYvOiyiuiymFwiLFwicGVuZ1wiOlwi6bmP5pyL5b2t6Iao6JOs56Kw6Iu55qOa5o2n5Lqo54O556+35r6O5oqo56G85oCm56Cw5Zit6J+b5aCLXCIsXCJob3VcIjpcIuWQjuWAmeWOmuS+r+eMtOWWieWQvOmAheevjOezh+mquuW+jOmyjueYiuWgoFwiLFwiaHVhXCI6XCLljJbljY7liJLor53oirHnlLvmu5Hlk5fosYHpqoXmoabnjL7pk6fnoIlcIixcImh1YWlcIjpcIuaAgOWdj+a3ruW+iuankOi4nVwiLFwiaHVhblwiOlwi6L+Y546v5o2i5qyi5oKj57yT5ZSk54SV5bm755eq5qGT5a+w5raj5a6m5Z645rS55rWj6LGi5aWC6YOH5Zyc542+6bKp6ayf6JCR6YCt5ry26ZS+57yz5pOQXCIsXCJ4dW5cIjpcIuiur+iurei/heWtmeWvu+ivouW+quaXrOW3oeaxm+WLi+mAiueGj+W+h+a1muauiempr+myn+iWsOiNgOa1lOa0teWzi+WfmeW3vemDh+mGuuaBguiNqOeqqOiViOabm+eNr1wiLFwiaHVhbmdcIjpcIum7hOiNkueFjOeah+WHsOaFjOaZg+a9ouiwjuaDtuewp+eSnOaBjeW5jOa5n+idl+ejuumajeW+qOmBkeiCk+evgemzh+ifpeeZgFwiLFwibmFpXCI6XCLog73kuYPlpbbogJDlpYjpvJDokJjmsJbmn7DkvbToib9cIixcImx1YW5cIjpcIuS5seWNtea7puWzpum4vuagvumKruaMm+WtquiElOWoiFwiLFwicWllXCI6XCLliIfkuJTlpZHnqoPojITnoIzplLLmgK/kvL3mg6zlpr7otoTmjIjpg4TnrqfmhYpcIixcImppYW5cIjpcIuW7uumXtOS7tuingeWdmuajgOWBpeebkeWHj+eugOiJsOi3teWFvOmJtOmUrua4kOafrOWJkeWwluiCqeiIsOiNkOeurea1heWJquS/reeiseiMp+WluOatvOaLo+aNoeeFjui0sea6heanm+a2p+Wgkeesuuiwj+mlr+mUj+e8hOedkeish+i5h+iFseiPhee/puaIrOavveesleeKjeeht+mer+eJruaep+a5lOmyo+Wbneijpei4uuaQm+e8o+m5o+iSueiwq+WDreaIi+i2vOall1wiLFwibmFuXCI6XCLljZfpmr7nlLfmpaDlloPlm6Hotafohanlm53onbtcIixcInFpYW5cIjpcIuWJjeWNg+mSseetvua9nOi/geasoOe6pOeJtea1hemBo+iwpuS5vumTheatiem7lOiwtOW1jOWAqemSs+iMnOiZlOWgkemSjumqnumYoeaOrumSpOaJpuiKiueKjeiNqOS7n+iKoeaCree8seS9peaEhuiksOWHteiCt+WyjeaQtOeuneaFiuakoFwiLFwicWlhbmdcIjpcIuW8uuaKoueWhuWimeaequiFlOmUteWRm+e+jOiUt+ilgee+n+i3hOaor+aIleWrseaIl+eCnemVqumUluico1wiLFwieGlhbmdcIjpcIuWQkemhueebuOaDs+S5oeixoeWTjemmmemZjeWDj+S6q+eusee+iuelpea5mOivpuapoeW3t+e/lOilhOWOoumVtumjqOmlt+e8g+mqp+iKl+W6oOmynuiRmeifk1wiLFwiamlhb1wiOlwi5pWZ5Lqk6L6D5qCh6KeS6KeJ5Y+r6ISa57y06IO26L2/6YOK54Sm6aqE5rWH5qSS56SB5L286JWJ5aiH55+r5pCF57ue6YW15Ym/5Zq86aW656qW6Lek6Juf5L6l54uh5aej55qO6Iyt5bOk6ZOw6Yau6bKb5rmr5b686bmq5YOs5ZmN6Im95oyi5pWrXCIsXCJ6aHVvXCI6XCLnnYDokZfnvLTmoYzljZPmjYnnkKLngbzmtYrphYzmi5nojIHmtr/pla/mt5bllYTmv6/nhK/lgKzmk6Lmlqvmo7nor7zmtZ7npppcIixcInFpYW9cIjpcIuahpeS5lOS+qOW3p+aChOaVsuS/j+Wjs+mbgOeep+e/mOeqjeWzremUueaSrOiNnui3t+aoteaGlOmemOaph+WzpOivruiwr+aEgOmekuehl+WKgee8slwiLFwieGlhb1wiOlwi5bCP5pWI6ZSA5raI5qCh5pmT56yR6IKW5YmK5a2d6JCn5L+P5r2H56Gd5a615ZW45Zqj6ZyE5reG5ZOu562x6YCN5aej566r6aqB5p6t5ZOT57uh6Ju45bSk5p616a2IXCIsXCJzaVwiOlwi5Y+45Zub5oCd5pav6aOf56eB5q275Ly85Lid6aWy5a+66IKG5pKV5rOX5Ly65Zej56WA5Y6u6am35Zi26ZS25L+f5bez6Juz5ZKd6ICc56yl57qf57O46bi257yM5r6M5aeS5rGc5Y625YWVXCIsXCJrYWlcIjpcIuW8gOWHr+aFqOWygualt+aBuuaPqemUtOmToOW/vuWesuWJgOmUjuiSiFwiLFwiamluXCI6XCLov5vph5Hku4rov5Hku4XntKflsL3mtKXmlqTnpoHplKblirLmmYvosKjnrYvlt77mtbjopZ/pnbPnkb7ng6znvJnpkoXnn5zop5DloIfpppHojanlmaTlu5Hlppfmp7/otYboob/ljbpcIixcInFpblwiOlwi5Lqy5Yuk5L6156em6ZKm55C056a96Iq55rKB5a+d5pOS6KaD5ZmZ55+c5Zeq5o+/5rqx6Iqp6KG+5buR6ZST5ZCj5qqO6J6TXCIsXCJqaW5nXCI6XCLnu4/kuqznsr7looPnq57mma/orabnq5/kupXmg4rlvoTpnZnlirLmlazlh4DplZznnZvmmbbpoojojYblhaLpnZbms77mhqzpsrjojI7ohYjoj4Hog6vpmLHml4znsrPpnZPnl4nnrpDlhIbov7PlqafogrzliK3lvKrnjY1cIixcInlpbmdcIjpcIuW6lOiQpeW9seiLseaZr+i/juaYoOehrOebiOi1oumiluWptOm5sOiNp+iOueaoseeRm+idh+iQpuiOuumijeiGuue8qOeAm+aluee9guiNpeiQpOm5pua7ouiTpemDouiMlOWYpOeSjuWstOeYv+WqteaShOa9hlwiLFwiaml1XCI6XCLlsLHnqbbkuZ3phZLkuYXmlZHml6fnuqDoiIXngbjnlprmj6rlko7pn63njpboh7zmn6notbPpuKDpuavljqnllb7pmITmoZXlg6bprI9cIixcInp1aVwiOlwi5pyA572q5Zi06YaJ5ZKA6JWe6KecXCIsXCJqdWFuXCI6XCLljbfmjZDlnIjnnLflqJ/lgKbnu6Lpmr3plYzmtpPpuYPphITooLLni7fplKnmoYpcIixcInN1YW5cIjpcIueul+mFuOiSnOeLu1wiLFwieXVuXCI6XCLlkZjov5DkupHlhYHlrZXolbTpn7XphZ3ogJjmmZXljIDoirjpmajnuq3pg6fnraDmgb3pn6vpg5PmsLLmrpLmhKDmmIDoj4Dni4FcIixcInF1blwiOlwi576k6KOZ6YCh6bqHXCIsXCJrYVwiOlwi5Y2h5ZaA5ZKW5ZKU5ZKv5L2n6IOpXCIsXCJrYW5nXCI6XCLlurfmipfmiZvmhbfngpXkuqLns6DkvInpkqrpl7ZcIixcImtlbmdcIjpcIuWdkemTv+WQrVwiLFwia2FvXCI6XCLogIPpnaDng6Tmi7fpk5DmoLLlsLvnipJcIixcImtlblwiOlwi6IKv5Z6m5oGz5ZWD6b6I6KOJXCIsXCJ5aW5cIjpcIuWboOW8lemTtuWNsOmfs+mlrumYtOmakOWnu+aut+a3q+WwueiNq+WQn+eYvuWvheiMteWcu+WeoOmEnua5ruiak+awpOiDpOm+iOeqqOWWkemTn+a0h+eLuuWkpOW7tOWQsumcquiMmuWgmVwiLFwia29uZ1wiOlwi56m65o6n5a2U5oGQ5YCl5bSG566cXCIsXCJrdVwiOlwi6Ium5bqT5ZOt6YW36KOk5p6v56qf5oyO6aq35aCA57uU5Yiz5Za+XCIsXCJrdWFcIjpcIui3qOWkuOWeruaMjuiDr+S+iVwiLFwia3VpXCI6XCLkuo/lpY7mhKfprYHppojmuoPljK7okbXnqqXnm5TpgLXnnb3pppfoganllp/lpJTnr5Hlsr/llrnmj4bpmpflgoDmmozot6zokonmhKbmgp3onbBcIixcImt1YW5cIjpcIuasvuWuvemri1wiLFwia3VhbmdcIjpcIuWGteefv+ahhueLguaXt+ectuWMoeetkOmCneWcueWTkOi0tuWkvOivs+ivk+e6qVwiLFwicXVlXCI6XCLnoa7ljbTnvLrpm4DpuYrpmJnnmLjmprfngpTpmJXmgqtcIixcImt1blwiOlwi5Zuw5piG5Z2k5o2G55Co6ZSf6bKy6YaM6auh5oKD6ZiDXCIsXCJrdW9cIjpcIuaJqeaLrOmYlOW7k+ibnlwiLFwibGFcIjpcIuaLieiQveWeg+iFiuWVpui+o+icoeWWh+WJjOaXr+egrOmCi+eYjFwiLFwibGFpXCI6XCLmnaXojrHotZbnnZDlvpXnsYHmtp7otYnmv5HnmZ7ltIPnlqDpk7xcIixcImxhblwiOlwi5YWw6KeI6JOd56+u5qCP5bKa54OC5rul57yG5o+95r6c5oum5oeS5qaE5paT5amq6ZiR6KS0572x5ZWJ6LCw6ZWn5rykXCIsXCJsaW5cIjpcIuael+S4tOmCu+i1geeQs+ejt+a3i+m6n+mclumznuWHm+aLjumBtOiUuuWQneeyvOW2mei6j+W7quaqqeWViei+muiGpueeteaHlFwiLFwibGFuZ1wiOlwi5rWq5pyX6YOO5buK54u855CF5qaU6J6C6ZiG6ZSS6I6o5ZW36JKX56iCXCIsXCJsaWFuZ1wiOlwi6YeP5Lik57Ku6Imv6L6G5Lqu5qKB5YeJ6LCF57Kx5pm+6Z2T6LiJ6I6o5qSL6a2J5aKaXCIsXCJsYW9cIjpcIuiAgeWKs+iQvee7nOeJouaNnua2neeDmeWnpeS9rOW0guWUoOmFqua9pueXqOmGqumTkemTueags+iAolwiLFwibXVcIjpcIuebruaooeacqOS6qeW5leavjeeJp+iOq+ephuWnhuWik+aFleeJn+eJoeWLn+edpue8quaykOaaruaLh+WnpemSvOiLnOS7q+avquWdtlwiLFwibGVcIjpcIuS6huS5kOWLkuiCi+WPu+mzk+WYnuS7guazkFwiLFwibGVpXCI6XCLnsbvntK/pm7fli5Lms6rolb7lnpLno4rmk4Lpla3ogovnvrjogJLlhKHlq5jnvKfphbnlmJ7or5TmqpFcIixcInN1aVwiOlwi6ZqP5bKB6Jm956KO5bC/6Zqn6YGC6auT56mX57ul6ZqL6YKD552i56Wf5r+J54en6LCH55yt6I29XCIsXCJsaWVcIjpcIuWIl+eDiOWKo+ijgueMjuWGveWSp+i2lOa0jOmso+WfkuaNqei6kFwiLFwibGVuZ1wiOlwi5Ya35oSj5qOx5qWe5aGEXCIsXCJsaW5nXCI6XCLpoobku6Tlj6bpm7bngbXpvoTpmbXlsq3lh4znjrLpk4Poj7Hmo7HkvLbnvproi5PogYbnv47ms6Dnk7Tlm7nnu6vlkaTmo4Lom4nphYPpsq7mn4NcIixcImxpYVwiOlwi5L+pXCIsXCJsaWFvXCI6XCLkuobmlpnnlpfovr3lu5bogYrlr6XnvKrlg5rnh47nvK3mkoLmkqnlmLnmvabplaPlr67ok7znjaDpkozlsKXpualcIixcImxpdVwiOlwi5rWB5YiY5YWt55WZ5p+z55ik56Gr5rqc56KM5rWP5qa055CJ6aaP6YGb6Y6P6aqd57u66ZWP5peS54aY6bmo6ZSNXCIsXCJsdW5cIjpcIuiuuui9ruS8puS7kee6tuaypuaKoeWbtVwiLFwibHZcIjpcIueOh+W+i+aXhee7v+iZkeWxpeWQlemTneWxoeawr+e8lea7pOS+o+mptOamiOmXvuWBu+ikm+aNi+iGgueohlwiLFwibG91XCI6XCLmpbzpnLLmvI/pmYvlqITmkILnr5Pllr3plYLlgbvnmJjpq4XogKfonbzltZ3okoxcIixcIm1hb1wiOlwi6LS45q+b55+b5YaS6LKM6IyC6IyF5bi954yr6aum6ZSa5oeL6KKk54mm5Y2v6ZOG6ICE5bOB55GB6J+K6IyG6J2l5peE5rOW5pi0556AXCIsXCJsb25nXCI6XCLpvpnpmoblvITlnoTnrLzmi6LogYvpmYfog6fnj5Hnqr/ojI/lkpnnoLvlnoXms7fmoIrnmYNcIixcIm5vbmdcIjpcIuWGnOa1k+W8hOiEk+S+rOWTnVwiLFwic2h1YW5nXCI6XCLlj4zniL3pnJzlrYDms7dcIixcInNodVwiOlwi5pyv5Lmm5pWw5bGe5qCR6L6T5p2f6L+w572y5pyx54af5q6K6JSs6IiS55aP6byg5reR5Y+U5pqR5p6i5aKF5L+e5puZ5oqS56uW6JyA6Jav5qKz5oiN5oGV5a2w5rKt6LWO5bq25ryx5aG+5YCP5r6N57q+5aed6I+96buN6IWn56er5q+55q6z55aL5pGFXCIsXCJzaHVhaVwiOlwi546H6KGw5biF5pGU55Sp6J+AXCIsXCJsdmVcIjpcIueVpeaOoOmUilwiLFwibWFcIjpcIuS5iOmprOWQl+aRqem6u+eggeWmiOeOm+WYm+mqguaKueiaguWUm+ifhueKuOadqVwiLFwibWVcIjpcIuS5iOm6vVwiLFwibWFpXCI6XCLkubDljZbpuqbov4johInln4vpnL7ojazliqJcIixcIm1hblwiOlwi5ruh5oWi5pu85ryr5Z+L6JST556S6Juu6bOX6aaS5bmU6LCp6J6o54az57ym6ZWY6aKf5aKB6Z6UXCIsXCJtaVwiOlwi57Gz5a+G56eY6L+35byl6Jyc6LCc6KeF6Z2h5rOM55yv6bqL54yV6LCn5ZKq57Oc5a6T5rGo6Yaa5Zin5byt6ISS5YaW5bmC56Wi57i76Ji86IqI57O45pWJXCIsXCJtZW5cIjpcIuS7rOmXqOmXt+eekuaxtuaJqueEluaHkemelOmSlFwiLFwibWFuZ1wiOlwi5b+Z55uy6Iyr6IqS5rCT6I696J+S6YKZ56Gt5rytXCIsXCJtZW5nXCI6XCLokpnnm5/moqbnjJvlrZ/okIzmsJPmnKbplLDmqqzli5Dmh7Xon5LonKLombvpu77ooJPoiajnlI3oiYvnnqLnpJ5cIixcIm1pYW9cIjpcIuiLl+enkuWmmeaPj+W6meeehOe8qua4uua3vOiXkOe8iOmCiOm5i+adquech+WWtVwiLFwibW91XCI6XCLmn5DosIvniZ/nvKrnnLjlk57pjarom5HkvpTljrZcIixcIm1pdVwiOlwi57yq6LCsXCIsXCJtZWlcIjpcIue+juayoeavj+eFpOaiheWqkuaemuWmueeciemthemcieaYp+WqmueOq+mFtumVgea5hOWvkOiOk+iigualo+eznOW1i+mVhea1vOeMuOm5m1wiLFwid2VuXCI6XCLmlofpl67pl7vnqLPmuKnnurnlkLvomorpm6/ntIrnmJ/msbbpn6vliI7nkrrnjp/pmIxcIixcIm1pZVwiOlwi54Gt6JSR56++5Lmc5ZKp6KCbXCIsXCJtaW5nXCI6XCLmmI7lkI3lkb3puKPpk63lhqXojJfmup/phannnpHonp/mmp1cIixcIm5hXCI6XCLlhoXljZfpgqPnurPmi7/lk6rlqJzpkqDlkZDmjbroobLplY7ogq1cIixcIm5laVwiOlwi5YaF6YKj5ZOq6aaBXCIsXCJudW9cIjpcIumavuivuuaMquWonOezr+aHpuWCqeWWj+aQpumUmFwiLFwicnVvXCI6XCLoi6XlvLHlgYznrqxcIixcIm5hbmdcIjpcIuWbiummleWblOabqeaUrlwiLFwibmFvXCI6XCLohJHpl7nmgbzmjKDnkZnmt5blrazlnrTpk5nmoaHlkbbnoYfnjLHom7JcIixcIm5pXCI6XCLkvaDlsLzlkaLms6XnlpHmi5/pgIblgKrlpq7ohbvljL/pnJPmurrml47mmLXlna3pk4zpsrXkvLLmgKnnnajnjIpcIixcIm5lblwiOlwi5aup5oGBXCIsXCJuZW5nXCI6XCLog71cIixcIm5pblwiOlwi5oKo5oGBXCIsXCJuaWFvXCI6XCLpuJ/lsL/murroooXohLLojJHlrLJcIixcIm5pZVwiOlwi5pGE6IGC5o2P5raF6ZWN5a295o276JiW5ZWu6LmR5Zer6Ies6ZWK6aKe5Lmc6ZmnXCIsXCJuaWFuZ1wiOlwi5aiY6YW/XCIsXCJuaW5nXCI6XCLlroHlh53mi6fms57mn6Dlkpvni57kvZ7ogY3nlK9cIixcIm51XCI6XCLliqrmgJLlpbTlvKnpqb3luJHlraXog6xcIixcIm52XCI6XCLlpbPpkpXooYTmgadcIixcInJ1XCI6XCLlhaXlpoLlpbPkubPlhJLovrHmsZ3ojLnopKXlrbrmv6HooJXlmoXnvJvmur3pk7fmtLPolrfopabpoqXok5BcIixcIm51YW5cIjpcIuaallwiLFwibnZlXCI6XCLomZDnlp9cIixcInJlXCI6XCLng63oi6Xmg7nllo9cIixcIm91XCI6XCLljLrmrKflgbbmrrTlkZXnprrol5XorrTpuKXnk6/msqTogKbmgIRcIixcInBhb1wiOlwi6LeR54Ku5rOh5oqb5Yio6KKN5ZKG55ax5bqW54uN5YyP6ISsXCIsXCJwb3VcIjpcIuWJluaOiuijklwiLFwicGVuXCI6XCLllrfnm4bmuZNcIixcInBpZVwiOlwi556l5pKH6Iuk5rCV5Li/XCIsXCJwaW5cIjpcIuWTgei0q+iBmOmikeaLvOaLmumipuWnmOWrlOamgOeJnVwiLFwic2VcIjpcIuiJsuWhnueRn+a2qeWVrOepkemTr+anrVwiLFwicWluZ1wiOlwi5oOF6Z2S5riF6K+35Lqy6L275bqG5YC+6aG35Y2/5pm05rCi5pOO5rCw572E56Os6Jy7566Q6bKt57au6IuY6bul5ZyK5qqg6KymXCIsXCJ6YW5cIjpcIui1nuaaguaUkuWgkeaYneewquezjOeTkumMvui2seaLtlwiLFwic2hhb1wiOlwi5bCR57uN5Y+s54On56iN6YK15ZOo6Z+25o2O5Yu65qKi6Z6Y6IqN6IuV5Yqt6ImE562y5p2T5r2yXCIsXCJzYW9cIjpcIuaJq+mqmuWrguaioue8q+aQlOeYmeiHiuWfvee8sumzi1wiLFwic2hhXCI6XCLmspnljqbmnYDnurHnoILllaXojo7liLnmnYnlgrvnhZ7psqjpnI7ll4Tnl6foo5/mjLLpk6nllLzmrYNcIixcInh1YW5cIjpcIuWOv+mAieWuo+WIuOaXi+aCrOi9qeWWp+eOhOe7mua4sueSh+eCq+iQseeZo+a8qeecqeaahOeFiumTiealpuazq+iwlueXg+eiueaPjumVn+WEh1wiLFwicmFuXCI6XCLnhLbmn5Pnh4Plhonoi5Lpq6/omrpcIixcInJhbmdcIjpcIuiuqeWjpOaUmOWat+eTpOepsOems1wiLFwicmFvXCI6XCLnu5XmibDppbblqIbmoaHojZtcIixcInJlbmdcIjpcIuS7jeaJlFwiLFwicmlcIjpcIuaXpVwiLFwicm91XCI6XCLogonmn5Tmj4nns4XpnqPouYJcIixcInJ1YW5cIjpcIui9r+mYruacilwiLFwicnVuXCI6XCLmtqbpl7BcIixcInNhXCI6XCLokKjmtJLmkpLpo5LljYXku6johI5cIixcInN1b1wiOlwi5omA5Lqb57Si57yp6ZSB6I6O5qKt55CQ5Zem5ZSG5ZSi5aiR6JOR576n5oyy5qGr5ZeN552DXCIsXCJzYWlcIjpcIuaAnei1m+WhnuiFruWZu+mzg1wiLFwic2h1aVwiOlwi6K+05rC056iO6LCB552h5rC1XCIsXCJzYW5nXCI6XCLmoZHkuKfll5PmkKHpoqHno4lcIixcInNlblwiOlwi5qOuXCIsXCJzZW5nXCI6XCLlg6dcIixcInNoYWlcIjpcIuetm+aZklwiLFwic2hhbmdcIjpcIuS4iuWVhuWwmuS8pOi1j+axpOijs+WikuaZjOWep+innuauh+eGtee7sVwiLFwieGluZ1wiOlwi6KGM55yB5pif6IWl54yp5oO65YW05YiR5Z6L5b2i6YKi6aWn6YaS5bm45p2P5oCn5aeT6ZmJ6I2H6I2l5pOk5oK756GOXCIsXCJzaG91XCI6XCLmlLbmiYvlj5fpppbllK7mjojlrojlr7/nmKblhb3ni6nnu7boiY/miYxcIixcInNodW9cIjpcIuivtOaVsOehleeDgeaclOmThOWmgeaniuiStOaQoFwiLFwic3VcIjpcIumAn+e0oOiLj+iviee8qeWhkeiCg+S/l+Wuv+eyn+a6r+mFpeWkmeaEq+ewjOeoo+WDs+iwoea2keiUjOWXieinq1wiLFwic2h1YVwiOlwi5Yi36ICN5ZSwXCIsXCJzaHVhblwiOlwi5qCT5ou05rau6ZepXCIsXCJzaHVuXCI6XCLpobrnnqzoiJzlkK5cIixcInNvbmdcIjpcIumAgeadvuWui+iuvOmiguiAuOivteW1qea3nuaAguaCmuW0p+WHh+W/querpuiPmFwiLFwic291XCI6XCLoiZjmkJzmk57ll73ll5blj5/pporolq7po5Xll77murLplLzonovnno1cIixcInN1blwiOlwi5o2f5a2Z56yL6I2q5qar6Zq854uy6aOnXCIsXCJ0ZW5nXCI6XCLohb7nlrzol6Tmu5XoqopcIixcInRpZVwiOlwi6ZOB6LS05biW6aSu6JCcXCIsXCJ0dVwiOlwi5Zyf56qB5Zu+6YCU5b6S5raC5ZCQ5bGg5YWU56eD5Ye46I286ZKN6I+f5aCN6YW0XCIsXCJ3YWlcIjpcIuWkluatquW0tFwiLFwid2FuZ1wiOlwi546L5pyb5b6A572R5b+Y5Lqh5pe65rGq5p6J5aaE5oOY572U6L6L6a2NXCIsXCJ3ZW5nXCI6XCLnv4Hll6Hnk67ok4rolblcIixcInpodWFcIjpcIuaKk+aMneeIqlwiLFwieWFuZ1wiOlwi5qC35YW75aSu6Ziz5rSL5oms5p2o576K6K+m5rCn5Luw56en55eS5ry+55ah5rOx5q6D5oGZ6biv5b6J5L2v5oCP54KA54OK6Z6F6JuYXCIsXCJ4aW9uZ1wiOlwi6ZuE5YWE54aK6IO45Ye25YyI5rG56IqOXCIsXCJ5b1wiOlwi5ZOf5ZS3XCIsXCJ5b25nXCI6XCLnlKjmsLjmi6Xli4fmtozms7Plurjkv5HouIrkvaPlko/pm43nlKzplZvoh4PpgpXom7nmgb/mhbXlo4Xnl4jps5nloonppZTlloFcIixcInphXCI6XCLmnYLmiY7lkrHnoLjlkovljJ3lkoLmi7ZcIixcInphaVwiOlwi5Zyo5YaN54G+6L295qC95LuU5a6w5ZOJ5bS955S+XCIsXCJ6YW9cIjpcIumAoOaXqemBreaeo+WZqueBtueHpeezn+WHv+i6geiXu+eagua+oeiapOWUo1wiLFwiemVpXCI6XCLotLxcIixcInplblwiOlwi5oCO6LCuXCIsXCJ6ZW5nXCI6XCLlop7mm77nu7zotaDmho7plIPnlJHnvb7nvK9cIixcInpoZWlcIjpcIui/mVwiLFwiem91XCI6XCLotbDpgrnlpY/mj43or7npqbrpmazmpbHphLnpsrBcIixcInpodWFpXCI6XCLovazmi71cIixcInp1blwiOlwi5bCK6YG16bOf5qi95pKZXCIsXCJkaWFcIjpcIuWXslwiLFwibm91XCI6XCLogKhcIn07XHJcblxyXG5leHBvcnQgeyBkaWN0IH0iLCJpbXBvcnQgeyBkaWN0IH0gZnJvbSAnLi9kaWMuanMnXHJcbmltcG9ydCB7IGRpY3QgYXMgcm9tYWppMmthbmppIH0gZnJvbSAnLi9kaWNfanAuanMnXHJcblxyXG5sZXQgU2ltcGxlSW5wdXRNZXRob2QgPSB7XHJcbiAgZGljdDoge31cclxufVxyXG5cclxuU2ltcGxlSW5wdXRNZXRob2QuaW5pdERpY3QgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmRpY3QucHkyaHogPSBkaWN0XHJcbiAgdGhpcy5kaWN0LnB5Mmh6MiA9IHt9XHJcbiAgdGhpcy5kaWN0LnB5Mmh6MlsnaSddID0gJ2knICAvLyDnibnmrorlpITnkIZcclxuXHJcbiAgZm9yIChsZXQga2V5IGluIHRoaXMuZGljdC5weTJoeikge1xyXG4gICAgbGV0IGNoID0ga2V5WzBdXHJcbiAgICBpZiAoIXRoaXMuZGljdC5weTJoejJbY2hdKSB7XHJcbiAgICAgIHRoaXMuZGljdC5weTJoejJbY2hdID0gdGhpcy5kaWN0LnB5Mmh6W2tleV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOaMguWFpeaXpeaWh+aYoOWwhFxyXG4gIHRoaXMuZGljdC5yb21hamkya2FuamkgPSByb21hamkya2FuamlcclxufVxyXG5cclxuU2ltcGxlSW5wdXRNZXRob2QuZ2V0U2luZ2xlSGFuemkgPSBmdW5jdGlvbihwaW55aW4sIGxhbmcgPSAnY24nKSB7XHJcbiAgLy8g5qC55o2uIGxhbmcg5Yaz5a6a6LWw5ZOq5byg6KGoXHJcbiAgaWYgKGxhbmcgPT09ICdjbicpIHtcclxuICAgIHJldHVybiB0aGlzLmRpY3QucHkyaHoyW3Bpbnlpbl1cclxuICAgICAgICB8fCB0aGlzLmRpY3QucHkyaHpbcGlueWluXVxyXG4gICAgICAgIHx8ICcnXHJcbiAgfVxyXG4gIGVsc2UgaWYgKGxhbmcgPT09ICdqcCcpIHtcclxuICAgIHJldHVybiB0aGlzLmRpY3Qucm9tYWppMmthbmppW3Bpbnlpbl1cclxuICAgICAgICB8fCAnJ1xyXG4gIH1cclxuICAvLyBlbiDmqKHlvI/kuI3mn6XlgJnpgIlcclxuICByZXR1cm4gJydcclxufVxyXG5cclxuU2ltcGxlSW5wdXRNZXRob2QuZ2V0SGFuemkgPSBmdW5jdGlvbihwaW55aW4sIGxhbmcgPSAnY24nKSB7XHJcbiAgbGV0IHJlc3VsdCA9IHRoaXMuZ2V0U2luZ2xlSGFuemkocGlueWluLCBsYW5nKVxyXG4gIGlmIChyZXN1bHQpIHtcclxuICAgIHJldHVybiBbIHJlc3VsdC5zcGxpdCgnJyksIHBpbnlpbiBdXHJcbiAgfVxyXG5cclxuICAvLyDlpJrlrZfmiKrmlq3ml7bvvIzlkIzmoLfmjIflrpogbGFuZ1xyXG4gIGxldCBtYXggPSBNYXRoLm1pbihwaW55aW4ubGVuZ3RoLCA2KVxyXG4gIGZvciAobGV0IGxlbiA9IG1heDsgbGVuID49IDE7IGxlbi0tKSB7XHJcbiAgICBsZXQgaGVhZCA9IHBpbnlpbi5zdWJzdHIoMCwgbGVuKVxyXG4gICAgbGV0IHJzID0gdGhpcy5nZXRTaW5nbGVIYW56aShoZWFkLCBsYW5nKVxyXG4gICAgaWYgKHJzKSB7XHJcbiAgICAgIHJldHVybiBbIHJzLnNwbGl0KCcnKSwgaGVhZCBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gWyBbXSwgJycgXVxyXG59XHJcblxyXG5TaW1wbGVJbnB1dE1ldGhvZC5pbml0RGljdCgpXHJcblxyXG5leHBvcnQgeyBTaW1wbGVJbnB1dE1ldGhvZCB9XHJcbiIsIi8qKlxyXG4gKiDmlLblvZXluLjnlKjml6XmnKzmsYnlrZcyMDAw5aSa5LiqXHJcbiAqL1xyXG5cclxuY29uc3QgZGljdCA9IHtcImFpXCI6XCLlk4DmjKjmhJvmm5bnm7jol41cIixcImF3YVwiOlwi5ZOA5reh5L215rOhXCIsXCJha3VcIjpcIuaCquaPoeepulwiLFwib1wiOlwi44GK44Kq5oKq5rGa5oq85LiL6LW36ZmN57eS5bCP57mU55Sf5oOc5oOc5oqY5biv572u6L+95bC+6LKg6ZuE6JC96ICB5ZKMXCIsXCJ3YXJ1XCI6XCLmgqpcIixcIm5pZ2lcIjpcIuaPoVwiLFwiYXRzdVwiOlwi5Zyn5Y6a6ZuG5pqR54axXCIsXCJhdHN1a2FcIjpcIuaJsVwiLFwiYVwiOlwi44GC44Ki5a6b5Lya6ZaL5oyZ5ZCI5ZCI5Zyo5YWF5b2T57eo6aO95piO5piO5piO5pyJ5L2Z5o+a5rW0XCIsXCJhcmFzaGlcIjpcIuW1kFwiLFwiYW5cIjpcIuWuieahiOaal+ihjFwiLFwieWFzdVwiOlwi5a6J5LyRXCIsXCJrdXJhXCI6XCLmmpflgInolLXmr5RcIixcImlcIjpcIuOBhOOCpOS7peiho+S9jeWbsuWMu+S+neWnlOWogeeVj+iDg+eCuuWwieeVsOenu+iQjuWBieakheaEj+mBleW9mee2reaFsOmBuue3r+aYk+W/jOWxheS6leeUn+mAneeZkuWUr+imgVwiLFwia29yb21vXCI6XCLooaNcIixcImt1cmFpXCI6XCLkvY1cIixcImtha29cIjpcIuWbslwiLFwiZVwiOlwi44GI44Ko5L6d5Zue5Lya57W1542y5oG15rGf6aSM6YeN56yR5b6X5p+EXCIsXCJ5dWRhXCI6XCLlp5RcIixcIm9zb1wiOlwi55WP5oGQ5oGQ5pWZ6KWy6YGFXCIsXCJrb3RvXCI6XCLnlbDnkLToqIDkuovmropcIixcInV0c3VcIjpcIuenu+msseaYoOaSg+WGmeiojlwiLFwibmFcIjpcIuOBquODiuiQjuaFo+iPnOaIkOaKlemCo+WliOWNl+e0jeeEoeWQjemztFwiLFwiZXJhXCI6XCLlgYnpgbhcIixcImNoaWdhXCI6XCLpgZVcIixcIm5hZ3VzYVwiOlwi5oWwXCIsXCJ5dWlcIjpcIumBuueUseWUr1wiLFwiaWtpXCI6XCLln5/nsovmga9cIixcImlrdVwiOlwi6IKy5bm+6KGMXCIsXCJzb2RhXCI6XCLogrJcIixcImhhZ3VrdVwiOlwi6IKyXCIsXCJpY2hpXCI6XCLkuIDlo7HluIJcIixcIml0c3VcIjpcIuS4gOmAuOS6lFwiLFwiaGl0b1wiOlwi5LiA5Lq6562JXCIsXCJpYmFyYVwiOlwi6IyoXCIsXCJpbW9cIjpcIuiKi1wiLFwiaW5cIjpcIuW8leWNsOWboOWSveWnu+WToemZoua3q+mZsOmjsumaoOmfu+mfs1wiLFwiaGlcIjpcIuOBsuODkuW8leeBq+W5sueBr+aXpeavlOearuWmg+WQpuaJueW9vOaKq+iCpemdnuWNkemjm+eWsuenmOenmOiiq+aCsuaJieiyu+eikee9t+mBv+azjOawt+WGt1wiLFwic2hpcnVzaGlcIjpcIuWNsFwiLFwieW9cIjpcIuOCiOODqOWboOipoOWvhOWvhOWRvOWbm+S4luWWhOS7o+iqreWknOS4juS6iOS9meiqiemgkOiJr1wiLFwibWlkYVwiOlwi5rer5LmxXCIsXCJrYWdlXCI6XCLpmbDpmbDlvbFcIixcIm5vXCI6XCLjga7jg47po7Llu7bovInov7DkuZfkuZfkvLjph45cIixcImtha3VcIjpcIumaoOeUu+WQhOinkuaLoemdqeagvOaguOauu+mDreimmui8g+malOmWo+eiuueNsuWah+epq+WuouasoFwiLFwidVwiOlwi44GG44Km5Y+z5a6H57696Zuo6aOi54ax5qSN55Sf6KuL5omT5b6X5aOy5rWu5Z+L5pyJ5oaCXCIsXCJ5dXVcIjpcIuWPs+WkleeUseWPi+acieWLh+W5veaCoOmDtea5p+eMtuijlemBiumbhOiqmOaGguiejeWEqlwiLFwibWlnaVwiOlwi5Y+zXCIsXCJoYVwiOlwi44Gv44OP57695pig5qCE5p6c5p6c5q2v5YiD55Sf5pm05o6D56uv5by16LK86Lez5ZCQ5oqK5rOi5rS+56C06KaH5Yml6JGJ5bGlXCIsXCJoYW5lXCI6XCLnvr1cIixcImFtZVwiOlwi6Zuo5aSpXCIsXCJhbWFcIjpcIumbqOeUmOWkqeWwvFwiLFwidXRhXCI6XCLllITmrYzorKFcIixcInVuZVwiOlwi55WdXCIsXCJ1cmFcIjpcIua1puaBqOijj1wiLFwidW5cIjpcIumBi+mbslwiLFwiaGFrb1wiOlwi6YGL566xXCIsXCJrdW1vXCI6XCLpm7Lmm4dcIixcImVpXCI6XCLmsLjms7Poi7HmmKDmoITllrboqaDlvbHpi63ooZtcIixcIm5hZ2FcIjpcIuawuOmVt+ecuua1gVwiLFwib3lvXCI6XCLms7Plj4rlj4pcIixcInNha2FcIjpcIuaghOmAhumAhumFkuebm+WdglwiLFwiaXRvbmFcIjpcIuWWtlwiLFwic3VydWRvXCI6XCLpi61cIixcImVraVwiOlwi5piT55ar55uK5ray6aeF5b25XCIsXCJ5YXNhXCI6XCLmmJPlhKpcIixcInlha3VcIjpcIueWq+ebiuWOhOW9uee0hOios+iWrOi6jVwiLFwiZXRzdVwiOlwi5oKm6LaK6KyB6ZayXCIsXCJrb1wiOlwi44GT44Kz6LaK5Y675oug6Jma5Yed5bex5oi45Y+k5ZG85Zu65a2k5byn6IKh6JmO5pWF5p6v5YCL5bqr5rmW6ZuH6KqH6byT6Yyu6aGn6buE6L686L685re35a2Q5bCP6LaF5oey5r+D6IKl57KJ5pyo57GgXCIsXCJlblwiOlwi5YaG5bu25rK/54KO5a605oCo5aqb5o+05ZyS54WZ54y/6YGg6Ymb5aGp5ryU57iB6Im2XCIsXCJtYXJ1XCI6XCLlhobkuLjkuLhcIixcInNvXCI6XCLjgZ3jgr3msr/liJ3mn5Pni5npmLvnpZbnp5/ntKDmjqrnspfntYTnlo7oqLTloZHpgaHnpI7mg7Pmt7tcIixcImhvbm9vXCI6XCLngo5cIixcIm9uXCI6XCLmgKjpgaDpn7PmganmuKnnqY/lvqFcIixcInNvbm9cIjpcIuWcklwiLFwia2VtdVwiOlwi54WZXCIsXCJrZW11cmlcIjpcIueFmVwiLFwic2FydVwiOlwi54y/XCIsXCJ0b29cIjpcIumBoOWNgemAmumAmlwiLFwibmFtYXJpXCI6XCLpiZtcIixcInNoaW9cIjpcIuWhqea9rlwiLFwiZnVjaGlcIjpcIue4gVwiLFwidHN1eWFcIjpcIuiJtlwiLFwia2VnYVwiOlwi5rGaXCIsXCJ5b2dvXCI6XCLmsZpcIixcImtpdGFuYVwiOlwi5rGaXCIsXCJvdVwiOlwi546L5Ye55aSu5b+c5b6A5oq85pe65qyn5q605qGc57+B5aWl5qiq55qH6buEXCIsXCJrb3RhXCI6XCLlv5xcIixcIm5hZ3VcIjpcIuautFwiLFwic2FrdXJhXCI6XCLmoZxcIixcIm9rdVwiOlwi5aWl5bGL5YSE5oa26IeG5b6M6YCB6LSI6YGFXCIsXCJ5b2tvXCI6XCLmqKpcIixcIm9rYVwiOlwi5bKh5LiY5L6154qv5YaSXCIsXCJ5YVwiOlwi44KE44Ok5bGL5a6255+i6L6e54S855ep5YWr5Ya25aSc6YeO5bylXCIsXCJvc29yZVwiOlwi6JmeXCIsXCJvdHN1XCI6XCLkuZlcIixcIm9yZVwiOlwi5L+6XCIsXCJvcm9cIjpcIuWNuOaEmlwiLFwib3Jvc2hpXCI6XCLljbhcIixcIm90b1wiOlwi6Z+z6JC95YqjXCIsXCJuZVwiOlwi44Gt44ON6Z+z5qC55a+d5YCk57e0XCIsXCJhdGF0YVwiOlwi5rip5pqWXCIsXCJvZGFcIjpcIuepj1wiLFwia2FcIjpcIuOBi+OCq+S4i+WMlueBq+WKoOWPr+S7ruS9leiKseS9s+S+oeaenOays+iLm+enkeaetuaetuWkj+WutuiNt+iPr+iPk+iyqOa4pumBjuWrgeaah+emjemdtOWvoeatjOeuh+eovOiqsuiaiuaOm+S4lOWIiOaPm+asoOWFvOaHuOaer+S6pOmmmem5v+WAn+abuOmjvuabv+iyuOS7o+izreaXpeaPj+WkiVwiLFwiZ2VcIjpcIuOBkuOCsuS4i+Wkj+eJmeino+WkllwiLFwic2hpdGFcIjpcIuS4i+imquiIjOaFlVwiLFwic2hpbW9cIjpcIuS4i+mcnFwiLFwibW90b1wiOlwi5LiL5Z+65rGC5YWD5pysXCIsXCJzYVwiOlwi44GV44K15LiL6Kaa5Ymy5Y675bem5L2Q5rKZ5p+756CC5ZSG5beu5beu6KmQ6Y6W5YaN5L2c5oyH6Kem5oy/6Iy25o+Q6YG/5Ya36KOCXCIsXCJrdWRhXCI6XCLkuIvnrqHnoJVcIixcImtlXCI6XCLjgZHjgrHljJbku67lrrboj6/msJfmh7joubTmr5tcIixcImJhXCI6XCLjgbDjg5DljJbloLTppqzlqYbnvbVcIixcImhvXCI6XCLjgbvjg5vngavlubLnqYLlvavluIbmrankv53lk7rmjZXoo5zoiJfmrLJcIixcImt1d2FcIjpcIuWKoOips+ahkVwiLFwia2FyaVwiOlwi5Luu54upXCIsXCJuYW5pXCI6XCLkvZVcIixcIm5hblwiOlwi5L2V55S35Y2X6Luf6Zuj57SNXCIsXCJoYW5hXCI6XCLoirHoj6/pvLvmlL7pm6LoqbFcIixcImF0YWlcIjpcIuS+oeWApFwiLFwia2F3YVwiOlwi5rKz6Z2p5riH5Lm+5bed55quXCIsXCJuYXRzdVwiOlwi5aSP5oeQ57SNXCIsXCJpZVwiOlwi5a62XCIsXCJuaVwiOlwi44Gr5LqM6I235YWQ5LuB6YCD5LqM5bC85byQXCIsXCJ1enVcIjpcIua4plwiLFwic3VcIjpcIuOBmeOCuemBjuWQuOWlvea4iOa4iOmFouaTpuWtkOaNqOS4u+WuiOW3nuS9j+mgiOaVsOe0oOW3o+a+hOmAj+mAj+e1sVwiLFwiYXlhbWFcIjpcIumBjuisnVwiLFwieW9tZVwiOlwi5auBXCIsXCJ0b3RzdVwiOlwi5auB5Ye456qBXCIsXCJoaW1hXCI6XCLmmodcIixcImt1dHN1XCI6XCLpnbTlsYjmjpjnqp9cIixcImthc2VcIjpcIueovFwiLFwiZ2FcIjpcIuOBjOOCrOeJmeeTpuaIkeeUu+iKveizgOmbhemkk1wiLFwia2liYVwiOlwi54mZXCIsXCJrYXdhcmFcIjpcIueTplwiLFwid2FyZVwiOlwi5oiRXCIsXCJ3YVwiOlwi44KP44Gv44Ov5oiR5Ymy5rK45rmn6Lyq5ZKM6KmxXCIsXCJtZVwiOlwi44KB44Oh6Iq96ZuM5aWz55uuXCIsXCJrYWlcIjpcIuS7i+WbnueBsOS8muW/q+aIkuaUueaAquaLkOaClOa1t+eVjOeahuaisOe1temWi+majualt+ino+Whiua9sOWjiuaHkOirp+iyneihl1wiLFwibWF3YVwiOlwi5ZueXCIsXCJoYWlcIjpcIueBsOWFpeaLneadr+iDjOiCuuS/s+mFjeaOkuaVl+W7g+i8qVwiLFwia29rb3JveW9cIjpcIuW/q1wiLFwiaW1hc2hpXCI6XCLmiJJcIixcImFyYXRhXCI6XCLmlLnmlrBcIixcImF5YVwiOlwi5oCq5Y2x6Kqk5aaWXCIsXCJrdVwiOlwi44GP44Kv5oKU5Lmd5LmF5py95a6u5L6b5Yy65Y+l6Ium6aeG5bqr5Y+j5bel5Yqf57SF6LKi6YWM6aOf57WE5pqu5p2lXCIsXCJrdXlhXCI6XCLmgpRcIixcInVtaVwiOlwi5rW3XCIsXCJtaW5hXCI6XCLnmoZcIixcImhpcmFcIjpcIumWi+W5s1wiLFwidG9cIjpcIuOBqOODiOino+aIuOaOoeaSruatouatouWft+WNgeWbs+mBgui3s+aWl+WQkOWmrOW+kumAlOmDvea4oeWhl+izreWcn+W6pueZu+mgreaziuWvjOmWieaNleWVj+WVj+a6tueVmVwiLFwia2F0YW1hcmlcIjpcIuWhilwiLFwidHN1YnVcIjpcIua9sOeyklwiLFwia293YVwiOlwi5aOK5aOw5oCWXCIsXCJmdXRva29yb1wiOlwi5oeQXCIsXCJnYWlcIjpcIuWkluWKvuWus+W0lua2r+ihl+aFqOiTi+ipsuamgumquFwiLFwic290b1wiOlwi5aSWXCIsXCJob2thXCI6XCLlpJbku5ZcIixcImhhenVcIjpcIuWkluW8vlwiLFwiZ2FrZVwiOlwi5bSWXCIsXCJtYWNoaVwiOlwi6KGX55S6XCIsXCJmdXRhXCI6XCLok4vlj4zkuoxcIixcImtha2lcIjpcIuWeo+afv1wiLFwib25vb25vXCI6XCLlkIRcIixcImthZG9cIjpcIuinkumWgFwiLFwidHN1bm9cIjpcIuinkuWLn1wiLFwia291XCI6XCLmoLzku7Dlvozlj6Plt6Xlhazli77lrZTlip/lt6fluoPnlLLkuqTlhYnlkJHlkI7lpb3msZ/ogIPooYzlnZHlrZ3mipfmlLvmm7Tlirnlubjmi5jogq/kvq/ljprmgZLmtKrnmofntIXojZLpg4rpppnlgJnmoKHogJXoiKrosqLpmY3pq5jlurfmjqfmopfpu4TllonmhYzmuK/noazntZ7poIXmup3pibHmp4vntrHphbXnqL/oiIjooaHpi7zorJvos7zkuZ7npZ7oq4vogJfmgYtcIixcImthcmFcIjpcIuauu+epuuWUkOe1oVwiLFwib2JvXCI6XCLopprmurpcIixcImhlZGFcIjpcIumalFwiLFwidGFzaGlcIjpcIueiulwiLFwiZ2FrdVwiOlwi5a2m5bKz5qW96aGN6aGOXCIsXCJtYW5hXCI6XCLlraZcIixcInRha2VcIjpcIuWys+S4iOeruVwiLFwicmFrdVwiOlwi5qW957Wh6JC96YWqXCIsXCJ0YW5vXCI6XCLmpb3poLxcIixcImhpdGFpXCI6XCLpoY1cIixcImFnb1wiOlwi6aGOXCIsXCJrYWthcmlcIjpcIuaOm+S/glwiLFwia2F0YVwiOlwi5r2f5b2i5Z6L6IKp5aCF5Zu65Zu66Kqe56Gs6Zuj54mH5pa5XCIsXCJrYXRzdVwiOlwi5ous5rS75Zad5riH5Ymy6JGb5ruR6KSQ6L2E5ZCI5Yud5ouFXCIsXCJ3YXJpXCI6XCLlibJcIixcImt1enVcIjpcIuiRm+W0qVwiLFwia290c3VcIjpcIua7kemqqFwiLFwic3ViZVwiOlwi5ruR5YWoXCIsXCJuYW1lXCI6XCLmu5FcIixcImthYnVcIjpcIuagqlwiLFwia2FtYVwiOlwi6Yec6Y6M5qeL56qvXCIsXCJrYW5cIjpcIuW5suWIiueUmOaxl+e8tuWujOiCneWumOWGoOW3u+eci+mZpeS5vuWLmOaCo+iyq+WvkuWWmuWgquaPm+aVouajuuasvumWk+mWkeWLp+Wvm+W5ueaEn+a8ouaFo+euoemWouatk+ebo+e3qeaGvumChOmkqOeSsOewoeims+mfk+iJpumRkeeUsuelnlwiLFwiYXNlXCI6XCLmsZfnhKZcIixcImtpbW9cIjpcIuiCnVwiLFwia2FubXVyaVwiOlwi5YagXCIsXCJtYVwiOlwi44G+44Oe5be76ZaT5puy5Lqk55yf5aKX6aas6LKg6Iie6bq75pGp56Oo6a2U55uuXCIsXCJtYWtpXCI6XCLlt7vniadcIixcIm9jaGlpXCI6XCLpmaVcIixcIm90b3NoaWlcIjpcIumZpVwiLFwid2F6dXJhXCI6XCLmgqPnhalcIixcInRzdXJhbnVcIjpcIuiyq1wiLFwic2FtdVwiOlwi5a+SXCIsXCJ0YVwiOlwi44Gf44K/5aCq55+v5bu65omL6aOf5Z6C54KK57W257W26Laz5LuW5aSa5rGw5aSq6ICQ5pat55Sw56uL56uLXCIsXCJrZW5cIjpcIumWk+eKrOS7tuimi+WIuOiCqeW7uueglOecjOWAueWFvOWJo+aLs+i7kuWBpemZuuWcj+WgheaknOWrjOeMrue1uemBo+aoqeaGsuizouismemNtee5remhlemok+aHuFwiLFwiYWlkYVwiOlwi6ZaTXCIsXCJzdXN1XCI6XCLli6fpgLLolqZcIixcIm1pa2lcIjpcIuW5uVwiLFwic2VraVwiOlwi6Zai5a+C5aSV5pal55+z6LWk5piU5p6Q6Zq75bit6ISK5oOc5oia6LKs6Leh56mN57i+57GNXCIsXCJrYWthXCI6XCLplqLmjrLmirFcIixcInl1cnVcIjpcIue3qeiosVwiLFwieWFrYXRhXCI6XCLppKhcIixcImthbmdhXCI6XCLpkZHogINcIixcImdhblwiOlwi5Li45ZCr5bK45bKp546p55y86aCR6aGU6aGY5YWDXCIsXCJmdWt1XCI6XCLlkKvlkLnkvI/mnI3lia/luYXlvqnnpo/ohbnopIfopoblmbTohqhcIixcImtpc2hpXCI6XCLlsrhcIixcIml3YVwiOlwi5bKpXCIsXCJnZW5cIjpcIuecvOWrjOmok+WFg+W5u+eOhOiogOW8pumZkOWOn+ePvuiIt+a4m+a6kOWOs1wiLFwibWFuYWtvXCI6XCLnnLxcIixcImthb1wiOlwi6aGU6aaZXCIsXCJuZWdhXCI6XCLpoZhcIixcImtpXCI6XCLjgY3jgq3kvIHkvI7ljbHmnLrmsJflspDluIzlv4zmsb3lpYfnpYjlraPntIDou4zml6LoqJjotbfpo6LprLzluLDln7rlr4Topo/kuoDllpzlub7mj67mnJ/mo4vosrTmo4Tmr4Dml5flmajnlb/ovJ3mqZ/pqI7msbrlt7Hlirnpu4TmlqzmtojnlJ/liIfnnYDogbTogZ7mnKjliKlcIixcImt1d2FkYVwiOlwi5LyBXCIsXCJhYnVcIjpcIuWNsVwiLFwidHN1a3VlXCI6XCLmnLpcIixcImlub1wiOlwi56WIXCIsXCJzdWRlXCI6XCLml6JcIixcInNoaXJ1XCI6XCLoqJjmsYFcIixcIm9uaVwiOlwi6ay8XCIsXCJrYWVcIjpcIuW4sOi/lFwiLFwibW90b2lcIjpcIuWfulwiLFwia2FtZVwiOlwi5LqAXCIsXCJ5b3Jva29cIjpcIuWWnFwiLFwiZ29cIjpcIuOBlOOCtOacn+W+oeS6lOS6kuWNiOWRieW+jOWor+aCn+eigeiqnuiqpOitt1wiLFwidGF0dG9cIjpcIuiytFwiLFwidG91dG9cIjpcIuiytFwiLFwiaGF0YVwiOlwi5peX5qmf56uv55WRXCIsXCJ1dHN1d2FcIjpcIuWZqFwiLFwia2FnYXlhXCI6XCLovJ1cIixcImdpXCI6XCLjgY7jgq7mioDlrpzlgb3mrLrnvqnnlpHlhIDmiK/mk6zniqDorbBcIixcIndhemFcIjpcIuaKgOalrVwiLFwiaXRzdXdhXCI6XCLlgb1cIixcIm5pc2VcIjpcIuWBvVwiLFwiYXphbXVcIjpcIuasulwiLFwidXRhZ2FcIjpcIueWkVwiLFwidGF3YW11XCI6XCLmiK9cIixcImtpa3VcIjpcIuiPiuiBnlwiLFwia2ljaGlcIjpcIuWQiVwiLFwia2l0c3VcIjpcIuWQieWWq+ipsFwiLFwidHN1XCI6XCLjgaTjg4ToqbDoqbDlkYrlsLHmtKXlsL3nqY3nqY3nnYDph6PpgJrmvKzmkZjpg73ku5jpgKNcIixcImt5YWt1XCI6XCLljbTlrqLohJpcIixcImt5YVwiOlwi6ISaXCIsXCJhc2hpXCI6XCLohJrotrNcIixcImdpeWFrdVwiOlwi6YCG6JmQXCIsXCJzaGlpdGFcIjpcIuiZkFwiLFwia3l1dVwiOlwi5Lmd5LmF5Y+K5byT5LiY5pen5LyR5ZC45py96Ie85rGC56m25rOj5oCl57Sa57O+5a6u5pWR55CD57Wm5ZeF56quXCIsXCJrb2tvbm9cIjpcIuS5neS5nVwiLFwiaGlzYVwiOlwi5LmFXCIsXCJ5dW1pXCI6XCLlvJNcIixcInVzdVwiOlwi6Ie86JaE6JaEXCIsXCJraXdhXCI6XCLnqbbnqq7mpbXmpbXpmptcIixcIm5ha3VcIjpcIuazo1wiLFwiaXNvZ3VcIjpcIuaApVwiLFwiZ3V1XCI6XCLlrq7lgbbpgYfpmoVcIixcIm1peWFcIjpcIuWurlwiLFwic3VrdXVcIjpcIuaVkVwiLFwidGFtYVwiOlwi55CD546J5by+6ZyKXCIsXCJrYWd1XCI6XCLll4VcIixcImdpeXV1XCI6XCLniZtcIixcInVzaGlcIjpcIueJm+W+jFwiLFwia3lvXCI6XCLljrvlt6jlsYXmi5Lmi6DmjJnomZroqLHot51cIixcImtvYmFcIjpcIuaLklwiLFwiZ3lvXCI6XCLprZrlvqHmvIFcIixcInVvXCI6XCLprZpcIixcInNha2FuYVwiOlwi6a2aXCIsXCJyeW91XCI6XCLmvIHkuobkuKHoia/mlpnmtrznjJ/pmbXph4/lg5rpoJjlr67nmYLnnq3ns6fpnIpcIixcImt5b3VcIjpcIuWHtuWFseWPq+eLguS6rOS6q+S+m+WNlOazgeWzoeaMn+eLreaBkOaBreiDuOiEheW8t+aVmemDt+Wig+api+efr+mPoeertumfv+mpmuWFhOe1jOmmmeiIiFwiLFwidG9tb1wiOlwi5YWx5L6b5Y+LXCIsXCJzYWtlXCI6XCLlj6vphZJcIixcImt1cnVcIjpcIueLguiLpuiLpue5sFwiLFwia2VpXCI6XCLkuqzlooPnq7blhYTliJHlvaLns7vlvoTojI7kv4LlnovlpZHoqIjmgbXllZPmjrLmuJPntYzom43mlazmma/ou73lgr7mkLrntpnoqaPmhbbmhqznqL3mhqnorabpto9cIixcInNvbmFcIjpcIuS+m+WCmVwiLFwiaGFzYVwiOlwi5oyfXCIsXCJzZW1haVwiOlwi54utXCIsXCJzZWJhXCI6XCLni61cIixcInV5YXV5YVwiOlwi5oGtXCIsXCJtdW5lXCI6XCLog7jml6jmo59cIixcIm11bmFcIjpcIuiDuOajn1wiLFwib2JpeWFcIjpcIuiEhVwiLFwib2RvXCI6XCLohIXouo3ouIpcIixcImdvdVwiOlwi5by36YO35qWt5Y+35ZCI5ou35Ymb5YKy6LGqXCIsXCJ0c3V5b1wiOlwi5by3XCIsXCJzaGlcIjpcIuOBl+OCt+W8t+e1nuWjq+WtkOaUr+atouawj+S7leWPsuWPuOWbm+W4guefouaXqOatu+atu+ezuOiHs+S8uuW/l+engeS9v+WIuuWni+WnieaeneelieiCouWnv+aAneaMh+aWveW4q+aBo+e0meiEguimlue0q+ipnuatr+WXo+ippuipqeizh+mjvOiqjOmbjOaRr+iznOirruekuuasoeiHquWNoOafk+efpee3oOaVt+mWiVwiLFwib3NoaVwiOlwi5pWZXCIsXCJzYWthaVwiOlwi5aKDXCIsXCJoYXNoaVwiOlwi5qmL6LWw56uv5664XCIsXCJrYWdhbWlcIjpcIumPoVwiLFwia2lzb1wiOlwi56u2XCIsXCJzZVwiOlwi44Gb44K756u25pS75pa954Cs5LiW6LKs6IOM6L+rXCIsXCJoaWJpXCI6XCLpn79cIixcIm9kb3JvXCI6XCLpqZpcIixcImd5b3VcIjpcIuS7sOaagealreWHneW9ouihjFwiLFwiYW9cIjpcIuS7sOmdkumdklwiLFwib29cIjpcIuS7sOWkmuWkp+Wkp+imhlwiLFwiYWthdHN1a2lcIjpcIuaagVwiLFwia3lva3VcIjpcIuabsuWxgOaltVwiLFwiZ29rdVwiOlwi5qW1542EXCIsXCJneW9rdVwiOlwi546JXCIsXCJraW5cIjpcIuW3vuaWpOWdh+i/kemHkeiPjOWLpOeQtOeti+WDheemgee3iumMpuisueiln+S7ilwiLFwiY2hpa2FcIjpcIui/kVwiLFwia29uXCI6XCLph5Hlu7rnjK7ku4rlm7DmmIbmgajmoLnlqZrmt7fnl5XntLrprYLlor7mh4dcIixcImthbmVcIjpcIumHkemQmFwiLFwia2FuYVwiOlwi6YeR5aWPXCIsXCJnb25cIjpcIuWLpOaoqeiogOWOs1wiLFwidHN1dG9cIjpcIuWLpOWKquWLmVwiLFwic3VqaVwiOlwi562LXCIsXCJ3YXp1XCI6XCLlg4VcIixcIm5pc2hpa2lcIjpcIumMplwiLFwidHN1dHN1c2hpXCI6XCLorLnmhY5cIixcImVyaVwiOlwi6KWfXCIsXCJnaW5cIjpcIuWQn+mKgFwiLFwibmlnYVwiOlwi6IumXCIsXCJrYWtlcnVcIjpcIumnhlwiLFwia2FydVwiOlwi6aeG6Lu954upXCIsXCJndVwiOlwi44GQ44Kw5YW35oOn5oSaXCIsXCJrdXVcIjpcIuepulwiLFwic29yYVwiOlwi56m6XCIsXCJha2VydVwiOlwi56m6XCIsXCJzdW1pXCI6XCLpmoXpgJ/ngq3loqhcIixcImt1c2hpXCI6XCLkuLJcIixcImhvcnVcIjpcIuaOmFwiLFwia3VtYVwiOlwi54aKXCIsXCJrdW5cIjpcIuWQm+iok+WLsuiWq1wiLFwia2ltaVwiOlwi5ZCbXCIsXCJrYW9ydVwiOlwi6JarXCIsXCJndW5cIjpcIui7jemDoee+pFwiLFwibXVcIjpcIuOCgOODoOe+pOWQkeWQkeiSuOatpuisgOefm+WLmeeEoeWkoumcp+WFrVwiLFwibXVyYVwiOlwi576k5p2RXCIsXCJhbmlcIjpcIuWFhFwiLFwia2F0YWNoaVwiOlwi5b2iXCIsXCJrdWtpXCI6XCLojI5cIixcImtha2FydVwiOlwi5L+CXCIsXCJjaGlnaXJ1XCI6XCLlpZFcIixcImhha2FcIjpcIuioiOWbs+a4rOWik+isgOmHj1wiLFwibWVndVwiOlwi5oG15behXCIsXCJoZVwiOlwi44G457WM5ribXCIsXCJob3RhcnVcIjpcIuibjVwiLFwidXlhbWFcIjpcIuaVrFwiLFwia2F0YW11a3VcIjpcIuWCvlwiLFwia2F0YW11a2VydVwiOlwi5YK+XCIsXCJ0YXp1c2FcIjpcIuaQulwiLFwidHN1Z3VcIjpcIue2measoeaOpVwiLFwibW91XCI6XCLoqaPoqK3kuqHmnJvmr5vlpoTnm7LogJfnjJvntrJcIixcImlrb1wiOlwi5oapXCIsXCJuaXdhdG9yaVwiOlwi6baPXCIsXCJnZWlcIjpcIuiKuOi/jumvqFwiLFwibXVrYVwiOlwi6L+OXCIsXCJrdWppcmFcIjpcIumvqFwiLFwiZ2VraVwiOlwi6ZqZ5YqH5pKD5r+AXCIsXCJzdWtpXCI6XCLpmplcIixcImhhZ2VcIjpcIua/gOWKsVwiLFwia2V0YVwiOlwi5qGBXCIsXCJrZXRzdVwiOlwi5qyg56m06KGA5rG657WQ5YKR5r2UXCIsXCJhbmFcIjpcIueptFwiLFwiY2hpXCI6XCLjgaHjg4HooYDmlaPmlaPmsrvos6rljYPlnLDmsaDnn6XlgKTmgaXoh7TpgYXnl7TnqJrnva7nt7vkubNcIixcIm11c3VcIjpcIue1kFwiLFwieXVcIjpcIuOChuODpue1kOmAnea5r+eUseayueWWqeaEieirrei8uOeZkumBiuaPuuaPuuaPuuaPulwiLFwiaXNhZ2l5b1wiOlwi5r2UXCIsXCJnZXRzdVwiOlwi5pyIXCIsXCJnYXRzdVwiOlwi5pyI5ZCIXCIsXCJ0c3VraVwiOlwi5pyIXCIsXCJpbnVcIjpcIueKrFwiLFwibWlcIjpcIuOBv+ODn+imi+S4ieWun+i6q+iouuecieacquWRs+mthVwiLFwidG9ndVwiOlwi56CUXCIsXCJ0c3VydWdpXCI6XCLliaNcIixcImtvYnVzaGlcIjpcIuaLs1wiLFwibm9raVwiOlwi6LuSXCIsXCJzdWtvXCI6XCLlgaXlsJFcIixcImtld2FcIjpcIumZulwiLFwia2lyYVwiOlwi5auMXCIsXCJpeWFcIjpcIuWrjOWNkVwiLFwia2ludVwiOlwi57W5XCIsXCJ0c3VrYVwiOlwi6YGj5LuV5L2/5aGa55ay5o2VXCIsXCJrYXNoaWtvXCI6XCLos6JcIixcImthZ2lcIjpcIumNtemZkFwiLFwibWF5dVwiOlwi57mt55yJXCIsXCJtYWJvcm9zaGlcIjpcIuW5u1wiLFwiaXVcIjpcIuiogFwiLFwidHN1cnVcIjpcIuW8pum2tFwiLFwiaGFyYVwiOlwi5Y6f6IW55omVXCIsXCJhcmF3YVwiOlwi54++6JGX6KGoXCIsXCJtaW5hbW90b1wiOlwi5rqQXCIsXCJvZ29zb1wiOlwi5Y6zXCIsXCJraWJpXCI6XCLljrNcIixcIm9ub3JlXCI6XCLlt7FcIixcImZ1cnVcIjpcIuWPpOaMr+WlrlwiLFwibWF0YVwiOlwi6IKh5Y+IXCIsXCJ0b3JhXCI6XCLomY7mjYlcIixcInl1ZVwiOlwi5pWFXCIsXCJtaXp1dW1pXCI6XCLmuZZcIixcInlhdG91XCI6XCLpm4dcIixcImhva29cIjpcIuiqh+efm1wiLFwidHN1enVtaVwiOlwi6byTXCIsXCJrYWVyaVwiOlwi6aGn55yBXCIsXCJpdHN1dHN1XCI6XCLkupRcIixcInRhZ2FcIjpcIuS6klwiLFwibm9jaGlcIjpcIuW+jFwiLFwiYXRvXCI6XCLlvoznl5Xot6FcIixcInNhdG9cIjpcIuaCn+irremHjFwiLFwia3VjaGlcIjpcIuWPo1wiLFwib295YWtlXCI6XCLlhaxcIixcInRha3VtaVwiOlwi5benXCIsXCJoaXJvaVwiOlwi5bqDXCIsXCJoaXJvbWFydVwiOlwi5bqDXCIsXCJoaXJvZ2FydVwiOlwi5bqDXCIsXCJtYWppXCI6XCLkuqRcIixcImhpa2FydVwiOlwi5YWJXCIsXCJoaWthcmlcIjpcIuWFiVwiLFwia29ub1wiOlwi5aW9XCIsXCJ5dWt1XCI6XCLooYxcIixcIm9rb25hXCI6XCLooYxcIixcInNhcmFcIjpcIuabtOeav1wiLFwiZnVcIjpcIuOBteODleabtOmZjeaLreauluinpuaMr+Wil+i4j+S4jeWkq+eItuS7mOW4g+aJtuW6nOaAlumZhOiog+iyoOi1tOa1ruWppuespuWvjOaZruiFkOaVt+iGmuizpuitnOmYnOmiqOS8j+atqeiAgVwiLFwic2Fpd2FcIjpcIuW5uFwiLFwic2FjaGlcIjpcIuW5uFwiLFwic2hpYXdhXCI6XCLlubhcIixcImJlbmlcIjpcIue0hVwiLFwia3VyZW5haVwiOlwi57SFXCIsXCJhcmFpXCI6XCLojZJcIixcImFyZXJ1XCI6XCLojZJcIixcImFyYXN1XCI6XCLojZJcIixcInNvdXJvdVwiOlwi5YCZXCIsXCJ0YWdheWFcIjpcIuiAlVwiLFwibWl0c3VcIjpcIuiyouS4ieWvhuicnFwiLFwidGFrYVwiOlwi6auY6auYXCIsXCJoaWthXCI6XCLmjqdcIixcIm5vZG9cIjpcIuWWiVwiLFwiYXdhdGVydVwiOlwi5oWMXCIsXCJtaW5hdG9cIjpcIua4r1wiLFwic2hpYm9cIjpcIue1nuaQvlwiLFwibWl6b1wiOlwi5rqdXCIsXCJ0c3VuYVwiOlwi57axXCIsXCJva29cIjpcIuiIiOaAklwiLFwiaGFnYW5lXCI6XCLpi7xcIixcImtva3VcIjpcIuWFi+WRiuiwt+WIu+Wbvem7kuepgOmFt+efs1wiLFwidGFuaVwiOlwi6LC3XCIsXCJraXphXCI6XCLliLvlhYZcIixcImt1bmlcIjpcIuWbvVwiLFwia3Vyb1wiOlwi6buS6buSXCIsXCJob25lXCI6XCLpqqhcIixcImtvbWFcIjpcIumnkuWbsOe0sFwiLFwia29yb1wiOlwi6aCD5q666LuiXCIsXCJpbWFcIjpcIuS7ilwiLFwibWFqaXJ1XCI6XCLmt7dcIixcInRhbWFzaGlpXCI6XCLprYJcIixcIm5lbmdvXCI6XCLmh4dcIixcImhpZGFyaVwiOlwi5bemXCIsXCJzaGFcIjpcIuegguWGmeekvui7iuiIjuiAheWwhOaNqOi1puaWnOeFrumBruisnVwiLFwic3VuYVwiOlwi56CCXCIsXCJzb3Nvbm9rYVwiOlwi5ZSGXCIsXCJrdXNhcmlcIjpcIumOllwiLFwiemFcIjpcIuOBluOCtuW6p+aMq1wiLFwic3V3YVwiOlwi5bqnXCIsXCJzYWlcIjpcIuaJjeWGjeeBveWmu+mHh+egleWusOagveW9qeaOoea4iOelreaWjue0sOiPnOacgOijgeWCteWCrOWhnuats+i8iemam+WfvOiyoeauuuilv+WIh1wiLFwiZnV0YXRhXCI6XCLlho1cIixcIndhemF3YVwiOlwi54G9XCIsXCJ0c3VtYVwiOlwi5aa754iqXCIsXCJpcm9kb1wiOlwi5b2pXCIsXCJtYXRzdVwiOlwi56Wt56Wt5p2+5b6F5pyr5oq5XCIsXCJob3NvXCI6XCLntLBcIixcIm1vdHRvXCI6XCLmnIBcIixcInRhdHN1XCI6XCLoo4HpgZTnq5xcIixcInNhYmFcIjpcIuijgVwiLFwibW95b29cIjpcIuWCrFwiLFwic29rdVwiOlwi5aGe5Y2z5p2f6Laz5L+D5YmH5oGv5o2J6YCf5YG05risXCIsXCJmdXNhXCI6XCLloZ7miL9cIixcInNlaVwiOlwi5q2z5oOF5LqV5LiW5q2j55Sf5oiQ6KW/5aOw5Yi25aeT5b6B5oCn6Z2S5paJ5pS/5pif54my55yB5YeE6YCd5riF55ub5am/5pm05Yui6IGW6Kqg57K+6KO96KqT6Z2Z6KuL5pW06YaS6IOMXCIsXCJ6YWlcIjpcIuWcqOadkOWJpOiyoee9qlwiLFwidHN1bWlcIjpcIue9qlwiLFwic2FraVwiOlwi5bSO5YWIXCIsXCJzYWt1XCI6XCLkvZzliYrmmKjmn7XntKLnrZbphaLmkL7pjK/lkrLlhoroo4JcIixcInRzdWt1XCI6XCLkvZzlibXpgKDnqoFcIixcImtlenVcIjpcIuWJilwiLFwic2F0c3VcIjpcIuWGiuacreWIt+WIueaLtuauuuWvn+aSruaTpuaXqVwiLFwiZnVkYVwiOlwi5pytXCIsXCJzdXJ1XCI6XCLliLdcIixcInNldHN1XCI6XCLliLnmrrrliIfmipjmi5nnqoPmjqXoqK3pm6rmkYLnr4DoqqxcIixcInphdHN1XCI6XCLpm5FcIixcInpvdVwiOlwi6ZuR6LGh6YCg5YOP5aKX5oaO6JS16LSI6IeTXCIsXCJzYW5cIjpcIuS4ieWxseWPguahn+ialeaDqOeUo+WCmOaVo+eul+mFuOizm1wiLFwibWl0dHN1XCI6XCLkuIlcIixcInlhbWFcIjpcIuWxsVwiLFwibWFpXCI6XCLlj4LoiJ7nsbPmr47lprnmnprmmKfln4tcIixcImthaWtvXCI6XCLompVcIixcInphblwiOlwi5oOo5q6L5pas5pqrXCIsXCJtaWppXCI6XCLmg6hcIixcInVtdVwiOlwi55SjXCIsXCJ1YnVcIjpcIueUo1wiLFwia2FzYVwiOlwi5YKY6YeNXCIsXCJzdWlcIjpcIumFuOWHuuawtOWQueWegueCiuW4peeyi+ihsOaOqOmFlOmBguedoeepglwiLFwibm9rb1wiOlwi5q6LXCIsXCJzYXNhXCI6XCLmlK9cIixcInVqaVwiOlwi5rCPXCIsXCJqaVwiOlwi44GY44K45LuV56S65a2X5a+65qyh6ICz6Ieq5Ly85YWQ5LqL5L6N5rK75oyB5pmC5ruL5oWI6L6e56OB6aSM55K96Zmk5Zyw6LevXCIsXCJ5b3RzdVwiOlwi5ZubXCIsXCJ5b3R0c3VcIjpcIuWbm1wiLFwieW9uXCI6XCLlm5tcIixcIml0b1wiOlwi57O4XCIsXCJpdGFcIjpcIuiHs+WCt+iHtOeXm+aCvOadv1wiLFwidWthZ2FcIjpcIuS8ulwiLFwia29rb3JvemFcIjpcIuW/l1wiLFwia29rb3JvemFzaGlcIjpcIuW/l1wiLFwid2F0YWt1c2hpXCI6XCLnp4FcIixcIndhdGFzaGlcIjpcIuengVwiLFwic2FzdVwiOlwi5Yi6XCIsXCJoYWppXCI6XCLlp4vliJ3mgaVcIixcImFuZVwiOlwi5aeJXCIsXCJlZGFcIjpcIuaenVwiLFwic3VnYXRhXCI6XCLlp79cIixcIm9tb1wiOlwi5oCd5Li76YeN6Z2iXCIsXCJ5dWJpXCI6XCLmjIdcIixcImhvZG9rb1wiOlwi5pa9XCIsXCJrYW1pXCI6XCLntJnkuIrnpZ7pq6pcIixcImFidXJhXCI6XCLohILmsrlcIixcIm11cmFzYWtpXCI6XCLntKtcIixcImtva29yb1wiOlwi6Kmm5b+DXCIsXCJ0YW1lc3VcIjpcIuipplwiLFwia2F1XCI6XCLpo7zosrdcIixcIm1lc3VcIjpcIumbjOWPrFwiLFwidGFtYXdhcnVcIjpcIuiznFwiLFwiaGFrYXJ1XCI6XCLoq65cIixcInNoaW1lc3VcIjpcIuekulwiLFwiYXphXCI6XCLlrZfprq5cIixcInRlcmFcIjpcIuWvulwiLFwidHN1Z2lcIjpcIuasoVwiLFwibWltaVwiOlwi6ICzXCIsXCJtaXp1a2FyYVwiOlwi6IeqXCIsXCJuaXJ1XCI6XCLkvLznha5cIixcInp1XCI6XCLjgZrjgrrkuovlm7PosYbpoK1cIixcInNhbXVyYWlcIjpcIuS+jVwiLFwib3NhXCI6XCLmsrvlj47kv67ntI3mipFcIixcIm5hb1wiOlwi5rK755u0XCIsXCJtb3RzdVwiOlwi5oyB54mpXCIsXCJ0b2tpXCI6XCLmmYJcIixcIml0c3VrdXNoaVwiOlwi5oWIXCIsXCJlc2FcIjpcIumkjFwiLFwic2hpa2FcIjpcIum5v1wiLFwic2hpa2lcIjpcIuW8j+itmOiJsue5lFwiLFwiamlrdVwiOlwi6Lu4XCIsXCJzaGljaGlcIjpcIuS4g+izqlwiLFwibmFuYVwiOlwi5LiD5pacXCIsXCJuYW5hdHN1XCI6XCLkuINcIixcIm5hbm9cIjpcIuS4g1wiLFwic2hpdHN1XCI6XCLlj7HlpLHlrqTnlr7ln7fmub/lq4nmvIbos6pcIixcInNoaWthcnVcIjpcIuWPsVwiLFwidXNoaW5hXCI6XCLlpLFcIixcIm11cm9cIjpcIuWupFwiLFwic2h1dVwiOlwi5Z+35Y+O5Zua5bee6Iif56eA5ZGo5a6X5ou+56eL6Iet5L+u6KKW57WC576e57+S6YCx5bCx6KGG6ZuG5oSB6YWs6Yac6Lm06KWy56WdXCIsXCJzaGltZVwiOlwi5rm/XCIsXCJ1cnVzaGlcIjpcIua8hlwiLFwiaml0c3VcIjpcIuWun+WNgeaXpVwiLFwibWlub1wiOlwi5a6fXCIsXCJzaGliYVwiOlwi6Iqd57ibXCIsXCJ5YXNoaXJvXCI6XCLnpL5cIixcImt1cnVtYVwiOlwi6LuKXCIsXCJtb25vXCI6XCLogIXnialcIixcImlydVwiOlwi5bCE54WO6Yuz5YWlXCIsXCJzYWVnaVwiOlwi6YGuXCIsXCJqYVwiOlwi6YKq6JuHXCIsXCJkYVwiOlwi44Gg44OA6JuH5Ye65omT5aal5ZS+5aCV5oOw6aeE5oqxXCIsXCJoZWJpXCI6XCLom4dcIixcInNoYWt1XCI6XCLlsLrlgJ/phYzph4jniLXnn7PotaTmmJRcIixcImpha3VcIjpcIuiLpeW8seWvguedgFwiLFwibnlha3VcIjpcIuiLpVwiLFwid2FrYVwiOlwi6Iul5YilXCIsXCJtb1wiOlwi44KC44Oi6Iul55ub5Zaq6Je754eD6IyC5qih5ryPXCIsXCJ5b3dhXCI6XCLlvLHlvLFcIixcInNhYmlcIjpcIuWvguWvglwiLFwic2h1XCI6XCLmiYvkuLvlrojmnLHlj5bni6npppbmrornj6DphZLohavnqK7otqPkv67ooYZcIixcInRlXCI6XCLjgabjg4bmiYvnhafnhadcIixcIm51c2hpXCI6XCLkuLtcIixcIm1hbW9ydVwiOlwi5a6IXCIsXCJtb3JpXCI6XCLlrojmo65cIixcInRvcnVcIjpcIuWPllwiLFwia3ViaVwiOlwi6aaWXCIsXCJoYXJlcnVcIjpcIuiFq1wiLFwiaGFyYXN1XCI6XCLohatcIixcInRhbmVcIjpcIueorlwiLFwib21vbXVraVwiOlwi6LajXCIsXCJqdVwiOlwi5a+/5Y+X5ZGq5o6I6ZyA5YSS5qi55bCx5b6TXCIsXCJrb3RvYnVraVwiOlwi5a+/XCIsXCJ1a2VydVwiOlwi5Y+XXCIsXCJ1a2FydVwiOlwi5Y+XXCIsXCJub3JvdVwiOlwi5ZGqXCIsXCJzYXp1XCI6XCLmjohcIixcImZ1bmVcIjpcIuiIn+iIuVwiLFwiZnVuYVwiOlwi6Iif6Ii5XCIsXCJoaWlcIjpcIuengFwiLFwibWF3YXJpXCI6XCLlkahcIixcInNvdVwiOlwi5a6X5Y+M5aOu5pep5LqJ6LWw5aWP55u46I2Y6I2J6YCB5YCJ5o2c5oy/5qGR5o6D5pu55pu95bej54i956qT5Ym15Zaq55ep6JGs6KOF5YOn5oOz5bGk57eP6YGt5qe96Liq5pON54el6Zyc6aiS6Je76LSIXCIsXCJqdXVcIjpcIuaLvuWNgeaxgeWFheS9j+aflOmHjeW+k+a4i+mKg+eNo+e4puS4rVwiLFwiaGlyb1wiOlwi5ou+XCIsXCJha2lcIjpcIueni1wiLFwia3VzYVwiOlwi6Iet6I2JXCIsXCJuaW9cIjpcIuiHreWMglwiLFwic29kZVwiOlwi6KKWXCIsXCJvd2FcIjpcIue1glwiLFwibmFyYVwiOlwi57+S5Lim5YCjXCIsXCJ0c3VrZVwiOlwi5bCxXCIsXCJ0c3Vkb1wiOlwi6ZuGXCIsXCJ1cmVcIjpcIuaEgeaGglwiLFwibWluaWt1XCI6XCLphpxcIixcIm55dXVcIjpcIuaflOWFpeS5s1wiLFwieWF3YXJhXCI6XCLmn5RcIixcImNob3VcIjpcIumHjeS4geW8lOW6geWFhueUuumVt+aMkeW4s+W8teW9q+ecuumHo+mggumzpeacneiyvOi2heiFuOi3s+W+tOWYsua9rua+hOiqv+iBtOaHslwiLFwic2hvdVwiOlwi5b6T5bCP5Y2H5bCR5Y+s5Yyg5bqK5oqE6IKW5bCa5oub5om/5piH5p2+5rK85pit5a615bCG5raI55eH56Wl56ew56yR5ZSx5ZWG5riJ56ug57S56Kif5Yud5o6M5pm254S854Sm56Gd57Kn6KmU6Ki86LGh5YK35aWo54Wn6Kmz5b2w6Zqc5oan6KGd6LOe5YSf56SB6ZCY5LiK5LqV5q2j55Sf5aOw5aeT5oCn6Z2S5pS/5pif55yB5riF57K+55u46KOFXCIsXCJzaGl0YWdhXCI6XCLlvpPlvpNcIixcInNoaWJ1XCI6XCLmuItcIixcImtlbW9ub1wiOlwi542jXCIsXCJ0YXRlXCI6XCLnuKbnm75cIixcInNodWt1XCI6XCLlj5TnpZ3lrr/mt5HnspvnuK5cIixcIml3YXVcIjpcIuelnVwiLFwieWFkb1wiOlwi5a6/XCIsXCJjaGlqaVwiOlwi57iuXCIsXCJqdWt1XCI6XCLlob7nhrFcIixcInNodXRzdVwiOlwi5Ye6XCIsXCJkZVwiOlwi44Gn44OH5Ye65byfXCIsXCJqdXRzdVwiOlwi6L+w6KGTXCIsXCJzaHVuXCI6XCLkv4rmmKXnnqzml6xcIixcImhhcnVcIjpcIuaYpVwiLFwibWF0YXRhXCI6XCLnnqxcIixcImp1blwiOlwi5pes5beh55u+5YeG5q6J57SU5b6q6aCG5rqW5r2k6YG1XCIsXCJ1cnVvXCI6XCLmvaRcIixcInVydVwiOlwi5r2kXCIsXCJzaG9cIjpcIuWHpuWIneaJgOabuOW6tuaakee9sue3kuiruFwiLFwiaGF0c3VcIjpcIuWInemJoueZuumrquazlVwiLFwidWlcIjpcIuWInVwiLFwidG9rb3JvXCI6XCLmiYBcIixcImNob1wiOlwi57eS6JGX6LKvXCIsXCJqb1wiOlwi5aWz5aaC5Yqp5bqP5Y+Z5b6Q6ZmkXCIsXCJueW9cIjpcIuWls+WmglwiLFwibnlvdVwiOlwi5aWz5bC/XCIsXCJvbm5hXCI6XCLlpbNcIixcInRhc3VcIjpcIuWKqVwiLFwic3VrZVwiOlwi5YqpXCIsXCJub3pva3VcIjpcIumZpFwiLFwiY2hpaXNhXCI6XCLlsI9cIixcIm1hc3VcIjpcIuWNh1wiLFwic3VrdW5hXCI6XCLlsJFcIixcInRva29cIjpcIuW6iuW4uFwiLFwieXVrYVwiOlwi5bqKXCIsXCJtYW5la3VcIjpcIuaLm1wiLFwidWtldGFtYXdhXCI6XCLmib9cIixcIm5vYm9cIjpcIuaYh+S4iueZu1wiLFwibnVtYVwiOlwi5rK8XCIsXCJ5b2lcIjpcIuWutVwiLFwia2VzdVwiOlwi5raIXCIsXCJ3YXJhXCI6XCLnrJFcIixcInRvbmFcIjpcIuWUsemao1wiLFwiYWtpbmFcIjpcIuWVhlwiLFwibWFzYVwiOlwi5Yud5q2jXCIsXCJrb2dlcnVcIjpcIueEplwiLFwia29nYXN1XCI6XCLnhKZcIixcIm1pa290b25vcmlcIjpcIuiplFwiLFwia2l6dVwiOlwi5YK356+JXCIsXCJ0ZXJ1XCI6XCLnhadcIixcInNhd2FydVwiOlwi6ZqcXCIsXCJha29nYVwiOlwi5oanXCIsXCJ0c3VndW5hXCI6XCLlhJ9cIixcImpvdVwiOlwi5LiK5LiI5YaX5p2h54q25LmX5Z+O5rWE5Ymw5bi45oOF5aC055Wz6JK457iE5aOM5ayi6Yyg6K2y6Ya45oiQ55ub6Z2Z5a6aXCIsXCJ1ZVwiOlwi5LiKXCIsXCJ1d2FcIjpcIuS4ilwiLFwiYWdlcnVcIjpcIuS4ilwiLFwic2hpcm9cIjpcIuWfjuS7o+eZvVwiLFwidHN1bmVcIjpcIuW4uFwiLFwibmFzYVwiOlwi5oOFXCIsXCJ0YXRhXCI6XCLnlbNcIixcInRhdGFtaVwiOlwi55WzXCIsXCJuYXdhXCI6XCLnuIToi5dcIixcInl1enVcIjpcIuitslwiLFwia2Ftb1wiOlwi6Ya4XCIsXCJzaG9rdVwiOlwi6Imy5out6aOf5qSN5q6W6aO+6Kem5Zix57mU6IG3XCIsXCJpcm9cIjpcIuiJslwiLFwibnVndVwiOlwi5outXCIsXCJqaWtpXCI6XCLpo5/nm7RcIixcImpva3VcIjpcIui+sVwiLFwiaGF6dWthc2hpXCI6XCLovrFcIixcInNoaXJpXCI6XCLlsLtcIixcInNoaW5cIjpcIuW/g+eUs+S8uOiKr+iHo+i6q+i+m+S+teS/oea0peelnuWUh+WooOaMr+a1uOecn+mHnea3see0s+mAsuajruiouuWvneaFjuaWsOWvqemch+iWquimquiri1wiLFwibW91c3VcIjpcIueUs1wiLFwiamluXCI6XCLoh6PnpZ7kurrliIPku4HlsL3ov4XnlJrpmaPlsIvohY5cIixcImthcmFpXCI6XCLovptcIixcImt1Y2hpYmlydVwiOlwi5ZSHXCIsXCJmdXJ1dVwiOlwi5oyv6ZyHXCIsXCJoaXRhXCI6XCLmtbhcIixcImhhcmlcIjpcIumHnVwiLFwiZnVrYVwiOlwi5rexXCIsXCJhdGFyYXNoaWlcIjpcIuaWsFwiLFwibmlpXCI6XCLmlrBcIixcInRha2lnaVwiOlwi6JaqXCIsXCJveWFcIjpcIuimqlwiLFwibmluXCI6XCLkurrku7vlporlv43oqo1cIixcImhhbmFoYVwiOlwi55SaXCIsXCJ0YXp1XCI6XCLlsIvoqKpcIixcIm1penVcIjpcIuawtFwiLFwib3Rvcm9cIjpcIuihsFwiLFwib3N1XCI6XCLmjqjpm4RcIixcInlvdVwiOlwi6YWU5YWr5bm855So576K5aaW5rSL6KaB5a655bq45o+a5o+66JGJ6Zm95rq26IWw5qeY55iN6LiK56qv6aSK5pOB6Kyh5pucXCIsXCJ6dWlcIjpcIumaj+mrhFwiLFwic3V1XCI6XCLmnqLltIfmlbBcIixcImthenVcIjpcIuaVsFwiLFwia2F6b1wiOlwi5pWwXCIsXCJzdWVydVwiOlwi5o2uXCIsXCJzdWdpXCI6XCLmnYlcIixcInN1c29cIjpcIuijvlwiLFwic3VuXCI6XCLlr7hcIixcInplXCI6XCLjgZzjgrzmmK9cIixcInRhZGFcIjpcIuato+S9hlwiLFwibmFtYVwiOlwi55Sf5oCgXCIsXCJuaXNoaVwiOlwi6KW/XCIsXCJrb2VcIjpcIuWjsOiCpVwiLFwibWF0c3VyaWdvdG9cIjpcIuaUv1wiLFwiaG9zaGlcIjpcIuaYn1wiLFwiaGFidVwiOlwi55yBXCIsXCJraXlvaVwiOlwi5riFXCIsXCJtdWtvXCI6XCLlqb9cIixcImlraW9cIjpcIuWLolwiLFwibWFrb3RvXCI6XCLoqqBcIixcImNoaWthdVwiOlwi6KqTXCIsXCJzaGl6dVwiOlwi6Z2Z5rKI6Y6uXCIsXCJ0b3Rvbm9cIjpcIuaVtOiqv1wiLFwiemVpXCI6XCLnqI7oqqxcIixcImlzaGlcIjpcIuefs1wiLFwiYWthXCI6XCLotaTmmI5cIixcImFrYXJhbXVcIjpcIui1pFwiLFwibXVrYXNoaVwiOlwi5piUXCIsXCJvcmlcIjpcIuaKmFwiLFwidHN1dGFuYVwiOlwi5ouZXCIsXCJ5dWtpXCI6XCLpm6pcIixcInNlY2hpXCI6XCLnr4BcIixcImZ1c2hpXCI6XCLnr4BcIixcInRva3VcIjpcIuiqrOWMv+eJueW+l+edo+W+s+evpOiqrVwiLFwiemV0c3VcIjpcIuiIjOe1tlwiLFwic2VuXCI6XCLljYPlt53ku5nljaDlhYjlrqPlsILms4nmtYXmtJfmn5PmiYfmoJPml4voiLnmiKbnhY7nvqjohbroqa7ot7Xnrovpiq3mvZznt5rpgbfpgbjolqbnuYrprq5cIixcInVyYW5hXCI6XCLljaBcIixcIm1vcHBhXCI6XCLlsIJcIixcIml6dW1pXCI6XCLms4lcIixcImFzYWlcIjpcIua1hVwiLFwiYXJhXCI6XCLmtJfnspdcIixcIm91Z2lcIjpcIuaJh1wiLFwiaWt1c2FcIjpcIuaIplwiLFwidGF0YWthXCI6XCLmiKbpl5hcIixcInVyYXlhXCI6XCLnvqhcIixcInVyYXlhbWFcIjpcIue+qFwiLFwiemVuaVwiOlwi6YqtXCIsXCJoaXNvXCI6XCLmvZxcIixcIm1vZ3VcIjpcIua9nFwiLFwiemVuXCI6XCLlhajliY3lloTnhLbnpoXmvLjohrPnuZVcIixcIm1hdHRhXCI6XCLlhahcIixcIm1hZVwiOlwi5YmNXCIsXCJuZW5cIjpcIueEtuW5tOW/teaNu+eymOeHg1wiLFwidHN1a3Vyb1wiOlwi57mVXCIsXCJuZXJhXCI6XCLni5lcIixcImhhYmFcIjpcIumYu+W5hVwiLFwia3VtaVwiOlwi57WEXCIsXCJ1dG9cIjpcIueWjueWjlwiLFwidXR0YVwiOlwi6Ki0XCIsXCJzYWthbm9ib1wiOlwi6YGhXCIsXCJpc2hpenVlXCI6XCLnpI5cIixcImhheWFcIjpcIuaXqVwiLFwiYXJhc29cIjpcIuS6iVwiLFwic2FnYVwiOlwi5o2c5o6iXCIsXCJ6b1wiOlwi44Ge44K+5pu9XCIsXCJzYXdhXCI6XCLniL3pqJLmsqJcIixcIm1hZG9cIjpcIueqk+aDkVwiLFwiaG91bXVcIjpcIuiRrFwiLFwieW9zb29cIjpcIuijhVwiLFwiYXVcIjpcIumBrVwiLFwibWlzYW9cIjpcIuaTjVwiLFwiYXlhdHN1XCI6XCLmk41cIixcIm5pa3VcIjpcIuaGjuiCiVwiLFwidGFiYVwiOlwi5p2fXCIsXCJ1bmFnYVwiOlwi5L+DXCIsXCJoYXlhaVwiOlwi6YCfXCIsXCJnYXdhXCI6XCLlgbRcIixcInpva3VcIjpcIuS/l+aXj+Wxnuiziue2mlwiLFwidHN1enVcIjpcIue2mue2mlwiLFwic290c3VcIjpcIuWNkueOh1wiLFwicml0c3VcIjpcIueOh+W+i+aFhFwiLFwiaGlraVwiOlwi546H5Yy5XCIsXCJzb25cIjpcIuWtmOadkeWtq+WwiuaQjemBnFwiLFwiem9uXCI6XCLlrZhcIixcIm1hZ29cIjpcIuWtq1wiLFwidGF0dG9pXCI6XCLlsIpcIixcInRvdXRvaVwiOlwi5bCKXCIsXCJzb2tvXCI6XCLmkI3lupVcIixcInRzdWJhXCI6XCLllL5cIixcInRhaVwiOlwi5aSq5a++5L2T6ICQ5b6F5oCg6IOO6YCA5biv5rOw5aCG6KKL6YCu5pu/6LK46ZqK5rue5oWL5oi05aSn5Luj5Y+wXCIsXCJmdXRvXCI6XCLlpKpcIixcInRzdWlcIjpcIuWvvui/veakjuWinOiyu1wiLFwidGVpXCI6XCLkvZPkuIHkvY7lkYjlu7flvJ/lrprlupXmirXpgrjkuq3osp7luJ3oqILluq3pgJPlgZzlgbXloKTmj5DnqIvoiYfnt6Doq6ZcIixcImthcmFkYVwiOlwi5L2TXCIsXCJva290YVwiOlwi5oCgXCIsXCJzaGlyaXpvXCI6XCLpgIBcIixcIm9iaVwiOlwi5bivXCIsXCJmdWt1cm9cIjpcIuiii1wiLFwidG9kb2tvb1wiOlwi5rueXCIsXCJkYWlcIjpcIuWkp+S7o+WPsOesrOmhjOW8n+WGhVwiLFwidGFraVwiOlwi5rudXCIsXCJ0YWt1XCI6XCLlroXmip7msqLljZPmi5PoqJfmv6/luqZcIixcImRha3VcIjpcIuirvua/gVwiLFwibmlnb1wiOlwi5r+BXCIsXCJkYXRzdVwiOlwi6ISx5aWqXCIsXCJudVwiOlwi44Gs44OM6ISx5aGX5oqcXCIsXCJ1YmFcIjpcIuWlqlwiLFwidGFuYVwiOlwi5qOaXCIsXCJkYXJlXCI6XCLoqrBcIixcInRhblwiOlwi5Li55pem5ouF5Y2Y54Kt6IOG5o6i5reh55+t5ZiG56uv57a76KqV6Y2b5aOH5Y+NXCIsXCJkYW5cIjpcIuaXpuWbo+eUt+auteaWreW8vuaaluirh+Wjh1wiLFwibmluYVwiOlwi5ouFXCIsXCJzYWd1XCI6XCLmjqJcIixcIm1pamlrYVwiOlwi55+tXCIsXCJuYWdlXCI6XCLlmIblmIZcIixcImhva29yb1wiOlwi57a7XCIsXCJraXRhXCI6XCLpjZvljJfmnaVcIixcInRvblwiOlwi5Zuj5bGv6LGa6aCT5ZWPXCIsXCJvdG9rb1wiOlwi55S3XCIsXCJrb3Rvd2FcIjpcIuaWrVwiLFwiaGlrdVwiOlwi5by+5L2OXCIsXCJpa2VcIjpcIuaxoFwiLFwiaGFqaXJ1XCI6XCLmgaVcIixcImNoaWt1XCI6XCLnq7nnlZzpgJDok4Tnr4lcIixcInRha3V3YVwiOlwi6JOEXCIsXCJjaGl0c3VcIjpcIuenqeeqklwiLFwiY2hhXCI6XCLojLZcIixcImNoYWt1XCI6XCLnnYDlq6FcIixcImNodXVcIjpcIuS4reS7suiZq+ayluWumeW/oOaKveazqOaYvOafseiht+mFjumLs+mnkFwiLFwibmFrYVwiOlwi5Lit5Luy5Y2KXCIsXCJtdXNoaVwiOlwi6JmrXCIsXCJva2lcIjpcIuayllwiLFwic29zb1wiOlwi5rOoXCIsXCJoaXJ1XCI6XCLmmLxcIixcImhhc2hpcmFcIjpcIuafsVwiLFwiaWNoaWppcnVcIjpcIuiRl1wiLFwidG9tdXJhXCI6XCLlvJRcIixcImlkb1wiOlwi5oyRXCIsXCJpdGFkYVwiOlwi6aCCXCIsXCJpdGFkYWtpXCI6XCLpoIJcIixcInRvcmlcIjpcIumzpVwiLFwiYXNhXCI6XCLmnJ3purtcIixcImF6YWtlXCI6XCLlmLJcIixcInNoaXJhXCI6XCLoqr/nmb1cIixcImNob2t1XCI6XCLnm7Tli4XmjZdcIixcInRhZGFjaGlcIjpcIuebtFwiLFwiY2hpblwiOlwi5rKI54+N5pyV6Zmz6LOD6Y6uXCIsXCJtZXp1cmFcIjpcIuePjVwiLFwidHN1dVwiOlwi6YCa55ebXCIsXCJrYXlvXCI6XCLpgJpcIixcInRzdWJvXCI6XCLlnapcIixcInRzdW1lXCI6XCLniKrlhrdcIixcIm90b3V0b1wiOlwi5byfXCIsXCJzYWRhXCI6XCLlrppcIixcIm5pd2FcIjpcIuW6rVwiLFwidHN1dHN1bWlcIjpcIuWgpFwiLFwiaG9kb1wiOlwi56iLXCIsXCJha2lyYVwiOlwi6Kum5piOXCIsXCJkZWlcIjpcIuazpVwiLFwiZG9yb1wiOlwi5rOlXCIsXCJ0ZWtpXCI6XCLnmoTnrJvmkZjmu7TpganmlbVcIixcIm1hdG9cIjpcIueahFwiLFwiZnVlXCI6XCLnrJtcIixcInNoaXp1a3VcIjpcIua7tFwiLFwic2hpdGF0YVwiOlwi5ru0XCIsXCJrYXRha2lcIjpcIuaVtVwiLFwiZGVraVwiOlwi5rq6XCIsXCJ0ZXRzdVwiOlwi6L+t5ZOy6YmE5b655pKkXCIsXCJ0ZW5cIjpcIuWkqeWFuOW6l+eCueWxlea3u+i7ouWhq+auv1wiLFwibWlzZVwiOlwi5bqXXCIsXCJkZW5cIjpcIueUsOS8neauv+mbu1wiLFwidHN1dGFcIjpcIuS8nVwiLFwidG9ub1wiOlwi5q6/XCIsXCJkb25vXCI6XCLmrr9cIixcIm5ldGFcIjpcIuWmrFwiLFwibWl5YWtvXCI6XCLpg71cIixcIndhdGFcIjpcIua4oee2v1wiLFwiZG9cIjpcIuOBqeWcn+WltOWKquW6puaAklwiLFwidHN1Y2hpXCI6XCLlnJ9cIixcInRhYmlcIjpcIuW6puaXhVwiLFwiaWthXCI6XCLmgJJcIixcInRvdVwiOlwi5YiA5Yas54Gv5b2T5oqV6LGG5p2x5Yiw6YCD5YCS5YeN5ZSQ5bO25qGD6KiO6YCP5YWa5oK855uX6Zm25aGU5pCt5qOf5rmv55eY55m7562U562J562S57Wx56iy6LiP57OW6aCt6KyE6Jek6ZeY6aiw6YGT6Kqt57SNXCIsXCJrYXRhbmFcIjpcIuWIgFwiLFwiZnV5dVwiOlwi5YasXCIsXCJtYW1lXCI6XCLosYZcIixcImhpZ2FzaGlcIjpcIuadsVwiLFwibm9nYVwiOlwi6YCDXCIsXCJ0YW9cIjpcIuWAklwiLFwia29vXCI6XCLlh41cIixcImtvZ29cIjpcIuWHjVwiLFwic2hpbWFcIjpcIuWztlwiLFwibW9tb1wiOlwi5qGDXCIsXCJudXN1XCI6XCLnm5dcIixcImtvdGFlcnVcIjpcIuetlFwiLFwidHN1dHN1XCI6XCLnrZLljIVcIixcImluZVwiOlwi56iyXCIsXCJpbmFcIjpcIueosuWQplwiLFwiYXRhbWFcIjpcIumgrVwiLFwia2FzaGlyYVwiOlwi6aCtXCIsXCJmdWppXCI6XCLol6RcIixcImRvdVwiOlwi5ZCM5rSe6IO05YuV5aCC56ul6YGT5YON6YqF5bCO556zXCIsXCJvbmFcIjpcIuWQjFwiLFwiaG9yYVwiOlwi5rSeXCIsXCJ1Z29cIjpcIuWLleWLlVwiLFwid2FyYWJlXCI6XCLnq6VcIixcIm1pY2hpXCI6XCLpgZNcIixcImhhdGFyYVwiOlwi5YONXCIsXCJtaWNoaWJpXCI6XCLlsI5cIixcImhpdG9taVwiOlwi556zXCIsXCJ0b3VnZVwiOlwi5bOgXCIsXCJkb2t1XCI6XCLmr5Lni6zoqq1cIixcImhpdG9yaVwiOlwi54usXCIsXCJ0b2NoaVwiOlwi5qCDXCIsXCJ0b2RvXCI6XCLlsYpcIixcImJ1dGFcIjpcIuixmlwiLFwiZG9uXCI6XCLosqrpiI3mm4fkuLxcIixcIm11c2Fib1wiOlwi6LKqXCIsXCJuaWJ1XCI6XCLpiI1cIixcImRvbmJ1cmlcIjpcIuS4vFwiLFwibmFpXCI6XCLlhoXkuqFcIixcInVjaGlcIjpcIuWGhVwiLFwibmFzaGlcIjpcIuaiqFwiLFwibmF6b1wiOlwi6KyOXCIsXCJuYWJlXCI6XCLpjYtcIixcIm1pbmFtaVwiOlwi5Y2XXCIsXCJ5YXdhXCI6XCLou5/lkoxcIixcIm11enVrYVwiOlwi6ZujXCIsXCJmdXRhdHN1XCI6XCLkuoxcIixcIm5pamlcIjpcIuiZuVwiLFwibmljaGlcIjpcIuaXpVwiLFwiY2hpY2hpXCI6XCLkubPniLZcIixcIm1ha2FcIjpcIuS7u1wiLFwic2hpbm9cIjpcIuW/jVwiLFwibWl0b1wiOlwi6KqNXCIsXCJuZWlcIjpcIuWvp1wiLFwibmV0c3VcIjpcIueGsVwiLFwidG9zaGlcIjpcIuW5tFwiLFwibmViYVwiOlwi57KYXCIsXCJub3VcIjpcIuaCqee0jeiDveiEs+i+sua/g1wiLFwibmF5YVwiOlwi5oKpXCIsXCJuYW1pXCI6XCLms6LkuKZcIixcInlhYnVcIjpcIuegtOaVl1wiLFwidW1hXCI6XCLppqxcIixcIm5vbm9zaGlcIjpcIue9tVwiLFwib2dhXCI6XCLmi51cIixcInNha2F6dWtpXCI6XCLmna9cIixcInNvbXVcIjpcIuiDjFwiLFwia3ViYVwiOlwi6YWNXCIsXCJzdXRhXCI6XCLlu4NcIixcImJhaVwiOlwi5aOy5YCN5qKF5Z+56Zmq5aqS6LK36LOgXCIsXCJ1bWVcIjpcIuaihVwiLFwidHN1Y2hpa2FcIjpcIuWfuVwiLFwiaGFrdVwiOlwi55m95Lyv5ouN5rOK6L+r5Yml6Ii25Y2a6JaEXCIsXCJieWFrdVwiOlwi55m9XCIsXCJzaGlyb2lcIjpcIueZvVwiLFwiaHlvdVwiOlwi5ouN5rC36KGo5L+156Wo6KmV5ryC5qiZ5YW1XCIsXCJiYWt1XCI6XCLljZrpuqbmvKDnuJvniIbmmrTluZVcIixcInVzdWlcIjpcIuiWhFwiLFwibXVnaVwiOlwi6bqmXCIsXCJoYXRha2VcIjpcIueVkVwiLFwiaGFkYVwiOlwi6IKMXCIsXCJoYWNoaVwiOlwi5YWr6Ymi6JyCXCIsXCJ5YXRzdVwiOlwi5YWrXCIsXCJ5YXR0c3VcIjpcIuWFq1wiLFwiaG90c3VcIjpcIueZuuazleasslwiLFwiYmF0c3VcIjpcIuS8kOaKnOe9sOmWpeacq1wiLFwiYmFjaGlcIjpcIue9sFwiLFwiaGFuXCI6XCLlj43ljYrmsL7niq/luIbmsY7kvLTliKTlnYLpmKrmnb/niYjnj63nlZToiKzosqnmlpHpo6/mkKznhanpoJLnr4TnuYHol6nlh6FcIixcImhvblwiOlwi5Y+N5pys5aWU57+7XCIsXCJzb3J1XCI6XCLlj41cIixcImJhblwiOlwi5Ly05Yik5p2/5pmp55Wq6Juu55uk5LiHXCIsXCJ0b21vbmFcIjpcIuS8tFwiLFwibWVzaGlcIjpcIumjr1wiLFwiYm9uXCI6XCLnhanlh6Hnm4ZcIixcImthcmVcIjpcIuW9vFwiLFwia2Fub1wiOlwi5b28XCIsXCJ0b2J1XCI6XCLpo5tcIixcImtvdW11XCI6XCLooqtcIixcImthbmFzaGlpXCI6XCLmgrJcIixcInRvYmlyYVwiOlwi5omJXCIsXCJiaVwiOlwi44Gz44OT5bC+55yJ576O5YKZ5b6u6by7XCIsXCJ1dHN1a3VcIjpcIue+jlwiLFwiaGl6YVwiOlwi6IadXCIsXCJoaWppXCI6XCLogphcIixcImhpdHN1XCI6XCLljLnlv4Xms4znrYZcIixcImthbmFyYVwiOlwi5b+FXCIsXCJmdWRlXCI6XCLnrYZcIixcImhpbWVcIjpcIuWnq1wiLFwiaHlha3VcIjpcIueZvlwiLFwia29vcmlcIjpcIuawt1wiLFwib21vdGVcIjpcIuihqOmdolwiLFwidGF3YXJhXCI6XCLkv7VcIixcInRhZGF5b1wiOlwi5ryCXCIsXCJieW91XCI6XCLoi5fnp5Lnl4Xmj4/njKvlubNcIixcIm5hZVwiOlwi6IuXXCIsXCJoZWlcIjpcIueXheS4meW5s+WFteS9teS4puafhOmZm+mWieWhgOW5o+W8iuiUvemkhVwiLFwieWFtdVwiOlwi55eFXCIsXCJ5YW1haVwiOlwi55eFXCIsXCJlZ2FcIjpcIuaPj1wiLFwibmVrb1wiOlwi54yrXCIsXCJoaW5cIjpcIuWTgea1nOiyp+izk+mgu1wiLFwic2hpbmFcIjpcIuWTgVwiLFwiaGFtYVwiOlwi5rWcXCIsXCJiaW5cIjpcIuiyp+aVj+eTtuS+v1wiLFwibWF6dVwiOlwi6LKnXCIsXCJidVwiOlwi44G244OW5LiN5L6u5q2m6YOo6Iie5YiG5q2p5aWJ54ShXCIsXCJmdXVcIjpcIuWkq+WvjOWwgemiqFwiLFwib3R0b1wiOlwi5aSrXCIsXCJudW5vXCI6XCLluINcIixcIm9tb211XCI6XCLotbRcIixcInRvbWlcIjpcIuWvjFwiLFwia3VzYXJ1XCI6XCLohZBcIixcImFuYWRvXCI6XCLkvq5cIixcImhvdVwiOlwi5bCB5pa55YyF6Iqz6YKm5aWJ5a6d5oqx5pS+5pS+5rOV5rOh6IOe5L+45YCj5bOw56Cy5bSp6Kiq5aCx6JyC6LGK6aO96KSS57irXCIsXCJrYXplXCI6XCLpoqhcIixcImthemFcIjpcIumiqFwiLFwia3V0c3VnYWVcIjpcIuimhlwiLFwiZnV0c3VcIjpcIuaJleayuFwiLFwiYnV0c3VcIjpcIuS7j+eJqVwiLFwiaG90b2tlXCI6XCLku49cIixcImZ1blwiOlwi57KJ57Sb6Zuw5Zm05aKz5oak5aWu5YiGXCIsXCJrb25hXCI6XCLnsolcIixcIm1hZ2lcIjpcIue0m1wiLFwiaWtpZG9vXCI6XCLmhqRcIixcImJ1blwiOlwi5YiG5paH6IGeXCIsXCJ3YWtlcnVcIjpcIuWIhlwiLFwibW9uXCI6XCLmlofogZ7ploDntIvllY9cIixcImZ1bWlcIjpcIuaWh1wiLFwidGFpcmFcIjpcIuW5s1wiLFwiZ2FyYVwiOlwi5p+EXCIsXCJtb2NoaVwiOlwi6aSF55SoXCIsXCJiZWlcIjpcIuexs1wiLFwia29tZVwiOlwi57GzXCIsXCJoZWtpXCI6XCLlo4HnkqfnmZZcIixcImthYmVcIjpcIuWjgVwiLFwia3VzZVwiOlwi55mWXCIsXCJiZXRzdVwiOlwi5Yil6JSRXCIsXCJzYWdlXCI6XCLolJFcIixcImhlblwiOlwi54mH6L666L+U5aSJ5YGP6YGN57eoXCIsXCJhdGFcIjpcIui+uuS4jlwiLFwiYmVcIjpcIuOBuei+ulwiLFwia2F0YXlvXCI6XCLlgY9cIixcImJlblwiOlwi5byB5L6/5YuJXCIsXCJ0YXlvXCI6XCLkvr/poLxcIixcImFydVwiOlwi5q2pXCIsXCJheXVcIjpcIuatqVwiLFwidGFtb1wiOlwi5L+dXCIsXCJvZ2luYVwiOlwi6KOcXCIsXCJib1wiOlwi44G844Oc5q+N5Yuf5aKT5oWV5pqu57C/5qihXCIsXCJoYWhhXCI6XCLmr41cIixcImthbmJhXCI6XCLoirNcIixcInRhdGVtYXRzdVwiOlwi5aWJXCIsXCJ0YWthcmFcIjpcIuWunVwiLFwiaWRhXCI6XCLmirFcIixcIm1pbmVcIjpcIuWzsFwiLFwib3RvenVcIjpcIuioqlwiLFwibXVrdVwiOlwi5aCxXCIsXCJ5dXRhXCI6XCLosYpcIixcImFrYXN1XCI6XCLpo71cIixcImhvbWVydVwiOlwi6KSSXCIsXCJudXVcIjpcIue4q1wiLFwiYm91XCI6XCLkuqHkuY/lv5nlnYrlpqjlv5jpmLLmiL/ogqrmn5DlhpLliZbntKHmnJvlgo3luL3mo5Losr/osozmmrTohqjorIDlpoRcIixcInRvYm9cIjpcIuS5j1wiLFwiaXNvZ2FcIjpcIuW/mVwiLFwiYm90c3VcIjpcIuWdiuayoeWLg1wiLFwic2FtYXRhXCI6XCLlpqhcIixcIndhc3VcIjpcIuW/mFwiLFwiZnVzZVwiOlwi6ZiyXCIsXCJ0c3VtdVwiOlwi57ShXCIsXCJub3pvXCI6XCLmnJvoh6hcIixcImthdGF3YVwiOlwi5YKNXCIsXCJhYmFcIjpcIuaatFwiLFwiaG9vXCI6XCLpoKxcIixcImhva3VcIjpcIuWMl1wiLFwiYm9rdVwiOlwi5pyo5py054mn552m5YOV5aKo5pKy55uuXCIsXCJtb2t1XCI6XCLmnKjnm67pu5lcIixcImhvcmlcIjpcIuWggFwiLFwiaGlydWdhXCI6XCLnv7tcIixcIm1pZ2FcIjpcIuejqFwiLFwiaW1vdXRvXCI6XCLlprlcIixcIm1ha3VcIjpcIuW5leiGnFwiLFwibWFrdXJhXCI6XCLmnpVcIixcInN1ZVwiOlwi5pyrXCIsXCJtYW5cIjpcIuS4h+a6gOaFoua8q1wiLFwibWljaGlydVwiOlwi5rqAXCIsXCJhamlcIjpcIuWRs+WRs1wiLFwibWlzYWtpXCI6XCLlsqxcIixcIm15YWt1XCI6XCLohIhcIixcIm15b3VcIjpcIuWmmeWQjeWRveaYjuWGpVwiLFwibWluXCI6XCLmsJHnnKBcIixcInRhbWlcIjpcIuawkVwiLFwibmVtdXJ1XCI6XCLnnKBcIixcInl1bWVcIjpcIuWkolwiLFwia2lyaVwiOlwi6ZynXCIsXCJtdXN1bWVcIjpcIuWomFwiLFwibWVpXCI6XCLlkI3lkb3mmI7ov7flhqXnm5/pipjps7RcIixcImlub2NoaVwiOlwi5ZG9XCIsXCJtYXlvXCI6XCLov7dcIixcIm1ldHN1XCI6XCLmu4VcIixcImhvcm9cIjpcIua7hVwiLFwibWVuXCI6XCLlhY3pnaLntr/purpcIixcIm1hbnVrYVwiOlwi5YWNXCIsXCJ0c3VyYVwiOlwi6Z2i6YCjXCIsXCJzaGlnZVwiOlwi6IyCXCIsXCJhbWlcIjpcIue2slwiLFwiZGFtYVwiOlwi6buZXCIsXCJ5b3J1XCI6XCLlpJxcIixcIndha2VcIjpcIuios1wiLFwia3VzdXJpXCI6XCLolqxcIixcInlhbWlcIjpcIumXh1wiLFwieW9zaGlcIjpcIueUsVwiLFwiaXNhXCI6XCLli4dcIixcImFzb1wiOlwi6YGKXCIsXCJzYXNvXCI6XCLoqphcIixcInN1Z3VcIjpcIuWEqlwiLFwiaG9tYXJlXCI6XCLoqolcIixcImF6dVwiOlwi6aCQXCIsXCJvc2FuYVwiOlwi5bm8XCIsXCJoaXRzdWppXCI6XCLnvopcIixcImthbmFtZVwiOlwi6KaBXCIsXCJrb3NoaVwiOlwi6IWwXCIsXCJzYW1hXCI6XCLmp5hcIixcInlhc2hpbmFcIjpcIumkilwiLFwidXRhaVwiOlwi6KyhXCIsXCJ5b2t1XCI6XCLmipHmsoPmtbTmrLLnv4znv7xcIixcInRzdWJhc2FcIjpcIue/vFwiLFwicmFcIjpcIuOCieODqeaLieijuOe+hVwiLFwiaGFkYWthXCI6XCLoo7hcIixcInJhaVwiOlwi5p2l6Zu36aC856S8XCIsXCJrYW1pbmFyaVwiOlwi6Zu3XCIsXCJyYXRzdVwiOlwi6L6jXCIsXCJyYW5cIjpcIuS5seWNteimp+a/q+iXjeashFwiLFwidGFtYWdvXCI6XCLljbVcIixcInJpXCI6XCLjgorjg6rlkI/liKnph4znkIbnl6Loo4/lsaXnkoPpm6JcIixcInJpa3VcIjpcIumZuOeri1wiLFwicnl1dVwiOlwi56uL5p+z5rWB55WZ56uc57KS6ZqG56GrXCIsXCJyaWNoaVwiOlwi5b6LXCIsXCJyeWFrdVwiOlwi55WlXCIsXCJ5YW5hZ2lcIjpcIuafs1wiLFwicnVcIjpcIuOCi+ODq+a1geeVmeeRoFwiLFwicnlvXCI6XCLkvrbml4XomZzmha5cIixcInN1enVcIjpcIua2vOa2vOmItFwiLFwibWlzYXNhZ2lcIjpcIumZtVwiLFwicm91XCI6XCLns6fpnLLogIHlirTlvITpg47mnJfmtarlu4rmpbzmvI/nsaBcIixcImthdGVcIjpcIuezp1wiLFwicnlva3VcIjpcIuWKm+e3kVwiLFwicmlraVwiOlwi5YqbXCIsXCJjaGlrYXJhXCI6XCLliptcIixcInJva3VcIjpcIue3keWFremMsum6k1wiLFwibWlkb3JpXCI6XCLnt5FcIixcInJpblwiOlwi5p6X5Y6Y5YCr6Lyq6Zqj6Ieo6Yi0XCIsXCJoYXlhc2hpXCI6XCLmnpdcIixcInRvbmFyaVwiOlwi6ZqjXCIsXCJyZVwiOlwi44KM44OsXCIsXCJydWlcIjpcIua2mee0r+WhgemhnlwiLFwibmFtaWRhXCI6XCLmtplcIixcInRhZ3VcIjpcIumhnlwiLFwicmVpXCI6XCLku6TnpLzlhrflirHmiLvkvovpiLTpm7bpnIrpmrfpvaLpupdcIixcIm1vZG9cIjpcIuaIu1wiLFwidGF0b1wiOlwi5L6LXCIsXCJ1cnV3YVwiOlwi6bqXXCIsXCJyZWtpXCI6XCLmmqbmrbRcIixcImtveW9taVwiOlwi5pqmXCIsXCJyZXRzdVwiOlwi5YiX5Yqj54OI6KOCXCIsXCJyZW5cIjpcIuaBi+mAo+W7iee3tOmMrFwiLFwia29pXCI6XCLmgYvmgYtcIixcInJvXCI6XCLjgo3jg63lkYLngonos4Lot6/pnLJcIixcInRzdXl1XCI6XCLpnLJcIixcIm1vdGVhc29cIjpcIuW8hFwiLFwiaG9nYVwiOlwi5pyXXCIsXCJrYWdvXCI6XCLnsaBcIixcIm11dHRzdVwiOlwi5YWtXCIsXCJtdWlcIjpcIuWFrVwiLFwiZnVtb3RvXCI6XCLpupNcIixcInJvblwiOlwi6KuWXCIsXCJuYWdvXCI6XCLlkoxcIixcImhhbmFzaGlcIjpcIuipsVwiLFwid2FpXCI6XCLos4RcIixcIm1ha2FuYVwiOlwi6LOEXCIsXCJ3YWtpXCI6XCLohIdcIixcIndha3VcIjpcIuaDkeaeoFwiLFwid2FuXCI6XCLmub7ohZVcIixcInVkZVwiOlwi6IWVXCIsXCJublwiOlwi44KT44OzXCIsXCJseWFcIjpcIuOCg+ODo1wiLFwibHl1XCI6XCLjgoXjg6VcIixcImx5b1wiOlwi44KH44OnXCIsXCJ3b1wiOlwi44KS44OyXCIsXCJsaVwiOlwi44GD44KjXCIsXCJsdVwiOlwi44GF44KlXCIsXCJsZVwiOlwi44GH44KnXCIsXCJsYVwiOlwi44GB44KhXCIsXCJsb1wiOlwi44GJ44KpXCIsXCJ0dFwiOlwi44Gj44ODXCIsXCJkaVwiOlwi44Gi44OCXCIsXCJkdVwiOlwi44Gl44OFXCIsXCJwYVwiOlwi44Gx44ORXCIsXCJwaVwiOlwi44G044OUXCIsXCJwdVwiOlwi44G344OXXCIsXCJwZVwiOlwi44G6XCIsXCJwb1wiOlwi44G944OdXCJ9XHJcblxyXG5leHBvcnQgeyBkaWN0IH1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKCgpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjEyXCI7IiwiPGltcG9ydCBuYW1lPVwiaW5wdXQtbWV0aG9kXCIgc3JjPVwiLi4vLi4vY29tcG9uZW50cy9JbnB1dE1ldGhvZC9JbnB1dE1ldGhvZC51eFwiPjwvaW1wb3J0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlIHBhZ2Ute3tzY3JlZW5Qcm9maWxlfX1cIiBvbnRvdWNoc3RhcnQ9XCJvblRvdWNoU3RhcnRcIiBvbnRvdWNoZW5kPVwib25Ub3VjaEVuZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvcC1yb3dcIj5cclxuICAgICAgPGltYWdlIGNsYXNzPVwiYmFjay1idG5cIiBpZj1cInt7ICFxdWVyeSB9fVwiIHNyYz1cIi9jb21tb24vaWNvbnMvQmFja19CLnBuZ1wiIG9uY2xpY2s9XCJvblNlYXJjaEJ1dHRvbkNsaWNrXCIgLz5cclxuICAgICAgPGltYWdlIGNsYXNzPVwiY2hlY2stYnRuXCIgaWY9XCJ7eyBxdWVyeSB9fVwiIHNyYz1cIi9jb21tb24vaWNvbnMvY2hlY2stYnRuLWJsdWUucG5nXCIgb25jbGljaz1cIm9uU2VhcmNoQnV0dG9uQ2xpY2tcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94IGlucHV0LWJveC17e3NjcmVlblByb2ZpbGV9fVwiIEBjbGljaz1cIm9uSW5wdXRCb3hDbGlja1wiPlxyXG4gICAgICAgIDxtYXJxdWVlIGlkPVwibWFycXVlZS10ZXh0XCIgY2xhc3M9XCJpbnB1dC10ZXh0IGlucHV0LXRleHQte3tzY3JlZW5Qcm9maWxlfX1cIlxyXG4gICAgICAgICAgc2Nyb2xsYW1vdW50PVwie3ttYXJxdWVlU3BlZWR9fVwiIGRpcmVjdGlvbj1cImxlZnRcIiBsb29wPVwiLTFcIiB0ZXh0LW9mZnNldD1cIjQwXCI+XHJcbiAgICAgICAgICB7eyBkaXNwbGF5VGV4dCB9fVxyXG4gICAgICAgIDwvbWFycXVlZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZWRpdC1yb3cgZWRpdC1yb3cte3tzY3JlZW5Qcm9maWxlfX1cIj5cclxuICAgICAgPGltYWdlIGNsYXNzPVwibW92ZS1sZWZ0LWJ0blwiIHNyYz1cIi9jb21tb24vaWNvbnMvYnRuX2JhY2tfdGhpbi5wbmdcIiBvbmNsaWNrPVwibW92ZUxlZnRcIiAvPlxyXG4gICAgICA8aW1hZ2UgY2xhc3M9XCJjbGVhci1idG5cIiBzcmM9XCIvY29tbW9uL2ljb25zL2J0bl9kZWxldGVfZmF0LnBuZ1wiIG9uY2xpY2s9XCJjbGVhclRleHRcIiAvPlxyXG4gICAgICA8aW1hZ2UgY2xhc3M9XCJtb3ZlLXJpZ2h0LWJ0blwiIHNyYz1cIi9jb21tb24vaWNvbnMvYnRuX2JhY2tfbWlycm9yX3RoaW4ucG5nXCIgb25jbGljaz1cIm1vdmVSaWdodFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGlmPVwie3sga2V5Ym9hcmRIaWRkZW4gfX1cIiBjbGFzcz1cImhpbnQtYXJlYVwiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImhpbnQtdGV4dFwiPua4heepuuWNs+WPr+mAgOWHujwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxpbnB1dC1tZXRob2RcclxuICAgICAgaGlkZT1cInt7IGtleWJvYXJkSGlkZGVuIH19XCJcclxuICAgICAga2V5Ym9hcmR0eXBlPVwie3sga2V5Ym9hcmRUeXBlIH19XCJcclxuICAgICAgbWF4bGVuZ3RoPVwie3sgbWF4TGVuZ3RoIH19XCJcclxuICAgICAgdmlicmF0ZW1vZGU9XCJ7eyB2aWJyYXRlTW9kZSB9fVwiXHJcbiAgICAgIHNjcmVlbnR5cGU9XCJ7eyBzY3JlZW5UeXBlIH19XCJcclxuICAgICAgQHZpc2liaWxpdHktY2hhbmdlPVwib25WaXNpYmlsaXR5Q2hhbmdlXCJcclxuICAgICAgQGtleS1kb3duPVwib25LZXlEb3duXCJcclxuICAgICAgQGRlbGV0ZT1cIm9uRGVsZXRlXCJcclxuICAgICAgQGNvbXBsZXRlPVwib25Db21wbGV0ZVwiXHJcbiAgICAgIGVuZ2xpc2hvbmx5PVwie3sgc2VhcmNoTW9kZSA9PT0gJ2luZmxlY3QnIH19XCJcclxuICAgICAgQHJlYWR5PVwib25SZWFkeVwiXHJcbiAgICA+PC9pbnB1dC1tZXRob2Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgZGV2aWNlIGZyb20gXCJAc3lzdGVtLmRldmljZVwiXHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcclxuaW1wb3J0IHByb21wdCBmcm9tIFwiQHN5c3RlbS5wcm9tcHRcIlxyXG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIkBzeXN0ZW0uc3RvcmFnZVwiXHJcbmltcG9ydCB7c2V0U3VnZ2VzdGlvblNlZWQsIHNldFN1Z2dlc3Rpb25zfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N1Z2dlc3Rpb25TdGF0ZVwiXHJcbmltcG9ydCB7ZGVjb2RlUHJlZml4RmllbGR9IGZyb20gXCIuLi8uLi9jb21tb24vZGljdENvZGVjXCJcclxuaW1wb3J0IGJ1aWxkVGFyZ2V0IGZyb20gXCIuLi8uLi9jb21tb24vYnVpbGRUYXJnZXRcIlxyXG5pbXBvcnQge25hdkd1YXJkfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdkd1YXJkXCJcclxuXHJcbmNvbnN0IEVOR0xJU0hfU1VGRklYRVMgPSBbXHJcbiAgXCJzXCIsXHJcbiAgXCJlZFwiLFxyXG4gIFwiaW5nXCIsXHJcbiAgXCJlclwiLFxyXG4gIFwiZXN0XCIsXHJcbiAgXCJseVwiLFxyXG4gIFwidGlvblwiLFxyXG4gIFwibWVudFwiLFxyXG4gIFwibmVzc1wiLFxyXG4gIFwiYWJsZVwiLFxyXG4gIFwiZnVsXCIsXHJcbiAgXCJsZXNzXCIsXHJcbiAgXCJpdmVcIixcclxuICBcImFsXCIsXHJcbiAgXCJvdXNcIixcclxuICBcIml0eVwiXHJcbl1cclxuXHJcbnZhciBUQUdfQ09ERV9NQVAgPSB7ejogJ3prJywgZzogJ2drJywgJzQnOiAnY2V0NCcsICc2JzogJ2NldDYnLCBrOiAna3knLCB0OiAndG9lZmwnLCBpOiAnaWVsdHMnLCBlOiAnZ3JlJ31cclxudmFyIFRBR19MQUJFTFMgPSBbJ3prJywgJ2drJywgJ2NldDQnLCAnY2V0NicsICdreScsICdpZWx0cycsICd0b2VmbCcsICdncmUnXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3RlY3RlZDoge1xyXG4gICAgcXVlcnlQYXJhbTogXCJcIixcclxuICAgIGF1dG9TZWFyY2g6IFwiXCIsXHJcbiAgICBzZWFyY2hNb2RlOiBcIlwiLFxyXG4gICAgaW5mbGVjdERlcHRoOiBcIlwiLFxyXG4gICAgc2NyZWVuUHJvZmlsZTogXCJyZWN0XCJcclxuICB9LFxyXG5cclxuICBwcml2YXRlOiB7XHJcbiAgICBxdWVyeTogXCJcIixcclxuICAgIGN1cnNvckluZGV4OiAwLFxyXG4gICAgZGlzcGxheVRleHQ6IFwiXCIsXHJcbiAgICBlbmdsaXNoU2VlZDogXCJcIixcclxuICAgIGVuZ2xpc2hTdWdnZXN0aW9uc1RleHQ6IFwiXCIsXHJcbiAgICBrZXlib2FyZEhpZGRlbjogZmFsc2UsXHJcbiAgICBrZXlib2FyZFR5cGU6IFwiUVdFUlRZXCIsXHJcbiAgICBzY3JlZW5UeXBlOiBcInJlY3RcIixcclxuICAgIG1heExlbmd0aDogMTUsXHJcbiAgICB2aWJyYXRlTW9kZTogXCJzaG9ydFwiLFxyXG4gICAgbGFzdFRvYXN0QXQ6IDAsXHJcbiAgICB0b2FzdENvb2xkb3duOiAxNTAwLFxyXG4gICAgdG91Y2hTdGFydFg6IC0xLFxyXG4gICAgdG91Y2hTdGFydFk6IC0xLFxyXG4gICAgZGVzdHJveWVkOiBmYWxzZSxcclxuICAgIGF1dG9TZWFyY2hQZW5kaW5nOiBmYWxzZSxcclxuICAgIGVuZ2xpc2hTdWdnZXN0aW9uQ2FjaGU6IG51bGwsXHJcbiAgICBlbmdsaXNoU3VnZ2VzdGlvblBhcnNlZDogbnVsbCxcclxuICAgIGVuZ2xpc2hTdWdnZXN0aW9uUGVuZGluZzogbnVsbCxcclxuICAgIGVuZ2xpc2hTdWdnZXN0aW9uT3JkZXI6IG51bGwsXHJcbiAgICBlbmdsaXNoU3VnZ2VzdGlvblRva2VuOiAwLFxyXG4gICAgZW5nbGlzaFN1Z2dlc3Rpb25FbmFibGVkOiB0cnVlLFxyXG4gICAgc2VhcmNoU3dpcGVFeGl0TG9ja2VkOiB0cnVlLFxyXG4gICAgc2VhcmNoU3VibWl0TG9ja2VkOiBmYWxzZSxcclxuICAgIF9zdWdnZXN0aW9uVGltZXI6IG51bGwsXHJcbiAgICBhdXRvU2VhcmNoVGltZXI6IG51bGwsXHJcbiAgICBtYXJxdWVlVGltZXI6IG51bGwsXHJcbiAgICB0YXBUaW1lczogW10sXHJcbiAgICBtYXJxdWVlQWN0aXZlOiBmYWxzZSxcclxuICAgIG1hcnF1ZWVTcGVlZDogNDBcclxuICB9LFxyXG5cclxuICBfZXhwYW5kVGFnKHMpIHtcclxuICAgIGlmICghcykgcmV0dXJuICcnXHJcbiAgICBzID0gcy5yZXBsYWNlKC9cXHIvZywgJycpXHJcbiAgICBpZiAocy5pbmRleE9mKCcsJykgPCAwICYmIC9eWzAtOWEtZl0rJC8udGVzdChzKSkge1xyXG4gICAgICB2YXIgbWFzayA9IHBhcnNlSW50KHMsIDE2KVxyXG4gICAgICB2YXIgbGFiZWxzID0gW11cclxuICAgICAgZm9yICh2YXIgYml0ID0gMDsgYml0IDwgVEFHX0xBQkVMUy5sZW5ndGg7IGJpdCsrKSB7XHJcbiAgICAgICAgaWYgKG1hc2sgJiAoMSA8PCBiaXQpKSB7XHJcbiAgICAgICAgICBsYWJlbHMucHVzaChUQUdfTEFCRUxTW2JpdF0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsYWJlbHMuam9pbignICcpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbihjKSB7IHJldHVybiBUQUdfQ09ERV9NQVBbY10gfHwgYyB9KS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbiAgfSxcclxuXHJcbiAgX2RlY29kZVdvcmRQcmVmaXgocGFydHMsIHByZXZXb3JkKSB7XHJcbiAgICByZXR1cm4gZGVjb2RlUHJlZml4RmllbGQocGFydHNbMF0sIHByZXZXb3JkKSB8fCBcIlwiXHJcbiAgfSxcclxuXHJcbiAgX3BhcnNlU3VnZ2VzdGlvbkxpbmVzKHRleHQpIHtcclxuICAgIHZhciByb3dzID0gdGV4dC5zcGxpdChcIlxcblwiKVxyXG4gICAgdmFyIG91dCA9IFtdXHJcbiAgICB2YXIgcHJldldvcmQgPSBcIlwiXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHBhcnRzID0gcm93c1tpXS5zcGxpdChcIlxcdFwiKVxyXG4gICAgICBpZiAocGFydHMubGVuZ3RoID49IDMpIHtcclxuICAgICAgICB2YXIgd29yZCA9IHRoaXMuX2RlY29kZVdvcmRQcmVmaXgocGFydHMsIHByZXZXb3JkKVxyXG4gICAgICAgIHByZXZXb3JkID0gd29yZFxyXG4gICAgICAgIG91dC5wdXNoKHt3b3JkOiB3b3JkLCBlbnRyeUlkOiBwYXJ0c1sxXSwgdGFnczogcGFydHNbMl0gfHwgJyd9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0XHJcbiAgfSxcclxuXHJcbiAgb25Jbml0KCkge1xyXG4gICAgdGhpcy5lbmdsaXNoU3VnZ2VzdGlvbkNhY2hlID0ge31cclxuICAgIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25QYXJzZWQgPSB7fVxyXG4gICAgdGhpcy5lbmdsaXNoU3VnZ2VzdGlvblBlbmRpbmcgPSB7fVxyXG4gICAgdGhpcy5lbmdsaXNoU3VnZ2VzdGlvbk9yZGVyID0gW11cclxuICAgIHRoaXMubG9hZEVuZ2xpc2hTdWdnZXN0aW9uU2V0dGluZygpXHJcbiAgICB0aGlzLmxvYWRTZWFyY2hTd2lwZUV4aXRTZXR0aW5nKClcclxuICAgIHRoaXMuYXBwbHlTY3JlZW5JbmZvKGJ1aWxkVGFyZ2V0KVxyXG4gICAgY29uc3QgYXBwID0gdGhpcy4kYXBwLiRkZWZcclxuICAgIGRldmljZS5nZXRJbmZvKHtcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICBhcHAudXBkYXRlU2NyZWVuSW5mbyhkYXRhKVxyXG4gICAgICAgIHRoaXMuYXBwbHlTY3JlZW5JbmZvKGFwcC5kYXRhKVxyXG4gICAgICAgIHRoaXMucmVmcmVzaERpc3BsYXkoKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZGF0YSwgY29kZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoIGRldmljZS5nZXRJbmZvIGZhaWxlZDsgdXNpbmcgY29tcGlsZWQgdGFyZ2V0OiBcIiArIGNvZGUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAodGhpcy5xdWVyeVBhcmFtKSB7XHJcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5UGFyYW1cclxuICAgICAgdGhpcy5jdXJzb3JJbmRleCA9IHRoaXMucXVlcnkubGVuZ3RoXHJcbiAgICB9XHJcbiAgICB0aGlzLmtleWJvYXJkSGlkZGVuID0gdGhpcy5hdXRvU2VhcmNoID09PSBcIjFcIiA/IHRydWUgOiBmYWxzZVxyXG4gICAgdGhpcy5yZWZyZXNoRGlzcGxheSgpXHJcbiAgICBpZiAodGhpcy5hdXRvU2VhcmNoID09PSBcIjFcIiAmJiB0aGlzLnF1ZXJ5KSB7XHJcbiAgICAgIHRoaXMuYXV0b1NlYXJjaFBlbmRpbmcgPSB0cnVlXHJcbiAgICAgIC8vIOetieW+hSBJbnB1dE1ldGhvZCDlvILmraXliJ3lp4vljJblrozmiJDvvIhyZWFkeSDkuovku7bvvInlkI7lho3ot7PovaxcclxuICAgICAgLy8gdGltZW91dCDlhZzlupXvvIzpmLLmraIgcmVhZHkg5LqL5Lu26L+H5pepL+i/h+aZmuinpuWPkVxyXG4gICAgICB0aGlzLmF1dG9TZWFyY2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYXV0b1NlYXJjaFRpbWVyID0gbnVsbFxyXG4gICAgICAgIGlmICghdGhpcy5kZXN0cm95ZWQgJiYgdGhpcy5hdXRvU2VhcmNoUGVuZGluZykge1xyXG4gICAgICAgICAgdGhpcy5hdXRvU2VhcmNoUGVuZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLnBlcmZvcm1TZWFyY2goKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTAwKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFwcGx5U2NyZWVuSW5mbyhkYXRhKSB7XHJcbiAgICBjb25zdCBzY3JlZW5TaGFwZSA9IGRhdGEuc2hhcGUgfHwgZGF0YS5zY3JlZW5TaGFwZSB8fCBcInJlY3RcIlxyXG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSBOdW1iZXIoZGF0YS53aWR0aCB8fCBkYXRhLnNjcmVlbldpZHRoIHx8IDQzMilcclxuICAgIHRoaXMuc2NyZWVuVHlwZSA9IHNjcmVlblNoYXBlXHJcbiAgICB0aGlzLnNjcmVlblByb2ZpbGUgPSBkYXRhLnByb2ZpbGUgfHwgZGF0YS5zY3JlZW5Qcm9maWxlIHx8IFwicmVjdFwiXHJcbiAgICB0aGlzLm1heExlbmd0aCA9IHRoaXMuZ2V0TWF4TGVuZ3RoKHNjcmVlblNoYXBlLCBzY3JlZW5XaWR0aClcclxuICB9LFxyXG5cclxuICBnZXRNYXhMZW5ndGgoc2NyZWVuU2hhcGUsIHNjcmVlbldpZHRoKSB7XHJcbiAgICBpZiAoc2NyZWVuU2hhcGUgPT09IFwiY2lyY2xlXCIpIHtcclxuICAgICAgcmV0dXJuIDEyXHJcbiAgICB9XHJcbiAgICBpZiAoc2NyZWVuU2hhcGUgPT09IFwicmVjdFwiKSB7XHJcbiAgICAgIHJldHVybiBzY3JlZW5XaWR0aCA+PSA0MDAgPyAxNSA6IDExXHJcbiAgICB9XHJcbiAgICByZXR1cm4gNVxyXG4gIH0sXHJcblxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZVxyXG4gICAgdGhpcy5lbmdsaXNoU3VnZ2VzdGlvblRva2VuKytcclxuICAgIGlmICh0aGlzLl9zdWdnZXN0aW9uVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N1Z2dlc3Rpb25UaW1lcilcclxuICAgICAgdGhpcy5fc3VnZ2VzdGlvblRpbWVyID0gbnVsbFxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0b1NlYXJjaFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9TZWFyY2hUaW1lcilcclxuICAgICAgdGhpcy5hdXRvU2VhcmNoVGltZXIgPSBudWxsXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tYXJxdWVlVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFycXVlZVRpbWVyKVxyXG4gICAgICB0aGlzLm1hcnF1ZWVUaW1lciA9IG51bGxcclxuICAgIH1cclxuICAgIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25DYWNoZSA9IG51bGxcclxuICAgIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25QYXJzZWQgPSBudWxsXHJcbiAgICB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uUGVuZGluZyA9IG51bGxcclxuICAgIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25PcmRlciA9IG51bGxcclxuICAgIHRoaXMuc3RvcE1hcnF1ZWUoKVxyXG4gIH0sXHJcblxyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMuc2VhcmNoU3VibWl0TG9ja2VkID0gZmFsc2VcclxuICAgIHRoaXMubG9hZEVuZ2xpc2hTdWdnZXN0aW9uU2V0dGluZygpXHJcbiAgICB0aGlzLmxvYWRTZWFyY2hTd2lwZUV4aXRTZXR0aW5nKClcclxuICB9LFxyXG5cclxuICBvblJlYWR5KCkge1xyXG4gICAgaWYgKHRoaXMuYXV0b1NlYXJjaFBlbmRpbmcpIHtcclxuICAgICAgdGhpcy5hdXRvU2VhcmNoUGVuZGluZyA9IGZhbHNlXHJcbiAgICAgIGlmICh0aGlzLmF1dG9TZWFyY2hUaW1lcikge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9TZWFyY2hUaW1lcilcclxuICAgICAgICB0aGlzLmF1dG9TZWFyY2hUaW1lciA9IG51bGxcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2goKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uQmFja1ByZXNzKCkge1xyXG4gICAgaWYgKCFuYXZHdWFyZCgpKSByZXR1cm5cclxuICAgIHJldHVybiB0aGlzLnNlYXJjaFN3aXBlRXhpdExvY2tlZFxyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZUtleWJvYXJkKCkge1xyXG4gICAgdGhpcy5rZXlib2FyZEhpZGRlbiA9ICF0aGlzLmtleWJvYXJkSGlkZGVuXHJcbiAgICB0aGlzLnJlZnJlc2hEaXNwbGF5KClcclxuICB9LFxyXG5cclxuICBvbklucHV0Qm94Q2xpY2soKSB7XHJcbiAgICBpZiAoIW5hdkd1YXJkKCkpIHJldHVyblxyXG4gICAgdmFyIG5vdyA9IERhdGUubm93KClcclxuICAgIHRoaXMudGFwVGltZXMucHVzaChub3cpXHJcbiAgICB0aGlzLnRhcFRpbWVzID0gdGhpcy50YXBUaW1lcy5maWx0ZXIoZnVuY3Rpb24odCkgeyByZXR1cm4gbm93IC0gdCA8PSAxNTAwIH0pXHJcbiAgICBpZiAodGhpcy50YXBUaW1lcy5sZW5ndGggPj0gMykge1xyXG4gICAgICB0aGlzLnRhcFRpbWVzID0gW11cclxuICAgICAgcm91dGVyLnJlcGxhY2Uoe1xyXG4gICAgICAgIHVyaTogXCIvcGFnZXMvZmlsdGVyXCIsXHJcbiAgICAgICAgcGFyYW1zOiB7IG1vZGU6IFwiaW5wdXRcIiwgcXVlcnlQYXJhbTogdGhpcy5xdWVyeSB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy50b2dnbGVLZXlib2FyZCgpXHJcbiAgfSxcclxuXHJcbiAgb25WaXNpYmlsaXR5Q2hhbmdlKGV2dCkge1xyXG4gICAgaWYgKGV2dCAmJiBldnQuZGV0YWlsKSB7XHJcbiAgICAgIHRoaXMua2V5Ym9hcmRIaWRkZW4gPSAhZXZ0LmRldGFpbC52aXNpYmxlXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZnJlc2hEaXNwbGF5KClcclxuICB9LFxyXG5cclxuICBvbktleURvd24oZXZ0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImtleSBkb3duOiBcIiArIEpTT04uc3RyaW5naWZ5KGV2dCkpXHJcbiAgfSxcclxuXHJcbiAgb25EZWxldGUoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJzb3JJbmRleCA+IDApIHtcclxuICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc2xpY2UoMCwgdGhpcy5jdXJzb3JJbmRleCAtIDEpICsgdGhpcy5xdWVyeS5zbGljZSh0aGlzLmN1cnNvckluZGV4KVxyXG4gICAgICB0aGlzLmN1cnNvckluZGV4LS1cclxuICAgIH1cclxuICAgIHRoaXMucmVmcmVzaERpc3BsYXkoKVxyXG4gICAgdGhpcy5zY2hlZHVsZVN1Z2dlc3Rpb25VcGRhdGUoKVxyXG4gIH0sXHJcblxyXG4gIG9uQ29tcGxldGUoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0ICYmIGV2dC5kZXRhaWwgJiYgZXZ0LmRldGFpbC5jb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBldnQuZGV0YWlsLmNvbnRlbnRcclxuICAgICAgdGhpcy5xdWVyeSA9XHJcbiAgICAgICAgdGhpcy5xdWVyeS5zbGljZSgwLCB0aGlzLmN1cnNvckluZGV4KSArIGNvbnRlbnQgKyB0aGlzLnF1ZXJ5LnNsaWNlKHRoaXMuY3Vyc29ySW5kZXgpXHJcbiAgICAgIHRoaXMuY3Vyc29ySW5kZXggKz0gY29udGVudC5sZW5ndGhcclxuICAgIH1cclxuICAgIHRoaXMucmVmcmVzaERpc3BsYXkoKVxyXG4gICAgdGhpcy5zY2hlZHVsZVN1Z2dlc3Rpb25VcGRhdGUoKVxyXG4gIH0sXHJcblxyXG4gIGNsZWFyVGV4dCgpIHtcclxuICAgIHRoaXMucXVlcnkgPSBcIlwiXHJcbiAgICB0aGlzLmN1cnNvckluZGV4ID0gMFxyXG4gICAgdGhpcy5yZWZyZXNoRGlzcGxheSgpXHJcbiAgICB0aGlzLnNjaGVkdWxlU3VnZ2VzdGlvblVwZGF0ZSgpXHJcbiAgfSxcclxuXHJcbiAgbW92ZUxlZnQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJzb3JJbmRleCA+IDApIHtcclxuICAgICAgdGhpcy5jdXJzb3JJbmRleC0tXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZnJlc2hEaXNwbGF5KClcclxuICB9LFxyXG5cclxuICBtb3ZlUmlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJzb3JJbmRleCA8IHRoaXMucXVlcnkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuY3Vyc29ySW5kZXgrK1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZWZyZXNoRGlzcGxheSgpXHJcbiAgfSxcclxuXHJcbiAgb25TZWFyY2hCdXR0b25DbGljaygpIHtcclxuICAgIGlmICghbmF2R3VhcmQoKSkgcmV0dXJuXHJcbiAgICBpZiAoIXRoaXMucXVlcnkpIHtcclxuICAgICAgcm91dGVyLmJhY2soKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMucGVyZm9ybVNlYXJjaCgpXHJcbiAgfSxcclxuXHJcbiAgcGVyZm9ybVNlYXJjaCgpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaFN1Ym1pdExvY2tlZCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB0aGlzLm5vcm1hbGl6ZVdvcmQodGhpcy5xdWVyeSlcclxuICAgIHRoaXMua2V5Ym9hcmRIaWRkZW4gPSB0cnVlXHJcbiAgICB0aGlzLnJlZnJlc2hEaXNwbGF5KClcclxuXHJcbiAgICBpZiAoIW5vcm1hbGl6ZWQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMudmFsaWRhdGVRdWVyeShub3JtYWxpemVkKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlYXJjaFN1Ym1pdExvY2tlZCA9IHRydWVcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgdXJpOiBcIi9wYWdlcy9yZXN1bHRzXCIsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHF1ZXJ5OiBub3JtYWxpemVkLFxyXG4gICAgICAgIHNlYXJjaE1vZGU6IHRoaXMuc2VhcmNoTW9kZSB8fCBcIlwiLFxyXG4gICAgICAgIGluZmxlY3REZXB0aDogdGhpcy5pbmZsZWN0RGVwdGggfHwgXCIwXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICB2YWxpZGF0ZVF1ZXJ5KHF1ZXJ5KSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hNb2RlID09PSBcImluZmxlY3RcIikge1xyXG4gICAgICBpZiAoIXRoaXMuaXNFbmdsaXNoV29yZChxdWVyeSkpIHtcclxuICAgICAgICB0aGlzLnNob3dUb2FzdChcIuWPquiDvei+k+WFpeiLseaWh1wiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFzQ2hpbmVzZSA9IHRoaXMuaGFzQ2hpbmVzZShxdWVyeSlcclxuICAgIGNvbnN0IGhhc0VuZ2xpc2ggPSB0aGlzLmhhc0VuZ2xpc2gocXVlcnkpXHJcbiAgICBpZiAoaGFzQ2hpbmVzZSAmJiBoYXNFbmdsaXNoKSB7XHJcbiAgICAgIHRoaXMuc2hvd1RvYXN0KFwi6L6T5YWl6Z2e5rOVXCIpXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKGhhc0NoaW5lc2UpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzQ2hpbmVzZVF1ZXJ5KHF1ZXJ5KSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1RvYXN0KFwi6L6T5YWl6Z2e5rOVXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5pc0VuZ2xpc2hXb3JkKHF1ZXJ5KSkge1xyXG4gICAgICB0aGlzLnNob3dUb2FzdChcIui+k+WFpemdnuazlVwiKVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSxcclxuXHJcbiAgc2hvd1RvYXN0KG1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcclxuICAgIGlmIChub3cgLSB0aGlzLmxhc3RUb2FzdEF0IDwgdGhpcy50b2FzdENvb2xkb3duKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5sYXN0VG9hc3RBdCA9IG5vd1xyXG4gICAgcHJvbXB0LnNob3dUb2FzdCh7XHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uVG91Y2hTdGFydChldnQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2dClcclxuICAgIGlmIChwb2ludCkge1xyXG4gICAgICB0aGlzLnRvdWNoU3RhcnRYID0gcG9pbnQuY2xpZW50WFxyXG4gICAgICB0aGlzLnRvdWNoU3RhcnRZID0gcG9pbnQuY2xpZW50WVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uVG91Y2hFbmQoZXZ0KSB7XHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0VG91Y2hQb2ludChldnQpXHJcbiAgICBpZiAoIXBvaW50IHx8IHRoaXMudG91Y2hTdGFydFggPCAwKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVuZFggPSBwb2ludC5jbGllbnRYXHJcbiAgICBjb25zdCBlbmRZID0gcG9pbnQuY2xpZW50WVxyXG4gICAgY29uc3QgYXBwRGF0YSA9ICh0aGlzLiRhcHAgJiYgdGhpcy4kYXBwLiRkZWYgJiYgdGhpcy4kYXBwLiRkZWYuZGF0YSkgfHwge31cclxuICAgIGNvbnN0IHN3ID0gYXBwRGF0YS5zY3JlZW5XaWR0aCB8fCAyMTJcclxuICAgIGNvbnN0IHNoID0gYXBwRGF0YS5zY3JlZW5IZWlnaHQgfHwgNTIwXHJcbiAgICBjb25zdCBzdGFydHNJbkxlZnRRdWFydGVyID0gdGhpcy50b3VjaFN0YXJ0WCA8PSBzdyAqIDAuMjVcclxuICAgIGNvbnN0IGVuZHNBdFJpZ2h0UXVhcnRlciA9IGVuZFggPj0gc3cgKiAwLjc1XHJcbiAgICBjb25zdCBtb3N0bHlIb3Jpem9udGFsID0gTWF0aC5hYnMoZW5kWSAtIHRoaXMudG91Y2hTdGFydFkpIDw9IDEyMFxyXG4gICAgLy8gS2V5Ym9hcmQgdmlzaWJsZSDihpIgb25seSB0cmlnZ2VyIGZyb20gYWJvdmUgdGhlIGtleWJvYXJkICh0b3AgfjM1JSlcclxuICAgIGNvbnN0IHZhbGlkU3RhcnRab25lID0gdGhpcy5rZXlib2FyZEhpZGRlbiB8fCB0aGlzLnRvdWNoU3RhcnRZIDw9IHNoICogMC4zNVxyXG5cclxuICAgIGlmICghdGhpcy5zZWFyY2hTd2lwZUV4aXRMb2NrZWQgJiYgc3RhcnRzSW5MZWZ0UXVhcnRlciAmJiBlbmRzQXRSaWdodFF1YXJ0ZXIgJiYgbW9zdGx5SG9yaXpvbnRhbCAmJiB2YWxpZFN0YXJ0Wm9uZSkge1xyXG4gICAgICByb3V0ZXIuYmFjaygpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IC0xXHJcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gLTFcclxuICB9LFxyXG5cclxuICBnZXRUb3VjaFBvaW50KGV2dCkge1xyXG4gICAgaWYgKGV2dCAmJiBldnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZ0LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGV2dC5jaGFuZ2VkVG91Y2hlc1swXVxyXG4gICAgfVxyXG4gICAgaWYgKGV2dCAmJiBldnQudG91Y2hlcyAmJiBldnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBldnQudG91Y2hlc1swXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9LFxyXG5cclxuICByZWZyZXNoRGlzcGxheSgpIHtcclxuICAgIGlmICghdGhpcy5xdWVyeSkge1xyXG4gICAgICB0aGlzLnN0b3BNYXJxdWVlKClcclxuICAgICAgdGhpcy5jdXJzb3JJbmRleCA9IDBcclxuICAgICAgdGhpcy5kaXNwbGF5VGV4dCA9IFwiXCJcclxuICAgICAgdGhpcy5lbmdsaXNoU2VlZCA9IFwiXCJcclxuICAgICAgdGhpcy5lbmdsaXNoU3VnZ2VzdGlvbnNUZXh0ID0gXCJcIlxyXG4gICAgICB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uVG9rZW4rK1xyXG4gICAgICBzZXRTdWdnZXN0aW9uU2VlZChcIlwiKVxyXG4gICAgICBzZXRTdWdnZXN0aW9ucyhcIlwiKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jdXJzb3JJbmRleCA8IDApIHtcclxuICAgICAgdGhpcy5jdXJzb3JJbmRleCA9IDBcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmN1cnNvckluZGV4ID4gdGhpcy5xdWVyeS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jdXJzb3JJbmRleCA9IHRoaXMucXVlcnkubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucXVlcnkubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGggJiYgdGhpcy5rZXlib2FyZEhpZGRlbikge1xyXG4gICAgICB0aGlzLnN0YXJ0TWFycXVlZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0b3BNYXJxdWVlKClcclxuICAgICAgdGhpcy5kaXNwbGF5VGV4dCA9XHJcbiAgICAgICAgdGhpcy5xdWVyeS5zbGljZSgwLCB0aGlzLmN1cnNvckluZGV4KSArXHJcbiAgICAgICAgKHRoaXMua2V5Ym9hcmRIaWRkZW4gPyBcIlwiIDogXCJfXCIpICtcclxuICAgICAgICB0aGlzLnF1ZXJ5LnNsaWNlKHRoaXMuY3Vyc29ySW5kZXgpXHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUVuZ2xpc2hTZWVkKClcclxuICB9LFxyXG5cclxuICBzdGFydE1hcnF1ZWUoKSB7XHJcbiAgICB0aGlzLm1hcnF1ZWVTcGVlZCA9IHRoaXMuY2FsY01hcnF1ZWVTcGVlZCh0aGlzLnF1ZXJ5Lmxlbmd0aClcclxuICAgIHRoaXMuZGlzcGxheVRleHQgPSB0aGlzLnF1ZXJ5ICsgXCIgICBcIiArIHRoaXMucXVlcnlcclxuICAgIGlmICh0aGlzLm1hcnF1ZWVUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5tYXJxdWVlVGltZXIpXHJcbiAgICB9XHJcbiAgICB0aGlzLm1hcnF1ZWVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcnF1ZWVUaW1lciA9IG51bGxcclxuICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cclxuICAgICAgY29uc3QgZWwgPSB0aGlzLiRlbGVtZW50KFwibWFycXVlZS10ZXh0XCIpXHJcbiAgICAgIGlmIChlbCAmJiBlbC5zdGFydCkge1xyXG4gICAgICAgIGVsLnN0YXJ0KClcclxuICAgICAgfVxyXG4gICAgfSwgNTApXHJcbiAgfSxcclxuXHJcbiAgc3RvcE1hcnF1ZWUoKSB7XHJcbiAgICBpZiAodGhpcy5tYXJxdWVlVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFycXVlZVRpbWVyKVxyXG4gICAgICB0aGlzLm1hcnF1ZWVUaW1lciA9IG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IGVsID0gdGhpcy4kZWxlbWVudChcIm1hcnF1ZWUtdGV4dFwiKVxyXG4gICAgaWYgKGVsICYmIGVsLnN0b3ApIHtcclxuICAgICAgZWwuc3RvcCgpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY2FsY01hcnF1ZWVTcGVlZCh0ZXh0TGVuZ3RoKSB7XHJcbiAgICBjb25zdCBleHRyYSA9IE1hdGgubWF4KDAsIHRleHRMZW5ndGggLSB0aGlzLm1heExlbmd0aClcclxuICAgIC8vIOWtl+espui2iumVv+a7muWKqOi2iuW/q++8jOiMg+WbtCA0MH42MCBweC90aWNrXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoNDAsIE1hdGgubWluKDYwLCBNYXRoLnJvdW5kKDQwICsgZXh0cmEgKiAxLjUpKSlcclxuICB9LFxyXG5cclxuICB1cGRhdGVFbmdsaXNoU2VlZCgpIHtcclxuICAgIHZhciB0ZXh0ID0gdGhpcy5xdWVyeS5zbGljZSgwLCB0aGlzLmN1cnNvckluZGV4KS50b0xvd2VyQ2FzZSgpXHJcbiAgICB2YXIgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9bYS16XVthLXonLV0qJC8pXHJcbiAgICB0aGlzLmVuZ2xpc2hTZWVkID0gbWF0Y2ggJiYgbWF0Y2hbMF0gPyBtYXRjaFswXSA6IFwiXCJcclxuICB9LFxyXG5cclxuICByZWZyZXNoRW5nbGlzaFN1Z2dlc3Rpb25zKHNlZWQpIHtcclxuICAgIGlmICghdGhpcy5lbmdsaXNoU3VnZ2VzdGlvbkVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbGVhckVuZ2xpc2hTdWdnZXN0aW9ucygpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHRoaXMubm9ybWFsaXplRW5nbGlzaFNlZWQoc2VlZClcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25Ub2tlbiA9ICsrdGhpcy5lbmdsaXNoU3VnZ2VzdGlvblRva2VuXHJcbiAgICBpZiAoIW5vcm1hbGl6ZWQpIHtcclxuICAgICAgdGhpcy5lbmdsaXNoU3VnZ2VzdGlvbnNUZXh0ID0gXCJcIlxyXG4gICAgICBzZXRTdWdnZXN0aW9uU2VlZChcIlwiKVxyXG4gICAgICBzZXRTdWdnZXN0aW9ucyhcIlwiKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvYWRFbmdsaXNoU3VnZ2VzdGlvblNvdXJjZShub3JtYWxpemVkLmNoYXJBdCgwKSwgKHNvdXJjZSkgPT4ge1xyXG4gICAgICBpZiAoc3VnZ2VzdGlvblRva2VuICE9PSB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uVG9rZW4pIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFwcGx5RW5nbGlzaFN1Z2dlc3Rpb25zKG5vcm1hbGl6ZWQsIHNvdXJjZSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgc2NoZWR1bGVTdWdnZXN0aW9uVXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX3N1Z2dlc3Rpb25UaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3VnZ2VzdGlvblRpbWVyKVxyXG4gICAgICB0aGlzLl9zdWdnZXN0aW9uVGltZXIgPSBudWxsXHJcbiAgICB9XHJcbiAgICAvLyBEaXNhYmxlZCBvciBlbXB0eSBzZWVkIOKAlCBjbGVhciBzdWdnZXN0aW9ucyBpbW1lZGlhdGVseVxyXG4gICAgaWYgKCF0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uRW5hYmxlZCB8fCAhdGhpcy5lbmdsaXNoU2VlZCkge1xyXG4gICAgICB0aGlzLmNsZWFyRW5nbGlzaFN1Z2dlc3Rpb25zKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIHRoaXMuX3N1Z2dlc3Rpb25UaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZWxmLl9zdWdnZXN0aW9uVGltZXIgPSBudWxsXHJcbiAgICAgIHNlbGYucmVmcmVzaEVuZ2xpc2hTdWdnZXN0aW9ucyhzZWxmLmVuZ2xpc2hTZWVkKVxyXG4gICAgfSwgMjAwKVxyXG4gIH0sXHJcblxyXG4gIGxvYWRFbmdsaXNoU3VnZ2VzdGlvblNvdXJjZShsZXR0ZXIsIGRvbmUpIHtcclxuICAgIC8vIENhY2hlIGhpdCDigJQgdXNlIHByZS1wYXJzZWQgcm93c1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uUGFyc2VkLCBsZXR0ZXIpKSB7XHJcbiAgICAgIHRoaXMuX3RvdWNoRW5nbGlzaFN1Z2dlc3Rpb24obGV0dGVyKVxyXG4gICAgICBkb25lKHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25QYXJzZWRbbGV0dGVyXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICAvLyBNaWdyYXRlIGZyb20gb2xkIHRleHQgY2FjaGUgaWYgcHJlc2VudFxyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uQ2FjaGUsIGxldHRlcikpIHtcclxuICAgICAgdmFyIF9yb3dzID0gdGhpcy5lbmdsaXNoU3VnZ2VzdGlvbkNhY2hlW2xldHRlcl0gfHwgXCJcIlxyXG4gICAgICB2YXIgX3BhcnNlZCA9IF9yb3dzID8gdGhpcy5fcGFyc2VTdWdnZXN0aW9uTGluZXMoX3Jvd3MpIDogW11cclxuICAgICAgdGhpcy5fY2FjaGVFbmdsaXNoU3VnZ2VzdGlvbihsZXR0ZXIsIF9wYXJzZWQpXHJcbiAgICAgIGRlbGV0ZSB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uQ2FjaGVbbGV0dGVyXVxyXG4gICAgICBkb25lKF9wYXJzZWQpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25QZW5kaW5nW2xldHRlcl0pIHtcclxuICAgICAgdGhpcy5lbmdsaXNoU3VnZ2VzdGlvblBlbmRpbmdbbGV0dGVyXS5wdXNoKGRvbmUpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25QZW5kaW5nW2xldHRlcl0gPSBbZG9uZV1cclxuXHJcbiAgICBmaWxlLnJlYWRUZXh0KHtcclxuICAgICAgdXJpOiBcIi9jb21tb24vZGljdC93b3Jkcy93b3JkX1wiICsgbGV0dGVyICsgXCIudHh0XCIsXHJcbiAgICAgIGVuY29kaW5nOiBcInV0Zi04XCIsXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRleHQgPSBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiXCJcclxuICAgICAgICB2YXIgcGFyc2VkID0gdGV4dCA/IHRoaXMuX3BhcnNlU3VnZ2VzdGlvbkxpbmVzKHRleHQpIDogW11cclxuICAgICAgICB0aGlzLl9jYWNoZUVuZ2xpc2hTdWdnZXN0aW9uKGxldHRlciwgcGFyc2VkKVxyXG4gICAgICAgIHZhciBwZW5kaW5nID0gdGhpcy5lbmdsaXNoU3VnZ2VzdGlvblBlbmRpbmdbbGV0dGVyXSB8fCBbXVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uUGVuZGluZ1tsZXR0ZXJdXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwZW5kaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBwZW5kaW5nW2ldKHBhcnNlZClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYWNoZUVuZ2xpc2hTdWdnZXN0aW9uKGxldHRlciwgW10pXHJcbiAgICAgICAgdmFyIHBlbmRpbmcgPSB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uUGVuZGluZ1tsZXR0ZXJdIHx8IFtdXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25QZW5kaW5nW2xldHRlcl1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBlbmRpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHBlbmRpbmdbaV0oW10pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGxvYWRFbmdsaXNoU3VnZ2VzdGlvblNldHRpbmcoKSB7XHJcbiAgICBzdG9yYWdlLmdldCh7XHJcbiAgICAgIGtleTogXCJkaWNfZW5nbGlzaF9zdWdnZXN0aW9uc1wiLFxyXG4gICAgICBkZWZhdWx0OiBcIjFcIixcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEgJiYgKGRhdGEudmFsdWUgfHwgZGF0YSlcclxuICAgICAgICB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uRW5hYmxlZCA9IHZhbHVlICE9PSBcIjBcIlxyXG4gICAgICAgIGlmICghdGhpcy5lbmdsaXNoU3VnZ2VzdGlvbkVuYWJsZWQpIHtcclxuICAgICAgICAgIHRoaXMuY2xlYXJFbmdsaXNoU3VnZ2VzdGlvbnMoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUVuZ2xpc2hTZWVkKClcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVTdWdnZXN0aW9uVXBkYXRlKClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChkYXRhLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2ggc3RvcmFnZS5nZXQgZmFpbGVkOiBcIiArIGNvZGUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgbG9hZFNlYXJjaFN3aXBlRXhpdFNldHRpbmcoKSB7XHJcbiAgICBzdG9yYWdlLmdldCh7XHJcbiAgICAgIGtleTogXCJkaWNfc2VhcmNoX3N3aXBlX2V4aXRfbG9ja2VkXCIsXHJcbiAgICAgIGRlZmF1bHQ6IFwiMVwiLFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YSAmJiAoZGF0YS52YWx1ZSB8fCBkYXRhKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoU3dpcGVFeGl0TG9ja2VkID0gdmFsdWUgIT09IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChkYXRhLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2ggc3dpcGUgc2V0dGluZyBnZXQgZmFpbGVkOiBcIiArIGNvZGUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2xlYXJFbmdsaXNoU3VnZ2VzdGlvbnMoKSB7XHJcbiAgICB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uVG9rZW4rK1xyXG4gICAgaWYgKHRoaXMuX3N1Z2dlc3Rpb25UaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3VnZ2VzdGlvblRpbWVyKVxyXG4gICAgICB0aGlzLl9zdWdnZXN0aW9uVGltZXIgPSBudWxsXHJcbiAgICB9XHJcbiAgICB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uc1RleHQgPSBcIlwiXHJcbiAgICBzZXRTdWdnZXN0aW9uU2VlZChcIlwiKVxyXG4gICAgc2V0U3VnZ2VzdGlvbnMoXCJcIilcclxuICB9LFxyXG5cclxuICBfdG91Y2hFbmdsaXNoU3VnZ2VzdGlvbihsZXR0ZXIpIHtcclxuICAgIHZhciBpbmRleCA9IHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25PcmRlci5pbmRleE9mKGxldHRlcilcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25PcmRlci5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICB9XHJcbiAgICB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uT3JkZXIucHVzaChsZXR0ZXIpXHJcbiAgfSxcclxuXHJcbiAgX2NhY2hlRW5nbGlzaFN1Z2dlc3Rpb24obGV0dGVyLCByb3dzKSB7XHJcbiAgICB0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uUGFyc2VkW2xldHRlcl0gPSByb3dzXHJcbiAgICB0aGlzLl90b3VjaEVuZ2xpc2hTdWdnZXN0aW9uKGxldHRlcilcclxuICAgIHdoaWxlICh0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uT3JkZXIubGVuZ3RoID4gMykge1xyXG4gICAgICBkZWxldGUgdGhpcy5lbmdsaXNoU3VnZ2VzdGlvblBhcnNlZFt0aGlzLmVuZ2xpc2hTdWdnZXN0aW9uT3JkZXIuc2hpZnQoKV1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhcHBseUVuZ2xpc2hTdWdnZXN0aW9ucyhub3JtYWxpemVkLCByb3dzKSB7XHJcbiAgICB2YXIgaXRlbXMgPSBbXVxyXG4gICAgdmFyIHNlZW4gPSB7fVxyXG4gICAgdGhpcy5zY2FuRW5nbGlzaFN1Z2dlc3Rpb25Sb3dzKHJvd3MsIG5vcm1hbGl6ZWQsIGl0ZW1zLCBzZWVuKVxyXG4gICAgdmFyIHN1Z2dlc3Rpb25zID0gdGhpcy5idWlsZEVuZ2xpc2hTdWdnZXN0aW9ucyhub3JtYWxpemVkLCBpdGVtcywgc2Vlbikuam9pbihcInxcIilcclxuICAgIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25zVGV4dCA9IHN1Z2dlc3Rpb25zXHJcbiAgICBzZXRTdWdnZXN0aW9uU2VlZChub3JtYWxpemVkKVxyXG4gICAgc2V0U3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbnMpXHJcbiAgfSxcclxuXHJcbiAgc2NhbkVuZ2xpc2hTdWdnZXN0aW9uUm93cyhyb3dzLCBzZWVkLCBpdGVtcywgc2Vlbikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciByb3cgPSByb3dzW2ldXHJcbiAgICAgIGlmICghcm93IHx8ICFyb3cuZW50cnlJZCB8fCAhL15bMC05YS16XSskLy50ZXN0KHJvdy5lbnRyeUlkKSkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgdmFyIHdvcmQgPSB0aGlzLm5vcm1hbGl6ZUVuZ2xpc2hTZWVkKHJvdy53b3JkKVxyXG4gICAgICBpZiAoIXdvcmQgfHwgd29yZCA9PT0gc2VlZCB8fCBzZWVuW3dvcmRdIHx8IHdvcmQuaW5kZXhPZihzZWVkKSAhPT0gMCkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgc2Vlblt3b3JkXSA9IHRydWVcclxuICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgd29yZDogd29yZCxcclxuICAgICAgICBzY29yZTogdGhpcy5zY29yZUVuZ2xpc2hDYW5kaWRhdGUoc2VlZCwgd29yZCwgdGhpcy5fZXhwYW5kVGFnKHJvdy50YWdzIHx8IFwiXCIpKVxyXG4gICAgICB9KVxyXG4gICAgICAvLyBFYXJseSB0ZXJtaW5hdGlvbiDigJQgZW5vdWdoIGNhbmRpZGF0ZXMgZm9yIHNjb3JpbmcgdG8gcGljayB0aGUgYmVzdCAzMFxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID49IDgwKSB7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJ1aWxkRW5nbGlzaFN1Z2dlc3Rpb25zKHNlZWQsIGl0ZW1zLCBzZWVuKSB7XHJcbiAgICBpdGVtcy5zb3J0KChsZWZ0LCByaWdodCkgPT4ge1xyXG4gICAgICBpZiAocmlnaHQuc2NvcmUgIT09IGxlZnQuc2NvcmUpIHtcclxuICAgICAgICByZXR1cm4gcmlnaHQuc2NvcmUgLSBsZWZ0LnNjb3JlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxlZnQud29yZC5sZW5ndGggLSByaWdodC53b3JkLmxlbmd0aFxyXG4gICAgfSlcclxuICAgIGNvbnN0IG91dHB1dCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aCAmJiBvdXRwdXQubGVuZ3RoIDwgMzA7IGkrKykge1xyXG4gICAgICBvdXRwdXQucHVzaChpdGVtc1tpXS53b3JkKVxyXG4gICAgfVxyXG4gICAgaWYgKHNlZWQubGVuZ3RoID49IDIpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFTkdMSVNIX1NVRkZJWEVTLmxlbmd0aCAmJiBvdXRwdXQubGVuZ3RoIDwgMzA7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHN1ZmZpeCA9IEVOR0xJU0hfU1VGRklYRVNbaV1cclxuICAgICAgICBjb25zdCBjb21iaW5lZCA9IHNlZWQgKyBzdWZmaXhcclxuICAgICAgICBpZiAoIXNlZW5bY29tYmluZWRdICYmIG91dHB1dC5pbmRleE9mKHN1ZmZpeCkgPCAwKSB7XHJcbiAgICAgICAgICBvdXRwdXQucHVzaChzdWZmaXgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0XHJcbiAgfSxcclxuXHJcbiAgc2NvcmVFbmdsaXNoQ2FuZGlkYXRlKHNlZWQsIHdvcmQsIHRhZykge1xyXG4gICAgbGV0IHNjb3JlID0gMTAwIC0gKHdvcmQubGVuZ3RoIC0gc2VlZC5sZW5ndGgpICogNFxyXG4gICAgY29uc3QgdGFncyA9IHRhZyB8fCBcIlwiXHJcbiAgICBpZiAodGFncy5pbmRleE9mKFwiemtcIikgPj0gMCkge1xyXG4gICAgICBzY29yZSArPSA0MFxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ3MuaW5kZXhPZihcImdrXCIpID49IDApIHtcclxuICAgICAgc2NvcmUgKz0gMzZcclxuICAgIH1cclxuICAgIGlmICh0YWdzLmluZGV4T2YoXCJjZXQ0XCIpID49IDApIHtcclxuICAgICAgc2NvcmUgKz0gMzBcclxuICAgIH1cclxuICAgIGlmICh0YWdzLmluZGV4T2YoXCJjZXQ2XCIpID49IDAgfHwgdGFncy5pbmRleE9mKFwia3lcIikgPj0gMCkge1xyXG4gICAgICBzY29yZSArPSAxOFxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ3MuaW5kZXhPZihcInRvZWZsXCIpID49IDAgfHwgdGFncy5pbmRleE9mKFwiaWVsdHNcIikgPj0gMCkge1xyXG4gICAgICBzY29yZSArPSA4XHJcbiAgICB9XHJcbiAgICBpZiAodGFncy5pbmRleE9mKFwiZ3JlXCIpID49IDApIHtcclxuICAgICAgc2NvcmUgLT0gOFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNjb3JlXHJcbiAgfSxcclxuXHJcbiAgbm9ybWFsaXplRW5nbGlzaFNlZWQodmFsdWUpIHtcclxuICAgIGNvbnN0IHRleHQgPSAodmFsdWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9bYS16XVthLXonLV0qJC8pXHJcbiAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMF0gPyBtYXRjaFswXSA6IFwiXCJcclxuICB9LFxyXG5cclxuICBub3JtYWxpemVXb3JkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgfSxcclxuXHJcbiAgaXNFbmdsaXNoV29yZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIC9eW2Etel1bYS16Jy1dezAsMjB9JC8udGVzdCh2YWx1ZSB8fCBcIlwiKVxyXG4gIH0sXHJcblxyXG4gIGhhc0VuZ2xpc2godmFsdWUpIHtcclxuICAgIHJldHVybiAvW2Etel0vLnRlc3QodmFsdWUgfHwgXCJcIilcclxuICB9LFxyXG5cclxuICBoYXNDaGluZXNlKHZhbHVlKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gdmFsdWUgfHwgXCJcIlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNoID0gdGV4dC5jaGFyQXQoaSlcclxuICAgICAgaWYgKGNoID49IFwiXFx1NGUwMFwiICYmIGNoIDw9IFwiXFx1OWZmZlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgaXNDaGluZXNlUXVlcnkodmFsdWUpIHtcclxuICAgIGNvbnN0IHRleHQgPSB2YWx1ZSB8fCBcIlwiXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2ggPSB0ZXh0LmNoYXJBdChpKVxyXG4gICAgICBpZiAoY2ggPCBcIlxcdTRlMDBcIiB8fCBjaCA+IFwiXFx1OWZmZlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0Lmxlbmd0aCA+IDBcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwODEzO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcC1yb3cge1xyXG4gIHdpZHRoOiA0MzJweDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYmFjay1idG4sXHJcbi5jaGVjay1idG4ge1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmlucHV0LWJveCB7XHJcbiAgd2lkdGg6IDI5NnB4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxNzJiO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uaW5wdXQtdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5lZGl0LXJvdyB7XHJcbiAgd2lkdGg6IDI1NnB4O1xyXG4gIGhlaWdodDogNzJweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb3ZlLWxlZnQtYnRuLFxyXG4ubW92ZS1yaWdodC1idG4ge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogNzJweDtcclxufVxyXG5cclxuLmNsZWFyLWJ0biB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG59XHJcblxyXG4uaW5wdXQtYm94LXJlY3Qge1xyXG4gIHdpZHRoOiAyOTZweDtcclxufVxyXG5cclxuLmlucHV0LXRleHQtcmVjdCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uaW5wdXQtYm94LWNpcmNsZSB7XHJcbiAgd2lkdGg6IDYyJTtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmlucHV0LXRleHQtY2lyY2xlIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5oaW50LWFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXg6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhpbnQtdGV4dCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5wYWdlLWNpcmNsZSB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5wYWdlLXJlY3Qge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX2RpY1V0aWwiLCJyZXF1aXJlIiwiX3N1Z2dlc3Rpb25TdGF0ZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIktFWV9NQVBTIiwiZnVsbCIsInNpZ24iLCJzaWduX2pwIiwic2lnbjYyIiwic2lnbjYyX2pwIiwiZnVsbDYyIiwidDkiLCJkb1NlYXJjaERpYyIsIndvcmQiLCJsYW5nIiwiY2IiLCJyZXN1bHQiLCJTaW1wbGVJbnB1dE1ldGhvZCIsImdldEhhbnppIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVsZXRlTGFzdCIsInQiLCJzdWJzdHIiLCJsZW5ndGgiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcm9wcyIsImhpZGUiLCJrZXlib2FyZHR5cGUiLCJtYXhsZW5ndGgiLCJ2aWJyYXRlbW9kZSIsInNjcmVlbnR5cGUiLCJkYXRhIiwiY3ZhbCIsInJlc3VsdExpc3QiLCJyZXN1bHRMaXN0MiIsIndhaXRpbmdMaXN0Iiwid2FpdGluZ0luZGV4IiwibGFzdFdhaXRpbmdTdHIiLCJkb3duRmxhZyIsIm51bUZsYWciLCJudW1GbGFnX2pwIiwidXBwZXJGbGFnIiwiY3ZhbExpc3QiLCJwZXJjZW50NjciLCJwZXJjZW50NjYiLCJzY3JlZW5XaWR0aCIsImtleWJvYXJkTGVmdE9mZnNldCIsImtleXMiLCJvbkluaXQiLCJ0ZW1wQ3ZhbExpc3QiLCJpIiwicHVzaCIsIiRlbWl0IiwiJHdhdGNoIiwib25TdWdnZXN0aW9uc0NoYW5nZSIsInJlc2V0UmVzbHV0TGlzdCIsImJpbmQiLCJvbkRlc3Ryb3kiLCIkdW53YXRjaCIsImFkZEFsbFR4dCIsInR4dCIsImNvbnRlbnQiLCJvblJzU2VsZWN0Iiwib25WaWJyYXRlIiwic2VlZCIsIm5vcm1hbGl6ZUVuZ2xpc2hTZWVkIiwiZ2V0U3VnZ2VzdGlvblNlZWQiLCJpbmRleE9mIiwic2xpY2UiLCJjbGVhcldhaXRpbmciLCJvbkJ0bkNsaWNrIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsIndhdGluZ1N0ciIsImdldEVuZ2xpc2hSZXN1bHRzIiwic2V0UmVzdWx0TGlzdEFsbCIsImdldFJlc3VsdEJ5V29yZCIsImFycmF5Iiwicm93U2l6ZSIsInBhcnNlSW50IiwidmFsIiwidGhhdCIsInNlZWRWYWx1ZSIsInBhcnNlRW5nbGlzaFN1Z2dlc3Rpb25zIiwiZ2V0U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsIm51bSIsIm9uU2VsZWN0V2FpdGluZyIsInRvU3RyaW5nIiwid2F0Y2hIaWRlUHJvcHNDaGFuZ2UiLCJuZXdWIiwidmlzaWJsZSIsIndhdGNoTWF4TGVuZ3RoUHJvcHNDaGFuZ2UiLCJ3YXRjaEtleWJvYXJkVHlwZVByb3BzQ2hhbmdlIiwidmlicmF0b3IiLCJ2aWJyYXRlIiwibW9kZSIsImhhbmRlbFNjcm9sbCIsImV2ZW50IiwicGVyY2VudFRlbXA2NyIsInNjcm9sbFgiLCJwZXJjZW50VGVtcDY2IiwicHVzaEN2YWwiLCJ0ZW1wIiwidmFsdWUiLCJ0ZXh0IiwibWF0Y2giLCJwYXJ0cyIsIm91dHB1dCIsIml0ZW0iLCJUQVJHRVRfSUQiLCJUQVJHRVRfV0lEVEgiLCJUQVJHRVRfSEVJR0hUIiwiVEFSR0VUX1BST0ZJTEUiLCJUQVJHRVRfU0hBUEUiLCJpZCIsIndpZHRoIiwiaGVpZ2h0IiwicHJvZmlsZSIsInNoYXBlIiwiQkFTRTM2X0RJR0lUUyIsIkJBU0U2NFVSTF9ESUdJVFMiLCJwYXJzZUJhc2UzNiIsInRlc3QiLCJkaWdpdCIsImNoYXJBdCIsImRlY29kZVByZWZpeEZpZWxkIiwicHJldmlvdXMiLCJwcmVmaXhMZW5ndGgiLCJkZWNvZGVCYXNlNjRCeXRlcyIsImJ5dGVzIiwiYWNjdW11bGF0b3IiLCJiaXRDb3VudCIsImRpdmlzb3IiLCJNYXRoIiwicG93IiwiZmxvb3IiLCJkZWNvZGVEZWx0YUlkcyIsImlkcyIsImN1cnJlbnQiLCJkZWx0YSIsInNoaWZ0IiwiYnl0ZSIsInBheWxvYWQiLCJwYXJzZUluZmxlY3Rpb25WYWx1ZSIsImVudHJ5SWQiLCJsYXN0TmF2QXQiLCJOQVZfTE9DS19NUyIsIm5hdkd1YXJkIiwibm93IiwiRGF0ZSIsIl9zZWVkIiwiX3N1Z2dlc3Rpb25zIiwiX2NhbGxiYWNrIiwic2V0U3VnZ2VzdGlvblNlZWQiLCJ2Iiwic2V0U3VnZ2VzdGlvbnMiLCJkaWN0IiwiX2RpYyIsIl9kaWNfanAiLCJpbml0RGljdCIsInB5Mmh6IiwicHkyaHoyIiwia2V5IiwiY2giLCJyb21hamkya2FuamkiLCJnZXRTaW5nbGVIYW56aSIsInBpbnlpbiIsIm1heCIsIm1pbiIsImxlbiIsImhlYWQiLCJycyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJ3aW5kb3ciLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfc3lzdGVtNSIsIl9kaWN0Q29kZWMiLCJfYnVpbGRUYXJnZXQiLCJfbmF2R3VhcmQiLCJFTkdMSVNIX1NVRkZJWEVTIiwiVEFHX0NPREVfTUFQIiwieiIsImciLCJrIiwiVEFHX0xBQkVMUyIsInByb3RlY3RlZCIsInF1ZXJ5UGFyYW0iLCJhdXRvU2VhcmNoIiwic2VhcmNoTW9kZSIsImluZmxlY3REZXB0aCIsInNjcmVlblByb2ZpbGUiLCJwcml2YXRlIiwicXVlcnkiLCJjdXJzb3JJbmRleCIsImRpc3BsYXlUZXh0IiwiZW5nbGlzaFNlZWQiLCJlbmdsaXNoU3VnZ2VzdGlvbnNUZXh0Iiwia2V5Ym9hcmRIaWRkZW4iLCJrZXlib2FyZFR5cGUiLCJzY3JlZW5UeXBlIiwibWF4TGVuZ3RoIiwidmlicmF0ZU1vZGUiLCJsYXN0VG9hc3RBdCIsInRvYXN0Q29vbGRvd24iLCJ0b3VjaFN0YXJ0WCIsInRvdWNoU3RhcnRZIiwiZGVzdHJveWVkIiwiYXV0b1NlYXJjaFBlbmRpbmciLCJlbmdsaXNoU3VnZ2VzdGlvbkNhY2hlIiwiZW5nbGlzaFN1Z2dlc3Rpb25QYXJzZWQiLCJlbmdsaXNoU3VnZ2VzdGlvblBlbmRpbmciLCJlbmdsaXNoU3VnZ2VzdGlvbk9yZGVyIiwiZW5nbGlzaFN1Z2dlc3Rpb25Ub2tlbiIsImVuZ2xpc2hTdWdnZXN0aW9uRW5hYmxlZCIsInNlYXJjaFN3aXBlRXhpdExvY2tlZCIsInNlYXJjaFN1Ym1pdExvY2tlZCIsIl9zdWdnZXN0aW9uVGltZXIiLCJhdXRvU2VhcmNoVGltZXIiLCJtYXJxdWVlVGltZXIiLCJ0YXBUaW1lcyIsIm1hcnF1ZWVBY3RpdmUiLCJtYXJxdWVlU3BlZWQiLCJfZXhwYW5kVGFnIiwicyIsInJlcGxhY2UiLCJtYXNrIiwibGFiZWxzIiwiYml0Iiwiam9pbiIsIm1hcCIsImMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiX2RlY29kZVdvcmRQcmVmaXgiLCJwcmV2V29yZCIsIl9wYXJzZVN1Z2dlc3Rpb25MaW5lcyIsInJvd3MiLCJvdXQiLCJ0YWdzIiwibG9hZEVuZ2xpc2hTdWdnZXN0aW9uU2V0dGluZyIsImxvYWRTZWFyY2hTd2lwZUV4aXRTZXR0aW5nIiwiYXBwbHlTY3JlZW5JbmZvIiwiYnVpbGRUYXJnZXQiLCJhcHAiLCIkYXBwIiwiJGRlZiIsImRldmljZSIsImdldEluZm8iLCJzdWNjZXNzIiwidXBkYXRlU2NyZWVuSW5mbyIsInJlZnJlc2hEaXNwbGF5IiwiZmFpbCIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInBlcmZvcm1TZWFyY2giLCJzY3JlZW5TaGFwZSIsIk51bWJlciIsImdldE1heExlbmd0aCIsImNsZWFyVGltZW91dCIsInN0b3BNYXJxdWVlIiwib25TaG93Iiwib25SZWFkeSIsIm9uQmFja1ByZXNzIiwidG9nZ2xlS2V5Ym9hcmQiLCJvbklucHV0Qm94Q2xpY2siLCJyb3V0ZXIiLCJ1cmkiLCJwYXJhbXMiLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJldnQiLCJkZXRhaWwiLCJvbktleURvd24iLCJKU09OIiwic3RyaW5naWZ5Iiwib25EZWxldGUiLCJzY2hlZHVsZVN1Z2dlc3Rpb25VcGRhdGUiLCJvbkNvbXBsZXRlIiwiY2xlYXJUZXh0IiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJvblNlYXJjaEJ1dHRvbkNsaWNrIiwiYmFjayIsIm5vcm1hbGl6ZWQiLCJub3JtYWxpemVXb3JkIiwidmFsaWRhdGVRdWVyeSIsImlzRW5nbGlzaFdvcmQiLCJzaG93VG9hc3QiLCJoYXNDaGluZXNlIiwiaGFzRW5nbGlzaCIsImlzQ2hpbmVzZVF1ZXJ5IiwibWVzc2FnZSIsInByb21wdCIsImR1cmF0aW9uIiwib25Ub3VjaFN0YXJ0IiwicG9pbnQiLCJnZXRUb3VjaFBvaW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoRW5kIiwiZW5kWCIsImVuZFkiLCJhcHBEYXRhIiwic3ciLCJzaCIsInNjcmVlbkhlaWdodCIsInN0YXJ0c0luTGVmdFF1YXJ0ZXIiLCJlbmRzQXRSaWdodFF1YXJ0ZXIiLCJtb3N0bHlIb3Jpem9udGFsIiwiYWJzIiwidmFsaWRTdGFydFpvbmUiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoZXMiLCJzdGFydE1hcnF1ZWUiLCJ1cGRhdGVFbmdsaXNoU2VlZCIsImNhbGNNYXJxdWVlU3BlZWQiLCJlbCIsIiRlbGVtZW50Iiwic3RhcnQiLCJzdG9wIiwidGV4dExlbmd0aCIsImV4dHJhIiwicm91bmQiLCJyZWZyZXNoRW5nbGlzaFN1Z2dlc3Rpb25zIiwiY2xlYXJFbmdsaXNoU3VnZ2VzdGlvbnMiLCJzdWdnZXN0aW9uVG9rZW4iLCJsb2FkRW5nbGlzaFN1Z2dlc3Rpb25Tb3VyY2UiLCJzb3VyY2UiLCJhcHBseUVuZ2xpc2hTdWdnZXN0aW9ucyIsInNlbGYiLCJsZXR0ZXIiLCJkb25lIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX3RvdWNoRW5nbGlzaFN1Z2dlc3Rpb24iLCJfcm93cyIsIl9wYXJzZWQiLCJfY2FjaGVFbmdsaXNoU3VnZ2VzdGlvbiIsImZpbGUiLCJyZWFkVGV4dCIsImVuY29kaW5nIiwicGFyc2VkIiwicGVuZGluZyIsInN0b3JhZ2UiLCJnZXQiLCJpbmRleCIsInNwbGljZSIsIml0ZW1zIiwic2VlbiIsInNjYW5FbmdsaXNoU3VnZ2VzdGlvblJvd3MiLCJzdWdnZXN0aW9ucyIsImJ1aWxkRW5nbGlzaFN1Z2dlc3Rpb25zIiwicm93Iiwic2NvcmUiLCJzY29yZUVuZ2xpc2hDYW5kaWRhdGUiLCJzb3J0IiwibGVmdCIsInJpZ2h0Iiwic3VmZml4IiwiY29tYmluZWQiLCJ0YWciLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBb1VBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBOzRCQUNBLElBQUFDLFdBQUFDLG9CQUFBOzRCQUNBLElBQUFDLG1CQUFBRCxvQkFBQTs0QkFBbUcsU0FBQUgsdUJBQUFLLENBQUE7Z0NBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBO29DQUFBRSxTQUFBRjtnQ0FBQTs0QkFBQTs0QkFDbkcsTUFBTUcsV0FBVztnQ0FDZkMsTUFBTTtvQ0FDSjt3Q0FBQzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSztxQ0FBSTtvQ0FDbEQ7d0NBQUM7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQUs7cUNBQUk7b0NBQzdDO3dDQUFDO3dDQUFLO3dDQUFLO3dDQUFLO3dDQUFLO3dDQUFLO3dDQUFLO3FDQUFJO2lDQUNwQztnQ0FDREMsTUFBTTtvQ0FDSjt3Q0FBQzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSztxQ0FBSTtvQ0FDbEQ7d0NBQUM7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQVU7d0NBQVU7d0NBQUs7d0NBQUs7cUNBQUk7b0NBQzVEO3dDQUFDO3dDQUFLO3dDQUFLO3dDQUFLO3dDQUFLO3dDQUFLO3dDQUFLO3dDQUFVO3dDQUFVO3FDQUFJO2lDQUN4RDtnQ0FDREMsU0FBUztvQ0FDUDt3Q0FBQzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSztxQ0FBSTtvQ0FDbEQ7d0NBQUM7d0NBQUs7d0NBQVU7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQVU7d0NBQVU7d0NBQUs7d0NBQUs7cUNBQUk7b0NBQ2pFO3dDQUFDO3dDQUFLO3dDQUFLO3dDQUFLO3dDQUFVO3dDQUFLO3dDQUFLO3dDQUFVO3dDQUFVO3FDQUFJO2lDQUM3RDtnQ0FDREMsUUFBUTtvQ0FDTjt3Q0FBQzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSztxQ0FBSTtvQ0FDeEM7d0NBQUM7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQVU7d0NBQVU7cUNBQUk7b0NBQzdDO3dDQUFDO3dDQUFLO3dDQUFLO3dDQUFLO3dDQUFLO3FDQUFJO2lDQUMxQjtnQ0FDREMsV0FBVztvQ0FDVDt3Q0FBQzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSzt3Q0FBSztxQ0FBSTtvQ0FDeEM7d0NBQUM7d0NBQVU7d0NBQUs7d0NBQUs7d0NBQUs7d0NBQVU7d0NBQVU7cUNBQUk7b0NBQ2xEO3dDQUFDO3dDQUFLO3dDQUFLO3dD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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OzRCQUFLLFFBQVM7NEJBQUksS0FBTTs0QkFBTSxJQUFLOzRCQUFVLE9BQVE7NEJBQUssS0FBTTs0QkFBSSxJQUFLOzRCQUE0RCxJQUFLOzRCQUFVLE9BQVE7NEJBQU8sT0FBUTs0QkFBSyxNQUFPOzRCQUFRLElBQUs7NEJBQTZCLE1BQU87NEJBQU0sSUFBSzs0QkFBYSxJQUFLOzRCQUFVLElBQUs7NEJBQWlCLE1BQU87NEJBQU0sTUFBTzs0QkFBSyxNQUFPOzRCQUFJLEtBQU07NEJBQVMsTUFBTzs0QkFBUyxNQUFPOzRCQUFLLE1BQU87NEJBQVMsT0FBUTs0QkFBTSxJQUFLOzRCQUFJLElBQUs7NEJBQVksS0FBTTs0QkFBSSxJQUFLOzRCQUEwQixPQUFROzRCQUFLLE1BQU87NEJBQUksT0FBUTs0QkFBTSxNQUFPOzRCQUFJLE9BQVE7NEJBQU8sTUFBTzs0QkFBSSxJQUFLOzRCQUFhLE1BQU87NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFJLElBQUs7NEJBQWEsSUFBSzs0QkFBUyxLQUFNOzRCQUE2QixNQUFPOzRCQUFJLEtBQU07NEJBQWUsVUFBVzs0QkFBSSxRQUFTOzRCQUFJLE9BQVE7NEJBQUssS0FBTTs0QkFBTyxJQUFLOzRCQUEwQixNQUFPOzRCQUFJLEtBQU07NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFLLElBQUs7NEJBQXFDLFVBQVc7NEJBQUksT0FBUTs0QkFBSyxNQUFPOzRCQUFNLFVBQVc7NEJBQUksS0FBTTs0QkFBYyxNQUFPOzRCQUFJLE1BQU87NEJBQUssTUFBTzs0QkFBSyxNQUFPOzRCQUFJLE9BQVE7NEJBQUssTUFBTzs0QkFBTSxNQUFPOzRCQUFLLFFBQVM7NEJBQUksTUFBTzs0QkFBSyxPQUFROzRCQUFLLEtBQU07NEJBQTBFLE1BQU87NEJBQU8sS0FBTTs0QkFBSyxNQUFPOzRCQUFJLE9BQVE7NEJBQUksTUFBTzs0QkFBUSxNQUFPOzRCQUFJLE1BQU87NEJBQU0sTUFBTzs0QkFBTyxNQUFPOzRCQUFLLE9BQVE7NEJBQUksS0FBTTs0QkFBSSxRQUFTOzRCQUFLLE1BQU87NEJBQWUsT0FBUTs0QkFBZSxNQUFPOzRCQUFJLE1BQU87NEJBQUssT0FBUTs0QkFBSyxNQUFPOzRCQUFLLE1BQU87NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFPLEtBQU07NEJBQWtELEtBQU07NEJBQUssTUFBTzs0QkFBSSxTQUFVOzRCQUFJLElBQUs7NEJBQW1CLE1BQU87NEJBQUssT0FBUTs0QkFBSSxTQUFVOzRCQUFJLFFBQVM7NEJBQUssU0FBVTs0QkFBSSxNQUFPOzRCQUFJLElBQUs7NEJBQXdCLEtBQU07NEJBQW1DLE1BQU87NEJBQUksTUFBTzs0QkFBTSxNQUFPOzRCQUFJLE1BQU87NEJBQXFCLE1BQU87NEJBQU0sTUFBTzs0QkFBSyxRQUFTOzRCQUFJLE9BQVE7NEJBQUssS0FBTTs0QkFBYSxNQUFPOzRCQUFnQixPQUFROzRCQUFJLEtBQU07NEJBQUksS0FBTTs0QkFBa0IsUUFBUzs0QkFBSSxLQUFNOzRCQUFLLE1BQU87NEJBQUksSUFBSzs0QkFBd0QsUUFBUzs0QkFBSSxLQUFNOzRCQUFJLFFBQVM7NEJBQUksS0FBTTs0QkFBSSxNQUFPOzRCQUFJLE9BQVE7NEJBQUssS0FBTTs0QkFBSSxLQUFNOzRCQUFLLE9BQVE7NEJBQUksTUFBTzs0QkFBSSxRQUFTOzRCQUFJLElBQUs7NEJBQWtCLE9BQVE7NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFPLFFBQVM7NEJBQUksUUFBUzs0QkFBSSxJQUFLOzRCQUFnQixNQUFPOzRCQUFLLFFBQVM7NEJBQUksTUFBTzs0QkFBSSxPQUFROzRCQUFJLE9BQVE7NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFLLE9BQVE7NEJBQUksT0FBUTs0QkFBTSxLQUFNOzRCQUFxQixPQUFROzRCQUFNLEtBQU07NEJBQUksTUFBTzs0QkFBSyxRQUFTOzRCQUFLLFFBQVM7NEJBQUksTUFBTzs0QkFBeUIsUUFBUzs0QkFBSyxNQUFPOzRCQUFJLE1BQU87NEJBQUksS0FBTTs0QkFBTSxNQUFPOzRCQUFRLE1BQU87NEJBQUksT0FBUTs0QkFBSSxLQUFNOzRCQUFPLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFPLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFLLEtBQU07NEJBQVksTUFBTzs0QkFBSSxLQUFNOzRCQUFNLElBQUs7NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFtQixNQUFPOzRCQUFpQyxNQUFPOzRCQUFNLE1BQU87NEJBQUssTUFBTzs0QkFBTyxLQUFNOzRCQUFtQyxNQUFPOzRCQUFLLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLFFBQVM7NEJBQUksTUFBTzs0QkFBTSxNQUFPOzRCQUFLLE9BQVE7NEJBQUksS0FBTTs0QkFBTSxLQUFNOzRCQUFZLE9BQVE7NEJBQUksS0FBTTs0QkFBZ0UsTUFBTzs0QkFBSSxPQUFROzRCQUFJLE9BQVE7NEJBQU8sUUFBUzs0QkFBSSxNQUFPOzRCQUFJLElBQUs7NEJBQWEsTUFBTzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQVMsSUFBSzs0QkFBTSxJQUFLOzRCQUFRLFVBQVc7NEJBQUksT0FBUTs0QkFBTSxNQUFPOzRCQUFLLE9BQVE7NEJBQUksS0FBTTs0QkFBbUIsT0FBUTs0QkFBSSxLQUFNOzRCQUFrQixNQUFPOzRCQUFLLE1BQU87NEJBQUssS0FBTTs0QkFBTyxPQUFROzRCQUFNLE1BQU87NEJBQUksTUFBTzs0QkFBSSxTQUFVOzRCQUFJLFdBQVk7NEJBQUssS0FBTTs0QkFBSSxLQUFNOzRCQUFLLE1BQU87NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFNLElBQUs7NEJBQVEsS0FBTTs0QkFBSSxNQUFPOzRCQUFJLE9BQVE7NEJBQUksTUFBTzs0QkFBTyxPQUFROzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxLQUFNOzRCQUFPLE1BQU87NEJBQUksT0FBUTs0QkFBSSxLQUFNOzRCQUFNLElBQUs7NEJBQWlCLE1BQU87NEJBQUssS0FBTTs0QkFBSSxTQUFVOzRCQUFJLE1BQU87NEJBQUksUUFBUzs0QkFBSSxTQUFVOzRCQUFJLE1BQU87NEJBQVMsTUFBTzs0QkFBSyxJQUFLOzRCQUFNLFFBQVM7NEJBQUksT0FBUTs0QkFBSSxVQUFXOzRCQUFJLFlBQWE7NEJBQUksUUFBUzs0QkFBSSxPQUFROzRCQUFNLEtBQU07NEJBQWEsS0FBTTs0QkFBSSxVQUFXOzRCQUFJLEtBQU07NEJBQU0sTUFBTzs0QkFBSSxRQUFTOzRCQUFJLE1BQU87NEJBQU8sTUFBTzs0QkFBSSxNQUFPOzRCQUFLLE1BQU87NEJBQUksT0FBUTs0QkFBVSxLQUFNOzRCQUFJLEtBQU07NEJBQXVCLE1BQU87NEJBQUksSUFBSzs0QkFBb0IsU0FBVTs0QkFBSSxPQUFROzRCQUFJLE9BQVE7NEJBQUssT0FBUTs0QkFBSSxLQUFNOzRCQUFJLElBQUs7NEJBQWMsTUFBTzs0QkFBSSxTQUFVOzRCQUFJLFNBQVU7NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFLLE1BQU87NEJBQUksTUFBTzs0QkFBSSxLQUFNOzRCQUFLLE1BQU87NEJBQUksT0FBUTs0QkFBUyxTQUFVOzRCQUFJLE1BQU87NEJBQUssTUFBTzs0QkFBSyxXQUFZOzRCQUFJLElBQUs7NEJBQUksT0FBUTs0QkFBSyxNQUFPOzRCQUFNLE9BQVE7NEJBQU0sVUFBVzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFNLE1BQU87NEJBQUssTUFBTzs0QkFBSyxLQUFNOzRCQUFJLFNBQVU7NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFLLFNBQVU7NEJBQUksT0FBUTs0QkFBSyxTQUFVOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxLQUFNOzRCQUFNLE1BQU87NEJBQU0sT0FBUTs0QkFBSSxRQUFTOzRCQUFJLFFBQVM7NEJBQUksT0FBUTs0QkFBSSxVQUFXOzRCQUFJLFVBQVc7NEJBQUksTUFBTzs0QkFBSSxRQUFTOzRCQUFJLFFBQVM7NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFJLE9BQVE7NEJBQUksTUFBTzs0QkFBSyxJQUFLOzRCQUF3QyxPQUFROzRCQUFJLE9BQVE7NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFJLFNBQVU7NEJBQUksTUFBTzs0QkFBSSxPQUFROzRCQUFJLE9BQVE7NEJBQUksUUFBUzs0QkFBSSxRQUFTOzRCQUFJLE9BQVE7NEJBQU8sTUFBTzs0QkFBSyxNQUFPOzRCQUFJLE1BQU87NEJBQUksU0FBVTs0QkFBSSxRQUFTOzRCQUFJLE9BQVE7NEJBQUssTUFBTzs0QkFBSSxPQUFROzRCQUFJLEtBQU07NEJBQUssUUFBUzs0QkFBSSxNQUFPOzRCQUFZLE1BQU87NEJBQUksTUFBTzs0QkFBSyxNQUFPOzRCQUFJLE1BQU87NEJBQUssTUFBTzs0QkFBSSxNQUFPOzRCQUFNLE1BQU87NEJBQU0sS0FBTTs0QkFBSSxRQUFTOzRCQUFJLFVBQVc7NEJBQUksT0FBUTs0QkFBSSxRQUFTOzRCQUFJLEtBQU07NEJBQWdCLE1BQU87NEJBQUksVUFBVzs0QkFBSSxRQUFTOzRCQUFJLElBQUs7NEJBQU8sTUFBTzs0QkFBSSxLQUFNOzRCQUErQixRQUFTOzRCQUFJLFFBQVM7NEJBQUksT0FBUTs0QkFBSyxPQUFROzRCQUFJLE9BQVE7NEJBQVMsTUFBTzs0QkFBSSxPQUFROzRCQUFJLE9BQVE7NEJBQU0sTUFBTzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQWMsTUFBTzs0QkFBSyxLQUFNOzRCQUF1QyxLQUFNOzRCQUFRLE9BQVE7NEJBQUksTUFBTzs0QkFBSyxNQUFPOzRCQUFlLE9BQVE7NEJBQU8sTUFBTzs0QkFBSSxPQUFROzRCQUFhLE1BQU87NEJBQUksTUFBTzs0QkFBSSxPQUFROzRCQUFlLE9BQVE7NEJBQUksS0FBTTs0QkFBWSxLQUFNOzRCQUFlLFFBQVM7NEJBQUksTUFBTzs0QkFBSSxLQUFNOzRCQUFXLE9BQVE7NEJBQUksS0FBTTs0QkFBTyxNQUFPOzRCQUFJLEtBQU07NEJBQUksS0FBTTs0QkFBSSxNQUFPOzRCQUFLLEtBQU07NEJBQWlCLE1BQU87NEJBQUksTUFBTzs0QkFBSSxLQUFNOzRCQUFJLElBQUs7NEJBQTRCLE9BQVE7NEJBQUksUUFBUzs0QkFBSSxLQUFNOzRCQUFJLEtBQU07NEJBQUksS0FBTTs0QkFBUyxPQUFROzRCQUFJLFVBQVc7NEJBQUksYUFBYzs0QkFBSSxXQUFZOzRCQUFJLFNBQVU7NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFNLEtBQU07NEJBQUksS0FBTTs0QkFBSSxRQUFTOzRCQUFJLEtBQU07NEJBQU8sTUFBTzs0QkFBSSxRQUFTOzRCQUFJLE1BQU87NEJBQU8sT0FBUTs0QkFBSyxVQUFXOzRCQUFJLFFBQVM7NEJBQUssUUFBUzs0QkFBSSxLQUFNOzRCQUFLLE1BQU87NEJBQUssVUFBVzs0QkFBSSxRQUFTOzRCQUFJLFNBQVU7NEJBQUksS0FBTTs0QkFBSyxNQUFPOzRCQUFJLE9BQVE7NEJBQUksTUFBTzs0QkFBSSxVQUFXOzRCQUFJLE1BQU87NEJBQUssSUFBSzs0QkFBUyxTQUFVOzRCQUFJLEtBQU07NEJBQVEsS0FBTTs0QkFBSyxPQUFROzRCQUFLLE1BQU87NEJBQUksV0FBWTs0QkFBSSxLQUFNOzRCQUFJLE9BQVE7NEJBQUksT0FBUTs0QkFBTyxNQUFPOzRCQUFJLFFBQVM7NEJBQUssTUFBTzs0QkFBSyxTQUFVOzRCQUFJLE1BQU87NEJBQUksUUFBUzs0QkFBWSxTQUFVOzRCQUFJLFFBQVM7NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUE2QixPQUFROzRCQUFJLFFBQVM7NEJBQUksT0FBUTs0QkFBTSxNQUFPOzRCQUFJLE9BQVE7NEJBQUssU0FBVTs0QkFBSSxRQUFTOzRCQUFJLE1BQU87NEJBQUssS0FBTTs0QkFBTyxPQUFROzRCQUFJLElBQUs7NEJBQUssSUFBSzs0QkFBYyxNQUFPOzRCQUFJLE9BQVE7NEJBQVcsTUFBTzs0QkFBTyxPQUFROzRCQUFJLE1BQU87NEJBQUssSUFBSzs0QkFBYSxNQUFPOzRCQUFLLE1BQU87NEJBQUssS0FBTTs0QkFBa0IsSUFBSzs0QkFBUSxPQUFROzRCQUFJLFFBQVM7NEJBQUksTUFBTzs0QkFBSyxNQUFPOzRCQUFJLE1BQU87NEJBQUksUUFBUzs0QkFBSSxRQUFTOzRCQUFJLE1BQU87NEJBQUksU0FBVTs0QkFBSSxJQUFLOzRCQUFZLFVBQVc7NEJBQUksT0FBUTs0QkFBSSxPQUFROzRCQUFJLE9BQVE7NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFLLE1BQU87NEJBQUssS0FBTTs0QkFBSSxRQUFTOzRCQUFJLEtBQU07NEJBQTBDLEtBQU07NEJBQWdCLE1BQU87NEJBQUksS0FBTTs0QkFBSSxNQUFPOzRCQUFLLEtBQU07NEJBQUssTUFBTzs0QkFBSSxLQUFNOzRCQUFJLE1BQU87NEJBQU0sT0FBUTs0QkFBSSxPQUFROzRCQUFJLEtBQU07NEJBQUssUUFBUzs0QkFBSSxNQUFPOzRCQUFNLFFBQVM7NEJBQUksTUFBTzs0QkFBOEIsTUFBTzs0QkFBcUUsU0FBVTs0QkFBSyxPQUFROzRCQUFJLFFBQVM7NEJBQUksTUFBTzs0QkFBSyxPQUFROzRCQUFTLE1BQU87NEJBQUksTUFBTzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQUssUUFBUzs0QkFBSSxJQUFLOzRCQUFPLE9BQVE7NEJBQUssTUFBTzs0QkFBTyxNQUFPOzRCQUFJLFFBQVM7NEJBQUksS0FBTTs0QkFBYyxNQUFPOzRCQUFJLEtBQU07NEJBQUksS0FBTTs0QkFBWSxPQUFROzRCQUFRLElBQUs7NEJBQUksUUFBUzs0QkFBSSxLQUFNOzRCQUFNLElBQUs7NEJBQVUsS0FBTTs0QkFBSyxNQUFPOzRCQUFLLE1BQU87NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFJLFFBQVM7NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFJLFFBQVM7NEJBQUksTUFBTzs0QkFBSyxNQUFPOzRCQUFJLFFBQVM7NEJBQUksV0FBWTs0QkFBSSxNQUFPOzRCQUFNLE1BQU87NEJBQUksS0FBTTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSyxPQUFROzRCQUFJLE1BQU87NEJBQUssUUFBUzs0QkFBSSxRQUFTOzRCQUFJLFlBQWE7NEJBQUksTUFBTzs0QkFBSyxNQUFPOzRCQUFJLFFBQVM7NEJBQUksT0FBUTs0QkFBSSxTQUFVOzRCQUFJLEtBQU07NEJBQTJCLElBQUs7NEJBQUksS0FBTTs0QkFBSSxPQUFROzRCQUFJLE9BQVE7NEJBQU0sT0FBUTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFLLE1BQU87NEJBQUksTUFBTzs0QkFBSSxPQUFROzRCQUFhLEtBQU07NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFLLE1BQU87NEJBQUksV0FBWTs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQWlDLE9BQVE7NEJBQUksS0FBTTs0QkFBYyxPQUFROzRCQUFJLFdBQVk7NEJBQUksT0FBUTs0QkFBSyxNQUFPOzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxXQUFZOzRCQUFJLEtBQU07NEJBQUksUUFBUzs0QkFBSSxLQUFNOzRCQUFJLEtBQU07NEJBQVEsUUFBUzs0QkFBSSxNQUFPOzRCQUFLLE1BQU87NEJBQUksT0FBUTs0QkFBSSxLQUFNOzRCQUFLLEtBQU07NEJBQTJCLEtBQU07NEJBQUssS0FBTTs0QkFBTSxNQUFPOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksS0FBTTs0QkFBSSxJQUFLOzRCQUFNLE1BQU87NEJBQUssTUFBTzs0QkFBSyxPQUFROzRCQUFJLEtBQU07NEJBQUssYUFBYzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksUUFBUzs0QkFBSSxRQUFTOzRCQUFJLE9BQVE7NEJBQU0sUUFBUzs0QkFBSyxLQUFNOzRCQUFLLE1BQU87NEJBQUksS0FBTTs0QkFBSyxTQUFVOzRCQUFJLFNBQVU7NEJBQUksS0FBTTs0QkFBSSxTQUFVOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQVcsT0FBUTs0QkFBSyxLQUFNOzRCQUFpQyxPQUFROzRCQUFJLE9BQVE7NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLEtBQU07NEJBQUssTUFBTzs0QkFBSSxPQUFROzRCQUFJLFFBQVM7NEJBQUssT0FBUTs0QkFBSSxTQUFVOzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFJLEtBQU07NEJBQVcsT0FBUTs0QkFBSSxLQUFNOzRCQUFJLEtBQU07NEJBQVMsU0FBVTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUssTUFBTzs0QkFBSSxLQUFNOzRCQUFLLE1BQU87NEJBQUksVUFBVzs0QkFBSSxTQUFVOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFLLElBQUs7NEJBQU0sTUFBTzs0QkFBTSxNQUFPOzRCQUFLLE9BQVE7NEJBQUksT0FBUTs0QkFBSSxJQUFLOzRCQUFJLE9BQVE7NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFLLE1BQU87NEJBQUksT0FBUTs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBUSxPQUFROzRCQUFLLE9BQVE7NEJBQUssT0FBUTs0QkFBTSxNQUFPOzRCQUFLLEtBQU07NEJBQVMsS0FBTTs0QkFBSSxNQUFPOzRCQUFJLFFBQVM7NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFLLE9BQVE7NEJBQUksS0FBTTs0QkFBeUIsTUFBTzs0QkFBSSxNQUFPOzRCQUFRLEtBQU07NEJBQTJCLFFBQVM7NEJBQUksT0FBUTs0QkFBSSxTQUFVOzRCQUFJLEtBQU07NEJBQUksUUFBUzs0QkFBSSxTQUFVOzRCQUFJLEtBQU07NEJBQVUsTUFBTzs0QkFBSSxNQUFPOzRCQUFXLE1BQU87NEJBQUssTUFBTzs0QkFBSSxPQUFROzRCQUFLLElBQUs7NEJBQVEsS0FBTTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksS0FBTTs0QkFBbUIsS0FBTTs0QkFBWSxNQUFPOzRCQUFJLE1BQU87NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFLLFFBQVM7NEJBQUksTUFBTzs0QkFBTSxLQUFNOzRCQUFRLE9BQVE7NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFLLEtBQU07NEJBQUksUUFBUzs0QkFBSSxPQUFROzRCQUFRLFFBQVM7NEJBQUksUUFBUzs0QkFBSyxLQUFNOzRCQUFJLE9BQVE7NEJBQUssTUFBTzs0QkFBaUIsTUFBTzs0QkFBTSxPQUFROzRCQUFJLEtBQU07NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFJLFNBQVU7NEJBQUksVUFBVzs0QkFBSSxRQUFTOzRCQUFJLEtBQU07NEJBQUksT0FBUTs0QkFBSSxTQUFVOzRCQUFJLE1BQU87NEJBQUksS0FBTTs0QkFBSyxPQUFROzRCQUFJLE9BQVE7NEJBQUssT0FBUTs0QkFBTSxTQUFVOzRCQUFJLE1BQU87NEJBQVMsUUFBUzs0QkFBSSxNQUFPOzRCQUFLLE1BQU87NEJBQUksT0FBUTs0QkFBSSxPQUFROzRCQUFLLFFBQVM7NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFJLFVBQVc7NEJBQUksTUFBTzs0QkFBSSxPQUFROzRCQUFLLEtBQU07NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFTLE1BQU87NEJBQUksS0FBTTs0QkFBSSxTQUFVOzRCQUFJLFNBQVU7NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFJLE9BQVE7NEJBQVEsS0FBTTs0QkFBWSxNQUFPOzRCQUFJLEtBQU07NEJBQU8sT0FBUTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxRQUFTOzRCQUFJLE1BQU87NEJBQUssSUFBSzs0QkFBUyxRQUFTOzRCQUFJLE1BQU87NEJBQUssS0FBTTs0QkFBSSxLQUFNOzRCQUE0QyxRQUFTOzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxTQUFVOzRCQUFJLE1BQU87NEJBQUksS0FBTTs0QkFBSSxLQUFNOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksU0FBVTs0QkFBSSxRQUFTOzRCQUFLLEtBQU07NEJBQUksS0FBTTs0QkFBSyxPQUFROzRCQUFJLFNBQVU7NEJBQUksTUFBTzs0QkFBSSxLQUFNOzRCQUFjLEtBQU07NEJBQUksTUFBTzs0QkFBSSxLQUFNOzRCQUFLLFFBQVM7NEJBQUksT0FBUTs0QkFBSSxRQUFTOzRCQUFJLFNBQVU7NEJBQUksUUFBUzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQU0sUUFBUzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxLQUFNOzRCQUFPLFFBQVM7NEJBQUksTUFBTzs0QkFBSSxTQUFVOzRCQUFJLEtBQU07NEJBQUssTUFBTzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxRQUFTOzRCQUFJLE1BQU87NEJBQUssUUFBUzs0QkFBSSxTQUFVOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxRQUFTOzRCQUFLLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLEtBQU07NEJBQUksT0FBUTs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQUksS0FBTTs0QkFBUyxNQUFPOzRCQUFJLE1BQU87NEJBQUssTUFBTzs0QkFBSyxLQUFNOzRCQUFJLFNBQVU7NEJBQUksS0FBTTs0QkFBSSxVQUFXOzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFJLEtBQU07NEJBQVcsS0FBTTs0QkFBSSxVQUFXOzRCQUFJLE1BQU87NEJBQVksT0FBUTs0QkFBSSxRQUFTOzRCQUFJLE1BQU87NEJBQVksTUFBTzs0QkFBVSxNQUFPOzRCQUFJLE1BQU87NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFJLE9BQVE7NEJBQU0sT0FBUTs0QkFBSSxRQUFTOzRCQUFJLE9BQVE7NEJBQU0sT0FBUTs0QkFBUSxPQUFROzRCQUFJLEtBQU07NEJBQTRCLEtBQU07NEJBQU8sTUFBTzs0QkFBSSxLQUFNOzRCQUFXLFFBQVM7NEJBQUksT0FBUTs0QkFBSSxLQUFNOzRCQUFNLE1BQU87NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFJLE9BQVE7NEJBQUksVUFBVzs0QkFBSSxRQUFTOzRCQUFJLElBQUs7NEJBQVcsUUFBUzs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBTyxRQUFTOzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxPQUFROzRCQUFJLE9BQVE7NEJBQUksT0FBUTs0QkFBSyxRQUFTOzRCQUFJLFFBQVM7NEJBQUksTUFBTzs0QkFBUyxLQUFNOzRCQUFJLEtBQU07NEJBQWlCLE1BQU87NEJBQUksT0FBUTs0QkFBSSxLQUFNOzRCQUFJLE1BQU87NEJBQUksS0FBTTs0QkFBUSxPQUFROzRCQUFJLE1BQU87NEJBQUksS0FBTTs0QkFBTyxNQUFPOzRCQUFJLElBQUs7NEJBQWMsS0FBTTs0QkFBTyxNQUFPOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLFFBQVM7NEJBQUksT0FBUTs0QkFBSSxLQUFNOzRCQUE0QixNQUFPOzRCQUFJLE1BQU87NEJBQUksVUFBVzs0QkFBSSxPQUFROzRCQUFLLE9BQVE7NEJBQUssUUFBUzs0QkFBSSxLQUFNOzRCQUFXLE1BQU87NEJBQUksTUFBTzs0QkFBSSxRQUFTOzRCQUFJLEtBQU07NEJBQU0sUUFBUzs0QkFBSSxLQUFNOzRCQUFRLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLE9BQVE7NEJBQUssS0FBTTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQU0sTUFBTzs0QkFBSSxNQUFPOzRCQUFJLE9BQVE7NEJBQUssTUFBTzs0QkFBSSxLQUFNOzRCQUFVLEtBQU07NEJBQUssSUFBSzs0QkFBSyxRQUFTOzRCQUFJLEtBQU07NEJBQU0sTUFBTzs0QkFBSyxLQUFNOzRCQUFJLEtBQU07NEJBQUksTUFBTzs0QkFBSSxPQUFROzRCQUFJLElBQUs7NEJBQVksTUFBTzs0QkFBSSxPQUFROzRCQUFJLFdBQVk7NEJBQUksUUFBUzs0QkFBSSxLQUFNOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxRQUFTOzRCQUFJLEtBQU07NEJBQUksS0FBTTs0QkFBMEIsTUFBTzs0QkFBSSxPQUFROzRCQUFJLE9BQVE7NEJBQU0sUUFBUzs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFLLFFBQVM7NEJBQUksS0FBTTs0QkFBSSxLQUFNOzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBVyxNQUFPOzRCQUFNLE1BQU87NEJBQUksUUFBUzs0QkFBSSxNQUFPOzRCQUFJLFFBQVM7NEJBQUksTUFBTzs0QkFBSyxRQUFTOzRCQUFJLEtBQU07NEJBQUksS0FBTTs0QkFBTyxTQUFVOzRCQUFJLEtBQU07NEJBQUssUUFBUzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQVEsS0FBTTs0QkFBSyxNQUFPOzRCQUFJLFFBQVM7NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFJLFFBQVM7NEJBQUksS0FBTTs0QkFBVyxRQUFTOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxNQUFPOzRCQUFJLEtBQU07NEJBQU8sUUFBUzs0QkFBSSxPQUFROzRCQUFLLE9BQVE7NEJBQUksS0FBTTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQUksTUFBTzs0QkFBSSxRQUFTOzRCQUFJLE1BQU87NEJBQUksT0FBUTs0QkFBSSxLQUFNOzRCQUFJLEtBQU07NEJBQUksTUFBTzs0QkFBSSxNQUFPOzRCQUFJLFFBQVM7NEJBQUksS0FBTTs0QkFBSSxPQUFROzRCQUFJLFNBQVU7NEJBQUksUUFBUzs0QkFBSSxPQUFROzRCQUFJLE1BQU87NEJBQUksU0FBVTs0QkFBSSxNQUFPOzRCQUFJLE1BQU87NEJBQVMsU0FBVTs0QkFBSSxJQUFLOzRCQUFRLFFBQVM7NEJBQUksS0FBTTs0QkFBTyxVQUFXOzRCQUFJLE9BQVE7NEJBQUksS0FBTTs0QkFBUyxRQUFTOzRCQUFJLElBQUs7NEJBQWMsTUFBTzs0QkFBSyxNQUFPOzRCQUFXLE9BQVE7NEJBQUksT0FBUTs0QkFBSSxRQUFTOzRCQUFJLElBQUs7NEJBQVEsS0FBTTs0QkFBTyxNQUFPOzRCQUFNLFVBQVc7NEJBQUksS0FBTTs0QkFBZSxNQUFPOzRCQUFJLE9BQVE7NEJBQUssTUFBTzs0QkFBSSxTQUFVOzRCQUFJLE1BQU87NEJBQU8sUUFBUzs0QkFBSSxLQUFNOzRCQUFVLFNBQVU7NEJBQUksUUFBUzs0QkFBSSxJ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