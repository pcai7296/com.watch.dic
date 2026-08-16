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
                                        "calbtn-down"
                                    ]
                                ],
                                {
                                    width: "auto",
                                    minWidth: "52px",
                                    paddingLeft: "14px",
                                    paddingRight: "14px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn-down-text"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "28px",
                                    marginLeft: "10px",
                                    marginRight: "10px",
                                    lines: 1,
                                    textOverflow: "ellipsis"
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
                                        "cvalrow-wrap"
                                    ]
                                ],
                                {
                                    width: "100%",
                                    height: "28px",
                                    backgroundColor: "transparent"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "cvalrow"
                                    ]
                                ],
                                {
                                    color: "#0d84ff",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    lines: 1,
                                    textOverflow: "ellipsis",
                                    textAlign: "left",
                                    paddingLeft: "14px",
                                    width: "100%"
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
                                    borderRadius: "12px"
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
                                    paddingTop: "0px",
                                    paddingRight: "10px",
                                    paddingBottom: "0px",
                                    paddingLeft: "10px"
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
                            ],
                            [
                                {
                                    condition: "screen and (min-width:230) and (max-width:235) and (shape:circle)"
                                },
                                [
                                    [
                                        1,
                                        "full-keyboard"
                                    ]
                                ],
                                {
                                    transform: "{\"scaleX\":0.96,\"scaleY\":0.96}",
                                    transformOrigin: "0 321px",
                                    overflow: "visible"
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
                            var _system2 = _interopRequireDefault($app_require$1("@app-module/system.device"));
                            var _dicUtil = __webpack_require__("./src/components/InputMethod/assets/dicUtil.js");
                            var _suggestionState = __webpack_require__("./src/common/suggestionState.js");
                            function _interopRequireDefault(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function doSearchDic(word, lang, cb) {
                                if (!word) return void cb({
                                    chars: [],
                                    multi: null
                                });
                                const res = _dicUtil.SimpleInputMethod.getHanzi(word, lang);
                                cb({
                                    chars: res.chars,
                                    matched: res.matched,
                                    multi: res.multi
                                });
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
                                    cvalDisplay: "",
                                    resultList: [],
                                    resultList2: [],
                                    resultWordList: [],
                                    resultRow0: [],
                                    resultRow0IsWord: [],
                                    matchedLen: 0,
                                    sylTopChars: [],
                                    waitingList: [],
                                    waitingIndex: -1,
                                    lastWaitingStr: "",
                                    downFlag: "",
                                    lang: "cn",
                                    numFlag: false,
                                    numFlag_jp: false,
                                    upperFlag: false,
                                    keyboardCreated: false,
                                    cvalList: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                    ],
                                    percent67: 52,
                                    percent66: 0,
                                    screenWidth: 466,
                                    keyboardLeftOffset: 137,
                                    keys: {
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
                                                "“",
                                                "”",
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
                                                "，",
                                                "。",
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
                                                "•",
                                                "@",
                                                "#",
                                                "%",
                                                "「",
                                                "」",
                                                "*",
                                                "?",
                                                "/"
                                            ],
                                            [
                                                "(",
                                                ")",
                                                "-",
                                                "…",
                                                ":",
                                                ";",
                                                "、",
                                                "。",
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
                                                "“",
                                                "”",
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
                                                "•",
                                                "@",
                                                "#",
                                                "%",
                                                "「",
                                                "」",
                                                "*"
                                            ],
                                            [
                                                ")",
                                                "-",
                                                "…",
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
                                    }
                                },
                                onInit () {
                                    this.lang = "cn";
                                    this.numFlag = false;
                                    this.numFlag_jp = false;
                                    this.upperFlag = false;
                                    if (this.maxlength) {
                                        const tempCvalList = [];
                                        for(let i = 0; i < this.maxlength; i++)tempCvalList.push(i);
                                        this.cvalList = tempCvalList;
                                    }
                                    if ("rect" === this.screentype || "pill-shaped" === this.screentype) this.adjustScreenWidth();
                                    if (!this.hide) {
                                        this.keyboardCreated = true;
                                        this._ensureDictInit();
                                    }
                                    this.screenWidth = 466;
                                    this.keyboardLeftOffset = 137;
                                    this.$watch("hide", "watchHidePropsChange");
                                    this.$watch("maxlength", "watchMaxLengthPropsChange");
                                    this.$watch("keyboardtype", "watchKeyboardTypePropsChange");
                                    (0, _suggestionState.onSuggestionsChange)((function() {
                                        if ("en" === this.lang) this.resetResultList();
                                    }).bind(this));
                                    this.$unwatch("hide");
                                    this.$unwatch("maxlength");
                                    this.$unwatch("keyboardtype");
                                    this.resetResultList();
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
                                    this.resetResultList();
                                    this.downFlag = "";
                                },
                                onBtnClick (sign) {
                                    this.onVibrate();
                                    switch(sign){
                                        case "AC":
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetResultList();
                                            break;
                                        case "lang":
                                            this.keyboardtype, this.lang = "cn" === this.lang ? "en" : "cn";
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetResultList();
                                            break;
                                        case "D":
                                            if (this.waitingIndex >= 0) {
                                                this.clearWaiting();
                                                this.resetResultList();
                                            } else if (this.cval.length > 0) {
                                                this.cval = deleteLast(this.cval);
                                                this.resetResultList();
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
                                                if ("cn" === this.lang || 'jp' === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                else if (this.upperFlag) this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase());
                                                else this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase());
                                                this.clearWaiting();
                                                this.resetResultList();
                                            }
                                            break;
                                        case "switchNum":
                                        case "switchNum_jp":
                                            this.numFlag = false;
                                            this.numFlag_jp = false;
                                            break;
                                        case "switchCn":
                                            this.numFlag = false;
                                            this.numFlag_jp = false;
                                            break;
                                        case "switchUpper":
                                            this.upperFlag = true;
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
                                                    if ("cn" === this.lang || 'jp' === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                    else if (this.upperFlag) this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase());
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
                                                this.resetResultList();
                                            }
                                            break;
                                    }
                                },
                                clearWaiting () {
                                    this.waitingList = [];
                                    this.waitingIndex = -1;
                                    this.lastWaitingStr = "";
                                },
                                resetResultList () {
                                    let watingStr = "";
                                    if (this.lastWaitingStr && this.lastWaitingStr[this.waitingIndex]) watingStr = this.lastWaitingStr[this.waitingIndex];
                                    if ("en" === this.lang) return void this.getEnglishResults((0, _suggestionState.getSuggestionSeed)());
                                    if (!(this.cval + watingStr) || "cn" !== this.lang) {
                                        this.resultList = [];
                                        this.resultWordList = [];
                                        this.setResultListAll();
                                        return;
                                    }
                                    this.getResultByWord(this.cval + watingStr);
                                },
                                setResultListAll () {
                                    const rowSize = "en" === this.lang ? 1 : parseInt(this.maxlength);
                                    this.resultRow0 = this.resultList.slice(0, rowSize);
                                    this.resultRow0IsWord = this.resultRow0.map(function() {
                                        return false;
                                    });
                                    this.resultList2 = [];
                                    let array = [];
                                    for(let i = 0; i < this.resultList.length; i++){
                                        array.push(this.resultList[i]);
                                        if (array.length === rowSize) {
                                            this.resultList2.push(array);
                                            array = [];
                                        }
                                    }
                                    if (array.length > 0) this.resultList2.push(array);
                                },
                                getResultByWord (val) {
                                    const that = this;
                                    doSearchDic(val, that.lang, function(data) {
                                        that.resultList = data.chars || [];
                                        that.matchedLen = data.matched ? data.matched.length : 0;
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
                                    if ('cn' !== this.lang && 'jp' !== this.lang || this.numFlag) if ("en" !== this.lang || this.numFlag) this.addAllTxt(num);
                                    else if (this.upperFlag) this.addAllTxt(num.toUpperCase());
                                    else this.addAllTxt(num.toLowerCase());
                                    else this.cval += num.toLowerCase();
                                    this.resetResultList();
                                },
                                onSelectWaiting (num) {
                                    this.onVibrate();
                                    if ("cn" === this.lang) this.cval += this.waitingList[num].toString();
                                    else if (this.upperFlag) this.addAllTxt(this.waitingList[num].toUpperCase());
                                    else this.addAllTxt(this.waitingList[num].toLowerCase());
                                    this.clearWaiting();
                                    this.resetResultList();
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
                                        this.resetResultList();
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
                                    for(let i = 0; i < parts.length && output.length < 30; i++)if (parts[i]) output.push(parts[i]);
                                    return output;
                                },
                                _ensureDictInit () {
                                    if (this.__dictInitStarted) return;
                                    this.__dictInitStarted = true;
                                    _dicUtil.SimpleInputMethod.initDict();
                                },
                                pushCval () {
                                    this.cval = "";
                                    this.clearWaiting();
                                    this.resetResultList();
                                    this.addAllTxt(temp);
                                },
                                adjustScreenWidth () {
                                    _system2.default.getInfo({
                                        success: (data)=>{
                                            this.screenWidth = data.screenWidth;
                                        }
                                    });
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
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("flex-direction: column; height: " + (_vm_.hide ? "0px" : "auto") + "; overflow: " + (_vm_.hide ? "hidden" : "visible") + "; background-color: transparent;");
                                    }
                                }
                            }, [
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return !_vm_.hide || _vm_.keyboardCreated;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {}
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    show: function() {
                                                        return !_vm_.hide;
                                                    },
                                                    style: {
                                                        backgroundColor: "transparent",
                                                        flexDirection: "column"
                                                    }
                                                }
                                            }, [
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "circle" !== _vm_.screentype;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "cvalrow-wrap"
                                                                ],
                                                                show: function() {
                                                                    return "cn" === _vm_.lang && "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "cvalrow"
                                                                    ],
                                                                    value: function() {
                                                                        return _vm_.cvalDisplay;
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
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/full/back2.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "38px",
                                                                                    left: "7px",
                                                                                    width: "466px",
                                                                                    height: "52px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchCn", evt);
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
                                                                                src: "/components/InputMethod/assets/full/bigA.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "119px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchLow", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/full/A.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "119px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchUpper", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
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
                                                                                    return _vm_.resultRow0.length > 0;
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
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("image", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        src: "/components/InputMethod/assets/full/cn.png",
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
                                                                                        src: "/components/InputMethod/assets/full/en.png",
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
                                                                                    return "cn" === _vm_.lang && "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
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
                                                                                        return _vm_.cvalDisplay + "_";
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "38px",
                                                                                    left: "78px",
                                                                                    width: "275px",
                                                                                    height: "52px"
                                                                                },
                                                                                show: function() {
                                                                                    return ("cn" === _vm_.lang || "en" === _vm_.lang) && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("scroll", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    scrollX: function() {
                                                                                        return true;
                                                                                    },
                                                                                    style: {
                                                                                        position: "absolute",
                                                                                        left: "0px",
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
                                                                                            left: "0px",
                                                                                            height: "42px",
                                                                                            paddingLeft: "20px",
                                                                                            paddingRight: "20px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.resultRow0;
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
                                                                                                        return _vm_.resultRow0.length > $idx;
                                                                                                    },
                                                                                                    classList: [
                                                                                                        "calbtn02"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        paddingRight: "10px"
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(_vm_.resultRow0[$idx], evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return _vm_.resultRow0[$idx];
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ])
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
                                                                                                            aiot.__ce__("text", {
                                                                                                                __vm__: _vm_,
                                                                                                                __opts__: {
                                                                                                                    classList: [
                                                                                                                        "calbtn-down-text"
                                                                                                                    ],
                                                                                                                    events: {
                                                                                                                        click: function(evt) {
                                                                                                                            return _vm_.onRsSelect(item, evt);
                                                                                                                        }
                                                                                                                    },
                                                                                                                    value: function() {
                                                                                                                        return item;
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
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/t9/back2.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "35px",
                                                                                    left: "31px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchCn", evt);
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
                                                                                src: "/components/InputMethod/assets/t9/bigA.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "99px",
                                                                                    left: "31px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchLow", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/t9/a.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "99px",
                                                                                    left: "31px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchUpper", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
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
                                                                                    return _vm_.resultRow0.length > 0;
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
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("image", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        src: "/components/InputMethod/assets/full/cn.png",
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
                                                                                        src: "/components/InputMethod/assets/full/en.png",
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
                                                                                    return "cn" === _vm_.lang && "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
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
                                                                                        return _vm_.cvalDisplay + "_";
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
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
                                                                            aiot.__ce__("scroll", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    scrollX: function() {
                                                                                        return true;
                                                                                    },
                                                                                    style: {
                                                                                        position: "absolute",
                                                                                        left: "0px",
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
                                                                                            left: "0px",
                                                                                            height: "42px",
                                                                                            paddingLeft: "20px",
                                                                                            paddingRight: "20px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.resultRow0;
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
                                                                                                        return _vm_.resultRow0.length > $idx;
                                                                                                    },
                                                                                                    classList: [
                                                                                                        "calbtn02"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        paddingRight: "10px"
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(_vm_.resultRow0[$idx], evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return _vm_.resultRow0[$idx];
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ])
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
                                                                                                            aiot.__ce__("text", {
                                                                                                                __vm__: _vm_,
                                                                                                                __opts__: {
                                                                                                                    classList: [
                                                                                                                        "calbtn-down-text"
                                                                                                                    ],
                                                                                                                    events: {
                                                                                                                        click: function(evt) {
                                                                                                                            return _vm_.onRsSelect(item, evt);
                                                                                                                        }
                                                                                                                    },
                                                                                                                    value: function() {
                                                                                                                        return item;
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
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/horizontal/jp.png",
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
                                                                            return ("cn" === _vm_.lang || "jp" === _vm_.lang) && !_vm_.numFlag;
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
                                                                                    alignItems: "center"
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
                                                                                        width: "85%",
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
                                                                                            height: "42px",
                                                                                            paddingLeft: "20px",
                                                                                            paddingRight: "20px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.resultRow0;
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
                                                                                                        return _vm_.resultRow0.length > $idx;
                                                                                                    },
                                                                                                    classList: [
                                                                                                        "calbtn02"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        paddingRight: "10px"
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(_vm_.resultRow0[$idx], evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return _vm_.resultRow0[$idx];
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
                                                                                        return _vm_.resultRow0.length > 0;
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
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/horizontal/123.png",
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
                                                                                        return _vm_.onBtnClick("switchNum_jp", evt);
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
                                                                            return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang && !_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/horizontal/bigA.png",
                                                                                style: {
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    marginLeft: "6px",
                                                                                    width: "94px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchLow", evt);
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
                                                                            return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang && !_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/horizontal/a.png",
                                                                                style: {
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    marginLeft: "6px",
                                                                                    width: "94px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchUpper", evt);
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
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/horizontal/123.png",
                                                                                style: {
                                                                                    marginLeft: "6px",
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    width: "94px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchNum", evt);
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
                                                                            return _vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/horizontal/back2.png",
                                                                                style: {
                                                                                    marginLeft: "6px",
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    width: "159px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchCn", evt);
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
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "list67"
                                                                                ]
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("list", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        width: "100%",
                                                                                        height: "100%"
                                                                                    }
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
                                                                                                        aiot.__ce__("text", {
                                                                                                            __vm__: _vm_,
                                                                                                            __opts__: {
                                                                                                                classList: [
                                                                                                                    "calbtn-down-text"
                                                                                                                ],
                                                                                                                events: {
                                                                                                                    click: function(evt) {
                                                                                                                        return _vm_.onRsSelect(item, evt);
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function() {
                                                                                                                    return item;
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
                                                                            return __webpack_require__.g.$translateStyle$("start-angle:204deg;total-angle:-48deg;width:188px;height:188px;top:82px;left:2px;position:absolute;color:#ffffff;stroke-width:6px;layer-color:#262626;margin-left: " + (_vm_.screenWidth - 192) / 2 + "px;");
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
                                                                            return __webpack_require__.g.$translateStyle$("padding-left: " + (_vm_.screenWidth - 192) / 2 + "px;padding-right: " + (_vm_.screenWidth - 192) / 2 + "px;");
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
                                                                        return __webpack_require__.g.$translateStyle$("position: absolute;left: " + (_vm_.screenWidth - 192) / 2 + "px;top: 0px;width: 192px;height: 110px;");
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
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.resultRow0;
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
                                                                                            return _vm_.resultRow0.length > $idx;
                                                                                        },
                                                                                        classList: [
                                                                                            "calbtn02"
                                                                                        ],
                                                                                        style: {
                                                                                            paddingRight: "10px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onRsSelect(_vm_.resultRow0[$idx], evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return _vm_.resultRow0[$idx];
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
                                                                            return _vm_.resultRow0.length > 0;
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
                                                                        src: "/components/InputMethod/assets/arc/back2.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "9px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchCn", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return _vm_.numFlag && "cn" === _vm_.lang || _vm_.numFlag_jp && "jp" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/arc/123.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "70px",
                                                                            top: "0px",
                                                                            width: "52px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchNum", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/arc/123.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "70px",
                                                                            top: "0px",
                                                                            width: "52px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchNum_jp", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag_jp && "jp" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/arc/bigA.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "72px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchLow", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/arc/a.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "72px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchUpper", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang;
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
                                                                                    return __webpack_require__.g.$translateStyle$("position: absolute;left: " + (_vm_.screenWidth - 192) / 2 + "px;width: 192px;height: 263px;");
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
                                                                                                        aiot.__ce__("text", {
                                                                                                            __vm__: _vm_,
                                                                                                            __opts__: {
                                                                                                                classList: [
                                                                                                                    "calbtn-down-text"
                                                                                                                ],
                                                                                                                events: {
                                                                                                                    click: function(evt) {
                                                                                                                        return _vm_.onRsSelect(item, evt);
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function() {
                                                                                                                    return item;
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
                                        ])
                                    ];
                                })
                            ]);
                        };
                        module.exports = function($app_exports$) {
                            $app_script$({}, $app_exports$, $app_require$1);
                            $app_exports$.default.template = $app_template$;
                            $app_exports$.default.style = $app_style$;
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
                                paddingTop: "24px",
                                backgroundColor: "#020813",
                                flexDirection: "column",
                                alignItems: "center",
                                position: "relative",
                                zIndex: 0
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
                                width: "100%",
                                height: "72px",
                                paddingTop: 0,
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "center"
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
                                width: "102px",
                                height: "72px",
                                flexShrink: 0,
                                zIndex: 10
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
                                width: "102px",
                                height: "72px",
                                flexShrink: 0,
                                zIndex: 10
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "search-button"
                                ]
                            ],
                            {
                                width: "102px",
                                height: "72px",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "search-icon"
                                ]
                            ],
                            {
                                width: "40px",
                                height: "40px"
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
                                zIndex: 10,
                                height: "52px",
                                marginTop: "12px",
                                marginBottom: "8px",
                                paddingLeft: "14px",
                                paddingRight: "14px",
                                borderTopWidth: "2px",
                                borderRightWidth: "2px",
                                borderBottomWidth: "2px",
                                borderLeftWidth: "2px",
                                borderTopColor: "#2f8cff",
                                borderRightColor: "#2f8cff",
                                borderBottomColor: "#2f8cff",
                                borderLeftColor: "#2f8cff",
                                borderRadius: "18px",
                                backgroundColor: "#08172b",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                paddingBottom: "4px"
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
                                zIndex: 10,
                                width: "168px",
                                height: "42px",
                                marginBottom: "6px",
                                flexDirection: "row",
                                justifyContent: "space-between"
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
                                zIndex: 10,
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
                                    "edit-button"
                                ]
                            ],
                            {
                                height: "42px",
                                borderRadius: "18px",
                                color: "#ffffff",
                                fontSize: "20px",
                                fontWeight: 800,
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "side-button"
                                ]
                            ],
                            {
                                width: "48px",
                                backgroundColor: "#0b65ea"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "clear-button"
                                ]
                            ],
                            {
                                width: "62px",
                                backgroundColor: "#d82626"
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
                                width: "72%"
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
                        ]
                    ];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.file"));
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _suggestionState = __webpack_require__("./src/common/suggestionState.js");
                        var _dictCodec = __webpack_require__("./src/common/dictCodec.js");
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
                                screenProfile: "circle"
                            },
                            private: {
                                query: "",
                                cursorIndex: 0,
                                displayText: "",
                                englishSeed: "",
                                englishSuggestionsText: "",
                                keyboardHidden: false,
                                keyboardType: "QWERTY",
                                screenType: "circle",
                                maxLength: 12,
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
                                return this.searchSwipeExitLocked;
                            },
                            toggleKeyboard () {
                                this.keyboardHidden = !this.keyboardHidden;
                                this.refreshDisplay();
                            },
                            onInputBoxClick () {
                                var now = Date.now();
                                this.tapTimes.push(now);
                                this.tapTimes = this.tapTimes.filter(function(t) {
                                    return now - t <= 1500;
                                });
                                if (this.tapTimes.length >= 3) {
                                    this.tapTimes = [];
                                    _system.default.replace({
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
                                if (!this.query) return void _system.default.back();
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
                                _system.default.push({
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
                                _system2.default.showToast({
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
                                if (!this.searchSwipeExitLocked && startsInLeftQuarter && endsAtRightQuarter && mostlyHorizontal && validStartZone) _system.default.back();
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
                                _system3.default.readText({
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
                                _system4.default.get({
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
                                _system4.default.get({
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
                                            src: "/common/icons/btn_back.png",
                                            style: {
                                                width: "102px",
                                                height: "72px"
                                            },
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
                                            src: "/common/icons/btn_check.png",
                                            style: {
                                                width: "102px",
                                                height: "72px"
                                            },
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
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "edit-button",
                                            "side-button"
                                        ],
                                        type: "button",
                                        value: "左",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.moveLeft(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "edit-button",
                                            "clear-button"
                                        ],
                                        type: "button",
                                        value: "清空",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.clearText(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "edit-button",
                                            "side-button"
                                        ],
                                        type: "button",
                                        value: "右",
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
