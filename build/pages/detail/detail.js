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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGRldGFpbFxcZGV0YWlsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3NyYy9jb21tb24vbmF2R3VhcmQuanMiLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly/ohZXkuIror43lhbgvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3NyYy9wYWdlcy9kZXRhaWwvZGV0YWlsLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIOWvvOiIqumYsui/nueCue+8muaXtumXtOeql+WPo+WGheWPquaUvuihjOS4gOasoemhtemdoui3s+i9rO+8jOmYsuatoui/nueCueaJk+W8gOWkmuS4qumHjeWkjemhtemdolxuLy8g77yI6L+e54K55ZCM5LiA5oyJ6ZKu5LyaIHB1c2gg5aSa5Liq6aG16Z2i5a6e5L6L77yM5a+86Ie06L+U5Zue6ZSu6ZyA6KaB5aSa5oyJ5Yeg5qyh5omN6IO95Zue5LiK5LiA57qn77yJXG52YXIgbGFzdE5hdkF0ID0gMFxudmFyIE5BVl9MT0NLX01TID0gNTAwXG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZHdWFyZCgpIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICBpZiAobm93IC0gbGFzdE5hdkF0IDwgTkFWX0xPQ0tfTVMpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBsYXN0TmF2QXQgPSBub3dcbiAgcmV0dXJuIHRydWVcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoKCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjEyXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTJcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlXCIgb250b3VjaHN0YXJ0PVwib25Ub3VjaFN0YXJ0XCIgb250b3VjaGVuZD1cIm9uVG91Y2hFbmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidG9wLXJvd1wiPlxuICAgICAgPGltYWdlIGNsYXNzPVwiYmFjay1idG5cIiBzcmM9XCIvY29tbW9uL2ljb25zL0JhY2tfQi5wbmdcIiBvbmNsaWNrPVwiZ29CYWNrXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3b3JkLWFyZWFcIj48bWFycXVlZSBpZj1cInt7IHdvcmRNYXJxdWVlT24gfX1cIiBjbGFzcz1cIndvcmQtbWFycXVlZVwiIHN0eWxlPVwid2lkdGg6IHt7Y29udGVudFdpZHRofX1weDtcIlxuICAgICAgICBzY3JvbGxhbW91bnQ9XCJ7eyB3b3JkTWFycXVlZVNwZWVkIH19XCIgZGlyZWN0aW9uPVwibGVmdFwiIGxvb3A9XCItMVwiIHRleHQtb2Zmc2V0PVwiNDBcIj5cbiAgICAgICAge3sgd29yZFRleHQgfX0gICB7eyB3b3JkVGV4dCB9fVxuICAgICAgPC9tYXJxdWVlPlxuICAgICAgPHRleHQgaWY9XCJ7eyAhd29yZE1hcnF1ZWVPbiB9fVwiIGNsYXNzPVwid29yZC10ZXh0XCIgc3R5bGU9XCJ3aWR0aDoge3tjb250ZW50V2lkdGh9fXB4O1wiPnt7IHdvcmRUZXh0IH19PC90ZXh0PlxuICAgICAgPG1hcnF1ZWUgaWY9XCJ7eyBwaG9uZXRpY01hcnF1ZWVPbiB9fVwiIGNsYXNzPVwicGhvbmV0aWMtbWFycXVlZVwiIHN0eWxlPVwid2lkdGg6IHt7Y29udGVudFdpZHRofX1weDtcIlxuICAgICAgICBzY3JvbGxhbW91bnQ9XCJ7eyBwaG9uZXRpY01hcnF1ZWVTcGVlZCB9fVwiIGRpcmVjdGlvbj1cImxlZnRcIiBsb29wPVwiLTFcIiB0ZXh0LW9mZnNldD1cIjQwXCI+XG4gICAgICAgIHt7IHBob25ldGljVGV4dCB9fSAgIHt7IHBob25ldGljVGV4dCB9fVxuICAgICAgPC9tYXJxdWVlPlxuICAgICAgPHRleHQgaWY9XCJ7eyAhcGhvbmV0aWNNYXJxdWVlT24gfX1cIiBjbGFzcz1cInBob25ldGljLXRleHRcIiBzdHlsZT1cIndpZHRoOiB7e2NvbnRlbnRXaWR0aH19cHg7XCI+e3sgcGhvbmV0aWNUZXh0IH19PC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1hcmVhXCI+XG4gICAgICA8bGlzdCBjbGFzcz1cIm1lYW5pbmctbGlzdFwiIHN0eWxlPVwid2lkdGg6IHt7Y2FyZFdpZHRofX1weDtcIj5cbiAgICAgICAgPGxpc3QtaXRlbSBjbGFzcz1cIm1lYW5pbmctaXRlbVwiIHR5cGU9XCJtZWFuaW5nTGluZVwiIGZvcj1cInt7IGl0ZW0gaW4gZGlzcGxheUxpbmVzIH19XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ7eyBpdGVtLmlzVGFnID8gJ3RhZy1saW5lJyA6ICdtZWFuaW5nLWxpbmUnIH19XCI+e3sgaXRlbS50ZXh0IH19PC90ZXh0PlxuICAgICAgICA8L2xpc3QtaXRlbT5cbiAgICAgIDwvbGlzdD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJib3R0b20tcm93XCIgc3R5bGU9XCJ7eyBib3R0b21TdHlsZSB9fVwiPlxuICAgICAgPGltYWdlIHNyYz1cIi9jb21tb24vaWNvbnMvU3luY19jaXJjbGUucG5nXCIgc3R5bGU9XCJ3aWR0aDo4N3B4O2hlaWdodDo2MHB4O1wiIG9uY2xpY2s9XCJnb0luZmxlY3RcIiAvPlxuICAgICAgPGltYWdlIHNyYz1cIi9jb21tb24vaWNvbnMve3sgaXNGYXZvcml0ZWQgPyAnY29sbGVjdC1jaXJjbGUtdHJ1ZS5wbmcnIDogJ2NvbGxlY3QtY2lyY2xlLWZhbHNlLnBuZycgfX1cIiBzdHlsZT1cIndpZHRoOjY2cHg7aGVpZ2h0OjY2cHg7XCIgb25jbGljaz1cInRvZ2dsZUZhdm9yaXRlXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIkBzeXN0ZW0uc3RvcmFnZVwiXG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcbmltcG9ydCBwcm9tcHQgZnJvbSBcIkBzeXN0ZW0ucHJvbXB0XCJcbmltcG9ydCB7bmF2R3VhcmR9IGZyb20gXCIuLi8uLi9jb21tb24vbmF2R3VhcmRcIlxuXG52YXIgVEFHX0NPREVfTUFQID0ge3o6ICd6aycsIGc6ICdnaycsICc0JzogJ2NldDQnLCAnNic6ICdjZXQ2JywgazogJ2t5JywgdDogJ3RvZWZsJywgaTogJ2llbHRzJywgZTogJ2dyZSd9XG52YXIgVEFHX0xBQkVMUyA9IFsnemsnLCAnZ2snLCAnY2V0NCcsICdjZXQ2JywgJ2t5JywgJ2llbHRzJywgJ3RvZWZsJywgJ2dyZSddXG52YXIgTUFYX1BIT05FVElDX0xFTkdUSCA9IDk0XG5cbnZhciBJUEFfU0FGRV9NQVAgPSB7XG4gICdcXHUwMjU5JzogJ2EnLCAnXFx1MDRkOSc6ICdhJywgJ1xcdTAyNWEnOiAncicsICdcXHUwNDU0JzogJ2UnLCAnXFx1MDNiNSc6ICdlJyxcbiAgJ1xcdTAyNmEnOiAnaScsICdcXHUwMmM4JzogXCInXCIsICdcXHUwMmNjJzogJywnLCAnXFx1MDI1MSc6ICdBJywgJ1xcdTAyOGEnOiAnVScsXG4gICdcXHUwMjgzJzogJ1MnLCAnXFx1MDI5Mic6ICdaJywgJ1xcdTAzYjgnOiAnVCcsICdcXHUwMGYwJzogJ0QnLCAnXFx1MDE0Yic6ICdOJyxcbiAgJ1xcdTAyNTQnOiAnTycsICdcXHUwMGU2JzogJ0UnLCAnXFx1MDI1Yic6ICdlJywgJ1xcdTAyNWMnOiAnUicsICdcXHUwMmQwJzogJ3wnLFxuICAnXFx1MDI1Mic6ICdRJywgJ1xcdTAyOGMnOiAnVicsICdcXHUwMjYxJzogJ2cnXG59XG5cbnZhciBQSFJBU0VfREVDT0RFX01BUCA9IHtcbiAgJyEnOiAndnQuICcsICckJzogJ3ZpLiAnLCAnQCc6ICduLiAnLCAnIyc6ICdhLiAnLFxuICAnJSc6ICdhZC4gJywgJ14nOiAncHJlcC4gJywgJyYnOiAnY29uai4gJywgJyonOiAncHJvbi4gJyxcbiAgJygnOiAnaW50LiAnLCAnKSc6ICdudW0uICcsICctJzogJ2FydC4gJywgJz0nOiAnYXV4LiAnLFxuICAneyc6ICdb6K6hXScsICd9JzogJ1vms5VdJywgJ3wnOiAnW+WMu10nLCAnWyc6ICdb55SfXScsXG4gICddJzogJ1vljJZdJywgJzwnOiAnW+eJqV0nLCAnPic6ICdb57uPXSdcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm90ZWN0ZWQ6IHtcbiAgICB3b3JkOiBcIlwiLFxuICAgIHBob25ldGljOiBcIlwiLFxuICAgIHRyYW5zbGF0aW9uOiBcIlwiLFxuICAgIHRhZzogXCJcIixcbiAgICBzZWFyY2hNb2RlOiBcIlwiLFxuICAgIGluZmxlY3REZXB0aDogXCJcIlxuICB9LFxuXG4gIHByaXZhdGU6IHtcbiAgICB3b3JkVGV4dDogXCJcIixcbiAgICBwaG9uZXRpY1RleHQ6IFwiXCIsXG4gICAgdHJhbnNsYXRpb25UZXh0OiBcIlwiLFxuICAgIHRhZ1RleHQ6IFwiXCIsXG4gICAgdGFnTGluZXM6IFtdLFxuICAgIHRyYW5zbGF0aW9uTGluZXM6IFtdLFxuICAgIGNhcmRXaWR0aDogNDEyLFxuICAgIGNvbnRlbnRXaWR0aDogMzg4LFxuICAgIGZhdm9yaXRlTGFiZWw6IFwi5pS26JePXCIsXG4gICAgaXNGYXZvcml0ZWQ6IGZhbHNlLFxuICAgIGZpbGVDYWNoZToge30sXG4gICAgbGFzdFRvYXN0QXQ6IDAsXG4gICAgdG9hc3RDb29sZG93bjogMTUwMCxcbiAgICBsYXN0SW5mbGVjdEF0OiAwLFxuICAgIGluZmxlY3RQcmVzc0Nvb2xkb3duOiAxMDAwLFxuICAgIG1heEluZmxlY3REZXB0aDogMyxcbiAgICB0b3VjaFN0YXJ0WDogLTEsXG4gICAgdG91Y2hTdGFydFk6IC0xLFxuICAgIGRlc3Ryb3llZDogZmFsc2UsXG4gICAgd29yZE1hcnF1ZWVPbjogZmFsc2UsXG4gICAgd29yZE1hcnF1ZWVTcGVlZDogNDAsXG4gICAgd29yZE1hcnF1ZWVUaHJlc2hvbGQ6IDIwLFxuICAgIHBob25ldGljTWFycXVlZU9uOiBmYWxzZSxcbiAgICBwaG9uZXRpY01hcnF1ZWVTcGVlZDogNDAsXG4gICAgd29yZEFyZWFNYXJnaW5MZWZ0OiAxNSxcbiAgICBib3R0b21TdHlsZTogXCJcIixcbiAgICBpbmZsZWN0QnRuU3R5bGU6IFwiXCIsXG4gICAgZmF2b3JpdGVCdG5TdHlsZTogXCJcIixcbiAgICBkaXNwbGF5TGluZXM6IFtdLFxuICAgIGlzUm91bmRTY3JlZW46IGZhbHNlLFxuICAgIGlzQ2Fwc3VsZTogZmFsc2VcbiAgfSxcblxuICBfZXhwYW5kVGFnKHMpIHtcbiAgICBpZiAoIXMpIHJldHVybiAnJ1xuICAgIHMgPSBzLnJlcGxhY2UoL1xcci9nLCAnJylcbiAgICBpZiAocy5pbmRleE9mKCcsJykgPCAwICYmIC9eWzAtOWEtZl0rJC8udGVzdChzKSkge1xuICAgICAgdmFyIG1hc2sgPSBwYXJzZUludChzLCAxNilcbiAgICAgIHZhciBsYWJlbHMgPSBbXVxuICAgICAgZm9yICh2YXIgYml0ID0gMDsgYml0IDwgVEFHX0xBQkVMUy5sZW5ndGg7IGJpdCsrKSB7XG4gICAgICAgIGlmIChtYXNrICYgKDEgPDwgYml0KSkge1xuICAgICAgICAgIGxhYmVscy5wdXNoKFRBR19MQUJFTFNbYml0XSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGxhYmVscy5qb2luKCcgJylcbiAgICB9XG4gICAgcmV0dXJuIHMuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24oYykgeyByZXR1cm4gVEFHX0NPREVfTUFQW2NdIHx8IGMgfSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxuICB9LFxuXG4gIF9ub3JtYWxpemVJcGEocykge1xuICAgIGlmICghcykgcmV0dXJuIHNcbiAgICBzID0gcy5yZXBsYWNlKC9cXHIvZywgJycpLnNsaWNlKDAsIE1BWF9QSE9ORVRJQ19MRU5HVEgpXG4gICAgdmFyIG91dCA9ICcnXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2ggPSBzLmNoYXJBdChpKVxuICAgICAgdmFyIG1hcHBlZCA9IElQQV9TQUZFX01BUFtjaF1cbiAgICAgIGlmIChtYXBwZWQpIHtcbiAgICAgICAgb3V0ICs9IG1hcHBlZFxuICAgICAgfSBlbHNlIGlmIChjaC5jaGFyQ29kZUF0KDApIDwgMTI4KSB7XG4gICAgICAgIG91dCArPSBjaFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0ICs9IFwiP1wiXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRcbiAgfSxcblxuICBfZGVjb2RlUGhyYXNlKHMpIHtcbiAgICBpZiAoIXMpIHJldHVybiBzXG4gICAgcyA9IHMucmVwbGFjZSgvXFxyL2csICcnKVxuICAgIHZhciBvdXQgPSAnJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoID0gcy5jaGFyQXQoaSlcbiAgICAgIG91dCArPSBQSFJBU0VfREVDT0RFX01BUFtjaF0gfHwgY2hcbiAgICB9XG4gICAgcmV0dXJuIG91dFxuICB9LFxuXG4gIG9uSW5pdCgpIHtcbiAgICBjb25zdCBzdyA9IHRoaXMuJGFwcC4kZGVmLmRhdGEuc2NyZWVuV2lkdGggfHwgNDMyXG4gICAgdGhpcy5jYXJkV2lkdGggPSBzdyAtIDIwXG4gICAgdGhpcy5jb250ZW50V2lkdGggPSB0aGlzLmNhcmRXaWR0aCAtIDI0XG4gICAgdGhpcy53b3JkQXJlYU1hcmdpbkxlZnQgPSBzdyA9PT0gNDY2ID8gNDUgOiAxNVxuICAgIHRoaXMuaXNSb3VuZFNjcmVlbiA9IHN3ID09PSA0NjZcbiAgICB0aGlzLmlzQ2Fwc3VsZSA9IHN3ID09PSAxOTIgfHwgc3cgPT09IDIxMlxuICAgIGlmICh0aGlzLmlzUm91bmRTY3JlZW4pIHtcbiAgICAgIHRoaXMuYm90dG9tU3R5bGUgPSBcImp1c3RpZnktY29udGVudDogY2VudGVyO1wiXG4gICAgICB0aGlzLmluZmxlY3RCdG5TdHlsZSA9IFwibWFyZ2luLXJpZ2h0OiA1cHg7XCJcbiAgICAgIHRoaXMuZmF2b3JpdGVCdG5TdHlsZSA9IFwibWFyZ2luLWxlZnQ6IDVweDtcIlxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0NhcHN1bGUpIHtcbiAgICAgIHRoaXMuYm90dG9tU3R5bGUgPSBcIm1hcmdpbi1ib3R0b206IDQwcHg7XCJcbiAgICAgIHRoaXMuaW5mbGVjdEJ0blN0eWxlID0gXCJcIlxuICAgICAgdGhpcy5mYXZvcml0ZUJ0blN0eWxlID0gXCJcIlxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdHRvbVN0eWxlID0gXCJcIlxuICAgICAgdGhpcy5pbmZsZWN0QnRuU3R5bGUgPSBcIlwiXG4gICAgICB0aGlzLmZhdm9yaXRlQnRuU3R5bGUgPSBcIlwiXG4gICAgfVxuICAgIHRoaXMud29yZFRleHQgPSB0aGlzLndvcmQgfHwgXCJcIlxuICAgIHRoaXMucGhvbmV0aWNUZXh0ID0gdGhpcy5waG9uZXRpYyA/IFwiL1wiICsgdGhpcy5fbm9ybWFsaXplSXBhKHRoaXMucGhvbmV0aWMpICsgXCIvXCIgOiBcIlwiXG4gICAgdGhpcy5hcHBseVBob25ldGljTWFycXVlZSh0aGlzLnBob25ldGljVGV4dClcbiAgICB0aGlzLnRyYW5zbGF0aW9uVGV4dCA9IHRoaXMuX2RlY29kZVBocmFzZSh0aGlzLnRyYW5zbGF0aW9uIHx8IFwiXCIpXG4gICAgdGhpcy50YWdUZXh0ID0gdGhpcy5fZXhwYW5kVGFnKHRoaXMudGFnIHx8IFwiXCIpXG4gICAgdGhpcy53b3JkTWFycXVlZVRocmVzaG9sZCA9IHRoaXMucmVzb2x2ZVdvcmRNYXJxdWVlVGhyZXNob2xkKHN3KVxuICAgIHRoaXMuYXBwbHlXb3JkTWFycXVlZSh0aGlzLndvcmRUZXh0KVxuICAgIGNvbnN0IHRhZ0xpbmVzID0gdGhpcy50YWdUZXh0ID8gdGhpcy50YWdUZXh0LnNwbGl0KFwiIFwiKSA6IFtdXG4gICAgY29uc3Qgd3JhcFcgPSB0aGlzLmNvbnRlbnRXaWR0aCAtIDI0XG4gICAgdGhpcy50cmFuc2xhdGlvbkxpbmVzID0gdGhpcy53cmFwVGV4dCh0aGlzLnRyYW5zbGF0aW9uVGV4dCwgd3JhcFcpXG4gICAgaWYgKHRoaXMudHJhbnNsYXRpb25MaW5lcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudHJhbnNsYXRpb25MaW5lcyA9IFtcIlwiXVxuICAgIH1cbiAgICB0aGlzLmRpc3BsYXlMaW5lcyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYW5zbGF0aW9uTGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZGlzcGxheUxpbmVzLnB1c2goeyB0ZXh0OiB0aGlzLnRyYW5zbGF0aW9uTGluZXNbaV0sIGlzVGFnOiBmYWxzZSB9KVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ0xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRpc3BsYXlMaW5lcy5wdXNoKHsgdGV4dDogdGFnTGluZXNbaV0sIGlzVGFnOiB0cnVlIH0pXG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEZhdm9yaXRlU3RhdGUoKVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWVcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZ2xvYmFsLnJ1bkdDID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGdsb2JhbC5ydW5HQygpXG4gICAgfVxuICB9LFxuXG4gIGdvQmFjaygpIHtcbiAgICBpZiAoIW5hdkd1YXJkKCkpIHJldHVyblxuICAgIHJvdXRlci5iYWNrKClcbiAgfSxcblxuICByZXNvbHZlV29yZE1hcnF1ZWVUaHJlc2hvbGQoc3cpIHtcbiAgICBpZiAoc3cgPT09IDE5MikgcmV0dXJuIDhcbiAgICBpZiAoc3cgPT09IDIxMikgcmV0dXJuIDlcbiAgICBpZiAoc3cgPT09IDMzNikgcmV0dXJuIDE2XG4gICAgaWYgKHN3ID09PSA0MzIpIHJldHVybiAyMFxuICAgIGlmIChzdyA9PT0gNDY2KSByZXR1cm4gMjBcbiAgICByZXR1cm4gOVxuICB9LFxuXG4gIGFwcGx5V29yZE1hcnF1ZWUodGV4dCkge1xuICAgIGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gdGhpcy53b3JkTWFycXVlZVRocmVzaG9sZCkge1xuICAgICAgdGhpcy53b3JkTWFycXVlZU9uID0gdHJ1ZVxuICAgICAgY29uc3QgZXh0cmEgPSB0ZXh0Lmxlbmd0aCAtIHRoaXMud29yZE1hcnF1ZWVUaHJlc2hvbGRcbiAgICAgIHRoaXMud29yZE1hcnF1ZWVTcGVlZCA9IE1hdGgubWF4KDQwLCBNYXRoLm1pbig2MCwgTWF0aC5yb3VuZCg0MCArIGV4dHJhICogMS41KSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZE1hcnF1ZWVPbiA9IGZhbHNlXG4gICAgICB0aGlzLndvcmRNYXJxdWVlU3BlZWQgPSA0MFxuICAgIH1cbiAgfSxcblxuICBhcHBseVBob25ldGljTWFycXVlZSh0ZXh0KSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLm1lYXN1cmVUZXh0V2lkdGgodGV4dCB8fCBcIlwiKVxuICAgIGlmICh0ZXh0ICYmIHdpZHRoID4gdGhpcy5jb250ZW50V2lkdGgpIHtcbiAgICAgIHRoaXMucGhvbmV0aWNNYXJxdWVlT24gPSB0cnVlXG4gICAgICB0aGlzLnBob25ldGljTWFycXVlZVNwZWVkID0gTWF0aC5tYXgoNDAsIE1hdGgubWluKDYwLCBNYXRoLnJvdW5kKDQwICsgKHdpZHRoIC0gdGhpcy5jb250ZW50V2lkdGgpIC8gMTIpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waG9uZXRpY01hcnF1ZWVPbiA9IGZhbHNlXG4gICAgICB0aGlzLnBob25ldGljTWFycXVlZVNwZWVkID0gNDBcbiAgICB9XG4gIH0sXG5cbiAgZ29JbmZsZWN0KCkge1xuICAgIGlmICghdGhpcy53b3JkVGV4dCB8fCAhbmF2R3VhcmQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSB0aGlzLmxhc3RJbmZsZWN0QXQgPCB0aGlzLmluZmxlY3RQcmVzc0Nvb2xkb3duKSB7XG4gICAgICB0aGlzLnNob3dUb2FzdChcIuaTjeS9nOWkquW/q1wiKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMubGFzdEluZmxlY3RBdCA9IG5vd1xuXG4gICAgY29uc3QgZGVwdGggPSB0aGlzLmN1cnJlbnRJbmZsZWN0RGVwdGgoKVxuICAgIGlmIChkZXB0aCA+PSB0aGlzLm1heEluZmxlY3REZXB0aCkge1xuICAgICAgdGhpcy5zaG93VG9hc3QoXCLmnIDlpJrmn6XkuInlsYJcIilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJvdXRlci5yZXBsYWNlKHtcbiAgICAgIHVyaTogXCIvcGFnZXMvcmVzdWx0c1wiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHF1ZXJ5OiB0aGlzLndvcmRUZXh0LFxuICAgICAgICBzZWFyY2hNb2RlOiBcImluZmxlY3RcIixcbiAgICAgICAgaW5mbGVjdERlcHRoOiBcIlwiICsgKGRlcHRoICsgMSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGN1cnJlbnRJbmZsZWN0RGVwdGgoKSB7XG4gICAgY29uc3QgZGVwdGggPSBwYXJzZUludCh0aGlzLmluZmxlY3REZXB0aClcbiAgICBpZiAoaXNOYU4oZGVwdGgpIHx8IGRlcHRoIDwgMCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoXG4gIH0sXG5cbiAgc2hvd1RvYXN0KG1lc3NhZ2UpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgaWYgKG5vdyAtIHRoaXMubGFzdFRvYXN0QXQgPCB0aGlzLnRvYXN0Q29vbGRvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmxhc3RUb2FzdEF0ID0gbm93XG4gICAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgZHVyYXRpb246IDE1MDBcbiAgICB9KVxuICB9LFxuXG4gIHRvZ2dsZUZhdm9yaXRlKCkge1xuICAgIGlmICghdGhpcy53b3JkVGV4dCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmN1cnJlbnRJdGVtKClcbiAgICBzdG9yYWdlLmdldCh7XG4gICAgICBrZXk6IFwiZGljX2Zhdm9yaXRlc1wiLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMucGFyc2VMaXN0KGRhdGEpXG4gICAgICAgIHRoaXMud3JpdGVGYXZvcml0ZUxpc3QobGlzdCwgaXRlbSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JpdGVGYXZvcml0ZUxpc3QoW10sIGl0ZW0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB3cml0ZUZhdm9yaXRlTGlzdChsaXN0LCBpdGVtKSB7XG4gICAgY29uc3Qgd29yZCA9IHRoaXMubm9ybWFsaXplV29yZChpdGVtLndvcmQpXG4gICAgbGV0IGV4aXN0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IG91dHB1dCA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9sZEl0ZW0gPSBsaXN0W2ldXG4gICAgICBpZiAob2xkSXRlbSAmJiB0aGlzLm5vcm1hbGl6ZVdvcmQob2xkSXRlbS53b3JkKSA9PT0gd29yZCkge1xuICAgICAgICBleGlzdGVkID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChvbGRJdGVtICYmIG91dHB1dC5sZW5ndGggPCAxNTApIHtcbiAgICAgICAgb3V0cHV0LnB1c2gob2xkSXRlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWV4aXN0ZWQpIHtcbiAgICAgIGlmIChvdXRwdXQubGVuZ3RoID49IDE1MCkge1xuICAgICAgICB0aGlzLnNob3dUb2FzdChcIuaUtuiXj+W3sui+vuS4iumZkO+8iDE1MO+8iVwiKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG91dHB1dC51bnNoaWZ0KGl0ZW0pXG4gICAgICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA+IDE1MCkge1xuICAgICAgICBvdXRwdXQucG9wKClcbiAgICAgIH1cbiAgICAgIHRoaXMuZmF2b3JpdGVMYWJlbCA9IFwi5bey5pS26JePXCJcbiAgICAgIHRoaXMuaXNGYXZvcml0ZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVMYWJlbCA9IFwi5pS26JePXCJcbiAgICAgIHRoaXMuaXNGYXZvcml0ZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHN0b3JhZ2Uuc2V0KHtcbiAgICAgIGtleTogXCJkaWNfZmF2b3JpdGVzXCIsXG4gICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkob3V0cHV0KVxuICAgIH0pXG4gIH0sXG5cbiAgcmVmcmVzaEZhdm9yaXRlU3RhdGUoKSB7XG4gICAgc3RvcmFnZS5nZXQoe1xuICAgICAga2V5OiBcImRpY19mYXZvcml0ZXNcIixcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLnBhcnNlTGlzdChkYXRhKVxuICAgICAgICBjb25zdCB3b3JkID0gdGhpcy5ub3JtYWxpemVXb3JkKHRoaXMud29yZFRleHQpXG4gICAgICAgIHRoaXMuZmF2b3JpdGVMYWJlbCA9IFwi5pS26JePXCJcbiAgICAgICAgdGhpcy5pc0Zhdm9yaXRlZCA9IGZhbHNlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChsaXN0W2ldICYmIHRoaXMubm9ybWFsaXplV29yZChsaXN0W2ldLndvcmQpID09PSB3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlTGFiZWwgPSBcIuW3suaUtuiXj1wiXG4gICAgICAgICAgICB0aGlzLmlzRmF2b3JpdGVkID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgICAgICB0aGlzLmZhdm9yaXRlTGFiZWwgPSBcIuaUtuiXj1wiXG4gICAgICAgIHRoaXMuaXNGYXZvcml0ZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgY3VycmVudEl0ZW0oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdvcmQ6IHRoaXMud29yZFRleHQsXG4gICAgICBwaG9uZXRpYzogdGhpcy5waG9uZXRpYyB8fCBcIlwiLFxuICAgICAgdHJhbnNsYXRpb246IHRoaXMudHJhbnNsYXRpb25UZXh0LFxuICAgICAgdGFnOiB0aGlzLnRhZ1RleHRcbiAgICB9XG4gIH0sXG5cbiAgcGFyc2VMaXN0KGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gZGF0YS52YWx1ZSA/IGRhdGEudmFsdWUgOiBkYXRhXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBKU09OLnBhcnNlKHRleHQpXG4gICAgICBpZiAobGlzdCAmJiBsaXN0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbGlzdFxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ1vohZXkuIror43lhbhdIHN0b3JhZ2UgZGF0YSBwYXJzZSBmYWlsZWQ6JywgZXJyICYmIGVyci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9LFxuXG4gIHdyYXBUZXh0KHZhbHVlLCBtYXhXaWR0aCkge1xuICAgIGNvbnN0IHRleHQgPSAodmFsdWUgfHwgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBsaW5lcyA9IFtdXG4gICAgbGV0IGxpbmUgPSBcIlwiXG4gICAgbGV0IHdpZHRoID0gMFxuICAgIGxldCBsYXN0QnJlYWsgPSAtMVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaCA9IHRleHQuY2hhckF0KGkpXG4gICAgICBjb25zdCBjaFdpZHRoID0gdGhpcy5nZXRDaGFyV2lkdGgoY2gpXG5cbiAgICAgIGlmICh3aWR0aCArIGNoV2lkdGggPiBtYXhXaWR0aCAmJiBsaW5lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGxhc3RCcmVhayA+IDApIHtcbiAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUuc2xpY2UoMCwgbGFzdEJyZWFrKS50cmltKCkpXG4gICAgICAgICAgbGluZSA9IGxpbmUuc2xpY2UobGFzdEJyZWFrKS50cmltKCkgKyBjaFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmVzLnB1c2gobGluZS50cmltKCkpXG4gICAgICAgICAgbGluZSA9IGNoXG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSB0aGlzLm1lYXN1cmVUZXh0V2lkdGgobGluZSlcbiAgICAgICAgbGFzdEJyZWFrID0gdGhpcy5maW5kTGFzdEJyZWFrKGxpbmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lICs9IGNoXG4gICAgICAgIHdpZHRoICs9IGNoV2lkdGhcbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSBcIiBcIiB8fCBjaCA9PT0gXCI7XCIgfHwgY2ggPT09IFwiLFwiIHx8IGNoID09PSBcIu+8jFwiIHx8IGNoID09PSBcIu+8m1wiKSB7XG4gICAgICAgIGxhc3RCcmVhayA9IGxpbmUubGVuZ3RoXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxpbmUudHJpbSgpKSB7XG4gICAgICBsaW5lcy5wdXNoKGxpbmUudHJpbSgpKVxuICAgIH1cbiAgICByZXR1cm4gbGluZXNcbiAgfSxcblxuICBtZWFzdXJlVGV4dFdpZHRoKHZhbHVlKSB7XG4gICAgbGV0IHdpZHRoID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpZHRoICs9IHRoaXMuZ2V0Q2hhcldpZHRoKHZhbHVlLmNoYXJBdChpKSlcbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoXG4gIH0sXG5cbiAgZmluZExhc3RCcmVhayh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSB2YWx1ZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY2ggPSB2YWx1ZS5jaGFyQXQoaSlcbiAgICAgIGlmIChjaCA9PT0gXCIgXCIgfHwgY2ggPT09IFwiO1wiIHx8IGNoID09PSBcIixcIiB8fCBjaCA9PT0gXCLvvIxcIiB8fCBjaCA9PT0gXCLvvJtcIikge1xuICAgICAgICByZXR1cm4gaSArIDFcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xXG4gIH0sXG5cbiAgZ2V0Q2hhcldpZHRoKGNoKSB7XG4gICAgaWYgKCFjaCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgaWYgKGNoID49IFwiXFx1NGUwMFwiICYmIGNoIDw9IFwiXFx1OWZmZlwiKSB7XG4gICAgICByZXR1cm4gMjBcbiAgICB9XG4gICAgaWYgKGNoID49IFwiQVwiICYmIGNoIDw9IFwiWlwiKSB7XG4gICAgICByZXR1cm4gMTJcbiAgICB9XG4gICAgaWYgKGNoID49IFwiYVwiICYmIGNoIDw9IFwielwiKSB7XG4gICAgICByZXR1cm4gMTFcbiAgICB9XG4gICAgaWYgKGNoID49IFwiMFwiICYmIGNoIDw9IFwiOVwiKSB7XG4gICAgICByZXR1cm4gMTFcbiAgICB9XG4gICAgaWYgKGNoID09PSBcIiBcIiB8fCBjaCA9PT0gXCIuXCIgfHwgY2ggPT09IFwiLFwiIHx8IGNoID09PSBcIjtcIiB8fCBjaCA9PT0gXCI6XCIgfHwgY2ggPT09IFwiL1wiIHx8IGNoID09PSBcIi1cIikge1xuICAgICAgcmV0dXJuIDdcbiAgICB9XG4gICAgcmV0dXJuIDEyXG4gIH0sXG5cbiAgbm9ybWFsaXplV29yZCh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKS50cmltKClcbiAgfSxcblxuICBlbnRyeVNoYXJkRm9yKGVudHJ5SWQpIHtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoZW50cnlJZCAvIDUwMClcbiAgICByZXR1cm4gaW5kZXggPCAxMCA/IFwiMFwiICsgaW5kZXggOiBcIlwiICsgaW5kZXhcbiAgfSxcblxuICBrZXlGb3IodmFsdWUpIHtcbiAgICBjb25zdCB3b3JkID0gdGhpcy5ub3JtYWxpemVXb3JkKHZhbHVlKVxuICAgIGNvbnN0IGZpcnN0ID0gd29yZC5jaGFyQXQoMClcbiAgICByZXR1cm4gZmlyc3QgPj0gXCJhXCIgJiYgZmlyc3QgPD0gXCJ6XCIgPyBmaXJzdCA6IFwiX1wiXG4gIH0sXG5cbiAgcmVhZFRleHQodXJpLCBkb25lKSB7XG4gICAgaWYgKHRoaXMuZmlsZUNhY2hlW3VyaV0pIHtcbiAgICAgIGRvbmUodGhpcy5maWxlQ2FjaGVbdXJpXSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmaWxlLnJlYWRUZXh0KHtcbiAgICAgIHVyaTogdXJpLFxuICAgICAgZW5jb2Rpbmc6IFwidXRmLThcIixcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiXCJcbiAgICAgICAgdGhpcy5maWxlQ2FjaGVbdXJpXSA9IHRleHRcbiAgICAgICAgZG9uZSh0ZXh0KVxuICAgICAgfSxcbiAgICAgIGZhaWw6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICAgICAgdGhpcy5maWxlQ2FjaGVbdXJpXSA9IFwiXCJcbiAgICAgICAgZG9uZShcIlwiKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgb25Ub3VjaFN0YXJ0KGV2dCkge1xuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2dClcbiAgICBpZiAocG9pbnQpIHtcbiAgICAgIHRoaXMudG91Y2hTdGFydFggPSBwb2ludC5jbGllbnRYXG4gICAgICB0aGlzLnRvdWNoU3RhcnRZID0gcG9pbnQuY2xpZW50WVxuICAgIH1cbiAgfSxcblxuICBvblRvdWNoRW5kKGV2dCkge1xuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2dClcbiAgICBpZiAoIXBvaW50IHx8IHRoaXMudG91Y2hTdGFydFggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbmRYID0gcG9pbnQuY2xpZW50WFxuICAgIGNvbnN0IGVuZFkgPSBwb2ludC5jbGllbnRZXG4gICAgY29uc3Qgc3cgPSB0aGlzLiRhcHAuJGRlZi5kYXRhLnNjcmVlbldpZHRoIHx8IDQzMlxuICAgIGNvbnN0IHN0YXJ0c0luTGVmdFF1YXJ0ZXIgPSB0aGlzLnRvdWNoU3RhcnRYIDw9IHN3ICogMC4yNVxuICAgIGNvbnN0IGVuZHNBdFJpZ2h0UXVhcnRlciA9IGVuZFggPj0gc3cgKiAwLjc1XG4gICAgY29uc3QgbW9zdGx5SG9yaXpvbnRhbCA9IE1hdGguYWJzKGVuZFkgLSB0aGlzLnRvdWNoU3RhcnRZKSA8PSAxMjBcblxuICAgIGlmIChzdGFydHNJbkxlZnRRdWFydGVyICYmIGVuZHNBdFJpZ2h0UXVhcnRlciAmJiBtb3N0bHlIb3Jpem9udGFsKSB7XG4gICAgICBpZiAoIW5hdkd1YXJkKCkpIHJldHVyblxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH1cblxuICAgIHRoaXMudG91Y2hTdGFydFggPSAtMVxuICAgIHRoaXMudG91Y2hTdGFydFkgPSAtMVxuICB9LFxuXG4gIGdldFRvdWNoUG9pbnQoZXZ0KSB7XG4gICAgaWYgKGV2dCAmJiBldnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZ0LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBldnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICB9XG4gICAgaWYgKGV2dCAmJiBldnQudG91Y2hlcyAmJiBldnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZXZ0LnRvdWNoZXNbMF1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHtcbiAgd2lkdGg6IDQzMnB4O1xuICBoZWlnaHQ6IDUxNHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwODEzO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wLXJvdyB7XG4gIHdpZHRoOiA0MzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uYmFjay1idG4ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ud29yZC1hcmVhIHtcbiAgd2lkdGg6IDM4MHB4O1xuICBtYXJnaW46IDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ud29yZC10ZXh0LFxuLndvcmQtbWFycXVlZSB7XG4gIHdpZHRoOiAzODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi53b3JkLW1hcnF1ZWUge1xuICBsaW5lczogMTtcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbn1cblxuLnBob25ldGljLXRleHQsXG4ucGhvbmV0aWMtbWFycXVlZSB7XG4gIGhlaWdodDogMzZweDtcbiAgY29sb3I6ICNhOWM4ZjY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBob25ldGljLW1hcnF1ZWUge1xuICBsaW5lczogMTtcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbn1cblxuLmNvbnRlbnQtYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZWFuaW5nLWxpc3Qge1xuICB3aWR0aDogNDEycHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1lYW5pbmctaXRlbSB7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLm1lYW5pbmctbGluZSB7XG4gIGhlaWdodDogMzhweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZTlmMmZmO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGxpbmVzOiAxO1xuICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xufVxuXG4udGFnLWxpbmUge1xuICBoZWlnaHQ6IDM4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzZiYTNlODtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uYm90dG9tLXJvdyB7XG4gIHdpZHRoOiA0MTJweDtcbiAgaGVpZ2h0OiA2NnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuPC9zdHlsZT4iXSwibmFtZXMiOlsibGFzdE5hdkF0IiwiTkFWX0xPQ0tfTVMiLCJuYXZHdWFyZCIsIm5vdyIsIkRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9uYXZHdWFyZCIsInJlcXVpcmUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIlRBR19DT0RFX01BUCIsInoiLCJnIiwiayIsInQiLCJpIiwiVEFHX0xBQkVMUyIsIk1BWF9QSE9ORVRJQ19MRU5HVEgiLCJJUEFfU0FGRV9NQVAiLCJQSFJBU0VfREVDT0RFX01BUCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsIndvcmQiLCJwaG9uZXRpYyIsInRyYW5zbGF0aW9uIiwidGFnIiwic2VhcmNoTW9kZSIsImluZmxlY3REZXB0aCIsInByaXZhdGUiLCJ3b3JkVGV4dCIsInBob25ldGljVGV4dCIsInRyYW5zbGF0aW9uVGV4dCIsInRhZ1RleHQiLCJ0YWdMaW5lcyIsInRyYW5zbGF0aW9uTGluZXMiLCJjYXJkV2lkdGgiLCJjb250ZW50V2lkdGgiLCJmYXZvcml0ZUxhYmVsIiwiaXNGYXZvcml0ZWQiLCJmaWxlQ2FjaGUiLCJsYXN0VG9hc3RBdCIsInRvYXN0Q29vbGRvd24iLCJsYXN0SW5mbGVjdEF0IiwiaW5mbGVjdFByZXNzQ29vbGRvd24iLCJtYXhJbmZsZWN0RGVwdGgiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoU3RhcnRZIiwiZGVzdHJveWVkIiwid29yZE1hcnF1ZWVPbiIsIndvcmRNYXJxdWVlU3BlZWQiLCJ3b3JkTWFycXVlZVRocmVzaG9sZCIsInBob25ldGljTWFycXVlZU9uIiwicGhvbmV0aWNNYXJxdWVlU3BlZWQiLCJ3b3JkQXJlYU1hcmdpbkxlZnQiLCJib3R0b21TdHlsZSIsImluZmxlY3RCdG5TdHlsZSIsImZhdm9yaXRlQnRuU3R5bGUiLCJkaXNwbGF5TGluZXMiLCJpc1JvdW5kU2NyZWVuIiwiaXNDYXBzdWxlIiwiX2V4cGFuZFRhZyIsInMiLCJyZXBsYWNlIiwiaW5kZXhPZiIsInRlc3QiLCJtYXNrIiwicGFyc2VJbnQiLCJsYWJlbHMiLCJiaXQiLCJsZW5ndGgiLCJwdXNoIiwiam9pbiIsInNwbGl0IiwibWFwIiwiYyIsImZpbHRlciIsIkJvb2xlYW4iLCJfbm9ybWFsaXplSXBhIiwic2xpY2UiLCJvdXQiLCJjaCIsImNoYXJBdCIsIm1hcHBlZCIsImNoYXJDb2RlQXQiLCJfZGVjb2RlUGhyYXNlIiwib25Jbml0Iiwic3ciLCIkYXBwIiwiJGRlZiIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImFwcGx5UGhvbmV0aWNNYXJxdWVlIiwicmVzb2x2ZVdvcmRNYXJxdWVlVGhyZXNob2xkIiwiYXBwbHlXb3JkTWFycXVlZSIsIndyYXBXIiwid3JhcFRleHQiLCJ0ZXh0IiwiaXNUYWciLCJyZWZyZXNoRmF2b3JpdGVTdGF0ZSIsIm9uRGVzdHJveSIsImdsb2JhbCIsInJ1bkdDIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayIsImV4dHJhIiwiTWF0aCIsIm1heCIsIm1pbiIsInJvdW5kIiwid2lkdGgiLCJtZWFzdXJlVGV4dFdpZHRoIiwiZ29JbmZsZWN0Iiwic2hvd1RvYXN0IiwiZGVwdGgiLCJjdXJyZW50SW5mbGVjdERlcHRoIiwidXJpIiwicGFyYW1zIiwicXVlcnkiLCJpc05hTiIsIm1lc3NhZ2UiLCJwcm9tcHQiLCJkdXJhdGlvbiIsInRvZ2dsZUZhdm9yaXRlIiwiaXRlbSIsImN1cnJlbnRJdGVtIiwic3RvcmFnZSIsImdldCIsImtleSIsInN1Y2Nlc3MiLCJsaXN0IiwicGFyc2VMaXN0Iiwid3JpdGVGYXZvcml0ZUxpc3QiLCJmYWlsIiwibm9ybWFsaXplV29yZCIsImV4aXN0ZWQiLCJvdXRwdXQiLCJvbGRJdGVtIiwidW5zaGlmdCIsInBvcCIsInNldCIsInZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1heFdpZHRoIiwidHJpbSIsImxpbmVzIiwibGluZSIsImxhc3RCcmVhayIsImNoV2lkdGgiLCJnZXRDaGFyV2lkdGgiLCJmaW5kTGFzdEJyZWFrIiwidG9Mb3dlckNhc2UiLCJlbnRyeVNoYXJkRm9yIiwiZW50cnlJZCIsImluZGV4IiwiZmxvb3IiLCJrZXlGb3IiLCJmaXJzdCIsInJlYWRUZXh0IiwiZG9uZSIsImZpbGUiLCJlbmNvZGluZyIsIm9uVG91Y2hTdGFydCIsImV2dCIsInBvaW50IiwiZ2V0VG91Y2hQb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaEVuZCIsImVuZFgiLCJlbmRZIiwic3RhcnRzSW5MZWZ0UXVhcnRlciIsImVuZHNBdFJpZ2h0UXVhcnRlciIsIm1vc3RseUhvcml6b250YWwiLCJhYnMiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUVBLElBQUlBLFlBQVk7d0JBQ2hCLElBQUlDLGNBQWM7d0JBRVgsU0FBU0M7NEJBQ2QsTUFBTUMsTUFBTUMsS0FBS0QsR0FBRzs0QkFDcEIsSUFBSUEsTUFBTUgsWUFBWUMsYUFDcEIsT0FBTzs0QkFFVEQsWUFBWUc7NEJBQ1osT0FBTzt3QkFDVDs7Ozs7Ozs7Ozs7Ozs7b0JDWkFFLG9CQUFvQixDQUFDLEdBQUcsQUFBQzt3QkFDeEIsSUFBSSxBQUFzQixZQUF0QixPQUFPQyxZQUF5QixPQUFPQTt3QkFDM0MsSUFBSTs0QkFDSCxPQUFPLElBQUksSUFBSSxJQUFJQyxTQUFTO3dCQUM3QixFQUFFLE9BQU9DLEdBQUc7NEJBQ1gsSUFBSSxBQUFrQixZQUFsQixPQUFPQyxRQUFxQixPQUFPQTt3QkFDeEM7b0JBQ0Q7OztvQkNQQUosb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDaUMzQixJQUFBSyxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRSxXQUFBSCx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRyxXQUFBSix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBSSxZQUFBQyxvQkFBQTt3QkFBOEMsU0FBQU4sdUJBQUFILENBQUE7NEJBQUEsT0FBQUEsS0FBQUEsRUFBQVUsVUFBQSxHQUFBVixJQUFBO2dDQUFBVyxTQUFBWDs0QkFBQTt3QkFBQTt3QkFFOUMsSUFBSVksZUFBZTs0QkFBQ0MsR0FBRzs0QkFBTUMsR0FBRzs0QkFBTSxHQUFLOzRCQUFRLEdBQUs7NEJBQVFDLEdBQUc7NEJBQU1DLEdBQUc7NEJBQVNDLEdBQUc7NEJBQVNqQixHQUFHO3dCQUFLO3dCQUN6RyxJQUFJa0IsYUFBYTs0QkFBQzs0QkFBTTs0QkFBTTs0QkFBUTs0QkFBUTs0QkFBTTs0QkFBUzs0QkFBUzt5QkFBTTt3QkFDNUUsSUFBSUMsc0JBQXNCO3dCQUUxQixJQUFJQyxlQUFlOzRCQUNqQixHQUFVOzRCQUFLLEdBQVU7NEJBQUssR0FBVTs0QkFBSyxHQUFVOzRCQUFLLEdBQVU7NEJBQ3RFLEdBQVU7NEJBQUssR0FBVTs0QkFBSyxHQUFVOzRCQUFLLEdBQVU7NEJBQUssR0FBVTs0QkFDdEUsR0FBVTs0QkFBSyxHQUFVOzRCQUFLLEdBQVU7NEJBQUssR0FBVTs0QkFBSyxHQUFVOzRCQUN0RSxHQUFVOzRCQUFLLEdBQVU7NEJBQUssR0FBVTs0QkFBSyxHQUFVOzRCQUFLLEdBQVU7NEJBQ3RFLEdBQVU7NEJBQUssR0FBVTs0QkFBSyxHQUFVO3dCQUMxQzt3QkFFQSxJQUFJQyxvQkFBb0I7NEJBQ3RCLEtBQUs7NEJBQVEsR0FBSzs0QkFBUSxLQUFLOzRCQUFPLEtBQUs7NEJBQzNDLEtBQUs7NEJBQVEsS0FBSzs0QkFBVSxLQUFLOzRCQUFVLEtBQUs7NEJBQ2hELEtBQUs7NEJBQVMsS0FBSzs0QkFBUyxLQUFLOzRCQUFTLEtBQUs7NEJBQy9DLEtBQUs7NEJBQU8sS0FBSzs0QkFBTyxLQUFLOzRCQUFPLEtBQUs7NEJBQ3pDLEtBQUs7NEJBQU8sS0FBSzs0QkFBTyxLQUFLO3dCQUMvQjt3QkFBQyxJQUFBQyxXQUFBQyxRQUFBWixPQUFBLEdBRWM7NEJBQ2JhLFdBQVc7Z0NBQ1RDLE1BQU07Z0NBQ05DLFVBQVU7Z0NBQ1ZDLGFBQWE7Z0NBQ2JDLEtBQUs7Z0NBQ0xDLFlBQVk7Z0NBQ1pDLGNBQWM7NEJBQ2hCOzRCQUVBQyxTQUFTO2dDQUNQQyxVQUFVO2dDQUNWQyxjQUFjO2dDQUNkQyxpQkFBaUI7Z0NBQ2pCQyxTQUFTO2dDQUNUQyxVQUFVLEVBQUU7Z0NBQ1pDLGtCQUFrQixFQUFFO2dDQUNwQkMsV0FBVztnQ0FDWEMsY0FBYztnQ0FDZEMsZUFBZTtnQ0FDZkMsYUFBYTtnQ0FDYkMsV0FBVyxDQUFDO2dDQUNaQyxhQUFhO2dDQUNiQyxlQUFlO2dDQUNmQyxlQUFlO2dDQUNmQyxzQkFBc0I7Z0NBQ3RCQyxpQkFBaUI7Z0NBQ2pCQyxhQUFhO2dDQUNiQyxhQUFhO2dDQUNiQyxXQUFXO2dDQUNYQyxlQUFlO2dDQUNmQyxrQkFBa0I7Z0NBQ2xCQyxzQkFBc0I7Z0NBQ3RCQyxtQkFBbUI7Z0NBQ25CQyxzQkFBc0I7Z0NBQ3RCQyxvQkFBb0I7Z0NBQ3BCQyxhQUFhO2dDQUNiQyxpQkFBaUI7Z0NBQ2pCQyxrQkFBa0I7Z0NBQ2xCQyxjQUFjLEVBQUU7Z0NBQ2hCQyxlQUFlO2dDQUNmQyxXQUFXOzRCQUNiOzRCQUVBQyxZQUFXQyxDQUFDO2dDQUNWLElBQUksQ0FBQ0EsR0FBRyxPQUFPO2dDQUNmQSxJQUFJQSxFQUFFQyxPQUFPLENBQUMsT0FBTztnQ0FDckIsSUFBSUQsRUFBRUUsT0FBTyxDQUFDLE9BQU8sS0FBSyxjQUFjQyxJQUFJLENBQUNILElBQUk7b0NBQy9DLElBQUlJLE9BQU9DLFNBQVNMLEdBQUc7b0NBQ3ZCLElBQUlNLFNBQVMsRUFBRTtvQ0FDZixJQUFLLElBQUlDLE1BQU0sR0FBR0EsTUFBTXJELFdBQVdzRCxNQUFNLEVBQUVELE1BQ3pDLElBQUlILE9BQVEsS0FBS0csS0FDZkQsT0FBT0csSUFBSSxDQUFDdkQsVUFBVSxDQUFDcUQsSUFBSTtvQ0FHL0IsT0FBT0QsT0FBT0ksSUFBSSxDQUFDO2dDQUNyQjtnQ0FDQSxPQUFPVixFQUFFVyxLQUFLLENBQUMsS0FBS0MsR0FBRyxDQUFDLFNBQVNDLENBQUM7b0NBQUksT0FBT2pFLFlBQVksQ0FBQ2lFLEVBQUUsSUFBSUE7Z0NBQUUsR0FBR0MsTUFBTSxDQUFDQyxTQUFTTCxJQUFJLENBQUM7NEJBQzVGOzRCQUVBTSxlQUFjaEIsQ0FBQztnQ0FDYixJQUFJLENBQUNBLEdBQUcsT0FBT0E7Z0NBQ2ZBLElBQUlBLEVBQUVDLE9BQU8sQ0FBQyxPQUFPLElBQUlnQixLQUFLLENBQUMsR0FBRzlEO2dDQUNsQyxJQUFJK0QsTUFBTTtnQ0FDVixJQUFLLElBQUlqRSxJQUFJLEdBQUdBLElBQUkrQyxFQUFFUSxNQUFNLEVBQUV2RCxJQUFLO29DQUNqQyxJQUFJa0UsS0FBS25CLEVBQUVvQixNQUFNLENBQUNuRTtvQ0FDbEIsSUFBSW9FLFNBQVNqRSxZQUFZLENBQUMrRCxHQUFHO29DQUM3QixJQUFJRSxRQUNGSCxPQUFPRzt5Q0FDRixJQUFJRixHQUFHRyxVQUFVLENBQUMsS0FBSyxLQUM1QkosT0FBT0M7eUNBRVBELE9BQU87Z0NBRVg7Z0NBQ0EsT0FBT0E7NEJBQ1Q7NEJBRUFLLGVBQWN2QixDQUFDO2dDQUNiLElBQUksQ0FBQ0EsR0FBRyxPQUFPQTtnQ0FDZkEsSUFBSUEsRUFBRUMsT0FBTyxDQUFDLE9BQU87Z0NBQ3JCLElBQUlpQixNQUFNO2dDQUNWLElBQUssSUFBSWpFLElBQUksR0FBR0EsSUFBSStDLEVBQUVRLE1BQU0sRUFBRXZELElBQUs7b0NBQ2pDLElBQUlrRSxLQUFLbkIsRUFBRW9CLE1BQU0sQ0FBQ25FO29DQUNsQmlFLE9BQU83RCxpQkFBaUIsQ0FBQzhELEdBQUcsSUFBSUE7Z0NBQ2xDO2dDQUNBLE9BQU9EOzRCQUNUOzRCQUVBTTtnQ0FDRSxNQUFNQyxLQUFLLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxJQUFJO2dDQUM5QyxJQUFJLENBQUN2RCxTQUFTLEdBQUdtRCxLQUFLO2dDQUN0QixJQUFJLENBQUNsRCxZQUFZLEdBQUcsSUFBSSxDQUFDRCxTQUFTLEdBQUc7Z0NBQ3JDLElBQUksQ0FBQ2tCLGtCQUFrQixHQUFHaUMsQUFBTyxRQUFQQSxLQUFhLEtBQUs7Z0NBQzVDLElBQUksQ0FBQzVCLGFBQWEsR0FBRzRCLEFBQU8sUUFBUEE7Z0NBQ3JCLElBQUksQ0FBQzNCLFNBQVMsR0FBRzJCLEFBQU8sUUFBUEEsTUFBY0EsQUFBTyxRQUFQQTtnQ0FDL0IsSUFBSSxJQUFJLENBQUM1QixhQUFhLEVBQUU7b0NBQ3RCLElBQUksQ0FBQ0osV0FBVyxHQUFHO29DQUNuQixJQUFJLENBQUNDLGVBQWUsR0FBRztvQ0FDdkIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRztnQ0FDMUIsT0FBTyxJQUFJLElBQUksQ0FBQ0csU0FBUyxFQUFFO29DQUN6QixJQUFJLENBQUNMLFdBQVcsR0FBRztvQ0FDbkIsSUFBSSxDQUFDQyxlQUFlLEdBQUc7b0NBQ3ZCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUc7Z0NBQzFCLE9BQU87b0NBQ0wsSUFBSSxDQUFDRixXQUFXLEdBQUc7b0NBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHO29DQUN2QixJQUFJLENBQUNDLGdCQUFnQixHQUFHO2dDQUMxQjtnQ0FDQSxJQUFJLENBQUMzQixRQUFRLEdBQUcsSUFBSSxDQUFDUCxJQUFJLElBQUk7Z0NBQzdCLElBQUksQ0FBQ1EsWUFBWSxHQUFHLElBQUksQ0FBQ1AsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDc0QsYUFBYSxDQUFDLElBQUksQ0FBQ3RELFFBQVEsSUFBSSxNQUFNO2dDQUNwRixJQUFJLENBQUNvRSxvQkFBb0IsQ0FBQyxJQUFJLENBQUM3RCxZQUFZO2dDQUMzQyxJQUFJLENBQUNDLGVBQWUsR0FBRyxJQUFJLENBQUNxRCxhQUFhLENBQUMsSUFBSSxDQUFDNUQsV0FBVyxJQUFJO2dDQUM5RCxJQUFJLENBQUNRLE9BQU8sR0FBRyxJQUFJLENBQUM0QixVQUFVLENBQUMsSUFBSSxDQUFDbkMsR0FBRyxJQUFJO2dDQUMzQyxJQUFJLENBQUN5QixvQkFBb0IsR0FBRyxJQUFJLENBQUMwQywyQkFBMkIsQ0FBQ047Z0NBQzdELElBQUksQ0FBQ08sZ0JBQWdCLENBQUMsSUFBSSxDQUFDaEUsUUFBUTtnQ0FDbkMsTUFBTUksV0FBVyxJQUFJLENBQUNELE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQ3dDLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0NBQzVELE1BQU1zQixRQUFRLElBQUksQ0FBQzFELFlBQVksR0FBRztnQ0FDbEMsSUFBSSxDQUFDRixnQkFBZ0IsR0FBRyxJQUFJLENBQUM2RCxRQUFRLENBQUMsSUFBSSxDQUFDaEUsZUFBZSxFQUFFK0Q7Z0NBQzVELElBQUksQUFBaUMsTUFBakMsSUFBSSxDQUFDNUQsZ0JBQWdCLENBQUNtQyxNQUFNLEVBQzlCLElBQUksQ0FBQ25DLGdCQUFnQixHQUFHO29DQUFDO2lDQUFHO2dDQUU5QixJQUFJLENBQUN1QixZQUFZLEdBQUcsRUFBRTtnQ0FDdEIsSUFBSyxJQUFJM0MsSUFBSSxHQUFHQSxJQUFJLElBQUksQ0FBQ29CLGdCQUFnQixDQUFDbUMsTUFBTSxFQUFFdkQsSUFDaEQsSUFBSSxDQUFDMkMsWUFBWSxDQUFDYSxJQUFJLENBQUM7b0NBQUUwQixNQUFNLElBQUksQ0FBQzlELGdCQUFnQixDQUFDcEIsRUFBRTtvQ0FBRW1GLE9BQU87Z0NBQU07Z0NBRXhFLElBQUssSUFBSW5GLElBQUksR0FBR0EsSUFBSW1CLFNBQVNvQyxNQUFNLEVBQUV2RCxJQUNuQyxJQUFJLENBQUMyQyxZQUFZLENBQUNhLElBQUksQ0FBQztvQ0FBRTBCLE1BQU0vRCxRQUFRLENBQUNuQixFQUFFO29DQUFFbUYsT0FBTztnQ0FBSztnQ0FFMUQsSUFBSSxDQUFDQyxvQkFBb0I7NEJBQzNCOzRCQUVBQztnQ0FDRSxJQUFJLENBQUNwRCxTQUFTLEdBQUc7Z0NBQ2pCLElBQUksQUFBa0IsV0FBWHFELG9CQUFBQSxDQUFNLElBQW9CLEFBQXdCLGNBQXhCLE9BQU9BLG9CQUFBQSxDQUFNLENBQUNDLEtBQUssRUFDdERELG9CQUFBQSxDQUFNLENBQUNDLEtBQUs7NEJBRWhCOzRCQUVBQztnQ0FDRSxJQUFJLENBQUMsSUFBQS9HLFVBQUFBLFFBQVEsQUFBUkEsS0FBWTtnQ0FDakJnSCxRQUFBQSxPQUFNLENBQUNDLElBQUk7NEJBQ2I7NEJBRUFaLDZCQUE0Qk4sRUFBRTtnQ0FDNUIsSUFBSUEsQUFBTyxRQUFQQSxJQUFZLE9BQU87Z0NBQ3ZCLElBQUlBLEFBQU8sUUFBUEEsSUFBWSxPQUFPO2dDQUN2QixJQUFJQSxBQUFPLFFBQVBBLElBQVksT0FBTztnQ0FDdkIsSUFBSUEsQUFBTyxRQUFQQSxJQUFZLE9BQU87Z0NBQ3ZCLElBQUlBLEFBQU8sUUFBUEEsSUFBWSxPQUFPO2dDQUN2QixPQUFPOzRCQUNUOzRCQUVBTyxrQkFBaUJHLElBQUk7Z0NBQ25CLElBQUlBLFFBQVFBLEtBQUszQixNQUFNLEdBQUcsSUFBSSxDQUFDbkIsb0JBQW9CLEVBQUU7b0NBQ25ELElBQUksQ0FBQ0YsYUFBYSxHQUFHO29DQUNyQixNQUFNeUQsUUFBUVQsS0FBSzNCLE1BQU0sR0FBRyxJQUFJLENBQUNuQixvQkFBb0I7b0NBQ3JELElBQUksQ0FBQ0QsZ0JBQWdCLEdBQUd5RCxLQUFLQyxHQUFHLENBQUMsSUFBSUQsS0FBS0UsR0FBRyxDQUFDLElBQUlGLEtBQUtHLEtBQUssQ0FBQyxLQUFLSixBQUFRLE1BQVJBO2dDQUNwRSxPQUFPO29DQUNMLElBQUksQ0FBQ3pELGFBQWEsR0FBRztvQ0FDckIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRztnQ0FDMUI7NEJBQ0Y7NEJBRUEwQyxzQkFBcUJLLElBQUk7Z0NBQ3ZCLE1BQU1jLFFBQVEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ2YsUUFBUTtnQ0FDNUMsSUFBSUEsUUFBUWMsUUFBUSxJQUFJLENBQUMxRSxZQUFZLEVBQUU7b0NBQ3JDLElBQUksQ0FBQ2UsaUJBQWlCLEdBQUc7b0NBQ3pCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdzRCxLQUFLQyxHQUFHLENBQUMsSUFBSUQsS0FBS0UsR0FBRyxDQUFDLElBQUlGLEtBQUtHLEtBQUssQ0FBQyxLQUFLLEFBQUNDLENBQUFBLFFBQVEsSUFBSSxDQUFDMUUsWUFBWSxBQUFELElBQUs7Z0NBQ3RHLE9BQU87b0NBQ0wsSUFBSSxDQUFDZSxpQkFBaUIsR0FBRztvQ0FDekIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBRztnQ0FDOUI7NEJBQ0Y7NEJBRUE0RDtnQ0FDRSxJQUFJLENBQUMsSUFBSSxDQUFDbkYsUUFBUSxJQUFJLENBQUMsSUFBQXRDLFVBQUFBLFFBQVEsQUFBUkEsS0FDckI7Z0NBR0YsTUFBTUMsTUFBTUMsS0FBS0QsR0FBRztnQ0FDcEIsSUFBSUEsTUFBTSxJQUFJLENBQUNrRCxhQUFhLEdBQUcsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRSxZQUN4RCxJQUFJLENBQUNzRSxTQUFTLENBQUM7Z0NBR2pCLElBQUksQ0FBQ3ZFLGFBQWEsR0FBR2xEO2dDQUVyQixNQUFNMEgsUUFBUSxJQUFJLENBQUNDLG1CQUFtQjtnQ0FDdEMsSUFBSUQsU0FBUyxJQUFJLENBQUN0RSxlQUFlLEVBQUUsWUFDakMsSUFBSSxDQUFDcUUsU0FBUyxDQUFDO2dDQUlqQlYsUUFBQUEsT0FBTSxDQUFDekMsT0FBTyxDQUFDO29DQUNic0QsS0FBSztvQ0FDTEMsUUFBUTt3Q0FDTkMsT0FBTyxJQUFJLENBQUN6RixRQUFRO3dDQUNwQkgsWUFBWTt3Q0FDWkMsY0FBYyxLQUFNdUYsQ0FBQUEsUUFBUTtvQ0FDOUI7Z0NBQ0Y7NEJBQ0Y7NEJBRUFDO2dDQUNFLE1BQU1ELFFBQVFoRCxTQUFTLElBQUksQ0FBQ3ZDLFlBQVk7Z0NBQ3hDLElBQUk0RixNQUFNTCxVQUFVQSxRQUFRLEdBQzFCLE9BQU87Z0NBRVQsT0FBT0E7NEJBQ1Q7NEJBRUFELFdBQVVPLE9BQU87Z0NBQ2YsTUFBTWhJLE1BQU1DLEtBQUtELEdBQUc7Z0NBQ3BCLElBQUlBLE1BQU0sSUFBSSxDQUFDZ0QsV0FBVyxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUM3QztnQ0FFRixJQUFJLENBQUNELFdBQVcsR0FBR2hEO2dDQUNuQmlJLFNBQUFBLE9BQU0sQ0FBQ1IsU0FBUyxDQUFDO29DQUNmTyxTQUFTQTtvQ0FDVEUsVUFBVTtnQ0FDWjs0QkFDRjs0QkFFQUM7Z0NBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQzlGLFFBQVEsRUFDaEI7Z0NBRUYsTUFBTStGLE9BQU8sSUFBSSxDQUFDQyxXQUFXO2dDQUM3QkMsU0FBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUM7b0NBQ1ZDLEtBQUs7b0NBQ0xDLFNBQVV4QyxDQUFBQTt3Q0FDUixNQUFNeUMsT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQzFDO3dDQUM1QixJQUFJLENBQUMyQyxpQkFBaUIsQ0FBQ0YsTUFBTU47b0NBQy9CO29DQUNBUyxNQUFNQTt3Q0FDSixJQUFJLENBQUNELGlCQUFpQixDQUFDLEVBQUUsRUFBRVI7b0NBQzdCO2dDQUNGOzRCQUNGOzRCQUVBUSxtQkFBa0JGLElBQUksRUFBRU4sSUFBSTtnQ0FDMUIsTUFBTXRHLE9BQU8sSUFBSSxDQUFDZ0gsYUFBYSxDQUFDVixLQUFLdEcsSUFBSTtnQ0FDekMsSUFBSWlILFVBQVU7Z0NBQ2QsTUFBTUMsU0FBUyxFQUFFO2dDQUVqQixJQUFLLElBQUkxSCxJQUFJLEdBQUdBLElBQUlvSCxLQUFLN0QsTUFBTSxFQUFFdkQsSUFBSztvQ0FDcEMsTUFBTTJILFVBQVVQLElBQUksQ0FBQ3BILEVBQUU7b0NBQ3ZCLElBQUkySCxXQUFXLElBQUksQ0FBQ0gsYUFBYSxDQUFDRyxRQUFRbkgsSUFBSSxNQUFNQSxNQUNsRGlILFVBQVU7eUNBQ0wsSUFBSUUsV0FBV0QsT0FBT25FLE1BQU0sR0FBRyxLQUNwQ21FLE9BQU9sRSxJQUFJLENBQUNtRTtnQ0FFaEI7Z0NBRUEsSUFBS0YsU0FXRTtvQ0FDTCxJQUFJLENBQUNsRyxhQUFhLEdBQUc7b0NBQ3JCLElBQUksQ0FBQ0MsV0FBVyxHQUFHO2dDQUNyQixPQWRjO29DQUNaLElBQUlrRyxPQUFPbkUsTUFBTSxJQUFJLEtBQUssWUFDeEIsSUFBSSxDQUFDNEMsU0FBUyxDQUFDO29DQUdqQnVCLE9BQU9FLE9BQU8sQ0FBQ2Q7b0NBQ2YsTUFBT1ksT0FBT25FLE1BQU0sR0FBRyxJQUNyQm1FLE9BQU9HLEdBQUc7b0NBRVosSUFBSSxDQUFDdEcsYUFBYSxHQUFHO29DQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBRztnQ0FDckI7Z0NBS0F3RixTQUFBQSxPQUFPLENBQUNjLEdBQUcsQ0FBQztvQ0FDVlosS0FBSztvQ0FDTGEsT0FBT0MsS0FBS0MsU0FBUyxDQUFDUDtnQ0FDeEI7NEJBQ0Y7NEJBRUF0QztnQ0FDRTRCLFNBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO29DQUNWQyxLQUFLO29DQUNMQyxTQUFVeEMsQ0FBQUE7d0NBQ1IsSUFBSSxJQUFJLENBQUMxQyxTQUFTLEVBQUU7d0NBQ3BCLE1BQU1tRixPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDMUM7d0NBQzVCLE1BQU1uRSxPQUFPLElBQUksQ0FBQ2dILGFBQWEsQ0FBQyxJQUFJLENBQUN6RyxRQUFRO3dDQUM3QyxJQUFJLENBQUNRLGFBQWEsR0FBRzt3Q0FDckIsSUFBSSxDQUFDQyxXQUFXLEdBQUc7d0NBQ25CLElBQUssSUFBSXhCLElBQUksR0FBR0EsSUFBSW9ILEtBQUs3RCxNQUFNLEVBQUV2RCxJQUMvQixJQUFJb0gsSUFBSSxDQUFDcEgsRUFBRSxJQUFJLElBQUksQ0FBQ3dILGFBQWEsQ0FBQ0osSUFBSSxDQUFDcEgsRUFBRSxDQUFDUSxJQUFJLE1BQU1BLE1BQU07NENBQ3hELElBQUksQ0FBQ2UsYUFBYSxHQUFHOzRDQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBRzs0Q0FDbkI7d0NBQ0Y7b0NBRUo7b0NBQ0ErRixNQUFNQTt3Q0FDSixJQUFJLElBQUksQ0FBQ3RGLFNBQVMsRUFBRTt3Q0FDcEIsSUFBSSxDQUFDVixhQUFhLEdBQUc7d0NBQ3JCLElBQUksQ0FBQ0MsV0FBVyxHQUFHO29DQUNyQjtnQ0FDRjs0QkFDRjs0QkFFQXVGO2dDQUNFLE9BQU87b0NBQ0x2RyxNQUFNLElBQUksQ0FBQ08sUUFBUTtvQ0FDbkJOLFVBQVUsSUFBSSxDQUFDQSxRQUFRLElBQUk7b0NBQzNCQyxhQUFhLElBQUksQ0FBQ08sZUFBZTtvQ0FDakNOLEtBQUssSUFBSSxDQUFDTyxPQUFPO2dDQUNuQjs0QkFDRjs0QkFFQW1HLFdBQVUxQyxJQUFJO2dDQUNaLElBQUksQ0FBQ0EsTUFDSCxPQUFPLEVBQUU7Z0NBRVgsTUFBTU8sT0FBT1AsS0FBS29ELEtBQUssR0FBR3BELEtBQUtvRCxLQUFLLEdBQUdwRDtnQ0FDdkMsSUFBSTtvQ0FDRixNQUFNeUMsT0FBT1ksS0FBS0UsS0FBSyxDQUFDaEQ7b0NBQ3hCLElBQUlrQyxRQUFRQSxLQUFLN0QsTUFBTSxFQUNyQixPQUFPNkQ7Z0NBRVgsRUFBRSxPQUFPZSxLQUFLO29DQUNaQyxRQUFRQyxHQUFHLENBQUMscUNBQXFDRixPQUFPQSxJQUFJekIsT0FBTztvQ0FDbkUsT0FBTyxFQUFFO2dDQUNYO2dDQUNBLE9BQU8sRUFBRTs0QkFDWDs0QkFFQXpCLFVBQVM4QyxLQUFLLEVBQUVPLFFBQVE7Z0NBQ3RCLE1BQU1wRCxPQUFPLEFBQUM2QyxDQUFBQSxTQUFTLEVBQUMsRUFBRy9FLE9BQU8sQ0FBQyxRQUFRLEtBQUt1RixJQUFJO2dDQUNwRCxJQUFJLENBQUNyRCxNQUNILE9BQU8sRUFBRTtnQ0FHWCxNQUFNc0QsUUFBUSxFQUFFO2dDQUNoQixJQUFJQyxPQUFPO2dDQUNYLElBQUl6QyxRQUFRO2dDQUNaLElBQUkwQyxZQUFZO2dDQUVoQixJQUFLLElBQUkxSSxJQUFJLEdBQUdBLElBQUlrRixLQUFLM0IsTUFBTSxFQUFFdkQsSUFBSztvQ0FDcEMsTUFBTWtFLEtBQUtnQixLQUFLZixNQUFNLENBQUNuRTtvQ0FDdkIsTUFBTTJJLFVBQVUsSUFBSSxDQUFDQyxZQUFZLENBQUMxRTtvQ0FFbEMsSUFBSThCLFFBQVEyQyxVQUFVTCxZQUFZRyxLQUFLbEYsTUFBTSxHQUFHLEdBQUc7d0NBQ2pELElBQUltRixZQUFZLEdBQUc7NENBQ2pCRixNQUFNaEYsSUFBSSxDQUFDaUYsS0FBS3pFLEtBQUssQ0FBQyxHQUFHMEUsV0FBV0gsSUFBSTs0Q0FDeENFLE9BQU9BLEtBQUt6RSxLQUFLLENBQUMwRSxXQUFXSCxJQUFJLEtBQUtyRTt3Q0FDeEMsT0FBTzs0Q0FDTHNFLE1BQU1oRixJQUFJLENBQUNpRixLQUFLRixJQUFJOzRDQUNwQkUsT0FBT3ZFO3dDQUNUO3dDQUNBOEIsUUFBUSxJQUFJLENBQUNDLGdCQUFnQixDQUFDd0M7d0NBQzlCQyxZQUFZLElBQUksQ0FBQ0csYUFBYSxDQUFDSjtvQ0FDakMsT0FBTzt3Q0FDTEEsUUFBUXZFO3dDQUNSOEIsU0FBUzJDO29DQUNYO29DQUVBLElBQUl6RSxBQUFPLFFBQVBBLE1BQWNBLEFBQU8sUUFBUEEsTUFBY0EsQUFBTyxRQUFQQSxNQUFjQSxBQUFPLFFBQVBBLE1BQWNBLEFBQU8sUUFBUEEsSUFDMUR3RSxZQUFZRCxLQUFLbEYsTUFBTTtnQ0FFM0I7Z0NBRUEsSUFBSWtGLEtBQUtGLElBQUksSUFDWEMsTUFBTWhGLElBQUksQ0FBQ2lGLEtBQUtGLElBQUk7Z0NBRXRCLE9BQU9DOzRCQUNUOzRCQUVBdkMsa0JBQWlCOEIsS0FBSztnQ0FDcEIsSUFBSS9CLFFBQVE7Z0NBQ1osSUFBSyxJQUFJaEcsSUFBSSxHQUFHQSxJQUFJK0gsTUFBTXhFLE1BQU0sRUFBRXZELElBQ2hDZ0csU0FBUyxJQUFJLENBQUM0QyxZQUFZLENBQUNiLE1BQU01RCxNQUFNLENBQUNuRTtnQ0FFMUMsT0FBT2dHOzRCQUNUOzRCQUVBNkMsZUFBY2QsS0FBSztnQ0FDakIsSUFBSyxJQUFJL0gsSUFBSStILE1BQU14RSxNQUFNLEdBQUcsR0FBR3ZELEtBQUssR0FBR0EsSUFBSztvQ0FDMUMsTUFBTWtFLEtBQUs2RCxNQUFNNUQsTUFBTSxDQUFDbkU7b0NBQ3hCLElBQUlrRSxBQUFPLFFBQVBBLE1BQWNBLEFBQU8sUUFBUEEsTUFBY0EsQUFBTyxRQUFQQSxNQUFjQSxBQUFPLFFBQVBBLE1BQWNBLEFBQU8sUUFBUEEsSUFDMUQsT0FBT2xFLElBQUk7Z0NBRWY7Z0NBQ0EsT0FBTzs0QkFDVDs0QkFFQTRJLGNBQWExRSxFQUFFO2dDQUNiLElBQUksQ0FBQ0EsSUFDSCxPQUFPO2dDQUVULElBQUlBLE1BQU0sWUFBWUEsTUFBTSxVQUMxQixPQUFPO2dDQUVULElBQUlBLE1BQU0sT0FBT0EsTUFBTSxLQUNyQixPQUFPO2dDQUVULElBQUlBLE1BQU0sT0FBT0EsTUFBTSxLQUNyQixPQUFPO2dDQUVULElBQUlBLE1BQU0sT0FBT0EsTUFBTSxLQUNyQixPQUFPO2dDQUVULElBQUlBLEFBQU8sUUFBUEEsTUFBY0EsQUFBTyxRQUFQQSxNQUFjQSxBQUFPLFFBQVBBLE1BQWNBLEFBQU8sUUFBUEEsTUFBY0EsQUFBTyxRQUFQQSxNQUFjQSxBQUFPLFFBQVBBLE1BQWNBLEFBQU8sUUFBUEEsSUFDdEYsT0FBTztnQ0FFVCxPQUFPOzRCQUNUOzRCQUVBc0QsZUFBY08sS0FBSztnQ0FDakIsT0FBTyxBQUFDQSxDQUFBQSxTQUFTLEVBQUMsRUFBR2UsV0FBVyxHQUFHUCxJQUFJOzRCQUN6Qzs0QkFFQVEsZUFBY0MsT0FBTztnQ0FDbkIsTUFBTUMsUUFBUXJELEtBQUtzRCxLQUFLLENBQUNGLFVBQVU7Z0NBQ25DLE9BQU9DLFFBQVEsS0FBSyxNQUFNQSxRQUFRLEtBQUtBOzRCQUN6Qzs0QkFFQUUsUUFBT3BCLEtBQUs7Z0NBQ1YsTUFBTXZILE9BQU8sSUFBSSxDQUFDZ0gsYUFBYSxDQUFDTztnQ0FDaEMsTUFBTXFCLFFBQVE1SSxLQUFLMkQsTUFBTSxDQUFDO2dDQUMxQixPQUFPaUYsU0FBUyxPQUFPQSxTQUFTLE1BQU1BLFFBQVE7NEJBQ2hEOzRCQUVBQyxVQUFTL0MsR0FBRyxFQUFFZ0QsSUFBSTtnQ0FDaEIsSUFBSSxJQUFJLENBQUM3SCxTQUFTLENBQUM2RSxJQUFJLEVBQUUsWUFDdkJnRCxLQUFLLElBQUksQ0FBQzdILFNBQVMsQ0FBQzZFLElBQUk7Z0NBRzFCaUQsU0FBQUEsT0FBSSxDQUFDRixRQUFRLENBQUM7b0NBQ1ovQyxLQUFLQTtvQ0FDTGtELFVBQVU7b0NBQ1ZyQyxTQUFVeEMsQ0FBQUE7d0NBQ1IsSUFBSSxJQUFJLENBQUMxQyxTQUFTLEVBQUU7d0NBQ3BCLE1BQU1pRCxPQUFPUCxRQUFRQSxLQUFLTyxJQUFJLEdBQUdQLEtBQUtPLElBQUksR0FBRzt3Q0FDN0MsSUFBSSxDQUFDekQsU0FBUyxDQUFDNkUsSUFBSSxHQUFHcEI7d0NBQ3RCb0UsS0FBS3BFO29DQUNQO29DQUNBcUMsTUFBTUE7d0NBQ0osSUFBSSxJQUFJLENBQUN0RixTQUFTLEVBQUU7d0NBQ3BCLElBQUksQ0FBQ1IsU0FBUyxDQUFDNkUsSUFBSSxHQUFHO3dDQUN0QmdELEtBQUs7b0NBQ1A7Z0NBQ0Y7NEJBQ0Y7NEJBRUFHLGNBQWFDLEdBQUc7Z0NBQ2QsTUFBTUMsUUFBUSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0Y7Z0NBQ2pDLElBQUlDLE9BQU87b0NBQ1QsSUFBSSxDQUFDNUgsV0FBVyxHQUFHNEgsTUFBTUUsT0FBTztvQ0FDaEMsSUFBSSxDQUFDN0gsV0FBVyxHQUFHMkgsTUFBTUcsT0FBTztnQ0FDbEM7NEJBQ0Y7NEJBRUFDLFlBQVdMLEdBQUc7Z0NBQ1osTUFBTUMsUUFBUSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0Y7Z0NBQ2pDLElBQUksQ0FBQ0MsU0FBUyxJQUFJLENBQUM1SCxXQUFXLEdBQUcsR0FDL0I7Z0NBR0YsTUFBTWlJLE9BQU9MLE1BQU1FLE9BQU87Z0NBQzFCLE1BQU1JLE9BQU9OLE1BQU1HLE9BQU87Z0NBQzFCLE1BQU10RixLQUFLLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxJQUFJO2dDQUM5QyxNQUFNc0Ysc0JBQXNCLElBQUksQ0FBQ25JLFdBQVcsSUFBSXlDLEFBQUssT0FBTEE7Z0NBQ2hELE1BQU0yRixxQkFBcUJILFFBQVF4RixBQUFLLE9BQUxBO2dDQUNuQyxNQUFNNEYsbUJBQW1CeEUsS0FBS3lFLEdBQUcsQ0FBQ0osT0FBTyxJQUFJLENBQUNqSSxXQUFXLEtBQUs7Z0NBRTlELElBQUlrSSx1QkFBdUJDLHNCQUFzQkMsa0JBQWtCO29DQUNqRSxJQUFJLENBQUMsSUFBQTNMLFVBQUFBLFFBQVEsQUFBUkEsS0FBWTtvQ0FDakJnSCxRQUFBQSxPQUFNLENBQUNDLElBQUk7Z0NBQ2I7Z0NBRUEsSUFBSSxDQUFDM0QsV0FBVyxHQUFHO2dDQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBRzs0QkFDckI7NEJBRUE0SCxlQUFjRixHQUFHO2dDQUNmLElBQUlBLE9BQU9BLElBQUlZLGNBQWMsSUFBSVosSUFBSVksY0FBYyxDQUFDL0csTUFBTSxHQUFHLEdBQzNELE9BQU9tRyxJQUFJWSxjQUFjLENBQUMsRUFBRTtnQ0FFOUIsSUFBSVosT0FBT0EsSUFBSWEsT0FBTyxJQUFJYixJQUFJYSxPQUFPLENBQUNoSCxNQUFNLEdBQUcsR0FDN0MsT0FBT21HLElBQUlhLE9BQU8sQ0FBQyxFQUFFO2dDQUV2QixPQUFPOzRCQUNUO3dCQUNGIn0=