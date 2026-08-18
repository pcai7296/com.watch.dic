export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createAppHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.watch.dic.w432","name":"腕上词典","versionName":"3.0.0","versionCode":6,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch","band"],"features":[{"name":"system.router"},{"name":"system.vibrator"},{"name":"system.device"},{"name":"system.file"},{"name":"system.storage"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":"device-width"},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"},"pages/search":{"component":"search"},"pages/results":{"component":"results"},"pages/detail":{"component":"detail"},"pages/records":{"component":"records"},"pages/about":{"component":"about"},"pages/sponsor":{"component":"sponsor"},"pages/filter":{"component":"filter"},"pages/settings":{"component":"settings"}}}}');
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
                (()=>{
                    var $app_style$ = [];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _default = exports.default = {
                            data: {
                                screenShape: "rect",
                                screenWidth: 432,
                                screenHeight: 514,
                                screenAspectRatio: 432 / 514,
                                screenProfile: "rect"
                            },
                            onCreate () {
                                console.log("app created");
                                console.log("fixed W432 screen: rect 432x514");
                            },
                            onDestroy () {
                                console.log("app destroyed");
                            }
                        };
                    };
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.style = $app_style$;
                    $app_exports$.default.manifest = __webpack_require__("./src/manifest.json");
                    var $translateStyle$ = function(value) {
                        if ('string' == typeof value) return Object.fromEntries(value.split(';').filter((item)=>Boolean(item && item.trim())).map((item)=>{
                            const matchs = item.match(/([^:]+):(.*)/);
                            if (matchs && matchs.length > 2) return [
                                matchs[1].trim().replace(/-([a-z])/g, (_, match)=>match.toUpperCase()),
                                matchs[2].trim()
                            ];
                            return [];
                        }));
                        return value;
                    };
                    __webpack_require__.g.$translateStyle$ = $translateStyle$;
                })();
            })();
        };
        return createAppHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L2pzb258ajpcXGNvZGVcXE1JIGJhbmRcXGNvbS53YXRjaC5kaWNcXC50ZW1wX2NvbS53YXRjaC5kaWMudzQzMlxcc3JjXFxtYW5pZmVzdC5qc29uIiwid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL+iFleS4iuivjeWFuC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8v6IWV5LiK6K+N5YW4L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL+iFleS4iuivjeWFuC9zcmMvYXBwLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gSlNPTi5wYXJzZSgne1wicGFja2FnZVwiOlwiY29tLndhdGNoLmRpYy53NDMyXCIsXCJuYW1lXCI6XCLohZXkuIror43lhbhcIixcInZlcnNpb25OYW1lXCI6XCIzLjAuMFwiLFwidmVyc2lvbkNvZGVcIjo2LFwibWluUGxhdGZvcm1WZXJzaW9uXCI6MTAwMCxcImljb25cIjpcIi9jb21tb24vbG9nby5wbmdcIixcImRldmljZVR5cGVMaXN0XCI6W1wid2F0Y2hcIixcImJhbmRcIl0sXCJmZWF0dXJlc1wiOlt7XCJuYW1lXCI6XCJzeXN0ZW0ucm91dGVyXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS52aWJyYXRvclwifSx7XCJuYW1lXCI6XCJzeXN0ZW0uZGV2aWNlXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5maWxlXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5zdG9yYWdlXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5wcm9tcHRcIn1dLFwiY29uZmlnXCI6e1wibG9nTGV2ZWxcIjpcImxvZ1wiLFwiZGVzaWduV2lkdGhcIjpcImRldmljZS13aWR0aFwifSxcInJvdXRlclwiOntcImVudHJ5XCI6XCJwYWdlcy9pbmRleFwiLFwicGFnZXNcIjp7XCJwYWdlcy9pbmRleFwiOntcImNvbXBvbmVudFwiOlwiaW5kZXhcIn0sXCJwYWdlcy9zZWFyY2hcIjp7XCJjb21wb25lbnRcIjpcInNlYXJjaFwifSxcInBhZ2VzL3Jlc3VsdHNcIjp7XCJjb21wb25lbnRcIjpcInJlc3VsdHNcIn0sXCJwYWdlcy9kZXRhaWxcIjp7XCJjb21wb25lbnRcIjpcImRldGFpbFwifSxcInBhZ2VzL3JlY29yZHNcIjp7XCJjb21wb25lbnRcIjpcInJlY29yZHNcIn0sXCJwYWdlcy9hYm91dFwiOntcImNvbXBvbmVudFwiOlwiYWJvdXRcIn0sXCJwYWdlcy9zcG9uc29yXCI6e1wiY29tcG9uZW50XCI6XCJzcG9uc29yXCJ9LFwicGFnZXMvZmlsdGVyXCI6e1wiY29tcG9uZW50XCI6XCJmaWx0ZXJcIn0sXCJwYWdlcy9zZXR0aW5nc1wiOntcImNvbXBvbmVudFwiOlwic2V0dGluZ3NcIn19fX0nKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTJcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMlwiOyIsIjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6IHtcbiAgICBzY3JlZW5TaGFwZTogXCJyZWN0XCIsXG4gICAgc2NyZWVuV2lkdGg6IDQzMixcbiAgICBzY3JlZW5IZWlnaHQ6IDUxNCxcbiAgICBzY3JlZW5Bc3BlY3RSYXRpbzogNDMyIC8gNTE0LFxuICAgIHNjcmVlblByb2ZpbGU6IFwicmVjdFwiXG4gIH0sXG5cbiAgb25DcmVhdGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJhcHAgY3JlYXRlZFwiKVxuICAgIGNvbnNvbGUubG9nKFwiZml4ZWQgVzQzMiBzY3JlZW46IHJlY3QgNDMyeDUxNFwiKVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImFwcCBkZXN0cm95ZWRcIilcbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiSlNPTiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93IiwiIiwiZGF0YSIsInNjcmVlblNoYXBlIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5Bc3BlY3RSYXRpbyIsInNjcmVlblByb2ZpbGUiLCJvbkNyZWF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7d0JBQUFBLE9BQU8sT0FBTyxHQUFHQyxLQUFLLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7b0JDQTVCQyxvQkFBb0IsQ0FBQyxHQUFHLEFBQUM7d0JBQ3hCLElBQUksQUFBc0IsWUFBdEIsT0FBT0MsWUFBeUIsT0FBT0E7d0JBQzNDLElBQUk7NEJBQ0gsT0FBTyxJQUFJLElBQUksSUFBSUMsU0FBUzt3QkFDN0IsRUFBRSxPQUFPQyxHQUFHOzRCQUNYLElBQUksQUFBa0IsWUFBbEIsT0FBT0MsUUFBcUIsT0FBT0E7d0JBQ3hDO29CQUNEOzs7b0JDUEFKLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozt3QkNDM0JLLElBQUFBLFdBQUFBLFFBQUFBLE9BQUFBLEdBQWU7NEJBQ2JDLE1BQU07Z0NBQ0pDLGFBQWE7Z0NBQ2JDLGFBQWE7Z0NBQ2JDLGNBQWM7Z0NBQ2RDLG1CQUFtQixNQUFNO2dDQUN6QkMsZUFBZTs0QkFDakI7NEJBRUFDO2dDQUNFQyxRQUFRQyxHQUFHLENBQUM7Z0NBQ1pELFFBQVFDLEdBQUcsQ0FBQzs0QkFDZDs0QkFFQUM7Z0NBQ0VGLFFBQVFDLEdBQUcsQ0FBQzs0QkFDZDt3QkFDRiJ9