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

/***/ "./components/OpenNote/EditNote.tsx":
/*!******************************************!*\
  !*** ./components/OpenNote/EditNote.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction EditNote(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"title\",\n                placeholder: \"Enter title...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"tag\",\n                placeholder: \"Enter Tag...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"description\",\n                placeholder: \"Enter the description.\",\n                className: \"h-40 outline-none px-2\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-slate-700 text-white px-2 py-2\",\n                children: \"Add Note\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = EditNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditNote);\nvar _c;\n$RefreshReg$(_c, \"EditNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5Ob3RlL0VkaXROb3RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQTBCO0FBRTFCLFNBQVNDLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3ZCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxlQUFlOzswQkFDNUIsOERBQUNDLE9BQUs7Z0JBQ0pDLElBQUksRUFBQyxNQUFNO2dCQUNYQyxJQUFJLEVBQUMsT0FBTztnQkFDWkMsV0FBVyxFQUFDLGdCQUFnQjtnQkFDNUJKLFNBQVMsRUFBQyxxRkFBcUY7Ozs7O29CQUUvRjswQkFDRiw4REFBQ0MsT0FBSztnQkFDSkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLElBQUksRUFBQyxLQUFLO2dCQUNWQyxXQUFXLEVBQUMsY0FBYztnQkFDMUJKLFNBQVMsRUFBQyxxRkFBcUY7Ozs7O29CQUUvRjswQkFDRiw4REFBQ0ssVUFBUTtnQkFDUEYsSUFBSSxFQUFDLGFBQWE7Z0JBQ2xCQyxXQUFXLEVBQUMsd0JBQXdCO2dCQUNwQ0osU0FBUyxFQUFDLHdCQUF3Qjs7Ozs7b0JBRXhCOzBCQUNaLDhEQUFDTSxRQUFNO2dCQUNMSixJQUFJLEVBQUMsUUFBUTtnQkFDYkYsU0FBUyxFQUFDLG1DQUFtQzswQkFFOUMsVUFFRDs7Ozs7b0JBQVM7Ozs7OztZQUNMLENBQ047QUFDSixDQUFDO0FBaENRSCxLQUFBQSxRQUFRO0FBa0NqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT3Blbk5vdGUvRWRpdE5vdGUudHN4PzU0NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRWRpdE5vdGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGl0bGUuLi5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgdGV4dC1ibGFjayBvdXRsaW5lLW5vbmUgcHgtMiBmb2N1czpiZy1zbGF0ZS0zMDAgZm9jdXM6Ym9yZGVyLWItc2xhdGUtNzAwXCJcclxuICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cInRhZ1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUYWcuLi5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgdGV4dC1ibGFjayBvdXRsaW5lLW5vbmUgcHgtMiBmb2N1czpiZy1zbGF0ZS0zMDAgZm9jdXM6Ym9yZGVyLWItc2xhdGUtNzAwXCJcclxuICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGRlc2NyaXB0aW9uLlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC00MCBvdXRsaW5lLW5vbmUgcHgtMlwiXHJcbiAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS03MDAgdGV4dC13aGl0ZSBweC0yIHB5LTJcIlxyXG4gICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZUFkZE5vdGV9XHJcbiAgICAgID5cclxuICAgICAgICBBZGQgTm90ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXROb3RlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJFZGl0Tm90ZSIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OpenNote/EditNote.tsx\n"));

/***/ })

});