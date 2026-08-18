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
                    var $app_style$ = [
                        [
                            [
                                [
                                    0,
                                    "page"
                                ]
                            ],
                            {
                                width: "432px",
                                height: "514px",
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
                                marginLeft: "10px",
                                marginRight: "8px",
                                flexShrink: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "word-area"
                                ]
                            ],
                            {
                                width: "380px",
                                marginTop: "0",
                                marginRight: "0",
                                marginBottom: "0",
                                marginLeft: "0",
                                flexDirection: "column",
                                alignItems: "flex-start"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "word-text"
                                ]
                            ],
                            {
                                width: "380px",
                                height: "40px",
                                marginTop: "0",
                                marginRight: "0",
                                marginBottom: "0",
                                marginLeft: "0",
                                color: "#ffffff",
                                fontSize: "32px",
                                fontWeight: 800,
                                textAlign: "left"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "word-marquee"
                                ]
                            ],
                            {
                                width: "380px",
                                height: "40px",
                                marginTop: "0",
                                marginRight: "0",
                                marginBottom: "0",
                                marginLeft: "0",
                                color: "#ffffff",
                                fontSize: "32px",
                                fontWeight: 800,
                                textAlign: "left",
                                lines: 1,
                                textOverflow: "clip"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "phonetic-text"
                                ]
                            ],
                            {
                                height: "36px",
                                color: "#a9c8f6",
                                fontSize: "28px",
                                textAlign: "left"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "phonetic-marquee"
                                ]
                            ],
                            {
                                height: "36px",
                                color: "#a9c8f6",
                                fontSize: "28px",
                                textAlign: "left",
                                lines: 1,
                                textOverflow: "clip"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "content-area"
                                ]
                            ],
                            {
                                width: "100%",
                                flex: 1,
                                minHeight: 0,
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "meaning-list"
                                ]
                            ],
                            {
                                width: "412px",
                                height: "350px",
                                marginTop: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "meaning-item"
                                ]
                            ],
                            {
                                height: "44px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "meaning-line"
                                ]
                            ],
                            {
                                height: "38px",
                                marginLeft: "10px",
                                color: "#e9f2ff",
                                fontSize: "27px",
                                lines: 1,
                                textOverflow: "clip"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "tag-line"
                                ]
                            ],
                            {
                                height: "38px",
                                marginLeft: "10px",
                                color: "#6ba3e8",
                                fontSize: "28px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "bottom-row"
                                ]
                            ],
                            {
                                width: "412px",
                                height: "66px",
                                marginBottom: "8px",
                                paddingLeft: "12px",
                                paddingRight: "12px",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
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
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.file"));
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _navGuard = __webpack_require__("./src/common/navGuard.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
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
                        var MAX_PHONETIC_LENGTH = 94;
                        var IPA_SAFE_MAP = {
                            ə: 'a',
                            ә: 'a',
                            ɚ: 'r',
                            є: 'e',
                            ε: 'e',
                            ɪ: 'i',
                            ˈ: "'",
                            ˌ: ',',
                            ɑ: 'A',
                            ʊ: 'U',
                            ʃ: 'S',
                            ʒ: 'Z',
                            θ: 'T',
                            ð: 'D',
                            ŋ: 'N',
                            ɔ: 'O',
                            æ: 'E',
                            ɛ: 'e',
                            ɜ: 'R',
                            ː: '|',
                            ɒ: 'Q',
                            ʌ: 'V',
                            ɡ: 'g'
                        };
                        var PHRASE_DECODE_MAP = {
                            '!': 'vt. ',
                            $: 'vi. ',
                            '@': 'n. ',
                            '#': 'a. ',
                            '%': 'ad. ',
                            '^': 'prep. ',
                            '&': 'conj. ',
                            '*': 'pron. ',
                            '(': 'int. ',
                            ')': 'num. ',
                            '-': 'art. ',
                            '=': 'aux. ',
                            '{': '[计]',
                            '}': '[法]',
                            '|': '[医]',
                            '[': '[生]',
                            ']': '[化]',
                            '<': '[物]',
                            '>': '[经]'
                        };
                        var _default = exports.default = {
                            protected: {
                                word: "",
                                phonetic: "",
                                translation: "",
                                tag: "",
                                searchMode: "",
                                inflectDepth: ""
                            },
                            private: {
                                wordText: "",
                                phoneticText: "",
                                translationText: "",
                                tagText: "",
                                tagLines: [],
                                translationLines: [],
                                cardWidth: 412,
                                contentWidth: 388,
                                favoriteLabel: "收藏",
                                isFavorited: false,
                                fileCache: {},
                                lastToastAt: 0,
                                toastCooldown: 1500,
                                lastInflectAt: 0,
                                inflectPressCooldown: 1000,
                                maxInflectDepth: 3,
                                touchStartX: -1,
                                touchStartY: -1,
                                destroyed: false,
                                wordMarqueeOn: false,
                                wordMarqueeSpeed: 40,
                                wordMarqueeThreshold: 20,
                                phoneticMarqueeOn: false,
                                phoneticMarqueeSpeed: 40,
                                wordAreaMarginLeft: 15,
                                bottomStyle: "",
                                inflectBtnStyle: "",
                                favoriteBtnStyle: "",
                                displayLines: [],
                                isRoundScreen: false,
                                isCapsule: false
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
                            _normalizeIpa (s) {
                                if (!s) return s;
                                s = s.replace(/\r/g, '').slice(0, MAX_PHONETIC_LENGTH);
                                var out = '';
                                for(var i = 0; i < s.length; i++){
                                    var ch = s.charAt(i);
                                    var mapped = IPA_SAFE_MAP[ch];
                                    if (mapped) out += mapped;
                                    else if (ch.charCodeAt(0) < 128) out += ch;
                                    else out += "?";
                                }
                                return out;
                            },
                            _decodePhrase (s) {
                                if (!s) return s;
                                s = s.replace(/\r/g, '');
                                var out = '';
                                for(var i = 0; i < s.length; i++){
                                    var ch = s.charAt(i);
                                    out += PHRASE_DECODE_MAP[ch] || ch;
                                }
                                return out;
                            },
                            onInit () {
                                const sw = this.$app.$def.data.screenWidth || 432;
                                this.cardWidth = sw - 20;
                                this.contentWidth = this.cardWidth - 24;
                                this.wordAreaMarginLeft = 466 === sw ? 45 : 15;
                                this.isRoundScreen = 466 === sw;
                                this.isCapsule = 192 === sw || 212 === sw;
                                if (this.isRoundScreen) {
                                    this.bottomStyle = "justify-content: center;";
                                    this.inflectBtnStyle = "margin-right: 5px;";
                                    this.favoriteBtnStyle = "margin-left: 5px;";
                                } else if (this.isCapsule) {
                                    this.bottomStyle = "margin-bottom: 40px;";
                                    this.inflectBtnStyle = "";
                                    this.favoriteBtnStyle = "";
                                } else {
                                    this.bottomStyle = "";
                                    this.inflectBtnStyle = "";
                                    this.favoriteBtnStyle = "";
                                }
                                this.wordText = this.word || "";
                                this.phoneticText = this.phonetic ? "/" + this._normalizeIpa(this.phonetic) + "/" : "";
                                this.applyPhoneticMarquee(this.phoneticText);
                                this.translationText = this._decodePhrase(this.translation || "");
                                this.tagText = this._expandTag(this.tag || "");
                                this.wordMarqueeThreshold = this.resolveWordMarqueeThreshold(sw);
                                this.applyWordMarquee(this.wordText);
                                const tagLines = this.tagText ? this.tagText.split(" ") : [];
                                const wrapW = this.contentWidth - 24;
                                this.translationLines = this.wrapText(this.translationText, wrapW);
                                if (0 === this.translationLines.length) this.translationLines = [
                                    ""
                                ];
                                this.displayLines = [];
                                for(let i = 0; i < this.translationLines.length; i++)this.displayLines.push({
                                    text: this.translationLines[i],
                                    isTag: false
                                });
                                for(let i = 0; i < tagLines.length; i++)this.displayLines.push({
                                    text: tagLines[i],
                                    isTag: true
                                });
                                this.refreshFavoriteState();
                            },
                            onDestroy () {
                                this.destroyed = true;
                                if (void 0 !== __webpack_require__.g && "function" == typeof __webpack_require__.g.runGC) __webpack_require__.g.runGC();
                            },
                            goBack () {
                                if (!(0, _navGuard.navGuard)()) return;
                                _system.default.back();
                            },
                            resolveWordMarqueeThreshold (sw) {
                                if (192 === sw) return 8;
                                if (212 === sw) return 9;
                                if (336 === sw) return 16;
                                if (432 === sw) return 20;
                                if (466 === sw) return 20;
                                return 9;
                            },
                            applyWordMarquee (text) {
                                if (text && text.length > this.wordMarqueeThreshold) {
                                    this.wordMarqueeOn = true;
                                    const extra = text.length - this.wordMarqueeThreshold;
                                    this.wordMarqueeSpeed = Math.max(40, Math.min(60, Math.round(40 + 1.5 * extra)));
                                } else {
                                    this.wordMarqueeOn = false;
                                    this.wordMarqueeSpeed = 40;
                                }
                            },
                            applyPhoneticMarquee (text) {
                                const width = this.measureTextWidth(text || "");
                                if (text && width > this.contentWidth) {
                                    this.phoneticMarqueeOn = true;
                                    this.phoneticMarqueeSpeed = Math.max(40, Math.min(60, Math.round(40 + (width - this.contentWidth) / 12)));
                                } else {
                                    this.phoneticMarqueeOn = false;
                                    this.phoneticMarqueeSpeed = 40;
                                }
                            },
                            goInflect () {
                                if (!this.wordText || !(0, _navGuard.navGuard)()) return;
                                const now = Date.now();
                                if (now - this.lastInflectAt < this.inflectPressCooldown) return void this.showToast("操作太快");
                                this.lastInflectAt = now;
                                const depth = this.currentInflectDepth();
                                if (depth >= this.maxInflectDepth) return void this.showToast("最多查三层");
                                _system.default.replace({
                                    uri: "/pages/results",
                                    params: {
                                        query: this.wordText,
                                        searchMode: "inflect",
                                        inflectDepth: "" + (depth + 1)
                                    }
                                });
                            },
                            currentInflectDepth () {
                                const depth = parseInt(this.inflectDepth);
                                if (isNaN(depth) || depth < 0) return 0;
                                return depth;
                            },
                            showToast (message) {
                                const now = Date.now();
                                if (now - this.lastToastAt < this.toastCooldown) return;
                                this.lastToastAt = now;
                                _system4.default.showToast({
                                    message: message,
                                    duration: 1500
                                });
                            },
                            toggleFavorite () {
                                if (!this.wordText) return;
                                const item = this.currentItem();
                                _system2.default.get({
                                    key: "dic_favorites",
                                    success: (data)=>{
                                        const list = this.parseList(data);
                                        this.writeFavoriteList(list, item);
                                    },
                                    fail: ()=>{
                                        this.writeFavoriteList([], item);
                                    }
                                });
                            },
                            writeFavoriteList (list, item) {
                                const word = this.normalizeWord(item.word);
                                let existed = false;
                                const output = [];
                                for(let i = 0; i < list.length; i++){
                                    const oldItem = list[i];
                                    if (oldItem && this.normalizeWord(oldItem.word) === word) existed = true;
                                    else if (oldItem && output.length < 150) output.push(oldItem);
                                }
                                if (existed) {
                                    this.favoriteLabel = "收藏";
                                    this.isFavorited = false;
                                } else {
                                    if (output.length >= 150) return void this.showToast("收藏已达上限（150）");
                                    output.unshift(item);
                                    while(output.length > 150)output.pop();
                                    this.favoriteLabel = "已收藏";
                                    this.isFavorited = true;
                                }
                                _system2.default.set({
                                    key: "dic_favorites",
                                    value: JSON.stringify(output)
                                });
                            },
                            refreshFavoriteState () {
                                _system2.default.get({
                                    key: "dic_favorites",
                                    success: (data)=>{
                                        if (this.destroyed) return;
                                        const list = this.parseList(data);
                                        const word = this.normalizeWord(this.wordText);
                                        this.favoriteLabel = "收藏";
                                        this.isFavorited = false;
                                        for(let i = 0; i < list.length; i++)if (list[i] && this.normalizeWord(list[i].word) === word) {
                                            this.favoriteLabel = "已收藏";
                                            this.isFavorited = true;
                                            return;
                                        }
                                    },
                                    fail: ()=>{
                                        if (this.destroyed) return;
                                        this.favoriteLabel = "收藏";
                                        this.isFavorited = false;
                                    }
                                });
                            },
                            currentItem () {
                                return {
                                    word: this.wordText,
                                    phonetic: this.phonetic || "",
                                    translation: this.translationText,
                                    tag: this.tagText
                                };
                            },
                            parseList (data) {
                                if (!data) return [];
                                const text = data.value ? data.value : data;
                                try {
                                    const list = JSON.parse(text);
                                    if (list && list.length) return list;
                                } catch (err) {
                                    console.log('[腕上词典] storage data parse failed:', err && err.message);
                                    return [];
                                }
                                return [];
                            },
                            wrapText (value, maxWidth) {
                                const text = (value || "").replace(/\s+/g, " ").trim();
                                if (!text) return [];
                                const lines = [];
                                let line = "";
                                let width = 0;
                                let lastBreak = -1;
                                for(let i = 0; i < text.length; i++){
                                    const ch = text.charAt(i);
                                    const chWidth = this.getCharWidth(ch);
                                    if (width + chWidth > maxWidth && line.length > 0) {
                                        if (lastBreak > 0) {
                                            lines.push(line.slice(0, lastBreak).trim());
                                            line = line.slice(lastBreak).trim() + ch;
                                        } else {
                                            lines.push(line.trim());
                                            line = ch;
                                        }
                                        width = this.measureTextWidth(line);
                                        lastBreak = this.findLastBreak(line);
                                    } else {
                                        line += ch;
                                        width += chWidth;
                                    }
                                    if (" " === ch || ";" === ch || "," === ch || "，" === ch || "；" === ch) lastBreak = line.length;
                                }
                                if (line.trim()) lines.push(line.trim());
                                return lines;
                            },
                            measureTextWidth (value) {
                                let width = 0;
                                for(let i = 0; i < value.length; i++)width += this.getCharWidth(value.charAt(i));
                                return width;
                            },
                            findLastBreak (value) {
                                for(let i = value.length - 1; i >= 0; i--){
                                    const ch = value.charAt(i);
                                    if (" " === ch || ";" === ch || "," === ch || "，" === ch || "；" === ch) return i + 1;
                                }
                                return -1;
                            },
                            getCharWidth (ch) {
                                if (!ch) return 0;
                                if (ch >= "\u4e00" && ch <= "\u9fff") return 20;
                                if (ch >= "A" && ch <= "Z") return 12;
                                if (ch >= "a" && ch <= "z") return 11;
                                if (ch >= "0" && ch <= "9") return 11;
                                if (" " === ch || "." === ch || "," === ch || ";" === ch || ":" === ch || "/" === ch || "-" === ch) return 7;
                                return 12;
                            },
                            normalizeWord (value) {
                                return (value || "").toLowerCase().trim();
                            },
                            entryShardFor (entryId) {
                                const index = Math.floor(entryId / 500);
                                return index < 10 ? "0" + index : "" + index;
                            },
                            keyFor (value) {
                                const word = this.normalizeWord(value);
                                const first = word.charAt(0);
                                return first >= "a" && first <= "z" ? first : "_";
                            },
                            readText (uri, done) {
                                if (this.fileCache[uri]) return void done(this.fileCache[uri]);
                                _system3.default.readText({
                                    uri: uri,
                                    encoding: "utf-8",
                                    success: (data)=>{
                                        if (this.destroyed) return;
                                        const text = data && data.text ? data.text : "";
                                        this.fileCache[uri] = text;
                                        done(text);
                                    },
                                    fail: ()=>{
                                        if (this.destroyed) return;
                                        this.fileCache[uri] = "";
                                        done("");
                                    }
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
                                const sw = this.$app.$def.data.screenWidth || 432;
                                const startsInLeftQuarter = this.touchStartX <= 0.25 * sw;
                                const endsAtRightQuarter = endX >= 0.75 * sw;
                                const mostlyHorizontal = Math.abs(endY - this.touchStartY) <= 120;
                                if (startsInLeftQuarter && endsAtRightQuarter && mostlyHorizontal) {
                                    if (!(0, _navGuard.navGuard)()) return;
                                    _system.default.back();
                                }
                                this.touchStartX = -1;
                                this.touchStartY = -1;
                            },
                            getTouchPoint (evt) {
                                if (evt && evt.changedTouches && evt.changedTouches.length > 0) return evt.changedTouches[0];
                                if (evt && evt.touches && evt.touches.length > 0) return evt.touches[0];
                                return null;
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
                                classList: [
                                    "page"
                                ],
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
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "back-btn"
                                        ],
                                        src: "/common/icons/Back_B.png",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goBack(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "word-area"
                                        ]
                                    }
                                }, [
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.wordMarqueeOn;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("marquee", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "word-marquee"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.contentWidth + "px;");
                                                    },
                                                    scrollamount: function() {
                                                        return _vm_.wordMarqueeSpeed;
                                                    },
                                                    direction: "left",
                                                    loop: "-1",
                                                    textOffset: "40",
                                                    value: function() {
                                                        return _vm_.wordText + " " + _vm_.wordText;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return !_vm_.wordMarqueeOn;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "word-text"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.contentWidth + "px;");
                                                    },
                                                    value: function() {
                                                        return _vm_.wordText;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.phoneticMarqueeOn;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("marquee", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "phonetic-marquee"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.contentWidth + "px;");
                                                    },
                                                    scrollamount: function() {
                                                        return _vm_.phoneticMarqueeSpeed;
                                                    },
                                                    direction: "left",
                                                    loop: "-1",
                                                    textOffset: "40",
                                                    value: function() {
                                                        return _vm_.phoneticText + " " + _vm_.phoneticText;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return !_vm_.phoneticMarqueeOn;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "phonetic-text"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.contentWidth + "px;");
                                                    },
                                                    value: function() {
                                                        return _vm_.phoneticText;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    })
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "content-area"
                                    ]
                                }
                            }, [
                                aiot.__ce__("list", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "meaning-list"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px;");
                                        }
                                    }
                                }, [
                                    aiot.__cf__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            exp: function() {
                                                return _vm_.displayLines;
                                            },
                                            key: "$idx",
                                            value: "item"
                                        }
                                    }, function($idx, item) {
                                        return [
                                            aiot.__ce__("list-item", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "meaning-item"
                                                    ],
                                                    type: "meaningLine"
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: function() {
                                                            const $classValue$ = item.isTag ? "tag-line" : "meaning-line";
                                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                            return $classValue$;
                                                        },
                                                        value: function() {
                                                            return item.text;
                                                        }
                                                    }
                                                }, [])
                                            ])
                                        ];
                                    })
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "bottom-row"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$(_vm_.bottomStyle);
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        src: "/common/icons/Sync_circle.png",
                                        style: {
                                            width: "87px",
                                            height: "60px"
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goInflect(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        src: function() {
                                            return "/common/icons/" + (_vm_.isFavorited ? "collect-circle-true.png" : "collect-circle-false.png");
                                        },
                                        style: {
                                            width: "66px",
                                            height: "66px"
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleFavorite(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ])
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
