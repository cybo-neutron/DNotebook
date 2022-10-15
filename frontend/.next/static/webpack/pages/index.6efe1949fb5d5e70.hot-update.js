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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NoteState; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NoteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoteContext */ \"./context/notes/NoteContext.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction NoteState(props) {\n    _s();\n    var host = \"http://localhost:13712\";\n    //TODO : Replace the Authorization token with the real auth token\n    var authToken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDBmODc3MDRiMmFkOGVjYTc0YWM0In0sImlhdCI6MTY2NTYwMjkzOH0.Uopk1VBWZYw8_wVFwagDJ4B91tf-XUsl_T3iVj-WoMg\";\n    var initialNotes = [];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialNotes), notes = ref[0], setNotes = ref[1];\n    //Get all notes\n    var fetchNotes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var response, json;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"/api/notes/fetchNotes\"), {\n                                method: \"GET\",\n                                headers: {\n                                    Authorization: authToken\n                                }\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        json = _state.sent();\n                        console.log(json);\n                        setNotes(json);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchNotes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //TODO : delete this and all its references\n    var name = \"Test\";\n    //Add note\n    var addNote = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(title, tag, description) {\n            var data, response, jsonResponse, err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        data = {\n                            tag: tag,\n                            title: title,\n                            description: description\n                        };\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"/api/notes/addNote\"), {\n                                method: \"POST\",\n                                headers: {\n                                    Authorization: authToken,\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify(data)\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        jsonResponse = _state.sent();\n                        console.log(\"Added note : \", jsonResponse);\n                        // await fetchNotes();\n                        setNotes(function(prevNotes) {\n                            return [\n                                {\n                                    title: title,\n                                    description: description,\n                                    tag: tag,\n                                    _id: jsonResponse._id\n                                }, \n                            ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prevNotes));\n                        });\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        err = _state.sent();\n                        console.log(err);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function addNote(title, tag, description) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //Delete note\n    var deleteNote = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(id) {\n            var response, _, _tmp, err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(id);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"/api/notes/deleteNote/\").concat(id), {\n                                method: \"DELETE\",\n                                headers: {\n                                    Authorization: authToken,\n                                    \"Content-Type\": \"application/json\"\n                                }\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        _ = console.log;\n                        _tmp = [\n                            \"Deleted note : \"\n                        ];\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        _.apply(console, _tmp.concat(_state.sent()));\n                        // await fetchNotes();\n                        //We can also use fetchNotes to update thee notes array. But in my opinion that might be an unnecessary network call.\n                        setNotes(function(prevNotes) {\n                            return prevNotes.filter(function(note) {\n                                return note._id !== id;\n                            });\n                        });\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        err = _state.sent();\n                        console.log(err);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function deleteNote(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //Edit note\n    var editNote = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(updatedNote) {\n            var _id, title, tag, description, response, _, _tmp, err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _id = updatedNote._id, title = updatedNote.title, tag = updatedNote.tag, description = updatedNote.description;\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            5,\n                            ,\n                            6\n                        ]);\n                        console.log(\"NoteState editNote\", updatedNote);\n                        return [\n                            4,\n                            fetch(\"\".concat(host, \"/api/notes/updateNote/\").concat(_id), {\n                                method: \"PUT\",\n                                headers: {\n                                    Authorization: authToken,\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify({\n                                    title: title,\n                                    tag: tag,\n                                    description: description\n                                })\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        _ = console.log;\n                        _tmp = [\n                            \"====== Updated note : \"\n                        ];\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        _.apply(console, _tmp.concat(_state.sent()));\n                        return [\n                            4,\n                            fetchNotes()\n                        ];\n                    case 4:\n                        _state.sent();\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        err = _state.sent();\n                        console.log(err);\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function editNote(updatedNote) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoteContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            name: name,\n            notes: notes,\n            fetchNotes: fetchNotes,\n            addNote: addNote,\n            deleteNote: deleteNote,\n            editNote: editNote\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/mnt/d/webdev/react/codewithharry/DNotebook/frontend/context/notes/NoteState.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(NoteState, \"HO4EwA+JZmRFI8CSCv5DAAAcyqM=\");\n_c = NoteState;\nvar _c;\n$RefreshReg$(_c, \"NoteState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJO1lBQUVYLEtBQUssRUFBTEEsS0FBSztZQUFFRSxVQUFVLEVBQVZBLFVBQVU7WUFBRVUsT0FBTyxFQUFQQSxPQUFPO1lBQUVZLFVBQVUsRUFBVkEsVUFBVTtZQUFFSSxRQUFRLEVBQVJBLFFBQVE7U0FBRTtrQkFFaEVoQyxLQUFLLENBQUNvQyxRQUFROzs7OztZQUNNLENBQ3ZCO0FBQ0osQ0FBQztHQWpHdUJyQyxTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9ub3Rlcy9Ob3RlU3RhdGUudHN4P2ZmNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTm90ZUNvbnRleHQgZnJvbSBcIi4vTm90ZUNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZVN0YXRlKHByb3BzKSB7XG4gIGNvbnN0IGhvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTM3MTJcIjtcbiAgLy9UT0RPIDogUmVwbGFjZSB0aGUgQXV0aG9yaXphdGlvbiB0b2tlbiB3aXRoIHRoZSByZWFsIGF1dGggdG9rZW5cbiAgY29uc3QgYXV0aFRva2VuID1cbiAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5qTTBOREJtT0RjM01EUmlNbUZrT0dWallUYzBZV00wSW4wc0ltbGhkQ0k2TVRZMk5UWXdNamt6T0gwLlVvcGsxVkJXWll3OF93VkZ3YWdESjRCOTF0Zi1YVXNsX1QzaVZqLVdvTWdcIjtcblxuICBjb25zdCBpbml0aWFsTm90ZXMgPSBbXTtcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShpbml0aWFsTm90ZXMpO1xuXG4gIC8vR2V0IGFsbCBub3Rlc1xuICBjb25zdCBmZXRjaE5vdGVzID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtob3N0fS9hcGkvbm90ZXMvZmV0Y2hOb3Rlc2AsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aFRva2VuLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgIHNldE5vdGVzKGpzb24pO1xuICB9O1xuXG4gIC8vVE9ETyA6IGRlbGV0ZSB0aGlzIGFuZCBhbGwgaXRzIHJlZmVyZW5jZXNcbiAgY29uc3QgbmFtZSA9IFwiVGVzdFwiO1xuXG4gIC8vQWRkIG5vdGVcbiAgY29uc3QgYWRkTm90ZSA9IGFzeW5jICh0aXRsZSwgdGFnLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7IHRhZywgdGl0bGUsIGRlc2NyaXB0aW9uIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aG9zdH0vYXBpL25vdGVzL2FkZE5vdGVgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRoVG9rZW4sXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFkZGVkIG5vdGUgOiBcIiwganNvblJlc3BvbnNlKTtcbiAgICAgIC8vIGF3YWl0IGZldGNoTm90ZXMoKTtcbiAgICAgIHNldE5vdGVzKChwcmV2Tm90ZXMpID0+IFtcbiAgICAgICAgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHRhZywgX2lkOiBqc29uUmVzcG9uc2UuX2lkIH0sXG4gICAgICAgIC4uLnByZXZOb3RlcyxcbiAgICAgIF0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgLy9EZWxldGUgbm90ZVxuICBjb25zdCBkZWxldGVOb3RlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2hvc3R9L2FwaS9ub3Rlcy9kZWxldGVOb3RlLyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRoVG9rZW4sXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlZCBub3RlIDogXCIsIGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgICAvLyBhd2FpdCBmZXRjaE5vdGVzKCk7XG4gICAgICAvL1dlIGNhbiBhbHNvIHVzZSBmZXRjaE5vdGVzIHRvIHVwZGF0ZSB0aGVlIG5vdGVzIGFycmF5LiBCdXQgaW4gbXkgb3BpbmlvbiB0aGF0IG1pZ2h0IGJlIGFuIHVubmVjZXNzYXJ5IG5ldHdvcmsgY2FsbC5cbiAgICAgIHNldE5vdGVzKChwcmV2Tm90ZXMpID0+IHByZXZOb3Rlcy5maWx0ZXIoKG5vdGUpID0+IG5vdGUuX2lkICE9PSBpZCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgLy9FZGl0IG5vdGVcbiAgY29uc3QgZWRpdE5vdGUgPSBhc3luYyAodXBkYXRlZE5vdGUpID0+IHtcbiAgICBjb25zdCB7IF9pZCwgdGl0bGUsIHRhZywgZGVzY3JpcHRpb24gfSA9IHVwZGF0ZWROb3RlO1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdGVTdGF0ZSBlZGl0Tm90ZVwiLCB1cGRhdGVkTm90ZSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2hvc3R9L2FwaS9ub3Rlcy91cGRhdGVOb3RlLyR7X2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aFRva2VuLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlLCB0YWcsIGRlc2NyaXB0aW9uIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09IFVwZGF0ZWQgbm90ZSA6IFwiLCBhd2FpdCByZXNwb25zZS5qc29uKCkpO1xuICAgICAgYXdhaXQgZmV0Y2hOb3RlcygpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Tm90ZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IG5hbWUsIG5vdGVzLCBmZXRjaE5vdGVzLCBhZGROb3RlLCBkZWxldGVOb3RlLCBlZGl0Tm90ZSB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L05vdGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOb3RlQ29udGV4dCIsIk5vdGVTdGF0ZSIsInByb3BzIiwiaG9zdCIsImF1dGhUb2tlbiIsImluaXRpYWxOb3RlcyIsIm5vdGVzIiwic2V0Tm90ZXMiLCJmZXRjaE5vdGVzIiwicmVzcG9uc2UiLCJqc29uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWRkTm90ZSIsInRpdGxlIiwidGFnIiwiZGVzY3JpcHRpb24iLCJkYXRhIiwianNvblJlc3BvbnNlIiwiZXJyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcmV2Tm90ZXMiLCJfaWQiLCJkZWxldGVOb3RlIiwiaWQiLCJmaWx0ZXIiLCJub3RlIiwiZWRpdE5vdGUiLCJ1cGRhdGVkTm90ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/notes/NoteState.tsx\n"));

/***/ })

});