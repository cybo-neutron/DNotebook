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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction EditNote(props) {\n    var handleUpdateNote = function handleUpdateNote() {\n        props.setEdittedNote(changedNote);\n    };\n    var handleChange = function handleChange(e) {\n        e.preventDefault();\n        setChangedNote(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, prev), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, e.target.name, e.target.value));\n        });\n        props.setEdittedNote(changedNote);\n    };\n    _s();\n    var _edittedNote = props.edittedNote, title = _edittedNote.title, tag = _edittedNote.tag, description = _edittedNote.description;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: title,\n        tag: tag,\n        description: description\n    }), changedNote = ref[0], setChangedNote = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"title\",\n                defaultValue: title,\n                placeholder: \"Enter Title...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"tag\",\n                defaultValue: tag,\n                placeholder: \"Enter Tag...\",\n                className: \"border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"description\",\n                defaultValue: description,\n                placeholder: \"Enter the description.\",\n                className: \"h-40 outline-none px-2\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-slate-700 text-white px-2 py-2\",\n                onClick: handleUpdateNote,\n                children: \"Update Note\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/components/OpenNote/EditNote.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(EditNote, \"D6Dhh95tjZ6UJO6AHD2//7/B/oM=\");\n_c = EditNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditNote);\nvar _c;\n$RefreshReg$(_c, \"EditNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5Ob3RlL0VkaXROb3RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztBQUFvRDtBQUdwRCxTQUFTRSxRQUFRLENBQUNDLEtBQUssRUFBRTtRQUtkQyxnQkFBZ0IsR0FBekIsU0FBU0EsZ0JBQWdCLEdBQUc7UUFDMUJELEtBQUssQ0FBQ0UsY0FBYyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO1FBRVFDLFlBQVksR0FBckIsU0FBU0EsWUFBWSxDQUFDQyxDQUFDLEVBQUU7UUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJDLGNBQWMsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7WUFDdkIsT0FBTyx3S0FDRkEsSUFBSSxHQUNQLHFGQUFDSCxDQUFDLENBQUNJLE1BQU0sQ0FBQ0MsSUFBSSxFQUFHTCxDQUFDLENBQUNJLE1BQU0sQ0FBQ0UsS0FBSyxFQUNoQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSFgsS0FBSyxDQUFDRSxjQUFjLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O0lBakJELElBQW9DSCxZQUFpQixHQUFqQkEsS0FBSyxDQUFDWSxXQUFXLEVBQTdDQyxLQUFLLEdBQXVCYixZQUFpQixDQUE3Q2EsS0FBSyxFQUFFQyxHQUFHLEdBQWtCZCxZQUFpQixDQUF0Q2MsR0FBRyxFQUFFQyxXQUFXLEdBQUtmLFlBQWlCLENBQWpDZSxXQUFXO0lBRS9CLElBQXNDakIsR0FBcUMsR0FBckNBLCtDQUFRLENBQUM7UUFBRWUsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEdBQUcsRUFBSEEsR0FBRztRQUFFQyxXQUFXLEVBQVhBLFdBQVc7S0FBRSxDQUFDLEVBQXBFWixXQUFXLEdBQW9CTCxHQUFxQyxHQUF6RCxFQUFFUyxjQUFjLEdBQUlULEdBQXFDLEdBQXpDO0lBaUJsQyxxQkFDRSw4REFBQ2tCLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs7MEJBQ2xDLDhEQUFDQyxPQUFLO2dCQUNKQyxJQUFJLEVBQUMsTUFBTTtnQkFDWFQsSUFBSSxFQUFDLE9BQU87Z0JBQ1pVLFlBQVksRUFBRVAsS0FBSztnQkFDbkJRLFdBQVcsRUFBQyxnQkFBZ0I7Z0JBQzVCSixTQUFTLEVBQUMscUZBQXFGO2dCQUMvRkssUUFBUSxFQUFFbEIsWUFBWTs7Ozs7b0JBQ3RCOzBCQUNGLDhEQUFDYyxPQUFLO2dCQUNKQyxJQUFJLEVBQUMsTUFBTTtnQkFDWFQsSUFBSSxFQUFDLEtBQUs7Z0JBQ1ZVLFlBQVksRUFBRU4sR0FBRztnQkFDakJPLFdBQVcsRUFBQyxjQUFjO2dCQUMxQkosU0FBUyxFQUFDLHFGQUFxRjtnQkFDL0ZLLFFBQVEsRUFBRWxCLFlBQVk7Ozs7O29CQUN0QjswQkFDRiw4REFBQ21CLFVBQVE7Z0JBQ1BiLElBQUksRUFBQyxhQUFhO2dCQUNsQlUsWUFBWSxFQUFFTCxXQUFXO2dCQUN6Qk0sV0FBVyxFQUFDLHdCQUF3QjtnQkFDcENKLFNBQVMsRUFBQyx3QkFBd0I7Z0JBQ2xDSyxRQUFRLEVBQUVsQixZQUFZOzs7OztvQkFDWjswQkFDWiw4REFBQ29CLFFBQU07Z0JBQ0xMLElBQUksRUFBQyxRQUFRO2dCQUNiRixTQUFTLEVBQUMsbUNBQW1DO2dCQUM3Q1EsT0FBTyxFQUFFeEIsZ0JBQWdCOzBCQUMxQixhQUVEOzs7OztvQkFBUzs7Ozs7O1lBQ0wsQ0FDTjtBQUNKLENBQUM7R0F0RFFGLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXdEakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL09wZW5Ob3RlL0VkaXROb3RlLnRzeD81NDQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm90ZUNvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvbm90ZXMvTm90ZUNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIEVkaXROb3RlKHByb3BzKSB7XHJcbiAgY29uc3QgeyB0aXRsZSwgdGFnLCBkZXNjcmlwdGlvbiB9ID0gcHJvcHMuZWRpdHRlZE5vdGU7XHJcblxyXG4gIGNvbnN0IFtjaGFuZ2VkTm90ZSwgc2V0Q2hhbmdlZE5vdGVdID0gdXNlU3RhdGUoeyB0aXRsZSwgdGFnLCBkZXNjcmlwdGlvbiB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlTm90ZSgpIHtcclxuICAgIHByb3BzLnNldEVkaXR0ZWROb3RlKGNoYW5nZWROb3RlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRDaGFuZ2VkTm90ZSgocHJldikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcHJvcHMuc2V0RWRpdHRlZE5vdGUoY2hhbmdlZE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVGl0bGUuLi5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgdGV4dC1ibGFjayBvdXRsaW5lLW5vbmUgcHgtMiBmb2N1czpiZy1zbGF0ZS0zMDAgZm9jdXM6Ym9yZGVyLWItc2xhdGUtNzAwXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cInRhZ1wiXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXt0YWd9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUYWcuLi5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgdGV4dC1ibGFjayBvdXRsaW5lLW5vbmUgcHgtMiBmb2N1czpiZy1zbGF0ZS0zMDAgZm9jdXM6Ym9yZGVyLWItc2xhdGUtNzAwXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgZGVzY3JpcHRpb24uXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJoLTQwIG91dGxpbmUtbm9uZSBweC0yXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIHB4LTIgcHktMlwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlVXBkYXRlTm90ZX1cclxuICAgICAgPlxyXG4gICAgICAgIFVwZGF0ZSBOb3RlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdE5vdGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRWRpdE5vdGUiLCJwcm9wcyIsImhhbmRsZVVwZGF0ZU5vdGUiLCJzZXRFZGl0dGVkTm90ZSIsImNoYW5nZWROb3RlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0Q2hhbmdlZE5vdGUiLCJwcmV2IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZWRpdHRlZE5vdGUiLCJ0aXRsZSIsInRhZyIsImRlc2NyaXB0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/OpenNote/EditNote.tsx\n"));

/***/ })

});