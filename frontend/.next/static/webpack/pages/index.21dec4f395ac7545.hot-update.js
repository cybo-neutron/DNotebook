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

/***/ "./components/AddNote.tsx":
/*!********************************!*\
  !*** ./components/AddNote.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/notes/NoteContext */ \"./context/notes/NoteContext.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar AddNote = function() {\n    _s();\n    var notes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    var handleAddNote = function(e) {\n        e.preventDefault();\n        console.log(e.target);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"bg-slate-400 flex flex-col p-2 gap-2 mx-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"title\",\n                placeholder: \"Enter title...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/AddNote.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"tag\",\n                placeholder: \"Enter Tag...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/AddNote.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"description\",\n                placeholder: \"Enter the description.\",\n                className: \"h-40 outline-none px-2\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/AddNote.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-slate-700 text-white px-2 py-2\",\n                onClick: handleAddNote,\n                children: \"Add Note\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/AddNote.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/AddNote.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(AddNote, \"iixpwiQdeu8zRMrd2N8BeP5NN/k=\");\n_c = AddNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddNote);\nvar _c;\n$RefreshReg$(_c, \"AddNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZE5vdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBMEM7QUFDYTtBQUV2RCxJQUFNRyxPQUFPLEdBQUcsV0FBTTs7SUFDcEIsSUFBTUMsS0FBSyxHQUFHSCxpREFBVSxDQUFDQyxrRUFBVyxDQUFDO0lBRXJDLElBQU1HLGFBQWEsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDM0JBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQkFDRSw4REFBQ0MsTUFBSTtRQUFDQyxTQUFTLEVBQUMsMkNBQTJDOzswQkFDekQsOERBQUNDLE9BQUs7Z0JBQ0pDLElBQUksRUFBQyxNQUFNO2dCQUNYQyxJQUFJLEVBQUMsT0FBTztnQkFDWkMsV0FBVyxFQUFDLGdCQUFnQjtnQkFDNUJKLFNBQVMsRUFBQyxxRkFBcUY7Ozs7O3FCQUMvRjswQkFDRiw4REFBQ0MsT0FBSztnQkFDSkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLElBQUksRUFBQyxLQUFLO2dCQUNWQyxXQUFXLEVBQUMsY0FBYztnQkFDMUJKLFNBQVMsRUFBQyxxRkFBcUY7Ozs7O3FCQUMvRjswQkFDRiw4REFBQ0ssVUFBUTtnQkFDUEYsSUFBSSxFQUFDLGFBQWE7Z0JBQ2xCQyxXQUFXLEVBQUMsd0JBQXdCO2dCQUNwQ0osU0FBUyxFQUFDLHdCQUF3Qjs7Ozs7cUJBQ3hCOzBCQUNaLDhEQUFDTSxRQUFNO2dCQUNMSixJQUFJLEVBQUMsUUFBUTtnQkFDYkYsU0FBUyxFQUFDLG1DQUFtQztnQkFDN0NPLE9BQU8sRUFBRWQsYUFBYTswQkFDdkIsVUFFRDs7Ozs7cUJBQVM7Ozs7OzthQUNKLENBQ1A7QUFDSixDQUFDO0dBcENLRixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUFzQ2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZE5vdGUudHN4PzE1OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBub3RlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub3Rlcy9Ob3RlQ29udGV4dFwiO1xuXG5jb25zdCBBZGROb3RlID0gKCkgPT4ge1xuICBjb25zdCBub3RlcyA9IHVzZUNvbnRleHQobm90ZUNvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZE5vdGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJiZy1zbGF0ZS00MDAgZmxleCBmbGV4LWNvbCBwLTIgZ2FwLTIgbXgtMlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aXRsZS4uLlwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgdGV4dC1ibGFjayBvdXRsaW5lLW5vbmUgcHgtMiBmb2N1czpiZy1zbGF0ZS0zMDAgZm9jdXM6Ym9yZGVyLWItc2xhdGUtNzAwXCJcbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwidGFnXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUYWcuLi5cIlxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYi0yIHRleHQtYmxhY2sgb3V0bGluZS1ub25lIHB4LTIgZm9jdXM6Ymctc2xhdGUtMzAwIGZvY3VzOmJvcmRlci1iLXNsYXRlLTcwMFwiXG4gICAgICAvPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGRlc2NyaXB0aW9uLlwiXG4gICAgICAgIGNsYXNzTmFtZT1cImgtNDAgb3V0bGluZS1ub25lIHB4LTJcIlxuICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS03MDAgdGV4dC13aGl0ZSBweC0yIHB5LTJcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGROb3RlfVxuICAgICAgPlxuICAgICAgICBBZGQgTm90ZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTm90ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJub3RlQ29udGV4dCIsIkFkZE5vdGUiLCJub3RlcyIsImhhbmRsZUFkZE5vdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZm9ybSIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddNote.tsx\n"));

/***/ })

});