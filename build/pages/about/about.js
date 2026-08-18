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
                var __webpack_modules__ = {};
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
                            backgroundColor: "#000000",
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
                            marginBottom: "12px",
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
                                "about-list"
                            ]
                        ],
                        {
                            width: "196px",
                            height: "410px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "list-item"
                            ]
                        ],
                        {
                            width: "196px",
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "section-inner"
                            ]
                        ],
                        {
                            width: "196px",
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "app-card"
                            ]
                        ],
                        {
                            width: "417px",
                            height: "240px",
                            paddingLeft: "18px",
                            paddingTop: "24px",
                            borderRadius: "30px",
                            backgroundColor: "#242424",
                            flexDirection: "column",
                            position: "relative"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "app-name"
                            ]
                        ],
                        {
                            width: "138px",
                            height: "44px",
                            color: "#ffffff",
                            fontSize: "28px",
                            fontWeight: 800,
                            textAlign: "left"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "app-version"
                            ]
                        ],
                        {
                            width: "80px",
                            height: "38px",
                            color: "#aeb0b4",
                            fontSize: "28px",
                            textAlign: "left"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "deco-icon-about"
                            ]
                        ],
                        {
                            width: "116px",
                            height: "116px",
                            position: "absolute",
                            right: "6px",
                            bottom: "6px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "section-title"
                            ]
                        ],
                        {
                            width: "180px",
                            height: "38px",
                            marginTop: "14px",
                            color: "#aeb0b4",
                            fontSize: "26px",
                            fontWeight: 700,
                            textAlign: "left"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "dev-role"
                            ]
                        ],
                        {
                            width: "180px",
                            height: "24px",
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
                                "dev-name"
                            ]
                        ],
                        {
                            width: "180px",
                            height: "28px",
                            color: "#ffffff",
                            fontSize: "18px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "license-line"
                            ]
                        ],
                        {
                            width: "180px",
                            height: "22px",
                            color: "#ffffff",
                            fontSize: "18px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "desc-line"
                            ]
                        ],
                        {
                            width: "180px",
                            height: "auto",
                            marginTop: "6px",
                            color: "#ffffff",
                            fontSize: "18px",
                            textAlign: "left"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "scroll-spacer"
                            ]
                        ],
                        {
                            height: "80px"
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
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            touchStartX: -1,
                            touchStartY: -1,
                            layoutWidth: 196,
                            textWidth: 180,
                            usageHeight: 420,
                            licenseHeight: 110,
                            limitsHeight: 340,
                            tagsHeight: 320,
                            posHeight: 380,
                            usageLines: [],
                            licenseLines: [],
                            limitLines: [],
                            tagLines: [],
                            posLines: [],
                            adaptiveSectionStyle: "width: 196px; align-items: center;",
                            sectionTitleStyle: "width: 180px; text-align: left;",
                            devLineStyle: "width: 180px; text-align: center;",
                            descLineStyle: "width: 180px; text-align: left;"
                        },
                        onInit () {
                            this.applyScreenLayout();
                        },
                        onShow () {
                            this.applyScreenLayout();
                        },
                        applyScreenLayout () {
                            const appData = this.$app.$def.data || {};
                            const sw = appData.screenWidth || 212;
                            const profile = appData.screenProfile || "pill-standard";
                            const isPill = "pill-standard" === profile || "pill-compact" === profile;
                            const safeWidth = 466 === sw ? Math.round(sw / Math.SQRT2) : sw - 20;
                            if (isPill) {
                                this.layoutWidth = 196;
                                this.textWidth = 180;
                                this.adaptiveSectionStyle = "width: 196px; align-items: center;";
                                this.sectionTitleStyle = "width: 180px; text-align: left;";
                                this.devLineStyle = "width: 180px; text-align: center;";
                                this.descLineStyle = "width: 180px; text-align: left;";
                            } else {
                                this.layoutWidth = safeWidth;
                                this.textWidth = Math.max(180, safeWidth - 16);
                                this.adaptiveSectionStyle = "width: " + safeWidth + "px; align-items: flex-start;";
                                this.sectionTitleStyle = "width: " + this.textWidth + "px; text-align: left;";
                                this.devLineStyle = "width: " + this.textWidth + "px; text-align: left;";
                                this.descLineStyle = "width: " + this.textWidth + "px; text-align: left;";
                            }
                            this.usageLines = this.wrapUsageText(this.textWidth);
                            this.licenseLines = this.wrapSectionLines([
                                "ECDICT（MIT）",
                                "CC-CEDICT",
                                "BNC/COCA 词族表"
                            ], this.textWidth);
                            this.limitLines = this.wrapSectionLines([
                                "• 约 1.5 万英文词、12.2 万中文词组",
                                "• 每次最多显示 20 条，模糊候选最多 80 条",
                                "• 收藏上限 150 条，历史缓存 20 条",
                                "• 中文支持词组和单字检索，长句可能缺失",
                                "• 数据完全离线，首次读取分片时请稍候"
                            ], this.textWidth);
                            this.tagLines = this.wrapSectionLines([
                                "zk  中考词汇",
                                "gk  高考词汇",
                                "cet4  大学英语四级",
                                "cet6  大学英语六级",
                                "ky  考研词汇",
                                "toefl  托福",
                                "ielts  雅思",
                                "gre  GRE"
                            ], this.textWidth);
                            this.posLines = this.wrapSectionLines([
                                "n.  名词",
                                "v.  动词：vt. 及物 / vi. 不及物",
                                "a.  形容词",
                                "adv.  副词",
                                "pron.  代词",
                                "prep.  介词",
                                "conj.  连词",
                                "interj.  感叹词",
                                "num.  数词"
                            ], this.textWidth);
                            this.usageHeight = this.sectionHeight(this.usageLines, 260);
                            this.licenseHeight = this.sectionHeight(this.licenseLines, 110);
                            this.limitsHeight = this.sectionHeight(this.limitLines, 260);
                            this.tagsHeight = this.sectionHeight(this.tagLines, 260);
                            this.posHeight = this.sectionHeight(this.posLines, 320);
                        },
                        wrapSectionLines (items, maxWidth) {
                            const lines = [];
                            for(let i = 0; i < items.length; i++){
                                const wrapped = this.wrapText(items[i], maxWidth);
                                for(let j = 0; j < wrapped.length; j++)lines.push(wrapped[j]);
                            }
                            return lines;
                        },
                        sectionHeight (lines, minimum) {
                            return Math.max(minimum, 58 + 28 * lines.length);
                        },
                        wrapUsageText (maxWidth) {
                            const items = [
                                "1. 查词：输入英文或中文，支持词形变化检索",
                                "2. 大号输入：连点 3 次搜索框，切换大号键盘",
                                "3. 结果卡片：点击查看完整释义",
                                "4. 详情页：收藏词条，上限 150 条",
                                "5. 收藏管理：字母筛选、分页浏览",
                                "6. 历史记录：自动缓存最近 20 条",
                                "7.快捷方式：结果列表页长按返回键返回主页",
                                "8.设置：首页点击腕上词典四字下方图标进入自定义设置"
                            ];
                            const lines = [];
                            for(let i = 0; i < items.length; i++){
                                const wrapped = this.wrapText(items[i], maxWidth);
                                for(let j = 0; j < wrapped.length; j++)lines.push(wrapped[j]);
                            }
                            return lines;
                        },
                        wrapText (value, maxWidth) {
                            const text = (value || "").trim();
                            if (!text) return [];
                            const lines = [];
                            let line = "";
                            let width = 0;
                            let lastBreak = -1;
                            for(let i = 0; i < text.length; i++){
                                const ch = text.charAt(i);
                                const chWidth = ch >= "A" && ch <= "z" ? 10 : 18;
                                if (line && width + chWidth > maxWidth) {
                                    if (lastBreak > 0) {
                                        lines.push(line.slice(0, lastBreak).trim());
                                        line = line.slice(lastBreak).trim();
                                        width = this.measureTextWidth(line);
                                    } else {
                                        lines.push(line);
                                        line = "";
                                        width = 0;
                                    }
                                    lastBreak = -1;
                                }
                                line += ch;
                                width += chWidth;
                                if ("：" === ch || "，" === ch || "、" === ch || "。" === ch) lastBreak = line.length;
                            }
                            if (line) lines.push(line);
                            return lines;
                        },
                        measureTextWidth (value) {
                            let width = 0;
                            for(let i = 0; i < value.length; i++){
                                const ch = value.charAt(i);
                                width += ch >= "A" && ch <= "z" ? 10 : 18;
                            }
                            return width;
                        },
                        goBack () {
                            _system.default.back();
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
                            const startsInLeftQuarter = this.touchStartX <= 0.1 * sw;
                            const endsAtRightQuarter = endX >= 0.85 * sw;
                            const mostlyHorizontal = Math.abs(endY - this.touchStartY) <= 60;
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
                        aiot.__ce__("list", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "about-list"
                                ],
                                bounces: "true",
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("width: " + _vm_.layoutWidth + "px;");
                                }
                            }
                        }, [
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "card",
                                    classList: [
                                        "list-item"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.layoutWidth + "px; height: 250px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "app-card"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "app-name"
                                            ],
                                            value: "腕上词典"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "app-version"
                                            ],
                                            value: "3.0.0"
                                        }
                                    }, []),
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "deco-icon-about"
                                            ],
                                            src: "/common/deco-icon-about.png"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "devs",
                                    classList: [
                                        "list-item"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.layoutWidth + "px; height: 170px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-inner"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.adaptiveSectionStyle);
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "section-title"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.sectionTitleStyle);
                                            },
                                            value: "Developers"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-role"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.devLineStyle);
                                            },
                                            value: "开发"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-name"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.devLineStyle);
                                            },
                                            value: "@睡不着的鸿鹄"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-role"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.devLineStyle);
                                            },
                                            value: "UI设计参考"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-name"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.devLineStyle);
                                            },
                                            value: "@无源流沙"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "license",
                                    classList: [
                                        "list-item"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.layoutWidth + "px; height: " + _vm_.licenseHeight + "px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-inner"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.adaptiveSectionStyle);
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "section-title"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.sectionTitleStyle);
                                            },
                                            value: "词库来源"
                                        }
                                    }, []),
                                    aiot.__cf__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            exp: function() {
                                                return _vm_.licenseLines;
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
                                                        "license-line"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.descLineStyle);
                                                    },
                                                    value: function() {
                                                        return line;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    })
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "usage",
                                    classList: [
                                        "list-item"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.layoutWidth + "px; height: " + _vm_.usageHeight + "px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-inner"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.adaptiveSectionStyle);
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "section-title"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.sectionTitleStyle);
                                            },
                                            value: "使用说明"
                                        }
                                    }, []),
                                    aiot.__cf__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            exp: function() {
                                                return _vm_.usageLines;
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
                                                        "desc-line"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.descLineStyle);
                                                    },
                                                    value: function() {
                                                        return line;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "scroll-spacer"
                                            ]
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "limits",
                                    classList: [
                                        "list-item"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.layoutWidth + "px; height: " + _vm_.limitsHeight + "px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-inner"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.adaptiveSectionStyle);
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "section-title"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.sectionTitleStyle);
                                            },
                                            value: "使用限制"
                                        }
                                    }, []),
                                    aiot.__cf__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            exp: function() {
                                                return _vm_.limitLines;
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
                                                        "desc-line"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.descLineStyle);
                                                    },
                                                    value: function() {
                                                        return line;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    })
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "tags",
                                    classList: [
                                        "list-item"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.layoutWidth + "px; height: " + _vm_.tagsHeight + "px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-inner"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.adaptiveSectionStyle);
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "section-title"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.sectionTitleStyle);
                                            },
                                            value: "标签缩写"
                                        }
                                    }, []),
                                    aiot.__cf__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            exp: function() {
                                                return _vm_.tagLines;
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
                                                        "desc-line"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.descLineStyle);
                                                    },
                                                    value: function() {
                                                        return line;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    })
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "pos",
                                    classList: [
                                        "list-item"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.layoutWidth + "px; height: " + _vm_.posHeight + "px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-inner"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.adaptiveSectionStyle);
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "section-title"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.sectionTitleStyle);
                                            },
                                            value: "词性对照"
                                        }
                                    }, []),
                                    aiot.__cf__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            exp: function() {
                                                return _vm_.posLines;
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
                                                        "desc-line"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.descLineStyle);
                                                    },
                                                    value: function() {
                                                        return line;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    })
                                ])
                            ])
                        ])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGFib3V0XFxhYm91dC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvcGFnZXMvYWJvdXQvYWJvdXQudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKCgpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjEyXCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlXCIgb250b3VjaHN0YXJ0PVwib25Ub3VjaFN0YXJ0XCIgb250b3VjaGVuZD1cIm9uVG91Y2hFbmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b3Atcm93XCI+XHJcbiAgICAgIDxpbWFnZSBjbGFzcz1cImJhY2stYnRuXCIgc3JjPVwiL2NvbW1vbi9pY29ucy9CYWNrX0IucG5nXCIgb25jbGljaz1cImdvQmFja1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8bGlzdCBjbGFzcz1cImFib3V0LWxpc3RcIiBib3VuY2VzPVwidHJ1ZVwiIHN0eWxlPVwid2lkdGg6IHt7bGF5b3V0V2lkdGh9fXB4O1wiPlxyXG4gICAgICA8bGlzdC1pdGVtIHR5cGU9XCJjYXJkXCIgY2xhc3M9XCJsaXN0LWl0ZW1cIiBzdHlsZT1cIndpZHRoOiB7e2xheW91dFdpZHRofX1weDsgaGVpZ2h0OiAyNTBweDtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLWNhcmRcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYXBwLW5hbWVcIj7ohZXkuIror43lhbg8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImFwcC12ZXJzaW9uXCI+My4wLjA8L3RleHQ+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwiZGVjby1pY29uLWFib3V0XCIgc3JjPVwiL2NvbW1vbi9kZWNvLWljb24tYWJvdXQucG5nXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saXN0LWl0ZW0+XHJcblxyXG4gICAgICA8bGlzdC1pdGVtIHR5cGU9XCJkZXZzXCIgY2xhc3M9XCJsaXN0LWl0ZW1cIiBzdHlsZT1cIndpZHRoOiB7e2xheW91dFdpZHRofX1weDsgaGVpZ2h0OiAxNzBweDtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pbm5lclwiIHN0eWxlPVwie3thZGFwdGl2ZVNlY3Rpb25TdHlsZX19XCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIiBzdHlsZT1cInt7c2VjdGlvblRpdGxlU3R5bGV9fVwiPkRldmVsb3BlcnM8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldi1yb2xlXCIgc3R5bGU9XCJ7e2RldkxpbmVTdHlsZX19XCI+5byA5Y+RPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXYtbmFtZVwiIHN0eWxlPVwie3tkZXZMaW5lU3R5bGV9fVwiPkDnnaHkuI3nnYDnmoTpuL/puYQ8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldi1yb2xlXCIgc3R5bGU9XCJ7e2RldkxpbmVTdHlsZX19XCI+VUnorr7orqHlj4LogIM8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldi1uYW1lXCIgc3R5bGU9XCJ7e2RldkxpbmVTdHlsZX19XCI+QOaXoOa6kOa1geaymTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saXN0LWl0ZW0+XHJcblxyXG4gICAgICA8bGlzdC1pdGVtIHR5cGU9XCJsaWNlbnNlXCIgY2xhc3M9XCJsaXN0LWl0ZW1cIiBzdHlsZT1cIndpZHRoOiB7e2xheW91dFdpZHRofX1weDsgaGVpZ2h0OiB7e2xpY2Vuc2VIZWlnaHR9fXB4O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWlubmVyXCIgc3R5bGU9XCJ7e2FkYXB0aXZlU2VjdGlvblN0eWxlfX1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiIHN0eWxlPVwie3tzZWN0aW9uVGl0bGVTdHlsZX19XCI+6K+N5bqT5p2l5rqQPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJsaWNlbnNlLWxpbmVcIiBzdHlsZT1cInt7ZGVzY0xpbmVTdHlsZX19XCIgZm9yPVwie3sgbGluZSBpbiBsaWNlbnNlTGluZXMgfX1cIj57eyBsaW5lIH19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpc3QtaXRlbT5cclxuXHJcbiAgICAgIDxsaXN0LWl0ZW0gdHlwZT1cInVzYWdlXCIgY2xhc3M9XCJsaXN0LWl0ZW1cIiBzdHlsZT1cIndpZHRoOiB7e2xheW91dFdpZHRofX1weDsgaGVpZ2h0OiB7e3VzYWdlSGVpZ2h0fX1weDtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pbm5lclwiIHN0eWxlPVwie3thZGFwdGl2ZVNlY3Rpb25TdHlsZX19XCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIiBzdHlsZT1cInt7c2VjdGlvblRpdGxlU3R5bGV9fVwiPuS9v+eUqOivtOaYjjwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGVzYy1saW5lXCIgc3R5bGU9XCJ7e2Rlc2NMaW5lU3R5bGV9fVwiIGZvcj1cInt7IGxpbmUgaW4gdXNhZ2VMaW5lcyB9fVwiPnt7IGxpbmUgfX08L3RleHQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpc3QtaXRlbT5cclxuXHJcbiAgICAgIDxsaXN0LWl0ZW0gdHlwZT1cImxpbWl0c1wiIGNsYXNzPVwibGlzdC1pdGVtXCIgc3R5bGU9XCJ3aWR0aDoge3tsYXlvdXRXaWR0aH19cHg7IGhlaWdodDoge3tsaW1pdHNIZWlnaHR9fXB4O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWlubmVyXCIgc3R5bGU9XCJ7e2FkYXB0aXZlU2VjdGlvblN0eWxlfX1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiIHN0eWxlPVwie3tzZWN0aW9uVGl0bGVTdHlsZX19XCI+5L2/55So6ZmQ5Yi2PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXNjLWxpbmVcIiBzdHlsZT1cInt7ZGVzY0xpbmVTdHlsZX19XCIgZm9yPVwie3sgbGluZSBpbiBsaW1pdExpbmVzIH19XCI+e3sgbGluZSB9fTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saXN0LWl0ZW0+XHJcblxyXG4gICAgICA8bGlzdC1pdGVtIHR5cGU9XCJ0YWdzXCIgY2xhc3M9XCJsaXN0LWl0ZW1cIiBzdHlsZT1cIndpZHRoOiB7e2xheW91dFdpZHRofX1weDsgaGVpZ2h0OiB7e3RhZ3NIZWlnaHR9fXB4O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWlubmVyXCIgc3R5bGU9XCJ7e2FkYXB0aXZlU2VjdGlvblN0eWxlfX1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiIHN0eWxlPVwie3tzZWN0aW9uVGl0bGVTdHlsZX19XCI+5qCH562+57yp5YaZPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXNjLWxpbmVcIiBzdHlsZT1cInt7ZGVzY0xpbmVTdHlsZX19XCIgZm9yPVwie3sgbGluZSBpbiB0YWdMaW5lcyB9fVwiPnt7IGxpbmUgfX08L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGlzdC1pdGVtPlxyXG5cclxuICAgICAgPGxpc3QtaXRlbSB0eXBlPVwicG9zXCIgY2xhc3M9XCJsaXN0LWl0ZW1cIiBzdHlsZT1cIndpZHRoOiB7e2xheW91dFdpZHRofX1weDsgaGVpZ2h0OiB7e3Bvc0hlaWdodH19cHg7XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taW5uZXJcIiBzdHlsZT1cInt7YWRhcHRpdmVTZWN0aW9uU3R5bGV9fVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCIgc3R5bGU9XCJ7e3NlY3Rpb25UaXRsZVN0eWxlfX1cIj7or43mgKflr7nnhac8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRlc2MtbGluZVwiIHN0eWxlPVwie3tkZXNjTGluZVN0eWxlfX1cIiBmb3I9XCJ7eyBsaW5lIGluIHBvc0xpbmVzIH19XCI+e3sgbGluZSB9fTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saXN0LWl0ZW0+XHJcbiAgICA8L2xpc3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJpdmF0ZToge1xyXG4gICAgdG91Y2hTdGFydFg6IC0xLFxyXG4gICAgdG91Y2hTdGFydFk6IC0xLFxyXG4gICAgbGF5b3V0V2lkdGg6IDE5NixcclxuICAgIHRleHRXaWR0aDogMTgwLFxyXG4gICAgdXNhZ2VIZWlnaHQ6IDQyMCxcclxuICAgIGxpY2Vuc2VIZWlnaHQ6IDExMCxcclxuICAgIGxpbWl0c0hlaWdodDogMzQwLFxyXG4gICAgdGFnc0hlaWdodDogMzIwLFxyXG4gICAgcG9zSGVpZ2h0OiAzODAsXHJcbiAgICB1c2FnZUxpbmVzOiBbXSxcclxuICAgIGxpY2Vuc2VMaW5lczogW10sXHJcbiAgICBsaW1pdExpbmVzOiBbXSxcclxuICAgIHRhZ0xpbmVzOiBbXSxcclxuICAgIHBvc0xpbmVzOiBbXSxcclxuICAgIGFkYXB0aXZlU2VjdGlvblN0eWxlOiBcIndpZHRoOiAxOTZweDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIixcclxuICAgIHNlY3Rpb25UaXRsZVN0eWxlOiBcIndpZHRoOiAxODBweDsgdGV4dC1hbGlnbjogbGVmdDtcIixcclxuICAgIGRldkxpbmVTdHlsZTogXCJ3aWR0aDogMTgwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcIixcclxuICAgIGRlc2NMaW5lU3R5bGU6IFwid2lkdGg6IDE4MHB4OyB0ZXh0LWFsaWduOiBsZWZ0O1wiXHJcbiAgfSxcclxuXHJcbiAgb25Jbml0KCkge1xyXG4gICAgdGhpcy5hcHBseVNjcmVlbkxheW91dCgpXHJcbiAgfSxcclxuXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5hcHBseVNjcmVlbkxheW91dCgpXHJcbiAgfSxcclxuXHJcbiAgYXBwbHlTY3JlZW5MYXlvdXQoKSB7XHJcbiAgICBjb25zdCBhcHBEYXRhID0gdGhpcy4kYXBwLiRkZWYuZGF0YSB8fCB7fVxyXG4gICAgY29uc3Qgc3cgPSBhcHBEYXRhLnNjcmVlbldpZHRoIHx8IDIxMlxyXG4gICAgY29uc3QgcHJvZmlsZSA9IGFwcERhdGEuc2NyZWVuUHJvZmlsZSB8fCBcInBpbGwtc3RhbmRhcmRcIlxyXG4gICAgY29uc3QgaXNQaWxsID0gcHJvZmlsZSA9PT0gXCJwaWxsLXN0YW5kYXJkXCIgfHwgcHJvZmlsZSA9PT0gXCJwaWxsLWNvbXBhY3RcIlxyXG4gICAgY29uc3Qgc2FmZVdpZHRoID0gc3cgPT09IDQ2NiA/IE1hdGgucm91bmQoc3cgLyBNYXRoLlNRUlQyKSA6IHN3IC0gMjBcclxuXHJcbiAgICBpZiAoaXNQaWxsKSB7XHJcbiAgICAgIHRoaXMubGF5b3V0V2lkdGggPSAxOTZcclxuICAgICAgdGhpcy50ZXh0V2lkdGggPSAxODBcclxuICAgICAgdGhpcy5hZGFwdGl2ZVNlY3Rpb25TdHlsZSA9IFwid2lkdGg6IDE5NnB4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiXHJcbiAgICAgIHRoaXMuc2VjdGlvblRpdGxlU3R5bGUgPSBcIndpZHRoOiAxODBweDsgdGV4dC1hbGlnbjogbGVmdDtcIlxyXG4gICAgICB0aGlzLmRldkxpbmVTdHlsZSA9IFwid2lkdGg6IDE4MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XCJcclxuICAgICAgdGhpcy5kZXNjTGluZVN0eWxlID0gXCJ3aWR0aDogMTgwcHg7IHRleHQtYWxpZ246IGxlZnQ7XCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGF5b3V0V2lkdGggPSBzYWZlV2lkdGhcclxuICAgICAgdGhpcy50ZXh0V2lkdGggPSBNYXRoLm1heCgxODAsIHNhZmVXaWR0aCAtIDE2KVxyXG4gICAgICB0aGlzLmFkYXB0aXZlU2VjdGlvblN0eWxlID0gXCJ3aWR0aDogXCIgKyBzYWZlV2lkdGggKyBcInB4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcIlxyXG4gICAgICB0aGlzLnNlY3Rpb25UaXRsZVN0eWxlID0gXCJ3aWR0aDogXCIgKyB0aGlzLnRleHRXaWR0aCArIFwicHg7IHRleHQtYWxpZ246IGxlZnQ7XCJcclxuICAgICAgdGhpcy5kZXZMaW5lU3R5bGUgPSBcIndpZHRoOiBcIiArIHRoaXMudGV4dFdpZHRoICsgXCJweDsgdGV4dC1hbGlnbjogbGVmdDtcIlxyXG4gICAgICB0aGlzLmRlc2NMaW5lU3R5bGUgPSBcIndpZHRoOiBcIiArIHRoaXMudGV4dFdpZHRoICsgXCJweDsgdGV4dC1hbGlnbjogbGVmdDtcIlxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXNhZ2VMaW5lcyA9IHRoaXMud3JhcFVzYWdlVGV4dCh0aGlzLnRleHRXaWR0aClcclxuICAgIHRoaXMubGljZW5zZUxpbmVzID0gdGhpcy53cmFwU2VjdGlvbkxpbmVzKFtcclxuICAgICAgXCJFQ0RJQ1TvvIhNSVTvvIlcIixcclxuICAgICAgXCJDQy1DRURJQ1RcIixcclxuICAgICAgXCJCTkMvQ09DQSDor43ml4/ooahcIlxyXG4gICAgXSwgdGhpcy50ZXh0V2lkdGgpXHJcbiAgICB0aGlzLmxpbWl0TGluZXMgPSB0aGlzLndyYXBTZWN0aW9uTGluZXMoW1xyXG4gICAgICBcIuKAoiDnuqYgMS41IOS4h+iLseaWh+ivjeOAgTEyLjIg5LiH5Lit5paH6K+N57uEXCIsXHJcbiAgICAgIFwi4oCiIOavj+asoeacgOWkmuaYvuekuiAyMCDmnaHvvIzmqKHns4rlgJnpgInmnIDlpJogODAg5p2hXCIsXHJcbiAgICAgIFwi4oCiIOaUtuiXj+S4iumZkCAxNTAg5p2h77yM5Y6G5Y+y57yT5a2YIDIwIOadoVwiLFxyXG4gICAgICBcIuKAoiDkuK3mlofmlK/mjIHor43nu4TlkozljZXlrZfmo4DntKLvvIzplb/lj6Xlj6/og73nvLrlpLFcIixcclxuICAgICAgXCLigKIg5pWw5o2u5a6M5YWo56a757q/77yM6aaW5qyh6K+75Y+W5YiG54mH5pe26K+356iN5YCZXCJcclxuICAgIF0sIHRoaXMudGV4dFdpZHRoKVxyXG4gICAgdGhpcy50YWdMaW5lcyA9IHRoaXMud3JhcFNlY3Rpb25MaW5lcyhbXHJcbiAgICAgIFwiemsgIOS4reiAg+ivjeaxh1wiLFxyXG4gICAgICBcImdrICDpq5jogIPor43msYdcIixcclxuICAgICAgXCJjZXQ0ICDlpKflraboi7Hor63lm5vnuqdcIixcclxuICAgICAgXCJjZXQ2ICDlpKflraboi7Hor63lha3nuqdcIixcclxuICAgICAgXCJreSAg6ICD56CU6K+N5rGHXCIsXHJcbiAgICAgIFwidG9lZmwgIOaJmOemj1wiLFxyXG4gICAgICBcImllbHRzICDpm4XmgJ1cIixcclxuICAgICAgXCJncmUgIEdSRVwiXHJcbiAgICBdLCB0aGlzLnRleHRXaWR0aClcclxuICAgIHRoaXMucG9zTGluZXMgPSB0aGlzLndyYXBTZWN0aW9uTGluZXMoW1xyXG4gICAgICBcIm4uICDlkI3or41cIixcclxuICAgICAgXCJ2LiAg5Yqo6K+N77yadnQuIOWPiueJqSAvIHZpLiDkuI3lj4rnialcIixcclxuICAgICAgXCJhLiAg5b2i5a656K+NXCIsXHJcbiAgICAgIFwiYWR2LiAg5Ymv6K+NXCIsXHJcbiAgICAgIFwicHJvbi4gIOS7o+ivjVwiLFxyXG4gICAgICBcInByZXAuICDku4vor41cIixcclxuICAgICAgXCJjb25qLiAg6L+e6K+NXCIsXHJcbiAgICAgIFwiaW50ZXJqLiAg5oSf5Y+56K+NXCIsXHJcbiAgICAgIFwibnVtLiAg5pWw6K+NXCJcclxuICAgIF0sIHRoaXMudGV4dFdpZHRoKVxyXG4gICAgdGhpcy51c2FnZUhlaWdodCA9IHRoaXMuc2VjdGlvbkhlaWdodCh0aGlzLnVzYWdlTGluZXMsIDI2MClcclxuICAgIHRoaXMubGljZW5zZUhlaWdodCA9IHRoaXMuc2VjdGlvbkhlaWdodCh0aGlzLmxpY2Vuc2VMaW5lcywgMTEwKVxyXG4gICAgdGhpcy5saW1pdHNIZWlnaHQgPSB0aGlzLnNlY3Rpb25IZWlnaHQodGhpcy5saW1pdExpbmVzLCAyNjApXHJcbiAgICB0aGlzLnRhZ3NIZWlnaHQgPSB0aGlzLnNlY3Rpb25IZWlnaHQodGhpcy50YWdMaW5lcywgMjYwKVxyXG4gICAgdGhpcy5wb3NIZWlnaHQgPSB0aGlzLnNlY3Rpb25IZWlnaHQodGhpcy5wb3NMaW5lcywgMzIwKVxyXG4gIH0sXHJcblxyXG4gIHdyYXBTZWN0aW9uTGluZXMoaXRlbXMsIG1heFdpZHRoKSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHdyYXBwZWQgPSB0aGlzLndyYXBUZXh0KGl0ZW1zW2ldLCBtYXhXaWR0aClcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3cmFwcGVkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGluZXMucHVzaCh3cmFwcGVkW2pdKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGluZXNcclxuICB9LFxyXG5cclxuICBzZWN0aW9uSGVpZ2h0KGxpbmVzLCBtaW5pbXVtKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgobWluaW11bSwgNTggKyBsaW5lcy5sZW5ndGggKiAyOClcclxuICB9LFxyXG5cclxuICB3cmFwVXNhZ2VUZXh0KG1heFdpZHRoKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgXCIxLiDmn6Xor43vvJrovpPlhaXoi7HmlofmiJbkuK3mlofvvIzmlK/mjIHor43lvaLlj5jljJbmo4DntKJcIixcclxuICAgICAgXCIyLiDlpKflj7fovpPlhaXvvJrov57ngrkgMyDmrKHmkJzntKLmoYbvvIzliIfmjaLlpKflj7fplK7nm5hcIixcclxuICAgICAgXCIzLiDnu5PmnpzljaHniYfvvJrngrnlh7vmn6XnnIvlrozmlbTph4rkuYlcIixcclxuICAgICAgXCI0LiDor6bmg4XpobXvvJrmlLbol4/or43mnaHvvIzkuIrpmZAgMTUwIOadoVwiLFxyXG4gICAgICBcIjUuIOaUtuiXj+euoeeQhu+8muWtl+avjeetm+mAieOAgeWIhumhtea1j+iniFwiLFxyXG4gICAgICBcIjYuIOWOhuWPsuiusOW9le+8muiHquWKqOe8k+WtmOacgOi/kSAyMCDmnaFcIixcclxuICAgICAgXCI3LuW/q+aNt+aWueW8j++8mue7k+aenOWIl+ihqOmhtemVv+aMiei/lOWbnumUrui/lOWbnuS4u+mhtVwiLFxyXG4gICAgICBcIjgu6K6+572u77ya6aaW6aG154K55Ye76IWV5LiK6K+N5YW45Zub5a2X5LiL5pa55Zu+5qCH6L+b5YWl6Ieq5a6a5LmJ6K6+572uXCJcclxuICAgIF1cclxuICAgIGNvbnN0IGxpbmVzID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgd3JhcHBlZCA9IHRoaXMud3JhcFRleHQoaXRlbXNbaV0sIG1heFdpZHRoKVxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdyYXBwZWQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBsaW5lcy5wdXNoKHdyYXBwZWRbal0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBsaW5lc1xyXG4gIH0sXHJcblxyXG4gIHdyYXBUZXh0KHZhbHVlLCBtYXhXaWR0aCkge1xyXG4gICAgY29uc3QgdGV4dCA9ICh2YWx1ZSB8fCBcIlwiKS50cmltKClcclxuICAgIGlmICghdGV4dCkge1xyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaW5lcyA9IFtdXHJcbiAgICBsZXQgbGluZSA9IFwiXCJcclxuICAgIGxldCB3aWR0aCA9IDBcclxuICAgIGxldCBsYXN0QnJlYWsgPSAtMVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNoID0gdGV4dC5jaGFyQXQoaSlcclxuICAgICAgY29uc3QgY2hXaWR0aCA9IGNoID49IFwiQVwiICYmIGNoIDw9IFwielwiID8gMTAgOiAxOFxyXG4gICAgICBpZiAobGluZSAmJiB3aWR0aCArIGNoV2lkdGggPiBtYXhXaWR0aCkge1xyXG4gICAgICAgIGlmIChsYXN0QnJlYWsgPiAwKSB7XHJcbiAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUuc2xpY2UoMCwgbGFzdEJyZWFrKS50cmltKCkpXHJcbiAgICAgICAgICBsaW5lID0gbGluZS5zbGljZShsYXN0QnJlYWspLnRyaW0oKVxyXG4gICAgICAgICAgd2lkdGggPSB0aGlzLm1lYXN1cmVUZXh0V2lkdGgobGluZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGluZXMucHVzaChsaW5lKVxyXG4gICAgICAgICAgbGluZSA9IFwiXCJcclxuICAgICAgICAgIHdpZHRoID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0QnJlYWsgPSAtMVxyXG4gICAgICB9XHJcbiAgICAgIGxpbmUgKz0gY2hcclxuICAgICAgd2lkdGggKz0gY2hXaWR0aFxyXG4gICAgICBpZiAoY2ggPT09IFwi77yaXCIgfHwgY2ggPT09IFwi77yMXCIgfHwgY2ggPT09IFwi44CBXCIgfHwgY2ggPT09IFwi44CCXCIpIHtcclxuICAgICAgICBsYXN0QnJlYWsgPSBsaW5lLmxlbmd0aFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobGluZSkge1xyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGluZXNcclxuICB9LFxyXG5cclxuICBtZWFzdXJlVGV4dFdpZHRoKHZhbHVlKSB7XHJcbiAgICBsZXQgd2lkdGggPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNoID0gdmFsdWUuY2hhckF0KGkpXHJcbiAgICAgIHdpZHRoICs9IGNoID49IFwiQVwiICYmIGNoIDw9IFwielwiID8gMTAgOiAxOFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpZHRoXHJcbiAgfSxcclxuXHJcbiAgZ29CYWNrKCkge1xyXG4gICAgcm91dGVyLmJhY2soKVxyXG4gIH0sXHJcblxyXG4gIG9uVG91Y2hTdGFydChldnQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2dClcclxuICAgIGlmIChwb2ludCkge1xyXG4gICAgICB0aGlzLnRvdWNoU3RhcnRYID0gcG9pbnQuY2xpZW50WFxyXG4gICAgICB0aGlzLnRvdWNoU3RhcnRZID0gcG9pbnQuY2xpZW50WVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uVG91Y2hFbmQoZXZ0KSB7XHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0VG91Y2hQb2ludChldnQpXHJcbiAgICBpZiAoIXBvaW50IHx8IHRoaXMudG91Y2hTdGFydFggPCAwKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVuZFggPSBwb2ludC5jbGllbnRYXHJcbiAgICBjb25zdCBlbmRZID0gcG9pbnQuY2xpZW50WVxyXG4gICAgY29uc3Qgc3cgPSB0aGlzLiRhcHAuJGRlZi5kYXRhLnNjcmVlbldpZHRoIHx8IDIxMlxyXG4gICAgY29uc3Qgc3RhcnRzSW5MZWZ0UXVhcnRlciA9IHRoaXMudG91Y2hTdGFydFggPD0gc3cgKiAwLjFcclxuICAgIGNvbnN0IGVuZHNBdFJpZ2h0UXVhcnRlciA9IGVuZFggPj0gc3cgKiAwLjg1XHJcbiAgICBjb25zdCBtb3N0bHlIb3Jpem9udGFsID0gTWF0aC5hYnMoZW5kWSAtIHRoaXMudG91Y2hTdGFydFkpIDw9IDYwXHJcblxyXG4gICAgaWYgKHN0YXJ0c0luTGVmdFF1YXJ0ZXIgJiYgZW5kc0F0UmlnaHRRdWFydGVyICYmIG1vc3RseUhvcml6b250YWwpIHtcclxuICAgICAgcm91dGVyLmJhY2soKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG91Y2hTdGFydFggPSAtMVxyXG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IC0xXHJcbiAgfSxcclxuXHJcbiAgZ2V0VG91Y2hQb2ludChldnQpIHtcclxuICAgIGlmIChldnQgJiYgZXZ0LmNoYW5nZWRUb3VjaGVzICYmIGV2dC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBldnQuY2hhbmdlZFRvdWNoZXNbMF1cclxuICAgIH1cclxuICAgIGlmIChldnQgJiYgZXZ0LnRvdWNoZXMgJiYgZXZ0LnRvdWNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gZXZ0LnRvdWNoZXNbMF1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4ucGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3Atcm93IHtcclxuICB3aWR0aDogNDMycHg7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2stYnRuIHtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5hYm91dC1saXN0IHtcclxuICB3aWR0aDogMTk2cHg7XHJcbiAgaGVpZ2h0OiA0MTBweDtcclxufVxyXG5cclxuLmxpc3QtaXRlbSB7XHJcbiAgd2lkdGg6IDE5NnB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taW5uZXIge1xyXG4gIHdpZHRoOiAxOTZweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcHAtY2FyZCB7XHJcbiAgd2lkdGg6IDQxN3B4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFwcC1uYW1lIHtcclxuICB3aWR0aDogMTM4cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hcHAtdmVyc2lvbiB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGNvbG9yOiAjYWViMGI0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZGVjby1pY29uLWFib3V0IHtcclxuICB3aWR0aDogMTE2cHg7XHJcbiAgaGVpZ2h0OiAxMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDZweDtcclxuICBib3R0b206IDZweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBjb2xvcjogI2FlYjBiNDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZGV2LXJvbGUge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGV2LW5hbWUge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpY2Vuc2UtbGluZSB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVzYy1saW5lIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc2Nyb2xsLXNwYWNlciB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJpdmF0ZSIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJsYXlvdXRXaWR0aCIsInRleHRXaWR0aCIsInVzYWdlSGVpZ2h0IiwibGljZW5zZUhlaWdodCIsImxpbWl0c0hlaWdodCIsInRhZ3NIZWlnaHQiLCJwb3NIZWlnaHQiLCJ1c2FnZUxpbmVzIiwibGljZW5zZUxpbmVzIiwibGltaXRMaW5lcyIsInRhZ0xpbmVzIiwicG9zTGluZXMiLCJhZGFwdGl2ZVNlY3Rpb25TdHlsZSIsInNlY3Rpb25UaXRsZVN0eWxlIiwiZGV2TGluZVN0eWxlIiwiZGVzY0xpbmVTdHlsZSIsIm9uSW5pdCIsImFwcGx5U2NyZWVuTGF5b3V0Iiwib25TaG93IiwiYXBwRGF0YSIsIiRhcHAiLCIkZGVmIiwiZGF0YSIsInN3Iiwic2NyZWVuV2lkdGgiLCJwcm9maWxlIiwic2NyZWVuUHJvZmlsZSIsImlzUGlsbCIsInNhZmVXaWR0aCIsIk1hdGgiLCJyb3VuZCIsIlNRUlQyIiwibWF4Iiwid3JhcFVzYWdlVGV4dCIsIndyYXBTZWN0aW9uTGluZXMiLCJzZWN0aW9uSGVpZ2h0IiwiaXRlbXMiLCJtYXhXaWR0aCIsImxpbmVzIiwiaSIsImxlbmd0aCIsIndyYXBwZWQiLCJ3cmFwVGV4dCIsImoiLCJwdXNoIiwibWluaW11bSIsInZhbHVlIiwidGV4dCIsInRyaW0iLCJsaW5lIiwid2lkdGgiLCJsYXN0QnJlYWsiLCJjaCIsImNoYXJBdCIsImNoV2lkdGgiLCJzbGljZSIsIm1lYXN1cmVUZXh0V2lkdGgiLCJnb0JhY2siLCJyb3V0ZXIiLCJiYWNrIiwib25Ub3VjaFN0YXJ0IiwiZXZ0IiwicG9pbnQiLCJnZXRUb3VjaFBvaW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoRW5kIiwiZW5kWCIsImVuZFkiLCJzdGFydHNJbkxlZnRRdWFydGVyIiwiZW5kc0F0UmlnaHRRdWFydGVyIiwibW9zdGx5SG9yaXpvbnRhbCIsImFicyIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLENBQUMsR0FBRyxBQUFDO3dCQUN4QixJQUFJLEFBQXNCLFlBQXRCLE9BQU9DLFlBQXlCLE9BQU9BO3dCQUMzQyxJQUFJOzRCQUNILE9BQU8sSUFBSSxJQUFJLElBQUlDLFNBQVM7d0JBQzdCLEVBQUUsT0FBT0MsR0FBRzs0QkFDWCxJQUFJLEFBQWtCLFlBQWxCLE9BQU9DLFFBQXFCLE9BQU9BO3dCQUN4QztvQkFDRDs7O29CQ1BBSixvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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