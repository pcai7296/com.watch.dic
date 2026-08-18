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
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: "8px"
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
                                    "query-text"
                                ]
                            ],
                            {
                                width: "168px",
                                height: "36px",
                                marginTop: "12px",
                                marginBottom: "6px",
                                color: "#ffffff",
                                fontSize: "24px",
                                fontWeight: 800,
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "query-marquee"
                                ]
                            ],
                            {
                                width: "168px",
                                height: "36px",
                                marginTop: "12px",
                                marginBottom: "6px",
                                color: "#ffffff",
                                fontSize: "24px",
                                fontWeight: 800,
                                textAlign: "center",
                                lines: 1,
                                textOverflow: "clip"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "status-text"
                                ]
                            ],
                            {
                                width: "200px",
                                height: "20px",
                                marginBottom: "4px",
                                color: "#7eaef8",
                                fontSize: "14px",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "result-list"
                                ]
                            ],
                            {
                                height: "388px",
                                marginBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "next-button"
                                ]
                            ],
                            {
                                height: "56px",
                                borderRadius: "20px",
                                backgroundColor: "#0b65ea",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "next-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "22px",
                                fontWeight: 800
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "result-item"
                                ]
                            ],
                            {}
                        ],
                        [
                            [
                                [
                                    0,
                                    "result-card"
                                ]
                            ],
                            {
                                paddingLeft: "12px",
                                paddingRight: "12px",
                                paddingTop: "12px",
                                marginBottom: "10px",
                                borderRadius: "20px",
                                backgroundColor: "#242424",
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "result-head"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "38px",
                                flexDirection: "row",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "result-word"
                                ]
                            ],
                            {
                                flex: 1,
                                height: "38px",
                                color: "#ffffff",
                                fontSize: "28px",
                                fontWeight: 800
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "result-word-marquee"
                                ]
                            ],
                            {
                                flex: 1,
                                height: "38px",
                                color: "#ffffff",
                                fontSize: "28px",
                                fontWeight: 800,
                                lines: 1,
                                textOverflow: "clip"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "result-tag"
                                ]
                            ],
                            {
                                flexShrink: 0,
                                height: "28px",
                                color: "#aeb0b4",
                                fontSize: "18px",
                                fontWeight: 700,
                                marginLeft: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "result-phonetic"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "22px",
                                color: "#aeb0b4",
                                fontSize: "16px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "translation-box"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "result-translation-line"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "22px",
                                color: "#aeb0b4",
                                fontSize: "18px",
                                fontWeight: 700
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
                        var _navGuard = __webpack_require__("./src/common/navGuard.js");
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.file"));
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _dictCodec = __webpack_require__("./src/common/dictCodec.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const FUZZY_SCAN_LIMIT = 4000;
                        const FUZZY_POOL_LIMIT = 80;
                        const MAX_SAFE_ENTRY_ID = 9007199254740991;
                        const WORD_INDEX_LETTERS = "abcdefghijklmnopqrstuvwxyz";
                        class LRUCache {
                            constructor(max){
                                this.max = max;
                                this.cache = {};
                                this.order = [];
                            }
                            get(key) {
                                if (void 0 === this.cache[key]) return;
                                var idx = this.order.indexOf(key);
                                if (idx >= 0) {
                                    this.order.splice(idx, 1);
                                    this.order.push(key);
                                }
                                return this.cache[key];
                            }
                            set(key, val) {
                                if (void 0 !== this.cache[key]) {
                                    var idx = this.order.indexOf(key);
                                    if (idx >= 0) this.order.splice(idx, 1);
                                }
                                this.cache[key] = val;
                                this.order.push(key);
                                if (this.order.length > this.max) {
                                    var oldest = this.order.shift();
                                    delete this.cache[oldest];
                                }
                            }
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
                        var IPA_DECODE_MAP = {
                            a: '\u0259',
                            r: '\u025a',
                            e: '\u025b',
                            i: '\u026a',
                            "'": '\u02c8',
                            ',': '\u02cc',
                            A: '\u0251',
                            U: '\u028a',
                            S: '\u0283',
                            Z: '\u0292',
                            T: '\u03b8',
                            D: '\u00f0',
                            N: '\u014b',
                            O: '\u0254',
                            E: '\u00e6',
                            R: '\u025c',
                            '|': '\u02d0',
                            Q: '\u0252',
                            V: '\u028c',
                            g: '\u0261'
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
                                query: "",
                                searchMode: "",
                                inflectDepth: ""
                            },
                            private: {
                                queryText: "",
                                statusText: "",
                                resultCards: [],
                                searchToken: 0,
                                shardIndex: null,
                                fileCache: null,
                                entryCache: null,
                                cnIndexCache: null,
                                fuzzyWordsChecked: 0,
                                lastToastAt: 0,
                                toastCooldown: 1500,
                                touchStartX: -1,
                                touchStartY: -1,
                                destroyed: false,
                                cardWidth: 0,
                                contentWidth: 0,
                                screenWidth: 0,
                                queryMarqueeOn: false,
                                queryMarqueeSpeed: 40,
                                wordMarqueeThreshold: 0,
                                marqueeArmed: false,
                                pendingCards: [],
                                flushTimer: null,
                                historyCache: null,
                                searchPage: 0,
                                collectedIds: [],
                                totalResultCount: 0,
                                mightHaveMore: false,
                                wrapCache: null,
                                resultLongPressHomeEnabled: true,
                                backLongPressTimer: null,
                                backLongPressTriggered: false
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
                            _decodeIpa (s) {
                                if (!s) return s;
                                s = s.replace(/\r/g, '');
                                var out = '';
                                for(var i = 0; i < s.length; i++){
                                    var ch = s.charAt(i);
                                    out += IPA_DECODE_MAP[ch] || ch;
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
                                this.fileCache = new LRUCache(6);
                                this.entryCache = new LRUCache(6);
                                this.cnIndexCache = new LRUCache(3);
                                this.wrapCache = {};
                                this.loadResultLongPressHomeSetting();
                                this.resultCards = [];
                                this.statusText = "";
                                this.searchToken++;
                                const sw = this.$app.$def.data.screenWidth || 212;
                                this.screenWidth = sw;
                                if (466 === sw) this.cardWidth = Math.round(sw / Math.SQRT2);
                                else this.cardWidth = sw - 20;
                                this.contentWidth = this.cardWidth - 24;
                                this.wordMarqueeThreshold = this.resolveWordMarqueeThreshold(sw);
                                this.queryText = this.normalizeWord(this.query);
                                this.applyQueryMarquee(this.queryText);
                                this.performSearch();
                            },
                            onShow () {
                                this.loadResultLongPressHomeSetting();
                                const currentQuery = this.normalizeWord(this.query);
                                if (currentQuery && currentQuery !== this.queryText) {
                                    this.resultCards = [];
                                    this.statusText = "";
                                    this.searchToken++;
                                    this.queryText = currentQuery;
                                    this.applyQueryMarquee(currentQuery);
                                    this.performSearch();
                                }
                            },
                            resolveWordMarqueeThreshold (sw) {
                                if (192 === sw) return 9;
                                if (212 === sw) return 10;
                                if (336 === sw) return 20;
                                if (432 === sw) return 25;
                                if (466 === sw) return 25;
                                return 10;
                            },
                            applyQueryMarquee (text) {
                                if (text && text.length > 12) {
                                    this.queryMarqueeOn = true;
                                    const extra = text.length - 12;
                                    this.queryMarqueeSpeed = Math.max(40, Math.min(60, Math.round(40 + 1.5 * extra)));
                                } else {
                                    this.queryMarqueeOn = false;
                                    this.queryMarqueeSpeed = 40;
                                }
                            },
                            calcCardWordMarqueeSpeed (word) {
                                const len = (word || "").length;
                                return Math.min(60, Math.max(40, 4 * len));
                            },
                            goBack () {
                                if (this.backLongPressTriggered) return;
                                _system.default.back();
                            },
                            loadResultLongPressHomeSetting () {
                                _system2.default.get({
                                    key: "dic_result_long_press_home",
                                    default: "1",
                                    success: (data)=>{
                                        if (this.destroyed) return;
                                        const value = data && (data.value || data);
                                        this.resultLongPressHomeEnabled = "0" !== value;
                                    },
                                    fail: (data, code)=>{
                                        console.log("results long press setting get failed: " + code);
                                    }
                                });
                            },
                            onBackButtonTouchStart () {
                                if (!this.resultLongPressHomeEnabled || this.backLongPressTimer) return;
                                this.backLongPressTriggered = false;
                                this.backLongPressTimer = setTimeout(()=>{
                                    this.backLongPressTimer = null;
                                    if (this.destroyed || !this.resultLongPressHomeEnabled) return;
                                    this.backLongPressTriggered = true;
                                    _system.default.replace({
                                        uri: "/pages/index"
                                    });
                                }, 650);
                            },
                            onBackButtonTouchEnd () {
                                if (this.backLongPressTimer) {
                                    clearTimeout(this.backLongPressTimer);
                                    this.backLongPressTimer = null;
                                }
                            },
                            openDetail (item) {
                                if (!item || !item.word) return;
                                _system.default.push({
                                    uri: "/pages/detail",
                                    params: {
                                        word: item.word,
                                        phonetic: item.rawPhonetic || "",
                                        translation: item.translation || "",
                                        tag: item.fullTag || item.rawTag || item.tag || "",
                                        searchMode: this.searchMode || "",
                                        inflectDepth: this.inflectDepth || "0"
                                    }
                                });
                            },
                            performSearch () {
                                const normalized = this.normalizeWord(this.queryText);
                                this.queryText = normalized;
                                if (!normalized) {
                                    this._stopFlushTimer();
                                    this.resultCards = [];
                                    this.statusText = "";
                                    this.pendingCards = [];
                                    this.collectedIds = [];
                                    this.totalResultCount = 0;
                                    return;
                                }
                                const token = this.searchToken + 1;
                                this.searchToken = token;
                                this.resultCards = [];
                                this.pendingCards = [];
                                this.collectedIds = [];
                                this.totalResultCount = 0;
                                this.mightHaveMore = false;
                                this.statusText = "搜索中";
                                this._startFlushTimer();
                                var self = this;
                                _system2.default.get({
                                    key: "dic_history",
                                    success: function(data) {
                                        if (token !== self.searchToken) return;
                                        var list = self._parseHistoryList(data);
                                        for(var i = 0; i < list.length; i++){
                                            var entry = list[i];
                                            if (entry.query === normalized && entry.ids && entry.ids.length > 0) {
                                                self.historyCache = list;
                                                self._hydrateFromCachedIds(entry.ids, token);
                                                return;
                                            }
                                        }
                                        self.historyCache = list;
                                        self._startNormalSearch(normalized, token);
                                    },
                                    fail: function() {
                                        self.historyCache = [];
                                        self._startNormalSearch(normalized, token);
                                    }
                                });
                            },
                            _startNormalSearch (normalized, token) {
                                if (this.hasChinese(normalized)) {
                                    if (1 === normalized.length) return void this.performChineseSearch(normalized, token);
                                    this.collectCn2EnResults(normalized, [], {}, token, ()=>{
                                        if (token !== this.searchToken) return;
                                        this._flushResults();
                                        this._stopFlushTimer();
                                        this.marqueeArmed = true;
                                        if (this.resultCards.length > 0) {
                                            this._saveSearchHistory();
                                            if (this.resultCards.length >= 20) this._collectExtraEnglishIds(normalized, ()=>{
                                                this._finalizeAfterSearch();
                                            });
                                            else {
                                                this.totalResultCount = this.resultCards.length;
                                                this._finalizeAfterSearch();
                                            }
                                        } else this.performChineseSearch(normalized, token);
                                    });
                                    return;
                                }
                                this.loadShardIndex(()=>{
                                    if (token !== this.searchToken) return;
                                    const results = [];
                                    const seen = {};
                                    if ("inflect" === this.searchMode) {
                                        const first = normalized.charAt(0);
                                        if (first < "a" || first > "z") return void this.finishEnglishSearch(normalized, token);
                                        this.readText("/common/dict/words/word_" + first + ".txt", (text)=>{
                                            if (token !== this.searchToken) return;
                                            const exactCandidates = [];
                                            this.collectCompactWordCandidates(text, normalized, exactCandidates, seen, "变形词典", 1);
                                            this.hydrateCompactCandidates(exactCandidates, results, 0, ()=>{
                                                if (token !== this.searchToken) return;
                                                if (0 === exactCandidates.length) return void this.finishEnglishSearch(normalized, token);
                                                this.collectInflectResult(normalized, results, seen, ()=>{
                                                    if (token !== this.searchToken) return;
                                                    this.finishEnglishSearch(normalized, token);
                                                });
                                            });
                                        });
                                    } else {
                                        const shards = this.getCandidateShards(normalized);
                                        this.collectShardResults(shards, normalized, results, seen, 0, ()=>{
                                            this.collectInflectResult(normalized, results, seen, ()=>{
                                                if (token !== this.searchToken) return;
                                                this.finishEnglishSearch(normalized, token);
                                            });
                                        });
                                    }
                                });
                            },
                            _hydrateFromCachedIds (ids, token) {
                                var self = this;
                                var idList = ids.slice(0, 20);
                                var groups = {};
                                for(var i = 0; i < idList.length; i++){
                                    var entryId = parseInt(idList[i], 10);
                                    if (!isNaN(entryId) && entryId >= 0) {
                                        var shard = this.entryShardFor(entryId);
                                        if (!groups[shard]) groups[shard] = [];
                                        if (groups[shard].length < 20) groups[shard].push(entryId);
                                    }
                                }
                                var shardKeys = Object.keys(groups);
                                if (0 === shardKeys.length) return void this._startNormalSearch(this.queryText, token);
                                var shardIdx = 0;
                                function loadNext() {
                                    if (shardIdx >= shardKeys.length || token !== self.searchToken) return void done();
                                    var shard = shardKeys[shardIdx];
                                    var idsInShard = groups[shard];
                                    shardIdx++;
                                    self.loadEntryShard(shard, function(entries) {
                                        if (token !== self.searchToken) return;
                                        var seen = {};
                                        for(var i = 0; i < self.resultCards.length; i++)seen[self.resultCards[i].id] = true;
                                        for(var j = 0; j < idsInShard.length; j++){
                                            var entryId = idsInShard[j];
                                            var item = entries[entryId];
                                            if (item) {
                                                var lower = self.normalizeWord(item.word);
                                                if (!seen[lower] && self.resultCards.length < 20) {
                                                    seen[lower] = true;
                                                    var card = self.createResultCard(entryId, lower, item.word, item.phonetic, item.translation, item.tag || "");
                                                    self._enqueueCard(card);
                                                }
                                            }
                                        }
                                        loadNext();
                                    });
                                }
                                function done() {
                                    self._flushResults();
                                    self._stopFlushTimer();
                                    self.marqueeArmed = true;
                                    if (0 === self.resultCards.length) self.statusText = "未找到";
                                    else {
                                        if (self.resultCards.length >= 20) return void self._collectExtraEnglishIds(self.queryText, ()=>{
                                            self._finalizeAfterSearch();
                                        });
                                        self.totalResultCount = self.resultCards.length;
                                        self._finalizeAfterSearch();
                                        return;
                                    }
                                    self._appendNextButton();
                                }
                                loadNext();
                            },
                            finishEnglishSearch (query, token) {
                                this._flushResults();
                                if (0 === this.resultCards.length && query.length > 2 && "inflect" !== this.searchMode && this.isEnglishWord(query)) {
                                    this.showToast("未找到，混淆搜索");
                                    this.statusText = "深度搜索";
                                    this.collectFuzzyResults(query, ()=>{
                                        if (token !== this.searchToken) return;
                                        this._flushResults();
                                        this._stopFlushTimer();
                                        this.marqueeArmed = true;
                                        if (0 === this.resultCards.length) this.statusText = "未找到";
                                        else {
                                            this._saveSearchHistory();
                                            this._finishWithStatus("相近结果");
                                        }
                                    });
                                    return;
                                }
                                this._stopFlushTimer();
                                this.marqueeArmed = true;
                                if (0 === this.resultCards.length) this.statusText = "未找到";
                                else {
                                    if (this.resultCards.length >= 20) return void this._collectExtraEnglishIds(query, ()=>{
                                        this._finalizeAfterSearch();
                                    });
                                    this.totalResultCount = this.resultCards.length;
                                    this._finalizeAfterSearch();
                                    return;
                                }
                                this._saveSearchHistory();
                                this._appendNextButton();
                            },
                            performChineseSearch (query, token) {
                                const normalizedQuery = this.normalizeChineseText(query);
                                if (!normalizedQuery) {
                                    this.resultCards = [];
                                    this.statusText = "";
                                    return;
                                }
                                this.loadChineseIds(normalizedQuery, (ids)=>{
                                    if (token !== this.searchToken) return;
                                    const results = [];
                                    const seen = {};
                                    this.collectChineseResults(ids, normalizedQuery, results, seen, 0, token, ()=>{
                                        if (token !== this.searchToken) return;
                                        this._flushResults();
                                        this._stopFlushTimer();
                                        this.marqueeArmed = true;
                                        if (0 === this.resultCards.length) this.statusText = "未找到";
                                        else {
                                            if (this.resultCards.length >= 20) return void this._collectExtraChineseIds(ids, ()=>{
                                                this._finalizeAfterSearch();
                                            });
                                            this.totalResultCount = this.resultCards.length;
                                            this._finalizeAfterSearch();
                                            return;
                                        }
                                        this._saveSearchHistory();
                                        this._appendNextButton();
                                    });
                                });
                            },
                            loadChineseIds (query, done) {
                                const firstChar = this.getFirstChineseChar(query);
                                if (!firstChar) return void done([]);
                                const bucket = this.zhBucketFor(firstChar);
                                this.readText("/common/dict/zh_index/zh_" + bucket + ".txt", (text)=>{
                                    const lines = text.split("\n");
                                    for(let i = 0; i < lines.length; i++){
                                        const parts = lines[i].split("\t");
                                        if (parts.length >= 2 && parts[0] === firstChar) return void done((0, _dictCodec.decodeDeltaIds)(parts[1]));
                                    }
                                    done([]);
                                });
                            },
                            collectChineseResults (ids, query, results, seen, index, token, done) {
                                if (token !== this.searchToken || this.destroyed || index >= ids.length || this.resultCards.length >= 20) return void done();
                                const entryId = this.parseEntryId(ids[index]);
                                if (entryId < 0) return void this.collectChineseResults(ids, query, results, seen, index + 1, token, done);
                                const shard = this.entryShardFor(entryId);
                                this.loadEntryShard(shard, (entries)=>{
                                    if (token !== this.searchToken || this.destroyed) return void done();
                                    let nextIndex = index;
                                    while(nextIndex < ids.length && this.resultCards.length < 20){
                                        const nextId = this.parseEntryId(ids[nextIndex]);
                                        if (nextId < 0 || this.entryShardFor(nextId) !== shard) break;
                                        const item = entries[nextId];
                                        if (item) {
                                            const lower = this.normalizeWord(item.word);
                                            if (!seen[lower] && this.normalizeChineseText(item.translation).indexOf(query) >= 0) {
                                                seen[lower] = true;
                                                const card = this.createResultCard(nextId, lower, item.word, item.phonetic, item.translation, item.tag);
                                                results.push(card);
                                                this._enqueueCard(card);
                                            }
                                        }
                                        nextIndex++;
                                    }
                                    this.collectChineseResults(ids, query, results, seen, nextIndex, token, done);
                                });
                            },
                            loadCnIndex (bucket, done) {
                                const cached = this.cnIndexCache.get(bucket);
                                if (cached) return void done(cached);
                                this.readText("/common/dict/cn_index/cn_" + bucket + ".txt", (text)=>{
                                    const indexMap = {};
                                    var prevPhrase = "";
                                    const lines = text.split("\n");
                                    for(let i = 0; i < lines.length; i++){
                                        const parts = lines[i].split("\t");
                                        if (parts.length >= 2) {
                                            var phrase = (0, _dictCodec.decodePrefixField)(parts[0], prevPhrase);
                                            if (null === phrase) continue;
                                            indexMap[phrase] = (0, _dictCodec.decodeDeltaIds)(parts[1]);
                                            prevPhrase = phrase;
                                        }
                                    }
                                    this.cnIndexCache.set(bucket, indexMap);
                                    done(indexMap);
                                });
                            },
                            collectCn2EnResults (query, results, seen, token, done) {
                                if (token !== this.searchToken || this.destroyed) return void done(results);
                                const firstChar = this.getFirstChineseChar(query);
                                if (!firstChar) return void done(results);
                                const bucket = this.cnBucketFor(firstChar);
                                this.loadCnIndex(bucket, (indexMap)=>{
                                    if (token !== this.searchToken || this.destroyed) return void done(results);
                                    let ids = indexMap[query];
                                    if (ids) ids = ids.slice(0, 50);
                                    else {
                                        const candidates = Object.keys(indexMap).filter((key)=>0 === key.indexOf(query)).slice(0, 20);
                                        const allIds = [];
                                        const idSeen = {};
                                        for(let i = 0; i < candidates.length; i++){
                                            const idList = indexMap[candidates[i]] || [];
                                            const limited = idList.slice(0, 10);
                                            for(let j = 0; j < limited.length; j++)if (!idSeen[limited[j]]) {
                                                idSeen[limited[j]] = true;
                                                allIds.push(limited[j]);
                                            }
                                        }
                                        ids = allIds.slice(0, 50);
                                    }
                                    if (!ids || 0 === ids.length) return void done(results);
                                    this.fetchEntriesByIds(ids, results, seen, 0, token, done);
                                });
                            },
                            fetchEntriesByIds (ids, results, seen, index, token, done) {
                                if (token !== this.searchToken || this.destroyed || index >= ids.length || this.resultCards.length >= 20) return void done(results);
                                const entryId = this.parseEntryId(ids[index]);
                                if (entryId < 0) return void this.fetchEntriesByIds(ids, results, seen, index + 1, token, done);
                                const shard = this.entryShardFor(entryId);
                                this.loadEntryShard(shard, (entries)=>{
                                    if (token !== this.searchToken || this.destroyed) return void done(results);
                                    let nextIndex = index;
                                    while(nextIndex < ids.length && this.resultCards.length < 20){
                                        const nextId = this.parseEntryId(ids[nextIndex]);
                                        if (nextId < 0 || this.entryShardFor(nextId) !== shard) break;
                                        const item = entries[nextId];
                                        if (item) {
                                            const lower = this.normalizeWord(item.word);
                                            if (!seen[lower]) {
                                                seen[lower] = true;
                                                const card = this.createResultCard(nextId, lower, item.word, item.phonetic, item.translation, item.tag);
                                                results.push(card);
                                                this._enqueueCard(card);
                                            }
                                        }
                                        nextIndex++;
                                    }
                                    this.fetchEntriesByIds(ids, results, seen, nextIndex, token, done);
                                });
                            },
                            loadEntryShard (shard, done) {
                                const cached = this.entryCache.get(shard);
                                if (cached) return void done(cached);
                                this.readText("/common/dict/entries/entry_" + shard + ".txt", (text)=>{
                                    const entries = {};
                                    const baseId = 500 * parseInt(shard, 10);
                                    const lines = text.split("\n");
                                    var previousWord = "";
                                    for(let i = 0; i < lines.length; i++){
                                        const parts = lines[i].split("\t");
                                        if (parts.length >= 3) {
                                            var entryId = baseId + i;
                                            var word = (0, _dictCodec.decodePrefixField)(parts[0], previousWord);
                                            if (null === word) continue;
                                            previousWord = word;
                                            entries[entryId] = {
                                                word: word,
                                                phonetic: parts[1] || "",
                                                translation: parts[2] || "",
                                                tag: parts[3] || ""
                                            };
                                        }
                                    }
                                    this.entryCache.set(shard, entries);
                                    done(entries);
                                });
                            },
                            loadShardIndex (done) {
                                if (this.shardIndex) return void done();
                                const index = {};
                                for(let i = 0; i < WORD_INDEX_LETTERS.length; i++){
                                    const letter = WORD_INDEX_LETTERS.charAt(i);
                                    index[letter] = [
                                        letter
                                    ];
                                }
                                this.shardIndex = index;
                                done();
                            },
                            getCandidateShards (query) {
                                const first = this.normalizeWord(query).charAt(0);
                                if (first >= "a" && first <= "z") return [
                                    first
                                ];
                                return [];
                            },
                            collectShardResults (shards, query, results, seen, index, done) {
                                if (index >= shards.length || this.resultCards.length >= 20) return void done();
                                const shard = shards[index];
                                this.readText("/common/dict/words/word_" + shard + ".txt", (text)=>{
                                    const candidates = [];
                                    this.collectCompactWordCandidates(text, query, candidates, seen, "", 20 - this.resultCards.length);
                                    this.hydrateCompactCandidates(candidates, results, 0, ()=>{
                                        this.collectShardResults(shards, query, results, seen, index + 1, done);
                                    });
                                });
                            },
                            collectInflectResult (query, results, seen, done) {
                                if (this.resultCards.length >= 20 || query.length < 2) return void done();
                                const shard = this.keyFor(query);
                                this.readText("/common/dict/inflect/inflect_" + shard + ".txt", (text)=>{
                                    const bases = [];
                                    var previousForm = "";
                                    const lines = text.split("\n");
                                    for(let i = 0; i < lines.length; i++){
                                        const parts = lines[i].split("\t");
                                        if (parts.length < 2) continue;
                                        const form = (0, _dictCodec.decodePrefixField)(parts[0], previousForm);
                                        if (null !== form) {
                                            previousForm = form;
                                            if (form === query) {
                                                const ids = parts[1].split(",");
                                                for(let j = 0; j < ids.length; j++){
                                                    const entryId = (0, _dictCodec.parseBase36)(ids[j]);
                                                    if (entryId >= 0) bases.push(entryId);
                                                }
                                                break;
                                            }
                                        }
                                    }
                                    this.collectBaseResults(bases, results, seen, 0, ()=>{
                                        this.collectReverseInflectResult(query, results, seen, done);
                                    });
                                });
                            },
                            collectReverseInflectResult (query, results, seen, done) {
                                if (this.resultCards.length >= 20) return void done();
                                const shard = this.keyFor(query);
                                this.readText("/common/dict/inflect_reverse/ireverse_" + shard + ".txt", (text)=>{
                                    const forms = [];
                                    var previousBase = "";
                                    const lines = text.split("\n");
                                    for(let i = 0; i < lines.length; i++){
                                        const parts = lines[i].split("\t");
                                        if (parts.length < 2) continue;
                                        const base = (0, _dictCodec.decodePrefixField)(parts[0], previousBase);
                                        if (null !== base) {
                                            previousBase = base;
                                            if (base === query) {
                                                const values = parts[1].split(",");
                                                for(let j = 0; j < values.length; j++){
                                                    const value = values[j];
                                                    if (value) {
                                                        if ("@" === value.charAt(0)) {
                                                            const entryId = (0, _dictCodec.parseBase36)(value.slice(1));
                                                            if (entryId >= 0) forms.push(entryId);
                                                        } else if (value !== query && !seen[value]) forms.push(value);
                                                    }
                                                }
                                                break;
                                            }
                                        }
                                    }
                                    this.collectFormResults(query, forms, results, seen, 0, done);
                                });
                            },
                            collectFormResults (baseWord, forms, results, seen, index, done) {
                                if (index >= forms.length || this.resultCards.length >= 20) return void done();
                                const form = forms[index];
                                if ("number" == typeof form) {
                                    const shard = this.entryShardFor(form);
                                    this.loadEntryShard(shard, (entries)=>{
                                        const item = entries[form];
                                        if (item) {
                                            const lower = this.normalizeWord(item.word);
                                            if (!seen[lower]) {
                                                seen[lower] = true;
                                                const card = this.createResultCard(form, lower, item.word, item.phonetic, item.translation, "变形");
                                                results.push(card);
                                                this._enqueueCard(card);
                                            }
                                        }
                                        this.collectFormResults(baseWord, forms, results, seen, index + 1, done);
                                    });
                                    return;
                                }
                                const lower = this.normalizeWord(form);
                                if (!lower || seen[lower]) return void this.collectFormResults(baseWord, forms, results, seen, index + 1, done);
                                seen[lower] = true;
                                const first = lower.charAt(0);
                                if (first >= "a" && first <= "z") this.readText("/common/dict/words/word_" + first + ".txt", (text)=>{
                                    const candidates = [];
                                    this.collectCompactWordCandidates(text, form, candidates, seen, "变形", 1);
                                    if (candidates.length > 0) this.hydrateCompactCandidates(candidates, results, 0, ()=>{
                                        this.collectFormResults(baseWord, forms, results, seen, index + 1, done);
                                    });
                                    else this.hydrateFromBaseWord(baseWord, form, results, ()=>{
                                        this.collectFormResults(baseWord, forms, results, seen, index + 1, done);
                                    });
                                });
                                else this.collectFormResults(baseWord, forms, results, seen, index + 1, done);
                            },
                            hydrateFromBaseWord (baseWord, displayWord, results, done) {
                                const first = this.normalizeWord(baseWord).charAt(0);
                                if (first < "a" || first > "z") return void done();
                                this.readText("/common/dict/words/word_" + first + ".txt", (text)=>{
                                    var prevWord = "";
                                    const lines = text.split("\n");
                                    for(let i = 0; i < lines.length; i++){
                                        const parts = lines[i].split("\t");
                                        if (parts.length < 3) {
                                            prevWord = "";
                                            continue;
                                        }
                                        var word = this._decodeWordPrefix(parts, prevWord);
                                        prevWord = word;
                                        if (word.toLowerCase() === baseWord.toLowerCase()) {
                                            const entryId = this.parseEntryId(parts[1]);
                                            if (entryId >= 0) {
                                                const shard = this.entryShardFor(entryId);
                                                this.loadEntryShard(shard, (entries)=>{
                                                    const item = entries[entryId];
                                                    if (item) {
                                                        const card = this.createResultCard(entryId, this.normalizeWord(displayWord), displayWord, item.phonetic, item.translation, "变形");
                                                        results.push(card);
                                                        this._enqueueCard(card);
                                                    }
                                                    done();
                                                });
                                                return;
                                            }
                                            break;
                                        }
                                    }
                                    done();
                                });
                            },
                            collectBaseResults (bases, results, seen, index, done) {
                                if (index >= bases.length || this.resultCards.length >= 20) return void done();
                                const base = bases[index];
                                if ("number" == typeof base) {
                                    const shard = this.entryShardFor(base);
                                    this.loadEntryShard(shard, (entries)=>{
                                        const item = entries[base];
                                        if (item) {
                                            const lower = this.normalizeWord(item.word);
                                            if (!seen[lower]) {
                                                seen[lower] = true;
                                                const card = this.createResultCard(base, lower, item.word, item.phonetic, item.translation, "变形");
                                                results.push(card);
                                                this._enqueueCard(card);
                                            }
                                        }
                                        this.collectBaseResults(bases, results, seen, index + 1, done);
                                    });
                                    return;
                                }
                                const first = this.normalizeWord(base).charAt(0);
                                if (first < "a" || first > "z") return void this.collectBaseResults(bases, results, seen, index + 1, done);
                                this.readText("/common/dict/words/word_" + first + ".txt", (text)=>{
                                    const candidates = [];
                                    this.collectCompactWordCandidates(text, base, candidates, seen, "变形", 1);
                                    this.hydrateCompactCandidates(candidates, results, 0, ()=>{
                                        this.collectBaseResults(bases, results, seen, index + 1, done);
                                    });
                                });
                            },
                            _decodeWordPrefix (parts, prevWord) {
                                return (0, _dictCodec.decodePrefixField)(parts[0], prevWord) || "";
                            },
                            collectCompactWordCandidates (text, query, candidates, seen, source, limit) {
                                if (!text || limit <= 0) return;
                                const normalizedQuery = this.normalizeWord(query);
                                var prevWord = "";
                                const lines = text.split("\n");
                                for(let i = 0; i < lines.length && candidates.length < limit; i++){
                                    const parts = lines[i].split("\t");
                                    if (parts.length < 3) continue;
                                    const word = this._decodeWordPrefix(parts, prevWord);
                                    prevWord = word;
                                    const lower = this.normalizeWord(word);
                                    if (!lower || seen[lower]) continue;
                                    if (source) {
                                        if (lower !== normalizedQuery) continue;
                                    } else if (0 !== lower.indexOf(normalizedQuery)) continue;
                                    const entryId = this.parseEntryId(parts[1]);
                                    if (!(entryId < 0)) {
                                        seen[lower] = true;
                                        candidates.push({
                                            entryId: entryId,
                                            lower: lower,
                                            word: word,
                                            tag: this._expandTag(parts[2] || ""),
                                            source: source
                                        });
                                    }
                                }
                            },
                            hydrateCompactCandidates (candidates, results, index, done) {
                                if (index >= candidates.length || this.resultCards.length >= 20) return void done();
                                const candidate = candidates[index];
                                const shard = this.entryShardFor(candidate.entryId);
                                this.loadEntryShard(shard, (entries)=>{
                                    let nextIndex = index;
                                    while(nextIndex < candidates.length && this.resultCards.length < 20){
                                        const next = candidates[nextIndex];
                                        if (this.entryShardFor(next.entryId) !== shard) break;
                                        const item = entries[next.entryId];
                                        if (item) {
                                            const card = this.createResultCard(next.entryId, next.lower, item.word || next.word, item.phonetic, item.translation, item.tag || next.tag || next.source);
                                            results.push(card);
                                            this._enqueueCard(card);
                                        }
                                        nextIndex++;
                                    }
                                    this.hydrateCompactCandidates(candidates, results, nextIndex, done);
                                });
                            },
                            collectFuzzyResults (query, done) {
                                if (query.length <= 2) return void done([]);
                                const shards = this.getFuzzyShards(query);
                                const items = [];
                                const seen = {};
                                this.fuzzyWordsChecked = 0;
                                this.collectFuzzyShardResults(shards, query, items, seen, 0, ()=>{
                                    items.sort((left, right)=>{
                                        if (left.distance !== right.distance) return left.distance - right.distance;
                                        if (right.score !== left.score) return right.score - left.score;
                                        return left.word.length - right.word.length;
                                    });
                                    const candidates = [];
                                    for(let i = 0; i < items.length; i++)candidates.push({
                                        entryId: items[i].entryId,
                                        lower: items[i].lower,
                                        word: items[i].word,
                                        tag: items[i].tag,
                                        source: "相近"
                                    });
                                    const cards = [];
                                    this.hydrateCompactCandidates(candidates, cards, 0, ()=>done());
                                });
                            },
                            getFuzzyShards (query) {
                                const ordered = [];
                                const seen = {};
                                const first = this.normalizeWord(query).charAt(0);
                                if (first >= "a" && first <= "z") this.pushUniqueShards(ordered, seen, [
                                    first
                                ]);
                                for(let i = 0; i < WORD_INDEX_LETTERS.length; i++)this.pushUniqueShards(ordered, seen, [
                                    WORD_INDEX_LETTERS.charAt(i)
                                ]);
                                return ordered;
                            },
                            pushUniqueShards (output, seen, shards) {
                                for(let i = 0; i < shards.length; i++){
                                    const shard = shards[i];
                                    if (shard && !seen[shard]) {
                                        seen[shard] = true;
                                        output.push(shard);
                                    }
                                }
                            },
                            collectFuzzyShardResults (shards, query, items, seen, index, done) {
                                if (index >= shards.length || items.length >= FUZZY_POOL_LIMIT || this.fuzzyWordsChecked >= FUZZY_SCAN_LIMIT) return void done();
                                const shard = shards[index];
                                this.readText("/common/dict/words/word_" + shard + ".txt", (text)=>{
                                    this.scanFuzzyWordText(text, query, items, seen);
                                    this.collectFuzzyShardResults(shards, query, items, seen, index + 1, done);
                                });
                            },
                            scanFuzzyWordText (text, query, items, seen) {
                                if (!text) return;
                                var prevWord = "";
                                const lines = text.split("\n");
                                for(let i = 0; i < lines.length && items.length < FUZZY_POOL_LIMIT && this.fuzzyWordsChecked < FUZZY_SCAN_LIMIT; i++){
                                    this.fuzzyWordsChecked++;
                                    const parts = lines[i].split("\t");
                                    if (parts.length < 3) continue;
                                    const word = this._decodeWordPrefix(parts, prevWord);
                                    prevWord = word;
                                    const lower = this.normalizeWord(word);
                                    if (!lower || seen[lower] || Math.abs(lower.length - query.length) > 2) continue;
                                    const distance = this.editDistanceBounded(query, lower, 2);
                                    if (distance < 0 || distance > 2) continue;
                                    const entryId = this.parseEntryId(parts[1]);
                                    if (!(entryId < 0)) {
                                        var tagStr = this._expandTag(parts[2] || "");
                                        seen[lower] = true;
                                        items.push({
                                            entryId: entryId,
                                            lower: lower,
                                            word: word,
                                            tag: tagStr,
                                            distance: distance,
                                            score: this.scoreFuzzyCandidate(query, lower, tagStr)
                                        });
                                    }
                                }
                            },
                            editDistanceBounded (left, right, limit) {
                                const leftLength = left.length;
                                const rightLength = right.length;
                                if (Math.abs(leftLength - rightLength) > limit) return -1;
                                let previous = [];
                                let current = [];
                                for(let j = 0; j <= rightLength; j++)previous[j] = j;
                                for(let i = 1; i <= leftLength; i++){
                                    current = [
                                        i
                                    ];
                                    let rowMin = current[0];
                                    const from = Math.max(1, i - limit);
                                    const to = Math.min(rightLength, i + limit);
                                    for(let j = 1; j < from; j++)current[j] = limit + 1;
                                    for(let j = from; j <= to; j++){
                                        const cost = left.charAt(i - 1) === right.charAt(j - 1) ? 0 : 1;
                                        const deletion = previous[j] + 1;
                                        const insertion = current[j - 1] + 1;
                                        const substitution = previous[j - 1] + cost;
                                        const value = Math.min(deletion, insertion, substitution);
                                        current[j] = value;
                                        if (value < rowMin) rowMin = value;
                                    }
                                    for(let j = to + 1; j <= rightLength; j++)current[j] = limit + 1;
                                    if (rowMin > limit) return -1;
                                    previous = current;
                                }
                                const result = previous[rightLength];
                                return result <= limit ? result : -1;
                            },
                            scoreFuzzyCandidate (query, word, tag) {
                                let score = 80 - 8 * Math.abs(word.length - query.length);
                                const tags = tag || "";
                                if (word.charAt(0) === query.charAt(0)) score += 20;
                                if (tags.indexOf("zk") >= 0) score += 40;
                                if (tags.indexOf("gk") >= 0) score += 36;
                                if (tags.indexOf("cet4") >= 0) score += 30;
                                if (tags.indexOf("cet6") >= 0 || tags.indexOf("ky") >= 0) score += 18;
                                if (tags.indexOf("toefl") >= 0 || tags.indexOf("ielts") >= 0) score += 8;
                                if (tags.indexOf("gre") >= 0) score -= 8;
                                return score;
                            },
                            highestTag (tag) {
                                if (!tag) return "";
                                const tags = tag.split(" ");
                                const priority = [
                                    "zk",
                                    "gk",
                                    "cet4",
                                    "cet6",
                                    "ky",
                                    "ielts",
                                    "toefl",
                                    "gre"
                                ];
                                let best = tags[0] || "";
                                let bestIdx = -1;
                                for(let i = 0; i < tags.length; i++){
                                    const idx = priority.indexOf(tags[i]);
                                    if (idx > bestIdx) {
                                        bestIdx = idx;
                                        best = tags[i];
                                    }
                                }
                                return best;
                            },
                            _enqueueCard (card) {
                                if (this.pendingCards.length >= 20) return;
                                this.pendingCards.push(card);
                            },
                            _flushResults () {
                                if (0 === this.pendingCards.length) return;
                                var remaining = 20 - this.resultCards.length;
                                if (remaining <= 0) {
                                    this.pendingCards = [];
                                    return;
                                }
                                var batch = this.pendingCards.splice(0, remaining);
                                for(var i = 0; i < batch.length; i++)this.resultCards.push(batch[i]);
                                this.resultCards = this.resultCards.slice();
                            },
                            _startFlushTimer () {
                                this._stopFlushTimer();
                                var self = this;
                                this.flushTimer = setInterval(function() {
                                    self._flushResults();
                                }, 1000);
                            },
                            _stopFlushTimer () {
                                if (this.flushTimer) {
                                    clearInterval(this.flushTimer);
                                    this.flushTimer = null;
                                }
                            },
                            _parseHistoryList (data) {
                                if (!data) return [];
                                var text = data.value || data || "";
                                if (!text) return [];
                                try {
                                    var list = JSON.parse(text);
                                    if (list && list.length) return list;
                                } catch (e) {}
                                return [];
                            },
                            _saveSearchHistory () {
                                var query = this.queryText;
                                if (!query) return;
                                var ids = [];
                                var cards = this.resultCards || [];
                                for(var i = 0; i < cards.length; i++){
                                    var entryId = parseInt(cards[i].entryId, 10);
                                    if (!isNaN(entryId) && entryId >= 0) ids.push(entryId);
                                }
                                if (0 === ids.length) return;
                                var self = this;
                                _system2.default.get({
                                    key: "dic_history",
                                    success: function(data) {
                                        self._writeHistoryBlock(data, query, ids);
                                    },
                                    fail: function() {
                                        self._writeHistoryBlock(null, query, ids);
                                    }
                                });
                            },
                            _writeHistoryBlock (data, query, ids) {
                                var list = this._parseHistoryList(data);
                                var item = {
                                    query: query
                                };
                                if (ids.length > 0) item.ids = ids;
                                var output = [
                                    item
                                ];
                                for(var i = 0; i < list.length && output.length < 20; i++){
                                    var oldItem = list[i];
                                    if (oldItem && oldItem.query && this.normalizeWord(oldItem.query) !== query) output.push(oldItem);
                                }
                                this.historyCache = output;
                                _system2.default.set({
                                    key: "dic_history",
                                    value: JSON.stringify(output)
                                });
                            },
                            _appendNextButton () {
                                if (this.totalResultCount > 20 && this.resultCards.length > 0 && "next-page" !== this.resultCards[this.resultCards.length - 1].recordKind) {
                                    this.resultCards.push({
                                        id: "next_page",
                                        recordKind: "next-page",
                                        cardHeight: 56,
                                        itemHeight: 66,
                                        wordMarqueeOn: false,
                                        wordMarqueeSpeed: 40
                                    });
                                    this.resultCards = this.resultCards.slice();
                                }
                            },
                            _finalizeAfterSearch () {
                                if (this.resultCards.length <= 0) return;
                                var allIds = [];
                                var seen = {};
                                for(var i = 0; i < this.resultCards.length; i++){
                                    var eid = this.resultCards[i].entryId;
                                    if (eid >= 0 && !seen[eid]) {
                                        seen[eid] = true;
                                        allIds.push(eid);
                                    }
                                }
                                for(var i = 0; i < this.collectedIds.length; i++)if (!seen[this.collectedIds[i]]) {
                                    seen[this.collectedIds[i]] = true;
                                    allIds.push(this.collectedIds[i]);
                                }
                                this.mightHaveMore = this.collectedIds.length >= 40;
                                this.collectedIds = allIds;
                                this.totalResultCount = allIds.length;
                                this._updatePaginationStatus();
                                this._saveSearchHistory();
                                this._appendNextButton();
                            },
                            _finishWithStatus (baseStatus) {
                                if (this.resultCards.length >= 20) {
                                    var self = this;
                                    this._collectExtraEnglishIds(this.queryText, function() {
                                        self._finalizeAfterSearch();
                                    });
                                } else {
                                    this.totalResultCount = this.resultCards.length;
                                    this.statusText = baseStatus + " " + this.resultCards.length + "条";
                                    this._saveSearchHistory();
                                    this._appendNextButton();
                                }
                            },
                            _updatePaginationStatus () {
                                var total = this.totalResultCount;
                                var pageNum = this.searchPage + 1;
                                if (total <= 20) this.statusText = "一共" + total + "条";
                                else if (this.mightHaveMore) this.statusText = "当前第" + pageNum + "页，最多加载60条";
                                else this.statusText = "当前第" + pageNum + "页，一共" + total + "条";
                            },
                            _collectExtraEnglishIds (query, done) {
                                var first = query.charAt(0);
                                if (first < "a" || first > "z") return void done();
                                var self = this;
                                this.readText("/common/dict/words/word_" + first + ".txt", function(text) {
                                    if (!text || self.collectedIds.length >= 40) return void done();
                                    var seen = {};
                                    for(var i = 0; i < self.resultCards.length; i++)seen[self.resultCards[i].id] = true;
                                    var idSeen = {};
                                    for(var i = 0; i < self.collectedIds.length; i++)idSeen[self.collectedIds[i]] = true;
                                    var prevWord = "";
                                    var lines = text.split("\n");
                                    var normalizedQuery = self.normalizeWord(query);
                                    for(var i = 0; i < lines.length && self.collectedIds.length < 40; i++){
                                        var parts = lines[i].split("\t");
                                        if (!(parts.length < 3)) {
                                            var word = self._decodeWordPrefix(parts, prevWord);
                                            prevWord = word;
                                            var lower = self.normalizeWord(word);
                                            if (lower && !seen[lower]) {
                                                if (0 === lower.indexOf(normalizedQuery)) {
                                                    seen[lower] = true;
                                                    var entryId = self.parseEntryId(parts[1]);
                                                    if (entryId >= 0 && !idSeen[entryId]) {
                                                        idSeen[entryId] = true;
                                                        self.collectedIds.push(entryId);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    done();
                                });
                            },
                            _collectExtraChineseIds (ids, done) {
                                var seen = {};
                                for(var i = 0; i < this.resultCards.length; i++)seen[this.resultCards[i].entryId] = true;
                                for(var i = 0; i < ids.length && this.collectedIds.length < 40; i++){
                                    var entryId = this.parseEntryId(ids[i]);
                                    if (entryId >= 0 && !seen[entryId]) {
                                        seen[entryId] = true;
                                        this.collectedIds.push(entryId);
                                    }
                                }
                                done();
                            },
                            _goToNextPage () {
                                this.searchPage++;
                                var self = this;
                                this._loadAndRenderPage(function() {
                                    setTimeout(function() {
                                        var list = self.$element("result-list");
                                        if (list && list.scrollTo) list.scrollTo({
                                            index: 0
                                        });
                                    }, 100);
                                });
                            },
                            _goToPrevPage () {
                                this.searchPage--;
                                var self = this;
                                this._loadAndRenderPage(function() {
                                    setTimeout(function() {
                                        var list = self.$element("result-list");
                                        if (list && list.scrollTo && self.resultCards.length > 0) list.scrollTo({
                                            index: self.resultCards.length - 1
                                        });
                                    }, 100);
                                });
                            },
                            _loadAndRenderPage (callback) {
                                var self = this;
                                var pageSize = 20;
                                var start = this.searchPage * pageSize;
                                var end = Math.min(start + pageSize, this.totalResultCount, 60);
                                var pageIds = this.collectedIds.slice(start, end);
                                var groups = {};
                                for(var i = 0; i < pageIds.length; i++){
                                    var shard = this.entryShardFor(pageIds[i]);
                                    if (!groups[shard]) groups[shard] = [];
                                    groups[shard].push(pageIds[i]);
                                }
                                var shardKeys = Object.keys(groups);
                                var newCards = [];
                                var shardIdx = 0;
                                var wordSeen = {};
                                function loadNext() {
                                    if (shardIdx >= shardKeys.length) return void self._buildPageView(newCards, callback);
                                    var shard = shardKeys[shardIdx];
                                    var idsInShard = groups[shard];
                                    shardIdx++;
                                    self.loadEntryShard(shard, function(entries) {
                                        for(var j = 0; j < idsInShard.length; j++){
                                            var entryId = idsInShard[j];
                                            var item = entries[entryId];
                                            if (item) {
                                                var lower = self.normalizeWord(item.word);
                                                if (!wordSeen[lower]) {
                                                    wordSeen[lower] = true;
                                                    var card = self.createResultCard(entryId, lower, item.word, item.phonetic, item.translation, item.tag || "");
                                                    newCards.push(card);
                                                }
                                            }
                                        }
                                        loadNext();
                                    });
                                }
                                loadNext();
                            },
                            _buildPageView (cards, callback) {
                                var pageCards = [];
                                if (this.searchPage > 0) pageCards.push({
                                    id: "prev_page",
                                    recordKind: "prev-page",
                                    cardHeight: 56,
                                    itemHeight: 66,
                                    wordMarqueeOn: false,
                                    wordMarqueeSpeed: 40
                                });
                                for(var i = 0; i < cards.length; i++)pageCards.push(cards[i]);
                                var nextStart = (this.searchPage + 1) * 20;
                                if (nextStart < this.totalResultCount && nextStart < 60) pageCards.push({
                                    id: "next_page",
                                    recordKind: "next-page",
                                    cardHeight: 56,
                                    itemHeight: 66,
                                    wordMarqueeOn: false,
                                    wordMarqueeSpeed: 40
                                });
                                this.resultCards = pageCards;
                                this._updatePaginationStatus();
                                if (callback) callback();
                            },
                            createResultCard (entryId, id, word, phonetic, translation, tag) {
                                phonetic = phonetic || "";
                                translation = this._decodePhrase(translation || "");
                                tag = this._expandTag(tag || "");
                                const maxW = this.contentWidth;
                                const cacheKey = translation + "|" + maxW;
                                var lines = this.wrapCache[cacheKey];
                                if (!lines) {
                                    lines = this.wrapText(translation || "", maxW);
                                    if (this.wrapCache) {
                                        if (Object.keys(this.wrapCache).length >= 50) this.wrapCache = {};
                                        this.wrapCache[cacheKey] = lines;
                                    }
                                }
                                const safeLines = lines.length > 0 ? lines : [
                                    ""
                                ];
                                const lineHeight = 22;
                                const cardHeight = Math.max(100, 64 + safeLines.length * lineHeight);
                                const bestTag = this.highestTag(tag);
                                const showTag = this.canFitWithTag(word || "", bestTag);
                                const wordLen = (word || "").length;
                                const wordMarqueeOn = wordLen > this.wordMarqueeThreshold;
                                const wordMarqueeSpeed = wordMarqueeOn ? this.calcCardWordMarqueeSpeed(word) : 40;
                                return {
                                    entryId: entryId,
                                    id: id,
                                    word: word,
                                    phonetic: phonetic ? "/" + phonetic + "/" : "",
                                    rawPhonetic: phonetic || "",
                                    translation: translation || "",
                                    translationLines: safeLines,
                                    tag: showTag ? bestTag : "",
                                    rawTag: bestTag,
                                    fullTag: tag,
                                    cardHeight: cardHeight,
                                    itemHeight: cardHeight + 10,
                                    wordMarqueeOn: wordMarqueeOn,
                                    wordMarqueeSpeed: wordMarqueeSpeed
                                };
                            },
                            canFitWithTag (word, tag) {
                                if (!tag) return true;
                                const WORD_FONT = 28;
                                const TAG_FONT = 18;
                                const TAG_MARGIN = 8;
                                const CARD_PADDING = 24;
                                const WORD_GLYPH_RATIO = 0.72;
                                const TAG_GLYPH_RATIO = 0.6;
                                const SAFETY = 4;
                                const safeLen = (word || "").length;
                                if (0 === safeLen) return true;
                                const wordW = safeLen * WORD_FONT * WORD_GLYPH_RATIO;
                                const tagW = tag.length * TAG_FONT * TAG_GLYPH_RATIO + TAG_MARGIN + SAFETY;
                                return wordW + tagW <= this.cardWidth - CARD_PADDING;
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
                                if (ch >= "\u4e00" && ch <= "\u9fff") return 13;
                                if (ch >= "A" && ch <= "Z") return 8;
                                if (ch >= "a" && ch <= "z") return 7;
                                if (ch >= "0" && ch <= "9") return 7;
                                if (" " === ch || "." === ch || "," === ch || ";" === ch || ":" === ch || "/" === ch || "-" === ch) return 4;
                                return 8;
                            },
                            readText (uri, done) {
                                const cached = this.fileCache.get(uri);
                                if (void 0 !== cached) return void done(cached);
                                _system3.default.readText({
                                    uri: uri,
                                    encoding: "utf-8",
                                    success: (data)=>{
                                        if (this.destroyed) return;
                                        const text = data && data.text ? data.text : "";
                                        this.fileCache.set(uri, text);
                                        done(text);
                                    },
                                    fail: ()=>{
                                        if (this.destroyed) return;
                                        this.fileCache.set(uri, "");
                                        done("");
                                    }
                                });
                            },
                            normalizeWord (value) {
                                return (value || "").toLowerCase().trim();
                            },
                            isEnglishWord (value) {
                                return /^[a-z][a-z'-]{0,20}$/.test(value || "");
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
                            onDestroy () {
                                this.destroyed = true;
                                this.onBackButtonTouchEnd();
                                this._stopFlushTimer();
                                this.fileCache = null;
                                this.entryCache = null;
                                this.cnIndexCache = null;
                                this.wrapCache = null;
                            },
                            hasChinese (value) {
                                const text = value || "";
                                for(let i = 0; i < text.length; i++)if (this.isChineseChar(text.charAt(i))) return true;
                                return false;
                            },
                            normalizeChineseText (value) {
                                const text = value || "";
                                let output = "";
                                for(let i = 0; i < text.length; i++){
                                    const ch = text.charAt(i);
                                    if (this.isChineseChar(ch)) output += ch;
                                }
                                return output;
                            },
                            getFirstChineseChar (value) {
                                const text = value || "";
                                for(let i = 0; i < text.length; i++){
                                    const ch = text.charAt(i);
                                    if (this.isChineseChar(ch)) return ch;
                                }
                                return "";
                            },
                            isChineseChar (ch) {
                                return ch >= "\u4e00" && ch <= "\u9fff";
                            },
                            zhBucketFor (ch) {
                                return this.padHex(ch.charCodeAt(0) % 64);
                            },
                            cnBucketFor (ch) {
                                return this.padHex(ch.charCodeAt(0) % 96);
                            },
                            padHex (value) {
                                const hex = value.toString(16);
                                if (hex.length < 2) return "0" + hex;
                                return hex;
                            },
                            parseEntryId (value) {
                                if ("number" == typeof value) {
                                    if (value < 0 || value > MAX_SAFE_ENTRY_ID || Math.floor(value) !== value) return -1;
                                    return value;
                                }
                                if ("string" != typeof value || !/^[0-9a-z]+$/.test(value)) return -1;
                                const id = parseInt(value, 36);
                                if (id < 0 || id > MAX_SAFE_ENTRY_ID || Math.floor(id) !== id) return -1;
                                return id;
                            },
                            entryShardFor (entryId) {
                                const index = Math.floor(entryId / 500);
                                if (index < 10) return "0" + index;
                                return "" + index;
                            },
                            keyFor (value) {
                                const word = this.normalizeWord(value);
                                const first = word.charAt(0);
                                return first >= "a" && first <= "z" ? first : "_";
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
                                const sw = this.$app.$def.data.screenWidth || 212;
                                const startsInLeftQuarter = this.touchStartX <= 0.25 * sw;
                                const endsAtRightQuarter = endX >= 0.75 * sw;
                                const mostlyHorizontal = Math.abs(endY - this.touchStartY) <= 120;
                                if (startsInLeftQuarter && endsAtRightQuarter && mostlyHorizontal) _system.default.back();
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
                                }, [])
                            ]),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.queryMarqueeOn;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("marquee", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            id: "query-marquee",
                                            classList: [
                                                "query-marquee"
                                            ],
                                            scrollamount: function() {
                                                return _vm_.queryMarqueeSpeed;
                                            },
                                            direction: "left",
                                            loop: "-1",
                                            textOffset: "40",
                                            value: function() {
                                                return _vm_.queryText + " " + _vm_.queryText;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.queryMarqueeOn;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "query-text"
                                            ],
                                            value: function() {
                                                return _vm_.queryText;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.statusText;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "status-text"
                                            ],
                                            value: function() {
                                                return _vm_.statusText;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.resultCards.length > 0;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("list", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            id: "result-list",
                                            classList: [
                                                "result-list"
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
                                                    return {
                                                        __list__: _vm_.resultCards,
                                                        __tid__: "id"
                                                    };
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
                                                            "result-item"
                                                        ],
                                                        type: "resultCard",
                                                        style: function() {
                                                            return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: " + item.itemHeight + "px;");
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "next-page" === item.recordKind;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "next-button"
                                                                    ],
                                                                    style: function() {
                                                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: " + item.cardHeight + "px;");
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_._goToNextPage(evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "next-text"
                                                                        ],
                                                                        value: "下一页"
                                                                    }
                                                                }, [])
                                                            ])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "next-page" !== item.recordKind && "prev-page" === item.recordKind;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "next-button"
                                                                    ],
                                                                    style: function() {
                                                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: " + item.cardHeight + "px;");
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_._goToPrevPage(evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "next-text"
                                                                        ],
                                                                        value: "上一页"
                                                                    }
                                                                }, [])
                                                            ])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "prev-page" !== item.recordKind && "next-page" !== item.recordKind;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "result-card"
                                                                    ],
                                                                    style: function() {
                                                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: " + item.cardHeight + "px;");
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.openDetail(item, evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "result-head"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ci__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            shown: function() {
                                                                                return !item.wordMarqueeOn;
                                                                            }
                                                                        }
                                                                    }, function() {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "result-word"
                                                                                    ],
                                                                                    value: function() {
                                                                                        return item.word;
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    }),
                                                                    aiot.__ci__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            shown: function() {
                                                                                return item.wordMarqueeOn && !_vm_.marqueeArmed;
                                                                            }
                                                                        }
                                                                    }, function() {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "result-word"
                                                                                    ],
                                                                                    value: function() {
                                                                                        return item.word;
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    }),
                                                                    aiot.__ci__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            shown: function() {
                                                                                return item.wordMarqueeOn && _vm_.marqueeArmed;
                                                                            }
                                                                        }
                                                                    }, function() {
                                                                        return [
                                                                            aiot.__ce__("marquee", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "result-word-marquee"
                                                                                    ],
                                                                                    scrollamount: function() {
                                                                                        return item.wordMarqueeSpeed;
                                                                                    },
                                                                                    direction: "left",
                                                                                    loop: "-1",
                                                                                    textOffset: "40",
                                                                                    value: function() {
                                                                                        return item.word + " " + item.word;
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    }),
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "result-tag"
                                                                            ],
                                                                            value: function() {
                                                                                return item.tag;
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ]),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "result-phonetic"
                                                                        ],
                                                                        value: function() {
                                                                            return item.phonetic;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "translation-box"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return item.translationLines;
                                                                            },
                                                                            key: "$idx",
                                                                            value: "line"
                                                                        }
                                                                    }, function($idx, line) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "result-translation-line"
                                                                                    ],
                                                                                    value: function() {
                                                                                        return line;
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
                                            ];
                                        })
                                    ])
                                ];
                            })
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXHJlc3VsdHNcXHJlc3VsdHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly/ohZXkuIror43lhbgvc3JjL2NvbW1vbi9kaWN0Q29kZWMuanMiLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3NyYy9jb21tb24vbmF2R3VhcmQuanMiLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly/ohZXkuIror43lhbgvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3NyYy9wYWdlcy9yZXN1bHRzL3Jlc3VsdHMudXgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRTM2X0RJR0lUUyA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCJcclxuY29uc3QgQkFTRTY0VVJMX0RJR0lUUyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODktX1wiXHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2UzNih2YWx1ZSkge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgIS9eWzAtOWEtel0rJC8udGVzdCh2YWx1ZSkpIHtcclxuICAgIHJldHVybiAtMVxyXG4gIH1cclxuICBsZXQgcmVzdWx0ID0gMFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGRpZ2l0ID0gQkFTRTM2X0RJR0lUUy5pbmRleE9mKHZhbHVlLmNoYXJBdChpKSlcclxuICAgIGlmIChkaWdpdCA8IDApIHtcclxuICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcbiAgICByZXN1bHQgPSByZXN1bHQgKiAzNiArIGRpZ2l0XHJcbiAgICBpZiAocmVzdWx0ID4gOTAwNzE5OTI1NDc0MDk5MSkge1xyXG4gICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNvZGVQcmVmaXhGaWVsZCh2YWx1ZSwgcHJldmlvdXMpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8ICF2YWx1ZSB8fCB0eXBlb2YgcHJldmlvdXMgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGNvbnN0IHByZWZpeExlbmd0aCA9IEJBU0UzNl9ESUdJVFMuaW5kZXhPZih2YWx1ZS5jaGFyQXQoMCkpXHJcbiAgaWYgKHByZWZpeExlbmd0aCA8IDAgfHwgcHJlZml4TGVuZ3RoID4gcHJldmlvdXMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICByZXR1cm4gcHJldmlvdXMuc2xpY2UoMCwgcHJlZml4TGVuZ3RoKSArIHZhbHVlLnNsaWNlKDEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY29kZUJhc2U2NEJ5dGVzKHZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCAhdmFsdWUgfHwgIS9eW0EtWmEtejAtOV8tXSskLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggJSA0ID09PSAxKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgYnl0ZXMgPSBbXVxyXG4gIGxldCBhY2N1bXVsYXRvciA9IDBcclxuICBsZXQgYml0Q291bnQgPSAwXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZGlnaXQgPSBCQVNFNjRVUkxfRElHSVRTLmluZGV4T2YodmFsdWUuY2hhckF0KGkpKVxyXG4gICAgaWYgKGRpZ2l0IDwgMCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvciAqIDY0ICsgZGlnaXRcclxuICAgIGJpdENvdW50ICs9IDZcclxuICAgIHdoaWxlIChiaXRDb3VudCA+PSA4KSB7XHJcbiAgICAgIGJpdENvdW50IC09IDhcclxuICAgICAgY29uc3QgZGl2aXNvciA9IE1hdGgucG93KDIsIGJpdENvdW50KVxyXG4gICAgICBieXRlcy5wdXNoKE1hdGguZmxvb3IoYWNjdW11bGF0b3IgLyBkaXZpc29yKSAmIDB4ZmYpXHJcbiAgICAgIGFjY3VtdWxhdG9yICU9IGRpdmlzb3JcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGJpdENvdW50ID4gMCAmJiAoYWNjdW11bGF0b3IgJiAoKDEgPDwgYml0Q291bnQpIC0gMSkpICE9PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICByZXR1cm4gYnl0ZXNcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb2RlRGVsdGFJZHModmFsdWUpIHtcclxuICBjb25zdCBieXRlcyA9IGRlY29kZUJhc2U2NEJ5dGVzKHZhbHVlKVxyXG4gIGlmICghYnl0ZXMpIHtcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaWRzID0gW11cclxuICBsZXQgY3VycmVudCA9IDBcclxuICBsZXQgZGVsdGEgPSAwXHJcbiAgbGV0IHNoaWZ0ID0gMFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGJ5dGUgPSBieXRlc1tpXVxyXG4gICAgY29uc3QgcGF5bG9hZCA9IGJ5dGUgJiAweDdmXHJcbiAgICBpZiAoc2hpZnQgPiA1MyB8fCAoc2hpZnQgPT09IDUzICYmIHBheWxvYWQgPiAxKSkge1xyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGRlbHRhICs9IHBheWxvYWQgKiBNYXRoLnBvdygyLCBzaGlmdClcclxuICAgIGlmIChieXRlICYgMHg4MCkge1xyXG4gICAgICBzaGlmdCArPSA3XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBjdXJyZW50ICs9IGRlbHRhXHJcbiAgICBpZiAoaWRzLmxlbmd0aCA+IDAgJiYgY3VycmVudCA8PSBpZHNbaWRzLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnQgPCAwIHx8IGN1cnJlbnQgPiAxNDk0MSkge1xyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGlkcy5wdXNoKGN1cnJlbnQpXHJcbiAgICBkZWx0YSA9IDBcclxuICAgIHNoaWZ0ID0gMFxyXG4gIH1cclxuICBpZiAoc2hpZnQgIT09IDAgfHwgaWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG4gIHJldHVybiBpZHNcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VJbmZsZWN0aW9uVmFsdWUodmFsdWUpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8ICF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSA9PT0gXCJAXCIpIHtcclxuICAgIGNvbnN0IGVudHJ5SWQgPSBwYXJzZUJhc2UzNih2YWx1ZS5zbGljZSgxKSlcclxuICAgIHJldHVybiBlbnRyeUlkID49IDAgPyB7ZW50cnlJZDogZW50cnlJZH0gOiBudWxsXHJcbiAgfVxyXG4gIHJldHVybiB7d29yZDogdmFsdWV9XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGVjb2RlRGVsdGFJZHMsIGRlY29kZVByZWZpeEZpZWxkLCBwYXJzZUJhc2UzNiwgcGFyc2VJbmZsZWN0aW9uVmFsdWV9XHJcbiIsIi8vIOWvvOiIqumYsui/nueCue+8muaXtumXtOeql+WPo+WGheWPquaUvuihjOS4gOasoemhtemdoui3s+i9rO+8jOmYsuatoui/nueCueaJk+W8gOWkmuS4qumHjeWkjemhtemdolxuLy8g77yI6L+e54K55ZCM5LiA5oyJ6ZKu5LyaIHB1c2gg5aSa5Liq6aG16Z2i5a6e5L6L77yM5a+86Ie06L+U5Zue6ZSu6ZyA6KaB5aSa5oyJ5Yeg5qyh5omN6IO95Zue5LiK5LiA57qn77yJXG52YXIgbGFzdE5hdkF0ID0gMFxudmFyIE5BVl9MT0NLX01TID0gNTAwXG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZHdWFyZCgpIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICBpZiAobm93IC0gbGFzdE5hdkF0IDwgTkFWX0xPQ0tfTVMpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBsYXN0TmF2QXQgPSBub3dcbiAgcmV0dXJuIHRydWVcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoKCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjEyXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTJcIjsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VcIiBvbnRvdWNoc3RhcnQ9XCJvblRvdWNoU3RhcnRcIiBvbnRvdWNoZW5kPVwib25Ub3VjaEVuZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvcC1yb3dcIj5cclxuICAgICAgPGltYWdlIGNsYXNzPVwiYmFjay1idG5cIiBzcmM9XCIvY29tbW9uL2ljb25zL0JhY2tfQi5wbmdcIiBvbmNsaWNrPVwiZ29CYWNrXCIgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxtYXJxdWVlIGlmPVwie3sgcXVlcnlNYXJxdWVlT24gfX1cIiBpZD1cInF1ZXJ5LW1hcnF1ZWVcIiBjbGFzcz1cInF1ZXJ5LW1hcnF1ZWVcIlxyXG4gICAgICBzY3JvbGxhbW91bnQ9XCJ7eyBxdWVyeU1hcnF1ZWVTcGVlZCB9fVwiIGRpcmVjdGlvbj1cImxlZnRcIiBsb29wPVwiLTFcIiB0ZXh0LW9mZnNldD1cIjQwXCI+XHJcbiAgICAgIHt7IHF1ZXJ5VGV4dCB9fSAgIHt7IHF1ZXJ5VGV4dCB9fVxyXG4gICAgPC9tYXJxdWVlPlxyXG4gICAgPHRleHQgaWY9XCJ7eyAhcXVlcnlNYXJxdWVlT24gfX1cIiBjbGFzcz1cInF1ZXJ5LXRleHRcIj57eyBxdWVyeVRleHQgfX08L3RleHQ+XHJcbiAgICA8dGV4dCBjbGFzcz1cInN0YXR1cy10ZXh0XCIgaWY9XCJ7eyBzdGF0dXNUZXh0IH19XCI+e3sgc3RhdHVzVGV4dCB9fTwvdGV4dD5cclxuXHJcbiAgICA8bGlzdCBpZD1cInJlc3VsdC1saXN0XCIgY2xhc3M9XCJyZXN1bHQtbGlzdFwiIGlmPVwie3sgcmVzdWx0Q2FyZHMubGVuZ3RoID4gMCB9fVwiIHN0eWxlPVwid2lkdGg6IHt7Y2FyZFdpZHRofX1weDtcIj5cclxuICAgICAgPGxpc3QtaXRlbVxyXG4gICAgICAgIGNsYXNzPVwicmVzdWx0LWl0ZW1cIlxyXG4gICAgICAgIHR5cGU9XCJyZXN1bHRDYXJkXCJcclxuICAgICAgICBmb3I9XCJ7eyBpdGVtIGluIHJlc3VsdENhcmRzIH19XCJcclxuICAgICAgICB0aWQ9XCJpZFwiXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDoge3tjYXJkV2lkdGh9fXB4OyBoZWlnaHQ6IHt7IGl0ZW0uaXRlbUhlaWdodCB9fXB4O1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGlmPVwie3sgaXRlbS5yZWNvcmRLaW5kID09PSAnbmV4dC1wYWdlJyB9fVwiIGNsYXNzPVwibmV4dC1idXR0b25cIiBzdHlsZT1cIndpZHRoOiB7e2NhcmRXaWR0aH19cHg7IGhlaWdodDoge3sgaXRlbS5jYXJkSGVpZ2h0IH19cHg7XCIgQGNsaWNrPVwiX2dvVG9OZXh0UGFnZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJuZXh0LXRleHRcIj7kuIvkuIDpobU8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBlbGlmPVwie3sgaXRlbS5yZWNvcmRLaW5kID09PSAncHJldi1wYWdlJyB9fVwiIGNsYXNzPVwibmV4dC1idXR0b25cIiBzdHlsZT1cIndpZHRoOiB7e2NhcmRXaWR0aH19cHg7IGhlaWdodDoge3sgaXRlbS5jYXJkSGVpZ2h0IH19cHg7XCIgQGNsaWNrPVwiX2dvVG9QcmV2UGFnZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJuZXh0LXRleHRcIj7kuIrkuIDpobU8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBlbHNlIGNsYXNzPVwicmVzdWx0LWNhcmRcIiBzdHlsZT1cIndpZHRoOiB7e2NhcmRXaWR0aH19cHg7IGhlaWdodDoge3sgaXRlbS5jYXJkSGVpZ2h0IH19cHg7XCIgQGNsaWNrPVwib3BlbkRldGFpbChpdGVtKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1oZWFkXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGlmPVwie3sgIWl0ZW0ud29yZE1hcnF1ZWVPbiB9fVwiIGNsYXNzPVwicmVzdWx0LXdvcmRcIj57eyBpdGVtLndvcmQgfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGlmPVwie3sgaXRlbS53b3JkTWFycXVlZU9uICYmICFtYXJxdWVlQXJtZWQgfX1cIiBjbGFzcz1cInJlc3VsdC13b3JkXCI+e3sgaXRlbS53b3JkIH19PC90ZXh0PlxyXG4gICAgICAgICAgICA8bWFycXVlZSBpZj1cInt7IGl0ZW0ud29yZE1hcnF1ZWVPbiAmJiBtYXJxdWVlQXJtZWQgfX1cIiBjbGFzcz1cInJlc3VsdC13b3JkLW1hcnF1ZWVcIlxyXG4gICAgICAgICAgICAgIHNjcm9sbGFtb3VudD1cInt7IGl0ZW0ud29yZE1hcnF1ZWVTcGVlZCB9fVwiIGRpcmVjdGlvbj1cImxlZnRcIiBsb29wPVwiLTFcIiB0ZXh0LW9mZnNldD1cIjQwXCI+XHJcbiAgICAgICAgICAgICAge3sgaXRlbS53b3JkIH19ICAge3sgaXRlbS53b3JkIH19XHJcbiAgICAgICAgICAgIDwvbWFycXVlZT5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyZXN1bHQtdGFnXCI+e3sgaXRlbS50YWcgfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVzdWx0LXBob25ldGljXCI+e3sgaXRlbS5waG9uZXRpYyB9fTwvdGV4dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFuc2xhdGlvbi1ib3hcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyZXN1bHQtdHJhbnNsYXRpb24tbGluZVwiIGZvcj1cInt7IGxpbmUgaW4gaXRlbS50cmFuc2xhdGlvbkxpbmVzIH19XCI+XHJcbiAgICAgICAgICAgICAge3sgbGluZSB9fVxyXG4gICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saXN0LWl0ZW0+XHJcbiAgICA8L2xpc3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXHJcbmltcG9ydCB7bmF2R3VhcmR9IGZyb20gXCIuLi8uLi9jb21tb24vbmF2R3VhcmRcIlxyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiQHN5c3RlbS5zdG9yYWdlXCJcclxuaW1wb3J0IGZpbGUgZnJvbSBcIkBzeXN0ZW0uZmlsZVwiXHJcbmltcG9ydCBwcm9tcHQgZnJvbSBcIkBzeXN0ZW0ucHJvbXB0XCJcclxuaW1wb3J0IHtkZWNvZGVEZWx0YUlkcywgZGVjb2RlUHJlZml4RmllbGQsIHBhcnNlQmFzZTM2fSBmcm9tIFwiLi4vLi4vY29tbW9uL2RpY3RDb2RlY1wiXHJcblxyXG5jb25zdCBGVVpaWV9TQ0FOX0xJTUlUID0gNDAwMFxyXG5jb25zdCBGVVpaWV9QT09MX0xJTUlUID0gODBcclxuY29uc3QgTUFYX1NBRkVfRU5UUllfSUQgPSA5MDA3MTk5MjU0NzQwOTkxXHJcbmNvbnN0IFdPUkRfSU5ERVhfTEVUVEVSUyA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIlxyXG5cclxuY2xhc3MgTFJVQ2FjaGUge1xyXG4gIGNvbnN0cnVjdG9yKG1heCkge1xyXG4gICAgdGhpcy5tYXggPSBtYXhcclxuICAgIHRoaXMuY2FjaGUgPSB7fVxyXG4gICAgdGhpcy5vcmRlciA9IFtdXHJcbiAgfVxyXG4gIGdldChrZXkpIHtcclxuICAgIGlmICh0aGlzLmNhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgdmFyIGlkeCA9IHRoaXMub3JkZXIuaW5kZXhPZihrZXkpXHJcbiAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgdGhpcy5vcmRlci5zcGxpY2UoaWR4LCAxKVxyXG4gICAgICB0aGlzLm9yZGVyLnB1c2goa2V5KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XVxyXG4gIH1cclxuICBzZXQoa2V5LCB2YWwpIHtcclxuICAgIGlmICh0aGlzLmNhY2hlW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB2YXIgaWR4ID0gdGhpcy5vcmRlci5pbmRleE9mKGtleSlcclxuICAgICAgaWYgKGlkeCA+PSAwKSB0aGlzLm9yZGVyLnNwbGljZShpZHgsIDEpXHJcbiAgICB9XHJcbiAgICB0aGlzLmNhY2hlW2tleV0gPSB2YWxcclxuICAgIHRoaXMub3JkZXIucHVzaChrZXkpXHJcbiAgICBpZiAodGhpcy5vcmRlci5sZW5ndGggPiB0aGlzLm1heCkge1xyXG4gICAgICB2YXIgb2xkZXN0ID0gdGhpcy5vcmRlci5zaGlmdCgpXHJcbiAgICAgIGRlbGV0ZSB0aGlzLmNhY2hlW29sZGVzdF1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnZhciBUQUdfQ09ERV9NQVAgPSB7ejogJ3prJywgZzogJ2drJywgJzQnOiAnY2V0NCcsICc2JzogJ2NldDYnLCBrOiAna3knLCB0OiAndG9lZmwnLCBpOiAnaWVsdHMnLCBlOiAnZ3JlJ31cclxudmFyIFRBR19MQUJFTFMgPSBbJ3prJywgJ2drJywgJ2NldDQnLCAnY2V0NicsICdreScsICdpZWx0cycsICd0b2VmbCcsICdncmUnXVxyXG52YXIgSVBBX0RFQ09ERV9NQVAgPSB7XHJcbiAgJ2EnOiAnXFx1MDI1OScsICdyJzogJ1xcdTAyNWEnLCAnZSc6ICdcXHUwMjViJyxcclxuICAnaSc6ICdcXHUwMjZhJywgXCInXCI6ICdcXHUwMmM4JywgJywnOiAnXFx1MDJjYycsXHJcbiAgJ0EnOiAnXFx1MDI1MScsICdVJzogJ1xcdTAyOGEnLCAnUyc6ICdcXHUwMjgzJyxcclxuICAnWic6ICdcXHUwMjkyJywgJ1QnOiAnXFx1MDNiOCcsICdEJzogJ1xcdTAwZjAnLFxyXG4gICdOJzogJ1xcdTAxNGInLCAnTyc6ICdcXHUwMjU0JywgJ0UnOiAnXFx1MDBlNicsXHJcbiAgJ1InOiAnXFx1MDI1YycsICd8JzogJ1xcdTAyZDAnLCAnUSc6ICdcXHUwMjUyJyxcclxuICAnVic6ICdcXHUwMjhjJywgJ2cnOiAnXFx1MDI2MSdcclxufVxyXG52YXIgUEhSQVNFX0RFQ09ERV9NQVAgPSB7XHJcbiAgJyEnOiAndnQuICcsICckJzogJ3ZpLiAnLCAnQCc6ICduLiAnLCAnIyc6ICdhLiAnLFxyXG4gICclJzogJ2FkLiAnLCAnXic6ICdwcmVwLiAnLCAnJic6ICdjb25qLiAnLCAnKic6ICdwcm9uLiAnLFxyXG4gICcoJzogJ2ludC4gJywgJyknOiAnbnVtLiAnLCAnLSc6ICdhcnQuICcsICc9JzogJ2F1eC4gJyxcclxuICAneyc6ICdb6K6hXScsICd9JzogJ1vms5VdJywgJ3wnOiAnW+WMu10nLCAnWyc6ICdb55SfXScsXHJcbiAgJ10nOiAnW+WMll0nLCAnPCc6ICdb54mpXScsICc+JzogJ1vnu49dJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvdGVjdGVkOiB7XHJcbiAgICBxdWVyeTogXCJcIixcclxuICAgIHNlYXJjaE1vZGU6IFwiXCIsXHJcbiAgICBpbmZsZWN0RGVwdGg6IFwiXCJcclxuICB9LFxyXG5cclxuICBwcml2YXRlOiB7XHJcbiAgICBxdWVyeVRleHQ6IFwiXCIsXHJcbiAgICBzdGF0dXNUZXh0OiBcIlwiLFxyXG4gICAgcmVzdWx0Q2FyZHM6IFtdLFxyXG4gICAgc2VhcmNoVG9rZW46IDAsXHJcbiAgICBzaGFyZEluZGV4OiBudWxsLFxyXG4gICAgZmlsZUNhY2hlOiBudWxsLFxyXG4gICAgZW50cnlDYWNoZTogbnVsbCxcclxuICAgIGNuSW5kZXhDYWNoZTogbnVsbCxcclxuICAgIGZ1enp5V29yZHNDaGVja2VkOiAwLFxyXG4gICAgbGFzdFRvYXN0QXQ6IDAsXHJcbiAgICB0b2FzdENvb2xkb3duOiAxNTAwLFxyXG4gICAgdG91Y2hTdGFydFg6IC0xLFxyXG4gICAgdG91Y2hTdGFydFk6IC0xLFxyXG4gICAgZGVzdHJveWVkOiBmYWxzZSxcclxuICAgIGNhcmRXaWR0aDogMCxcclxuICAgIGNvbnRlbnRXaWR0aDogMCxcclxuICAgIHNjcmVlbldpZHRoOiAwLFxyXG4gICAgcXVlcnlNYXJxdWVlT246IGZhbHNlLFxyXG4gICAgcXVlcnlNYXJxdWVlU3BlZWQ6IDQwLFxyXG4gICAgd29yZE1hcnF1ZWVUaHJlc2hvbGQ6IDAsXHJcbiAgICBtYXJxdWVlQXJtZWQ6IGZhbHNlLFxyXG4gICAgcGVuZGluZ0NhcmRzOiBbXSxcclxuICAgIGZsdXNoVGltZXI6IG51bGwsXHJcbiAgICBoaXN0b3J5Q2FjaGU6IG51bGwsXHJcbiAgICBzZWFyY2hQYWdlOiAwLFxyXG4gICAgY29sbGVjdGVkSWRzOiBbXSxcclxuICAgIHRvdGFsUmVzdWx0Q291bnQ6IDAsXHJcbiAgICBtaWdodEhhdmVNb3JlOiBmYWxzZSxcclxuICAgIHdyYXBDYWNoZTogbnVsbCxcclxuICAgIHJlc3VsdExvbmdQcmVzc0hvbWVFbmFibGVkOiB0cnVlLFxyXG4gICAgYmFja0xvbmdQcmVzc1RpbWVyOiBudWxsLFxyXG4gICAgYmFja0xvbmdQcmVzc1RyaWdnZXJlZDogZmFsc2VcclxuICB9LFxyXG5cclxuICBfZXhwYW5kVGFnKHMpIHtcclxuICAgIGlmICghcykgcmV0dXJuICcnXHJcbiAgICBzID0gcy5yZXBsYWNlKC9cXHIvZywgJycpXHJcbiAgICBpZiAocy5pbmRleE9mKCcsJykgPCAwICYmIC9eWzAtOWEtZl0rJC8udGVzdChzKSkge1xyXG4gICAgICB2YXIgbWFzayA9IHBhcnNlSW50KHMsIDE2KVxyXG4gICAgICB2YXIgbGFiZWxzID0gW11cclxuICAgICAgZm9yICh2YXIgYml0ID0gMDsgYml0IDwgVEFHX0xBQkVMUy5sZW5ndGg7IGJpdCsrKSB7XHJcbiAgICAgICAgaWYgKG1hc2sgJiAoMSA8PCBiaXQpKSB7XHJcbiAgICAgICAgICBsYWJlbHMucHVzaChUQUdfTEFCRUxTW2JpdF0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsYWJlbHMuam9pbignICcpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbihjKSB7IHJldHVybiBUQUdfQ09ERV9NQVBbY10gfHwgYyB9KS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbiAgfSxcclxuXHJcbiAgX2RlY29kZUlwYShzKSB7XHJcbiAgICBpZiAoIXMpIHJldHVybiBzXHJcbiAgICBzID0gcy5yZXBsYWNlKC9cXHIvZywgJycpXHJcbiAgICB2YXIgb3V0ID0gJydcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgY2ggPSBzLmNoYXJBdChpKVxyXG4gICAgICBvdXQgKz0gSVBBX0RFQ09ERV9NQVBbY2hdIHx8IGNoXHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0XHJcbiAgfSxcclxuXHJcbiAgX2RlY29kZVBocmFzZShzKSB7XHJcbiAgICBpZiAoIXMpIHJldHVybiBzXHJcbiAgICBzID0gcy5yZXBsYWNlKC9cXHIvZywgJycpXHJcbiAgICB2YXIgb3V0ID0gJydcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgY2ggPSBzLmNoYXJBdChpKVxyXG4gICAgICBvdXQgKz0gUEhSQVNFX0RFQ09ERV9NQVBbY2hdIHx8IGNoXHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0XHJcbiAgfSxcclxuXHJcbiAgb25Jbml0KCkge1xyXG4gICAgdGhpcy5maWxlQ2FjaGUgPSBuZXcgTFJVQ2FjaGUoNilcclxuICAgIHRoaXMuZW50cnlDYWNoZSA9IG5ldyBMUlVDYWNoZSg2KVxyXG4gICAgdGhpcy5jbkluZGV4Q2FjaGUgPSBuZXcgTFJVQ2FjaGUoMylcclxuICAgIHRoaXMud3JhcENhY2hlID0ge31cclxuICAgIHRoaXMubG9hZFJlc3VsdExvbmdQcmVzc0hvbWVTZXR0aW5nKClcclxuICAgIC8vIEZvcmNlLXJlc2V0IHJlc3VsdCBzdGF0ZSDigJQgVmVsYSBtYXkgcmV1c2UgcGFnZSBpbnN0YW5jZSB3aXRob3V0IHJlLWluaXRcclxuICAgIHRoaXMucmVzdWx0Q2FyZHMgPSBbXVxyXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gXCJcIlxyXG4gICAgdGhpcy5zZWFyY2hUb2tlbisrXHJcbiAgICBjb25zdCBzdyA9IHRoaXMuJGFwcC4kZGVmLmRhdGEuc2NyZWVuV2lkdGggfHwgMjEyXHJcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gc3dcclxuICAgIGlmIChzdyA9PT0gNDY2KSB7XHJcbiAgICAgIC8vIOWchuWxj++8muWNoeeJh+e9ruS6juWGheWIh+ato+aWueW9ouWGhSjlronlhajljLrln58p77yM6YG/5YWN5ZyG6KeS6KOB5YiHXHJcbiAgICAgIHRoaXMuY2FyZFdpZHRoID0gTWF0aC5yb3VuZChzdyAvIE1hdGguU1FSVDIpIC8vIDMzMFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYXJkV2lkdGggPSBzdyAtIDIwXHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRlbnRXaWR0aCA9IHRoaXMuY2FyZFdpZHRoIC0gMjRcclxuICAgIHRoaXMud29yZE1hcnF1ZWVUaHJlc2hvbGQgPSB0aGlzLnJlc29sdmVXb3JkTWFycXVlZVRocmVzaG9sZChzdylcclxuICAgIHRoaXMucXVlcnlUZXh0ID0gdGhpcy5ub3JtYWxpemVXb3JkKHRoaXMucXVlcnkpXHJcbiAgICB0aGlzLmFwcGx5UXVlcnlNYXJxdWVlKHRoaXMucXVlcnlUZXh0KVxyXG4gICAgdGhpcy5wZXJmb3JtU2VhcmNoKClcclxuICB9LFxyXG5cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLmxvYWRSZXN1bHRMb25nUHJlc3NIb21lU2V0dGluZygpXHJcbiAgICAvLyBSZS1jaGVjayBxdWVyeSDigJQgVmVsYSBtYXkgcmV1c2UgcGFnZSBpbnN0YW5jZSB3aXRob3V0IHJlLWZpcmluZyBvbkluaXRcclxuICAgIGNvbnN0IGN1cnJlbnRRdWVyeSA9IHRoaXMubm9ybWFsaXplV29yZCh0aGlzLnF1ZXJ5KVxyXG4gICAgaWYgKGN1cnJlbnRRdWVyeSAmJiBjdXJyZW50UXVlcnkgIT09IHRoaXMucXVlcnlUZXh0KSB7XHJcbiAgICAgIHRoaXMucmVzdWx0Q2FyZHMgPSBbXVxyXG4gICAgICB0aGlzLnN0YXR1c1RleHQgPSBcIlwiXHJcbiAgICAgIHRoaXMuc2VhcmNoVG9rZW4rK1xyXG4gICAgICB0aGlzLnF1ZXJ5VGV4dCA9IGN1cnJlbnRRdWVyeVxyXG4gICAgICB0aGlzLmFwcGx5UXVlcnlNYXJxdWVlKGN1cnJlbnRRdWVyeSlcclxuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoKClcclxuICAgIH1cclxuICAgIC8vIG1hcnF1ZWUg5Zyo5pCc57Si5a6M5oiQ5ZCO6YCa6L+HIF9maW5pc2hXaXRoTWFycXVlZSDlkK/liqhcclxuICB9LFxyXG5cclxuICByZXNvbHZlV29yZE1hcnF1ZWVUaHJlc2hvbGQoc3cpIHtcclxuICAgIGlmIChzdyA9PT0gMTkyKSByZXR1cm4gOVxyXG4gICAgaWYgKHN3ID09PSAyMTIpIHJldHVybiAxMFxyXG4gICAgaWYgKHN3ID09PSAzMzYpIHJldHVybiAyMFxyXG4gICAgaWYgKHN3ID09PSA0MzIpIHJldHVybiAyNVxyXG4gICAgaWYgKHN3ID09PSA0NjYpIHJldHVybiAyNVxyXG4gICAgcmV0dXJuIDEwXHJcbiAgfSxcclxuXHJcbiAgYXBwbHlRdWVyeU1hcnF1ZWUodGV4dCkge1xyXG4gICAgaWYgKHRleHQgJiYgdGV4dC5sZW5ndGggPiAxMikge1xyXG4gICAgICB0aGlzLnF1ZXJ5TWFycXVlZU9uID0gdHJ1ZVxyXG4gICAgICBjb25zdCBleHRyYSA9IHRleHQubGVuZ3RoIC0gMTJcclxuICAgICAgdGhpcy5xdWVyeU1hcnF1ZWVTcGVlZCA9IE1hdGgubWF4KDQwLCBNYXRoLm1pbig2MCwgTWF0aC5yb3VuZCg0MCArIGV4dHJhICogMS41KSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnF1ZXJ5TWFycXVlZU9uID0gZmFsc2VcclxuICAgICAgdGhpcy5xdWVyeU1hcnF1ZWVTcGVlZCA9IDQwXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY2FsY0NhcmRXb3JkTWFycXVlZVNwZWVkKHdvcmQpIHtcclxuICAgIC8vIOmAn+W6piDiiYgg6K+N6ZW/IMOXIDTvvIzorqnplb/or43ov73kuIrop4bop4nkuIrnmoTlkIzmraXlvqrnjq/jgILpmaTpnZ4gd29yZCDlpKrplb/kvJrlpLHmjqfvvIznlKggNjAg5bCB6aG244CCXHJcbiAgICBjb25zdCBsZW4gPSAod29yZCB8fCBcIlwiKS5sZW5ndGhcclxuICAgIHJldHVybiBNYXRoLm1pbig2MCwgTWF0aC5tYXgoNDAsIGxlbiAqIDQpKVxyXG4gIH0sXHJcblxyXG4gIGdvQmFjaygpIHtcclxuICAgIGlmICh0aGlzLmJhY2tMb25nUHJlc3NUcmlnZ2VyZWQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICByb3V0ZXIuYmFjaygpXHJcbiAgfSxcclxuXHJcbiAgbG9hZFJlc3VsdExvbmdQcmVzc0hvbWVTZXR0aW5nKCkge1xyXG4gICAgc3RvcmFnZS5nZXQoe1xyXG4gICAgICBrZXk6IFwiZGljX3Jlc3VsdF9sb25nX3ByZXNzX2hvbWVcIixcclxuICAgICAgZGVmYXVsdDogXCIxXCIsXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhICYmIChkYXRhLnZhbHVlIHx8IGRhdGEpXHJcbiAgICAgICAgdGhpcy5yZXN1bHRMb25nUHJlc3NIb21lRW5hYmxlZCA9IHZhbHVlICE9PSBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZGF0YSwgY29kZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0cyBsb25nIHByZXNzIHNldHRpbmcgZ2V0IGZhaWxlZDogXCIgKyBjb2RlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uQmFja0J1dHRvblRvdWNoU3RhcnQoKSB7XHJcbiAgICBpZiAoIXRoaXMucmVzdWx0TG9uZ1ByZXNzSG9tZUVuYWJsZWQgfHwgdGhpcy5iYWNrTG9uZ1ByZXNzVGltZXIpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLmJhY2tMb25nUHJlc3NUcmlnZ2VyZWQgPSBmYWxzZVxyXG4gICAgdGhpcy5iYWNrTG9uZ1ByZXNzVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5iYWNrTG9uZ1ByZXNzVGltZXIgPSBudWxsXHJcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCB8fCAhdGhpcy5yZXN1bHRMb25nUHJlc3NIb21lRW5hYmxlZCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYmFja0xvbmdQcmVzc1RyaWdnZXJlZCA9IHRydWVcclxuICAgICAgcm91dGVyLnJlcGxhY2Uoe3VyaTogXCIvcGFnZXMvaW5kZXhcIn0pXHJcbiAgICB9LCA2NTApXHJcbiAgfSxcclxuXHJcbiAgb25CYWNrQnV0dG9uVG91Y2hFbmQoKSB7XHJcbiAgICBpZiAodGhpcy5iYWNrTG9uZ1ByZXNzVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYmFja0xvbmdQcmVzc1RpbWVyKVxyXG4gICAgICB0aGlzLmJhY2tMb25nUHJlc3NUaW1lciA9IG51bGxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvcGVuRGV0YWlsKGl0ZW0pIHtcclxuICAgIGlmICghaXRlbSB8fCAhaXRlbS53b3JkKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgdXJpOiBcIi9wYWdlcy9kZXRhaWxcIixcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgd29yZDogaXRlbS53b3JkLFxyXG4gICAgICAgIHBob25ldGljOiBpdGVtLnJhd1Bob25ldGljIHx8IFwiXCIsXHJcbiAgICAgICAgdHJhbnNsYXRpb246IGl0ZW0udHJhbnNsYXRpb24gfHwgXCJcIixcclxuICAgICAgICB0YWc6IGl0ZW0uZnVsbFRhZyB8fCBpdGVtLnJhd1RhZyB8fCBpdGVtLnRhZyB8fCBcIlwiLFxyXG4gICAgICAgIHNlYXJjaE1vZGU6IHRoaXMuc2VhcmNoTW9kZSB8fCBcIlwiLFxyXG4gICAgICAgIGluZmxlY3REZXB0aDogdGhpcy5pbmZsZWN0RGVwdGggfHwgXCIwXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBwZXJmb3JtU2VhcmNoKCkge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHRoaXMubm9ybWFsaXplV29yZCh0aGlzLnF1ZXJ5VGV4dClcclxuICAgIHRoaXMucXVlcnlUZXh0ID0gbm9ybWFsaXplZFxyXG5cclxuICAgIGlmICghbm9ybWFsaXplZCkge1xyXG4gICAgICB0aGlzLl9zdG9wRmx1c2hUaW1lcigpXHJcbiAgICAgIHRoaXMucmVzdWx0Q2FyZHMgPSBbXVxyXG4gICAgICB0aGlzLnN0YXR1c1RleHQgPSBcIlwiXHJcbiAgICAgIHRoaXMucGVuZGluZ0NhcmRzID0gW11cclxuICAgICAgdGhpcy5jb2xsZWN0ZWRJZHMgPSBbXVxyXG4gICAgICB0aGlzLnRvdGFsUmVzdWx0Q291bnQgPSAwXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gdGhpcy5zZWFyY2hUb2tlbiArIDFcclxuICAgIHRoaXMuc2VhcmNoVG9rZW4gPSB0b2tlblxyXG4gICAgdGhpcy5yZXN1bHRDYXJkcyA9IFtdXHJcbiAgICB0aGlzLnBlbmRpbmdDYXJkcyA9IFtdXHJcbiAgICB0aGlzLmNvbGxlY3RlZElkcyA9IFtdXHJcbiAgICB0aGlzLnRvdGFsUmVzdWx0Q291bnQgPSAwXHJcbiAgICB0aGlzLm1pZ2h0SGF2ZU1vcmUgPSBmYWxzZVxyXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gXCLmkJzntKLkuK1cIlxyXG4gICAgdGhpcy5fc3RhcnRGbHVzaFRpbWVyKClcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAga2V5OiBcImRpY19oaXN0b3J5XCIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBpZiAodG9rZW4gIT09IHNlbGYuc2VhcmNoVG9rZW4pIHJldHVyblxyXG4gICAgICAgIHZhciBsaXN0ID0gc2VsZi5fcGFyc2VIaXN0b3J5TGlzdChkYXRhKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdmFyIGVudHJ5ID0gbGlzdFtpXVxyXG4gICAgICAgICAgaWYgKGVudHJ5LnF1ZXJ5ID09PSBub3JtYWxpemVkICYmIGVudHJ5LmlkcyAmJiBlbnRyeS5pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZWxmLmhpc3RvcnlDYWNoZSA9IGxpc3RcclxuICAgICAgICAgICAgc2VsZi5faHlkcmF0ZUZyb21DYWNoZWRJZHMoZW50cnkuaWRzLCB0b2tlbilcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuaGlzdG9yeUNhY2hlID0gbGlzdFxyXG4gICAgICAgIHNlbGYuX3N0YXJ0Tm9ybWFsU2VhcmNoKG5vcm1hbGl6ZWQsIHRva2VuKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZWxmLmhpc3RvcnlDYWNoZSA9IFtdXHJcbiAgICAgICAgc2VsZi5fc3RhcnROb3JtYWxTZWFyY2gobm9ybWFsaXplZCwgdG9rZW4pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgX3N0YXJ0Tm9ybWFsU2VhcmNoKG5vcm1hbGl6ZWQsIHRva2VuKSB7XHJcbiAgICBpZiAodGhpcy5oYXNDaGluZXNlKG5vcm1hbGl6ZWQpKSB7XHJcbiAgICAgIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIC8vIFNpbmdsZSBjaGFyYWN0ZXIg4oCUIHNraXAgY25faW5kZXggKG11bHRpLWNoYXJhY3RlciBwaHJhc2VzIG9ubHkpXHJcbiAgICAgICAgdGhpcy5wZXJmb3JtQ2hpbmVzZVNlYXJjaChub3JtYWxpemVkLCB0b2tlbilcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbGxlY3RDbjJFblJlc3VsdHMobm9ybWFsaXplZCwgW10sIHt9LCB0b2tlbiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0b2tlbiAhPT0gdGhpcy5zZWFyY2hUb2tlbikge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2ZsdXNoUmVzdWx0cygpXHJcbiAgICAgICAgdGhpcy5fc3RvcEZsdXNoVGltZXIoKVxyXG4gICAgICAgIHRoaXMubWFycXVlZUFybWVkID0gdHJ1ZVxyXG4gICAgICAgIGlmICh0aGlzLnJlc3VsdENhcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuX3NhdmVTZWFyY2hIaXN0b3J5KClcclxuICAgICAgICAgIGlmICh0aGlzLnJlc3VsdENhcmRzLmxlbmd0aCA+PSAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0RXh0cmFFbmdsaXNoSWRzKG5vcm1hbGl6ZWQsICgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLl9maW5hbGl6ZUFmdGVyU2VhcmNoKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxSZXN1bHRDb3VudCA9IHRoaXMucmVzdWx0Q2FyZHMubGVuZ3RoXHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbmFsaXplQWZ0ZXJTZWFyY2goKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnBlcmZvcm1DaGluZXNlU2VhcmNoKG5vcm1hbGl6ZWQsIHRva2VuKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkU2hhcmRJbmRleCgoKSA9PiB7XHJcbiAgICAgIGlmICh0b2tlbiAhPT0gdGhpcy5zZWFyY2hUb2tlbikge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXN1bHRzID0gW11cclxuICAgICAgY29uc3Qgc2VlbiA9IHt9XHJcblxyXG4gICAgICBpZiAodGhpcy5zZWFyY2hNb2RlID09PSBcImluZmxlY3RcIikge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gbm9ybWFsaXplZC5jaGFyQXQoMClcclxuICAgICAgICBpZiAoZmlyc3QgPCBcImFcIiB8fCBmaXJzdCA+IFwielwiKSB7XHJcbiAgICAgICAgICB0aGlzLmZpbmlzaEVuZ2xpc2hTZWFyY2gobm9ybWFsaXplZCwgdG9rZW4pXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWFkVGV4dChcIi9jb21tb24vZGljdC93b3Jkcy93b3JkX1wiICsgZmlyc3QgKyBcIi50eHRcIiwgKHRleHQpID0+IHtcclxuICAgICAgICAgIGlmICh0b2tlbiAhPT0gdGhpcy5zZWFyY2hUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGV4YWN0Q2FuZGlkYXRlcyA9IFtdXHJcbiAgICAgICAgICB0aGlzLmNvbGxlY3RDb21wYWN0V29yZENhbmRpZGF0ZXModGV4dCwgbm9ybWFsaXplZCwgZXhhY3RDYW5kaWRhdGVzLCBzZWVuLCBcIuWPmOW9ouivjeWFuFwiLCAxKVxyXG4gICAgICAgICAgdGhpcy5oeWRyYXRlQ29tcGFjdENhbmRpZGF0ZXMoZXhhY3RDYW5kaWRhdGVzLCByZXN1bHRzLCAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbiAhPT0gdGhpcy5zZWFyY2hUb2tlbikge1xyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChleGFjdENhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5maW5pc2hFbmdsaXNoU2VhcmNoKG5vcm1hbGl6ZWQsIHRva2VuKVxyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdEluZmxlY3RSZXN1bHQobm9ybWFsaXplZCwgcmVzdWx0cywgc2VlbiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICh0b2tlbiAhPT0gdGhpcy5zZWFyY2hUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZmluaXNoRW5nbGlzaFNlYXJjaChub3JtYWxpemVkLCB0b2tlbilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaGFyZHMgPSB0aGlzLmdldENhbmRpZGF0ZVNoYXJkcyhub3JtYWxpemVkKVxyXG5cclxuICAgICAgICB0aGlzLmNvbGxlY3RTaGFyZFJlc3VsdHMoc2hhcmRzLCBub3JtYWxpemVkLCByZXN1bHRzLCBzZWVuLCAwLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvbGxlY3RJbmZsZWN0UmVzdWx0KG5vcm1hbGl6ZWQsIHJlc3VsdHMsIHNlZW4sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRva2VuICE9PSB0aGlzLnNlYXJjaFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoRW5nbGlzaFNlYXJjaChub3JtYWxpemVkLCB0b2tlbilcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBfaHlkcmF0ZUZyb21DYWNoZWRJZHMoaWRzLCB0b2tlbikge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICB2YXIgaWRMaXN0ID0gaWRzLnNsaWNlKDAsIDIwKVxyXG4gICAgdmFyIGdyb3VwcyA9IHt9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgZW50cnlJZCA9IHBhcnNlSW50KGlkTGlzdFtpXSwgMTApXHJcbiAgICAgIGlmICghaXNOYU4oZW50cnlJZCkgJiYgZW50cnlJZCA+PSAwKSB7XHJcbiAgICAgICAgdmFyIHNoYXJkID0gdGhpcy5lbnRyeVNoYXJkRm9yKGVudHJ5SWQpXHJcbiAgICAgICAgaWYgKCFncm91cHNbc2hhcmRdKSB7XHJcbiAgICAgICAgICBncm91cHNbc2hhcmRdID0gW11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyb3Vwc1tzaGFyZF0ubGVuZ3RoIDwgMjApIHtcclxuICAgICAgICAgIGdyb3Vwc1tzaGFyZF0ucHVzaChlbnRyeUlkKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzaGFyZEtleXMgPSBPYmplY3Qua2V5cyhncm91cHMpXHJcbiAgICBpZiAoc2hhcmRLZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9zdGFydE5vcm1hbFNlYXJjaCh0aGlzLnF1ZXJ5VGV4dCwgdG9rZW4pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdmFyIHNoYXJkSWR4ID0gMFxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWROZXh0KCkge1xyXG4gICAgICBpZiAoc2hhcmRJZHggPj0gc2hhcmRLZXlzLmxlbmd0aCB8fCB0b2tlbiAhPT0gc2VsZi5zZWFyY2hUb2tlbikge1xyXG4gICAgICAgIGRvbmUoKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgc2hhcmQgPSBzaGFyZEtleXNbc2hhcmRJZHhdXHJcbiAgICAgIHZhciBpZHNJblNoYXJkID0gZ3JvdXBzW3NoYXJkXVxyXG4gICAgICBzaGFyZElkeCsrXHJcblxyXG4gICAgICBzZWxmLmxvYWRFbnRyeVNoYXJkKHNoYXJkLCBmdW5jdGlvbihlbnRyaWVzKSB7XHJcbiAgICAgICAgaWYgKHRva2VuICE9PSBzZWxmLnNlYXJjaFRva2VuKSByZXR1cm5cclxuICAgICAgICB2YXIgc2VlbiA9IHt9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnJlc3VsdENhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBzZWVuW3NlbGYucmVzdWx0Q2FyZHNbaV0uaWRdID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGlkc0luU2hhcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIHZhciBlbnRyeUlkID0gaWRzSW5TaGFyZFtqXVxyXG4gICAgICAgICAgdmFyIGl0ZW0gPSBlbnRyaWVzW2VudHJ5SWRdXHJcbiAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBzZWxmLm5vcm1hbGl6ZVdvcmQoaXRlbS53b3JkKVxyXG4gICAgICAgICAgICBpZiAoIXNlZW5bbG93ZXJdICYmIHNlbGYucmVzdWx0Q2FyZHMubGVuZ3RoIDwgMjApIHtcclxuICAgICAgICAgICAgICBzZWVuW2xvd2VyXSA9IHRydWVcclxuICAgICAgICAgICAgICB2YXIgY2FyZCA9IHNlbGYuY3JlYXRlUmVzdWx0Q2FyZChlbnRyeUlkLCBsb3dlciwgaXRlbS53b3JkLCBpdGVtLnBob25ldGljLCBpdGVtLnRyYW5zbGF0aW9uLCBpdGVtLnRhZyB8fCBcIlwiKVxyXG4gICAgICAgICAgICAgIHNlbGYuX2VucXVldWVDYXJkKGNhcmQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZE5leHQoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XHJcbiAgICAgIHNlbGYuX2ZsdXNoUmVzdWx0cygpXHJcbiAgICAgIHNlbGYuX3N0b3BGbHVzaFRpbWVyKClcclxuICAgICAgc2VsZi5tYXJxdWVlQXJtZWQgPSB0cnVlXHJcbiAgICAgIGlmIChzZWxmLnJlc3VsdENhcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IFwi5pyq5om+5YiwXCJcclxuICAgICAgfSBlbHNlIGlmIChzZWxmLnJlc3VsdENhcmRzLmxlbmd0aCA+PSAyMCkge1xyXG4gICAgICAgIHNlbGYuX2NvbGxlY3RFeHRyYUVuZ2xpc2hJZHMoc2VsZi5xdWVyeVRleHQsICgpID0+IHtcclxuICAgICAgICAgIHNlbGYuX2ZpbmFsaXplQWZ0ZXJTZWFyY2goKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi50b3RhbFJlc3VsdENvdW50ID0gc2VsZi5yZXN1bHRDYXJkcy5sZW5ndGhcclxuICAgICAgICBzZWxmLl9maW5hbGl6ZUFmdGVyU2VhcmNoKClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBzZWxmLl9hcHBlbmROZXh0QnV0dG9uKClcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTmV4dCgpXHJcbiAgfSxcclxuXHJcbiAgZmluaXNoRW5nbGlzaFNlYXJjaChxdWVyeSwgdG9rZW4pIHtcclxuICAgIHRoaXMuX2ZsdXNoUmVzdWx0cygpXHJcbiAgICBpZiAodGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggPT09IDAgJiYgcXVlcnkubGVuZ3RoID4gMiAmJiB0aGlzLnNlYXJjaE1vZGUgIT09IFwiaW5mbGVjdFwiICYmIHRoaXMuaXNFbmdsaXNoV29yZChxdWVyeSkpIHtcclxuICAgICAgdGhpcy5zaG93VG9hc3QoXCLmnKrmib7liLDvvIzmt7fmt4bmkJzntKJcIilcclxuICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gXCLmt7HluqbmkJzntKJcIlxyXG4gICAgICB0aGlzLmNvbGxlY3RGdXp6eVJlc3VsdHMocXVlcnksICgpID0+IHtcclxuICAgICAgICBpZiAodG9rZW4gIT09IHRoaXMuc2VhcmNoVG9rZW4pIHtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9mbHVzaFJlc3VsdHMoKVxyXG4gICAgICAgIHRoaXMuX3N0b3BGbHVzaFRpbWVyKClcclxuICAgICAgICB0aGlzLm1hcnF1ZWVBcm1lZCA9IHRydWVcclxuICAgICAgICBpZiAodGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IFwi5pyq5om+5YiwXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fc2F2ZVNlYXJjaEhpc3RvcnkoKVxyXG4gICAgICAgICAgdGhpcy5fZmluaXNoV2l0aFN0YXR1cyhcIuebuOi/kee7k+aenFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc3RvcEZsdXNoVGltZXIoKVxyXG4gICAgdGhpcy5tYXJxdWVlQXJtZWQgPSB0cnVlXHJcbiAgICBpZiAodGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gXCLmnKrmib7liLBcIlxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnJlc3VsdENhcmRzLmxlbmd0aCA+PSAyMCkge1xyXG4gICAgICB0aGlzLl9jb2xsZWN0RXh0cmFFbmdsaXNoSWRzKHF1ZXJ5LCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZmluYWxpemVBZnRlclNlYXJjaCgpXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b3RhbFJlc3VsdENvdW50ID0gdGhpcy5yZXN1bHRDYXJkcy5sZW5ndGhcclxuICAgICAgdGhpcy5fZmluYWxpemVBZnRlclNlYXJjaCgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2F2ZVNlYXJjaEhpc3RvcnkoKVxyXG4gICAgdGhpcy5fYXBwZW5kTmV4dEJ1dHRvbigpXHJcbiAgfSxcclxuXHJcbiAgcGVyZm9ybUNoaW5lc2VTZWFyY2gocXVlcnksIHRva2VuKSB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSB0aGlzLm5vcm1hbGl6ZUNoaW5lc2VUZXh0KHF1ZXJ5KVxyXG4gICAgaWYgKCFub3JtYWxpemVkUXVlcnkpIHtcclxuICAgICAgdGhpcy5yZXN1bHRDYXJkcyA9IFtdXHJcbiAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IFwiXCJcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkQ2hpbmVzZUlkcyhub3JtYWxpemVkUXVlcnksIChpZHMpID0+IHtcclxuICAgICAgaWYgKHRva2VuICE9PSB0aGlzLnNlYXJjaFRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxyXG4gICAgICBjb25zdCBzZWVuID0ge31cclxuICAgICAgdGhpcy5jb2xsZWN0Q2hpbmVzZVJlc3VsdHMoaWRzLCBub3JtYWxpemVkUXVlcnksIHJlc3VsdHMsIHNlZW4sIDAsIHRva2VuLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRva2VuICE9PSB0aGlzLnNlYXJjaFRva2VuKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2ZsdXNoUmVzdWx0cygpXHJcbiAgICAgICAgdGhpcy5fc3RvcEZsdXNoVGltZXIoKVxyXG4gICAgICAgIHRoaXMubWFycXVlZUFybWVkID0gdHJ1ZVxyXG4gICAgICAgIGlmICh0aGlzLnJlc3VsdENhcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gXCLmnKrmib7liLBcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggPj0gMjApIHtcclxuICAgICAgICAgIHRoaXMuX2NvbGxlY3RFeHRyYUNoaW5lc2VJZHMoaWRzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbmFsaXplQWZ0ZXJTZWFyY2goKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsUmVzdWx0Q291bnQgPSB0aGlzLnJlc3VsdENhcmRzLmxlbmd0aFxyXG4gICAgICAgICAgdGhpcy5fZmluYWxpemVBZnRlclNlYXJjaCgpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2F2ZVNlYXJjaEhpc3RvcnkoKVxyXG4gICAgICAgIHRoaXMuX2FwcGVuZE5leHRCdXR0b24oKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBsb2FkQ2hpbmVzZUlkcyhxdWVyeSwgZG9uZSkge1xyXG4gICAgY29uc3QgZmlyc3RDaGFyID0gdGhpcy5nZXRGaXJzdENoaW5lc2VDaGFyKHF1ZXJ5KVxyXG4gICAgaWYgKCFmaXJzdENoYXIpIHtcclxuICAgICAgZG9uZShbXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVja2V0ID0gdGhpcy56aEJ1Y2tldEZvcihmaXJzdENoYXIpXHJcbiAgICB0aGlzLnJlYWRUZXh0KFwiL2NvbW1vbi9kaWN0L3poX2luZGV4L3poX1wiICsgYnVja2V0ICsgXCIudHh0XCIsICh0ZXh0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBsaW5lc1tpXS5zcGxpdChcIlxcdFwiKVxyXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPj0gMiAmJiBwYXJ0c1swXSA9PT0gZmlyc3RDaGFyKSB7XHJcbiAgICAgICAgICBkb25lKGRlY29kZURlbHRhSWRzKHBhcnRzWzFdKSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkb25lKFtdKVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBjb2xsZWN0Q2hpbmVzZVJlc3VsdHMoaWRzLCBxdWVyeSwgcmVzdWx0cywgc2VlbiwgaW5kZXgsIHRva2VuLCBkb25lKSB7XHJcbiAgICBpZiAodG9rZW4gIT09IHRoaXMuc2VhcmNoVG9rZW4gfHwgdGhpcy5kZXN0cm95ZWQgfHwgaW5kZXggPj0gaWRzLmxlbmd0aCB8fCB0aGlzLnJlc3VsdENhcmRzLmxlbmd0aCA+PSAyMCkge1xyXG4gICAgICBkb25lKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW50cnlJZCA9IHRoaXMucGFyc2VFbnRyeUlkKGlkc1tpbmRleF0pXHJcbiAgICBpZiAoZW50cnlJZCA8IDApIHtcclxuICAgICAgdGhpcy5jb2xsZWN0Q2hpbmVzZVJlc3VsdHMoaWRzLCBxdWVyeSwgcmVzdWx0cywgc2VlbiwgaW5kZXggKyAxLCB0b2tlbiwgZG9uZSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hhcmQgPSB0aGlzLmVudHJ5U2hhcmRGb3IoZW50cnlJZClcclxuICAgIHRoaXMubG9hZEVudHJ5U2hhcmQoc2hhcmQsIChlbnRyaWVzKSA9PiB7XHJcbiAgICAgIGlmICh0b2tlbiAhPT0gdGhpcy5zZWFyY2hUb2tlbiB8fCB0aGlzLmRlc3Ryb3llZCkge1xyXG4gICAgICAgIGRvbmUoKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXh0SW5kZXggPSBpbmRleFxyXG4gICAgICB3aGlsZSAobmV4dEluZGV4IDwgaWRzLmxlbmd0aCAmJiB0aGlzLnJlc3VsdENhcmRzLmxlbmd0aCA8IDIwKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dElkID0gdGhpcy5wYXJzZUVudHJ5SWQoaWRzW25leHRJbmRleF0pXHJcbiAgICAgICAgaWYgKG5leHRJZCA8IDAgfHwgdGhpcy5lbnRyeVNoYXJkRm9yKG5leHRJZCkgIT09IHNoYXJkKSB7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGVudHJpZXNbbmV4dElkXVxyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICBjb25zdCBsb3dlciA9IHRoaXMubm9ybWFsaXplV29yZChpdGVtLndvcmQpXHJcbiAgICAgICAgICBpZiAoIXNlZW5bbG93ZXJdICYmIHRoaXMubm9ybWFsaXplQ2hpbmVzZVRleHQoaXRlbS50cmFuc2xhdGlvbikuaW5kZXhPZihxdWVyeSkgPj0gMCkge1xyXG4gICAgICAgICAgICBzZWVuW2xvd2VyXSA9IHRydWVcclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuY3JlYXRlUmVzdWx0Q2FyZChuZXh0SWQsIGxvd2VyLCBpdGVtLndvcmQsIGl0ZW0ucGhvbmV0aWMsIGl0ZW0udHJhbnNsYXRpb24sIGl0ZW0udGFnKVxyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2goY2FyZClcclxuICAgICAgICAgICAgdGhpcy5fZW5xdWV1ZUNhcmQoY2FyZClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmV4dEluZGV4KytcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb2xsZWN0Q2hpbmVzZVJlc3VsdHMoaWRzLCBxdWVyeSwgcmVzdWx0cywgc2VlbiwgbmV4dEluZGV4LCB0b2tlbiwgZG9uZSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgbG9hZENuSW5kZXgoYnVja2V0LCBkb25lKSB7XHJcbiAgICBjb25zdCBjYWNoZWQgPSB0aGlzLmNuSW5kZXhDYWNoZS5nZXQoYnVja2V0KVxyXG4gICAgaWYgKGNhY2hlZCkge1xyXG4gICAgICBkb25lKGNhY2hlZClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZWFkVGV4dChcIi9jb21tb24vZGljdC9jbl9pbmRleC9jbl9cIiArIGJ1Y2tldCArIFwiLnR4dFwiLCAodGV4dCkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleE1hcCA9IHt9XHJcbiAgICAgIHZhciBwcmV2UGhyYXNlID0gXCJcIlxyXG4gICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIilcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gbGluZXNbaV0uc3BsaXQoXCJcXHRcIilcclxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgIHZhciBwaHJhc2UgPSBkZWNvZGVQcmVmaXhGaWVsZChwYXJ0c1swXSwgcHJldlBocmFzZSlcclxuICAgICAgICAgIGlmIChwaHJhc2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGluZGV4TWFwW3BocmFzZV0gPSBkZWNvZGVEZWx0YUlkcyhwYXJ0c1sxXSlcclxuICAgICAgICAgIHByZXZQaHJhc2UgPSBwaHJhc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbkluZGV4Q2FjaGUuc2V0KGJ1Y2tldCwgaW5kZXhNYXApXHJcbiAgICAgIGRvbmUoaW5kZXhNYXApXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNvbGxlY3RDbjJFblJlc3VsdHMocXVlcnksIHJlc3VsdHMsIHNlZW4sIHRva2VuLCBkb25lKSB7XHJcbiAgICBpZiAodG9rZW4gIT09IHRoaXMuc2VhcmNoVG9rZW4gfHwgdGhpcy5kZXN0cm95ZWQpIHtcclxuICAgICAgZG9uZShyZXN1bHRzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGZpcnN0Q2hhciA9IHRoaXMuZ2V0Rmlyc3RDaGluZXNlQ2hhcihxdWVyeSlcclxuICAgIGlmICghZmlyc3RDaGFyKSB7XHJcbiAgICAgIGRvbmUocmVzdWx0cylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVja2V0ID0gdGhpcy5jbkJ1Y2tldEZvcihmaXJzdENoYXIpXHJcbiAgICB0aGlzLmxvYWRDbkluZGV4KGJ1Y2tldCwgKGluZGV4TWFwKSA9PiB7XHJcbiAgICAgIGlmICh0b2tlbiAhPT0gdGhpcy5zZWFyY2hUb2tlbiB8fCB0aGlzLmRlc3Ryb3llZCkge1xyXG4gICAgICAgIGRvbmUocmVzdWx0cylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBsZXQgaWRzID0gaW5kZXhNYXBbcXVlcnldXHJcblxyXG4gICAgICAvLyBQcmVmaXggbWF0Y2ggZmFsbGJhY2s6IG1heCAyMCBjYW5kaWRhdGUga2V5cywgMTAgSURzIHBlciBrZXksIDUwIHRvdGFsXHJcbiAgICAgIGlmICghaWRzKSB7XHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IE9iamVjdC5rZXlzKGluZGV4TWFwKVxyXG4gICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBrZXkuaW5kZXhPZihxdWVyeSkgPT09IDApXHJcbiAgICAgICAgICAuc2xpY2UoMCwgMjApXHJcblxyXG4gICAgICAgIGNvbnN0IGFsbElkcyA9IFtdXHJcbiAgICAgICAgY29uc3QgaWRTZWVuID0ge31cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGlkTGlzdCA9IGluZGV4TWFwW2NhbmRpZGF0ZXNbaV1dIHx8IFtdXHJcbiAgICAgICAgICBjb25zdCBsaW1pdGVkID0gaWRMaXN0LnNsaWNlKDAsIDEwKVxyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW1pdGVkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICghaWRTZWVuW2xpbWl0ZWRbal1dKSB7XHJcbiAgICAgICAgICAgICAgaWRTZWVuW2xpbWl0ZWRbal1dID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIGFsbElkcy5wdXNoKGxpbWl0ZWRbal0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWRzID0gYWxsSWRzLnNsaWNlKDAsIDUwKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlkcyA9IGlkcy5zbGljZSgwLCA1MClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFpZHMgfHwgaWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGRvbmUocmVzdWx0cylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5mZXRjaEVudHJpZXNCeUlkcyhpZHMsIHJlc3VsdHMsIHNlZW4sIDAsIHRva2VuLCBkb25lKVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBmZXRjaEVudHJpZXNCeUlkcyhpZHMsIHJlc3VsdHMsIHNlZW4sIGluZGV4LCB0b2tlbiwgZG9uZSkge1xyXG4gICAgaWYgKHRva2VuICE9PSB0aGlzLnNlYXJjaFRva2VuIHx8IHRoaXMuZGVzdHJveWVkIHx8IGluZGV4ID49IGlkcy5sZW5ndGggfHwgdGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggPj0gMjApIHtcclxuICAgICAgZG9uZShyZXN1bHRzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbnRyeUlkID0gdGhpcy5wYXJzZUVudHJ5SWQoaWRzW2luZGV4XSlcclxuICAgIGlmIChlbnRyeUlkIDwgMCkge1xyXG4gICAgICB0aGlzLmZldGNoRW50cmllc0J5SWRzKGlkcywgcmVzdWx0cywgc2VlbiwgaW5kZXggKyAxLCB0b2tlbiwgZG9uZSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hhcmQgPSB0aGlzLmVudHJ5U2hhcmRGb3IoZW50cnlJZClcclxuICAgIHRoaXMubG9hZEVudHJ5U2hhcmQoc2hhcmQsIChlbnRyaWVzKSA9PiB7XHJcbiAgICAgIGlmICh0b2tlbiAhPT0gdGhpcy5zZWFyY2hUb2tlbiB8fCB0aGlzLmRlc3Ryb3llZCkge1xyXG4gICAgICAgIGRvbmUocmVzdWx0cylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV4dEluZGV4ID0gaW5kZXhcclxuICAgICAgd2hpbGUgKG5leHRJbmRleCA8IGlkcy5sZW5ndGggJiYgdGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggPCAyMCkge1xyXG4gICAgICAgIGNvbnN0IG5leHRJZCA9IHRoaXMucGFyc2VFbnRyeUlkKGlkc1tuZXh0SW5kZXhdKVxyXG4gICAgICAgIGlmIChuZXh0SWQgPCAwIHx8IHRoaXMuZW50cnlTaGFyZEZvcihuZXh0SWQpICE9PSBzaGFyZCkge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBlbnRyaWVzW25leHRJZF1cclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgY29uc3QgbG93ZXIgPSB0aGlzLm5vcm1hbGl6ZVdvcmQoaXRlbS53b3JkKVxyXG4gICAgICAgICAgaWYgKCFzZWVuW2xvd2VyXSkge1xyXG4gICAgICAgICAgICBzZWVuW2xvd2VyXSA9IHRydWVcclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuY3JlYXRlUmVzdWx0Q2FyZChuZXh0SWQsIGxvd2VyLCBpdGVtLndvcmQsIGl0ZW0ucGhvbmV0aWMsIGl0ZW0udHJhbnNsYXRpb24sIGl0ZW0udGFnKVxyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2goY2FyZClcclxuICAgICAgICAgICAgdGhpcy5fZW5xdWV1ZUNhcmQoY2FyZClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmV4dEluZGV4KytcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5mZXRjaEVudHJpZXNCeUlkcyhpZHMsIHJlc3VsdHMsIHNlZW4sIG5leHRJbmRleCwgdG9rZW4sIGRvbmUpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGxvYWRFbnRyeVNoYXJkKHNoYXJkLCBkb25lKSB7XHJcbiAgICBjb25zdCBjYWNoZWQgPSB0aGlzLmVudHJ5Q2FjaGUuZ2V0KHNoYXJkKVxyXG4gICAgaWYgKGNhY2hlZCkge1xyXG4gICAgICBkb25lKGNhY2hlZClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZWFkVGV4dChcIi9jb21tb24vZGljdC9lbnRyaWVzL2VudHJ5X1wiICsgc2hhcmQgKyBcIi50eHRcIiwgKHRleHQpID0+IHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHt9XHJcbiAgICAgIGNvbnN0IGJhc2VJZCA9IHBhcnNlSW50KHNoYXJkLCAxMCkgKiA1MDBcclxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpXHJcbiAgICAgIHZhciBwcmV2aW91c1dvcmQgPSBcIlwiXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IGxpbmVzW2ldLnNwbGl0KFwiXFx0XCIpXHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICB2YXIgZW50cnlJZCA9IGJhc2VJZCArIGlcclxuICAgICAgICAgIHZhciB3b3JkID0gZGVjb2RlUHJlZml4RmllbGQocGFydHNbMF0sIHByZXZpb3VzV29yZClcclxuICAgICAgICAgIGlmICh3b3JkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcmV2aW91c1dvcmQgPSB3b3JkXHJcbiAgICAgICAgICBlbnRyaWVzW2VudHJ5SWRdID0ge1xyXG4gICAgICAgICAgICB3b3JkOiB3b3JkLFxyXG4gICAgICAgICAgICBwaG9uZXRpYzogcGFydHNbMV0gfHwgXCJcIixcclxuICAgICAgICAgICAgdHJhbnNsYXRpb246IHBhcnRzWzJdIHx8IFwiXCIsXHJcbiAgICAgICAgICAgIHRhZzogcGFydHNbM10gfHwgXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVudHJ5Q2FjaGUuc2V0KHNoYXJkLCBlbnRyaWVzKVxyXG4gICAgICBkb25lKGVudHJpZXMpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGxvYWRTaGFyZEluZGV4KGRvbmUpIHtcclxuICAgIGlmICh0aGlzLnNoYXJkSW5kZXgpIHtcclxuICAgICAgZG9uZSgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluZGV4ID0ge31cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgV09SRF9JTkRFWF9MRVRURVJTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGxldHRlciA9IFdPUkRfSU5ERVhfTEVUVEVSUy5jaGFyQXQoaSlcclxuICAgICAgaW5kZXhbbGV0dGVyXSA9IFtsZXR0ZXJdXHJcbiAgICB9XHJcbiAgICB0aGlzLnNoYXJkSW5kZXggPSBpbmRleFxyXG4gICAgZG9uZSgpXHJcbiAgfSxcclxuXHJcbiAgZ2V0Q2FuZGlkYXRlU2hhcmRzKHF1ZXJ5KSB7XHJcbiAgICBjb25zdCBmaXJzdCA9IHRoaXMubm9ybWFsaXplV29yZChxdWVyeSkuY2hhckF0KDApXHJcbiAgICBpZiAoZmlyc3QgPj0gXCJhXCIgJiYgZmlyc3QgPD0gXCJ6XCIpIHtcclxuICAgICAgcmV0dXJuIFtmaXJzdF1cclxuICAgIH1cclxuICAgIHJldHVybiBbXVxyXG4gIH0sXHJcblxyXG4gIGNvbGxlY3RTaGFyZFJlc3VsdHMoc2hhcmRzLCBxdWVyeSwgcmVzdWx0cywgc2VlbiwgaW5kZXgsIGRvbmUpIHtcclxuICAgIGlmIChpbmRleCA+PSBzaGFyZHMubGVuZ3RoIHx8IHRoaXMucmVzdWx0Q2FyZHMubGVuZ3RoID49IDIwKSB7XHJcbiAgICAgIGRvbmUoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGFyZCA9IHNoYXJkc1tpbmRleF1cclxuICAgIHRoaXMucmVhZFRleHQoXCIvY29tbW9uL2RpY3Qvd29yZHMvd29yZF9cIiArIHNoYXJkICsgXCIudHh0XCIsICh0ZXh0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBbXVxyXG4gICAgICB0aGlzLmNvbGxlY3RDb21wYWN0V29yZENhbmRpZGF0ZXModGV4dCwgcXVlcnksIGNhbmRpZGF0ZXMsIHNlZW4sIFwiXCIsIDIwIC0gdGhpcy5yZXN1bHRDYXJkcy5sZW5ndGgpXHJcbiAgICAgIHRoaXMuaHlkcmF0ZUNvbXBhY3RDYW5kaWRhdGVzKGNhbmRpZGF0ZXMsIHJlc3VsdHMsIDAsICgpID0+IHtcclxuICAgICAgICB0aGlzLmNvbGxlY3RTaGFyZFJlc3VsdHMoc2hhcmRzLCBxdWVyeSwgcmVzdWx0cywgc2VlbiwgaW5kZXggKyAxLCBkb25lKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBjb2xsZWN0SW5mbGVjdFJlc3VsdChxdWVyeSwgcmVzdWx0cywgc2VlbiwgZG9uZSkge1xyXG4gICAgaWYgKHRoaXMucmVzdWx0Q2FyZHMubGVuZ3RoID49IDIwIHx8IHF1ZXJ5Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgZG9uZSgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNoYXJkID0gdGhpcy5rZXlGb3IocXVlcnkpXHJcbiAgICB0aGlzLnJlYWRUZXh0KFwiL2NvbW1vbi9kaWN0L2luZmxlY3QvaW5mbGVjdF9cIiArIHNoYXJkICsgXCIudHh0XCIsICh0ZXh0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGJhc2VzID0gW11cclxuICAgICAgdmFyIHByZXZpb3VzRm9ybSA9IFwiXCJcclxuICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IGxpbmVzW2ldLnNwbGl0KFwiXFx0XCIpXHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkZWNvZGVQcmVmaXhGaWVsZChwYXJ0c1swXSwgcHJldmlvdXNGb3JtKVxyXG4gICAgICAgIGlmIChmb3JtID09PSBudWxsKSB7XHJcbiAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2aW91c0Zvcm0gPSBmb3JtXHJcbiAgICAgICAgaWYgKGZvcm0gPT09IHF1ZXJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBpZHMgPSBwYXJ0c1sxXS5zcGxpdChcIixcIilcclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaWRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SWQgPSBwYXJzZUJhc2UzNihpZHNbal0pXHJcbiAgICAgICAgICAgIGlmIChlbnRyeUlkID49IDApIHtcclxuICAgICAgICAgICAgICBiYXNlcy5wdXNoKGVudHJ5SWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY29sbGVjdEJhc2VSZXN1bHRzKGJhc2VzLCByZXN1bHRzLCBzZWVuLCAwLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0UmV2ZXJzZUluZmxlY3RSZXN1bHQocXVlcnksIHJlc3VsdHMsIHNlZW4sIGRvbmUpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNvbGxlY3RSZXZlcnNlSW5mbGVjdFJlc3VsdChxdWVyeSwgcmVzdWx0cywgc2VlbiwgZG9uZSkge1xyXG4gICAgaWYgKHRoaXMucmVzdWx0Q2FyZHMubGVuZ3RoID49IDIwKSB7XHJcbiAgICAgIGRvbmUoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGFyZCA9IHRoaXMua2V5Rm9yKHF1ZXJ5KVxyXG4gICAgdGhpcy5yZWFkVGV4dChcIi9jb21tb24vZGljdC9pbmZsZWN0X3JldmVyc2UvaXJldmVyc2VfXCIgKyBzaGFyZCArIFwiLnR4dFwiLCAodGV4dCkgPT4ge1xyXG4gICAgICBjb25zdCBmb3JtcyA9IFtdXHJcbiAgICAgIHZhciBwcmV2aW91c0Jhc2UgPSBcIlwiXHJcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBsaW5lc1tpXS5zcGxpdChcIlxcdFwiKVxyXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYXNlID0gZGVjb2RlUHJlZml4RmllbGQocGFydHNbMF0sIHByZXZpb3VzQmFzZSlcclxuICAgICAgICBpZiAoYmFzZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJldmlvdXNCYXNlID0gYmFzZVxyXG4gICAgICAgIGlmIChiYXNlID09PSBxdWVyeSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWVzID0gcGFydHNbMV0uc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbHVlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tqXVxyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsdWUuY2hhckF0KDApID09PSBcIkBcIikge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVudHJ5SWQgPSBwYXJzZUJhc2UzNih2YWx1ZS5zbGljZSgxKSlcclxuICAgICAgICAgICAgICBpZiAoZW50cnlJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3Jtcy5wdXNoKGVudHJ5SWQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBxdWVyeSAmJiAhc2Vlblt2YWx1ZV0pIHtcclxuICAgICAgICAgICAgICBmb3Jtcy5wdXNoKHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbGxlY3RGb3JtUmVzdWx0cyhxdWVyeSwgZm9ybXMsIHJlc3VsdHMsIHNlZW4sIDAsIGRvbmUpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNvbGxlY3RGb3JtUmVzdWx0cyhiYXNlV29yZCwgZm9ybXMsIHJlc3VsdHMsIHNlZW4sIGluZGV4LCBkb25lKSB7XHJcbiAgICBpZiAoaW5kZXggPj0gZm9ybXMubGVuZ3RoIHx8IHRoaXMucmVzdWx0Q2FyZHMubGVuZ3RoID49IDIwKSB7XHJcbiAgICAgIGRvbmUoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZm9ybXNbaW5kZXhdXHJcbiAgICBpZiAodHlwZW9mIGZvcm0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgY29uc3Qgc2hhcmQgPSB0aGlzLmVudHJ5U2hhcmRGb3IoZm9ybSlcclxuICAgICAgdGhpcy5sb2FkRW50cnlTaGFyZChzaGFyZCwgKGVudHJpZXMpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtID0gZW50cmllc1tmb3JtXVxyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICBjb25zdCBsb3dlciA9IHRoaXMubm9ybWFsaXplV29yZChpdGVtLndvcmQpXHJcbiAgICAgICAgICBpZiAoIXNlZW5bbG93ZXJdKSB7XHJcbiAgICAgICAgICAgIHNlZW5bbG93ZXJdID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5jcmVhdGVSZXN1bHRDYXJkKGZvcm0sIGxvd2VyLCBpdGVtLndvcmQsIGl0ZW0ucGhvbmV0aWMsIGl0ZW0udHJhbnNsYXRpb24sIFwi5Y+Y5b2iXCIpXHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChjYXJkKVxyXG4gICAgICAgICAgICB0aGlzLl9lbnF1ZXVlQ2FyZChjYXJkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxlY3RGb3JtUmVzdWx0cyhiYXNlV29yZCwgZm9ybXMsIHJlc3VsdHMsIHNlZW4sIGluZGV4ICsgMSwgZG9uZSlcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb3dlciA9IHRoaXMubm9ybWFsaXplV29yZChmb3JtKVxyXG4gICAgaWYgKCFsb3dlciB8fCBzZWVuW2xvd2VyXSkge1xyXG4gICAgICB0aGlzLmNvbGxlY3RGb3JtUmVzdWx0cyhiYXNlV29yZCwgZm9ybXMsIHJlc3VsdHMsIHNlZW4sIGluZGV4ICsgMSwgZG9uZSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzZWVuW2xvd2VyXSA9IHRydWVcclxuXHJcbiAgICAvLyDlhYjmn6Xor43lupPvvIzmnInliJnnlKjor43lupPph4rkuYnvvJvml6DliJnnlKjor43moLnph4rkuYlcclxuICAgIGNvbnN0IGZpcnN0ID0gbG93ZXIuY2hhckF0KDApXHJcbiAgICBpZiAoZmlyc3QgPj0gXCJhXCIgJiYgZmlyc3QgPD0gXCJ6XCIpIHtcclxuICAgICAgdGhpcy5yZWFkVGV4dChcIi9jb21tb24vZGljdC93b3Jkcy93b3JkX1wiICsgZmlyc3QgKyBcIi50eHRcIiwgKHRleHQpID0+IHtcclxuICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gW11cclxuICAgICAgICB0aGlzLmNvbGxlY3RDb21wYWN0V29yZENhbmRpZGF0ZXModGV4dCwgZm9ybSwgY2FuZGlkYXRlcywgc2VlbiwgXCLlj5jlvaJcIiwgMSlcclxuICAgICAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmh5ZHJhdGVDb21wYWN0Q2FuZGlkYXRlcyhjYW5kaWRhdGVzLCByZXN1bHRzLCAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdEZvcm1SZXN1bHRzKGJhc2VXb3JkLCBmb3JtcywgcmVzdWx0cywgc2VlbiwgaW5kZXggKyAxLCBkb25lKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5oeWRyYXRlRnJvbUJhc2VXb3JkKGJhc2VXb3JkLCBmb3JtLCByZXN1bHRzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdEZvcm1SZXN1bHRzKGJhc2VXb3JkLCBmb3JtcywgcmVzdWx0cywgc2VlbiwgaW5kZXggKyAxLCBkb25lKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbGxlY3RGb3JtUmVzdWx0cyhiYXNlV29yZCwgZm9ybXMsIHJlc3VsdHMsIHNlZW4sIGluZGV4ICsgMSwgZG9uZSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBoeWRyYXRlRnJvbUJhc2VXb3JkKGJhc2VXb3JkLCBkaXNwbGF5V29yZCwgcmVzdWx0cywgZG9uZSkge1xyXG4gICAgY29uc3QgZmlyc3QgPSB0aGlzLm5vcm1hbGl6ZVdvcmQoYmFzZVdvcmQpLmNoYXJBdCgwKVxyXG4gICAgaWYgKGZpcnN0IDwgXCJhXCIgfHwgZmlyc3QgPiBcInpcIikge1xyXG4gICAgICBkb25lKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlYWRUZXh0KFwiL2NvbW1vbi9kaWN0L3dvcmRzL3dvcmRfXCIgKyBmaXJzdCArIFwiLnR4dFwiLCAodGV4dCkgPT4ge1xyXG4gICAgICB2YXIgcHJldldvcmQgPSBcIlwiXHJcbiAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBsaW5lc1tpXS5zcGxpdChcIlxcdFwiKVxyXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICBwcmV2V29yZCA9IFwiXCJcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3b3JkID0gdGhpcy5fZGVjb2RlV29yZFByZWZpeChwYXJ0cywgcHJldldvcmQpXHJcbiAgICAgICAgcHJldldvcmQgPSB3b3JkXHJcbiAgICAgICAgaWYgKHdvcmQudG9Mb3dlckNhc2UoKSA9PT0gYmFzZVdvcmQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgY29uc3QgZW50cnlJZCA9IHRoaXMucGFyc2VFbnRyeUlkKHBhcnRzWzFdKVxyXG4gICAgICAgICAgaWYgKGVudHJ5SWQgPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFyZCA9IHRoaXMuZW50cnlTaGFyZEZvcihlbnRyeUlkKVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRFbnRyeVNoYXJkKHNoYXJkLCAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbnRyaWVzW2VudHJ5SWRdXHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmNyZWF0ZVJlc3VsdENhcmQoXHJcbiAgICAgICAgICAgICAgICAgIGVudHJ5SWQsXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubm9ybWFsaXplV29yZChkaXNwbGF5V29yZCksXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlXb3JkLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtLnBob25ldGljLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtLnRyYW5zbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBcIuWPmOW9olwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goY2FyZClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VucXVldWVDYXJkKGNhcmQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRvbmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGRvbmUoKVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBjb2xsZWN0QmFzZVJlc3VsdHMoYmFzZXMsIHJlc3VsdHMsIHNlZW4sIGluZGV4LCBkb25lKSB7XHJcbiAgICBpZiAoaW5kZXggPj0gYmFzZXMubGVuZ3RoIHx8IHRoaXMucmVzdWx0Q2FyZHMubGVuZ3RoID49IDIwKSB7XHJcbiAgICAgIGRvbmUoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiYXNlID0gYmFzZXNbaW5kZXhdXHJcbiAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgY29uc3Qgc2hhcmQgPSB0aGlzLmVudHJ5U2hhcmRGb3IoYmFzZSlcclxuICAgICAgdGhpcy5sb2FkRW50cnlTaGFyZChzaGFyZCwgKGVudHJpZXMpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtID0gZW50cmllc1tiYXNlXVxyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICBjb25zdCBsb3dlciA9IHRoaXMubm9ybWFsaXplV29yZChpdGVtLndvcmQpXHJcbiAgICAgICAgICBpZiAoIXNlZW5bbG93ZXJdKSB7XHJcbiAgICAgICAgICAgIHNlZW5bbG93ZXJdID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5jcmVhdGVSZXN1bHRDYXJkKGJhc2UsIGxvd2VyLCBpdGVtLndvcmQsIGl0ZW0ucGhvbmV0aWMsIGl0ZW0udHJhbnNsYXRpb24sIFwi5Y+Y5b2iXCIpXHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChjYXJkKVxyXG4gICAgICAgICAgICB0aGlzLl9lbnF1ZXVlQ2FyZChjYXJkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxlY3RCYXNlUmVzdWx0cyhiYXNlcywgcmVzdWx0cywgc2VlbiwgaW5kZXggKyAxLCBkb25lKVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5ub3JtYWxpemVXb3JkKGJhc2UpLmNoYXJBdCgwKVxyXG4gICAgaWYgKGZpcnN0IDwgXCJhXCIgfHwgZmlyc3QgPiBcInpcIikge1xyXG4gICAgICB0aGlzLmNvbGxlY3RCYXNlUmVzdWx0cyhiYXNlcywgcmVzdWx0cywgc2VlbiwgaW5kZXggKyAxLCBkb25lKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlYWRUZXh0KFwiL2NvbW1vbi9kaWN0L3dvcmRzL3dvcmRfXCIgKyBmaXJzdCArIFwiLnR4dFwiLCAodGV4dCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW5kaWRhdGVzID0gW11cclxuICAgICAgdGhpcy5jb2xsZWN0Q29tcGFjdFdvcmRDYW5kaWRhdGVzKHRleHQsIGJhc2UsIGNhbmRpZGF0ZXMsIHNlZW4sIFwi5Y+Y5b2iXCIsIDEpXHJcbiAgICAgIHRoaXMuaHlkcmF0ZUNvbXBhY3RDYW5kaWRhdGVzKGNhbmRpZGF0ZXMsIHJlc3VsdHMsIDAsICgpID0+IHtcclxuICAgICAgICB0aGlzLmNvbGxlY3RCYXNlUmVzdWx0cyhiYXNlcywgcmVzdWx0cywgc2VlbiwgaW5kZXggKyAxLCBkb25lKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBfZGVjb2RlV29yZFByZWZpeChwYXJ0cywgcHJldldvcmQpIHtcclxuICAgIHJldHVybiBkZWNvZGVQcmVmaXhGaWVsZChwYXJ0c1swXSwgcHJldldvcmQpIHx8IFwiXCJcclxuICB9LFxyXG5cclxuICBjb2xsZWN0Q29tcGFjdFdvcmRDYW5kaWRhdGVzKHRleHQsIHF1ZXJ5LCBjYW5kaWRhdGVzLCBzZWVuLCBzb3VyY2UsIGxpbWl0KSB7XHJcbiAgICBpZiAoIXRleHQgfHwgbGltaXQgPD0gMCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMubm9ybWFsaXplV29yZChxdWVyeSlcclxuICAgIHZhciBwcmV2V29yZCA9IFwiXCJcclxuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGggJiYgY2FuZGlkYXRlcy5sZW5ndGggPCBsaW1pdDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gbGluZXNbaV0uc3BsaXQoXCJcXHRcIilcclxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB3b3JkID0gdGhpcy5fZGVjb2RlV29yZFByZWZpeChwYXJ0cywgcHJldldvcmQpXHJcbiAgICAgIHByZXZXb3JkID0gd29yZFxyXG4gICAgICBjb25zdCBsb3dlciA9IHRoaXMubm9ybWFsaXplV29yZCh3b3JkKVxyXG4gICAgICBpZiAoIWxvd2VyIHx8IHNlZW5bbG93ZXJdKSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG4gICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgaWYgKGxvd2VyICE9PSBub3JtYWxpemVkUXVlcnkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGxvd2VyLmluZGV4T2Yobm9ybWFsaXplZFF1ZXJ5KSAhPT0gMCkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5SWQgPSB0aGlzLnBhcnNlRW50cnlJZChwYXJ0c1sxXSlcclxuICAgICAgaWYgKGVudHJ5SWQgPCAwKSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG4gICAgICBzZWVuW2xvd2VyXSA9IHRydWVcclxuICAgICAgY2FuZGlkYXRlcy5wdXNoKHtcclxuICAgICAgICBlbnRyeUlkOiBlbnRyeUlkLFxyXG4gICAgICAgIGxvd2VyOiBsb3dlcixcclxuICAgICAgICB3b3JkOiB3b3JkLFxyXG4gICAgICAgIHRhZzogdGhpcy5fZXhwYW5kVGFnKHBhcnRzWzJdIHx8IFwiXCIpLFxyXG4gICAgICAgIHNvdXJjZTogc291cmNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaHlkcmF0ZUNvbXBhY3RDYW5kaWRhdGVzKGNhbmRpZGF0ZXMsIHJlc3VsdHMsIGluZGV4LCBkb25lKSB7XHJcbiAgICBpZiAoaW5kZXggPj0gY2FuZGlkYXRlcy5sZW5ndGggfHwgdGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggPj0gMjApIHtcclxuICAgICAgZG9uZSgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbaW5kZXhdXHJcbiAgICBjb25zdCBzaGFyZCA9IHRoaXMuZW50cnlTaGFyZEZvcihjYW5kaWRhdGUuZW50cnlJZClcclxuICAgIHRoaXMubG9hZEVudHJ5U2hhcmQoc2hhcmQsIChlbnRyaWVzKSA9PiB7XHJcbiAgICAgIGxldCBuZXh0SW5kZXggPSBpbmRleFxyXG4gICAgICB3aGlsZSAobmV4dEluZGV4IDwgY2FuZGlkYXRlcy5sZW5ndGggJiYgdGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggPCAyMCkge1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSBjYW5kaWRhdGVzW25leHRJbmRleF1cclxuICAgICAgICBpZiAodGhpcy5lbnRyeVNoYXJkRm9yKG5leHQuZW50cnlJZCkgIT09IHNoYXJkKSB7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpdGVtID0gZW50cmllc1tuZXh0LmVudHJ5SWRdXHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmNyZWF0ZVJlc3VsdENhcmQoXHJcbiAgICAgICAgICAgIG5leHQuZW50cnlJZCxcclxuICAgICAgICAgICAgbmV4dC5sb3dlcixcclxuICAgICAgICAgICAgaXRlbS53b3JkIHx8IG5leHQud29yZCxcclxuICAgICAgICAgICAgaXRlbS5waG9uZXRpYyxcclxuICAgICAgICAgICAgaXRlbS50cmFuc2xhdGlvbixcclxuICAgICAgICAgICAgaXRlbS50YWcgfHwgbmV4dC50YWcgfHwgbmV4dC5zb3VyY2VcclxuICAgICAgICAgIClcclxuICAgICAgICAgIHJlc3VsdHMucHVzaChjYXJkKVxyXG4gICAgICAgICAgdGhpcy5fZW5xdWV1ZUNhcmQoY2FyZClcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV4dEluZGV4KytcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmh5ZHJhdGVDb21wYWN0Q2FuZGlkYXRlcyhjYW5kaWRhdGVzLCByZXN1bHRzLCBuZXh0SW5kZXgsIGRvbmUpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNvbGxlY3RGdXp6eVJlc3VsdHMocXVlcnksIGRvbmUpIHtcclxuICAgIGlmIChxdWVyeS5sZW5ndGggPD0gMikge1xyXG4gICAgICBkb25lKFtdKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHNoYXJkcyA9IHRoaXMuZ2V0RnV6enlTaGFyZHMocXVlcnkpXHJcbiAgICBjb25zdCBpdGVtcyA9IFtdXHJcbiAgICBjb25zdCBzZWVuID0ge31cclxuICAgIHRoaXMuZnV6enlXb3Jkc0NoZWNrZWQgPSAwXHJcbiAgICB0aGlzLmNvbGxlY3RGdXp6eVNoYXJkUmVzdWx0cyhzaGFyZHMsIHF1ZXJ5LCBpdGVtcywgc2VlbiwgMCwgKCkgPT4ge1xyXG4gICAgICBpdGVtcy5zb3J0KChsZWZ0LCByaWdodCkgPT4ge1xyXG4gICAgICAgIGlmIChsZWZ0LmRpc3RhbmNlICE9PSByaWdodC5kaXN0YW5jZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGxlZnQuZGlzdGFuY2UgLSByaWdodC5kaXN0YW5jZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmlnaHQuc2NvcmUgIT09IGxlZnQuc2NvcmUpIHtcclxuICAgICAgICAgIHJldHVybiByaWdodC5zY29yZSAtIGxlZnQuc2NvcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQud29yZC5sZW5ndGggLSByaWdodC53b3JkLmxlbmd0aFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IFtdXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjYW5kaWRhdGVzLnB1c2goe1xyXG4gICAgICAgICAgZW50cnlJZDogaXRlbXNbaV0uZW50cnlJZCxcclxuICAgICAgICAgIGxvd2VyOiBpdGVtc1tpXS5sb3dlcixcclxuICAgICAgICAgIHdvcmQ6IGl0ZW1zW2ldLndvcmQsXHJcbiAgICAgICAgICB0YWc6IGl0ZW1zW2ldLnRhZyxcclxuICAgICAgICAgIHNvdXJjZTogXCLnm7jov5FcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY2FyZHMgPSBbXVxyXG4gICAgICB0aGlzLmh5ZHJhdGVDb21wYWN0Q2FuZGlkYXRlcyhjYW5kaWRhdGVzLCBjYXJkcywgMCwgKCkgPT4gZG9uZSgpKVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBnZXRGdXp6eVNoYXJkcyhxdWVyeSkge1xyXG4gICAgY29uc3Qgb3JkZXJlZCA9IFtdXHJcbiAgICBjb25zdCBzZWVuID0ge31cclxuICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5ub3JtYWxpemVXb3JkKHF1ZXJ5KS5jaGFyQXQoMClcclxuICAgIGlmIChmaXJzdCA+PSBcImFcIiAmJiBmaXJzdCA8PSBcInpcIikge1xyXG4gICAgICB0aGlzLnB1c2hVbmlxdWVTaGFyZHMob3JkZXJlZCwgc2VlbiwgW2ZpcnN0XSlcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgV09SRF9JTkRFWF9MRVRURVJTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucHVzaFVuaXF1ZVNoYXJkcyhvcmRlcmVkLCBzZWVuLCBbV09SRF9JTkRFWF9MRVRURVJTLmNoYXJBdChpKV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JkZXJlZFxyXG4gIH0sXHJcblxyXG4gIHB1c2hVbmlxdWVTaGFyZHMob3V0cHV0LCBzZWVuLCBzaGFyZHMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoYXJkID0gc2hhcmRzW2ldXHJcbiAgICAgIGlmIChzaGFyZCAmJiAhc2VlbltzaGFyZF0pIHtcclxuICAgICAgICBzZWVuW3NoYXJkXSA9IHRydWVcclxuICAgICAgICBvdXRwdXQucHVzaChzaGFyZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNvbGxlY3RGdXp6eVNoYXJkUmVzdWx0cyhzaGFyZHMsIHF1ZXJ5LCBpdGVtcywgc2VlbiwgaW5kZXgsIGRvbmUpIHtcclxuICAgIGlmIChcclxuICAgICAgaW5kZXggPj0gc2hhcmRzLmxlbmd0aCB8fFxyXG4gICAgICBpdGVtcy5sZW5ndGggPj0gRlVaWllfUE9PTF9MSU1JVCB8fFxyXG4gICAgICB0aGlzLmZ1enp5V29yZHNDaGVja2VkID49IEZVWlpZX1NDQU5fTElNSVRcclxuICAgICkge1xyXG4gICAgICBkb25lKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hhcmQgPSBzaGFyZHNbaW5kZXhdXHJcbiAgICB0aGlzLnJlYWRUZXh0KFwiL2NvbW1vbi9kaWN0L3dvcmRzL3dvcmRfXCIgKyBzaGFyZCArIFwiLnR4dFwiLCAodGV4dCkgPT4ge1xyXG4gICAgICB0aGlzLnNjYW5GdXp6eVdvcmRUZXh0KHRleHQsIHF1ZXJ5LCBpdGVtcywgc2VlbilcclxuICAgICAgdGhpcy5jb2xsZWN0RnV6enlTaGFyZFJlc3VsdHMoc2hhcmRzLCBxdWVyeSwgaXRlbXMsIHNlZW4sIGluZGV4ICsgMSwgZG9uZSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgc2NhbkZ1enp5V29yZFRleHQodGV4dCwgcXVlcnksIGl0ZW1zLCBzZWVuKSB7XHJcbiAgICBpZiAoIXRleHQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB2YXIgcHJldldvcmQgPSBcIlwiXHJcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIilcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgaSA8IGxpbmVzLmxlbmd0aCAmJlxyXG4gICAgICBpdGVtcy5sZW5ndGggPCBGVVpaWV9QT09MX0xJTUlUICYmXHJcbiAgICAgIHRoaXMuZnV6enlXb3Jkc0NoZWNrZWQgPCBGVVpaWV9TQ0FOX0xJTUlUO1xyXG4gICAgICBpKytcclxuICAgICkge1xyXG4gICAgICB0aGlzLmZ1enp5V29yZHNDaGVja2VkKytcclxuICAgICAgY29uc3QgcGFydHMgPSBsaW5lc1tpXS5zcGxpdChcIlxcdFwiKVxyXG4gICAgICBpZiAocGFydHMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd29yZCA9IHRoaXMuX2RlY29kZVdvcmRQcmVmaXgocGFydHMsIHByZXZXb3JkKVxyXG4gICAgICBwcmV2V29yZCA9IHdvcmRcclxuICAgICAgY29uc3QgbG93ZXIgPSB0aGlzLm5vcm1hbGl6ZVdvcmQod29yZClcclxuICAgICAgaWYgKCFsb3dlciB8fCBzZWVuW2xvd2VyXSB8fCBNYXRoLmFicyhsb3dlci5sZW5ndGggLSBxdWVyeS5sZW5ndGgpID4gMikge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmVkaXREaXN0YW5jZUJvdW5kZWQocXVlcnksIGxvd2VyLCAyKVxyXG4gICAgICBpZiAoZGlzdGFuY2UgPCAwIHx8IGRpc3RhbmNlID4gMikge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZW50cnlJZCA9IHRoaXMucGFyc2VFbnRyeUlkKHBhcnRzWzFdKVxyXG4gICAgICBpZiAoZW50cnlJZCA8IDApIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcbiAgICAgIHZhciB0YWdTdHIgPSB0aGlzLl9leHBhbmRUYWcocGFydHNbMl0gfHwgXCJcIilcclxuICAgICAgc2Vlbltsb3dlcl0gPSB0cnVlXHJcbiAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIGVudHJ5SWQ6IGVudHJ5SWQsXHJcbiAgICAgICAgbG93ZXI6IGxvd2VyLFxyXG4gICAgICAgIHdvcmQ6IHdvcmQsXHJcbiAgICAgICAgdGFnOiB0YWdTdHIsXHJcbiAgICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlLFxyXG4gICAgICAgIHNjb3JlOiB0aGlzLnNjb3JlRnV6enlDYW5kaWRhdGUocXVlcnksIGxvd2VyLCB0YWdTdHIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZWRpdERpc3RhbmNlQm91bmRlZChsZWZ0LCByaWdodCwgbGltaXQpIHtcclxuICAgIGNvbnN0IGxlZnRMZW5ndGggPSBsZWZ0Lmxlbmd0aFxyXG4gICAgY29uc3QgcmlnaHRMZW5ndGggPSByaWdodC5sZW5ndGhcclxuICAgIGlmIChNYXRoLmFicyhsZWZ0TGVuZ3RoIC0gcmlnaHRMZW5ndGgpID4gbGltaXQpIHtcclxuICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXZpb3VzID0gW11cclxuICAgIGxldCBjdXJyZW50ID0gW11cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHJpZ2h0TGVuZ3RoOyBqKyspIHtcclxuICAgICAgcHJldmlvdXNbal0gPSBqXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGVmdExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBbaV1cclxuICAgICAgbGV0IHJvd01pbiA9IGN1cnJlbnRbMF1cclxuICAgICAgY29uc3QgZnJvbSA9IE1hdGgubWF4KDEsIGkgLSBsaW1pdClcclxuICAgICAgY29uc3QgdG8gPSBNYXRoLm1pbihyaWdodExlbmd0aCwgaSArIGxpbWl0KVxyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBmcm9tOyBqKyspIHtcclxuICAgICAgICBjdXJyZW50W2pdID0gbGltaXQgKyAxXHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaiA9IGZyb207IGogPD0gdG87IGorKykge1xyXG4gICAgICAgIGNvbnN0IGNvc3QgPSBsZWZ0LmNoYXJBdChpIC0gMSkgPT09IHJpZ2h0LmNoYXJBdChqIC0gMSkgPyAwIDogMVxyXG4gICAgICAgIGNvbnN0IGRlbGV0aW9uID0gcHJldmlvdXNbal0gKyAxXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0aW9uID0gY3VycmVudFtqIC0gMV0gKyAxXHJcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gcHJldmlvdXNbaiAtIDFdICsgY29zdFxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5taW4oZGVsZXRpb24sIGluc2VydGlvbiwgc3Vic3RpdHV0aW9uKVxyXG4gICAgICAgIGN1cnJlbnRbal0gPSB2YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA8IHJvd01pbikge1xyXG4gICAgICAgICAgcm93TWluID0gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaiA9IHRvICsgMTsgaiA8PSByaWdodExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgY3VycmVudFtqXSA9IGxpbWl0ICsgMVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChyb3dNaW4gPiBsaW1pdCkge1xyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgICB9XHJcbiAgICAgIHByZXZpb3VzID0gY3VycmVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHByZXZpb3VzW3JpZ2h0TGVuZ3RoXVxyXG4gICAgcmV0dXJuIHJlc3VsdCA8PSBsaW1pdCA/IHJlc3VsdCA6IC0xXHJcbiAgfSxcclxuXHJcbiAgc2NvcmVGdXp6eUNhbmRpZGF0ZShxdWVyeSwgd29yZCwgdGFnKSB7XHJcbiAgICBsZXQgc2NvcmUgPSA4MCAtIE1hdGguYWJzKHdvcmQubGVuZ3RoIC0gcXVlcnkubGVuZ3RoKSAqIDhcclxuICAgIGNvbnN0IHRhZ3MgPSB0YWcgfHwgXCJcIlxyXG4gICAgaWYgKHdvcmQuY2hhckF0KDApID09PSBxdWVyeS5jaGFyQXQoMCkpIHtcclxuICAgICAgc2NvcmUgKz0gMjBcclxuICAgIH1cclxuICAgIGlmICh0YWdzLmluZGV4T2YoXCJ6a1wiKSA+PSAwKSB7XHJcbiAgICAgIHNjb3JlICs9IDQwXHJcbiAgICB9XHJcbiAgICBpZiAodGFncy5pbmRleE9mKFwiZ2tcIikgPj0gMCkge1xyXG4gICAgICBzY29yZSArPSAzNlxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ3MuaW5kZXhPZihcImNldDRcIikgPj0gMCkge1xyXG4gICAgICBzY29yZSArPSAzMFxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ3MuaW5kZXhPZihcImNldDZcIikgPj0gMCB8fCB0YWdzLmluZGV4T2YoXCJreVwiKSA+PSAwKSB7XHJcbiAgICAgIHNjb3JlICs9IDE4XHJcbiAgICB9XHJcbiAgICBpZiAodGFncy5pbmRleE9mKFwidG9lZmxcIikgPj0gMCB8fCB0YWdzLmluZGV4T2YoXCJpZWx0c1wiKSA+PSAwKSB7XHJcbiAgICAgIHNjb3JlICs9IDhcclxuICAgIH1cclxuICAgIGlmICh0YWdzLmluZGV4T2YoXCJncmVcIikgPj0gMCkge1xyXG4gICAgICBzY29yZSAtPSA4XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NvcmVcclxuICB9LFxyXG5cclxuICBoaWdoZXN0VGFnKHRhZykge1xyXG4gICAgaWYgKCF0YWcpIHJldHVybiBcIlwiXHJcbiAgICBjb25zdCB0YWdzID0gdGFnLnNwbGl0KFwiIFwiKVxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBbXCJ6a1wiLCBcImdrXCIsIFwiY2V0NFwiLCBcImNldDZcIiwgXCJreVwiLCBcImllbHRzXCIsIFwidG9lZmxcIiwgXCJncmVcIl1cclxuICAgIGxldCBiZXN0ID0gdGFnc1swXSB8fCBcIlwiXHJcbiAgICBsZXQgYmVzdElkeCA9IC0xXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaWR4ID0gcHJpb3JpdHkuaW5kZXhPZih0YWdzW2ldKVxyXG4gICAgICBpZiAoaWR4ID4gYmVzdElkeCkge1xyXG4gICAgICAgIGJlc3RJZHggPSBpZHhcclxuICAgICAgICBiZXN0ID0gdGFnc1tpXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmVzdFxyXG4gIH0sXHJcblxyXG4gIF9lbnF1ZXVlQ2FyZChjYXJkKSB7XHJcbiAgICBpZiAodGhpcy5wZW5kaW5nQ2FyZHMubGVuZ3RoID49IDIwKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5wZW5kaW5nQ2FyZHMucHVzaChjYXJkKVxyXG4gIH0sXHJcblxyXG4gIF9mbHVzaFJlc3VsdHMoKSB7XHJcbiAgICBpZiAodGhpcy5wZW5kaW5nQ2FyZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdmFyIHJlbWFpbmluZyA9IDIwIC0gdGhpcy5yZXN1bHRDYXJkcy5sZW5ndGhcclxuICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xyXG4gICAgICB0aGlzLnBlbmRpbmdDYXJkcyA9IFtdXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdmFyIGJhdGNoID0gdGhpcy5wZW5kaW5nQ2FyZHMuc3BsaWNlKDAsIHJlbWFpbmluZylcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmF0Y2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5yZXN1bHRDYXJkcy5wdXNoKGJhdGNoW2ldKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZXN1bHRDYXJkcyA9IHRoaXMucmVzdWx0Q2FyZHMuc2xpY2UoKVxyXG4gIH0sXHJcblxyXG4gIF9zdGFydEZsdXNoVGltZXIoKSB7XHJcbiAgICB0aGlzLl9zdG9wRmx1c2hUaW1lcigpXHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIHRoaXMuZmx1c2hUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgc2VsZi5fZmx1c2hSZXN1bHRzKCkgfSwgMTAwMClcclxuICB9LFxyXG5cclxuICBfc3RvcEZsdXNoVGltZXIoKSB7XHJcbiAgICBpZiAodGhpcy5mbHVzaFRpbWVyKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5mbHVzaFRpbWVyKVxyXG4gICAgICB0aGlzLmZsdXNoVGltZXIgPSBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgX3BhcnNlSGlzdG9yeUxpc3QoZGF0YSkge1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgdmFyIHRleHQgPSBkYXRhLnZhbHVlIHx8IGRhdGEgfHwgXCJcIlxyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIGxpc3QgPSBKU09OLnBhcnNlKHRleHQpXHJcbiAgICAgIGlmIChsaXN0ICYmIGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICAgIHJldHVybiBbXVxyXG4gIH0sXHJcblxyXG4gIF9zYXZlU2VhcmNoSGlzdG9yeSgpIHtcclxuICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcnlUZXh0XHJcbiAgICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBpZHMgPSBbXVxyXG4gICAgdmFyIGNhcmRzID0gdGhpcy5yZXN1bHRDYXJkcyB8fCBbXVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgZW50cnlJZCA9IHBhcnNlSW50KGNhcmRzW2ldLmVudHJ5SWQsIDEwKVxyXG4gICAgICBpZiAoIWlzTmFOKGVudHJ5SWQpICYmIGVudHJ5SWQgPj0gMCkge1xyXG4gICAgICAgIGlkcy5wdXNoKGVudHJ5SWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAga2V5OiBcImRpY19oaXN0b3J5XCIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBzZWxmLl93cml0ZUhpc3RvcnlCbG9jayhkYXRhLCBxdWVyeSwgaWRzKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZWxmLl93cml0ZUhpc3RvcnlCbG9jayhudWxsLCBxdWVyeSwgaWRzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIF93cml0ZUhpc3RvcnlCbG9jayhkYXRhLCBxdWVyeSwgaWRzKSB7XHJcbiAgICB2YXIgbGlzdCA9IHRoaXMuX3BhcnNlSGlzdG9yeUxpc3QoZGF0YSlcclxuICAgIHZhciBpdGVtID0ge3F1ZXJ5OiBxdWVyeX1cclxuICAgIGlmIChpZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpdGVtLmlkcyA9IGlkc1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBvdXRwdXQgPSBbaXRlbV1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGggJiYgb3V0cHV0Lmxlbmd0aCA8IDIwOyBpKyspIHtcclxuICAgICAgdmFyIG9sZEl0ZW0gPSBsaXN0W2ldXHJcbiAgICAgIGlmIChvbGRJdGVtICYmIG9sZEl0ZW0ucXVlcnkgJiYgdGhpcy5ub3JtYWxpemVXb3JkKG9sZEl0ZW0ucXVlcnkpICE9PSBxdWVyeSkge1xyXG4gICAgICAgIG91dHB1dC5wdXNoKG9sZEl0ZW0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhpc3RvcnlDYWNoZSA9IG91dHB1dFxyXG5cclxuICAgIHN0b3JhZ2Uuc2V0KHtcclxuICAgICAga2V5OiBcImRpY19oaXN0b3J5XCIsXHJcbiAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShvdXRwdXQpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIF9hcHBlbmROZXh0QnV0dG9uKCkge1xyXG4gICAgaWYgKHRoaXMudG90YWxSZXN1bHRDb3VudCA+IDIwICYmIHRoaXMucmVzdWx0Q2FyZHMubGVuZ3RoID4gMCAmJiB0aGlzLnJlc3VsdENhcmRzW3RoaXMucmVzdWx0Q2FyZHMubGVuZ3RoIC0gMV0ucmVjb3JkS2luZCAhPT0gXCJuZXh0LXBhZ2VcIikge1xyXG4gICAgICB0aGlzLnJlc3VsdENhcmRzLnB1c2goe1xyXG4gICAgICAgIGlkOiBcIm5leHRfcGFnZVwiLFxyXG4gICAgICAgIHJlY29yZEtpbmQ6IFwibmV4dC1wYWdlXCIsXHJcbiAgICAgICAgY2FyZEhlaWdodDogNTYsXHJcbiAgICAgICAgaXRlbUhlaWdodDogNjYsXHJcbiAgICAgICAgd29yZE1hcnF1ZWVPbjogZmFsc2UsXHJcbiAgICAgICAgd29yZE1hcnF1ZWVTcGVlZDogNDBcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5yZXN1bHRDYXJkcyA9IHRoaXMucmVzdWx0Q2FyZHMuc2xpY2UoKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIF9maW5hbGl6ZUFmdGVyU2VhcmNoKCkge1xyXG4gICAgLy8gTWVyZ2UgZmlyc3QtMjAgZW50cnlJZHMgaW50byBjb2xsZWN0ZWRJZHMgZm9yIHVuaWZvcm0gcGFnZSBhY2Nlc3NcclxuICAgIGlmICh0aGlzLnJlc3VsdENhcmRzLmxlbmd0aCA8PSAwKSByZXR1cm5cclxuICAgIHZhciBhbGxJZHMgPSBbXVxyXG4gICAgdmFyIHNlZW4gPSB7fVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdENhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBlaWQgPSB0aGlzLnJlc3VsdENhcmRzW2ldLmVudHJ5SWRcclxuICAgICAgaWYgKGVpZCA+PSAwICYmICFzZWVuW2VpZF0pIHtcclxuICAgICAgICBzZWVuW2VpZF0gPSB0cnVlXHJcbiAgICAgICAgYWxsSWRzLnB1c2goZWlkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGVkSWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghc2Vlblt0aGlzLmNvbGxlY3RlZElkc1tpXV0pIHtcclxuICAgICAgICBzZWVuW3RoaXMuY29sbGVjdGVkSWRzW2ldXSA9IHRydWVcclxuICAgICAgICBhbGxJZHMucHVzaCh0aGlzLmNvbGxlY3RlZElkc1tpXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5taWdodEhhdmVNb3JlID0gdGhpcy5jb2xsZWN0ZWRJZHMubGVuZ3RoID49IDQwXHJcbiAgICB0aGlzLmNvbGxlY3RlZElkcyA9IGFsbElkc1xyXG4gICAgdGhpcy50b3RhbFJlc3VsdENvdW50ID0gYWxsSWRzLmxlbmd0aFxyXG4gICAgdGhpcy5fdXBkYXRlUGFnaW5hdGlvblN0YXR1cygpXHJcbiAgICB0aGlzLl9zYXZlU2VhcmNoSGlzdG9yeSgpXHJcbiAgICB0aGlzLl9hcHBlbmROZXh0QnV0dG9uKClcclxuICB9LFxyXG5cclxuICBfZmluaXNoV2l0aFN0YXR1cyhiYXNlU3RhdHVzKSB7XHJcbiAgICBpZiAodGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggPj0gMjApIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgIHRoaXMuX2NvbGxlY3RFeHRyYUVuZ2xpc2hJZHModGhpcy5xdWVyeVRleHQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNlbGYuX2ZpbmFsaXplQWZ0ZXJTZWFyY2goKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b3RhbFJlc3VsdENvdW50ID0gdGhpcy5yZXN1bHRDYXJkcy5sZW5ndGhcclxuICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gYmFzZVN0YXR1cyArIFwiIFwiICsgdGhpcy5yZXN1bHRDYXJkcy5sZW5ndGggKyBcIuadoVwiXHJcbiAgICAgIHRoaXMuX3NhdmVTZWFyY2hIaXN0b3J5KClcclxuICAgICAgdGhpcy5fYXBwZW5kTmV4dEJ1dHRvbigpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgX3VwZGF0ZVBhZ2luYXRpb25TdGF0dXMoKSB7XHJcbiAgICB2YXIgdG90YWwgPSB0aGlzLnRvdGFsUmVzdWx0Q291bnRcclxuICAgIHZhciBwYWdlTnVtID0gdGhpcy5zZWFyY2hQYWdlICsgMVxyXG4gICAgaWYgKHRvdGFsIDw9IDIwKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IFwi5LiA5YWxXCIgKyB0b3RhbCArIFwi5p2hXCJcclxuICAgIH0gZWxzZSBpZiAodGhpcy5taWdodEhhdmVNb3JlKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IFwi5b2T5YmN56ysXCIgKyBwYWdlTnVtICsgXCLpobXvvIzmnIDlpJrliqDovb02MOadoVwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXR1c1RleHQgPSBcIuW9k+WJjeesrFwiICsgcGFnZU51bSArIFwi6aG177yM5LiA5YWxXCIgKyB0b3RhbCArIFwi5p2hXCJcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBfY29sbGVjdEV4dHJhRW5nbGlzaElkcyhxdWVyeSwgZG9uZSkge1xyXG4gICAgdmFyIGZpcnN0ID0gcXVlcnkuY2hhckF0KDApXHJcbiAgICBpZiAoZmlyc3QgPCBcImFcIiB8fCBmaXJzdCA+IFwielwiKSB7XHJcbiAgICAgIGRvbmUoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgdGhpcy5yZWFkVGV4dChcIi9jb21tb24vZGljdC93b3Jkcy93b3JkX1wiICsgZmlyc3QgKyBcIi50eHRcIiwgZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICBpZiAoIXRleHQgfHwgc2VsZi5jb2xsZWN0ZWRJZHMubGVuZ3RoID49IDQwKSB7XHJcbiAgICAgICAgZG9uZSgpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgdmFyIHNlZW4gPSB7fVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYucmVzdWx0Q2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzZWVuW3NlbGYucmVzdWx0Q2FyZHNbaV0uaWRdID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHZhciBpZFNlZW4gPSB7fVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuY29sbGVjdGVkSWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWRTZWVuW3NlbGYuY29sbGVjdGVkSWRzW2ldXSA9IHRydWVcclxuICAgICAgfVxyXG4gICAgICB2YXIgcHJldldvcmQgPSBcIlwiXHJcbiAgICAgIHZhciBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIilcclxuICAgICAgdmFyIG5vcm1hbGl6ZWRRdWVyeSA9IHNlbGYubm9ybWFsaXplV29yZChxdWVyeSlcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGggJiYgc2VsZi5jb2xsZWN0ZWRJZHMubGVuZ3RoIDwgNDA7IGkrKykge1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IGxpbmVzW2ldLnNwbGl0KFwiXFx0XCIpXHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDMpIGNvbnRpbnVlXHJcbiAgICAgICAgdmFyIHdvcmQgPSBzZWxmLl9kZWNvZGVXb3JkUHJlZml4KHBhcnRzLCBwcmV2V29yZClcclxuICAgICAgICBwcmV2V29yZCA9IHdvcmRcclxuICAgICAgICB2YXIgbG93ZXIgPSBzZWxmLm5vcm1hbGl6ZVdvcmQod29yZClcclxuICAgICAgICBpZiAoIWxvd2VyIHx8IHNlZW5bbG93ZXJdKSBjb250aW51ZVxyXG4gICAgICAgIGlmIChsb3dlci5pbmRleE9mKG5vcm1hbGl6ZWRRdWVyeSkgIT09IDApIGNvbnRpbnVlXHJcbiAgICAgICAgc2Vlbltsb3dlcl0gPSB0cnVlXHJcbiAgICAgICAgdmFyIGVudHJ5SWQgPSBzZWxmLnBhcnNlRW50cnlJZChwYXJ0c1sxXSlcclxuICAgICAgICBpZiAoZW50cnlJZCA+PSAwICYmICFpZFNlZW5bZW50cnlJZF0pIHtcclxuICAgICAgICAgIGlkU2VlbltlbnRyeUlkXSA9IHRydWVcclxuICAgICAgICAgIHNlbGYuY29sbGVjdGVkSWRzLnB1c2goZW50cnlJZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZG9uZSgpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIF9jb2xsZWN0RXh0cmFDaGluZXNlSWRzKGlkcywgZG9uZSkge1xyXG4gICAgdmFyIHNlZW4gPSB7fVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdENhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNlZW5bdGhpcy5yZXN1bHRDYXJkc1tpXS5lbnRyeUlkXSA9IHRydWVcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWRzLmxlbmd0aCAmJiB0aGlzLmNvbGxlY3RlZElkcy5sZW5ndGggPCA0MDsgaSsrKSB7XHJcbiAgICAgIHZhciBlbnRyeUlkID0gdGhpcy5wYXJzZUVudHJ5SWQoaWRzW2ldKVxyXG4gICAgICBpZiAoZW50cnlJZCA+PSAwICYmICFzZWVuW2VudHJ5SWRdKSB7XHJcbiAgICAgICAgc2VlbltlbnRyeUlkXSA9IHRydWVcclxuICAgICAgICB0aGlzLmNvbGxlY3RlZElkcy5wdXNoKGVudHJ5SWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRvbmUoKVxyXG4gIH0sXHJcblxyXG4gIF9nb1RvTmV4dFBhZ2UoKSB7XHJcbiAgICB0aGlzLnNlYXJjaFBhZ2UrK1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICB0aGlzLl9sb2FkQW5kUmVuZGVyUGFnZShmdW5jdGlvbigpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbGlzdCA9IHNlbGYuJGVsZW1lbnQoXCJyZXN1bHQtbGlzdFwiKVxyXG4gICAgICAgIGlmIChsaXN0ICYmIGxpc3Quc2Nyb2xsVG8pIHtcclxuICAgICAgICAgIGxpc3Quc2Nyb2xsVG8oe2luZGV4OiAwfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMClcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgX2dvVG9QcmV2UGFnZSgpIHtcclxuICAgIHRoaXMuc2VhcmNoUGFnZS0tXHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIHRoaXMuX2xvYWRBbmRSZW5kZXJQYWdlKGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBsaXN0ID0gc2VsZi4kZWxlbWVudChcInJlc3VsdC1saXN0XCIpXHJcbiAgICAgICAgaWYgKGxpc3QgJiYgbGlzdC5zY3JvbGxUbyAmJiBzZWxmLnJlc3VsdENhcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxpc3Quc2Nyb2xsVG8oe2luZGV4OiBzZWxmLnJlc3VsdENhcmRzLmxlbmd0aCAtIDF9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwKVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBfbG9hZEFuZFJlbmRlclBhZ2UoY2FsbGJhY2spIHtcclxuICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgdmFyIHBhZ2VTaXplID0gMjBcclxuICAgIHZhciBzdGFydCA9IHRoaXMuc2VhcmNoUGFnZSAqIHBhZ2VTaXplXHJcbiAgICB2YXIgZW5kID0gTWF0aC5taW4oc3RhcnQgKyBwYWdlU2l6ZSwgdGhpcy50b3RhbFJlc3VsdENvdW50LCA2MClcclxuICAgIHZhciBwYWdlSWRzID0gdGhpcy5jb2xsZWN0ZWRJZHMuc2xpY2Uoc3RhcnQsIGVuZClcclxuXHJcbiAgICB2YXIgZ3JvdXBzID0ge31cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZUlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgc2hhcmQgPSB0aGlzLmVudHJ5U2hhcmRGb3IocGFnZUlkc1tpXSlcclxuICAgICAgaWYgKCFncm91cHNbc2hhcmRdKSBncm91cHNbc2hhcmRdID0gW11cclxuICAgICAgZ3JvdXBzW3NoYXJkXS5wdXNoKHBhZ2VJZHNbaV0pXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNoYXJkS2V5cyA9IE9iamVjdC5rZXlzKGdyb3VwcylcclxuICAgIHZhciBuZXdDYXJkcyA9IFtdXHJcbiAgICB2YXIgc2hhcmRJZHggPSAwXHJcbiAgICB2YXIgd29yZFNlZW4gPSB7fVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWROZXh0KCkge1xyXG4gICAgICBpZiAoc2hhcmRJZHggPj0gc2hhcmRLZXlzLmxlbmd0aCkge1xyXG4gICAgICAgIHNlbGYuX2J1aWxkUGFnZVZpZXcobmV3Q2FyZHMsIGNhbGxiYWNrKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHZhciBzaGFyZCA9IHNoYXJkS2V5c1tzaGFyZElkeF1cclxuICAgICAgdmFyIGlkc0luU2hhcmQgPSBncm91cHNbc2hhcmRdXHJcbiAgICAgIHNoYXJkSWR4KytcclxuICAgICAgc2VsZi5sb2FkRW50cnlTaGFyZChzaGFyZCwgZnVuY3Rpb24oZW50cmllcykge1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaWRzSW5TaGFyZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgdmFyIGVudHJ5SWQgPSBpZHNJblNoYXJkW2pdXHJcbiAgICAgICAgICB2YXIgaXRlbSA9IGVudHJpZXNbZW50cnlJZF1cclxuICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBsb3dlciA9IHNlbGYubm9ybWFsaXplV29yZChpdGVtLndvcmQpXHJcbiAgICAgICAgICAgIGlmICghd29yZFNlZW5bbG93ZXJdKSB7XHJcbiAgICAgICAgICAgICAgd29yZFNlZW5bbG93ZXJdID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIHZhciBjYXJkID0gc2VsZi5jcmVhdGVSZXN1bHRDYXJkKGVudHJ5SWQsIGxvd2VyLCBpdGVtLndvcmQsIGl0ZW0ucGhvbmV0aWMsIGl0ZW0udHJhbnNsYXRpb24sIGl0ZW0udGFnIHx8IFwiXCIpXHJcbiAgICAgICAgICAgICAgbmV3Q2FyZHMucHVzaChjYXJkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWROZXh0KClcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTmV4dCgpXHJcbiAgfSxcclxuXHJcbiAgX2J1aWxkUGFnZVZpZXcoY2FyZHMsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgcGFnZUNhcmRzID0gW11cclxuICAgIGlmICh0aGlzLnNlYXJjaFBhZ2UgPiAwKSB7XHJcbiAgICAgIHBhZ2VDYXJkcy5wdXNoKHtcclxuICAgICAgICBpZDogXCJwcmV2X3BhZ2VcIixcclxuICAgICAgICByZWNvcmRLaW5kOiBcInByZXYtcGFnZVwiLFxyXG4gICAgICAgIGNhcmRIZWlnaHQ6IDU2LFxyXG4gICAgICAgIGl0ZW1IZWlnaHQ6IDY2LFxyXG4gICAgICAgIHdvcmRNYXJxdWVlT246IGZhbHNlLFxyXG4gICAgICAgIHdvcmRNYXJxdWVlU3BlZWQ6IDQwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHBhZ2VDYXJkcy5wdXNoKGNhcmRzW2ldKVxyXG4gICAgfVxyXG4gICAgdmFyIG5leHRTdGFydCA9ICh0aGlzLnNlYXJjaFBhZ2UgKyAxKSAqIDIwXHJcbiAgICBpZiAobmV4dFN0YXJ0IDwgdGhpcy50b3RhbFJlc3VsdENvdW50ICYmIG5leHRTdGFydCA8IDYwKSB7XHJcbiAgICAgIHBhZ2VDYXJkcy5wdXNoKHtcclxuICAgICAgICBpZDogXCJuZXh0X3BhZ2VcIixcclxuICAgICAgICByZWNvcmRLaW5kOiBcIm5leHQtcGFnZVwiLFxyXG4gICAgICAgIGNhcmRIZWlnaHQ6IDU2LFxyXG4gICAgICAgIGl0ZW1IZWlnaHQ6IDY2LFxyXG4gICAgICAgIHdvcmRNYXJxdWVlT246IGZhbHNlLFxyXG4gICAgICAgIHdvcmRNYXJxdWVlU3BlZWQ6IDQwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc3VsdENhcmRzID0gcGFnZUNhcmRzXHJcbiAgICB0aGlzLl91cGRhdGVQYWdpbmF0aW9uU3RhdHVzKClcclxuICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKVxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZVJlc3VsdENhcmQoZW50cnlJZCwgaWQsIHdvcmQsIHBob25ldGljLCB0cmFuc2xhdGlvbiwgdGFnKSB7XHJcbiAgICAvLyBEZWNvZGUgcGhyYXNlIG1hcmtlcnMgZm9yIGRpc3BsYXkgKElQQSBpcyBzdG9yZWQgYXMgQVNDSUktc2FmZSBlbmNvZGluZywgdXNlZCBhcy1pcylcclxuICAgIHBob25ldGljID0gcGhvbmV0aWMgfHwgXCJcIlxyXG4gICAgdHJhbnNsYXRpb24gPSB0aGlzLl9kZWNvZGVQaHJhc2UodHJhbnNsYXRpb24gfHwgXCJcIilcclxuICAgIC8vIEVuc3VyZSB0YWcgaXMgZXhwYW5kZWQg4oCUIGRlZmVuc2UgYWdhaW5zdCByYXcgaGV4IGJpdG1hc2sgcmVhY2hpbmcgZGlzcGxheSBsYXllclxyXG4gICAgdGFnID0gdGhpcy5fZXhwYW5kVGFnKHRhZyB8fCBcIlwiKVxyXG4gICAgY29uc3QgbWF4VyA9IHRoaXMuY29udGVudFdpZHRoXHJcbiAgICBjb25zdCBjYWNoZUtleSA9IHRyYW5zbGF0aW9uICsgXCJ8XCIgKyBtYXhXXHJcbiAgICB2YXIgbGluZXMgPSB0aGlzLndyYXBDYWNoZVtjYWNoZUtleV1cclxuICAgIGlmICghbGluZXMpIHtcclxuICAgICAgbGluZXMgPSB0aGlzLndyYXBUZXh0KHRyYW5zbGF0aW9uIHx8IFwiXCIsIG1heFcpXHJcbiAgICAgIGlmICh0aGlzLndyYXBDYWNoZSkge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLndyYXBDYWNoZSkubGVuZ3RoID49IDUwKSB7XHJcbiAgICAgICAgICB0aGlzLndyYXBDYWNoZSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JhcENhY2hlW2NhY2hlS2V5XSA9IGxpbmVzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNhZmVMaW5lcyA9IGxpbmVzLmxlbmd0aCA+IDAgPyBsaW5lcyA6IFtcIlwiXVxyXG4gICAgY29uc3QgbGluZUhlaWdodCA9IDIyXHJcbiAgICBjb25zdCBjYXJkSGVpZ2h0ID0gTWF0aC5tYXgoMTAwLCA2NCArIHNhZmVMaW5lcy5sZW5ndGggKiBsaW5lSGVpZ2h0KVxyXG4gICAgY29uc3QgYmVzdFRhZyA9IHRoaXMuaGlnaGVzdFRhZyh0YWcpXHJcbiAgICBjb25zdCBzaG93VGFnID0gdGhpcy5jYW5GaXRXaXRoVGFnKHdvcmQgfHwgXCJcIiwgYmVzdFRhZylcclxuICAgIGNvbnN0IHdvcmRMZW4gPSAod29yZCB8fCBcIlwiKS5sZW5ndGhcclxuICAgIGNvbnN0IHdvcmRNYXJxdWVlT24gPSB3b3JkTGVuID4gdGhpcy53b3JkTWFycXVlZVRocmVzaG9sZFxyXG4gICAgY29uc3Qgd29yZE1hcnF1ZWVTcGVlZCA9IHdvcmRNYXJxdWVlT24gPyB0aGlzLmNhbGNDYXJkV29yZE1hcnF1ZWVTcGVlZCh3b3JkKSA6IDQwXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZW50cnlJZDogZW50cnlJZCxcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICB3b3JkOiB3b3JkLFxyXG4gICAgICBwaG9uZXRpYzogcGhvbmV0aWMgPyBcIi9cIiArIHBob25ldGljICsgXCIvXCIgOiBcIlwiLFxyXG4gICAgICByYXdQaG9uZXRpYzogcGhvbmV0aWMgfHwgXCJcIixcclxuICAgICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uIHx8IFwiXCIsXHJcbiAgICAgIHRyYW5zbGF0aW9uTGluZXM6IHNhZmVMaW5lcyxcclxuICAgICAgdGFnOiBzaG93VGFnID8gYmVzdFRhZyA6IFwiXCIsXHJcbiAgICAgIHJhd1RhZzogYmVzdFRhZyxcclxuICAgICAgZnVsbFRhZzogdGFnLFxyXG4gICAgICBjYXJkSGVpZ2h0OiBjYXJkSGVpZ2h0LFxyXG4gICAgICBpdGVtSGVpZ2h0OiBjYXJkSGVpZ2h0ICsgMTAsXHJcbiAgICAgIHdvcmRNYXJxdWVlT246IHdvcmRNYXJxdWVlT24sXHJcbiAgICAgIHdvcmRNYXJxdWVlU3BlZWQ6IHdvcmRNYXJxdWVlU3BlZWRcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjYW5GaXRXaXRoVGFnKHdvcmQsIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIHJldHVybiB0cnVlXHJcbiAgICBjb25zdCBXT1JEX0ZPTlQgPSAyOFxyXG4gICAgY29uc3QgVEFHX0ZPTlQgPSAxOFxyXG4gICAgY29uc3QgVEFHX01BUkdJTiA9IDhcclxuICAgIGNvbnN0IENBUkRfUEFERElORyA9IDI0XHJcbiAgICBjb25zdCBXT1JEX0dMWVBIX1JBVElPID0gMC43MlxyXG4gICAgY29uc3QgVEFHX0dMWVBIX1JBVElPID0gMC42XHJcbiAgICBjb25zdCBTQUZFVFkgPSA0XHJcblxyXG4gICAgY29uc3Qgc2FmZUxlbiA9ICh3b3JkIHx8IFwiXCIpLmxlbmd0aFxyXG4gICAgaWYgKHNhZmVMZW4gPT09IDApIHJldHVybiB0cnVlXHJcbiAgICBjb25zdCB3b3JkVyA9IHNhZmVMZW4gKiBXT1JEX0ZPTlQgKiBXT1JEX0dMWVBIX1JBVElPXHJcbiAgICBjb25zdCB0YWdXID0gdGFnLmxlbmd0aCAqIFRBR19GT05UICogVEFHX0dMWVBIX1JBVElPICsgVEFHX01BUkdJTiArIFNBRkVUWVxyXG4gICAgcmV0dXJuIHdvcmRXICsgdGFnVyA8PSB0aGlzLmNhcmRXaWR0aCAtIENBUkRfUEFERElOR1xyXG4gIH0sXHJcblxyXG4gIHdyYXBUZXh0KHZhbHVlLCBtYXhXaWR0aCkge1xyXG4gICAgY29uc3QgdGV4dCA9ICh2YWx1ZSB8fCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKClcclxuICAgIGlmICghdGV4dCkge1xyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaW5lcyA9IFtdXHJcbiAgICBsZXQgbGluZSA9IFwiXCJcclxuICAgIGxldCB3aWR0aCA9IDBcclxuICAgIGxldCBsYXN0QnJlYWsgPSAtMVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaCA9IHRleHQuY2hhckF0KGkpXHJcbiAgICAgIGNvbnN0IGNoV2lkdGggPSB0aGlzLmdldENoYXJXaWR0aChjaClcclxuXHJcbiAgICAgIGlmICh3aWR0aCArIGNoV2lkdGggPiBtYXhXaWR0aCAmJiBsaW5lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGFzdEJyZWFrID4gMCkge1xyXG4gICAgICAgICAgbGluZXMucHVzaChsaW5lLnNsaWNlKDAsIGxhc3RCcmVhaykudHJpbSgpKVxyXG4gICAgICAgICAgbGluZSA9IGxpbmUuc2xpY2UobGFzdEJyZWFrKS50cmltKCkgKyBjaFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUudHJpbSgpKVxyXG4gICAgICAgICAgbGluZSA9IGNoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpZHRoID0gdGhpcy5tZWFzdXJlVGV4dFdpZHRoKGxpbmUpXHJcbiAgICAgICAgbGFzdEJyZWFrID0gdGhpcy5maW5kTGFzdEJyZWFrKGxpbmUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGluZSArPSBjaFxyXG4gICAgICAgIHdpZHRoICs9IGNoV2lkdGhcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoID09PSBcIiBcIiB8fCBjaCA9PT0gXCI7XCIgfHwgY2ggPT09IFwiLFwiIHx8IGNoID09PSBcIu+8jFwiIHx8IGNoID09PSBcIu+8m1wiKSB7XHJcbiAgICAgICAgbGFzdEJyZWFrID0gbGluZS5sZW5ndGhcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChsaW5lLnRyaW0oKSkge1xyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUudHJpbSgpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpbmVzXHJcbiAgfSxcclxuXHJcbiAgbWVhc3VyZVRleHRXaWR0aCh2YWx1ZSkge1xyXG4gICAgbGV0IHdpZHRoID0gMFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB3aWR0aCArPSB0aGlzLmdldENoYXJXaWR0aCh2YWx1ZS5jaGFyQXQoaSkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2lkdGhcclxuICB9LFxyXG5cclxuICBmaW5kTGFzdEJyZWFrKHZhbHVlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gdmFsdWUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgY29uc3QgY2ggPSB2YWx1ZS5jaGFyQXQoaSlcclxuICAgICAgaWYgKGNoID09PSBcIiBcIiB8fCBjaCA9PT0gXCI7XCIgfHwgY2ggPT09IFwiLFwiIHx8IGNoID09PSBcIu+8jFwiIHx8IGNoID09PSBcIu+8m1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGkgKyAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMVxyXG4gIH0sXHJcblxyXG4gIGdldENoYXJXaWR0aChjaCkge1xyXG4gICAgaWYgKCFjaCkge1xyXG4gICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG4gICAgaWYgKGNoID49IFwiXFx1NGUwMFwiICYmIGNoIDw9IFwiXFx1OWZmZlwiKSB7XHJcbiAgICAgIHJldHVybiAxM1xyXG4gICAgfVxyXG4gICAgaWYgKGNoID49IFwiQVwiICYmIGNoIDw9IFwiWlwiKSB7XHJcbiAgICAgIHJldHVybiA4XHJcbiAgICB9XHJcbiAgICBpZiAoY2ggPj0gXCJhXCIgJiYgY2ggPD0gXCJ6XCIpIHtcclxuICAgICAgcmV0dXJuIDdcclxuICAgIH1cclxuICAgIGlmIChjaCA+PSBcIjBcIiAmJiBjaCA8PSBcIjlcIikge1xyXG4gICAgICByZXR1cm4gN1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBjaCA9PT0gXCIgXCIgfHxcclxuICAgICAgY2ggPT09IFwiLlwiIHx8XHJcbiAgICAgIGNoID09PSBcIixcIiB8fFxyXG4gICAgICBjaCA9PT0gXCI7XCIgfHxcclxuICAgICAgY2ggPT09IFwiOlwiIHx8XHJcbiAgICAgIGNoID09PSBcIi9cIiB8fFxyXG4gICAgICBjaCA9PT0gXCItXCJcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gNFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDhcclxuICB9LFxyXG5cclxuICByZWFkVGV4dCh1cmksIGRvbmUpIHtcclxuICAgIGNvbnN0IGNhY2hlZCA9IHRoaXMuZmlsZUNhY2hlLmdldCh1cmkpXHJcbiAgICBpZiAoY2FjaGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZG9uZShjYWNoZWQpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGZpbGUucmVhZFRleHQoe1xyXG4gICAgICB1cmk6IHVyaSxcclxuICAgICAgZW5jb2Rpbmc6IFwidXRmLThcIixcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBkYXRhICYmIGRhdGEudGV4dCA/IGRhdGEudGV4dCA6IFwiXCJcclxuICAgICAgICB0aGlzLmZpbGVDYWNoZS5zZXQodXJpLCB0ZXh0KVxyXG4gICAgICAgIGRvbmUodGV4dClcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5maWxlQ2FjaGUuc2V0KHVyaSwgXCJcIilcclxuICAgICAgICBkb25lKFwiXCIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgbm9ybWFsaXplV29yZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuICh2YWx1ZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxyXG4gIH0sXHJcblxyXG4gIGlzRW5nbGlzaFdvcmQodmFsdWUpIHtcclxuICAgIHJldHVybiAvXlthLXpdW2EteictXXswLDIwfSQvLnRlc3QodmFsdWUgfHwgXCJcIilcclxuICB9LFxyXG5cclxuICBzaG93VG9hc3QobWVzc2FnZSkge1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgaWYgKG5vdyAtIHRoaXMubGFzdFRvYXN0QXQgPCB0aGlzLnRvYXN0Q29vbGRvd24pIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RUb2FzdEF0ID0gbm93XHJcbiAgICBwcm9tcHQuc2hvd1RvYXN0KHtcclxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlXHJcbiAgICB0aGlzLm9uQmFja0J1dHRvblRvdWNoRW5kKClcclxuICAgIHRoaXMuX3N0b3BGbHVzaFRpbWVyKClcclxuICAgIHRoaXMuZmlsZUNhY2hlID0gbnVsbFxyXG4gICAgdGhpcy5lbnRyeUNhY2hlID0gbnVsbFxyXG4gICAgdGhpcy5jbkluZGV4Q2FjaGUgPSBudWxsXHJcbiAgICB0aGlzLndyYXBDYWNoZSA9IG51bGxcclxuICB9LFxyXG5cclxuICBoYXNDaGluZXNlKHZhbHVlKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gdmFsdWUgfHwgXCJcIlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzQ2hpbmVzZUNoYXIodGV4dC5jaGFyQXQoaSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgbm9ybWFsaXplQ2hpbmVzZVRleHQodmFsdWUpIHtcclxuICAgIGNvbnN0IHRleHQgPSB2YWx1ZSB8fCBcIlwiXHJcbiAgICBsZXQgb3V0cHV0ID0gXCJcIlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNoID0gdGV4dC5jaGFyQXQoaSlcclxuICAgICAgaWYgKHRoaXMuaXNDaGluZXNlQ2hhcihjaCkpIHtcclxuICAgICAgICBvdXRwdXQgKz0gY2hcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dFxyXG4gIH0sXHJcblxyXG4gIGdldEZpcnN0Q2hpbmVzZUNoYXIodmFsdWUpIHtcclxuICAgIGNvbnN0IHRleHQgPSB2YWx1ZSB8fCBcIlwiXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2ggPSB0ZXh0LmNoYXJBdChpKVxyXG4gICAgICBpZiAodGhpcy5pc0NoaW5lc2VDaGFyKGNoKSkge1xyXG4gICAgICAgIHJldHVybiBjaFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIlxyXG4gIH0sXHJcblxyXG4gIGlzQ2hpbmVzZUNoYXIoY2gpIHtcclxuICAgIHJldHVybiBjaCA+PSBcIlxcdTRlMDBcIiAmJiBjaCA8PSBcIlxcdTlmZmZcIlxyXG4gIH0sXHJcblxyXG4gIHpoQnVja2V0Rm9yKGNoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWRIZXgoY2guY2hhckNvZGVBdCgwKSAlIDY0KVxyXG4gIH0sXHJcblxyXG4gIGNuQnVja2V0Rm9yKGNoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWRIZXgoY2guY2hhckNvZGVBdCgwKSAlIDk2KVxyXG4gIH0sXHJcblxyXG4gIHBhZEhleCh2YWx1ZSkge1xyXG4gICAgY29uc3QgaGV4ID0gdmFsdWUudG9TdHJpbmcoMTYpXHJcbiAgICBpZiAoaGV4Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgcmV0dXJuIFwiMFwiICsgaGV4XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGV4XHJcbiAgfSxcclxuXHJcbiAgcGFyc2VFbnRyeUlkKHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiBNQVhfU0FGRV9FTlRSWV9JRCB8fCBNYXRoLmZsb29yKHZhbHVlKSAhPT0gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gLTFcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdmFsdWVcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgIS9eWzAtOWEtel0rJC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcbiAgICAvLyBBTFdBWVMgYmFzZTM2IOKAlCB3b3JkIGZpbGVzIGVuY29kZSBlbnRyeUlkIGFzIHRvX2Jhc2UzNihlbnRyeV9pZCkgaW4gZ2VuZXJhdGVfd2F0Y2hfZGljdC5weVxyXG4gICAgY29uc3QgaWQgPSBwYXJzZUludCh2YWx1ZSwgMzYpXHJcbiAgICBpZiAoaWQgPCAwIHx8IGlkID4gTUFYX1NBRkVfRU5UUllfSUQgfHwgTWF0aC5mbG9vcihpZCkgIT09IGlkKSB7XHJcbiAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlkXHJcbiAgfSxcclxuXHJcbiAgZW50cnlTaGFyZEZvcihlbnRyeUlkKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoZW50cnlJZCAvIDUwMClcclxuICAgIGlmIChpbmRleCA8IDEwKSB7XHJcbiAgICAgIHJldHVybiBcIjBcIiArIGluZGV4XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIiArIGluZGV4XHJcbiAgfSxcclxuXHJcbiAga2V5Rm9yKHZhbHVlKSB7XHJcbiAgICBjb25zdCB3b3JkID0gdGhpcy5ub3JtYWxpemVXb3JkKHZhbHVlKVxyXG4gICAgY29uc3QgZmlyc3QgPSB3b3JkLmNoYXJBdCgwKVxyXG4gICAgcmV0dXJuIGZpcnN0ID49IFwiYVwiICYmIGZpcnN0IDw9IFwielwiID8gZmlyc3QgOiBcIl9cIlxyXG4gIH0sXHJcblxyXG4gIG9uVG91Y2hTdGFydChldnQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2dClcclxuICAgIGlmIChwb2ludCkge1xyXG4gICAgICB0aGlzLnRvdWNoU3RhcnRYID0gcG9pbnQuY2xpZW50WFxyXG4gICAgICB0aGlzLnRvdWNoU3RhcnRZID0gcG9pbnQuY2xpZW50WVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uVG91Y2hFbmQoZXZ0KSB7XHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0VG91Y2hQb2ludChldnQpXHJcbiAgICBpZiAoIXBvaW50IHx8IHRoaXMudG91Y2hTdGFydFggPCAwKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVuZFggPSBwb2ludC5jbGllbnRYXHJcbiAgICBjb25zdCBlbmRZID0gcG9pbnQuY2xpZW50WVxyXG4gICAgY29uc3Qgc3cgPSB0aGlzLiRhcHAuJGRlZi5kYXRhLnNjcmVlbldpZHRoIHx8IDIxMlxyXG4gICAgY29uc3Qgc3RhcnRzSW5MZWZ0UXVhcnRlciA9IHRoaXMudG91Y2hTdGFydFggPD0gc3cgKiAwLjI1XHJcbiAgICBjb25zdCBlbmRzQXRSaWdodFF1YXJ0ZXIgPSBlbmRYID49IHN3ICogMC43NVxyXG4gICAgY29uc3QgbW9zdGx5SG9yaXpvbnRhbCA9IE1hdGguYWJzKGVuZFkgLSB0aGlzLnRvdWNoU3RhcnRZKSA8PSAxMjBcclxuXHJcbiAgICBpZiAoc3RhcnRzSW5MZWZ0UXVhcnRlciAmJiBlbmRzQXRSaWdodFF1YXJ0ZXIgJiYgbW9zdGx5SG9yaXpvbnRhbCkge1xyXG4gICAgICByb3V0ZXIuYmFjaygpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IC0xXHJcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gLTFcclxuICB9LFxyXG5cclxuICBnZXRUb3VjaFBvaW50KGV2dCkge1xyXG4gICAgaWYgKGV2dCAmJiBldnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZ0LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGV2dC5jaGFuZ2VkVG91Y2hlc1swXVxyXG4gICAgfVxyXG4gICAgaWYgKGV2dCAmJiBldnQudG91Y2hlcyAmJiBldnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBldnQudG91Y2hlc1swXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwODEzO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcC1yb3cge1xyXG4gIHdpZHRoOiA0MzJweDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ucXVlcnktdGV4dCxcclxuLnF1ZXJ5LW1hcnF1ZWUge1xyXG4gIHdpZHRoOiAxNjhweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucXVlcnktbWFycXVlZSB7XHJcbiAgbGluZXM6IDE7XHJcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDtcclxufVxyXG5cclxuLnN0YXR1cy10ZXh0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBjb2xvcjogIzdlYWVmODtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzdWx0LWxpc3Qge1xyXG4gIGhlaWdodDogMzg4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4ubmV4dC1idXR0b24ge1xyXG4gIGhlaWdodDogNTZweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjY1ZWE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5leHQtdGV4dCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5yZXN1bHQtaXRlbSB7XHJcbiAgLyogd2lkdGggYm91bmQgaW5saW5lICovXHJcbn1cclxuXHJcbi5yZXN1bHQtY2FyZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJlc3VsdC1oZWFkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzdWx0LXdvcmQsXHJcbi5yZXN1bHQtd29yZC1tYXJxdWVlIHtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnJlc3VsdC13b3JkLW1hcnF1ZWUge1xyXG4gIGxpbmVzOiAxO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XHJcbn1cclxuXHJcbi5yZXN1bHQtdGFnIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgY29sb3I6ICNhZWIwYjQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLnJlc3VsdC1waG9uZXRpYyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjYWViMGI0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRyYW5zbGF0aW9uLWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJlc3VsdC10cmFuc2xhdGlvbi1saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgY29sb3I6ICNhZWIwYjQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbIkJBU0UzNl9ESUdJVFMiLCJCQVNFNjRVUkxfRElHSVRTIiwicGFyc2VCYXNlMzYiLCJ2YWx1ZSIsInRlc3QiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiZGlnaXQiLCJpbmRleE9mIiwiY2hhckF0IiwiZGVjb2RlUHJlZml4RmllbGQiLCJwcmV2aW91cyIsInByZWZpeExlbmd0aCIsInNsaWNlIiwiZGVjb2RlQmFzZTY0Qnl0ZXMiLCJieXRlcyIsImFjY3VtdWxhdG9yIiwiYml0Q291bnQiLCJkaXZpc29yIiwiTWF0aCIsInBvdyIsInB1c2giLCJmbG9vciIsImRlY29kZURlbHRhSWRzIiwiaWRzIiwiY3VycmVudCIsImRlbHRhIiwic2hpZnQiLCJieXRlIiwicGF5bG9hZCIsInBhcnNlSW5mbGVjdGlvblZhbHVlIiwiZW50cnlJZCIsIndvcmQiLCJsYXN0TmF2QXQiLCJOQVZfTE9DS19NUyIsIm5hdkd1YXJkIiwibm93IiwiRGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93IiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX25hdkd1YXJkIiwicmVxdWlyZSIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9kaWN0Q29kZWMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkZVWlpZX1NDQU5fTElNSVQiLCJGVVpaWV9QT09MX0xJTUlUIiwiTUFYX1NBRkVfRU5UUllfSUQiLCJXT1JEX0lOREVYX0xFVFRFUlMiLCJMUlVDYWNoZSIsImNvbnN0cnVjdG9yIiwibWF4IiwiY2FjaGUiLCJvcmRlciIsImdldCIsImtleSIsInVuZGVmaW5lZCIsImlkeCIsInNwbGljZSIsInNldCIsInZhbCIsIm9sZGVzdCIsIlRBR19DT0RFX01BUCIsInoiLCJnIiwiayIsInQiLCJUQUdfTEFCRUxTIiwiSVBBX0RFQ09ERV9NQVAiLCJQSFJBU0VfREVDT0RFX01BUCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsInF1ZXJ5Iiwic2VhcmNoTW9kZSIsImluZmxlY3REZXB0aCIsInByaXZhdGUiLCJxdWVyeVRleHQiLCJzdGF0dXNUZXh0IiwicmVzdWx0Q2FyZHMiLCJzZWFyY2hUb2tlbiIsInNoYXJkSW5kZXgiLCJmaWxlQ2FjaGUiLCJlbnRyeUNhY2hlIiwiY25JbmRleENhY2hlIiwiZnV6enlXb3Jkc0NoZWNrZWQiLCJsYXN0VG9hc3RBdCIsInRvYXN0Q29vbGRvd24iLCJ0b3VjaFN0YXJ0WCIsInRvdWNoU3RhcnRZIiwiZGVzdHJveWVkIiwiY2FyZFdpZHRoIiwiY29udGVudFdpZHRoIiwic2NyZWVuV2lkdGgiLCJxdWVyeU1hcnF1ZWVPbiIsInF1ZXJ5TWFycXVlZVNwZWVkIiwid29yZE1hcnF1ZWVUaHJlc2hvbGQiLCJtYXJxdWVlQXJtZWQiLCJwZW5kaW5nQ2FyZHMiLCJmbHVzaFRpbWVyIiwiaGlzdG9yeUNhY2hlIiwic2VhcmNoUGFnZSIsImNvbGxlY3RlZElkcyIsInRvdGFsUmVzdWx0Q291bnQiLCJtaWdodEhhdmVNb3JlIiwid3JhcENhY2hlIiwicmVzdWx0TG9uZ1ByZXNzSG9tZUVuYWJsZWQiLCJiYWNrTG9uZ1ByZXNzVGltZXIiLCJiYWNrTG9uZ1ByZXNzVHJpZ2dlcmVkIiwiX2V4cGFuZFRhZyIsInMiLCJyZXBsYWNlIiwibWFzayIsInBhcnNlSW50IiwibGFiZWxzIiwiYml0Iiwiam9pbiIsInNwbGl0IiwibWFwIiwiYyIsImZpbHRlciIsIkJvb2xlYW4iLCJfZGVjb2RlSXBhIiwib3V0IiwiY2giLCJfZGVjb2RlUGhyYXNlIiwib25Jbml0IiwibG9hZFJlc3VsdExvbmdQcmVzc0hvbWVTZXR0aW5nIiwic3ciLCIkYXBwIiwiJGRlZiIsImRhdGEiLCJyb3VuZCIsIlNRUlQyIiwicmVzb2x2ZVdvcmRNYXJxdWVlVGhyZXNob2xkIiwibm9ybWFsaXplV29yZCIsImFwcGx5UXVlcnlNYXJxdWVlIiwicGVyZm9ybVNlYXJjaCIsIm9uU2hvdyIsImN1cnJlbnRRdWVyeSIsInRleHQiLCJleHRyYSIsIm1pbiIsImNhbGNDYXJkV29yZE1hcnF1ZWVTcGVlZCIsImxlbiIsImdvQmFjayIsInJvdXRlciIsImJhY2siLCJzdG9yYWdlIiwic3VjY2VzcyIsImZhaWwiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsIm9uQmFja0J1dHRvblRvdWNoU3RhcnQiLCJzZXRUaW1lb3V0IiwidXJpIiwib25CYWNrQnV0dG9uVG91Y2hFbmQiLCJjbGVhclRpbWVvdXQiLCJvcGVuRGV0YWlsIiwiaXRlbSIsInBhcmFtcyIsInBob25ldGljIiwicmF3UGhvbmV0aWMiLCJ0cmFuc2xhdGlvbiIsInRhZyIsImZ1bGxUYWciLCJyYXdUYWciLCJub3JtYWxpemVkIiwiX3N0b3BGbHVzaFRpbWVyIiwidG9rZW4iLCJfc3RhcnRGbHVzaFRpbWVyIiwic2VsZiIsImxpc3QiLCJfcGFyc2VIaXN0b3J5TGlzdCIsImVudHJ5IiwiX2h5ZHJhdGVGcm9tQ2FjaGVkSWRzIiwiX3N0YXJ0Tm9ybWFsU2VhcmNoIiwiaGFzQ2hpbmVzZSIsInBlcmZvcm1DaGluZXNlU2VhcmNoIiwiY29sbGVjdENuMkVuUmVzdWx0cyIsIl9mbHVzaFJlc3VsdHMiLCJfc2F2ZVNlYXJjaEhpc3RvcnkiLCJfY29sbGVjdEV4dHJhRW5nbGlzaElkcyIsIl9maW5hbGl6ZUFmdGVyU2VhcmNoIiwibG9hZFNoYXJkSW5kZXgiLCJyZXN1bHRzIiwic2VlbiIsImZpcnN0IiwiZmluaXNoRW5nbGlzaFNlYXJjaCIsInJlYWRUZXh0IiwiZXhhY3RDYW5kaWRhdGVzIiwiY29sbGVjdENvbXBhY3RXb3JkQ2FuZGlkYXRlcyIsImh5ZHJhdGVDb21wYWN0Q2FuZGlkYXRlcyIsImNvbGxlY3RJbmZsZWN0UmVzdWx0Iiwic2hhcmRzIiwiZ2V0Q2FuZGlkYXRlU2hhcmRzIiwiY29sbGVjdFNoYXJkUmVzdWx0cyIsImlkTGlzdCIsImdyb3VwcyIsImlzTmFOIiwic2hhcmQiLCJlbnRyeVNoYXJkRm9yIiwic2hhcmRLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInNoYXJkSWR4IiwibG9hZE5leHQiLCJkb25lIiwiaWRzSW5TaGFyZCIsImxvYWRFbnRyeVNoYXJkIiwiZW50cmllcyIsImlkIiwiaiIsImxvd2VyIiwiY2FyZCIsImNyZWF0ZVJlc3VsdENhcmQiLCJfZW5xdWV1ZUNhcmQiLCJfYXBwZW5kTmV4dEJ1dHRvbiIsImlzRW5nbGlzaFdvcmQiLCJzaG93VG9hc3QiLCJjb2xsZWN0RnV6enlSZXN1bHRzIiwiX2ZpbmlzaFdpdGhTdGF0dXMiLCJub3JtYWxpemVkUXVlcnkiLCJub3JtYWxpemVDaGluZXNlVGV4dCIsImxvYWRDaGluZXNlSWRzIiwiY29sbGVjdENoaW5lc2VSZXN1bHRzIiwiX2NvbGxlY3RFeHRyYUNoaW5lc2VJZHMiLCJmaXJzdENoYXIiLCJnZXRGaXJzdENoaW5lc2VDaGFyIiwiYnVja2V0IiwiemhCdWNrZXRGb3IiLCJsaW5lcyIsInBhcnRzIiwiaW5kZXgiLCJwYXJzZUVudHJ5SWQiLCJuZXh0SW5kZXgiLCJuZXh0SWQiLCJsb2FkQ25JbmRleCIsImNhY2hlZCIsImluZGV4TWFwIiwicHJldlBocmFzZSIsInBocmFzZSIsImNuQnVja2V0Rm9yIiwiY2FuZGlkYXRlcyIsImFsbElkcyIsImlkU2VlbiIsImxpbWl0ZWQiLCJmZXRjaEVudHJpZXNCeUlkcyIsImJhc2VJZCIsInByZXZpb3VzV29yZCIsImxldHRlciIsImtleUZvciIsImJhc2VzIiwicHJldmlvdXNGb3JtIiwiZm9ybSIsImNvbGxlY3RCYXNlUmVzdWx0cyIsImNvbGxlY3RSZXZlcnNlSW5mbGVjdFJlc3VsdCIsImZvcm1zIiwicHJldmlvdXNCYXNlIiwiYmFzZSIsInZhbHVlcyIsImNvbGxlY3RGb3JtUmVzdWx0cyIsImJhc2VXb3JkIiwiaHlkcmF0ZUZyb21CYXNlV29yZCIsImRpc3BsYXlXb3JkIiwicHJldldvcmQiLCJfZGVjb2RlV29yZFByZWZpeCIsInRvTG93ZXJDYXNlIiwic291cmNlIiwibGltaXQiLCJjYW5kaWRhdGUiLCJuZXh0IiwiZ2V0RnV6enlTaGFyZHMiLCJpdGVtcyIsImNvbGxlY3RGdXp6eVNoYXJkUmVzdWx0cyIsInNvcnQiLCJsZWZ0IiwicmlnaHQiLCJkaXN0YW5jZSIsInNjb3JlIiwiY2FyZHMiLCJvcmRlcmVkIiwicHVzaFVuaXF1ZVNoYXJkcyIsIm91dHB1dCIsInNjYW5GdXp6eVdvcmRUZXh0IiwiYWJzIiwiZWRpdERpc3RhbmNlQm91bmRlZCIsInRhZ1N0ciIsInNjb3JlRnV6enlDYW5kaWRhdGUiLCJsZWZ0TGVuZ3RoIiwicmlnaHRMZW5ndGgiLCJyb3dNaW4iLCJmcm9tIiwidG8iLCJjb3N0IiwiZGVsZXRpb24iLCJpbnNlcnRpb24iLCJzdWJzdGl0dXRpb24iLCJ0YWdzIiwiaGlnaGVzdFRhZyIsInByaW9yaXR5IiwiYmVzdCIsImJlc3RJZHgiLCJyZW1haW5pbmciLCJiYXRjaCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIkpTT04iLCJwYXJzZSIsIl93cml0ZUhpc3RvcnlCbG9jayIsIm9sZEl0ZW0iLCJzdHJpbmdpZnkiLCJyZWNvcmRLaW5kIiwiY2FyZEhlaWdodCIsIml0ZW1IZWlnaHQiLCJ3b3JkTWFycXVlZU9uIiwid29yZE1hcnF1ZWVTcGVlZCIsImVpZCIsIl91cGRhdGVQYWdpbmF0aW9uU3RhdHVzIiwiYmFzZVN0YXR1cyIsInRvdGFsIiwicGFnZU51bSIsIl9nb1RvTmV4dFBhZ2UiLCJfbG9hZEFuZFJlbmRlclBhZ2UiLCIkZWxlbWVudCIsInNjcm9sbFRvIiwiX2dvVG9QcmV2UGFnZSIsImNhbGxiYWNrIiwicGFnZVNpemUiLCJzdGFydCIsImVuZCIsInBhZ2VJZHMiLCJuZXdDYXJkcyIsIndvcmRTZWVuIiwiX2J1aWxkUGFnZVZpZXciLCJwYWdlQ2FyZHMiLCJuZXh0U3RhcnQiLCJtYXhXIiwiY2FjaGVLZXkiLCJ3cmFwVGV4dCIsInNhZmVMaW5lcyIsImxpbmVIZWlnaHQiLCJiZXN0VGFnIiwic2hvd1RhZyIsImNhbkZpdFdpdGhUYWciLCJ3b3JkTGVuIiwidHJhbnNsYXRpb25MaW5lcyIsIldPUkRfRk9OVCIsIlRBR19GT05UIiwiVEFHX01BUkdJTiIsIkNBUkRfUEFERElORyIsIldPUkRfR0xZUEhfUkFUSU8iLCJUQUdfR0xZUEhfUkFUSU8iLCJTQUZFVFkiLCJzYWZlTGVuIiwid29yZFciLCJ0YWdXIiwibWF4V2lkdGgiLCJ0cmltIiwibGluZSIsIndpZHRoIiwibGFzdEJyZWFrIiwiY2hXaWR0aCIsImdldENoYXJXaWR0aCIsIm1lYXN1cmVUZXh0V2lkdGgiLCJmaW5kTGFzdEJyZWFrIiwiZmlsZSIsImVuY29kaW5nIiwibWVzc2FnZSIsInByb21wdCIsImR1cmF0aW9uIiwib25EZXN0cm95IiwiaXNDaGluZXNlQ2hhciIsInBhZEhleCIsImNoYXJDb2RlQXQiLCJoZXgiLCJ0b1N0cmluZyIsIm9uVG91Y2hTdGFydCIsImV2dCIsInBvaW50IiwiZ2V0VG91Y2hQb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaEVuZCIsImVuZFgiLCJlbmRZIiwic3RhcnRzSW5MZWZ0UXVhcnRlciIsImVuZHNBdFJpZ2h0UXVhcnRlciIsIm1vc3RseUhvcml6b250YWwiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUFB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