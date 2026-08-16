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
                            height: "48px",
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
                                "filter-list"
                            ]
                        ],
                        {
                            height: "430px",
                            marginBottom: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "filter-list-input"
                            ]
                        ],
                        {
                            height: "330px",
                            marginBottom: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "input-row"
                            ]
                        ],
                        {
                            height: "52px",
                            marginTop: "6px",
                            marginBottom: "8px",
                            paddingLeft: "14px",
                            paddingRight: "14px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#2f8cff",
                            borderRightColor: "#2f8cff",
                            borderBottomColor: "#2f8cff",
                            borderLeftColor: "#2f8cff",
                            borderRadius: "18px",
                            backgroundColor: "#08172b",
                            flexDirection: "column",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "input-text"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "36px",
                            color: "#ffffff",
                            fontSize: "26px",
                            fontWeight: 700,
                            textAlign: "left"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "input-text-rect"
                            ]
                        ],
                        {
                            fontSize: "22px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "record-card"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "80px",
                            marginBottom: "10px",
                            borderRadius: "20px",
                            backgroundColor: "#242424",
                            justifyContent: "center",
                            alignItems: "center"
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
                            alignItems: "center",
                            justifyContent: "center"
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
                            height: "38px",
                            color: "#ffffff",
                            fontSize: "28px",
                            fontWeight: 800,
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "delete-card"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "80px",
                            marginBottom: "10px",
                            borderRadius: "20px",
                            backgroundColor: "#c0392b",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "delete-title"
                            ]
                        ],
                        {
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
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        protected: {
                            currentFilter: "",
                            mode: "",
                            queryParam: ""
                        },
                        private: {
                            cardWidth: 188,
                            touchStartX: -1,
                            touchStartY: -1,
                            inputText: "",
                            screenProfile: "rect"
                        },
                        onInit () {
                            const sw = this.$app.$def.data.screenWidth || 212;
                            if (466 === sw) this.cardWidth = Math.round(sw / Math.SQRT2);
                            else this.cardWidth = sw - 20;
                            screenProfile: "rect";
                            if ("input" === this.mode) this.inputText = this.queryParam || "";
                        },
                        selectFilter (value) {
                            _system.default.replace({
                                uri: "/pages/records",
                                params: {
                                    type: "favorites",
                                    filterLetter: value
                                }
                            });
                        },
                        appendLetter (letter) {
                            this.inputText += letter;
                            _system2.default.set({
                                key: "dic_large_input",
                                value: this.inputText
                            });
                        },
                        deleteChar () {
                            if (this.inputText.length > 0) {
                                this.inputText = this.inputText.slice(0, -1);
                                _system2.default.set({
                                    key: "dic_large_input",
                                    value: this.inputText
                                });
                            }
                        },
                        onLetterTap (letter) {
                            if ("input" === this.mode) this.appendLetter(letter.toLowerCase());
                            else this.selectFilter(letter);
                        },
                        goBack () {
                            if ("input" === this.mode) {
                                _system2.default.set({
                                    key: "dic_large_input",
                                    value: ""
                                });
                                _system.default.replace({
                                    uri: "/pages/search",
                                    params: {
                                        queryParam: this.inputText
                                    }
                                });
                            } else _system.default.replace({
                                uri: "/pages/records",
                                params: {
                                    type: "favorites"
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
                            const sw = this.$app.$def.data.screenWidth || 212;
                            const startsInLeftQuarter = this.touchStartX <= 0.25 * sw;
                            const endsAtRightQuarter = endX >= 0.75 * sw;
                            const mostlyHorizontal = Math.abs(endY - this.touchStartY) <= 120;
                            if (startsInLeftQuarter && endsAtRightQuarter && mostlyHorizontal) return void _system.default.replace({
                                uri: "/pages/records",
                                params: {
                                    type: "favorites"
                                }
                            });
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
                                    return "input" === _vm_.mode;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "input-row input-row-" + _vm_.screenProfile;
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px;");
                                        }
                                    }
                                }, [
                                    aiot.__ce__("marquee", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: function() {
                                                const $classValue$ = "input-text input-text-" + _vm_.screenProfile;
                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                return $classValue$;
                                            },
                                            scrollamount: "40",
                                            direction: "left",
                                            loop: "-1",
                                            textOffset: "40",
                                            value: function() {
                                                return _vm_.inputText;
                                            }
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ce__("list", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: function() {
                                    const $classValue$ = "filter-list filter-list-" + _vm_.mode;
                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                    return $classValue$;
                                },
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px;");
                                }
                            }
                        }, [
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return "input" !== _vm_.mode;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("list-item", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            type: "filterRow",
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.selectFilter("\u5168\u90E8", evt);
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
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "record-title"
                                                        ],
                                                        value: "全部"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return "input" === _vm_.mode;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("list-item", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            type: "filterRow",
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-card",
                                                    "delete-card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.deleteChar(evt);
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
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "record-title",
                                                            "delete-title"
                                                        ],
                                                        value: "删除"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ])
                                ];
                            }),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("A", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "A"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("B", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "B"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("C", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "C"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("D", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "D"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("E", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "E"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("F", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "F"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("G", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "G"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("H", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "H"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("I", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "I"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("J", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "J"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("K", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "K"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("L", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "L"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("M", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "M"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("N", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "N"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("O", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "O"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("P", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "P"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("Q", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "Q"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("R", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "R"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("S", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "S"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("T", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "T"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("U", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "U"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("V", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "V"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("W", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "W"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("X", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "X"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("Y", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "Y"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "filterRow",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.cardWidth + "px; height: 90px;");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "record-card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onLetterTap("Z", evt);
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "record-title"
                                                ],
                                                value: "Z"
                                            }
                                        }, [])
                                    ])
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
