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
                                "content"
                            ]
                        ],
                        {
                            width: "100%",
                            marginTop: "50px",
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "setting-title"
                            ]
                        ],
                        {
                            color: "#ffffff",
                            fontSize: "22px",
                            fontWeight: 800,
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "suggestion-switch"
                            ]
                        ],
                        {
                            width: "58px",
                            height: "32px",
                            marginTop: "20px",
                            thumbColor: "#ffffff",
                            trackColor: "#0b65ea"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "result-home-title"
                            ]
                        ],
                        {
                            marginTop: "34px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "search-swipe-title"
                            ]
                        ],
                        {
                            marginTop: "34px",
                            flexDirection: "column",
                            alignItems: "center"
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
                            paddingTop: "16px"
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
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            englishSuggestionEnabled: true,
                            resultLongPressHomeEnabled: true,
                            searchSwipeExitLocked: true,
                            screenProfile: "rect",
                            destroyed: false,
                            touchStartX: -1,
                            touchStartY: -1
                        },
                        onInit () {
                            screenProfile: "rect";
                            _system2.default.get({
                                key: "dic_english_suggestions",
                                default: "1",
                                success: (data)=>{
                                    if (this.destroyed) return;
                                    const value = data && (data.value || data);
                                    this.englishSuggestionEnabled = "0" !== value;
                                },
                                fail: (data, code)=>{
                                    console.log("settings storage.get failed: " + code);
                                }
                            });
                            _system2.default.get({
                                key: "dic_result_long_press_home",
                                default: "1",
                                success: (data)=>{
                                    if (this.destroyed) return;
                                    const value = data && (data.value || data);
                                    this.resultLongPressHomeEnabled = "0" !== value;
                                },
                                fail: (data, code)=>{
                                    console.log("settings result long press get failed: " + code);
                                }
                            });
                            _system2.default.get({
                                key: "dic_search_swipe_exit_locked",
                                default: "1",
                                success: (data)=>{
                                    if (this.destroyed) return;
                                    const value = data && (data.value || data);
                                    this.searchSwipeExitLocked = "0" !== value;
                                },
                                fail: (data, code)=>{
                                    console.log("settings search swipe get failed: " + code);
                                }
                            });
                        },
                        onDestroy () {
                            this.destroyed = true;
                        },
                        goBack () {
                            _system.default.back();
                        },
                        onSuggestionChange (evt) {
                            this.englishSuggestionEnabled = !!(evt && evt.checked);
                            this.saveSwitch("dic_english_suggestions", this.englishSuggestionEnabled);
                        },
                        onResultLongPressHomeChange (evt) {
                            this.resultLongPressHomeEnabled = !!(evt && evt.checked);
                            this.saveSwitch("dic_result_long_press_home", this.resultLongPressHomeEnabled);
                        },
                        onSearchSwipeExitChange (evt) {
                            this.searchSwipeExitLocked = !!(evt && evt.checked);
                            this.saveSwitch("dic_search_swipe_exit_locked", this.searchSwipeExitLocked);
                        },
                        saveSwitch (key, enabled) {
                            _system2.default.set({
                                key: key,
                                value: enabled ? "1" : "0",
                                fail: (data, code)=>{
                                    console.log("settings storage.set failed: " + code);
                                }
                            });
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
                            const screenWidth = this.$app.$def.data.screenWidth || 212;
                            const horizontal = Math.abs(endY - this.touchStartY) <= 120;
                            if (this.touchStartX <= 0.25 * screenWidth && endX >= 0.75 * screenWidth && horizontal) _system.default.back();
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
                            classList: function() {
                                const $classValue$ = "page page-" + _vm_.screenProfile;
                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                return $classValue$;
                            },
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
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "content"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-title"
                                    ],
                                    value: "英文输入联想"
                                }
                            }, []),
                            aiot.__ce__("switch", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "suggestion-switch"
                                    ],
                                    checked: function() {
                                        return _vm_.englishSuggestionEnabled;
                                    },
                                    events: {
                                        change: function(evt) {
                                            return _vm_.onSuggestionChange(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-title",
                                        "result-home-title"
                                    ],
                                    value: "结果页长按返回主页"
                                }
                            }, []),
                            aiot.__ce__("switch", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "suggestion-switch"
                                    ],
                                    checked: function() {
                                        return _vm_.resultLongPressHomeEnabled;
                                    },
                                    events: {
                                        change: function(evt) {
                                            return _vm_.onResultLongPressHomeChange(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "search-swipe-title"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-title"
                                        ],
                                        value: "搜索输入页"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-title"
                                        ],
                                        value: "强制不可滑动退出"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("switch", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "suggestion-switch"
                                    ],
                                    checked: function() {
                                        return _vm_.searchSwipeExitLocked;
                                    },
                                    events: {
                                        change: function(evt) {
                                            return _vm_.onSearchSwipeExitChange(evt);
                                        }
                                    }
                                }
                            }, [])
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
