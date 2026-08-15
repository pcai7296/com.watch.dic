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
                            paddingTop: "39px",
                            backgroundColor: "#020813",
                            flexDirection: "column",
                            alignItems: "center"
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
                            width: "160px",
                            height: "42px",
                            color: "#ffffff",
                            fontSize: "29px",
                            fontWeight: 800,
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
                            display: "none"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "deco-icon"
                            ]
                        ],
                        {
                            display: "none"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "button-group"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "main-button"
                            ]
                        ],
                        {
                            width: "156px",
                            height: "50px",
                            marginBottom: "12px",
                            borderRadius: "18px",
                            flexDirection: "row",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-icon"
                            ]
                        ],
                        {
                            width: "22px",
                            height: "22px",
                            marginLeft: "14px",
                            marginRight: "6px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-label"
                            ]
                        ],
                        {
                            color: "#ffffff",
                            fontSize: "20px",
                            fontWeight: 800
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "secondary-button"
                            ]
                        ],
                        {
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#2f8cff",
                            borderRightColor: "#2f8cff",
                            borderBottomColor: "#2f8cff",
                            borderLeftColor: "#2f8cff",
                            backgroundColor: "#08172b",
                            color: "#ffffff"
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
                            width: "152px",
                            height: "42px",
                            marginTop: "-2px",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "small-button"
                            ]
                        ],
                        {
                            width: "70px",
                            height: "42px",
                            borderRadius: "21px",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-icon-sm"
                            ]
                        ],
                        {
                            width: "14px",
                            height: "14px",
                            marginRight: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-label-sm"
                            ]
                        ],
                        {
                            color: "#ffffff",
                            fontSize: "18px",
                            fontWeight: 800
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "icon-card-pill-standard"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "98px",
                            height: "88px",
                            marginTop: "12px",
                            marginBottom: "19px",
                            borderRadius: "25px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#1d74e8",
                            borderRightColor: "#1d74e8",
                            borderBottomColor: "#1d74e8",
                            borderLeftColor: "#1d74e8",
                            backgroundColor: "#07101d",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "deco-icon-pill-standard"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "84px",
                            height: "84px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page-pill-compact"
                            ]
                        ],
                        {
                            paddingTop: "30px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title-pill-compact"
                            ]
                        ],
                        {
                            height: "38px",
                            fontSize: "28px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "icon-card-pill-compact"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "76px",
                            height: "68px",
                            marginTop: "6px",
                            marginBottom: "12px",
                            borderRadius: "22px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#1d74e8",
                            borderRightColor: "#1d74e8",
                            borderBottomColor: "#1d74e8",
                            borderLeftColor: "#1d74e8",
                            backgroundColor: "#07101d",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "deco-icon-pill-compact"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "64px",
                            height: "64px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "main-button-pill-compact"
                            ]
                        ],
                        {
                            height: "46px",
                            marginBottom: "9px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bottom-row-pill-compact"
                            ]
                        ],
                        {
                            height: "40px",
                            marginTop: "-1px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "small-button-pill-compact"
                            ]
                        ],
                        {
                            height: "40px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title-rect"
                            ]
                        ],
                        {
                            marginBottom: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title-circle"
                            ]
                        ],
                        {
                            marginBottom: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page-circle"
                            ]
                        ],
                        {
                            paddingTop: "32px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "button-group-rect"
                            ]
                        ],
                        {
                            width: "84%",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "button-group-circle"
                            ]
                        ],
                        {
                            width: "76%",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "main-button-rect"
                            ]
                        ],
                        {
                            width: "47%",
                            height: "68px",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "main-button-circle"
                            ]
                        ],
                        {
                            width: "47%",
                            height: "68px",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-icon-rect"
                            ]
                        ],
                        {
                            width: "22px",
                            height: "22px",
                            marginLeft: "8px",
                            marginRight: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-icon-circle"
                            ]
                        ],
                        {
                            width: "22px",
                            height: "22px",
                            marginLeft: "8px",
                            marginRight: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bottom-row-rect"
                            ]
                        ],
                        {
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bottom-row-circle"
                            ]
                        ],
                        {
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "icon-card-rect"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "92px",
                            height: "92px",
                            marginBottom: "16px",
                            borderRadius: "26px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#1d74e8",
                            borderRightColor: "#1d74e8",
                            borderBottomColor: "#1d74e8",
                            borderLeftColor: "#1d74e8",
                            backgroundColor: "#07101d",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "deco-icon-rect"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "86px",
                            height: "86px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "icon-card-circle"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "84px",
                            height: "84px",
                            marginBottom: "14px",
                            borderRadius: "24px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#1d74e8",
                            borderRightColor: "#1d74e8",
                            borderBottomColor: "#1d74e8",
                            borderLeftColor: "#1d74e8",
                            backgroundColor: "#07101d",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "deco-icon-circle"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "78px",
                            height: "78px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "about-button"
                            ]
                        ],
                        {
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#35485f",
                            borderRightColor: "#35485f",
                            borderBottomColor: "#35485f",
                            borderLeftColor: "#35485f",
                            backgroundColor: "#161d27",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "sponsor-button"
                            ]
                        ],
                        {
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#d4a017",
                            borderRightColor: "#d4a017",
                            borderBottomColor: "#d4a017",
                            borderLeftColor: "#d4a017",
                            backgroundColor: "#1a1408",
                            color: "#ffffff"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            screenProfile: "rect"
                        },
                        onInit () {
                            this.screenProfile = "rect";
                            this._cleanInvalidHistory();
                            this._trackLaunch();
                        },
                        _trackLaunch () {
                            _system.default.get({
                                key: "dic_launch_count",
                                default: "0",
                                success: (data)=>{
                                    var raw = data && (data.value || data);
                                    var count = parseInt(raw, 10);
                                    if (!isFinite(count) || count < 0) count = 0;
                                    var nextCount = count + 1;
                                    _system.default.set({
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
                            _system.default.get({
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
                                    if (clean.length < list.length) _system.default.set({
                                        key: "dic_history",
                                        value: JSON.stringify(clean)
                                    });
                                },
                                fail: function() {}
                            });
                        },
                        goInflectSearch () {
                            _system2.default.push({
                                uri: "/pages/search",
                                params: {
                                    searchMode: "inflect",
                                    inflectDepth: "0"
                                }
                            });
                        },
                        goSearch () {
                            _system2.default.push({
                                uri: "/pages/search"
                            });
                        },
                        goSettings () {
                            _system2.default.push({
                                uri: "/pages/settings"
                            });
                        },
                        goHistory () {
                            _system2.default.push({
                                uri: "/pages/records",
                                params: {
                                    type: "history"
                                }
                            });
                        },
                        goFavorites () {
                            _system2.default.push({
                                uri: "/pages/records",
                                params: {
                                    type: "favorites"
                                }
                            });
                        },
                        goAbout () {
                            _system2.default.push({
                                uri: "/pages/about"
                            });
                        },
                        goSponsor () {
                            _system2.default.push({
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
                            classList: function() {
                                const $classValue$ = "page page-" + _vm_.screenProfile;
                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                return $classValue$;
                            }
                        }
                    }, [
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: function() {
                                    const $classValue$ = "title title-" + _vm_.screenProfile;
                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                    return $classValue$;
                                },
                                value: "腕上词典"
                            }
                        }, []),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: function() {
                                    const $classValue$ = "icon-card icon-card-" + _vm_.screenProfile;
                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                    return $classValue$;
                                },
                                events: {
                                    click: function(evt) {
                                        return _vm_.goSettings(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("image", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "deco-icon deco-icon-" + _vm_.screenProfile;
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    src: "/common/deco-icon.png"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: function() {
                                    const $classValue$ = "button-group button-group-" + _vm_.screenProfile;
                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                    return $classValue$;
                                }
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "main-button main-button-" + _vm_.screenProfile + " secondary-button";
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goInflectSearch(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "btn-icon btn-icon-" + _vm_.screenProfile;
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        src: "/common/icons/btn_transform.png"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-label"
                                        ],
                                        value: "查找变形"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "main-button main-button-" + _vm_.screenProfile + " secondary-button";
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goSearch(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "btn-icon btn-icon-" + _vm_.screenProfile;
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        src: "/common/icons/btn_search.png"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-label"
                                        ],
                                        value: "中英查找"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "main-button main-button-" + _vm_.screenProfile + " secondary-button";
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goHistory(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "btn-icon btn-icon-" + _vm_.screenProfile;
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        src: "/common/icons/btn_history.png"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-label"
                                        ],
                                        value: "历史记录"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "main-button main-button-" + _vm_.screenProfile + " secondary-button";
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goFavorites(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "btn-icon btn-icon-" + _vm_.screenProfile;
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        src: "/common/icons/btn_fav.png"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-label"
                                        ],
                                        value: "我的收藏"
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: function() {
                                    const $classValue$ = "bottom-row bottom-row-" + _vm_.screenProfile;
                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                    return $classValue$;
                                }
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "small-button small-button-" + _vm_.screenProfile + " about-button";
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goAbout(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-icon-sm"
                                        ],
                                        src: "/common/icons/btn_about.png"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-label-sm"
                                        ],
                                        value: "关于"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "small-button small-button-" + _vm_.screenProfile + " sponsor-button";
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goSponsor(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-icon-sm"
                                        ],
                                        src: "/common/icons/btn_sponsor.png"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-label-sm"
                                        ],
                                        value: "赞助"
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
