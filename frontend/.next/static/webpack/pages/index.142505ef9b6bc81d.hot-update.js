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

/***/ "./components/Note.tsx":
/*!*****************************!*\
  !*** ./components/Note.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Note; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/index.js\");\n/* harmony import */ var _context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/notes/NoteContext */ \"./context/notes/NoteContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Note(param) {\n    var title = param.title, description = param.description, tag = param.tag, _id = param._id, setNoteModalOpen = param.setNoteModalOpen, setEdittedNote = param.setEdittedNote;\n    _s();\n    var notes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    var handleDelete = function(e) {\n        e.stopPropagation();\n        notes.deleteNote(_id);\n    };\n    var handlePreview = function() {\n        setEdittedNote({\n            _id: _id,\n            title: title,\n            tag: tag,\n            description: description\n        });\n        setNoteModalOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-slate-400 p-2 rounded-sm shadow-xl cursor-pointer\",\n        onClick: handlePreview,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-bold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Note.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: tag\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Note.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"flex-grow\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Note.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.TrashIcon, {\n                        className: \"h-5 text-slate-700 cursor-pointer mt-2\",\n                        onClick: handleDelete\n                    }, void 0, false, {\n                        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Note.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.PencilSquareIcon, {\n                        className: \"h-5 text-slate-700 cursor-pointer mt-2\",\n                        onClick: function() {\n                            console.log(\"Hello\");\n                        }\n                    }, void 0, false, {\n                        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Note.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Note.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/Note.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Note, \"iixpwiQdeu8zRMrd2N8BeP5NN/k=\");\n_c = Note;\nvar _c;\n$RefreshReg$(_c, \"Note\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEM7QUFDOEI7QUFDakI7QUFFeEMsU0FBU0ssSUFBSSxDQUFDLEtBTzVCLEVBQUU7UUFOREMsS0FBSyxHQURzQixLQU81QixDQU5DQSxLQUFLLEVBQ0xDLFdBQVcsR0FGZ0IsS0FPNUIsQ0FMQ0EsV0FBVyxFQUNYQyxHQUFHLEdBSHdCLEtBTzVCLENBSkNBLEdBQUcsRUFDSEMsR0FBRyxHQUp3QixLQU81QixDQUhDQSxHQUFHLEVBQ0hDLGdCQUFnQixHQUxXLEtBTzVCLENBRkNBLGdCQUFnQixFQUNoQkMsY0FBYyxHQU5hLEtBTzVCLENBRENBLGNBQWM7O0lBRWQsSUFBTUMsS0FBSyxHQUFHWCxpREFBVSxDQUFDRyxrRUFBVyxDQUFDO0lBQ3JDLElBQU1TLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDMUJBLENBQUMsQ0FBQ0MsZUFBZSxFQUFFLENBQUM7UUFDcEJILEtBQUssQ0FBQ0ksVUFBVSxDQUFDUCxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBTVEsYUFBYSxHQUFHLFdBQU07UUFDMUJOLGNBQWMsQ0FBQztZQUFFRixHQUFHLEVBQUhBLEdBQUc7WUFBRUgsS0FBSyxFQUFMQSxLQUFLO1lBQUVFLEdBQUcsRUFBSEEsR0FBRztZQUFFRCxXQUFXLEVBQVhBLFdBQVc7U0FBRSxDQUFDLENBQUM7UUFDakRHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQkFDRSw4REFBQ1EsS0FBRztRQUNGQyxTQUFTLEVBQUMsb0VBQW9FO1FBQzlFQyxPQUFPLEVBQUVILGFBQWE7OzBCQUV0Qiw4REFBQ0ksSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLFdBQVc7MEJBQUViLEtBQUs7Ozs7O29CQUFNOzBCQUN0Qyw4REFBQ2dCLEdBQUM7MEJBQUVkLEdBQUc7Ozs7O29CQUFLOzBCQUNaLDhEQUFDYyxHQUFDO2dCQUFDSCxTQUFTLEVBQUMsV0FBVzswQkFBRVosV0FBVzs7Ozs7b0JBQUs7MEJBRTFDLDhEQUFDVyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsWUFBWTs7a0NBQ3pCLDhEQUFDakIsZ0VBQVM7d0JBQ1JpQixTQUFTLEVBQUMsd0NBQXdDO3dCQUNsREMsT0FBTyxFQUFFUCxZQUFZOzs7Ozs0QkFDckI7a0NBRUYsOERBQUNWLHVFQUFnQjt3QkFDZmdCLFNBQVMsRUFBQyx3Q0FBd0M7d0JBQ2xEQyxPQUFPLEVBQUUsV0FBTTs0QkFDYkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3ZCLENBQUM7Ozs7OzRCQUNEOzs7Ozs7b0JBQ0U7Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBM0N1Qm5CLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05vdGUudHN4P2Y1MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRyYXNoSWNvbiwgUGVuY2lsU3F1YXJlSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5pbXBvcnQgTm90ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm90ZXMvTm90ZUNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZSh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgdGFnLFxuICBfaWQsXG4gIHNldE5vdGVNb2RhbE9wZW4sXG4gIHNldEVkaXR0ZWROb3RlLFxufSkge1xuICBjb25zdCBub3RlcyA9IHVzZUNvbnRleHQoTm90ZUNvbnRleHQpO1xuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbm90ZXMuZGVsZXRlTm90ZShfaWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByZXZpZXcgPSAoKSA9PiB7XG4gICAgc2V0RWRpdHRlZE5vdGUoeyBfaWQsIHRpdGxlLCB0YWcsIGRlc2NyaXB0aW9uIH0pO1xuICAgIHNldE5vdGVNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLXNsYXRlLTQwMCBwLTIgcm91bmRlZC1zbSBzaGFkb3cteGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgb25DbGljaz17aGFuZGxlUHJldmlld31cbiAgICA+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3RpdGxlfTwvaDM+XG4gICAgICA8cD57dGFnfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICB7LyogLy9UT0RPIDogQWRkIHRvb2x0aXAgdG8gaWNvbnMoRGVsZXRlIGljb24gYW5kIEVkaXQgaWNvbikgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cbiAgICAgICAgPFRyYXNoSWNvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB0ZXh0LXNsYXRlLTcwMCBjdXJzb3ItcG9pbnRlciBtdC0yXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGV9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPFBlbmNpbFNxdWFyZUljb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdGV4dC1zbGF0ZS03MDAgY3Vyc29yLXBvaW50ZXIgbXQtMlwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiVHJhc2hJY29uIiwiUGVuY2lsU3F1YXJlSWNvbiIsIk5vdGVDb250ZXh0IiwiTm90ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJfaWQiLCJzZXROb3RlTW9kYWxPcGVuIiwic2V0RWRpdHRlZE5vdGUiLCJub3RlcyIsImhhbmRsZURlbGV0ZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVOb3RlIiwiaGFuZGxlUHJldmlldyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMyIsInAiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Note.tsx\n"));

/***/ })

});