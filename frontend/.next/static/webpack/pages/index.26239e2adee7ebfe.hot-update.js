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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NoteState; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoteContext */ \"./context/notes/NoteContext.tsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction NoteState(props) {\n    _s();\n    var host = \"http://localhost:13712\";\n    //TODO : Replace the Authorization token with the real auth token\n    var authToken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDBmODc3MDRiMmFkOGVjYTc0YWM0In0sImlhdCI6MTY2NTYwMjkzOH0.Uopk1VBWZYw8_wVFwagDJ4B91tf-XUsl_T3iVj-WoMg\";\n    var initialNotes = [\n        {\n            _id: \"112323he\",\n            title: \"First Note\",\n            description: \"This is my first note\",\n            tag: \"personal\"\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialNotes), notes = ref[0], setNotes = ref[1];\n    //Get all notes\n    var fetchNotes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var response, json;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"/api/notes/fetchNotes\"), {\n                                method: \"GET\",\n                                headers: {\n                                    Authorization: authToken\n                                }\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json(\"\".concat(host, \"/api/notes/addNote\"), {\n                                method: \"POST\"\n                            })\n                        ];\n                    case 2:\n                        json = _state.sent();\n                        console.log(json);\n                        setNotes(json);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchNotes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //TODO : delete this and all its references\n    var name = \"Test\";\n    //Add note\n    var addNote = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(title, tag, description) {\n            var response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch()\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function addNote(title, tag, description) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            name: name,\n            notes: notes,\n            fetchNotes: fetchNotes\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/context/notes/NoteState.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(NoteState, \"HO4EwA+JZmRFI8CSCv5DAAAcyqM=\");\n_c = NoteState;\nvar _c;\n$RefreshReg$(_c, \"NoteState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L25vdGVzL05vdGVTdGF0ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF3QztBQUNBO0FBRXpCLFNBQVNHLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFOztJQUN2QyxJQUFNQyxJQUFJLEdBQUcsd0JBQXdCO0lBQ3JDLGlFQUFpRTtJQUNqRSxJQUFNQyxTQUFTLEdBQ2Isa0tBQWtLO0lBRXBLLElBQU1DLFlBQVksR0FBRztRQUNuQjtZQUNFQyxHQUFHLEVBQUUsVUFBVTtZQUNmQyxLQUFLLEVBQUUsWUFBWTtZQUNuQkMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQ0MsR0FBRyxFQUFFLFVBQVU7U0FDaEI7S0FDRjtJQUNELElBQTBCVixHQUFzQixHQUF0QkEsK0NBQVEsQ0FBQ00sWUFBWSxDQUFDLEVBQXpDSyxLQUFLLEdBQWNYLEdBQXNCLEdBQXBDLEVBQUVZLFFBQVEsR0FBSVosR0FBc0IsR0FBMUI7SUFFdEIsZUFBZTtJQUNmLElBQU1hLFVBQVU7bUJBQUcsK0ZBQTBCO2dCQUNyQ0MsUUFBUSxFQU1SQyxJQUFJOzs7O3dCQU5POzs0QkFBTUMsS0FBSyxDQUFDLEVBQUMsQ0FBTyxNQUFxQixDQUExQlosSUFBSSxFQUFDLHVCQUFxQixDQUFDLEVBQUU7Z0NBQzNEYSxNQUFNLEVBQUUsS0FBSztnQ0FDYkMsT0FBTyxFQUFFO29DQUNQQyxhQUFhLEVBQUVkLFNBQVM7aUNBQ3pCOzZCQUNGLENBQUM7MEJBQUE7O3dCQUxJUyxRQUFRLEdBQUcsYUFLZjt3QkFDVzs7NEJBQU1BLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLEVBQUMsQ0FBTyxNQUFrQixDQUF2QlgsSUFBSSxFQUFDLG9CQUFrQixDQUFDLEVBQUU7Z0NBQzVEYSxNQUFNLEVBQUUsTUFBTTs2QkFDZixDQUFDOzBCQUFBOzt3QkFGSUYsSUFBSSxHQUFHLGFBRVg7d0JBQ0ZLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLENBQUMsQ0FBQzt3QkFDbEJILFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7Ozs7OztRQUNqQixDQUFDO3dCQVpLRixVQUFVOzs7T0FZZjtJQUVELDJDQUEyQztJQUMzQyxJQUFNUyxJQUFJLEdBQUcsTUFBTTtJQUVuQixVQUFVO0lBQ1YsSUFBTUMsT0FBTzttQkFBRyw2RkFBT2YsS0FBSyxFQUFFRSxHQUFHLEVBQUVELFdBQVcsRUFBSztnQkFDM0NLLFFBQVE7Ozs7d0JBQUc7OzRCQUFNRSxLQUFLLEVBQUU7MEJBQUE7O3dCQUF4QkYsUUFBUSxHQUFHLGFBQWE7Ozs7OztRQUNoQyxDQUFDO3dCQUZLUyxPQUFPLENBQVVmLEtBQUssRUFBRUUsR0FBRyxFQUFFRCxXQUFXOzs7T0FFN0M7SUFFRCxxQkFDRSw4REFBQ1IsNkRBQW9CO1FBQUN3QixLQUFLLEVBQUU7WUFBRUgsSUFBSSxFQUFKQSxJQUFJO1lBQUVYLEtBQUssRUFBTEEsS0FBSztZQUFFRSxVQUFVLEVBQVZBLFVBQVU7U0FBRTtrQkFDckRWLEtBQUssQ0FBQ3VCLFFBQVE7Ozs7O1lBQ00sQ0FDdkI7QUFDSixDQUFDO0dBNUN1QnhCLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L25vdGVzL05vdGVTdGF0ZS50c3g/ZmY2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOb3RlQ29udGV4dCBmcm9tIFwiLi9Ob3RlQ29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlU3RhdGUocHJvcHMpIHtcbiAgY29uc3QgaG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzcxMlwiO1xuICAvL1RPRE8gOiBSZXBsYWNlIHRoZSBBdXRob3JpemF0aW9uIHRva2VuIHdpdGggdGhlIHJlYWwgYXV0aCB0b2tlblxuICBjb25zdCBhdXRoVG9rZW4gPVxuICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTmpNME5EQm1PRGMzTURSaU1tRmtPR1ZqWVRjMFlXTTBJbjBzSW1saGRDSTZNVFkyTlRZd01qa3pPSDAuVW9wazFWQldaWXc4X3dWRndhZ0RKNEI5MXRmLVhVc2xfVDNpVmotV29NZ1wiO1xuXG4gIGNvbnN0IGluaXRpYWxOb3RlcyA9IFtcbiAgICB7XG4gICAgICBfaWQ6IFwiMTEyMzIzaGVcIixcbiAgICAgIHRpdGxlOiBcIkZpcnN0IE5vdGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgbXkgZmlyc3Qgbm90ZVwiLFxuICAgICAgdGFnOiBcInBlcnNvbmFsXCIsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShpbml0aWFsTm90ZXMpO1xuXG4gIC8vR2V0IGFsbCBub3Rlc1xuICBjb25zdCBmZXRjaE5vdGVzID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9hcGkvbm90ZXMvZmV0Y2hOb3Rlc2AsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aFRva2VuLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbihgJHtob3N0fS9hcGkvbm90ZXMvYWRkTm90ZWAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coanNvbik7XG4gICAgc2V0Tm90ZXMoanNvbik7XG4gIH07XG5cbiAgLy9UT0RPIDogZGVsZXRlIHRoaXMgYW5kIGFsbCBpdHMgcmVmZXJlbmNlc1xuICBjb25zdCBuYW1lID0gXCJUZXN0XCI7XG5cbiAgLy9BZGQgbm90ZVxuICBjb25zdCBhZGROb3RlID0gYXN5bmMgKHRpdGxlLCB0YWcsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE5vdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5hbWUsIG5vdGVzLCBmZXRjaE5vdGVzIH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvTm90ZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5vdGVDb250ZXh0IiwiTm90ZVN0YXRlIiwicHJvcHMiLCJob3N0IiwiYXV0aFRva2VuIiwiaW5pdGlhbE5vdGVzIiwiX2lkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZyIsIm5vdGVzIiwic2V0Tm90ZXMiLCJmZXRjaE5vdGVzIiwicmVzcG9uc2UiLCJqc29uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWRkTm90ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/notes/NoteState.tsx\n"));

/***/ })

});