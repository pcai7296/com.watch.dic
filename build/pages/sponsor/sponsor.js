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
                                paddingLeft: "14px",
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: "12px"
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
                                    "sponsor-code"
                                ]
                            ],
                            {
                                width: "188px",
                                height: "188px",
                                marginTop: "68px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sponsor-caption"
                                ]
                            ],
                            {
                                marginTop: "16px",
                                color: "#ffffff",
                                fontSize: "22px",
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
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            private: {
                                touchStartX: -1,
                                touchStartY: -1
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
                            aiot.__ce__("image", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "sponsor-code"
                                    ],
                                    src: "/common/sponsor-code.png"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "sponsor-caption"
                                    ],
                                    value: "求喂饭"
                                }
                            }, [])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXHNwb25zb3JcXHNwb25zb3IuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly/ohZXkuIror43lhbgvc3JjL2NvbW1vbi9uYXZHdWFyZC5qcyIsIndlYnBhY2s6Ly/ohZXkuIror43lhbgvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly/ohZXkuIror43lhbgvc3JjL3BhZ2VzL3Nwb25zb3Ivc3BvbnNvci51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlr7zoiKrpmLLov57ngrnvvJrml7bpl7Tnqpflj6PlhoXlj6rmlL7ooYzkuIDmrKHpobXpnaLot7PovazvvIzpmLLmraLov57ngrnmiZPlvIDlpJrkuKrph43lpI3pobXpnaJcbi8vIO+8iOi/nueCueWQjOS4gOaMiemSruS8miBwdXNoIOWkmuS4qumhtemdouWunuS+i++8jOWvvOiHtOi/lOWbnumUrumcgOimgeWkmuaMieWHoOasoeaJjeiDveWbnuS4iuS4gOe6p++8iVxudmFyIGxhc3ROYXZBdCA9IDBcbnZhciBOQVZfTE9DS19NUyA9IDUwMFxuXG5leHBvcnQgZnVuY3Rpb24gbmF2R3VhcmQoKSB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgaWYgKG5vdyAtIGxhc3ROYXZBdCA8IE5BVl9MT0NLX01TKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgbGFzdE5hdkF0ID0gbm93XG4gIHJldHVybiB0cnVlXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjEyXCI7Iiwi77u/PHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlXCIgb250b3VjaHN0YXJ0PVwib25Ub3VjaFN0YXJ0XCIgb250b3VjaGVuZD1cIm9uVG91Y2hFbmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b3Atcm93XCI+XHJcbiAgICAgIDxpbWFnZSBjbGFzcz1cImJhY2stYnRuXCIgc3JjPVwiL2NvbW1vbi9pY29ucy9CYWNrX0IucG5nXCIgb25jbGljaz1cImdvQmFja1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aW1nIGNsYXNzPVwic3BvbnNvci1jb2RlXCIgc3JjPVwiL2NvbW1vbi9zcG9uc29yLWNvZGUucG5nXCIgLz5cclxuICAgIDx0ZXh0IGNsYXNzPVwic3BvbnNvci1jYXB0aW9uXCI+5rGC5ZaC6aWtPC90ZXh0PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxyXG5pbXBvcnQge25hdkd1YXJkfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdkd1YXJkXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcml2YXRlOiB7XHJcbiAgICB0b3VjaFN0YXJ0WDogLTEsXHJcbiAgICB0b3VjaFN0YXJ0WTogLTFcclxuICB9LFxyXG5cclxuICBnb0JhY2soKSB7XHJcbiAgICByb3V0ZXIuYmFjaygpXHJcbiAgfSxcclxuXHJcbiAgb25Ub3VjaFN0YXJ0KGV2dCkge1xyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLmdldFRvdWNoUG9pbnQoZXZ0KVxyXG4gICAgaWYgKHBvaW50KSB7XHJcbiAgICAgIHRoaXMudG91Y2hTdGFydFggPSBwb2ludC5jbGllbnRYXHJcbiAgICAgIHRoaXMudG91Y2hTdGFydFkgPSBwb2ludC5jbGllbnRZXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25Ub3VjaEVuZChldnQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2dClcclxuICAgIGlmICghcG9pbnQgfHwgdGhpcy50b3VjaFN0YXJ0WCA8IDApIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW5kWCA9IHBvaW50LmNsaWVudFhcclxuICAgIGNvbnN0IGVuZFkgPSBwb2ludC5jbGllbnRZXHJcbiAgICBjb25zdCBzdyA9IHRoaXMuJGFwcC4kZGVmLmRhdGEuc2NyZWVuV2lkdGggfHwgMjEyXHJcbiAgICBjb25zdCBzdGFydHNJbkxlZnRRdWFydGVyID0gdGhpcy50b3VjaFN0YXJ0WCA8PSBzdyAqIDAuMjVcclxuICAgIGNvbnN0IGVuZHNBdFJpZ2h0UXVhcnRlciA9IGVuZFggPj0gc3cgKiAwLjc1XHJcbiAgICBjb25zdCBtb3N0bHlIb3Jpem9udGFsID0gTWF0aC5hYnMoZW5kWSAtIHRoaXMudG91Y2hTdGFydFkpIDw9IDEyMFxyXG5cclxuICAgIGlmIChzdGFydHNJbkxlZnRRdWFydGVyICYmIGVuZHNBdFJpZ2h0UXVhcnRlciAmJiBtb3N0bHlIb3Jpem9udGFsKSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gLTFcclxuICAgIHRoaXMudG91Y2hTdGFydFkgPSAtMVxyXG4gIH0sXHJcblxyXG4gIGdldFRvdWNoUG9pbnQoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0ICYmIGV2dC5jaGFuZ2VkVG91Y2hlcyAmJiBldnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdXHJcbiAgICB9XHJcbiAgICBpZiAoZXZ0ICYmIGV2dC50b3VjaGVzICYmIGV2dC50b3VjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGV2dC50b3VjaGVzWzBdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA4MTM7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9wLXJvdyB7XHJcbiAgd2lkdGg6IDQzMnB4O1xyXG4gIGhlaWdodDogNzJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uc3BvbnNvci1jb2RlIHtcclxuICB3aWR0aDogMTg4cHg7XHJcbiAgaGVpZ2h0OiAxODhweDtcclxuICBtYXJnaW4tdG9wOiA2OHB4O1xyXG59XHJcblxyXG4uc3BvbnNvci1jYXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOlsibGFzdE5hdkF0IiwiTkFWX0xPQ0tfTVMiLCJuYXZHdWFyZCIsIm5vdyIsIkRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX25hdkd1YXJkIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoU3RhcnRZIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayIsIm9uVG91Y2hTdGFydCIsImV2dCIsInBvaW50IiwiZ2V0VG91Y2hQb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaEVuZCIsImVuZFgiLCJlbmRZIiwic3ciLCIkYXBwIiwiJGRlZiIsImRhdGEiLCJzY3JlZW5XaWR0aCIsInN0YXJ0c0luTGVmdFF1YXJ0ZXIiLCJlbmRzQXRSaWdodFF1YXJ0ZXIiLCJtb3N0bHlIb3Jpem9udGFsIiwiTWF0aCIsImFicyIsImNoYW5nZWRUb3VjaGVzIiwibGVuZ3RoIiwidG91Y2hlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBRUEsSUFBSUEsWUFBWTt3QkFDaEIsSUFBSUMsY0FBYzt3QkFFWCxTQUFTQzs0QkFDZCxNQUFNQyxNQUFNQyxLQUFLRCxHQUFHOzRCQUNwQixJQUFJQSxNQUFNSCxZQUFZQyxhQUNwQixPQUFPOzRCQUVURCxZQUFZRzs0QkFDWixPQUFPO3dCQUNUOzs7Ozs7Ozs7Ozs7OztvQkNaQUUsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDWTNCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFlBQUFDLG9CQUFBO3dCQUE4QyxTQUFBSCx1QkFBQUksQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUFBLElBQUFHLFdBQUFDLFFBQUFGLE9BQUEsR0FFL0I7NEJBQ2JHLFNBQVM7Z0NBQ1BDLGFBQWE7Z0NBQ2JDLGFBQWE7NEJBQ2Y7NEJBRUFDO2dDQUNFQyxRQUFBQSxPQUFNLENBQUNDLElBQUk7NEJBQ2I7NEJBRUFDLGNBQWFDLEdBQUc7Z0NBQ2QsTUFBTUMsUUFBUSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0Y7Z0NBQ2pDLElBQUlDLE9BQU87b0NBQ1QsSUFBSSxDQUFDUCxXQUFXLEdBQUdPLE1BQU1FLE9BQU87b0NBQ2hDLElBQUksQ0FBQ1IsV0FBVyxHQUFHTSxNQUFNRyxPQUFPO2dDQUNsQzs0QkFDRjs0QkFFQUMsWUFBV0wsR0FBRztnQ0FDWixNQUFNQyxRQUFRLElBQUksQ0FBQ0MsYUFBYSxDQUFDRjtnQ0FDakMsSUFBSSxDQUFDQyxTQUFTLElBQUksQ0FBQ1AsV0FBVyxHQUFHLEdBQy9CO2dDQUdGLE1BQU1ZLE9BQU9MLE1BQU1FLE9BQU87Z0NBQzFCLE1BQU1JLE9BQU9OLE1BQU1HLE9BQU87Z0NBQzFCLE1BQU1JLEtBQUssSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLElBQUk7Z0NBQzlDLE1BQU1DLHNCQUFzQixJQUFJLENBQUNuQixXQUFXLElBQUljLEFBQUssT0FBTEE7Z0NBQ2hELE1BQU1NLHFCQUFxQlIsUUFBUUUsQUFBSyxPQUFMQTtnQ0FDbkMsTUFBTU8sbUJBQW1CQyxLQUFLQyxHQUFHLENBQUNWLE9BQU8sSUFBSSxDQUFDWixXQUFXLEtBQUs7Z0NBRTlELElBQUlrQix1QkFBdUJDLHNCQUFzQkMsa0JBQy9DbEIsUUFBQUEsT0FBTSxDQUFDQyxJQUFJO2dDQUdiLElBQUksQ0FBQ0osV0FBVyxHQUFHO2dDQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBRzs0QkFDckI7NEJBRUFPLGVBQWNGLEdBQUc7Z0NBQ2YsSUFBSUEsT0FBT0EsSUFBSWtCLGNBQWMsSUFBSWxCLElBQUlrQixjQUFjLENBQUNDLE1BQU0sR0FBRyxHQUMzRCxPQUFPbkIsSUFBSWtCLGNBQWMsQ0FBQyxFQUFFO2dDQUU5QixJQUFJbEIsT0FBT0EsSUFBSW9CLE9BQU8sSUFBSXBCLElBQUlvQixPQUFPLENBQUNELE1BQU0sR0FBRyxHQUM3QyxPQUFPbkIsSUFBSW9CLE9BQU8sQ0FBQyxFQUFFO2dDQUV2QixPQUFPOzRCQUNUO3dCQUNGIn0=