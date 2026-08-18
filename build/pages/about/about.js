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
                            width: "466px",
                            height: "466px",
                            paddingTop: 0,
                            backgroundColor: "#000000",
                            flexDirection: "column",
                            alignItems: "center"
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
                            height: "385px"
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
                            width: "305px",
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
                            height: "26px",
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
                            height: "24px",
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
                    const { navGuard } = __webpack_require__.g;
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
                            if (!navGuard()) return;
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
                            if (startsInLeftQuarter && endsAtRightQuarter && mostlyHorizontal) {
                                if (!navGuard()) return;
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
