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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction EditNote(props) {\n    var handleUpdateNote = function handleUpdateNote() {\n        props.setEdittedNote(changedNote);\n    };\n    var handleChange = function handleChange(e) {\n        e.preventDefault();\n    };\n    _s();\n    var _edittedNote = props.edittedNote, title = _edittedNote.title, tag = _edittedNote.tag, description = _edittedNote.description;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: title,\n        tag: tag,\n        description: description\n    }), changedNote = ref[0], setChangedNote = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"title\",\n                defaultValue: title,\n                placeholder: \"Enter Title...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"tag\",\n                defaultValue: tag,\n                placeholder: \"Enter Tag...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"description\",\n                defaultValue: description,\n                placeholder: \"Enter the description.\",\n                className: \"h-40 outline-none px-2\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-slate-700 text-white px-2 py-2\",\n                onClick: handleUpdateNote,\n                children: \"Update Note\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(EditNote, \"D6Dhh95tjZ6UJO6AHD2//7/B/oM=\");\n_c = EditNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditNote);\nvar _c;\n$RefreshReg$(_c, \"EditNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5Ob3RlL0VkaXROb3RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF3QztBQUV4QyxTQUFTRSxRQUFRLENBQUNDLEtBQUssRUFBRTtRQUtkQyxnQkFBZ0IsR0FBekIsU0FBU0EsZ0JBQWdCLEdBQUc7UUFDMUJELEtBQUssQ0FBQ0UsY0FBYyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO1FBRVFDLFlBQVksR0FBckIsU0FBU0EsWUFBWSxDQUFDQyxDQUFDLEVBQUU7UUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7SUFWRCxJQUFvQ04sWUFBaUIsR0FBakJBLEtBQUssQ0FBQ08sV0FBVyxFQUE3Q0MsS0FBSyxHQUF1QlIsWUFBaUIsQ0FBN0NRLEtBQUssRUFBRUMsR0FBRyxHQUFrQlQsWUFBaUIsQ0FBdENTLEdBQUcsRUFBRUMsV0FBVyxHQUFLVixZQUFpQixDQUFqQ1UsV0FBVztJQUUvQixJQUFzQ1osR0FBcUMsR0FBckNBLCtDQUFRLENBQUM7UUFBRVUsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEdBQUcsRUFBSEEsR0FBRztRQUFFQyxXQUFXLEVBQVhBLFdBQVc7S0FBRSxDQUFDLEVBQXBFUCxXQUFXLEdBQW9CTCxHQUFxQyxHQUF6RCxFQUFFYSxjQUFjLEdBQUliLEdBQXFDLEdBQXpDO0lBVWxDLHFCQUNFLDhEQUFDYyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxxQkFBcUI7OzBCQUNsQyw4REFBQ0MsT0FBSztnQkFDSkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLElBQUksRUFBQyxPQUFPO2dCQUNaQyxZQUFZLEVBQUVULEtBQUs7Z0JBQ25CVSxXQUFXLEVBQUMsZ0JBQWdCO2dCQUM1QkwsU0FBUyxFQUFDLHFGQUFxRjtnQkFDL0ZNLFFBQVEsRUFBRWYsWUFBWTs7Ozs7b0JBQ3RCOzBCQUNGLDhEQUFDVSxPQUFLO2dCQUNKQyxJQUFJLEVBQUMsTUFBTTtnQkFDWEMsSUFBSSxFQUFDLEtBQUs7Z0JBQ1ZDLFlBQVksRUFBRVIsR0FBRztnQkFDakJTLFdBQVcsRUFBQyxjQUFjO2dCQUMxQkwsU0FBUyxFQUFDLHFGQUFxRjtnQkFDL0ZNLFFBQVEsRUFBRWYsWUFBWTs7Ozs7b0JBQ3RCOzBCQUNGLDhEQUFDZ0IsVUFBUTtnQkFDUEosSUFBSSxFQUFDLGFBQWE7Z0JBQ2xCQyxZQUFZLEVBQUVQLFdBQVc7Z0JBQ3pCUSxXQUFXLEVBQUMsd0JBQXdCO2dCQUNwQ0wsU0FBUyxFQUFDLHdCQUF3QjtnQkFDbENNLFFBQVEsRUFBRWYsWUFBWTs7Ozs7b0JBQ1o7MEJBQ1osOERBQUNpQixRQUFNO2dCQUNMTixJQUFJLEVBQUMsUUFBUTtnQkFDYkYsU0FBUyxFQUFDLG1DQUFtQztnQkFDN0NTLE9BQU8sRUFBRXJCLGdCQUFnQjswQkFDMUIsYUFFRDs7Ozs7b0JBQVM7Ozs7OztZQUNMLENBQ047QUFDSixDQUFDO0dBL0NRRixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFpRGpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcGVuTm90ZS9FZGl0Tm90ZS50c3g/NTQ0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEVkaXROb3RlKHByb3BzKSB7XHJcbiAgY29uc3QgeyB0aXRsZSwgdGFnLCBkZXNjcmlwdGlvbiB9ID0gcHJvcHMuZWRpdHRlZE5vdGU7XHJcblxyXG4gIGNvbnN0IFtjaGFuZ2VkTm90ZSwgc2V0Q2hhbmdlZE5vdGVdID0gdXNlU3RhdGUoeyB0aXRsZSwgdGFnLCBkZXNjcmlwdGlvbiB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlTm90ZSgpIHtcclxuICAgIHByb3BzLnNldEVkaXR0ZWROb3RlKGNoYW5nZWROb3RlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZS4uLlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiB0ZXh0LWJsYWNrIG91dGxpbmUtbm9uZSBweC0yIGZvY3VzOmJnLXNsYXRlLTMwMCBmb2N1czpib3JkZXItYi1zbGF0ZS03MDBcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwidGFnXCJcclxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RhZ31cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRhZy4uLlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiB0ZXh0LWJsYWNrIG91dGxpbmUtbm9uZSBweC0yIGZvY3VzOmJnLXNsYXRlLTMwMCBmb2N1czpib3JkZXItYi1zbGF0ZS03MDBcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBkZXNjcmlwdGlvbi5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImgtNDAgb3V0bGluZS1ub25lIHB4LTJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtNzAwIHRleHQtd2hpdGUgcHgtMiBweS0yXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGRhdGVOb3RlfVxyXG4gICAgICA+XHJcbiAgICAgICAgVXBkYXRlIE5vdGVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0Tm90ZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJFZGl0Tm90ZSIsInByb3BzIiwiaGFuZGxlVXBkYXRlTm90ZSIsInNldEVkaXR0ZWROb3RlIiwiY2hhbmdlZE5vdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJlZGl0dGVkTm90ZSIsInRpdGxlIiwidGFnIiwiZGVzY3JpcHRpb24iLCJzZXRDaGFuZ2VkTm90ZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OpenNote/EditNote.tsx\n"));

/***/ })

});