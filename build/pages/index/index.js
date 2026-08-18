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
                                backgroundColor: "#020813",
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "time-text"
                                ]
                            ],
                            {
                                width: "116px",
                                height: "30px",
                                marginTop: "4px",
                                marginBottom: "6px",
                                fontSize: "25px",
                                fontWeight: 600,
                                fontFamily: "monospace",
                                color: "#ffffff",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "icon-card"
                                ]
                            ],
                            {
                                width: "108px",
                                height: "90px",
                                marginBottom: "9px",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "logo-icon"
                                ]
                            ],
                            {
                                width: "93px",
                                height: "77px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "title"
                                ]
                            ],
                            {
                                width: "206px",
                                height: "32px",
                                fontSize: "30px",
                                fontWeight: 800,
                                color: "#ffffff",
                                textAlign: "center",
                                marginBottom: "2px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "subtitle"
                                ]
                            ],
                            {
                                width: "154px",
                                height: "24px",
                                fontSize: "21px",
                                fontWeight: 400,
                                color: "#6888b8",
                                textAlign: "center",
                                marginBottom: "11px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "main-btn"
                                ]
                            ],
                            {
                                width: "391px",
                                height: "75px",
                                borderRadius: "19px",
                                borderTopWidth: "1.5px",
                                borderRightWidth: "1.5px",
                                borderBottomWidth: "1.5px",
                                borderLeftWidth: "1.5px",
                                borderTopColor: "#4a6a8a",
                                borderRightColor: "#4a6a8a",
                                borderBottomColor: "#4a6a8a",
                                borderLeftColor: "#4a6a8a",
                                backgroundColor: "#3a6898",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "13px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "main-btn-icon"
                                ]
                            ],
                            {
                                width: "63px",
                                height: "52px",
                                marginRight: "17px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "main-btn-label"
                                ]
                            ],
                            {
                                fontSize: "33px",
                                fontWeight: 800,
                                color: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "grid"
                                ]
                            ],
                            {
                                width: "391px",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "11px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "grid-btn"
                                ]
                            ],
                            {
                                width: "180px",
                                height: "71px",
                                borderRadius: "17px",
                                borderTopWidth: "1.5px",
                                borderRightWidth: "1.5px",
                                borderBottomWidth: "1.5px",
                                borderLeftWidth: "1.5px",
                                borderTopColor: "rgba(104,136,184,0.25)",
                                borderRightColor: "rgba(104,136,184,0.25)",
                                borderBottomColor: "rgba(104,136,184,0.25)",
                                borderLeftColor: "rgba(104,136,184,0.25)",
                                backgroundColor: "#081520",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "grid-btn-icon"
                                ]
                            ],
                            {
                                width: "36px",
                                height: "30px",
                                marginBottom: "2px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "grid-btn-label"
                                ]
                            ],
                            {
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#c0d0e8"
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
                                width: "129px",
                                height: "51px",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "circle-btn"
                                ]
                            ],
                            {
                                width: "62px",
                                height: "51px",
                                borderRadius: "29px",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "about-btn"
                                ]
                            ],
                            {
                                backgroundColor: "#14181e",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                borderTopColor: "#1a2a40",
                                borderRightColor: "#1a2a40",
                                borderBottomColor: "#1a2a40",
                                borderLeftColor: "#1a2a40"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sponsor-btn"
                                ]
                            ],
                            {
                                backgroundColor: "#14181e",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                borderTopColor: "#1a2a40",
                                borderRightColor: "#1a2a40",
                                borderBottomColor: "#1a2a40",
                                borderLeftColor: "#1a2a40"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "circle-icon"
                                ]
                            ],
                            {
                                width: "31px",
                                height: "26px"
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
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _buildTarget = _interopRequireDefault(__webpack_require__("./src/common/buildTarget.js"));
                        var _navGuard = __webpack_require__("./src/common/navGuard.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            private: {
                                screenProfile: _buildTarget.default.profile,
                                tc0: "",
                                tc1: "",
                                tc2: "",
                                tc3: "",
                                tc4: "",
                                timeTimer: null,
                                pressedKey: "",
                                releasingKey: ""
                            },
                            onInit () {
                                const app = this.$app.$def;
                                this.screenProfile = _buildTarget.default.profile;
                                _system.default.getInfo({
                                    success: (data)=>{
                                        app.updateScreenInfo(data);
                                        this.screenProfile = app.data.screenProfile;
                                    },
                                    fail: (data, code)=>{
                                        console.log("index device.getInfo failed; using compiled target: " + code);
                                    }
                                });
                                this._cleanInvalidHistory();
                                this._trackLaunch();
                                this._updateTime();
                                this.timeTimer = setInterval(()=>{
                                    this._updateTime();
                                }, 1000);
                            },
                            onBtnDown (key) {
                                var el = this.$element('btn-' + key);
                                if (el) el.style.transform = 'scale(0.85)';
                            },
                            onBtnUp (key) {
                                var el = this.$element('btn-' + key);
                                if (el) el.style.transform = '';
                            },
                            _updateTime () {
                                var now = new Date();
                                var h = now.getHours();
                                var m = now.getMinutes();
                                var t = (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
                                this.tc0 = t[0];
                                this.tc1 = t[1];
                                this.tc2 = t[2];
                                this.tc3 = t[3];
                                this.tc4 = t[4];
                            },
                            _trackLaunch () {
                                _system2.default.get({
                                    key: "dic_launch_count",
                                    default: "0",
                                    success: (data)=>{
                                        var raw = data && (data.value || data);
                                        var count = parseInt(raw, 10);
                                        if (!isFinite(count) || count < 0) count = 0;
                                        var nextCount = count + 1;
                                        _system2.default.set({
                                            key: "dic_launch_count",
                                            value: String(nextCount),
                                            fail: (setData, code)=>{
                                                console.log("index launch count save failed: " + code);
                                            }
                                        });
                                        if (1 === nextCount || nextCount % 10 === 0) this.goSponsor();
                                    },
                                    fail: (getData, code)=>{
                                        console.log("index launch count read failed: " + code);
                                        this.goSponsor();
                                    }
                                });
                            },
                            _cleanInvalidHistory () {
                                _system2.default.get({
                                    key: "dic_history",
                                    success: function(data) {
                                        var text = data && (data.value || data);
                                        if (!text) return;
                                        var list;
                                        try {
                                            list = JSON.parse(text);
                                        } catch (e) {
                                            return;
                                        }
                                        if (!list || !list.length) return;
                                        var clean = [];
                                        for(var i = 0; i < list.length; i++){
                                            var item = list[i];
                                            if (item && item.query && item.query.toString().trim() && item.ids && item.ids.length > 0) clean.push(item);
                                        }
                                        if (clean.length < list.length) _system2.default.set({
                                            key: "dic_history",
                                            value: JSON.stringify(clean)
                                        });
                                    },
                                    fail: function() {}
                                });
                            },
                            goInflectSearch () {
                                if (!(0, _navGuard.navGuard)()) return;
                                _system3.default.push({
                                    uri: "/pages/search",
                                    params: {
                                        searchMode: "inflect",
                                        inflectDepth: "0"
                                    }
                                });
                            },
                            goSearch () {
                                if (!(0, _navGuard.navGuard)()) return;
                                _system3.default.push({
                                    uri: "/pages/search"
                                });
                            },
                            goSettings () {
                                if (!(0, _navGuard.navGuard)()) return;
                                _system3.default.push({
                                    uri: "/pages/settings"
                                });
                            },
                            goHistory () {
                                if (!(0, _navGuard.navGuard)()) return;
                                _system3.default.push({
                                    uri: "/pages/records",
                                    params: {
                                        type: "history"
                                    }
                                });
                            },
                            goFavorites () {
                                if (!(0, _navGuard.navGuard)()) return;
                                _system3.default.push({
                                    uri: "/pages/records",
                                    params: {
                                        type: "favorites"
                                    }
                                });
                            },
                            goAbout () {
                                if (!(0, _navGuard.navGuard)()) return;
                                _system3.default.push({
                                    uri: "/pages/about"
                                });
                            },
                            goSponsor () {
                                if (!(0, _navGuard.navGuard)()) return;
                                _system3.default.push({
                                    uri: "/pages/sponsor"
                                });
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
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "time-text"
                                    ],
                                    value: function() {
                                        return _vm_.tc0 + _vm_.tc1 + _vm_.tc2 + _vm_.tc3 + _vm_.tc4;
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "icon-card"
                                    ]
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "logo-icon"
                                        ],
                                        src: "/common/logo.png"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "title"
                                    ],
                                    value: "腕上词典"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "subtitle"
                                    ],
                                    value: "抬手即查"
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    id: "btn-search",
                                    classList: [
                                        "main-btn"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goSearch(evt);
                                        },
                                        touchstart: function(evt) {
                                            return _vm_.onBtnDown("search", evt);
                                        },
                                        touchend: function(evt) {
                                            return _vm_.onBtnUp("search", evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "main-btn-icon"
                                        ],
                                        src: "/common/icons/language.png"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "main-btn-label"
                                        ],
                                        value: "查单词"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "grid"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        id: "btn-inflect",
                                        classList: [
                                            "grid-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goInflectSearch(evt);
                                            },
                                            touchstart: function(evt) {
                                                return _vm_.onBtnDown("inflect", evt);
                                            },
                                            touchend: function(evt) {
                                                return _vm_.onBtnUp("inflect", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "grid-btn-icon"
                                            ],
                                            src: "/common/icons/btn_transform_blue.png"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "grid-btn-label"
                                            ],
                                            value: "变形"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        id: "btn-settings",
                                        classList: [
                                            "grid-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goSettings(evt);
                                            },
                                            touchstart: function(evt) {
                                                return _vm_.onBtnDown("settings", evt);
                                            },
                                            touchend: function(evt) {
                                                return _vm_.onBtnUp("settings", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "grid-btn-icon"
                                            ],
                                            src: "/common/icons/settings-2.png"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "grid-btn-label"
                                            ],
                                            value: "设置"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        id: "btn-history",
                                        classList: [
                                            "grid-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goHistory(evt);
                                            },
                                            touchstart: function(evt) {
                                                return _vm_.onBtnDown("history", evt);
                                            },
                                            touchend: function(evt) {
                                                return _vm_.onBtnUp("history", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "grid-btn-icon"
                                            ],
                                            src: "/common/icons/history.png"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "grid-btn-label"
                                            ],
                                            value: "历史"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        id: "btn-favorites",
                                        classList: [
                                            "grid-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goFavorites(evt);
                                            },
                                            touchstart: function(evt) {
                                                return _vm_.onBtnDown("favorites", evt);
                                            },
                                            touchend: function(evt) {
                                                return _vm_.onBtnUp("favorites", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "grid-btn-icon"
                                            ],
                                            src: "/common/icons/star-gradient.png"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "grid-btn-label"
                                            ],
                                            value: "收藏"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "bottom-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        id: "btn-about",
                                        classList: [
                                            "circle-btn",
                                            "about-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goAbout(evt);
                                            },
                                            touchstart: function(evt) {
                                                return _vm_.onBtnDown("about", evt);
                                            },
                                            touchend: function(evt) {
                                                return _vm_.onBtnUp("about", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "circle-icon"
                                            ],
                                            src: "/common/icons/btn_info_i.png"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        id: "btn-sponsor",
                                        classList: [
                                            "circle-btn",
                                            "sponsor-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goSponsor(evt);
                                            },
                                            touchstart: function(evt) {
                                                return _vm_.onBtnDown("sponsor", evt);
                                            },
                                            touchend: function(evt) {
                                                return _vm_.onBtnUp("sponsor", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "circle-icon"
                                            ],
                                            src: "/common/icons/btn_heart_gold.png"
                                        }
                                    }, [])
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
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGluZGV4XFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvY29tbW9uL2J1aWxkVGFyZ2V0LmpzIiwid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvY29tbW9uL25hdkd1YXJkLmpzIiwid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvcGFnZXMvaW5kZXgvaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFRBUkdFVF9JRCA9IFwiVzQzMlwiXG52YXIgVEFSR0VUX1dJRFRIID0gNDMyXG52YXIgVEFSR0VUX0hFSUdIVCA9IDUxNFxudmFyIFRBUkdFVF9QUk9GSUxFID0gXCJyZWN0XCJcbnZhciBUQVJHRVRfU0hBUEUgPSBcInJlY3RcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlkOiBUQVJHRVRfSUQsXG4gIHdpZHRoOiBUQVJHRVRfV0lEVEgsXG4gIGhlaWdodDogVEFSR0VUX0hFSUdIVCxcbiAgcHJvZmlsZTogVEFSR0VUX1BST0ZJTEUsXG4gIHNoYXBlOiBUQVJHRVRfU0hBUEVcbn0iLCIvLyDlr7zoiKrpmLLov57ngrnvvJrml7bpl7Tnqpflj6PlhoXlj6rmlL7ooYzkuIDmrKHpobXpnaLot7PovazvvIzpmLLmraLov57ngrnmiZPlvIDlpJrkuKrph43lpI3pobXpnaJcbi8vIO+8iOi/nueCueWQjOS4gOaMiemSruS8miBwdXNoIOWkmuS4qumhtemdouWunuS+i++8jOWvvOiHtOi/lOWbnumUrumcgOimgeWkmuaMieWHoOasoeaJjeiDveWbnuS4iuS4gOe6p++8iVxudmFyIGxhc3ROYXZBdCA9IDBcbnZhciBOQVZfTE9DS19NUyA9IDUwMFxuXG5leHBvcnQgZnVuY3Rpb24gbmF2R3VhcmQoKSB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgaWYgKG5vdyAtIGxhc3ROYXZBdCA8IE5BVl9MT0NLX01TKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgbGFzdE5hdkF0ID0gbm93XG4gIHJldHVybiB0cnVlXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjEyXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgIDx0ZXh0IGNsYXNzPVwidGltZS10ZXh0XCI+e3sgdGMwIH19e3sgdGMxIH19e3sgdGMyIH19e3sgdGMzIH19e3sgdGM0IH19PC90ZXh0PlxuXG4gICAgPGRpdiBjbGFzcz1cImljb24tY2FyZFwiPlxuICAgICAgPGltZyBjbGFzcz1cImxvZ28taWNvblwiIHNyYz1cIi9jb21tb24vbG9nby5wbmdcIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPuiFleS4iuivjeWFuDwvdGV4dD5cbiAgICA8dGV4dCBjbGFzcz1cInN1YnRpdGxlXCI+5oqs5omL5Y2z5p+lPC90ZXh0PlxuXG4gICAgPGRpdiBpZD1cImJ0bi1zZWFyY2hcIiBjbGFzcz1cIm1haW4tYnRuXCIgQGNsaWNrPVwiZ29TZWFyY2hcIiBvbnRvdWNoc3RhcnQ9XCJvbkJ0bkRvd24oJ3NlYXJjaCcpXCIgb250b3VjaGVuZD1cIm9uQnRuVXAoJ3NlYXJjaCcpXCI+XG4gICAgICA8aW1nIGNsYXNzPVwibWFpbi1idG4taWNvblwiIHNyYz1cIi9jb21tb24vaWNvbnMvbGFuZ3VhZ2UucG5nXCIgLz5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibWFpbi1idG4tbGFiZWxcIj7mn6XljZXor408L3RleHQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgPGRpdiBpZD1cImJ0bi1pbmZsZWN0XCIgY2xhc3M9XCJncmlkLWJ0blwiIEBjbGljaz1cImdvSW5mbGVjdFNlYXJjaFwiIG9udG91Y2hzdGFydD1cIm9uQnRuRG93bignaW5mbGVjdCcpXCIgb250b3VjaGVuZD1cIm9uQnRuVXAoJ2luZmxlY3QnKVwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZ3JpZC1idG4taWNvblwiIHNyYz1cIi9jb21tb24vaWNvbnMvYnRuX3RyYW5zZm9ybV9ibHVlLnBuZ1wiIC8+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZ3JpZC1idG4tbGFiZWxcIj7lj5jlvaI8L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJidG4tc2V0dGluZ3NcIiBjbGFzcz1cImdyaWQtYnRuXCIgQGNsaWNrPVwiZ29TZXR0aW5nc1wiIG9udG91Y2hzdGFydD1cIm9uQnRuRG93bignc2V0dGluZ3MnKVwiIG9udG91Y2hlbmQ9XCJvbkJ0blVwKCdzZXR0aW5ncycpXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJncmlkLWJ0bi1pY29uXCIgc3JjPVwiL2NvbW1vbi9pY29ucy9zZXR0aW5ncy0yLnBuZ1wiIC8+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZ3JpZC1idG4tbGFiZWxcIj7orr7nva48L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJidG4taGlzdG9yeVwiIGNsYXNzPVwiZ3JpZC1idG5cIiBAY2xpY2s9XCJnb0hpc3RvcnlcIiBvbnRvdWNoc3RhcnQ9XCJvbkJ0bkRvd24oJ2hpc3RvcnknKVwiIG9udG91Y2hlbmQ9XCJvbkJ0blVwKCdoaXN0b3J5JylcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImdyaWQtYnRuLWljb25cIiBzcmM9XCIvY29tbW9uL2ljb25zL2hpc3RvcnkucG5nXCIgLz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJncmlkLWJ0bi1sYWJlbFwiPuWOhuWPsjwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImJ0bi1mYXZvcml0ZXNcIiBjbGFzcz1cImdyaWQtYnRuXCIgQGNsaWNrPVwiZ29GYXZvcml0ZXNcIiBvbnRvdWNoc3RhcnQ9XCJvbkJ0bkRvd24oJ2Zhdm9yaXRlcycpXCIgb250b3VjaGVuZD1cIm9uQnRuVXAoJ2Zhdm9yaXRlcycpXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJncmlkLWJ0bi1pY29uXCIgc3JjPVwiL2NvbW1vbi9pY29ucy9zdGFyLWdyYWRpZW50LnBuZ1wiIC8+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZ3JpZC1idG4tbGFiZWxcIj7mlLbol488L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJib3R0b20tcm93XCI+XG4gICAgICA8ZGl2IGlkPVwiYnRuLWFib3V0XCIgY2xhc3M9XCJjaXJjbGUtYnRuIGFib3V0LWJ0blwiIEBjbGljaz1cImdvQWJvdXRcIiBvbnRvdWNoc3RhcnQ9XCJvbkJ0bkRvd24oJ2Fib3V0JylcIiBvbnRvdWNoZW5kPVwib25CdG5VcCgnYWJvdXQnKVwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiY2lyY2xlLWljb25cIiBzcmM9XCIvY29tbW9uL2ljb25zL2J0bl9pbmZvX2kucG5nXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImJ0bi1zcG9uc29yXCIgY2xhc3M9XCJjaXJjbGUtYnRuIHNwb25zb3ItYnRuXCIgQGNsaWNrPVwiZ29TcG9uc29yXCIgb250b3VjaHN0YXJ0PVwib25CdG5Eb3duKCdzcG9uc29yJylcIiBvbnRvdWNoZW5kPVwib25CdG5VcCgnc3BvbnNvcicpXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJjaXJjbGUtaWNvblwiIHNyYz1cIi9jb21tb24vaWNvbnMvYnRuX2hlYXJ0X2dvbGQucG5nXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZGV2aWNlIGZyb20gXCJAc3lzdGVtLmRldmljZVwiXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiQHN5c3RlbS5zdG9yYWdlXCJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcbmltcG9ydCBidWlsZFRhcmdldCBmcm9tIFwiLi4vLi4vY29tbW9uL2J1aWxkVGFyZ2V0XCJcbmltcG9ydCB7bmF2R3VhcmR9IGZyb20gXCIuLi8uLi9jb21tb24vbmF2R3VhcmRcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByaXZhdGU6IHtcbiAgICBzY3JlZW5Qcm9maWxlOiBidWlsZFRhcmdldC5wcm9maWxlLFxuICAgIHRjMDogXCJcIixcbiAgICB0YzE6IFwiXCIsXG4gICAgdGMyOiBcIlwiLFxuICAgIHRjMzogXCJcIixcbiAgICB0YzQ6IFwiXCIsXG4gICAgdGltZVRpbWVyOiBudWxsLFxuICAgIHByZXNzZWRLZXk6IFwiXCIsXG4gICAgcmVsZWFzaW5nS2V5OiBcIlwiXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIGNvbnN0IGFwcCA9IHRoaXMuJGFwcC4kZGVmXG4gICAgdGhpcy5zY3JlZW5Qcm9maWxlID0gYnVpbGRUYXJnZXQucHJvZmlsZVxuICAgIGRldmljZS5nZXRJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGFwcC51cGRhdGVTY3JlZW5JbmZvKGRhdGEpXG4gICAgICAgIHRoaXMuc2NyZWVuUHJvZmlsZSA9IGFwcC5kYXRhLnNjcmVlblByb2ZpbGVcbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZGF0YSwgY29kZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IGRldmljZS5nZXRJbmZvIGZhaWxlZDsgdXNpbmcgY29tcGlsZWQgdGFyZ2V0OiBcIiArIGNvZGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9jbGVhbkludmFsaWRIaXN0b3J5KClcbiAgICB0aGlzLl90cmFja0xhdW5jaCgpXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpXG4gICAgdGhpcy50aW1lVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVUaW1lKClcbiAgICB9LCAxMDAwKVxuICB9LFxuXG4gIG9uQnRuRG93bihrZXkpIHtcbiAgICB2YXIgZWwgPSB0aGlzLiRlbGVtZW50KCdidG4tJyArIGtleSlcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjg1KSdcbiAgICB9XG4gIH0sXG5cbiAgb25CdG5VcChrZXkpIHtcbiAgICB2YXIgZWwgPSB0aGlzLiRlbGVtZW50KCdidG4tJyArIGtleSlcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnXG4gICAgfVxuICB9LFxuXG5cblxuICBfdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKVxuICAgIHZhciBoID0gbm93LmdldEhvdXJzKClcbiAgICB2YXIgbSA9IG5vdy5nZXRNaW51dGVzKClcbiAgICB2YXIgdCA9IChoIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgaCArIFwiOlwiICsgKG0gPCAxMCA/IFwiMFwiIDogXCJcIikgKyBtXG4gICAgdGhpcy50YzAgPSB0WzBdXG4gICAgdGhpcy50YzEgPSB0WzFdXG4gICAgdGhpcy50YzIgPSB0WzJdXG4gICAgdGhpcy50YzMgPSB0WzNdXG4gICAgdGhpcy50YzQgPSB0WzRdXG4gIH0sXG5cbiAgX3RyYWNrTGF1bmNoKCkge1xuICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgIGtleTogXCJkaWNfbGF1bmNoX2NvdW50XCIsXG4gICAgICBkZWZhdWx0OiBcIjBcIixcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHZhciByYXcgPSBkYXRhICYmIChkYXRhLnZhbHVlIHx8IGRhdGEpXG4gICAgICAgIHZhciBjb3VudCA9IHBhcnNlSW50KHJhdywgMTApXG4gICAgICAgIGlmICghaXNGaW5pdGUoY291bnQpIHx8IGNvdW50IDwgMCkge1xuICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXh0Q291bnQgPSBjb3VudCArIDFcbiAgICAgICAgc3RvcmFnZS5zZXQoe1xuICAgICAgICAgIGtleTogXCJkaWNfbGF1bmNoX2NvdW50XCIsXG4gICAgICAgICAgdmFsdWU6IFN0cmluZyhuZXh0Q291bnQpLFxuICAgICAgICAgIGZhaWw6IChzZXREYXRhLCBjb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IGxhdW5jaCBjb3VudCBzYXZlIGZhaWxlZDogXCIgKyBjb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKG5leHRDb3VudCA9PT0gMSB8fCBuZXh0Q291bnQgJSAxMCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZ29TcG9uc29yKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChnZXREYXRhLCBjb2RlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggbGF1bmNoIGNvdW50IHJlYWQgZmFpbGVkOiBcIiArIGNvZGUpXG4gICAgICAgIHRoaXMuZ29TcG9uc29yKClcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIF9jbGVhbkludmFsaWRIaXN0b3J5KCkge1xuICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgIGtleTogXCJkaWNfaGlzdG9yeVwiLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB2YXIgdGV4dCA9IGRhdGEgJiYgKGRhdGEudmFsdWUgfHwgZGF0YSlcbiAgICAgICAgaWYgKCF0ZXh0KSByZXR1cm5cbiAgICAgICAgdmFyIGxpc3RcbiAgICAgICAgdHJ5IHsgbGlzdCA9IEpTT04ucGFyc2UodGV4dCkgfSBjYXRjaCAoZSkgeyByZXR1cm4gfVxuICAgICAgICBpZiAoIWxpc3QgfHwgIWxpc3QubGVuZ3RoKSByZXR1cm5cblxuICAgICAgICB2YXIgY2xlYW4gPSBbXVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnF1ZXJ5ICYmIGl0ZW0ucXVlcnkudG9TdHJpbmcoKS50cmltKCkgJiYgaXRlbS5pZHMgJiYgaXRlbS5pZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2xlYW4ucHVzaChpdGVtKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGVhbi5sZW5ndGggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgIGtleTogXCJkaWNfaGlzdG9yeVwiLFxuICAgICAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KGNsZWFuKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHt9XG4gICAgfSlcbiAgfSxcblxuICBnb0luZmxlY3RTZWFyY2goKSB7XG4gICAgaWYgKCFuYXZHdWFyZCgpKSByZXR1cm5cbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICB1cmk6IFwiL3BhZ2VzL3NlYXJjaFwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNlYXJjaE1vZGU6IFwiaW5mbGVjdFwiLFxuICAgICAgICBpbmZsZWN0RGVwdGg6IFwiMFwiXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBnb1NlYXJjaCgpIHtcbiAgICBpZiAoIW5hdkd1YXJkKCkpIHJldHVyblxuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHVyaTogXCIvcGFnZXMvc2VhcmNoXCJcbiAgICB9KVxuICB9LFxuXG4gIGdvU2V0dGluZ3MoKSB7XG4gICAgaWYgKCFuYXZHdWFyZCgpKSByZXR1cm5cbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICB1cmk6IFwiL3BhZ2VzL3NldHRpbmdzXCJcbiAgICB9KVxuICB9LFxuXG4gIGdvSGlzdG9yeSgpIHtcbiAgICBpZiAoIW5hdkd1YXJkKCkpIHJldHVyblxuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHVyaTogXCIvcGFnZXMvcmVjb3Jkc1wiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHR5cGU6IFwiaGlzdG9yeVwiXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBnb0Zhdm9yaXRlcygpIHtcbiAgICBpZiAoIW5hdkd1YXJkKCkpIHJldHVyblxuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHVyaTogXCIvcGFnZXMvcmVjb3Jkc1wiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHR5cGU6IFwiZmF2b3JpdGVzXCJcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdvQWJvdXQoKSB7XG4gICAgaWYgKCFuYXZHdWFyZCgpKSByZXR1cm5cbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICB1cmk6IFwiL3BhZ2VzL2Fib3V0XCJcbiAgICB9KVxuICB9LFxuXG4gIGdvU3BvbnNvcigpIHtcbiAgICBpZiAoIW5hdkd1YXJkKCkpIHJldHVyblxuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHVyaTogXCIvcGFnZXMvc3BvbnNvclwiXG4gICAgfSlcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHtcbiAgd2lkdGg6IDQzMnB4O1xuICBoZWlnaHQ6IDUxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwODEzO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGltZS10ZXh0IHtcbiAgd2lkdGg6IDExNnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uLWNhcmQge1xuICB3aWR0aDogMTA4cHg7XG4gIGhlaWdodDogOTBweDtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28taWNvbiB7XG4gIHdpZHRoOiA5M3B4O1xuICBoZWlnaHQ6IDc3cHg7XG59XG5cbi50aXRsZSB7XG4gIHdpZHRoOiAyMDZweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgd2lkdGg6IDE1NHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2ODg4Yjg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbn1cblxuLm1haW4tYnRuIHtcbiAgd2lkdGg6IDM5MXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gIGJvcmRlci13aWR0aDogMS41cHg7XG4gIGJvcmRlci1jb2xvcjogIzRhNmE4YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNjg5ODtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG5cbi5tYWluLWJ0bi1pY29uIHtcbiAgd2lkdGg6IDYzcHg7XG4gIGhlaWdodDogNTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xufVxuXG4ubWFpbi1idG4tbGFiZWwge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZ3JpZCB7XG4gIHdpZHRoOiAzOTFweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59XG5cbi5ncmlkLWJ0biB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA3MXB4O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICBib3JkZXItY29sb3I6IHJnYmEoMTA0LCAxMzYsIDE4NCwgMC4yNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODE1MjA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5ncmlkLWJ0bi1pY29uIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uZ3JpZC1idG4tbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjYzBkMGU4O1xufVxuXG4uYm90dG9tLXJvdyB7XG4gIHdpZHRoOiAxMjlweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaXJjbGUtYnRuIHtcbiAgd2lkdGg6IDYycHg7XG4gIGhlaWdodDogNTFweDtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hYm91dC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxODFlO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjMWEyYTQwO1xufVxuXG4uc3BvbnNvci1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxODFlO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjMWEyYTQwO1xufVxuXG4uY2lyY2xlLWljb24ge1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAyNnB4O1xufVxuPC9zdHlsZT4iXSwibmFtZXMiOlsiVEFSR0VUX0lEIiwiVEFSR0VUX1dJRFRIIiwiVEFSR0VUX0hFSUdIVCIsIlRBUkdFVF9QUk9GSUxFIiwiVEFSR0VUX1NIQVBFIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiaWQiLCJ3aWR0aCIsImhlaWdodCIsInByb2ZpbGUiLCJzaGFwZSIsImxhc3ROYXZBdCIsIk5BVl9MT0NLX01TIiwibmF2R3VhcmQiLCJub3ciLCJEYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfYnVpbGRUYXJnZXQiLCJyZXF1aXJlIiwiX25hdkd1YXJkIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwicHJpdmF0ZSIsInNjcmVlblByb2ZpbGUiLCJidWlsZFRhcmdldCIsInRjMCIsInRjMSIsInRjMiIsInRjMyIsInRjNCIsInRpbWVUaW1lciIsInByZXNzZWRLZXkiLCJyZWxlYXNpbmdLZXkiLCJvbkluaXQiLCJhcHAiLCIkYXBwIiwiJGRlZiIsImRldmljZSIsImdldEluZm8iLCJzdWNjZXNzIiwiZGF0YSIsInVwZGF0ZVNjcmVlbkluZm8iLCJmYWlsIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJfY2xlYW5JbnZhbGlkSGlzdG9yeSIsIl90cmFja0xhdW5jaCIsIl91cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJvbkJ0bkRvd24iLCJrZXkiLCJlbCIsIiRlbGVtZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJvbkJ0blVwIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJ0Iiwic3RvcmFnZSIsImdldCIsInJhdyIsInZhbHVlIiwiY291bnQiLCJwYXJzZUludCIsImlzRmluaXRlIiwibmV4dENvdW50Iiwic2V0IiwiU3RyaW5nIiwic2V0RGF0YSIsImdvU3BvbnNvciIsImdldERhdGEiLCJ0ZXh0IiwibGlzdCIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsImNsZWFuIiwiaSIsIml0ZW0iLCJxdWVyeSIsInRvU3RyaW5nIiwidHJpbSIsImlkcyIsInB1c2giLCJzdHJpbmdpZnkiLCJnb0luZmxlY3RTZWFyY2giLCJyb3V0ZXIiLCJ1cmkiLCJwYXJhbXMiLCJzZWFyY2hNb2RlIiwiaW5mbGVjdERlcHRoIiwiZ29TZWFyY2giLCJnb1NldHRpbmdzIiwiZ29IaXN0b3J5IiwidHlwZSIsImdvRmF2b3JpdGVzIiwiZ29BYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUEsSUFBSUEsWUFBWTt3QkFDaEIsSUFBSUMsZUFBZTt3QkFDbkIsSUFBSUMsZ0JBQWdCO3dCQUNwQixJQUFJQyxpQkFBaUI7d0JBQ3JCLElBQUlDLGVBQWU7d0JBQU0sSUFBQUMsV0FBQUMsT0FBQUEsQ0FBQUEsVUFBQSxHQUVWOzRCQUNiQyxJQUFJUDs0QkFDSlEsT0FBT1A7NEJBQ1BRLFFBQVFQOzRCQUNSUSxTQUFTUDs0QkFDVFEsT0FBT1A7d0JBQ1Q7Ozs7Ozs7O3dCQ1ZBLElBQUlRLFlBQVk7d0JBQ2hCLElBQUlDLGNBQWM7d0JBRVgsU0FBU0M7NEJBQ2QsTUFBTUMsTUFBTUMsS0FBS0QsR0FBRzs0QkFDcEIsSUFBSUEsTUFBTUgsWUFBWUMsYUFDcEIsT0FBTzs0QkFFVEQsWUFBWUc7NEJBQ1osT0FBTzt3QkFDVDs7Ozs7Ozs7Ozs7Ozs7b0JDWkFFLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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