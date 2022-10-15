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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/notes/NoteContext */ \"./context/notes/NoteContext.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction EditNote(props) {\n    var handleUpdateNote = function handleUpdateNote() {\n        props.setEdittedNote(changedNote);\n        noteContext.editNote(changedNote);\n    };\n    var handleChange = function handleChange(e) {\n        e.preventDefault();\n        setChangedNote(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, prev), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, e.target.name, e.target.value));\n        });\n        props.setEdittedNote(changedNote);\n    };\n    _s();\n    var _edittedNote = props.edittedNote, _id = _edittedNote._id, title = _edittedNote.title, tag = _edittedNote.tag, description = _edittedNote.description;\n    var noteContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_notes_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        _id: _id,\n        title: title,\n        tag: tag,\n        description: description\n    }), changedNote = ref[0], setChangedNote = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"title\",\n                defaultValue: title,\n                placeholder: \"Enter Title...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"tag\",\n                defaultValue: tag,\n                placeholder: \"Enter Tag...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"description\",\n                defaultValue: description,\n                placeholder: \"Enter the description.\",\n                className: \"h-40 outline-none px-2\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-slate-700 text-white px-2 py-2\",\n                onClick: handleUpdateNote,\n                children: \"Update Note\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(EditNote, \"5LcNq8pZl1ugv/d5mez0TOq+an4=\");\n_c = EditNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditNote);\nvar _c;\n$RefreshReg$(_c, \"EditNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5Ob3RlL0VkaXROb3RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7QUFBb0Q7QUFDTTtBQUUxRCxTQUFTSSxRQUFRLENBQUNDLEtBQUssRUFBRTtRQVlkQyxnQkFBZ0IsR0FBekIsU0FBU0EsZ0JBQWdCLEdBQUc7UUFDMUJELEtBQUssQ0FBQ0UsY0FBYyxDQUFDQyxXQUFXLENBQUMsQ0FBQztRQUNsQ0MsV0FBVyxDQUFDQyxRQUFRLENBQUNGLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7UUFFUUcsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNDLENBQUMsRUFBRTtRQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQkMsY0FBYyxDQUFDLFNBQUNDLElBQUksRUFBSztZQUN2QixPQUFPLHdLQUNGQSxJQUFJLEdBQ1AscUZBQUNILENBQUMsQ0FBQ0ksTUFBTSxDQUFDQyxJQUFJLEVBQUdMLENBQUMsQ0FBQ0ksTUFBTSxDQUFDRSxLQUFLLEVBQ2hDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNIYixLQUFLLENBQUNFLGNBQWMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7SUF6QkQsSUFBeUNILFlBQWlCLEdBQWpCQSxLQUFLLENBQUNjLFdBQVcsRUFBbERDLEdBQUcsR0FBOEJmLFlBQWlCLENBQWxEZSxHQUFHLEVBQUVDLEtBQUssR0FBdUJoQixZQUFpQixDQUE3Q2dCLEtBQUssRUFBRUMsR0FBRyxHQUFrQmpCLFlBQWlCLENBQXRDaUIsR0FBRyxFQUFFQyxXQUFXLEdBQUtsQixZQUFpQixDQUFqQ2tCLFdBQVc7SUFFcEMsSUFBTWQsV0FBVyxHQUFHUCxpREFBVSxDQUFDQyxrRUFBVyxDQUFDO0lBRTNDLElBQXNDRixHQUtwQyxHQUxvQ0EsK0NBQVEsQ0FBQztRQUM3Q21CLEdBQUcsRUFBSEEsR0FBRztRQUNIQyxLQUFLLEVBQUxBLEtBQUs7UUFDTEMsR0FBRyxFQUFIQSxHQUFHO1FBQ0hDLFdBQVcsRUFBWEEsV0FBVztLQUNaLENBQUMsRUFMS2YsV0FBVyxHQUFvQlAsR0FLcEMsR0FMZ0IsRUFBRWEsY0FBYyxHQUFJYixHQUtwQyxHQUxnQztJQXVCbEMscUJBQ0UsOERBQUN1QixLQUFHO1FBQUNDLFNBQVMsRUFBQyxxQkFBcUI7OzBCQUNsQyw4REFBQ0MsT0FBSztnQkFDSkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hWLElBQUksRUFBQyxPQUFPO2dCQUNaVyxZQUFZLEVBQUVQLEtBQUs7Z0JBQ25CUSxXQUFXLEVBQUMsZ0JBQWdCO2dCQUM1QkosU0FBUyxFQUFDLHFGQUFxRjtnQkFDL0ZLLFFBQVEsRUFBRW5CLFlBQVk7Ozs7O29CQUN0QjswQkFDRiw4REFBQ2UsT0FBSztnQkFDSkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hWLElBQUksRUFBQyxLQUFLO2dCQUNWVyxZQUFZLEVBQUVOLEdBQUc7Z0JBQ2pCTyxXQUFXLEVBQUMsY0FBYztnQkFDMUJKLFNBQVMsRUFBQyxxRkFBcUY7Z0JBQy9GSyxRQUFRLEVBQUVuQixZQUFZOzs7OztvQkFDdEI7MEJBQ0YsOERBQUNvQixVQUFRO2dCQUNQZCxJQUFJLEVBQUMsYUFBYTtnQkFDbEJXLFlBQVksRUFBRUwsV0FBVztnQkFDekJNLFdBQVcsRUFBQyx3QkFBd0I7Z0JBQ3BDSixTQUFTLEVBQUMsd0JBQXdCO2dCQUNsQ0ssUUFBUSxFQUFFbkIsWUFBWTs7Ozs7b0JBQ1o7MEJBQ1osOERBQUNxQixRQUFNO2dCQUNMTCxJQUFJLEVBQUMsUUFBUTtnQkFDYkYsU0FBUyxFQUFDLG1DQUFtQztnQkFDN0NRLE9BQU8sRUFBRTNCLGdCQUFnQjswQkFDMUIsYUFFRDs7Ozs7b0JBQVM7Ozs7OztZQUNMLENBQ047QUFDSixDQUFDO0dBOURRRixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFnRWpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcGVuTm90ZS9FZGl0Tm90ZS50c3g/NTQ0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5vdGVDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L25vdGVzL05vdGVDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBFZGl0Tm90ZShwcm9wcykge1xyXG4gIGNvbnN0IHsgX2lkLCB0aXRsZSwgdGFnLCBkZXNjcmlwdGlvbiB9ID0gcHJvcHMuZWRpdHRlZE5vdGU7XHJcblxyXG4gIGNvbnN0IG5vdGVDb250ZXh0ID0gdXNlQ29udGV4dChOb3RlQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtjaGFuZ2VkTm90ZSwgc2V0Q2hhbmdlZE5vdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgX2lkLFxyXG4gICAgdGl0bGUsXHJcbiAgICB0YWcsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlTm90ZSgpIHtcclxuICAgIHByb3BzLnNldEVkaXR0ZWROb3RlKGNoYW5nZWROb3RlKTtcclxuICAgIG5vdGVDb250ZXh0LmVkaXROb3RlKGNoYW5nZWROb3RlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRDaGFuZ2VkTm90ZSgocHJldikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcHJvcHMuc2V0RWRpdHRlZE5vdGUoY2hhbmdlZE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVGl0bGUuLi5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgdGV4dC1ibGFjayBvdXRsaW5lLW5vbmUgcHgtMiBmb2N1czpiZy1zbGF0ZS0zMDAgZm9jdXM6Ym9yZGVyLWItc2xhdGUtNzAwXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cInRhZ1wiXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXt0YWd9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUYWcuLi5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgdGV4dC1ibGFjayBvdXRsaW5lLW5vbmUgcHgtMiBmb2N1czpiZy1zbGF0ZS0zMDAgZm9jdXM6Ym9yZGVyLWItc2xhdGUtNzAwXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgZGVzY3JpcHRpb24uXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJoLTQwIG91dGxpbmUtbm9uZSBweC0yXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIHB4LTIgcHktMlwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlVXBkYXRlTm90ZX1cclxuICAgICAgPlxyXG4gICAgICAgIFVwZGF0ZSBOb3RlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdE5vdGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIk5vdGVDb250ZXh0IiwiRWRpdE5vdGUiLCJwcm9wcyIsImhhbmRsZVVwZGF0ZU5vdGUiLCJzZXRFZGl0dGVkTm90ZSIsImNoYW5nZWROb3RlIiwibm90ZUNvbnRleHQiLCJlZGl0Tm90ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldENoYW5nZWROb3RlIiwicHJldiIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImVkaXR0ZWROb3RlIiwiX2lkIiwidGl0bGUiLCJ0YWciLCJkZXNjcmlwdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OpenNote/EditNote.tsx\n"));

/***/ })

});