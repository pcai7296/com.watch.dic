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
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    const { buildTarget, navGuard } = __webpack_require__.g;
                    var _default = exports.default = {
                        private: {
                            screenProfile: buildTarget.profile,
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
                            this.screenProfile = buildTarget.profile;
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
                            if (!navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/search",
                                params: {
                                    searchMode: "inflect",
                                    inflectDepth: "0"
                                }
                            });
                        },
                        goSearch () {
                            if (!navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/search"
                            });
                        },
                        goSettings () {
                            if (!navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/settings"
                            });
                        },
                        goHistory () {
                            if (!navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/records",
                                params: {
                                    type: "history"
                                }
                            });
                        },
                        goFavorites () {
                            if (!navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/records",
                                params: {
                                    type: "favorites"
                                }
                            });
                        },
                        goAbout () {
                            if (!navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/about"
                            });
                        },
                        goSponsor () {
                            if (!navGuard()) return;
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
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
