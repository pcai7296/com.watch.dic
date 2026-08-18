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
                            lineHeight: "30px",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXHNldHRpbmdzXFxzZXR0aW5ncy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjEyXCI7Iiwi77u/PHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlIHBhZ2Ute3tzY3JlZW5Qcm9maWxlfX1cIiBvbnRvdWNoc3RhcnQ9XCJvblRvdWNoU3RhcnRcIiBvbnRvdWNoZW5kPVwib25Ub3VjaEVuZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvcC1yb3dcIj5cclxuICAgICAgPGltYWdlIGNsYXNzPVwiYmFjay1idG5cIiBzcmM9XCIvY29tbW9uL2ljb25zL0JhY2tfQi5wbmdcIiBvbmNsaWNrPVwiZ29CYWNrXCIgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwic2V0dGluZy10aXRsZVwiPuiLseaWh+i+k+WFpeiBlOaDszwvdGV4dD5cclxuICAgICAgPHN3aXRjaFxyXG4gICAgICAgIGNsYXNzPVwic3VnZ2VzdGlvbi1zd2l0Y2hcIlxyXG4gICAgICAgIGNoZWNrZWQ9XCJ7eyBlbmdsaXNoU3VnZ2VzdGlvbkVuYWJsZWQgfX1cIlxyXG4gICAgICAgIEBjaGFuZ2U9XCJvblN1Z2dlc3Rpb25DaGFuZ2VcIlxyXG4gICAgICA+PC9zd2l0Y2g+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwic2V0dGluZy10aXRsZSByZXN1bHQtaG9tZS10aXRsZVwiPue7k+aenOmhtemVv+aMiei/lOWbnuS4u+mhtTwvdGV4dD5cclxuICAgICAgPHN3aXRjaFxyXG4gICAgICAgIGNsYXNzPVwic3VnZ2VzdGlvbi1zd2l0Y2hcIlxyXG4gICAgICAgIGNoZWNrZWQ9XCJ7eyByZXN1bHRMb25nUHJlc3NIb21lRW5hYmxlZCB9fVwiXHJcbiAgICAgICAgQGNoYW5nZT1cIm9uUmVzdWx0TG9uZ1ByZXNzSG9tZUNoYW5nZVwiXHJcbiAgICAgID48L3N3aXRjaD5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1zd2lwZS10aXRsZVwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic2V0dGluZy10aXRsZVwiPuaQnOe0oui+k+WFpemhtTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInNldHRpbmctdGl0bGVcIj7lvLrliLbkuI3lj6/mu5HliqjpgIDlh7o8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3dpdGNoXHJcbiAgICAgICAgY2xhc3M9XCJzdWdnZXN0aW9uLXN3aXRjaFwiXHJcbiAgICAgICAgY2hlY2tlZD1cInt7IHNlYXJjaFN3aXBlRXhpdExvY2tlZCB9fVwiXHJcbiAgICAgICAgQGNoYW5nZT1cIm9uU2VhcmNoU3dpcGVFeGl0Q2hhbmdlXCJcclxuICAgICAgPjwvc3dpdGNoPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJAc3lzdGVtLnN0b3JhZ2VcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByaXZhdGU6IHtcclxuICAgIGVuZ2xpc2hTdWdnZXN0aW9uRW5hYmxlZDogdHJ1ZSxcclxuICAgIHJlc3VsdExvbmdQcmVzc0hvbWVFbmFibGVkOiB0cnVlLFxyXG4gICAgc2VhcmNoU3dpcGVFeGl0TG9ja2VkOiB0cnVlLFxyXG4gICAgc2NyZWVuUHJvZmlsZTogXCJyZWN0XCIsXHJcbiAgICBkZXN0cm95ZWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hTdGFydFg6IC0xLFxyXG4gICAgdG91Y2hTdGFydFk6IC0xXHJcbiAgfSxcclxuXHJcbiAgb25Jbml0KCkge1xyXG4gICAgc2NyZWVuUHJvZmlsZTogXCJyZWN0XCJcclxuICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAga2V5OiBcImRpY19lbmdsaXNoX3N1Z2dlc3Rpb25zXCIsXHJcbiAgICAgIGRlZmF1bHQ6IFwiMVwiLFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YSAmJiAoZGF0YS52YWx1ZSB8fCBkYXRhKVxyXG4gICAgICAgIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25FbmFibGVkID0gdmFsdWUgIT09IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChkYXRhLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5ncyBzdG9yYWdlLmdldCBmYWlsZWQ6IFwiICsgY29kZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAga2V5OiBcImRpY19yZXN1bHRfbG9uZ19wcmVzc19ob21lXCIsXHJcbiAgICAgIGRlZmF1bHQ6IFwiMVwiLFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YSAmJiAoZGF0YS52YWx1ZSB8fCBkYXRhKVxyXG4gICAgICAgIHRoaXMucmVzdWx0TG9uZ1ByZXNzSG9tZUVuYWJsZWQgPSB2YWx1ZSAhPT0gXCIwXCJcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGRhdGEsIGNvZGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmdzIHJlc3VsdCBsb25nIHByZXNzIGdldCBmYWlsZWQ6IFwiICsgY29kZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAga2V5OiBcImRpY19zZWFyY2hfc3dpcGVfZXhpdF9sb2NrZWRcIixcclxuICAgICAgZGVmYXVsdDogXCIxXCIsXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhICYmIChkYXRhLnZhbHVlIHx8IGRhdGEpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hTd2lwZUV4aXRMb2NrZWQgPSB2YWx1ZSAhPT0gXCIwXCJcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGRhdGEsIGNvZGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmdzIHNlYXJjaCBzd2lwZSBnZXQgZmFpbGVkOiBcIiArIGNvZGUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlXHJcbiAgfSxcclxuXHJcbiAgZ29CYWNrKCkge1xyXG4gICAgcm91dGVyLmJhY2soKVxyXG4gIH0sXHJcblxyXG4gIG9uU3VnZ2VzdGlvbkNoYW5nZShldnQpIHtcclxuICAgIHRoaXMuZW5nbGlzaFN1Z2dlc3Rpb25FbmFibGVkID0gISEoZXZ0ICYmIGV2dC5jaGVja2VkKVxyXG4gICAgdGhpcy5zYXZlU3dpdGNoKFwiZGljX2VuZ2xpc2hfc3VnZ2VzdGlvbnNcIiwgdGhpcy5lbmdsaXNoU3VnZ2VzdGlvbkVuYWJsZWQpXHJcbiAgfSxcclxuXHJcbiAgb25SZXN1bHRMb25nUHJlc3NIb21lQ2hhbmdlKGV2dCkge1xyXG4gICAgdGhpcy5yZXN1bHRMb25nUHJlc3NIb21lRW5hYmxlZCA9ICEhKGV2dCAmJiBldnQuY2hlY2tlZClcclxuICAgIHRoaXMuc2F2ZVN3aXRjaChcImRpY19yZXN1bHRfbG9uZ19wcmVzc19ob21lXCIsIHRoaXMucmVzdWx0TG9uZ1ByZXNzSG9tZUVuYWJsZWQpXHJcbiAgfSxcclxuXHJcbiAgb25TZWFyY2hTd2lwZUV4aXRDaGFuZ2UoZXZ0KSB7XHJcbiAgICB0aGlzLnNlYXJjaFN3aXBlRXhpdExvY2tlZCA9ICEhKGV2dCAmJiBldnQuY2hlY2tlZClcclxuICAgIHRoaXMuc2F2ZVN3aXRjaChcImRpY19zZWFyY2hfc3dpcGVfZXhpdF9sb2NrZWRcIiwgdGhpcy5zZWFyY2hTd2lwZUV4aXRMb2NrZWQpXHJcbiAgfSxcclxuXHJcbiAgc2F2ZVN3aXRjaChrZXksIGVuYWJsZWQpIHtcclxuICAgIHN0b3JhZ2Uuc2V0KHtcclxuICAgICAga2V5OiBrZXksXHJcbiAgICAgIHZhbHVlOiBlbmFibGVkID8gXCIxXCIgOiBcIjBcIixcclxuICAgICAgZmFpbDogKGRhdGEsIGNvZGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmdzIHN0b3JhZ2Uuc2V0IGZhaWxlZDogXCIgKyBjb2RlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uVG91Y2hTdGFydChldnQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2dClcclxuICAgIGlmIChwb2ludCkge1xyXG4gICAgICB0aGlzLnRvdWNoU3RhcnRYID0gcG9pbnQuY2xpZW50WFxyXG4gICAgICB0aGlzLnRvdWNoU3RhcnRZID0gcG9pbnQuY2xpZW50WVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uVG91Y2hFbmQoZXZ0KSB7XHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0VG91Y2hQb2ludChldnQpXHJcbiAgICBpZiAoIXBvaW50IHx8IHRoaXMudG91Y2hTdGFydFggPCAwKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgZW5kWCA9IHBvaW50LmNsaWVudFhcclxuICAgIGNvbnN0IGVuZFkgPSBwb2ludC5jbGllbnRZXHJcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHRoaXMuJGFwcC4kZGVmLmRhdGEuc2NyZWVuV2lkdGggfHwgMjEyXHJcbiAgICBjb25zdCBob3Jpem9udGFsID0gTWF0aC5hYnMoZW5kWSAtIHRoaXMudG91Y2hTdGFydFkpIDw9IDEyMFxyXG4gICAgaWYgKHRoaXMudG91Y2hTdGFydFggPD0gc2NyZWVuV2lkdGggKiAwLjI1ICYmIGVuZFggPj0gc2NyZWVuV2lkdGggKiAwLjc1ICYmIGhvcml6b250YWwpIHtcclxuICAgICAgcm91dGVyLmJhY2soKVxyXG4gICAgfVxyXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IC0xXHJcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gLTFcclxuICB9LFxyXG5cclxuICBnZXRUb3VjaFBvaW50KGV2dCkge1xyXG4gICAgaWYgKGV2dCAmJiBldnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZ0LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGV2dC5jaGFuZ2VkVG91Y2hlc1swXVxyXG4gICAgfVxyXG4gICAgaWYgKGV2dCAmJiBldnQudG91Y2hlcyAmJiBldnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBldnQudG91Y2hlc1swXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwODEzO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcC1yb3cge1xyXG4gIHdpZHRoOiA0MzJweDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTRweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZXR0aW5nLXRpdGxlIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWdnZXN0aW9uLXN3aXRjaCB7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGh1bWItY29sb3I6ICNmZmZmZmY7XHJcbiAgdHJhY2stY29sb3I6ICMwYjY1ZWE7XHJcbn1cclxuXHJcbi5yZXN1bHQtaG9tZS10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMzRweDtcclxufVxyXG5cclxuLnNlYXJjaC1zd2lwZS10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMzRweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLWNpcmNsZSB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJlbmdsaXNoU3VnZ2VzdGlvbkVuYWJsZWQiLCJyZXN1bHRMb25nUHJlc3NIb21lRW5hYmxlZCIsInNlYXJjaFN3aXBlRXhpdExvY2tlZCIsInNjcmVlblByb2ZpbGUiLCJkZXN0cm95ZWQiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoU3RhcnRZIiwib25Jbml0Iiwic3RvcmFnZSIsImdldCIsImtleSIsInN1Y2Nlc3MiLCJkYXRhIiwidmFsdWUiLCJmYWlsIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJvbkRlc3Ryb3kiLCJnb0JhY2siLCJyb3V0ZXIiLCJiYWNrIiwib25TdWdnZXN0aW9uQ2hhbmdlIiwiZXZ0IiwiY2hlY2tlZCIsInNhdmVTd2l0Y2giLCJvblJlc3VsdExvbmdQcmVzc0hvbWVDaGFuZ2UiLCJvblNlYXJjaFN3aXBlRXhpdENoYW5nZSIsImVuYWJsZWQiLCJzZXQiLCJvblRvdWNoU3RhcnQiLCJwb2ludCIsImdldFRvdWNoUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hFbmQiLCJlbmRYIiwiZW5kWSIsInNjcmVlbldpZHRoIiwiJGFwcCIsIiRkZWYiLCJob3Jpem9udGFsIiwiTWF0aCIsImFicyIsImNoYW5nZWRUb3VjaGVzIiwibGVuZ3RoIiwidG91Y2hlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ2lDM0IsSUFBQUMsVUFBQUMsdUJBQUFDLGVBQUE7b0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7b0JBQXFDLFNBQUFELHVCQUFBRyxDQUFBO3dCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTs0QkFBQUUsU0FBQUY7d0JBQUE7b0JBQUE7b0JBQUEsSUFBQUcsV0FBQUMsUUFBQUYsT0FBQSxHQUV0Qjt3QkFDYkcsU0FBUzs0QkFDUEMsMEJBQTBCOzRCQUMxQkMsNEJBQTRCOzRCQUM1QkMsdUJBQXVCOzRCQUN2QkMsZUFBZTs0QkFDZkMsV0FBVzs0QkFDWEMsYUFBYTs0QkFDYkMsYUFBYTt3QkFDZjt3QkFFQUM7NEJBQ0VKLGVBQWU7NEJBQ2ZLLFNBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO2dDQUNWQyxLQUFLO2dDQUNMZCxTQUFTO2dDQUNUZSxTQUFVQyxDQUFBQTtvQ0FDUixJQUFJLElBQUksQ0FBQ1IsU0FBUyxFQUNoQjtvQ0FFRixNQUFNUyxRQUFRRCxRQUFTQSxDQUFBQSxLQUFLQyxLQUFLLElBQUlELElBQUc7b0NBQ3hDLElBQUksQ0FBQ1osd0JBQXdCLEdBQUdhLEFBQVUsUUFBVkE7Z0NBQ2xDO2dDQUNBQyxNQUFNQSxDQUFDRixNQUFNRztvQ0FDWEMsUUFBUUMsR0FBRyxDQUFDLGtDQUFrQ0Y7Z0NBQ2hEOzRCQUNGOzRCQUNBUCxTQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQztnQ0FDVkMsS0FBSztnQ0FDTGQsU0FBUztnQ0FDVGUsU0FBVUMsQ0FBQUE7b0NBQ1IsSUFBSSxJQUFJLENBQUNSLFNBQVMsRUFDaEI7b0NBRUYsTUFBTVMsUUFBUUQsUUFBU0EsQ0FBQUEsS0FBS0MsS0FBSyxJQUFJRCxJQUFHO29DQUN4QyxJQUFJLENBQUNYLDBCQUEwQixHQUFHWSxBQUFVLFFBQVZBO2dDQUNwQztnQ0FDQUMsTUFBTUEsQ0FBQ0YsTUFBTUc7b0NBQ1hDLFFBQVFDLEdBQUcsQ0FBQyw0Q0FBNENGO2dDQUMxRDs0QkFDRjs0QkFDQVAsU0FBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUM7Z0NBQ1ZDLEtBQUs7Z0NBQ0xkLFNBQVM7Z0NBQ1RlLFNBQVVDLENBQUFBO29DQUNSLElBQUksSUFBSSxDQUFDUixTQUFTLEVBQ2hCO29DQUVGLE1BQU1TLFFBQVFELFFBQVNBLENBQUFBLEtBQUtDLEtBQUssSUFBSUQsSUFBRztvQ0FDeEMsSUFBSSxDQUFDVixxQkFBcUIsR0FBR1csQUFBVSxRQUFWQTtnQ0FDL0I7Z0NBQ0FDLE1BQU1BLENBQUNGLE1BQU1HO29DQUNYQyxRQUFRQyxHQUFHLENBQUMsdUNBQXVDRjtnQ0FDckQ7NEJBQ0Y7d0JBQ0Y7d0JBRUFHOzRCQUNFLElBQUksQ0FBQ2QsU0FBUyxHQUFHO3dCQUNuQjt3QkFFQWU7NEJBQ0VDLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSTt3QkFDYjt3QkFFQUMsb0JBQW1CQyxHQUFHOzRCQUNwQixJQUFJLENBQUN2Qix3QkFBd0IsR0FBRyxDQUFDLENBQUV1QixDQUFBQSxPQUFPQSxJQUFJQyxPQUFPLEFBQUQ7NEJBQ3BELElBQUksQ0FBQ0MsVUFBVSxDQUFDLDJCQUEyQixJQUFJLENBQUN6Qix3QkFBd0I7d0JBQzFFO3dCQUVBMEIsNkJBQTRCSCxHQUFHOzRCQUM3QixJQUFJLENBQUN0QiwwQkFBMEIsR0FBRyxDQUFDLENBQUVzQixDQUFBQSxPQUFPQSxJQUFJQyxPQUFPLEFBQUQ7NEJBQ3RELElBQUksQ0FBQ0MsVUFBVSxDQUFDLDhCQUE4QixJQUFJLENBQUN4QiwwQkFBMEI7d0JBQy9FO3dCQUVBMEIseUJBQXdCSixHQUFHOzRCQUN6QixJQUFJLENBQUNyQixxQkFBcUIsR0FBRyxDQUFDLENBQUVxQixDQUFBQSxPQUFPQSxJQUFJQyxPQUFPLEFBQUQ7NEJBQ2pELElBQUksQ0FBQ0MsVUFBVSxDQUFDLGdDQUFnQyxJQUFJLENBQUN2QixxQkFBcUI7d0JBQzVFO3dCQUVBdUIsWUFBV2YsR0FBRyxFQUFFa0IsT0FBTzs0QkFDckJwQixTQUFBQSxPQUFPLENBQUNxQixHQUFHLENBQUM7Z0NBQ1ZuQixLQUFLQTtnQ0FDTEcsT0FBT2UsVUFBVSxNQUFNO2dDQUN2QmQsTUFBTUEsQ0FBQ0YsTUFBTUc7b0NBQ1hDLFFBQVFDLEdBQUcsQ0FBQyxrQ0FBa0NGO2dDQUNoRDs0QkFDRjt3QkFDRjt3QkFFQWUsY0FBYVAsR0FBRzs0QkFDZCxNQUFNUSxRQUFRLElBQUksQ0FBQ0MsYUFBYSxDQUFDVDs0QkFDakMsSUFBSVEsT0FBTztnQ0FDVCxJQUFJLENBQUMxQixXQUFXLEdBQUcwQixNQUFNRSxPQUFPO2dDQUNoQyxJQUFJLENBQUMzQixXQUFXLEdBQUd5QixNQUFNRyxPQUFPOzRCQUNsQzt3QkFDRjt3QkFFQUMsWUFBV1osR0FBRzs0QkFDWixNQUFNUSxRQUFRLElBQUksQ0FBQ0MsYUFBYSxDQUFDVDs0QkFDakMsSUFBSSxDQUFDUSxTQUFTLElBQUksQ0FBQzFCLFdBQVcsR0FBRyxHQUMvQjs0QkFFRixNQUFNK0IsT0FBT0wsTUFBTUUsT0FBTzs0QkFDMUIsTUFBTUksT0FBT04sTUFBTUcsT0FBTzs0QkFDMUIsTUFBTUksY0FBYyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDNUIsSUFBSSxDQUFDMEIsV0FBVyxJQUFJOzRCQUN2RCxNQUFNRyxhQUFhQyxLQUFLQyxHQUFHLENBQUNOLE9BQU8sSUFBSSxDQUFDL0IsV0FBVyxLQUFLOzRCQUN4RCxJQUFJLElBQUksQ0FBQ0QsV0FBVyxJQUFJaUMsQUFBYyxPQUFkQSxlQUFzQkYsUUFBUUUsQUFBYyxPQUFkQSxlQUFzQkcsWUFDMUVyQixRQUFBQSxPQUFNLENBQUNDLElBQUk7NEJBRWIsSUFBSSxDQUFDaEIsV0FBVyxHQUFHOzRCQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBRzt3QkFDckI7d0JBRUEwQixlQUFjVCxHQUFHOzRCQUNmLElBQUlBLE9BQU9BLElBQUlxQixjQUFjLElBQUlyQixJQUFJcUIsY0FBYyxDQUFDQyxNQUFNLEdBQUcsR0FDM0QsT0FBT3RCLElBQUlxQixjQUFjLENBQUMsRUFBRTs0QkFFOUIsSUFBSXJCLE9BQU9BLElBQUl1QixPQUFPLElBQUl2QixJQUFJdUIsT0FBTyxDQUFDRCxNQUFNLEdBQUcsR0FDN0MsT0FBT3RCLElBQUl1QixPQUFPLENBQUMsRUFBRTs0QkFFdkIsT0FBTzt3QkFDVDtvQkFDRiJ9