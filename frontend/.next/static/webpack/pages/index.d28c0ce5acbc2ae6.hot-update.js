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

/***/ "./context/notes/NoteState.tsx":
/*!*************************************!*\
  !*** ./context/notes/NoteState.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NoteState; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoteContext */ \"./context/notes/NoteContext.tsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction NoteState(props) {\n    _s();\n    var host = \"http://localhost:13712\";\n    //TODO : Replace the Authorization token with the real auth token\n    var authToken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDBmODc3MDRiMmFkOGVjYTc0YWM0In0sImlhdCI6MTY2NTYwMjkzOH0.Uopk1VBWZYw8_wVFwagDJ4B91tf-XUsl_T3iVj-WoMg\";\n    var initialNotes = [\n        {\n            _id: \"112323he\",\n            title: \"First Note\",\n            description: \"This is my first note\",\n            tag: \"personal\"\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialNotes), notes = ref[0], setNotes = ref[1];\n    //Get all notes\n    var fetchNotes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var response, json;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"/api/notes/fetchNotes\"), {\n                                method: \"GET\",\n                                headers: {\n                                    Authorization: authToken\n                                }\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        json = _state.sent();\n                        console.log(json);\n                        setNotes(json);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchNotes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //TODO : delete this and all its references\n    var name = \"Test\";\n    //Add note\n    var addNote = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(title, tag, description) {\n            var data, response, jsonResponse, err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        data = {\n                            title: title,\n                            tag: tag,\n                            description: description\n                        };\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            5,\n                            ,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"/api/notes/addNote\"), {\n                                method: \"POST\",\n                                headers: {\n                                    Authorization: authToken,\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify({\n                                    title: title,\n                                    tag: tag,\n                                    description: description\n                                })\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        jsonResponse = _state.sent();\n                        console.log(\"Added note : \", jsonResponse);\n                        return [\n                            4,\n                            fetchNotes()\n                        ];\n                    case 4:\n                        _state.sent();\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        err = _state.sent();\n                        console.log(err);\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function addNote(title, tag, description) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            name: name,\n            notes: notes,\n            fetchNotes: fetchNotes,\n            addNote: addNote\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/context/notes/NoteState.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(NoteState, \"HO4EwA+JZmRFI8CSCv5DAAAcyqM=\");\n_c = NoteState;\nvar _c;\n$RefreshReg$(_c, \"NoteState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOEIsS0FBSyxFQUFFO1lBQUVULElBQUksRUFBSkEsSUFBSTtZQUFFWCxLQUFLLEVBQUxBLEtBQUs7WUFBRUUsVUFBVSxFQUFWQSxVQUFVO1lBQUVVLE9BQU8sRUFBUEEsT0FBTztTQUFFO2tCQUM5RHBCLEtBQUssQ0FBQzZCLFFBQVE7Ozs7O1lBQ00sQ0FDdkI7QUFDSixDQUFDO0dBN0R1QjlCLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L25vdGVzL05vdGVTdGF0ZS50c3g/ZmY2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOb3RlQ29udGV4dCBmcm9tIFwiLi9Ob3RlQ29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlU3RhdGUocHJvcHMpIHtcbiAgY29uc3QgaG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzcxMlwiO1xuICAvL1RPRE8gOiBSZXBsYWNlIHRoZSBBdXRob3JpemF0aW9uIHRva2VuIHdpdGggdGhlIHJlYWwgYXV0aCB0b2tlblxuICBjb25zdCBhdXRoVG9rZW4gPVxuICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTmpNME5EQm1PRGMzTURSaU1tRmtPR1ZqWVRjMFlXTTBJbjBzSW1saGRDSTZNVFkyTlRZd01qa3pPSDAuVW9wazFWQldaWXc4X3dWRndhZ0RKNEI5MXRmLVhVc2xfVDNpVmotV29NZ1wiO1xuXG4gIGNvbnN0IGluaXRpYWxOb3RlcyA9IFtcbiAgICB7XG4gICAgICBfaWQ6IFwiMTEyMzIzaGVcIixcbiAgICAgIHRpdGxlOiBcIkZpcnN0IE5vdGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgbXkgZmlyc3Qgbm90ZVwiLFxuICAgICAgdGFnOiBcInBlcnNvbmFsXCIsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShpbml0aWFsTm90ZXMpO1xuXG4gIC8vR2V0IGFsbCBub3Rlc1xuICBjb25zdCBmZXRjaE5vdGVzID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9hcGkvbm90ZXMvZmV0Y2hOb3Rlc2AsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aFRva2VuLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgIHNldE5vdGVzKGpzb24pO1xuICB9O1xuXG4gIC8vVE9ETyA6IGRlbGV0ZSB0aGlzIGFuZCBhbGwgaXRzIHJlZmVyZW5jZXNcbiAgY29uc3QgbmFtZSA9IFwiVGVzdFwiO1xuXG4gIC8vQWRkIG5vdGVcbiAgY29uc3QgYWRkTm90ZSA9IGFzeW5jICh0aXRsZSwgdGFnLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7IHRpdGxlLCB0YWcsIGRlc2NyaXB0aW9uIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aG9zdH0vYXBpL25vdGVzL2FkZE5vdGVgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRoVG9rZW4sXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgdGFnOiB0YWcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJBZGRlZCBub3RlIDogXCIsIGpzb25SZXNwb25zZSk7XG4gICAgICBhd2FpdCBmZXRjaE5vdGVzKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOb3RlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBuYW1lLCBub3RlcywgZmV0Y2hOb3RlcywgYWRkTm90ZSB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L05vdGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOb3RlQ29udGV4dCIsIk5vdGVTdGF0ZSIsInByb3BzIiwiaG9zdCIsImF1dGhUb2tlbiIsImluaXRpYWxOb3RlcyIsIl9pZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJub3RlcyIsInNldE5vdGVzIiwiZmV0Y2hOb3RlcyIsInJlc3BvbnNlIiwianNvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImFkZE5vdGUiLCJkYXRhIiwianNvblJlc3BvbnNlIiwiZXJyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/notes/NoteState.tsx\n"));

/***/ })

});