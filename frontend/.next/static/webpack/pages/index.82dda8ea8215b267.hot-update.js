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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/notes/NoteContext */ \"./context/notes/NoteContext.tsx\");\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Note */ \"./components/Note.tsx\");\n/* harmony import */ var _OpenNote_OpenNote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OpenNote/OpenNote */ \"./components/OpenNote/OpenNote.tsx\");\n\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Notes = function() {\n    _s();\n    var notes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        notes.fetchNotes();\n    }, []);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), noteModalOpen = ref[0], setNoteModalOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 sm:grid-cols-2 gap-2 mx-2 mt-2\",\n        children: [\n            notes.notes.map(function(note) {\n                return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, note), {\n                    key: note._id,\n                    __source: {\n                        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Notes.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 16\n                    },\n                    __self: _this\n                }));\n            }),\n            noteModalOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OpenNote_OpenNote__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setNoteModalOpen: setNoteModalOpen\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Notes.tsx\",\n                lineNumber: 21,\n                columnNumber: 24\n            }, _this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Notes.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(Notes, \"hIh20h3sXrSjGl1mzmSiiLCNpHs=\");\n_c = Notes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notes);\nvar _c;\n$RefreshReg$(_c, \"Notes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUErRDtBQUNSO0FBQzdCO0FBQ2lCO0FBRTNDLElBQU1PLEtBQUssR0FBRyxXQUFNOztJQUNsQixJQUFNQyxLQUFLLEdBQUdQLGlEQUFVLENBQUNHLGtFQUFXLENBQUM7SUFFckNGLGdEQUFTLENBQUMsV0FBTTtRQUNkTSxLQUFLLENBQUNDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQTBDTixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQWpETyxhQUFhLEdBQXNCUCxHQUFjLEdBQXBDLEVBQUVRLGdCQUFnQixHQUFJUixHQUFjLEdBQWxCO0lBRXRDLHFCQUNFLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpREFBaUQ7O1lBQzdETCxLQUFLLENBQUNBLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztnQkFDekIscUJBQU8scURBQUNWLDZDQUFJLDBLQUFLVSxJQUFJO29CQUFFQyxHQUFHLEVBQUVELElBQUksQ0FBQ0UsR0FBRzs7Ozs7OzttQkFBSSxDQUFDO1lBQzNDLENBQUMsQ0FBQztZQUVEUCxhQUFhLGlCQUFHLDhEQUFDSiwwREFBUTtnQkFBQ0ssZ0JBQWdCLEVBQUVBLGdCQUFnQjs7Ozs7cUJBQUksR0FBRyxJQUFJOzs7Ozs7YUFDcEUsQ0FDTjtBQUNKLENBQUM7R0FsQktKLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQW9CWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTm90ZXMudHN4PzMxMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBub3RlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub3Rlcy9Ob3RlQ29udGV4dFwiO1xuaW1wb3J0IE5vdGUgZnJvbSBcIi4vTm90ZVwiO1xuaW1wb3J0IE9wZW5Ob3RlIGZyb20gXCIuL09wZW5Ob3RlL09wZW5Ob3RlXCI7XG5cbmNvbnN0IE5vdGVzID0gKCkgPT4ge1xuICBjb25zdCBub3RlcyA9IHVzZUNvbnRleHQobm90ZUNvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbm90ZXMuZmV0Y2hOb3RlcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW25vdGVNb2RhbE9wZW4sIHNldE5vdGVNb2RhbE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTIgbXgtMiBtdC0yXCI+XG4gICAgICB7bm90ZXMubm90ZXMubWFwKChub3RlKSA9PiB7XG4gICAgICAgIHJldHVybiA8Tm90ZSB7Li4ubm90ZX0ga2V5PXtub3RlLl9pZH0gLz47XG4gICAgICB9KX1cblxuICAgICAge25vdGVNb2RhbE9wZW4gPyA8T3Blbk5vdGUgc2V0Tm90ZU1vZGFsT3Blbj17c2V0Tm90ZU1vZGFsT3Blbn0gLz4gOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90ZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJub3RlQ29udGV4dCIsIk5vdGUiLCJPcGVuTm90ZSIsIk5vdGVzIiwibm90ZXMiLCJmZXRjaE5vdGVzIiwibm90ZU1vZGFsT3BlbiIsInNldE5vdGVNb2RhbE9wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJub3RlIiwia2V5IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Notes.tsx\n"));

/***/ })

});