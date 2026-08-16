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
                                paddingTop: "24px",
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
                                height: "48px",
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
                                    if ("inflect" === this.searchMode) this.collectInflectResult(normalized, results, seen, ()=>{
                                        if (token !== this.searchToken) return;
                                        this.finishEnglishSearch(normalized, token);
                                    });
                                    else {
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
