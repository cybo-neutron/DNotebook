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

/***/ "./components/OpenNote/PreviewNote.tsx":
/*!*********************************************!*\
  !*** ./components/OpenNote/PreviewNote.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PreviewNote(props) {\n    var _id = props._id, title = props.title, tag = props.tag, description = props.description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: _id\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/PreviewNote.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    title,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/PreviewNote.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    tag,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/PreviewNote.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    description,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/PreviewNote.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/PreviewNote.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = PreviewNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PreviewNote);\nvar _c;\n$RefreshReg$(_c, \"PreviewNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5Ob3RlL1ByZXZpZXdOb3RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQTBCO0FBRTFCLFNBQVNDLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFO0lBQzFCLElBQVFDLEdBQUcsR0FBOEJELEtBQUssQ0FBdENDLEdBQUcsRUFBRUMsS0FBSyxHQUF1QkYsS0FBSyxDQUFqQ0UsS0FBSyxFQUFFQyxHQUFHLEdBQWtCSCxLQUFLLENBQTFCRyxHQUFHLEVBQUVDLFdBQVcsR0FBS0osS0FBSyxDQUFyQkksV0FBVztJQUNwQyxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLEdBQUM7MEJBQUVMLEdBQUc7Ozs7O29CQUFLOzBCQUNaLDhEQUFDSyxHQUFDOztvQkFBQyxHQUFDO29CQUFDSixLQUFLO29CQUFDLEdBQUM7Ozs7OztvQkFBSTswQkFDaEIsOERBQUNJLEdBQUM7O29CQUFDLEdBQUM7b0JBQUNILEdBQUc7b0JBQUMsR0FBQzs7Ozs7O29CQUFJOzBCQUNkLDhEQUFDRyxHQUFDOztvQkFBQyxHQUFDO29CQUFDRixXQUFXO29CQUFDLEdBQUM7Ozs7OztvQkFBSTs7Ozs7O1lBQ2xCLENBQ047QUFDSixDQUFDO0FBVlFMLEtBQUFBLFdBQVc7QUFZcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL09wZW5Ob3RlL1ByZXZpZXdOb3RlLnRzeD9hMTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFByZXZpZXdOb3RlKHByb3BzKSB7XHJcbiAgY29uc3QgeyBfaWQsIHRpdGxlLCB0YWcsIGRlc2NyaXB0aW9uIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+e19pZH08L3A+XHJcbiAgICAgIDxwPiB7dGl0bGV9IDwvcD5cclxuICAgICAgPHA+IHt0YWd9IDwvcD5cclxuICAgICAgPHA+IHtkZXNjcmlwdGlvbn0gPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJldmlld05vdGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByZXZpZXdOb3RlIiwicHJvcHMiLCJfaWQiLCJ0aXRsZSIsInRhZyIsImRlc2NyaXB0aW9uIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/OpenNote/PreviewNote.tsx\n"));

/***/ })

});