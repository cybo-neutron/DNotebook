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

/***/ "./components/Notes.tsx":
/*!******************************!*\
  !*** ./components/Notes.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/notes/NoteContext */ \"./context/notes/NoteContext.tsx\");\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Note */ \"./components/Note.tsx\");\n\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar Notes = function() {\n    _s();\n    var notes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        notes.fetchNotes();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 sm:grid-cols-2 gap-2 mx-2 mt-2\",\n        children: notes.notes.map(function(note) {\n            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, note), {\n                key: note._id,\n                __source: {\n                    fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Notes.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 16\n                },\n                __self: _this\n            }));\n        })\n    }, void 0, false, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Notes.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(Notes, \"vHxBrAIfae7c8I4uYjtHPtSrFkE=\");\n_c = Notes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notes);\nvar _c;\n$RefreshReg$(_c, \"Notes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQXFEO0FBQ0U7QUFDN0I7QUFFMUIsSUFBTUssS0FBSyxHQUFHLFdBQU07O0lBQ2xCLElBQU1DLEtBQUssR0FBR0wsaURBQVUsQ0FBQ0Usa0VBQVcsQ0FBQztJQUVyQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RJLEtBQUssQ0FBQ0MsVUFBVSxFQUFFLENBQUM7SUFDckIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGlEQUFpRDtrQkFDN0RILEtBQUssQ0FBQ0EsS0FBSyxDQUFDSSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1lBQ3pCLHFCQUFPLHFEQUFDUCw2Q0FBSSwwS0FBS08sSUFBSTtnQkFBRUMsR0FBRyxFQUFFRCxJQUFJLENBQUNFLEdBQUc7Ozs7Ozs7ZUFBSSxDQUFDO1FBQzNDLENBQUMsQ0FBQzs7Ozs7YUFDRSxDQUNOO0FBQ0osQ0FBQztHQWRLUixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUFnQlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05vdGVzLnRzeD8zMTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBub3RlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub3Rlcy9Ob3RlQ29udGV4dFwiO1xuaW1wb3J0IE5vdGUgZnJvbSBcIi4vTm90ZVwiO1xuXG5jb25zdCBOb3RlcyA9ICgpID0+IHtcbiAgY29uc3Qgbm90ZXMgPSB1c2VDb250ZXh0KG5vdGVDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5vdGVzLmZldGNoTm90ZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC0yIG14LTIgbXQtMlwiPlxuICAgICAge25vdGVzLm5vdGVzLm1hcCgobm90ZSkgPT4ge1xuICAgICAgICByZXR1cm4gPE5vdGUgey4uLm5vdGV9IGtleT17bm90ZS5faWR9IC8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJub3RlQ29udGV4dCIsIk5vdGUiLCJOb3RlcyIsIm5vdGVzIiwiZmV0Y2hOb3RlcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm5vdGUiLCJrZXkiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Notes.tsx\n"));

/***/ })

});