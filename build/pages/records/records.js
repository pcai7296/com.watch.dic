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
                                width: "466px",
                                height: "466px",
                                paddingTop: "75px",
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
                                width: "100%",
                                height: "72px",
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
                                flexShrink: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "record-list"
                                ]
                            ],
                            {
                                marginBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "record-item"
                                ]
                            ],
                            {}
                        ],
                        [
                            [
                                [
                                    0,
                                    "record-card"
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
                                    "clear-card"
                                ]
                            ],
                            {
                                marginBottom: "10px",
                                borderRadius: "20px",
                                backgroundColor: "#8b0000",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "clear-text"
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
                                    "record-head"
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
                                    "record-title"
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
                                    "record-title-marquee"
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
                                    "record-tag"
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
                                    "record-translation-box"
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
                                    "record-translation-line"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "22px",
                                color: "#aeb0b4",
                                fontSize: "18px",
                                fontWeight: 700
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "empty-text"
                                ]
                            ],
                            {
                                width: "168px",
                                height: "40px",
                                marginTop: "120px",
                                color: "#aeb0b4",
                                fontSize: "22px",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "filter-btn"
                                ]
                            ],
                            {
                                width: "100px",
                                height: "38px",
                                marginBottom: "30px",
                                borderRadius: "22px",
                                backgroundColor: "#0b65ea",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "filter-btn-text"
                                ]
                            ],
                            {
                                width: "90px",
                                height: "28px",
                                color: "#ffffff",
                                fontSize: "20px",
                                fontWeight: 800,
                                textAlign: "center"
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
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            protected: {
                                type: "",
                                filterLetter: ""
                            },
                            private: {
                                recordItems: [],
                                emptyText: "",
                                touchStartX: -1,
                                touchStartY: -1,
                                destroyed: false,
                                cardWidth: 188,
                                contentWidth: 164,
                                screenWidth: 0,
                                wordMarqueeThreshold: 10,
                                marqueeArmed: false,
                                activeFilter: "全部",
                                listHeight: 388,
                                allRecords: [],
                                searchPage: 0,
                                totalRecordCount: 0,
                                marqueeTimer: null,
                                pageScrollTimer: null
                            },
                            onInit () {
                                const sw = this.$app.$def.data.screenWidth || 212;
                                this.screenWidth = sw;
                                if (466 === sw) this.cardWidth = Math.round(sw / Math.SQRT2);
                                else this.cardWidth = sw - 20;
                                this.contentWidth = this.cardWidth - 24;
                                this.wordMarqueeThreshold = this.resolveWordMarqueeThreshold(sw);
                                this.listHeight = "favorites" === this.type ? 370 : 388;
                                if ("favorites" === this.type && this.filterLetter) this.activeFilter = this.filterLetter;
                                this.loadRecords();
                            },
                            openFilterPage () {
                                _system.default.replace({
                                    uri: "/pages/filter",
                                    params: {
                                        currentFilter: this.activeFilter
                                    }
                                });
                            },
                            onDestroy () {
                                this.destroyed = true;
                                if (this.marqueeTimer) {
                                    clearTimeout(this.marqueeTimer);
                                    this.marqueeTimer = null;
                                }
                                if (this.pageScrollTimer) {
                                    clearTimeout(this.pageScrollTimer);
                                    this.pageScrollTimer = null;
                                }
                            },
                            onShow () {
                                this.loadRecords();
                                if (this.marqueeTimer) clearTimeout(this.marqueeTimer);
                                this.marqueeTimer = setTimeout(()=>{
                                    this.marqueeTimer = null;
                                    if (!this.destroyed) this.marqueeArmed = true;
                                }, 1500);
                            },
                            goBack () {
                                _system.default.back();
                            },
                            resolveWordMarqueeThreshold (sw) {
                                if (192 === sw) return 9;
                                if (212 === sw) return 10;
                                if (336 === sw) return 20;
                                if (432 === sw) return 25;
                                if (466 === sw) return 25;
                                return 10;
                            },
                            calcCardWordMarqueeSpeed (word) {
                                const len = (word || "").length;
                                return Math.min(60, Math.max(40, 4 * len));
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
                            loadRecords () {
                                const key = this.getStorageKey();
                                this.emptyText = "favorites" === this.type ? "暂无收藏" : "暂无历史";
                                _system2.default.get({
                                    key: key,
                                    success: (data)=>{
                                        if (this.destroyed) return;
                                        let list = this.parseList(data);
                                        if ("favorites" === this.type) {
                                            if ("全部" !== this.activeFilter) {
                                                const letter = this.activeFilter.toLowerCase();
                                                list = list.filter((item)=>(item.word || "").toLowerCase().charAt(0) === letter);
                                                list.sort((a, b)=>{
                                                    const wa = (a.word || "").toLowerCase();
                                                    const wb = (b.word || "").toLowerCase();
                                                    if (wa < wb) return -1;
                                                    if (wa > wb) return 1;
                                                    return 0;
                                                });
                                            }
                                            if (0 === list.length && "全部" !== this.activeFilter) this.emptyText = '"' + this.activeFilter + '" 暂无收藏';
                                        }
                                        this.allRecords = this.buildRecords(list);
                                        this.totalRecordCount = this.allRecords.length;
                                        this.searchPage = 0;
                                        this._buildPageView();
                                    },
                                    fail: ()=>{
                                        if (this.destroyed) return;
                                        this.allRecords = [];
                                        this.totalRecordCount = 0;
                                        this.searchPage = 0;
                                        this.recordItems = [];
                                    }
                                });
                            },
                            _buildPageView () {
                                var pageSize = 20;
                                var start = this.searchPage * pageSize;
                                var end = Math.min(start + pageSize, this.totalRecordCount);
                                var pageCards = [];
                                if (this.searchPage > 0) pageCards.push({
                                    id: "prev_page",
                                    recordKind: "prev-page",
                                    cardHeight: 56,
                                    itemHeight: 66,
                                    wordMarqueeOn: false,
                                    wordMarqueeSpeed: 40
                                });
                                for(var i = start; i < end; i++)pageCards.push(this.allRecords[i]);
                                if (end < this.totalRecordCount) pageCards.push({
                                    id: "next_page",
                                    recordKind: "next-page",
                                    cardHeight: 56,
                                    itemHeight: 66,
                                    wordMarqueeOn: false,
                                    wordMarqueeSpeed: 40
                                });
                                if ("history" === this.type && end >= this.totalRecordCount && this.totalRecordCount > 0) pageCards.push({
                                    id: "clear_history",
                                    recordKind: "clear-history",
                                    cardHeight: 56,
                                    itemHeight: 66,
                                    wordMarqueeOn: false,
                                    wordMarqueeSpeed: 40
                                });
                                this.recordItems = pageCards;
                            },
                            _goToNextPage () {
                                this.searchPage++;
                                this._buildPageView();
                                var self = this;
                                if (this.pageScrollTimer) clearTimeout(this.pageScrollTimer);
                                this.pageScrollTimer = setTimeout(function() {
                                    self.pageScrollTimer = null;
                                    if (self.destroyed) return;
                                    var list = self.$element("record-list");
                                    if (list && list.scrollTo) list.scrollTo({
                                        index: 0
                                    });
                                }, 100);
                            },
                            _goToPrevPage () {
                                this.searchPage--;
                                this._buildPageView();
                                var self = this;
                                if (this.pageScrollTimer) clearTimeout(this.pageScrollTimer);
                                this.pageScrollTimer = setTimeout(function() {
                                    self.pageScrollTimer = null;
                                    if (self.destroyed) return;
                                    var list = self.$element("record-list");
                                    if (list && list.scrollTo) list.scrollTo({
                                        index: self.recordItems.length - 1
                                    });
                                }, 300);
                            },
                            openRecord (item) {
                                if (!item) return;
                                if ("history" === this.type) return void _system.default.push({
                                    uri: "/pages/results",
                                    params: {
                                        query: item.query || item.word || "",
                                        searchMode: "",
                                        inflectDepth: "0"
                                    }
                                });
                                if (!item.word) return;
                                _system.default.push({
                                    uri: "/pages/detail",
                                    params: {
                                        word: item.word,
                                        phonetic: item.rawPhonetic || "",
                                        translation: item.translation || "",
                                        tag: item.rawTag || "",
                                        searchMode: "",
                                        inflectDepth: "0"
                                    }
                                });
                            },
                            getStorageKey () {
                                if ("favorites" === this.type) return "dic_favorites";
                                return "dic_history";
                            },
                            buildRecords (list) {
                                const output = [];
                                for(let i = 0; i < list.length; i++){
                                    const item = list[i];
                                    if (!item) continue;
                                    if ("history" === this.type) {
                                        const query = (item.query || "").toString();
                                        if (!query) continue;
                                        const displayTitle = query;
                                        const visibleTag = "";
                                        const cardHeight = Math.max(80, 64);
                                        const titleLen = displayTitle.length;
                                        const wordMarqueeOn = titleLen > this.wordMarqueeThreshold;
                                        const wordMarqueeSpeed = wordMarqueeOn ? this.calcCardWordMarqueeSpeed(displayTitle) : 40;
                                        output.push({
                                            id: this.normalizeWord(query) + "_" + i,
                                            title: displayTitle,
                                            query: query,
                                            recordKind: "history",
                                            translationLines: [
                                                ""
                                            ],
                                            rawTag: "",
                                            tag: visibleTag,
                                            cardHeight: cardHeight,
                                            itemHeight: cardHeight + 10,
                                            wordMarqueeOn: wordMarqueeOn,
                                            wordMarqueeSpeed: wordMarqueeSpeed
                                        });
                                        continue;
                                    }
                                    const word = (item.word || "").toString();
                                    if (!word) continue;
                                    const phonetic = item.phonetic || "";
                                    const translation = item.translation || "";
                                    const bestTag = this.highestTag(item.tag || "");
                                    const visibleTag = this.canFitWithTag(word, bestTag) ? bestTag : "";
                                    const lines = this.wrapText(translation, this.contentWidth);
                                    const safeLines = lines.length > 0 ? lines : [
                                        ""
                                    ];
                                    const lineHeight = 22;
                                    const cardHeight = Math.max(100, 64 + safeLines.length * lineHeight);
                                    const titleLen = word.length;
                                    const wordMarqueeOn = titleLen > this.wordMarqueeThreshold;
                                    const wordMarqueeSpeed = wordMarqueeOn ? this.calcCardWordMarqueeSpeed(word) : 40;
                                    output.push({
                                        id: this.normalizeWord(word) + "_" + i,
                                        title: word,
                                        word: word,
                                        phonetic: phonetic,
                                        rawPhonetic: phonetic,
                                        translation: translation,
                                        translationLines: safeLines,
                                        recordKind: "favorites",
                                        tag: visibleTag,
                                        rawTag: bestTag,
                                        cardHeight: cardHeight,
                                        itemHeight: cardHeight + 10,
                                        wordMarqueeOn: wordMarqueeOn,
                                        wordMarqueeSpeed: wordMarqueeSpeed
                                    });
                                }
                                return output;
                            },
                            clearHistory () {
                                _system2.default.set({
                                    key: "dic_history",
                                    value: "[]"
                                });
                                _system.default.replace({
                                    uri: "/pages/index"
                                });
                            },
                            wrapText (value, maxWidth) {
                                const text = (value || "").replace(/\s+/g, " ").trim();
                                if (!text || maxWidth <= 0) return [];
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
                            parseList (data) {
                                if (!data) return [];
                                const text = data.value ? data.value : data;
                                try {
                                    const list = JSON.parse(text);
                                    if (list && list.length) return list;
                                } catch (err) {
                                    console.log("[腕上词典] storage data parse failed:", err && err.message);
                                    return [];
                                }
                                return [];
                            },
                            normalizeWord (value) {
                                return (value || "").toLowerCase().trim();
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
                                        src: "/common/icons/btn_back.png",
                                        style: {
                                            width: "102px",
                                            height: "72px"
                                        },
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
                                        return _vm_.recordItems.length > 0;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("list", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            id: "record-list",
                                            classList: [
                                                "record-list"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: " + _vm_.listHeight + "px;");
                                            }
                                        }
                                    }, [
                                        aiot.__cf__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                exp: function() {
                                                    return {
                                                        __list__: _vm_.recordItems,
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
                                                            "record-item"
                                                        ],
                                                        type: "recordCard",
                                                        style: function() {
                                                            return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: " + item.itemHeight + "px;");
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "clear-history" === item.recordKind;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "clear-card"
                                                                    ],
                                                                    style: function() {
                                                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: " + item.cardHeight + "px;");
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.clearHistory(evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "clear-text"
                                                                        ],
                                                                        value: "清空历史记录"
                                                                    }
                                                                }, [])
                                                            ])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "clear-history" !== item.recordKind && "next-page" === item.recordKind;
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
                                                                return "next-page" !== item.recordKind && "clear-history" !== item.recordKind && "prev-page" === item.recordKind;
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
                                                                return "prev-page" !== item.recordKind && "next-page" !== item.recordKind && "clear-history" !== item.recordKind;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "record-card"
                                                                    ],
                                                                    style: function() {
                                                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: " + item.cardHeight + "px;");
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.openRecord(item, evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "record-head"
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
                                                                                        "record-title"
                                                                                    ],
                                                                                    value: function() {
                                                                                        return item.title;
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
                                                                                        "record-title"
                                                                                    ],
                                                                                    value: function() {
                                                                                        return item.title;
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
                                                                                        "record-title-marquee"
                                                                                    ],
                                                                                    scrollamount: function() {
                                                                                        return item.wordMarqueeSpeed;
                                                                                    },
                                                                                    direction: "left",
                                                                                    loop: "-1",
                                                                                    textOffset: "40",
                                                                                    value: function() {
                                                                                        return item.title + " " + item.title;
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    }),
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "record-tag"
                                                                            ],
                                                                            value: function() {
                                                                                return item.tag;
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ]),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "record-translation-box"
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
                                                                                        "record-translation-line"
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
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 0 == _vm_.recordItems.length;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "empty-text"
                                            ],
                                            value: function() {
                                                return _vm_.emptyText;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return "favorites" === _vm_.type;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            style: {
                                                flex: 1
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return "favorites" === _vm_.type;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "filter-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openFilterPage(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return "\u5168\u90E8" === _vm_.activeFilter;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "filter-btn-text"
                                                        ],
                                                        value: "筛选"
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return "\u5168\u90E8" !== _vm_.activeFilter;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "filter-btn-text"
                                                        ],
                                                        value: function() {
                                                            return "筛选 · " + _vm_.activeFilter;
                                                        }
                                                    }
                                                }, [])
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
