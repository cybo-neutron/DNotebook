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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/index.js\");\n/* harmony import */ var _EditNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditNote */ \"./components/OpenNote/EditNote.tsx\");\n/* harmony import */ var _PreviewNote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreviewNote */ \"./components/OpenNote/PreviewNote.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar OpenNote = function(props) {\n    var closeModal = function closeModal() {\n        console.log(\"Closing modal\");\n        props.setNoteModalOpen(false);\n    };\n    var edittedNote = props.edittedNote, setEdittedNote = props.setEdittedNote;\n    var _id = edittedNote._id, tag = edittedNote.tag, title = edittedNote.title, description = edittedNote.description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0 w-full h-full z-[2] bg-slate-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__.XMarkIcon, {\n                className: \"h-5 cursor-pointer absolute right-2 font-bold\",\n                onClick: closeModal\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditNote__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        edittedNote: edittedNote,\n                        setEdittedNote: setEdittedNote\n                    }, void 0, false, {\n                        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreviewNote__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        edittedNote: edittedNote\n                    }, void 0, false, {\n                        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/OpenNote.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = OpenNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OpenNote);\nvar _c;\n$RefreshReg$(_c, \"OpenNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5Ob3RlL09wZW5Ob3RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUM0QjtBQUNwQjtBQUNNO0FBRXhDLElBQU1JLFFBQVEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDakJDLFVBQVUsR0FBbkIsU0FBU0EsVUFBVSxHQUFHO1FBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QkgsS0FBSyxDQUFDSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBUUMsV0FBVyxHQUFxQkwsS0FBSyxDQUFyQ0ssV0FBVyxFQUFFQyxjQUFjLEdBQUtOLEtBQUssQ0FBeEJNLGNBQWM7SUFDbkMsSUFBUUMsR0FBRyxHQUE4QkYsV0FBVyxDQUE1Q0UsR0FBRyxFQUFFQyxHQUFHLEdBQXlCSCxXQUFXLENBQXZDRyxHQUFHLEVBQUVDLEtBQUssR0FBa0JKLFdBQVcsQ0FBbENJLEtBQUssRUFBRUMsV0FBVyxHQUFLTCxXQUFXLENBQTNCSyxXQUFXO0lBQ3BDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx3REFBd0Q7OzBCQUNyRSw4REFBQ2hCLGdFQUFTO2dCQUNSZ0IsU0FBUyxFQUFDLCtDQUErQztnQkFDekRDLE9BQU8sRUFBRVosVUFBVTs7Ozs7cUJBQ25COzBCQUVGLDhEQUFDVSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsa0JBQWtCOztrQ0FFL0IsOERBQUNmLGlEQUFRO3dCQUFDUSxXQUFXLEVBQUVBLFdBQVc7d0JBQUVDLGNBQWMsRUFBRUEsY0FBYzs7Ozs7NkJBQUk7a0NBRXRFLDhEQUFDUixvREFBVzt3QkFBQ08sV0FBVyxFQUFFQSxXQUFXOzs7Ozs2QkFBSTs7Ozs7O3FCQUNyQzs7Ozs7O2FBQ0YsQ0FDTjtBQUNKLENBQUM7QUF0QktOLEtBQUFBLFFBQVE7QUF3QmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL09wZW5Ob3RlL09wZW5Ob3RlLnRzeD83N2FmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgWE1hcmtJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcclxuaW1wb3J0IEVkaXROb3RlIGZyb20gXCIuL0VkaXROb3RlXCI7XHJcbmltcG9ydCBQcmV2aWV3Tm90ZSBmcm9tIFwiLi9QcmV2aWV3Tm90ZVwiO1xyXG5cclxuY29uc3QgT3Blbk5vdGUgPSAocHJvcHMpID0+IHtcclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJDbG9zaW5nIG1vZGFsXCIpO1xyXG4gICAgcHJvcHMuc2V0Tm90ZU1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IHsgZWRpdHRlZE5vdGUsIHNldEVkaXR0ZWROb3RlIH0gPSBwcm9wcztcclxuICBjb25zdCB7IF9pZCwgdGFnLCB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IGVkaXR0ZWROb3RlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIHotWzJdIGJnLXNsYXRlLTYwMFwiPlxyXG4gICAgICA8WE1hcmtJY29uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC01IGN1cnNvci1wb2ludGVyIGFic29sdXRlIHJpZ2h0LTIgZm9udC1ib2xkXCJcclxuICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgey8qIEVkaXQgTm90ZSBDb21wb25lbnQqL31cclxuICAgICAgICA8RWRpdE5vdGUgZWRpdHRlZE5vdGU9e2VkaXR0ZWROb3RlfSBzZXRFZGl0dGVkTm90ZT17c2V0RWRpdHRlZE5vdGV9IC8+XHJcbiAgICAgICAgey8qIFByZXZpZXcgTm90ZSBDb21wb25lbnQgKi99XHJcbiAgICAgICAgPFByZXZpZXdOb3RlIGVkaXR0ZWROb3RlPXtlZGl0dGVkTm90ZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3Blbk5vdGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlhNYXJrSWNvbiIsIkVkaXROb3RlIiwiUHJldmlld05vdGUiLCJPcGVuTm90ZSIsInByb3BzIiwiY2xvc2VNb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJzZXROb3RlTW9kYWxPcGVuIiwiZWRpdHRlZE5vdGUiLCJzZXRFZGl0dGVkTm90ZSIsIl9pZCIsInRhZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OpenNote/OpenNote.tsx\n"));

/***/ })

});