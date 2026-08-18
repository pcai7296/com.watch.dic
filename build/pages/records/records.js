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
                                marginBottom: "8px",
                                paddingLeft: "14px",
                                flexDirection: "row",
                                alignItems: "center"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXHJlY29yZHNcXHJlY29yZHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly/ohZXkuIror43lhbgvc3JjL2NvbW1vbi9uYXZHdWFyZC5qcyIsIndlYnBhY2s6Ly/ohZXkuIror43lhbgvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly/ohZXkuIror43lhbgvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly/ohZXkuIror43lhbgvc3JjL3BhZ2VzL3JlY29yZHMvcmVjb3Jkcy51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlr7zoiKrpmLLov57ngrnvvJrml7bpl7Tnqpflj6PlhoXlj6rmlL7ooYzkuIDmrKHpobXpnaLot7PovazvvIzpmLLmraLov57ngrnmiZPlvIDlpJrkuKrph43lpI3pobXpnaJcbi8vIO+8iOi/nueCueWQjOS4gOaMiemSruS8miBwdXNoIOWkmuS4qumhtemdouWunuS+i++8jOWvvOiHtOi/lOWbnumUrumcgOimgeWkmuaMieWHoOasoeaJjeiDveWbnuS4iuS4gOe6p++8iVxudmFyIGxhc3ROYXZBdCA9IDBcbnZhciBOQVZfTE9DS19NUyA9IDUwMFxuXG5leHBvcnQgZnVuY3Rpb24gbmF2R3VhcmQoKSB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgaWYgKG5vdyAtIGxhc3ROYXZBdCA8IE5BVl9MT0NLX01TKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgbGFzdE5hdkF0ID0gbm93XG4gIHJldHVybiB0cnVlXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKCgpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjEyXCI7Iiwi77u/PHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlXCIgb250b3VjaHN0YXJ0PVwib25Ub3VjaFN0YXJ0XCIgb250b3VjaGVuZD1cIm9uVG91Y2hFbmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b3Atcm93XCI+XHJcbiAgICAgIDxpbWFnZSBjbGFzcz1cImJhY2stYnRuXCIgc3JjPVwiL2NvbW1vbi9pY29ucy9CYWNrX0IucG5nXCIgb25jbGljaz1cImdvQmFja1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8bGlzdCBpZD1cInJlY29yZC1saXN0XCIgY2xhc3M9XCJyZWNvcmQtbGlzdFwiIGlmPVwie3sgcmVjb3JkSXRlbXMubGVuZ3RoID4gMCB9fVwiIHN0eWxlPVwid2lkdGg6IHt7Y2FyZFdpZHRofX1weDsgaGVpZ2h0OiB7e2xpc3RIZWlnaHR9fXB4O1wiPlxyXG4gICAgICA8bGlzdC1pdGVtXHJcbiAgICAgICAgY2xhc3M9XCJyZWNvcmQtaXRlbVwiXHJcbiAgICAgICAgdHlwZT1cInJlY29yZENhcmRcIlxyXG4gICAgICAgIGZvcj1cInt7IGl0ZW0gaW4gcmVjb3JkSXRlbXMgfX1cIlxyXG4gICAgICAgIHRpZD1cImlkXCJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiB7e2NhcmRXaWR0aH19cHg7IGhlaWdodDoge3sgaXRlbS5pdGVtSGVpZ2h0IH19cHg7XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgaWY9XCJ7eyBpdGVtLnJlY29yZEtpbmQgPT09ICdjbGVhci1oaXN0b3J5JyB9fVwiIGNsYXNzPVwiY2xlYXItY2FyZFwiIHN0eWxlPVwid2lkdGg6IHt7Y2FyZFdpZHRofX1weDsgaGVpZ2h0OiB7eyBpdGVtLmNhcmRIZWlnaHQgfX1weDtcIiBAY2xpY2s9XCJjbGVhckhpc3RvcnlcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2xlYXItdGV4dFwiPua4heepuuWOhuWPsuiusOW9lTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGVsaWY9XCJ7eyBpdGVtLnJlY29yZEtpbmQgPT09ICduZXh0LXBhZ2UnIH19XCIgY2xhc3M9XCJuZXh0LWJ1dHRvblwiIHN0eWxlPVwid2lkdGg6IHt7Y2FyZFdpZHRofX1weDsgaGVpZ2h0OiB7eyBpdGVtLmNhcmRIZWlnaHQgfX1weDtcIiBAY2xpY2s9XCJfZ29Ub05leHRQYWdlXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm5leHQtdGV4dFwiPuS4i+S4gOmhtTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGVsaWY9XCJ7eyBpdGVtLnJlY29yZEtpbmQgPT09ICdwcmV2LXBhZ2UnIH19XCIgY2xhc3M9XCJuZXh0LWJ1dHRvblwiIHN0eWxlPVwid2lkdGg6IHt7Y2FyZFdpZHRofX1weDsgaGVpZ2h0OiB7eyBpdGVtLmNhcmRIZWlnaHQgfX1weDtcIiBAY2xpY2s9XCJfZ29Ub1ByZXZQYWdlXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm5leHQtdGV4dFwiPuS4iuS4gOmhtTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGVsc2UgY2xhc3M9XCJyZWNvcmQtY2FyZFwiIHN0eWxlPVwid2lkdGg6IHt7Y2FyZFdpZHRofX1weDsgaGVpZ2h0OiB7eyBpdGVtLmNhcmRIZWlnaHQgfX1weDtcIiBAY2xpY2s9XCJvcGVuUmVjb3JkKGl0ZW0pXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLWhlYWRcIj5cclxuICAgICAgICAgICAgPHRleHQgaWY9XCJ7eyAhaXRlbS53b3JkTWFycXVlZU9uIH19XCIgY2xhc3M9XCJyZWNvcmQtdGl0bGVcIj57eyBpdGVtLnRpdGxlIH19PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBpZj1cInt7IGl0ZW0ud29yZE1hcnF1ZWVPbiAmJiAhbWFycXVlZUFybWVkIH19XCIgY2xhc3M9XCJyZWNvcmQtdGl0bGVcIj57eyBpdGVtLnRpdGxlIH19PC90ZXh0PlxyXG4gICAgICAgICAgICA8bWFycXVlZSBpZj1cInt7IGl0ZW0ud29yZE1hcnF1ZWVPbiAmJiBtYXJxdWVlQXJtZWQgfX1cIiBjbGFzcz1cInJlY29yZC10aXRsZS1tYXJxdWVlXCJcclxuICAgICAgICAgICAgICBzY3JvbGxhbW91bnQ9XCJ7eyBpdGVtLndvcmRNYXJxdWVlU3BlZWQgfX1cIiBkaXJlY3Rpb249XCJsZWZ0XCIgbG9vcD1cIi0xXCIgdGV4dC1vZmZzZXQ9XCI0MFwiPlxyXG4gICAgICAgICAgICAgIHt7IGl0ZW0udGl0bGUgfX0gICB7eyBpdGVtLnRpdGxlIH19XHJcbiAgICAgICAgICAgIDwvbWFycXVlZT5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyZWNvcmQtdGFnXCI+e3sgaXRlbS50YWcgfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNvcmQtdHJhbnNsYXRpb24tYm94XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVjb3JkLXRyYW5zbGF0aW9uLWxpbmVcIiBmb3I9XCJ7eyBsaW5lIGluIGl0ZW0udHJhbnNsYXRpb25MaW5lcyB9fVwiPlxyXG4gICAgICAgICAgICAgIHt7IGxpbmUgfX1cclxuICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGlzdC1pdGVtPlxyXG4gICAgPC9saXN0PlxyXG5cclxuICAgIDx0ZXh0IGNsYXNzPVwiZW1wdHktdGV4dFwiIGlmPVwie3sgcmVjb3JkSXRlbXMubGVuZ3RoID09IDAgfX1cIj57eyBlbXB0eVRleHQgfX08L3RleHQ+XHJcblxyXG4gICAgPCEtLSDlvLnmgKfmkpHlvIAg4oaSIOetm+mAieaMiemSrui0tOW6lSAtLT5cclxuICAgIDxkaXYgaWY9XCJ7eyB0eXBlID09PSAnZmF2b3JpdGVzJyB9fVwiIHN0eWxlPVwiZmxleDogMTtcIj48L2Rpdj5cclxuXHJcbiAgICA8IS0tIOetm+mAieaMiemSru+8iOS7heaUtuiXj+mhte+8iSAtLT5cclxuICAgIDxkaXYgaWY9XCJ7eyB0eXBlID09PSAnZmF2b3JpdGVzJyB9fVwiIGNsYXNzPVwiZmlsdGVyLWJ0blwiIEBjbGljaz1cIm9wZW5GaWx0ZXJQYWdlXCI+XHJcbiAgICAgIDx0ZXh0IGlmPVwie3sgYWN0aXZlRmlsdGVyID09PSAn5YWo6YOoJyB9fVwiIGNsYXNzPVwiZmlsdGVyLWJ0bi10ZXh0XCI+562b6YCJPC90ZXh0PlxyXG4gICAgICA8dGV4dCBpZj1cInt7IGFjdGl2ZUZpbHRlciAhPT0gJ+WFqOmDqCcgfX1cIiBjbGFzcz1cImZpbHRlci1idG4tdGV4dFwiPuetm+mAiSDCtyB7eyBhY3RpdmVGaWx0ZXIgfX08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcclxuaW1wb3J0IHtuYXZHdWFyZH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9uYXZHdWFyZFwiXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJAc3lzdGVtLnN0b3JhZ2VcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3RlY3RlZDoge1xyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGZpbHRlckxldHRlcjogXCJcIlxyXG4gIH0sXHJcblxyXG4gIHByaXZhdGU6IHtcclxuICAgIHJlY29yZEl0ZW1zOiBbXSxcclxuICAgIGVtcHR5VGV4dDogXCJcIixcclxuICAgIHRvdWNoU3RhcnRYOiAtMSxcclxuICAgIHRvdWNoU3RhcnRZOiAtMSxcclxuICAgIGRlc3Ryb3llZDogZmFsc2UsXHJcbiAgICBjYXJkV2lkdGg6IDE4OCxcclxuICAgIGNvbnRlbnRXaWR0aDogMTY0LFxyXG4gICAgc2NyZWVuV2lkdGg6IDAsXHJcbiAgICB3b3JkTWFycXVlZVRocmVzaG9sZDogMTAsXHJcbiAgICBtYXJxdWVlQXJtZWQ6IGZhbHNlLFxyXG4gICAgYWN0aXZlRmlsdGVyOiBcIuWFqOmDqFwiLFxyXG4gICAgbGlzdEhlaWdodDogMzg4LFxyXG4gICAgYWxsUmVjb3JkczogW10sXHJcbiAgICBzZWFyY2hQYWdlOiAwLFxyXG4gICAgdG90YWxSZWNvcmRDb3VudDogMCxcclxuICAgIG1hcnF1ZWVUaW1lcjogbnVsbCxcclxuICAgIHBhZ2VTY3JvbGxUaW1lcjogbnVsbFxyXG4gIH0sXHJcblxyXG4gIG9uSW5pdCgpIHtcclxuICAgIGNvbnN0IHN3ID0gdGhpcy4kYXBwLiRkZWYuZGF0YS5zY3JlZW5XaWR0aCB8fCAyMTJcclxuICAgIHRoaXMuc2NyZWVuV2lkdGggPSBzd1xyXG4gICAgaWYgKHN3ID09PSA0NjYpIHtcclxuICAgICAgLy8g5ZyG5bGP77ya5Y2h54mH572u5LqO5YaF5YiH5q2j5pa55b2i5YaFKOWuieWFqOWMuuWfnynvvIzpgb/lhY3lnIbop5Loo4HliIdcclxuICAgICAgdGhpcy5jYXJkV2lkdGggPSBNYXRoLnJvdW5kKHN3IC8gTWF0aC5TUVJUMikgLy8gMzMwXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhcmRXaWR0aCA9IHN3IC0gMjBcclxuICAgIH1cclxuICAgIHRoaXMuY29udGVudFdpZHRoID0gdGhpcy5jYXJkV2lkdGggLSAyNFxyXG4gICAgdGhpcy53b3JkTWFycXVlZVRocmVzaG9sZCA9IHRoaXMucmVzb2x2ZVdvcmRNYXJxdWVlVGhyZXNob2xkKHN3KVxyXG4gICAgdGhpcy5saXN0SGVpZ2h0ID0gdGhpcy50eXBlID09PSBcImZhdm9yaXRlc1wiID8gMzcwIDogMzg4XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBcImZhdm9yaXRlc1wiICYmIHRoaXMuZmlsdGVyTGV0dGVyKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRmlsdGVyID0gdGhpcy5maWx0ZXJMZXR0ZXJcclxuICAgIH1cclxuICAgIHRoaXMubG9hZFJlY29yZHMoKVxyXG4gIH0sXHJcblxyXG4gIG9wZW5GaWx0ZXJQYWdlKCkge1xyXG4gICAgcm91dGVyLnJlcGxhY2Uoe1xyXG4gICAgICB1cmk6IFwiL3BhZ2VzL2ZpbHRlclwiLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBjdXJyZW50RmlsdGVyOiB0aGlzLmFjdGl2ZUZpbHRlclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZVxyXG4gICAgaWYgKHRoaXMubWFycXVlZVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1hcnF1ZWVUaW1lcilcclxuICAgICAgdGhpcy5tYXJxdWVlVGltZXIgPSBudWxsXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYWdlU2Nyb2xsVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGFnZVNjcm9sbFRpbWVyKVxyXG4gICAgICB0aGlzLnBhZ2VTY3JvbGxUaW1lciA9IG51bGxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLmxvYWRSZWNvcmRzKClcclxuICAgIC8vIDEuNXMg6K6p5Lq65YWI55yL5riF5Y2V6K+N77yM5YaN6b2Q5q2l5ZCv5Yqo5omA5pyJ6LeR6ams54GvXHJcbiAgICBpZiAodGhpcy5tYXJxdWVlVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFycXVlZVRpbWVyKVxyXG4gICAgfVxyXG4gICAgdGhpcy5tYXJxdWVlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5tYXJxdWVlVGltZXIgPSBudWxsXHJcbiAgICAgIGlmICghdGhpcy5kZXN0cm95ZWQpIHtcclxuICAgICAgICB0aGlzLm1hcnF1ZWVBcm1lZCA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfSwgMTUwMClcclxuICB9LFxyXG5cclxuICBnb0JhY2soKSB7XHJcbiAgICByb3V0ZXIuYmFjaygpXHJcbiAgfSxcclxuXHJcbiAgcmVzb2x2ZVdvcmRNYXJxdWVlVGhyZXNob2xkKHN3KSB7XHJcbiAgICBpZiAoc3cgPT09IDE5MikgcmV0dXJuIDlcclxuICAgIGlmIChzdyA9PT0gMjEyKSByZXR1cm4gMTBcclxuICAgIGlmIChzdyA9PT0gMzM2KSByZXR1cm4gMjBcclxuICAgIGlmIChzdyA9PT0gNDMyKSByZXR1cm4gMjVcclxuICAgIGlmIChzdyA9PT0gNDY2KSByZXR1cm4gMjVcclxuICAgIHJldHVybiAxMFxyXG4gIH0sXHJcblxyXG4gIGNhbGNDYXJkV29yZE1hcnF1ZWVTcGVlZCh3b3JkKSB7XHJcbiAgICAvLyDpgJ/luqYg4omIIOivjemVvyDDlyA077yM6K6p6ZW/6K+N6L+95LiK6KeG6KeJ5LiK55qE5ZCM5q2l5b6q546v44CC6Zmk6Z2eIHdvcmQg5aSq6ZW/5Lya5aSx5o6n77yM55SoIDYwIOWwgemhtuOAglxyXG4gICAgY29uc3QgbGVuID0gKHdvcmQgfHwgXCJcIikubGVuZ3RoXHJcbiAgICByZXR1cm4gTWF0aC5taW4oNjAsIE1hdGgubWF4KDQwLCBsZW4gKiA0KSlcclxuICB9LFxyXG5cclxuICBjYW5GaXRXaXRoVGFnKHdvcmQsIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIHJldHVybiB0cnVlXHJcbiAgICBjb25zdCBXT1JEX0ZPTlQgPSAyOFxyXG4gICAgY29uc3QgVEFHX0ZPTlQgPSAxOFxyXG4gICAgY29uc3QgVEFHX01BUkdJTiA9IDhcclxuICAgIGNvbnN0IENBUkRfUEFERElORyA9IDI0XHJcbiAgICBjb25zdCBXT1JEX0dMWVBIX1JBVElPID0gMC43MlxyXG4gICAgY29uc3QgVEFHX0dMWVBIX1JBVElPID0gMC42XHJcbiAgICBjb25zdCBTQUZFVFkgPSA0XHJcbiAgICBjb25zdCBzYWZlTGVuID0gKHdvcmQgfHwgXCJcIikubGVuZ3RoXHJcbiAgICBpZiAoc2FmZUxlbiA9PT0gMCkgcmV0dXJuIHRydWVcclxuICAgIGNvbnN0IHdvcmRXID0gc2FmZUxlbiAqIFdPUkRfRk9OVCAqIFdPUkRfR0xZUEhfUkFUSU9cclxuICAgIGNvbnN0IHRhZ1cgPSB0YWcubGVuZ3RoICogVEFHX0ZPTlQgKiBUQUdfR0xZUEhfUkFUSU8gKyBUQUdfTUFSR0lOICsgU0FGRVRZXHJcbiAgICByZXR1cm4gd29yZFcgKyB0YWdXIDw9IHRoaXMuY2FyZFdpZHRoIC0gQ0FSRF9QQURESU5HXHJcbiAgfSxcclxuXHJcbiAgaGlnaGVzdFRhZyh0YWcpIHtcclxuICAgIGlmICghdGFnKSByZXR1cm4gXCJcIlxyXG4gICAgY29uc3QgdGFncyA9IHRhZy5zcGxpdChcIiBcIilcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gW1wiemtcIiwgXCJna1wiLCBcImNldDRcIiwgXCJjZXQ2XCIsIFwia3lcIiwgXCJpZWx0c1wiLCBcInRvZWZsXCIsIFwiZ3JlXCJdXHJcbiAgICBsZXQgYmVzdCA9IHRhZ3NbMF0gfHwgXCJcIlxyXG4gICAgbGV0IGJlc3RJZHggPSAtMVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IHByaW9yaXR5LmluZGV4T2YodGFnc1tpXSlcclxuICAgICAgaWYgKGlkeCA+IGJlc3RJZHgpIHtcclxuICAgICAgICBiZXN0SWR4ID0gaWR4XHJcbiAgICAgICAgYmVzdCA9IHRhZ3NbaV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJlc3RcclxuICB9LFxyXG5cclxuICBsb2FkUmVjb3JkcygpIHtcclxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0U3RvcmFnZUtleSgpXHJcbiAgICB0aGlzLmVtcHR5VGV4dCA9IHRoaXMudHlwZSA9PT0gXCJmYXZvcml0ZXNcIiA/IFwi5pqC5peg5pS26JePXCIgOiBcIuaaguaXoOWOhuWPslwiXHJcbiAgICBzdG9yYWdlLmdldCh7XHJcbiAgICAgIGtleToga2V5LFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLnBhcnNlTGlzdChkYXRhKVxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwiZmF2b3JpdGVzXCIpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUZpbHRlciAhPT0gXCLlhajpg6hcIikge1xyXG4gICAgICAgICAgICAvLyDmjInpppblrZfmr43nrZvpgIlcclxuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy5hY3RpdmVGaWx0ZXIudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0ud29yZCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gbGV0dGVyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIOetm+mAieWQjuaMieWtl+avjeaOkuW6jyBB4oaSWlxyXG4gICAgICAgICAgICBsaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB3YSA9IChhLndvcmQgfHwgXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgIGNvbnN0IHdiID0gKGIud29yZCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgaWYgKHdhIDwgd2IpIHJldHVybiAtMVxyXG4gICAgICAgICAgICAgIGlmICh3YSA+IHdiKSByZXR1cm4gMVxyXG4gICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyDmnKrnrZvpgInml7bkv53mjIHoh6rnhLbpobrluo/vvIjmnIDmlrDmt7vliqDnmoTlnKjmnIDliY3vvIlcclxuICAgICAgICAgIC8vIOabtOaWsOepuuaWh+acrFxyXG4gICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwICYmIHRoaXMuYWN0aXZlRmlsdGVyICE9PSBcIuWFqOmDqFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wdHlUZXh0ID0gJ1wiJyArIHRoaXMuYWN0aXZlRmlsdGVyICsgJ1wiIOaaguaXoOaUtuiXjydcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbGxSZWNvcmRzID0gdGhpcy5idWlsZFJlY29yZHMobGlzdClcclxuICAgICAgICB0aGlzLnRvdGFsUmVjb3JkQ291bnQgPSB0aGlzLmFsbFJlY29yZHMubGVuZ3RoXHJcbiAgICAgICAgdGhpcy5zZWFyY2hQYWdlID0gMFxyXG4gICAgICAgIHRoaXMuX2J1aWxkUGFnZVZpZXcoKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cclxuICAgICAgICB0aGlzLmFsbFJlY29yZHMgPSBbXVxyXG4gICAgICAgIHRoaXMudG90YWxSZWNvcmRDb3VudCA9IDBcclxuICAgICAgICB0aGlzLnNlYXJjaFBhZ2UgPSAwXHJcbiAgICAgICAgdGhpcy5yZWNvcmRJdGVtcyA9IFtdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgX2J1aWxkUGFnZVZpZXcoKSB7XHJcbiAgICB2YXIgcGFnZVNpemUgPSAyMFxyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zZWFyY2hQYWdlICogcGFnZVNpemVcclxuICAgIHZhciBlbmQgPSBNYXRoLm1pbihzdGFydCArIHBhZ2VTaXplLCB0aGlzLnRvdGFsUmVjb3JkQ291bnQpXHJcbiAgICB2YXIgcGFnZUNhcmRzID0gW11cclxuXHJcbiAgICAvLyDkuIrkuIDpobXmjInpkq5cclxuICAgIGlmICh0aGlzLnNlYXJjaFBhZ2UgPiAwKSB7XHJcbiAgICAgIHBhZ2VDYXJkcy5wdXNoKHtcclxuICAgICAgICBpZDogXCJwcmV2X3BhZ2VcIixcclxuICAgICAgICByZWNvcmRLaW5kOiBcInByZXYtcGFnZVwiLFxyXG4gICAgICAgIGNhcmRIZWlnaHQ6IDU2LFxyXG4gICAgICAgIGl0ZW1IZWlnaHQ6IDY2LFxyXG4gICAgICAgIHdvcmRNYXJxdWVlT246IGZhbHNlLFxyXG4gICAgICAgIHdvcmRNYXJxdWVlU3BlZWQ6IDQwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys6aG15Y2h54mHXHJcbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICBwYWdlQ2FyZHMucHVzaCh0aGlzLmFsbFJlY29yZHNbaV0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5LiL5LiA6aG15oyJ6ZKuXHJcbiAgICBpZiAoZW5kIDwgdGhpcy50b3RhbFJlY29yZENvdW50KSB7XHJcbiAgICAgIHBhZ2VDYXJkcy5wdXNoKHtcclxuICAgICAgICBpZDogXCJuZXh0X3BhZ2VcIixcclxuICAgICAgICByZWNvcmRLaW5kOiBcIm5leHQtcGFnZVwiLFxyXG4gICAgICAgIGNhcmRIZWlnaHQ6IDU2LFxyXG4gICAgICAgIGl0ZW1IZWlnaHQ6IDY2LFxyXG4gICAgICAgIHdvcmRNYXJxdWVlT246IGZhbHNlLFxyXG4gICAgICAgIHdvcmRNYXJxdWVlU3BlZWQ6IDQwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y6G5Y+y6K6w5b2V5riF56m65oyJ6ZKu77yI5LuF5pyA5ZCO5LiA6aG177yJXHJcbiAgICBpZiAodGhpcy50eXBlID09PSBcImhpc3RvcnlcIiAmJiBlbmQgPj0gdGhpcy50b3RhbFJlY29yZENvdW50ICYmIHRoaXMudG90YWxSZWNvcmRDb3VudCA+IDApIHtcclxuICAgICAgcGFnZUNhcmRzLnB1c2goe1xyXG4gICAgICAgIGlkOiBcImNsZWFyX2hpc3RvcnlcIixcclxuICAgICAgICByZWNvcmRLaW5kOiBcImNsZWFyLWhpc3RvcnlcIixcclxuICAgICAgICBjYXJkSGVpZ2h0OiA1NixcclxuICAgICAgICBpdGVtSGVpZ2h0OiA2NixcclxuICAgICAgICB3b3JkTWFycXVlZU9uOiBmYWxzZSxcclxuICAgICAgICB3b3JkTWFycXVlZVNwZWVkOiA0MFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVjb3JkSXRlbXMgPSBwYWdlQ2FyZHNcclxuICB9LFxyXG5cclxuICBfZ29Ub05leHRQYWdlKCkge1xyXG4gICAgdGhpcy5zZWFyY2hQYWdlKytcclxuICAgIHRoaXMuX2J1aWxkUGFnZVZpZXcoKVxyXG4gICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5wYWdlU2Nyb2xsVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGFnZVNjcm9sbFRpbWVyKVxyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdlU2Nyb2xsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLnBhZ2VTY3JvbGxUaW1lciA9IG51bGxcclxuICAgICAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cclxuICAgICAgdmFyIGxpc3QgPSBzZWxmLiRlbGVtZW50KFwicmVjb3JkLWxpc3RcIilcclxuICAgICAgaWYgKGxpc3QgJiYgbGlzdC5zY3JvbGxUbykge1xyXG4gICAgICAgIGxpc3Quc2Nyb2xsVG8oe2luZGV4OiAwfSlcclxuICAgICAgfVxyXG4gICAgfSwgMTAwKVxyXG4gIH0sXHJcblxyXG4gIF9nb1RvUHJldlBhZ2UoKSB7XHJcbiAgICB0aGlzLnNlYXJjaFBhZ2UtLVxyXG4gICAgdGhpcy5fYnVpbGRQYWdlVmlldygpXHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIGlmICh0aGlzLnBhZ2VTY3JvbGxUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wYWdlU2Nyb2xsVGltZXIpXHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2VTY3JvbGxUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNlbGYucGFnZVNjcm9sbFRpbWVyID0gbnVsbFxyXG4gICAgICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxyXG4gICAgICB2YXIgbGlzdCA9IHNlbGYuJGVsZW1lbnQoXCJyZWNvcmQtbGlzdFwiKVxyXG4gICAgICBpZiAobGlzdCAmJiBsaXN0LnNjcm9sbFRvKSB7XHJcbiAgICAgICAgbGlzdC5zY3JvbGxUbyh7aW5kZXg6IHNlbGYucmVjb3JkSXRlbXMubGVuZ3RoIC0gMX0pXHJcbiAgICAgIH1cclxuICAgIH0sIDMwMClcclxuICB9LFxyXG5cclxuICBvcGVuUmVjb3JkKGl0ZW0pIHtcclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFwiaGlzdG9yeVwiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICB1cmk6IFwiL3BhZ2VzL3Jlc3VsdHNcIixcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHF1ZXJ5OiBpdGVtLnF1ZXJ5IHx8IGl0ZW0ud29yZCB8fCBcIlwiLFxyXG4gICAgICAgICAgc2VhcmNoTW9kZTogXCJcIixcclxuICAgICAgICAgIGluZmxlY3REZXB0aDogXCIwXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCFpdGVtLndvcmQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgIHVyaTogXCIvcGFnZXMvZGV0YWlsXCIsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHdvcmQ6IGl0ZW0ud29yZCxcclxuICAgICAgICBwaG9uZXRpYzogaXRlbS5yYXdQaG9uZXRpYyB8fCBcIlwiLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uOiBpdGVtLnRyYW5zbGF0aW9uIHx8IFwiXCIsXHJcbiAgICAgICAgdGFnOiBpdGVtLnJhd1RhZyB8fCBcIlwiLFxyXG4gICAgICAgIHNlYXJjaE1vZGU6IFwiXCIsXHJcbiAgICAgICAgaW5mbGVjdERlcHRoOiBcIjBcIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGdldFN0b3JhZ2VLZXkoKSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBcImZhdm9yaXRlc1wiKSB7XHJcbiAgICAgIHJldHVybiBcImRpY19mYXZvcml0ZXNcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiZGljX2hpc3RvcnlcIlxyXG4gIH0sXHJcblxyXG4gIGJ1aWxkUmVjb3JkcyhsaXN0KSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2ldXHJcbiAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJoaXN0b3J5XCIpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IChpdGVtLnF1ZXJ5IHx8IFwiXCIpLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaXNwbGF5VGl0bGUgPSBxdWVyeVxyXG4gICAgICAgIGNvbnN0IHZpc2libGVUYWcgPSBcIlwiXHJcbiAgICAgICAgY29uc3QgY2FyZEhlaWdodCA9IE1hdGgubWF4KDgwLCA2NClcclxuICAgICAgICBjb25zdCB0aXRsZUxlbiA9IGRpc3BsYXlUaXRsZS5sZW5ndGhcclxuICAgICAgICBjb25zdCB3b3JkTWFycXVlZU9uID0gdGl0bGVMZW4gPiB0aGlzLndvcmRNYXJxdWVlVGhyZXNob2xkXHJcbiAgICAgICAgY29uc3Qgd29yZE1hcnF1ZWVTcGVlZCA9IHdvcmRNYXJxdWVlT24gPyB0aGlzLmNhbGNDYXJkV29yZE1hcnF1ZWVTcGVlZChkaXNwbGF5VGl0bGUpIDogNDBcclxuICAgICAgICBvdXRwdXQucHVzaCh7XHJcbiAgICAgICAgICBpZDogdGhpcy5ub3JtYWxpemVXb3JkKHF1ZXJ5KSArIFwiX1wiICsgaSxcclxuICAgICAgICAgIHRpdGxlOiBkaXNwbGF5VGl0bGUsXHJcbiAgICAgICAgICBxdWVyeTogcXVlcnksXHJcbiAgICAgICAgICByZWNvcmRLaW5kOiBcImhpc3RvcnlcIixcclxuICAgICAgICAgIHRyYW5zbGF0aW9uTGluZXM6IFtcIlwiXSxcclxuICAgICAgICAgIHJhd1RhZzogXCJcIixcclxuICAgICAgICAgIHRhZzogdmlzaWJsZVRhZyxcclxuICAgICAgICAgIGNhcmRIZWlnaHQ6IGNhcmRIZWlnaHQsXHJcbiAgICAgICAgICBpdGVtSGVpZ2h0OiBjYXJkSGVpZ2h0ICsgMTAsXHJcbiAgICAgICAgICB3b3JkTWFycXVlZU9uOiB3b3JkTWFycXVlZU9uLFxyXG4gICAgICAgICAgd29yZE1hcnF1ZWVTcGVlZDogd29yZE1hcnF1ZWVTcGVlZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB3b3JkID0gKGl0ZW0ud29yZCB8fCBcIlwiKS50b1N0cmluZygpXHJcbiAgICAgIGlmICghd29yZCkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcGhvbmV0aWMgPSBpdGVtLnBob25ldGljIHx8IFwiXCJcclxuICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBpdGVtLnRyYW5zbGF0aW9uIHx8IFwiXCJcclxuICAgICAgY29uc3QgYmVzdFRhZyA9IHRoaXMuaGlnaGVzdFRhZyhpdGVtLnRhZyB8fCBcIlwiKVxyXG4gICAgICBjb25zdCB2aXNpYmxlVGFnID0gdGhpcy5jYW5GaXRXaXRoVGFnKHdvcmQsIGJlc3RUYWcpID8gYmVzdFRhZyA6IFwiXCJcclxuICAgICAgY29uc3QgbGluZXMgPSB0aGlzLndyYXBUZXh0KHRyYW5zbGF0aW9uLCB0aGlzLmNvbnRlbnRXaWR0aClcclxuICAgICAgY29uc3Qgc2FmZUxpbmVzID0gbGluZXMubGVuZ3RoID4gMCA/IGxpbmVzIDogW1wiXCJdXHJcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSAyMlxyXG4gICAgICBjb25zdCBjYXJkSGVpZ2h0ID0gTWF0aC5tYXgoMTAwLCA2NCArIHNhZmVMaW5lcy5sZW5ndGggKiBsaW5lSGVpZ2h0KVxyXG4gICAgICBjb25zdCB0aXRsZUxlbiA9IHdvcmQubGVuZ3RoXHJcbiAgICAgIGNvbnN0IHdvcmRNYXJxdWVlT24gPSB0aXRsZUxlbiA+IHRoaXMud29yZE1hcnF1ZWVUaHJlc2hvbGRcclxuICAgICAgY29uc3Qgd29yZE1hcnF1ZWVTcGVlZCA9IHdvcmRNYXJxdWVlT24gPyB0aGlzLmNhbGNDYXJkV29yZE1hcnF1ZWVTcGVlZCh3b3JkKSA6IDQwXHJcbiAgICAgIG91dHB1dC5wdXNoKHtcclxuICAgICAgICBpZDogdGhpcy5ub3JtYWxpemVXb3JkKHdvcmQpICsgXCJfXCIgKyBpLFxyXG4gICAgICAgIHRpdGxlOiB3b3JkLFxyXG4gICAgICAgIHdvcmQ6IHdvcmQsXHJcbiAgICAgICAgcGhvbmV0aWM6IHBob25ldGljLFxyXG4gICAgICAgIHJhd1Bob25ldGljOiBwaG9uZXRpYyxcclxuICAgICAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb24sXHJcbiAgICAgICAgdHJhbnNsYXRpb25MaW5lczogc2FmZUxpbmVzLFxyXG4gICAgICAgIHJlY29yZEtpbmQ6IFwiZmF2b3JpdGVzXCIsXHJcbiAgICAgICAgdGFnOiB2aXNpYmxlVGFnLFxyXG4gICAgICAgIHJhd1RhZzogYmVzdFRhZyxcclxuICAgICAgICBjYXJkSGVpZ2h0OiBjYXJkSGVpZ2h0LFxyXG4gICAgICAgIGl0ZW1IZWlnaHQ6IGNhcmRIZWlnaHQgKyAxMCxcclxuICAgICAgICB3b3JkTWFycXVlZU9uOiB3b3JkTWFycXVlZU9uLFxyXG4gICAgICAgIHdvcmRNYXJxdWVlU3BlZWQ6IHdvcmRNYXJxdWVlU3BlZWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXRcclxuICB9LFxyXG5cclxuICBjbGVhckhpc3RvcnkoKSB7XHJcbiAgICBzdG9yYWdlLnNldCh7XHJcbiAgICAgIGtleTogXCJkaWNfaGlzdG9yeVwiLFxyXG4gICAgICB2YWx1ZTogXCJbXVwiXHJcbiAgICB9KVxyXG4gICAgcm91dGVyLnJlcGxhY2Uoe1xyXG4gICAgICB1cmk6IFwiL3BhZ2VzL2luZGV4XCJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgd3JhcFRleHQodmFsdWUsIG1heFdpZHRoKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gKHZhbHVlIHx8IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG4gICAgaWYgKCF0ZXh0IHx8IG1heFdpZHRoIDw9IDApIHtcclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGluZXMgPSBbXVxyXG4gICAgbGV0IGxpbmUgPSBcIlwiXHJcbiAgICBsZXQgd2lkdGggPSAwXHJcbiAgICBsZXQgbGFzdEJyZWFrID0gLTFcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2ggPSB0ZXh0LmNoYXJBdChpKVxyXG4gICAgICBjb25zdCBjaFdpZHRoID0gdGhpcy5nZXRDaGFyV2lkdGgoY2gpXHJcblxyXG4gICAgICBpZiAod2lkdGggKyBjaFdpZHRoID4gbWF4V2lkdGggJiYgbGluZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKGxhc3RCcmVhayA+IDApIHtcclxuICAgICAgICAgIGxpbmVzLnB1c2gobGluZS5zbGljZSgwLCBsYXN0QnJlYWspLnRyaW0oKSlcclxuICAgICAgICAgIGxpbmUgPSBsaW5lLnNsaWNlKGxhc3RCcmVhaykudHJpbSgpICsgY2hcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGluZXMucHVzaChsaW5lLnRyaW0oKSlcclxuICAgICAgICAgIGxpbmUgPSBjaFxyXG4gICAgICAgIH1cclxuICAgICAgICB3aWR0aCA9IHRoaXMubWVhc3VyZVRleHRXaWR0aChsaW5lKVxyXG4gICAgICAgIGxhc3RCcmVhayA9IHRoaXMuZmluZExhc3RCcmVhayhsaW5lKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpbmUgKz0gY2hcclxuICAgICAgICB3aWR0aCArPSBjaFdpZHRoXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaCA9PT0gXCIgXCIgfHwgY2ggPT09IFwiO1wiIHx8IGNoID09PSBcIixcIiB8fCBjaCA9PT0gXCLvvIxcIiB8fCBjaCA9PT0gXCLvvJtcIikge1xyXG4gICAgICAgIGxhc3RCcmVhayA9IGxpbmUubGVuZ3RoXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobGluZS50cmltKCkpIHtcclxuICAgICAgbGluZXMucHVzaChsaW5lLnRyaW0oKSlcclxuICAgIH1cclxuICAgIHJldHVybiBsaW5lc1xyXG4gIH0sXHJcblxyXG4gIG1lYXN1cmVUZXh0V2lkdGgodmFsdWUpIHtcclxuICAgIGxldCB3aWR0aCA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgd2lkdGggKz0gdGhpcy5nZXRDaGFyV2lkdGgodmFsdWUuY2hhckF0KGkpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpZHRoXHJcbiAgfSxcclxuXHJcbiAgZmluZExhc3RCcmVhayh2YWx1ZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IHZhbHVlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0IGNoID0gdmFsdWUuY2hhckF0KGkpXHJcbiAgICAgIGlmIChjaCA9PT0gXCIgXCIgfHwgY2ggPT09IFwiO1wiIHx8IGNoID09PSBcIixcIiB8fCBjaCA9PT0gXCLvvIxcIiB8fCBjaCA9PT0gXCLvvJtcIikge1xyXG4gICAgICAgIHJldHVybiBpICsgMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTFcclxuICB9LFxyXG5cclxuICBnZXRDaGFyV2lkdGgoY2gpIHtcclxuICAgIGlmICghY2gpIHtcclxuICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuICAgIGlmIChjaCA+PSBcIlxcdTRlMDBcIiAmJiBjaCA8PSBcIlxcdTlmZmZcIikge1xyXG4gICAgICByZXR1cm4gMTNcclxuICAgIH1cclxuICAgIGlmIChjaCA+PSBcIkFcIiAmJiBjaCA8PSBcIlpcIikge1xyXG4gICAgICByZXR1cm4gOFxyXG4gICAgfVxyXG4gICAgaWYgKGNoID49IFwiYVwiICYmIGNoIDw9IFwielwiKSB7XHJcbiAgICAgIHJldHVybiA3XHJcbiAgICB9XHJcbiAgICBpZiAoY2ggPj0gXCIwXCIgJiYgY2ggPD0gXCI5XCIpIHtcclxuICAgICAgcmV0dXJuIDdcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgY2ggPT09IFwiIFwiIHx8XHJcbiAgICAgIGNoID09PSBcIi5cIiB8fFxyXG4gICAgICBjaCA9PT0gXCIsXCIgfHxcclxuICAgICAgY2ggPT09IFwiO1wiIHx8XHJcbiAgICAgIGNoID09PSBcIjpcIiB8fFxyXG4gICAgICBjaCA9PT0gXCIvXCIgfHxcclxuICAgICAgY2ggPT09IFwiLVwiXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIDRcclxuICAgIH1cclxuICAgIHJldHVybiA4XHJcbiAgfSxcclxuXHJcbiAgcGFyc2VMaXN0KGRhdGEpIHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHRleHQgPSBkYXRhLnZhbHVlID8gZGF0YS52YWx1ZSA6IGRhdGFcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBKU09OLnBhcnNlKHRleHQpXHJcbiAgICAgIGlmIChsaXN0ICYmIGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiW+iFleS4iuivjeWFuF0gc3RvcmFnZSBkYXRhIHBhcnNlIGZhaWxlZDpcIiwgZXJyICYmIGVyci5tZXNzYWdlKVxyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIHJldHVybiBbXVxyXG4gIH0sXHJcblxyXG4gIG5vcm1hbGl6ZVdvcmQodmFsdWUpIHtcclxuICAgIHJldHVybiAodmFsdWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKS50cmltKClcclxuICB9LFxyXG5cclxuICBvblRvdWNoU3RhcnQoZXZ0KSB7XHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0VG91Y2hQb2ludChldnQpXHJcbiAgICBpZiAocG9pbnQpIHtcclxuICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IHBvaW50LmNsaWVudFhcclxuICAgICAgdGhpcy50b3VjaFN0YXJ0WSA9IHBvaW50LmNsaWVudFlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblRvdWNoRW5kKGV2dCkge1xyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLmdldFRvdWNoUG9pbnQoZXZ0KVxyXG4gICAgaWYgKCFwb2ludCB8fCB0aGlzLnRvdWNoU3RhcnRYIDwgMCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbmRYID0gcG9pbnQuY2xpZW50WFxyXG4gICAgY29uc3QgZW5kWSA9IHBvaW50LmNsaWVudFlcclxuICAgIGNvbnN0IHN3ID0gdGhpcy4kYXBwLiRkZWYuZGF0YS5zY3JlZW5XaWR0aCB8fCAyMTJcclxuICAgIGNvbnN0IHN0YXJ0c0luTGVmdFF1YXJ0ZXIgPSB0aGlzLnRvdWNoU3RhcnRYIDw9IHN3ICogMC4yNVxyXG4gICAgY29uc3QgZW5kc0F0UmlnaHRRdWFydGVyID0gZW5kWCA+PSBzdyAqIDAuNzVcclxuICAgIGNvbnN0IG1vc3RseUhvcml6b250YWwgPSBNYXRoLmFicyhlbmRZIC0gdGhpcy50b3VjaFN0YXJ0WSkgPD0gMTIwXHJcblxyXG4gICAgaWYgKHN0YXJ0c0luTGVmdFF1YXJ0ZXIgJiYgZW5kc0F0UmlnaHRRdWFydGVyICYmIG1vc3RseUhvcml6b250YWwpIHtcclxuICAgICAgcm91dGVyLmJhY2soKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG91Y2hTdGFydFggPSAtMVxyXG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IC0xXHJcbiAgfSxcclxuXHJcbiAgZ2V0VG91Y2hQb2ludChldnQpIHtcclxuICAgIGlmIChldnQgJiYgZXZ0LmNoYW5nZWRUb3VjaGVzICYmIGV2dC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBldnQuY2hhbmdlZFRvdWNoZXNbMF1cclxuICAgIH1cclxuICAgIGlmIChldnQgJiYgZXZ0LnRvdWNoZXMgJiYgZXZ0LnRvdWNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gZXZ0LnRvdWNoZXNbMF1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4ucGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDgxMztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3Atcm93IHtcclxuICB3aWR0aDogNDMycHg7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmFjay1idG4ge1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnJlY29yZC1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5yZWNvcmQtaXRlbSB7XHJcbiAgLyogd2lkdGggYm91bmQgaW5saW5lICovXHJcbn1cclxuXHJcbi5yZWNvcmQtY2FyZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNsZWFyLWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbGVhci10ZXh0IHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLm5leHQtYnV0dG9uIHtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI2NWVhO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXh0LXRleHQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ucmVjb3JkLWhlYWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWNvcmQtdGl0bGUsXHJcbi5yZWNvcmQtdGl0bGUtbWFycXVlZSB7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5yZWNvcmQtdGl0bGUtbWFycXVlZSB7XHJcbiAgbGluZXM6IDE7XHJcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDtcclxufVxyXG5cclxuLnJlY29yZC10YWcge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGhlaWdodDogMjhweDtcclxuICBjb2xvcjogI2FlYjBiNDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4ucmVjb3JkLXRyYW5zbGF0aW9uLWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJlY29yZC10cmFuc2xhdGlvbi1saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgY29sb3I6ICNhZWIwYjQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5lbXB0eS10ZXh0IHtcclxuICB3aWR0aDogMTY4cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gIGNvbG9yOiAjYWViMGI0O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maWx0ZXItYnRuIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI2NWVhO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maWx0ZXItYnRuLXRleHQge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbImxhc3ROYXZBdCIsIk5BVl9MT0NLX01TIiwibmF2R3VhcmQiLCJub3ciLCJEYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfbmF2R3VhcmQiLCJyZXF1aXJlIiwiX3N5c3RlbTIiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsInR5cGUiLCJmaWx0ZXJMZXR0ZXIiLCJwcml2YXRlIiwicmVjb3JkSXRlbXMiLCJlbXB0eVRleHQiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoU3RhcnRZIiwiZGVzdHJveWVkIiwiY2FyZFdpZHRoIiwiY29udGVudFdpZHRoIiwic2NyZWVuV2lkdGgiLCJ3b3JkTWFycXVlZVRocmVzaG9sZCIsIm1hcnF1ZWVBcm1lZCIsImFjdGl2ZUZpbHRlciIsImxpc3RIZWlnaHQiLCJhbGxSZWNvcmRzIiwic2VhcmNoUGFnZSIsInRvdGFsUmVjb3JkQ291bnQiLCJtYXJxdWVlVGltZXIiLCJwYWdlU2Nyb2xsVGltZXIiLCJvbkluaXQiLCJzdyIsIiRhcHAiLCIkZGVmIiwiZGF0YSIsIk1hdGgiLCJyb3VuZCIsIlNRUlQyIiwicmVzb2x2ZVdvcmRNYXJxdWVlVGhyZXNob2xkIiwibG9hZFJlY29yZHMiLCJvcGVuRmlsdGVyUGFnZSIsInJvdXRlciIsInJlcGxhY2UiLCJ1cmkiLCJwYXJhbXMiLCJjdXJyZW50RmlsdGVyIiwib25EZXN0cm95IiwiY2xlYXJUaW1lb3V0Iiwib25TaG93Iiwic2V0VGltZW91dCIsImdvQmFjayIsImJhY2siLCJjYWxjQ2FyZFdvcmRNYXJxdWVlU3BlZWQiLCJ3b3JkIiwibGVuIiwibGVuZ3RoIiwibWluIiwibWF4IiwiY2FuRml0V2l0aFRhZyIsInRhZyIsIldPUkRfRk9OVCIsIlRBR19GT05UIiwiVEFHX01BUkdJTiIsIkNBUkRfUEFERElORyIsIldPUkRfR0xZUEhfUkFUSU8iLCJUQUdfR0xZUEhfUkFUSU8iLCJTQUZFVFkiLCJzYWZlTGVuIiwid29yZFciLCJ0YWdXIiwiaGlnaGVzdFRhZyIsInRhZ3MiLCJzcGxpdCIsInByaW9yaXR5IiwiYmVzdCIsImJlc3RJZHgiLCJpIiwiaWR4IiwiaW5kZXhPZiIsImtleSIsImdldFN0b3JhZ2VLZXkiLCJzdG9yYWdlIiwiZ2V0Iiwic3VjY2VzcyIsImxpc3QiLCJwYXJzZUxpc3QiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIml0ZW0iLCJjaGFyQXQiLCJzb3J0IiwiYSIsImIiLCJ3YSIsIndiIiwiYnVpbGRSZWNvcmRzIiwiX2J1aWxkUGFnZVZpZXciLCJmYWlsIiwicGFnZVNpemUiLCJzdGFydCIsImVuZCIsInBhZ2VDYXJkcyIsInB1c2giLCJpZCIsInJlY29yZEtpbmQiLCJjYXJkSGVpZ2h0IiwiaXRlbUhlaWdodCIsIndvcmRNYXJxdWVlT24iLCJ3b3JkTWFycXVlZVNwZWVkIiwiX2dvVG9OZXh0UGFnZSIsInNlbGYiLCIkZWxlbWVudCIsInNjcm9sbFRvIiwiaW5kZXgiLCJfZ29Ub1ByZXZQYWdlIiwib3BlblJlY29yZCIsInF1ZXJ5Iiwic2VhcmNoTW9kZSIsImluZmxlY3REZXB0aCIsInBob25ldGljIiwicmF3UGhvbmV0aWMiLCJ0cmFuc2xhdGlvbiIsInJhd1RhZyIsIm91dHB1dCIsInRvU3RyaW5nIiwiZGlzcGxheVRpdGxlIiwidmlzaWJsZVRhZyIsInRpdGxlTGVuIiwibm9ybWFsaXplV29yZCIsInRpdGxlIiwidHJhbnNsYXRpb25MaW5lcyIsImJlc3RUYWciLCJsaW5lcyIsIndyYXBUZXh0Iiwic2FmZUxpbmVzIiwibGluZUhlaWdodCIsImNsZWFySGlzdG9yeSIsInNldCIsInZhbHVlIiwibWF4V2lkdGgiLCJ0ZXh0IiwidHJpbSIsImxpbmUiLCJ3aWR0aCIsImxhc3RCcmVhayIsImNoIiwiY2hXaWR0aCIsImdldENoYXJXaWR0aCIsInNsaWNlIiwibWVhc3VyZVRleHRXaWR0aCIsImZpbmRMYXN0QnJlYWsiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm9uVG91Y2hTdGFydCIsImV2dCIsInBvaW50IiwiZ2V0VG91Y2hQb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaEVuZCIsImVuZFgiLCJlbmRZIiwic3RhcnRzSW5MZWZ0UXVhcnRlciIsImVuZHNBdFJpZ2h0UXVhcnRlciIsIm1vc3RseUhvcml6b250YWwiLCJhYnMiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUVBLElBQUlBLFlBQVk7d0JBQ2hCLElBQUlDLGNBQWM7d0JBRVgsU0FBU0M7NEJBQ2QsTUFBTUMsTUFBTUMsS0FBS0QsR0FBRzs0QkFDcEIsSUFBSUEsTUFBTUgsWUFBWUMsYUFDcEIsT0FBTzs0QkFFVEQsWUFBWUc7NEJBQ1osT0FBTzt3QkFDVDs7Ozs7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