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

/***/ "./components/OpenNote/OpenNote.tsx":
/*!******************************************!*\
  !*** ./components/OpenNote/OpenNote.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/index.js\");\n/* harmony import */ var _EditNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditNote */ \"./components/OpenNote/EditNote.tsx\");\n/* harmony import */ var _PreviewNote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreviewNote */ \"./components/OpenNote/PreviewNote.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar OpenNote = function(props) {\n    var closeModal = function closeModal() {\n        console.log(\"Closing modal\");\n        props.setNoteModalOpen(false);\n    };\n    var edittedNote = props.edittedNote, setEdittedNote = props.setEdittedNote;\n    var _id = edittedNote._id, tag = edittedNote.tag, title = edittedNote.title, description = edittedNote.description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0 w-full h-full z-[2] bg-slate-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__.XMarkIcon, {\n                className: \"h-5 cursor-pointer absolute right-2 font-bold\",\n                onClick: closeModal\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    tag,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    description,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditNote__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                edittedNote: edittedNote,\n                setEdittedNote: setEdittedNote,\n                closeModal: closeModal\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreviewNote__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                edittedNote: edittedNote\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = OpenNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OpenNote);\nvar _c;\n$RefreshReg$(_c, \"OpenNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5Ob3RlL09wZW5Ob3RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUM0QjtBQUNwQjtBQUNNO0FBRXhDLElBQU1JLFFBQVEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDakJDLFVBQVUsR0FBbkIsU0FBU0EsVUFBVSxHQUFHO1FBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QkgsS0FBSyxDQUFDSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBUUMsV0FBVyxHQUFxQkwsS0FBSyxDQUFyQ0ssV0FBVyxFQUFFQyxjQUFjLEdBQUtOLEtBQUssQ0FBeEJNLGNBQWM7SUFDbkMsSUFBUUMsR0FBRyxHQUE4QkYsV0FBVyxDQUE1Q0UsR0FBRyxFQUFFQyxHQUFHLEdBQXlCSCxXQUFXLENBQXZDRyxHQUFHLEVBQUVDLEtBQUssR0FBa0JKLFdBQVcsQ0FBbENJLEtBQUssRUFBRUMsV0FBVyxHQUFLTCxXQUFXLENBQTNCSyxXQUFXO0lBQ3BDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx3REFBd0Q7OzBCQUNyRSw4REFBQ2hCLGdFQUFTO2dCQUNSZ0IsU0FBUyxFQUFDLCtDQUErQztnQkFDekRDLE9BQU8sRUFBRVosVUFBVTs7Ozs7cUJBQ25COzBCQUNGLDhEQUFDYSxHQUFDOzBCQUFFTCxLQUFLOzs7OztxQkFBSzswQkFDZCw4REFBQ0ssR0FBQzs7b0JBQUMsR0FBQztvQkFBQ04sR0FBRztvQkFBQyxHQUFDOzs7Ozs7cUJBQUk7MEJBQ2QsOERBQUNNLEdBQUM7O29CQUFDLEdBQUM7b0JBQUNKLFdBQVc7b0JBQUMsR0FBQzs7Ozs7O3FCQUFJOzBCQUV0Qiw4REFBQ2IsaURBQVE7Z0JBQ1BRLFdBQVcsRUFBRUEsV0FBVztnQkFDeEJDLGNBQWMsRUFBRUEsY0FBYztnQkFDOUJMLFVBQVUsRUFBRUEsVUFBVTs7Ozs7cUJBQ3RCOzBCQUVGLDhEQUFDSCxvREFBVztnQkFBQ08sV0FBVyxFQUFFQSxXQUFXOzs7OztxQkFBSTs7Ozs7O2FBQ3JDLENBQ047QUFDSixDQUFDO0FBMUJLTixLQUFBQSxRQUFRO0FBNEJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcGVuTm90ZS9PcGVuTm90ZS50c3g/NzdhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFhNYXJrSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XHJcbmltcG9ydCBFZGl0Tm90ZSBmcm9tIFwiLi9FZGl0Tm90ZVwiO1xyXG5pbXBvcnQgUHJldmlld05vdGUgZnJvbSBcIi4vUHJldmlld05vdGVcIjtcclxuXHJcbmNvbnN0IE9wZW5Ob3RlID0gKHByb3BzKSA9PiB7XHJcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ2xvc2luZyBtb2RhbFwiKTtcclxuICAgIHByb3BzLnNldE5vdGVNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCB7IGVkaXR0ZWROb3RlLCBzZXRFZGl0dGVkTm90ZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBfaWQsIHRhZywgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBlZGl0dGVkTm90ZTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCB6LVsyXSBiZy1zbGF0ZS02MDBcIj5cclxuICAgICAgPFhNYXJrSWNvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImgtNSBjdXJzb3ItcG9pbnRlciBhYnNvbHV0ZSByaWdodC0yIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgb25DbGljaz17Y2xvc2VNb2RhbH1cclxuICAgICAgLz5cclxuICAgICAgPHA+e3RpdGxlfTwvcD5cclxuICAgICAgPHA+IHt0YWd9IDwvcD5cclxuICAgICAgPHA+IHtkZXNjcmlwdGlvbn0gPC9wPlxyXG4gICAgICB7LyogRWRpdCBOb3RlIENvbXBvbmVudCovfVxyXG4gICAgICA8RWRpdE5vdGVcclxuICAgICAgICBlZGl0dGVkTm90ZT17ZWRpdHRlZE5vdGV9XHJcbiAgICAgICAgc2V0RWRpdHRlZE5vdGU9e3NldEVkaXR0ZWROb3RlfVxyXG4gICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiBQcmV2aWV3IE5vdGUgQ29tcG9uZW50ICovfVxyXG4gICAgICA8UHJldmlld05vdGUgZWRpdHRlZE5vdGU9e2VkaXR0ZWROb3RlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZW5Ob3RlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJYTWFya0ljb24iLCJFZGl0Tm90ZSIsIlByZXZpZXdOb3RlIiwiT3Blbk5vdGUiLCJwcm9wcyIsImNsb3NlTW9kYWwiLCJjb25zb2xlIiwibG9nIiwic2V0Tm90ZU1vZGFsT3BlbiIsImVkaXR0ZWROb3RlIiwic2V0RWRpdHRlZE5vdGUiLCJfaWQiLCJ0YWciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OpenNote/OpenNote.tsx\n"));

/***/ })

});