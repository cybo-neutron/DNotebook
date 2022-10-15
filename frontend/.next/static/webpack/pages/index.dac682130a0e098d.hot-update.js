"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./context/notes/NoteState.tsx":
/*!*************************************!*\
  !*** ./context/notes/NoteState.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NoteState; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoteContext */ \"./context/notes/NoteContext.tsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction NoteState(props) {\n    _s();\n    var host = \"http://localhost:13712\";\n    //TODO : Replace the Authorization token with the real auth token\n    var authToken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDBmODc3MDRiMmFkOGVjYTc0YWM0In0sImlhdCI6MTY2NTYwMjkzOH0.Uopk1VBWZYw8_wVFwagDJ4B91tf-XUsl_T3iVj-WoMg\";\n    var initialNotes = [\n        {\n            _id: \"112323he\",\n            title: \"First Note\",\n            description: \"This is my first note\",\n            tag: \"personal\"\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialNotes), notes = ref[0], setNotes = ref[1];\n    //Get all notes\n    var fetchNotes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var response, json;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"/api/notes/fetchNotes\"), {\n                                method: \"GET\",\n                                headers: {\n                                    Authorization: authToken\n                                }\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        json = _state.sent();\n                        console.log(json);\n                        setNotes(json);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchNotes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //TODO : delete this and all its references\n    var name = \"Test\";\n    //Add note\n    var addNote = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(title, tag, description) {\n            var response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"/api/notes/fetchNotes\"), {\n                                method: \"POST\",\n                                headers: {\n                                    Authorization: authToken,\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify({\n                                    title: title,\n                                    tag: tag,\n                                    description: description\n                                })\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        console.log(\"Added note : \", response);\n                        return [\n                            4,\n                            fetchNotes()\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function addNote(title, tag, description) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            name: name,\n            notes: notes,\n            fetchNotes: fetchNotes,\n            addNote: addNote\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/context/notes/NoteState.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(NoteState, \"HO4EwA+JZmRFI8CSCv5DAAAcyqM=\");\n_c = NoteState;\nvar _c;\n$RefreshReg$(_c, \"NoteState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L25vdGVzL05vdGVTdGF0ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF3QztBQUNBO0FBRXpCLFNBQVNHLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFOztJQUN2QyxJQUFNQyxJQUFJLEdBQUcsd0JBQXdCO0lBQ3JDLGlFQUFpRTtJQUNqRSxJQUFNQyxTQUFTLEdBQ2Isa0tBQWtLO0lBRXBLLElBQU1DLFlBQVksR0FBRztRQUNuQjtZQUNFQyxHQUFHLEVBQUUsVUFBVTtZQUNmQyxLQUFLLEVBQUUsWUFBWTtZQUNuQkMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQ0MsR0FBRyxFQUFFLFVBQVU7U0FDaEI7S0FDRjtJQUNELElBQTBCVixHQUFzQixHQUF0QkEsK0NBQVEsQ0FBQ00sWUFBWSxDQUFDLEVBQXpDSyxLQUFLLEdBQWNYLEdBQXNCLEdBQXBDLEVBQUVZLFFBQVEsR0FBSVosR0FBc0IsR0FBMUI7SUFFdEIsZUFBZTtJQUNmLElBQU1hLFVBQVU7bUJBQUcsK0ZBQTBCO2dCQUNyQ0MsUUFBUSxFQU1SQyxJQUFJOzs7O3dCQU5POzs0QkFBTUMsS0FBSyxDQUFDLEVBQUMsQ0FBTyxNQUFxQixDQUExQlosSUFBSSxFQUFDLHVCQUFxQixDQUFDLEVBQUU7Z0NBQzNEYSxNQUFNLEVBQUUsS0FBSztnQ0FDYkMsT0FBTyxFQUFFO29DQUNQQyxhQUFhLEVBQUVkLFNBQVM7aUNBQ3pCOzZCQUNGLENBQUM7MEJBQUE7O3dCQUxJUyxRQUFRLEdBQUcsYUFLZjt3QkFDVzs7NEJBQU1BLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFOzBCQUFBOzt3QkFBNUJBLElBQUksR0FBRyxhQUFxQjt3QkFDbENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLENBQUMsQ0FBQzt3QkFDbEJILFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7Ozs7OztRQUNqQixDQUFDO3dCQVZLRixVQUFVOzs7T0FVZjtJQUVELDJDQUEyQztJQUMzQyxJQUFNUyxJQUFJLEdBQUcsTUFBTTtJQUVuQixVQUFVO0lBQ1YsSUFBTUMsT0FBTzttQkFBRyw2RkFBT2YsS0FBSyxFQUFFRSxHQUFHLEVBQUVELFdBQVcsRUFBSztnQkFDM0NLLFFBQVE7Ozs7d0JBQUc7OzRCQUFNRSxLQUFLLENBQUMsRUFBQyxDQUFPLE1BQXFCLENBQTFCWixJQUFJLEVBQUMsdUJBQXFCLENBQUMsRUFBRTtnQ0FDM0RhLE1BQU0sRUFBRSxNQUFNO2dDQUNkQyxPQUFPLEVBQUU7b0NBQ1BDLGFBQWEsRUFBRWQsU0FBUztvQ0FDeEIsY0FBYyxFQUFFLGtCQUFrQjtpQ0FDbkM7Z0NBQ0RtQixJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO29DQUFFbEIsS0FBSyxFQUFMQSxLQUFLO29DQUFFRSxHQUFHLEVBQUhBLEdBQUc7b0NBQUVELFdBQVcsRUFBWEEsV0FBVztpQ0FBRSxDQUFDOzZCQUNsRCxDQUFDOzBCQUFBOzt3QkFQSUssUUFBUSxHQUFHLGFBT2Y7d0JBQ0ZNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRVAsUUFBUSxDQUFDLENBQUM7d0JBQ3ZDOzs0QkFBTUQsVUFBVSxFQUFFOzBCQUFBOzt3QkFBbEIsYUFBa0IsQ0FBQzs7Ozs7O1FBQ3JCLENBQUM7d0JBWEtVLE9BQU8sQ0FBVWYsS0FBSyxFQUFFRSxHQUFHLEVBQUVELFdBQVc7OztPQVc3QztJQUVELHFCQUNFLDhEQUFDUiw2REFBb0I7UUFBQzJCLEtBQUssRUFBRTtZQUFFTixJQUFJLEVBQUpBLElBQUk7WUFBRVgsS0FBSyxFQUFMQSxLQUFLO1lBQUVFLFVBQVUsRUFBVkEsVUFBVTtZQUFFVSxPQUFPLEVBQVBBLE9BQU87U0FBRTtrQkFDOURwQixLQUFLLENBQUMwQixRQUFROzs7OztZQUNNLENBQ3ZCO0FBQ0osQ0FBQztHQW5EdUIzQixTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9ub3Rlcy9Ob3RlU3RhdGUudHN4P2ZmNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTm90ZUNvbnRleHQgZnJvbSBcIi4vTm90ZUNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZVN0YXRlKHByb3BzKSB7XG4gIGNvbnN0IGhvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTM3MTJcIjtcbiAgLy9UT0RPIDogUmVwbGFjZSB0aGUgQXV0aG9yaXphdGlvbiB0b2tlbiB3aXRoIHRoZSByZWFsIGF1dGggdG9rZW5cbiAgY29uc3QgYXV0aFRva2VuID1cbiAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5qTTBOREJtT0RjM01EUmlNbUZrT0dWallUYzBZV00wSW4wc0ltbGhkQ0k2TVRZMk5UWXdNamt6T0gwLlVvcGsxVkJXWll3OF93VkZ3YWdESjRCOTF0Zi1YVXNsX1QzaVZqLVdvTWdcIjtcblxuICBjb25zdCBpbml0aWFsTm90ZXMgPSBbXG4gICAge1xuICAgICAgX2lkOiBcIjExMjMyM2hlXCIsXG4gICAgICB0aXRsZTogXCJGaXJzdCBOb3RlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIG15IGZpcnN0IG5vdGVcIixcbiAgICAgIHRhZzogXCJwZXJzb25hbFwiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoaW5pdGlhbE5vdGVzKTtcblxuICAvL0dldCBhbGwgbm90ZXNcbiAgY29uc3QgZmV0Y2hOb3RlcyA9IGFzeW5jICgpOiBQcm9taXNlPGFueT4gPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aG9zdH0vYXBpL25vdGVzL2ZldGNoTm90ZXNgLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhUb2tlbixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICBzZXROb3Rlcyhqc29uKTtcbiAgfTtcblxuICAvL1RPRE8gOiBkZWxldGUgdGhpcyBhbmQgYWxsIGl0cyByZWZlcmVuY2VzXG4gIGNvbnN0IG5hbWUgPSBcIlRlc3RcIjtcblxuICAvL0FkZCBub3RlXG4gIGNvbnN0IGFkZE5vdGUgPSBhc3luYyAodGl0bGUsIHRhZywgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2hvc3R9L2FwaS9ub3Rlcy9mZXRjaE5vdGVzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aFRva2VuLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlLCB0YWcsIGRlc2NyaXB0aW9uIH0pLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiQWRkZWQgbm90ZSA6IFwiLCByZXNwb25zZSk7XG4gICAgYXdhaXQgZmV0Y2hOb3RlcygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE5vdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5hbWUsIG5vdGVzLCBmZXRjaE5vdGVzLCBhZGROb3RlIH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvTm90ZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5vdGVDb250ZXh0IiwiTm90ZVN0YXRlIiwicHJvcHMiLCJob3N0IiwiYXV0aFRva2VuIiwiaW5pdGlhbE5vdGVzIiwiX2lkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZyIsIm5vdGVzIiwic2V0Tm90ZXMiLCJmZXRjaE5vdGVzIiwicmVzcG9uc2UiLCJqc29uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWRkTm90ZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/notes/NoteState.tsx\n"));

/***/ })

});