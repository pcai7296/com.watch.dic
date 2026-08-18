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
                            paddingTop: "25px",
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
                            width: "83px",
                            height: "26px",
                            marginTop: "4px",
                            marginBottom: "4px",
                            fontSize: "21px",
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
                            width: "78px",
                            height: "70px",
                            marginBottom: "6px",
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
                            width: "67px",
                            height: "57px"
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
                            width: "148px",
                            height: "28px",
                            fontSize: "24px",
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
                            width: "111px",
                            height: "20px",
                            fontSize: "17px",
                            fontWeight: 400,
                            color: "#6888b8",
                            textAlign: "center",
                            marginBottom: "8px"
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
                            width: "280px",
                            height: "65px",
                            borderRadius: "15px",
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
                            marginBottom: "10px"
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
                            width: "45px",
                            height: "39px",
                            marginRight: "12px"
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
                            fontSize: "27px",
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
                            width: "280px",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "8px"
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
                            width: "129px",
                            height: "61px",
                            borderRadius: "13px",
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
                            marginBottom: "5px"
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
                            width: "26px",
                            height: "22px",
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
                            fontSize: "15px",
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
                            width: "92px",
                            height: "44px",
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
                            width: "44px",
                            height: "44px",
                            borderRadius: "22px",
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
                            width: "36px",
                            height: "36px"
                        }
                    ],
                    [
                        [
                            [
                                3,
                                "dicPressIn"
                            ]
                        ],
                        {
                            keyframes: "[{\"time\":0,\"transform\":{\"scaleX\":1,\"scaleY\":1}},{\"time\":100,\"transform\":{\"scaleX\":0.85,\"scaleY\":0.85}}]"
                        }
                    ],
                    [
                        [
                            [
                                3,
                                "dicPressOut"
                            ]
                        ],
                        {
                            keyframes: "[{\"time\":0,\"transform\":{\"scaleX\":0.85,\"scaleY\":0.85}},{\"time\":100,\"transform\":{\"scaleX\":1,\"scaleY\":1}}]"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "press-in"
                            ]
                        ],
                        {
                            animationName: "dicPressIn",
                            animationDuration: "200ms",
                            animationTimingFunction: "ease-in",
                            transformOrigin: "50% 50%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "press-out"
                            ]
                        ],
                        {
                            animationName: "dicPressOut",
                            animationDuration: "200ms",
                            animationTimingFunction: "ease-out",
                            transformOrigin: "50% 50%"
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
                        onBtnDown (key) {
                            this.pressedKey = key;
                            this.releasingKey = "";
                            this._pressStart = Date.now();
                            this._longPress = false;
                        },
                        onBtnUp (key) {
                            if (Date.now() - this._pressStart >= 200) this._longPress = true;
                            this.pressedKey = "";
                            this.releasingKey = key;
                            var self = this;
                            if (this._btnUpTimer) clearTimeout(this._btnUpTimer);
                            this._btnUpTimer = setTimeout(function() {
                                self._btnUpTimer = null;
                                if (self.releasingKey === key) self.releasingKey = "";
                            }, 200);
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
                        onDestroy () {
                            if (this.timeTimer) {
                                clearInterval(this.timeTimer);
                                this.timeTimer = null;
                            }
                            if (this._btnUpTimer) {
                                clearTimeout(this._btnUpTimer);
                                this._btnUpTimer = null;
                            }
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
                            if (this._longPress || !navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/search",
                                params: {
                                    searchMode: "inflect",
                                    inflectDepth: "0"
                                }
                            });
                        },
                        goSearch () {
                            if (this._longPress || !navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/search"
                            });
                        },
                        goSettings () {
                            if (this._longPress || !navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/settings"
                            });
                        },
                        goHistory () {
                            if (this._longPress || !navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/records",
                                params: {
                                    type: "history"
                                }
                            });
                        },
                        goFavorites () {
                            if (this._longPress || !navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/records",
                                params: {
                                    type: "favorites"
                                }
                            });
                        },
                        goAbout () {
                            if (this._longPress || !navGuard()) return;
                            _system3.default.push({
                                uri: "/pages/about"
                            });
                        },
                        goSponsor () {
                            if (this._longPress || !navGuard()) return;
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
                                classList: function() {
                                    const $classValue$ = "main-btn " + ("search" === _vm_.pressedKey ? "press-in" : "") + " " + ("search" === _vm_.releasingKey ? "press-out" : "");
                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                    return $classValue$;
                                },
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
                                    classList: function() {
                                        const $classValue$ = "grid-btn " + ("inflect" === _vm_.pressedKey ? "press-in" : "") + " " + ("inflect" === _vm_.releasingKey ? "press-out" : "");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
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
                                    classList: function() {
                                        const $classValue$ = "grid-btn " + ("settings" === _vm_.pressedKey ? "press-in" : "") + " " + ("settings" === _vm_.releasingKey ? "press-out" : "");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
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
                                    classList: function() {
                                        const $classValue$ = "grid-btn " + ("history" === _vm_.pressedKey ? "press-in" : "") + " " + ("history" === _vm_.releasingKey ? "press-out" : "");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
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
                                    classList: function() {
                                        const $classValue$ = "grid-btn " + ("favorites" === _vm_.pressedKey ? "press-in" : "") + " " + ("favorites" === _vm_.releasingKey ? "press-out" : "");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
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
                                    classList: function() {
                                        const $classValue$ = "circle-btn about-btn " + ("about" === _vm_.pressedKey ? "press-in" : "") + " " + ("about" === _vm_.releasingKey ? "press-out" : "");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
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
                                    classList: function() {
                                        const $classValue$ = "circle-btn sponsor-btn " + ("sponsor" === _vm_.pressedKey ? "press-in" : "") + " " + ("sponsor" === _vm_.releasingKey ? "press-out" : "");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
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
