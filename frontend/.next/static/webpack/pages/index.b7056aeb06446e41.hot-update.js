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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NoteState; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoteContext */ \"./context/notes/NoteContext.tsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction NoteState(props) {\n    _s();\n    var host = \"http://localhost:13712\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), notes = ref[0], setNotes = ref[1];\n    //Get all notes\n    var fetchNotes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var response, json;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"api/notes/fetchNotes\"), {\n                                method: \"GET\",\n                                headers: {\n                                    Authorization: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDBmODc3MDRiMmFkOGVjYTc0YWM0In0sImlhdCI6MTY2NTYwMjkzOH0.Uopk1VBWZYw8_wVFwagDJ4B91tf-XUsl_T3iVj-WoMg\"\n                                }\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        json = _state.sent();\n                        console.log(json);\n                        setNotes(json);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchNotes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //TODO : delete this and all its references\n    var name = \"Test\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            name: name,\n            notes: notes\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/context/notes/NoteState.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(NoteState, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = NoteState;\nvar _c;\n$RefreshReg$(_c, \"NoteState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L25vdGVzL05vdGVTdGF0ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF3QztBQUNBO0FBRXpCLFNBQVNHLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFOztJQUN2QyxJQUFNQyxJQUFJLEdBQUcsd0JBQXdCO0lBQ3JDLElBQTBCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CSyxLQUFLLEdBQWNMLEdBQVksR0FBMUIsRUFBRU0sUUFBUSxHQUFJTixHQUFZLEdBQWhCO0lBRXRCLGVBQWU7SUFDZixJQUFNTyxVQUFVO21CQUFHLCtGQUEwQjtnQkFDckNDLFFBQVEsRUFPUkMsSUFBSTs7Ozt3QkFQTzs7NEJBQU1DLEtBQUssQ0FBQyxFQUFDLENBQU8sTUFBb0IsQ0FBekJOLElBQUksRUFBQyxzQkFBb0IsQ0FBQyxFQUFFO2dDQUMxRE8sTUFBTSxFQUFFLEtBQUs7Z0NBQ2JDLE9BQU8sRUFBRTtvQ0FDUEMsYUFBYSxFQUNYLGtLQUFrSztpQ0FDcks7NkJBQ0YsQ0FBQzswQkFBQTs7d0JBTklMLFFBQVEsR0FBRyxhQU1mO3dCQUNXOzs0QkFBTUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7MEJBQUE7O3dCQUE1QkEsSUFBSSxHQUFHLGFBQXFCO3dCQUNsQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNOLElBQUksQ0FBQyxDQUFDO3dCQUNsQkgsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQzs7Ozs7O1FBQ2pCLENBQUM7d0JBWEtGLFVBQVU7OztPQVdmO0lBRUQsMkNBQTJDO0lBQzNDLElBQU1TLElBQUksR0FBRyxNQUFNO0lBRW5CLHFCQUNFLDhEQUFDZiw2REFBb0I7UUFBQ2lCLEtBQUssRUFBRTtZQUFFRixJQUFJLEVBQUpBLElBQUk7WUFBRVgsS0FBSyxFQUFMQSxLQUFLO1NBQUU7a0JBQ3pDRixLQUFLLENBQUNnQixRQUFROzs7OztZQUNNLENBQ3ZCO0FBQ0osQ0FBQztHQTFCdUJqQixTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9ub3Rlcy9Ob3RlU3RhdGUudHN4P2ZmNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTm90ZUNvbnRleHQgZnJvbSBcIi4vTm90ZUNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZVN0YXRlKHByb3BzKSB7XG4gIGNvbnN0IGhvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTM3MTJcIjtcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy9HZXQgYWxsIG5vdGVzXG4gIGNvbnN0IGZldGNoTm90ZXMgPSBhc3luYyAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2hvc3R9YXBpL25vdGVzL2ZldGNoTm90ZXNgLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246XG4gICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOak0wTkRCbU9EYzNNRFJpTW1Ga09HVmpZVGMwWVdNMEluMHNJbWxoZENJNk1UWTJOVFl3TWprek9IMC5Vb3BrMVZCV1pZdzhfd1ZGd2FnREo0QjkxdGYtWFVzbF9UM2lWai1Xb01nXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coanNvbik7XG4gICAgc2V0Tm90ZXMoanNvbik7XG4gIH07XG5cbiAgLy9UT0RPIDogZGVsZXRlIHRoaXMgYW5kIGFsbCBpdHMgcmVmZXJlbmNlc1xuICBjb25zdCBuYW1lID0gXCJUZXN0XCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Tm90ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbmFtZSwgbm90ZXMgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Ob3RlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTm90ZUNvbnRleHQiLCJOb3RlU3RhdGUiLCJwcm9wcyIsImhvc3QiLCJub3RlcyIsInNldE5vdGVzIiwiZmV0Y2hOb3RlcyIsInJlc3BvbnNlIiwianNvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/notes/NoteState.tsx\n"));

/***/ })

});