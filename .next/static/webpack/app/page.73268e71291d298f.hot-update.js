"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_settings_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/settings-provider */ \"(app-pages-browser)/./components/settings-provider.tsx\");\n/* harmony import */ var _components_ui_background_lines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/background-lines */ \"(app-pages-browser)/./components/ui/background-lines.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app/page.tsx\",\"import\":\"Playfair_Display\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"playfairDisplay\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app/page.tsx\\\",\\\"import\\\":\\\"Playfair_Display\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"playfairDisplay\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ui_bento__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/bento */ \"(app-pages-browser)/./components/ui/bento.tsx\");\n/* harmony import */ var _components_ui_background_beams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/background-beams */ \"(app-pages-browser)/./components/ui/background-beams.tsx\");\n/* harmony import */ var _components_vanishing_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/vanishing_text */ \"(app-pages-browser)/./components/vanishing_text.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_ui_multi_step_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ui/multi-step-loader */ \"(app-pages-browser)/./components/ui/multi-step-loader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst loadingStates = [\n    {\n        text: \"Buying a condo\"\n    },\n    {\n        text: \"Travelling in a flight\"\n    },\n    {\n        text: \"Meeting Tyler Durden\"\n    },\n    {\n        text: \"He makes soap\"\n    },\n    {\n        text: \"We goto a bar\"\n    },\n    {\n        text: \"Start a fight\"\n    },\n    {\n        text: \"We like it\"\n    },\n    {\n        text: \"Welcome to F**** C***\"\n    }\n];\nfunction Home() {\n    _s();\n    const { reducedMotion, fontSize, accentColor, highContrast } = (0,_components_settings_provider__WEBPACK_IMPORTED_MODULE_1__.useSettings)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(true); // Initializing loading state to true\n    const [loadingTextIndex, setLoadingTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            // Simulating loading process\n            const timer = setInterval({\n                \"Home.useEffect.timer\": ()=>{\n                    setLoadingTextIndex({\n                        \"Home.useEffect.timer\": (prevIndex)=>(prevIndex + 1) % loadingStates.length\n                    }[\"Home.useEffect.timer\"]);\n                }\n            }[\"Home.useEffect.timer\"], 2000); // Change the loading text every 2 seconds\n            // Simulate completion of loading process after 10 seconds\n            const loadingTimeout = setTimeout({\n                \"Home.useEffect.loadingTimeout\": ()=>{\n                    setLoading(false); // Stop loading after 10 seconds\n                }\n            }[\"Home.useEffect.loadingTimeout\"], 4000); // 10 seconds\n            return ({\n                \"Home.useEffect\": ()=>{\n                    clearInterval(timer); // Cleanup interval on unmount\n                    clearTimeout(loadingTimeout); // Cleanup timeout on unmount\n                }\n            })[\"Home.useEffect\"];\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen p-4 sm:p-6\",\n        style: {\n            fontSize: \"\".concat(fontSize / 16, \"rem\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[60vh] flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_multi_step_loader__WEBPACK_IMPORTED_MODULE_10__.MultiStepLoader, {\n                    loadingStates: loadingStates,\n                    loading: loading,\n                    duration: 2000\n                }, void 0, false, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"rounded-lg relative h-[70vh] flex items-center justify-center overflow-hidden mx-auto z-20 max-w-[1280px] mt-[5rem]\",\n                \"aria-labelledby\": \"hero-heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_background_lines__WEBPACK_IMPORTED_MODULE_2__.BackgroundLines, {\n                    reducedMotion: reducedMotion,\n                    className: \"flex items-center justify-center w-full flex-col px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/hero.jpg\",\n                                    alt: \"Immersive Background\",\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"object-cover w-full h-full opacity-40 brightness-60 contrast-10\", highContrast && \"brightness-40 contrast-150 border-2 border-white antialiased\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 3\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-black/40\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 3\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 10\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_vanishing_text__WEBPACK_IMPORTED_MODULE_8__.PlaceholdersAndVanishInputDemo, {}, void 0, false, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_bento__WEBPACK_IMPORTED_MODULE_6__.FeaturesSectionDemo, {}, void 0, false, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20\",\n                \"aria-labelledby\": \"waitlist-heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[40rem] w-full rounded-md relative border flex flex-col items-center justify-center antialiased\",\n                    style: {\n                        backgroundColor: \"var(--background)\",\n                        color: \"var(--foreground)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-2xl mx-auto p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    id: \"join-heading\",\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"relative z-10 text-lg md:text-7xl bg-clip-text text-foreground text-center font-bold\", (next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11___default().className)),\n                                    style: {\n                                        fontSize: \"\".concat(fontSize / 16 * 3.125, \"rem\")\n                                    },\n                                    children: \"Join LifeSight: as a volunteer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10\",\n                                    style: {\n                                        fontSize: \"\".concat(fontSize / 16 * 0.875, \"rem\")\n                                    },\n                                    children: \"LifeSight is a powerful tool designed for visually impaired users. We are committed to providing inclusive and accessible solutions for education, social inclusion, and everyday tasks. Our app leverages AI-powered OCR, voice input/output, and offline functionality to make the world more accessible to all.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10\",\n                                    style: {\n                                        fontSize: \"\".concat(fontSize / 16 * 0.875, \"rem\")\n                                    },\n                                    children: \"Sign up now to receive updates and be part of the LifeSight community!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"relative w-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                            type: \"email\",\n                                            placeholder: \"your-email@example.com\",\n                                            \"aria-label\": \"Enter your email address\",\n                                            className: \"rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4\",\n                                            style: {\n                                                fontSize: \"\".concat(fontSize / 16 * 0.875, \"rem\"),\n                                                backgroundColor: \"var(--input)\",\n                                                color: \"var(--foreground)\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                            lineNumber: 171,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"default\",\n                                            type: \"submit\",\n                                            className: \"absolute right-0 top-0 bg-teal-500 text-white p-2 rounded-sm border-r border-y border-neutral-800 focus:ring-2 focus:ring-teal-500\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                className: \"h-5 w-5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                                lineNumber: 187,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                            lineNumber: 182,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 143,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_background_beams__WEBPACK_IMPORTED_MODULE_7__.BackgroundBeams, {}, void 0, false, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 192,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MvKJDp4RQ2k8zclAJoKE82sE4RU=\", false, function() {\n    return [\n        _components_settings_provider__WEBPACK_IMPORTED_MODULE_1__.useSettings\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUF0QkEsV0FBVyxLQUFLLE9BQU07b0NBQUs7OENBQ2xEOzs7Ozs7OENBR0QsOERBQUM4QjtvQ0FBS2QsV0FBVTs7c0RBQ2QsOERBQUM5Qix1REFBS0E7NENBQ0o2QyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNaQyxjQUFXOzRDQUNYakIsV0FBVTs0Q0FDVkMsT0FBTztnREFDTGpCLFVBQVUsR0FBeUIsT0FBdEJBLFdBQVcsS0FBSyxPQUFNO2dEQUNuQ3lCLGlCQUFpQjtnREFDakJDLE9BQU87NENBQ1Q7Ozs7OztzREFFRiw4REFBQzNDLHlEQUFNQTs0Q0FDTG1ELFNBQVE7NENBQ1JILE1BQUs7NENBQ0xmLFdBQVU7c0RBRVYsNEVBQUNoQyx1RkFBVUE7Z0RBQUNnQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLNUIsOERBQUMzQiw0RUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7R0FsSndCUzs7UUFDeUNqQixzRUFBV0E7OztLQURwRGlCIiwic291cmNlcyI6WyIvVXNlcnMvZGVlZ2hheXVhZGhpa2FyaS9Eb2N1bWVudHMvTGlmZVNpZ2h0L2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVNldHRpbmdzIH0gZnJvbSAnQC9jb21wb25lbnRzL3NldHRpbmdzLXByb3ZpZGVyJztcbmltcG9ydCB7IEJhY2tncm91bmRMaW5lcyB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9iYWNrZ3JvdW5kLWxpbmVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvY2FyZCc7XG5pbXBvcnQgeyBFeWUsIE1lc3NhZ2VTcXVhcmVUZXh0LCBQaG9uZSwgTGlnaHRidWxiLCBVc2VycywgQ2FsZW5kYXJEYXlzLCBOZXdzcGFwZXIsIEFycm93UmlnaHQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9pbnB1dCc7XG5pbXBvcnQgeyBUb29sdGlwUHJvdmlkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvdG9vbHRpcCc7XG5pbXBvcnQgeyBDYXJvdXNlbCwgQ2Fyb3VzZWxDb250ZW50LCBDYXJvdXNlbEl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQW5hbHl0aWNzIH0gZnJvbSBcIkB2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0XCJcbmltcG9ydCB7IFNwZWVkSW5zaWdodHMgfSBmcm9tIFwiQHZlcmNlbC9zcGVlZC1pbnNpZ2h0cy9uZXh0XCJcbmltcG9ydCB7IFBsYXlmYWlyX0Rpc3BsYXkgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcbmltcG9ydCB7IEZlYXR1cmVzU2VjdGlvbkRlbW8gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYmVudG8nO1xuaW1wb3J0IHsgQmFja2dyb3VuZEJlYW1zIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2JhY2tncm91bmQtYmVhbXMnO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJzQW5kVmFuaXNoSW5wdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvcGxhY2Vob2xkZXJzLWFuZC12YW5pc2gtaW5wdXQnO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJzQW5kVmFuaXNoSW5wdXREZW1vIH0gZnJvbSAnQC9jb21wb25lbnRzL3ZhbmlzaGluZ190ZXh0JztcbmNvbnN0IHBsYXlmYWlyRGlzcGxheSA9IFBsYXlmYWlyX0Rpc3BsYXkoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSk7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTXVsdGlTdGVwTG9hZGVyIGFzIExvYWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbXVsdGktc3RlcC1sb2FkZXJcIjtcbmltcG9ydCB7IEljb25TcXVhcmVSb3VuZGVkWCB9IGZyb20gXCJAdGFibGVyL2ljb25zLXJlYWN0XCI7XG5cbmNvbnN0IGxvYWRpbmdTdGF0ZXMgPSBbXG4gIHtcbiAgICB0ZXh0OiBcIkJ1eWluZyBhIGNvbmRvXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlRyYXZlbGxpbmcgaW4gYSBmbGlnaHRcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiTWVldGluZyBUeWxlciBEdXJkZW5cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiSGUgbWFrZXMgc29hcFwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJXZSBnb3RvIGEgYmFyXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlN0YXJ0IGEgZmlnaHRcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiV2UgbGlrZSBpdFwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJXZWxjb21lIHRvIEYqKioqIEMqKipcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgcmVkdWNlZE1vdGlvbiwgZm9udFNpemUsIGFjY2VudENvbG9yLCBoaWdoQ29udHJhc3QgfSA9IHVzZVNldHRpbmdzKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAgLy8gSW5pdGlhbGl6aW5nIGxvYWRpbmcgc3RhdGUgdG8gdHJ1ZVxuICBjb25zdCBbbG9hZGluZ1RleHRJbmRleCwgc2V0TG9hZGluZ1RleHRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNpbXVsYXRpbmcgbG9hZGluZyBwcm9jZXNzXG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nVGV4dEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIGxvYWRpbmdTdGF0ZXMubGVuZ3RoKTtcbiAgICB9LCAyMDAwKTsgIC8vIENoYW5nZSB0aGUgbG9hZGluZyB0ZXh0IGV2ZXJ5IDIgc2Vjb25kc1xuXG4gICAgLy8gU2ltdWxhdGUgY29tcGxldGlvbiBvZiBsb2FkaW5nIHByb2Nlc3MgYWZ0ZXIgMTAgc2Vjb25kc1xuICAgIGNvbnN0IGxvYWRpbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgIC8vIFN0b3AgbG9hZGluZyBhZnRlciAxMCBzZWNvbmRzXG4gICAgfSwgNDAwMCk7ICAvLyAxMCBzZWNvbmRzXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7IC8vIENsZWFudXAgaW50ZXJ2YWwgb24gdW5tb3VudFxuICAgICAgY2xlYXJUaW1lb3V0KGxvYWRpbmdUaW1lb3V0KTsgLy8gQ2xlYW51cCB0aW1lb3V0IG9uIHVubW91bnRcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBwLTQgc206cC02XCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2fXJlbWAsXG4gICAgICB9fVxuICAgID4gIFxuXG48ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs2MHZoXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgey8qIENvcmUgTG9hZGVyIE1vZGFsICovfVxuICAgICAgPExvYWRlciBsb2FkaW5nU3RhdGVzPXtsb2FkaW5nU3RhdGVzfSBsb2FkaW5nPXtsb2FkaW5nfSBkdXJhdGlvbj17MjAwMH0gLz5cbiBcbiAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSGVybyBTZWN0aW9uICovfVxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyByZWxhdGl2ZSBoLVs3MHZoXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gbXgtYXV0byB6LTIwIG1heC13LVsxMjgwcHhdIG10LVs1cmVtXVwiXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlcm8taGVhZGluZ1wiXG4gICAgICA+XG4gICAgICAgIDxCYWNrZ3JvdW5kTGluZXNcbiAgICAgICAgICByZWR1Y2VkTW90aW9uPXtyZWR1Y2VkTW90aW9ufVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBmbGV4LWNvbCBweC00XCJcbiAgICAgICAgPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XG4gIDxpbWdcbiAgICBzcmM9XCJodHRwczovL3B1Yi1mMzc0NmU4YmJjNjI0ZWY1YTY5ODdlYWMwNWVmZTNmNy5yMi5kZXYvaGVyby5qcGdcIlxuICAgIGFsdD1cIkltbWVyc2l2ZSBCYWNrZ3JvdW5kXCJcbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbCBvcGFjaXR5LTQwIGJyaWdodG5lc3MtNjAgY29udHJhc3QtMTBcIixcbiAgICAgIGhpZ2hDb250cmFzdCAmJiBcImJyaWdodG5lc3MtNDAgY29udHJhc3QtMTUwIGJvcmRlci0yIGJvcmRlci13aGl0ZSBhbnRpYWxpYXNlZFwiXG4gICAgKX1cbiAgLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrLzQwXCI+PC9kaXY+XG48L2Rpdj5cbiAgICAgICAgICA8UGxhY2Vob2xkZXJzQW5kVmFuaXNoSW5wdXREZW1vIC8+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LTV4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRcIiwgcGxheWZhaXJEaXNwbGF5LmNsYXNzTmFtZSl9IHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMy4xMjV9cmVtYCB9fT5cbiAgICAgICAgICAgICAgRW1wb3dlcmluZyBJbmRlcGVuZGVuY2UgVGhyb3VnaCBBSSBWaXNpb25cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtd2hpdGUvODBcIiBzdHlsZT17eyBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDEuMjV9cmVtYCB9fT5cbiAgICAgICAgICAgICAgRXhwZXJpZW5jZSBhIG5ldyBsZXZlbCBvZiBhY2Nlc3NpYmlsaXR5IHdpdGggb3VyIEFJLXBvd2VyZWQgdG9vbHMgZGVzaWduZWQgZm9yIHRoZSB2aXN1YWxseSBpbXBhaXJlZC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBhc0NoaWxkIHZhcmlhbnQ9XCJhY2NlbnRcIiBzaXplPVwibGdcIiBzdHlsZT17eyBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDAuODc1fXJlbWAsIGJhY2tncm91bmRDb2xvcjogYWNjZW50Q29sb3IgfX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcHBcIj5HZXQgU3RhcnRlZDwvTGluaz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gYXNDaGlsZCB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMC44NzV9cmVtYCB9fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xlYXJuLW1vcmVcIj5MZWFybiBNb3JlPC9MaW5rPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9CYWNrZ3JvdW5kTGluZXM+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgICAgIFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gbWF4LXctWzEyODBweF0gbXgtYXV0byB6LTIwJz5cbiAgICAgICAgPEZlYXR1cmVzU2VjdGlvbkRlbW8gLz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFdhaXRsaXN0IFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIG1heC13LVsxMjgwcHhdIG14LWF1dG8gei0yMFwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ3YWl0bGlzdC1oZWFkaW5nXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImgtWzQwcmVtXSB3LWZ1bGwgcm91bmRlZC1tZCByZWxhdGl2ZSBib3JkZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYW50aWFsaWFzZWRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1iYWNrZ3JvdW5kKVwiLCAvLyBVc2luZyBkeW5hbWljIGJhY2tncm91bmQgY29sb3IgZnJvbSBDU1MgdmFyaWFibGVzXG4gICAgICAgICAgY29sb3I6IFwidmFyKC0tZm9yZWdyb3VuZClcIiwgLy8gVXNpbmcgZHluYW1pYyB0ZXh0IGNvbG9yIGZyb20gQ1NTIHZhcmlhYmxlc1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvIHAtNFwiPlxuICAgICAgICAgIDxoMVxuICAgICAgICAgICAgaWQ9XCJqb2luLWhlYWRpbmdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgXCJyZWxhdGl2ZSB6LTEwIHRleHQtbGcgbWQ6dGV4dC03eGwgYmctY2xpcC10ZXh0IHRleHQtZm9yZWdyb3VuZCB0ZXh0LWNlbnRlciBmb250LWJvbGRcIixcbiAgICAgICAgICAgICAgcGxheWZhaXJEaXNwbGF5LmNsYXNzTmFtZVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMy4xMjV9cmVtYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEpvaW4gTGlmZVNpZ2h0OiBhcyBhIHZvbHVudGVlclxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZCBtYXgtdy1sZyBteC1hdXRvIG15LTIgdGV4dC1zbSB0ZXh0LWNlbnRlciByZWxhdGl2ZSB6LTEwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMC44NzV9cmVtYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExpZmVTaWdodCBpcyBhIHBvd2VyZnVsIHRvb2wgZGVzaWduZWQgZm9yIHZpc3VhbGx5IGltcGFpcmVkIHVzZXJzLiBXZSBhcmVcbiAgICAgICAgICAgIGNvbW1pdHRlZCB0byBwcm92aWRpbmcgaW5jbHVzaXZlIGFuZCBhY2Nlc3NpYmxlIHNvbHV0aW9ucyBmb3IgZWR1Y2F0aW9uLFxuICAgICAgICAgICAgc29jaWFsIGluY2x1c2lvbiwgYW5kIGV2ZXJ5ZGF5IHRhc2tzLiBPdXIgYXBwIGxldmVyYWdlcyBBSS1wb3dlcmVkIE9DUixcbiAgICAgICAgICAgIHZvaWNlIGlucHV0L291dHB1dCwgYW5kIG9mZmxpbmUgZnVuY3Rpb25hbGl0eSB0byBtYWtlIHRoZSB3b3JsZCBtb3JlXG4gICAgICAgICAgICBhY2Nlc3NpYmxlIHRvIGFsbC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZCBtYXgtdy1sZyBteC1hdXRvIG15LTIgdGV4dC1zbSB0ZXh0LWNlbnRlciByZWxhdGl2ZSB6LTEwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMC44NzV9cmVtYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gdXAgbm93IHRvIHJlY2VpdmUgdXBkYXRlcyBhbmQgYmUgcGFydCBvZiB0aGUgTGlmZVNpZ2h0IGNvbW11bml0eSFcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyLWVtYWlsQGV4YW1wbGUuY29tXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTgwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy10ZWFsLTUwMCB3LWZ1bGwgcmVsYXRpdmUgei0xMCBtdC00XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDAuODc1fXJlbWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLWlucHV0KVwiLCAvLyBVc2luZyBkeW5hbWljIGlucHV0IGNvbG9yIGZyb20gQ1NTIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInZhcigtLWZvcmVncm91bmQpXCIsIC8vIFVzaW5nIGR5bmFtaWMgdGV4dCBjb2xvciBmcm9tIENTUyB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTAgYmctdGVhbC01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1zbSBib3JkZXItciBib3JkZXIteSBib3JkZXItbmV1dHJhbC04MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctdGVhbC01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEJhY2tncm91bmRCZWFtcyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZXR0aW5ncyIsIkJhY2tncm91bmRMaW5lcyIsIkJ1dHRvbiIsIkFycm93UmlnaHQiLCJjbiIsIklucHV0IiwicGxheWZhaXJEaXNwbGF5IiwiRmVhdHVyZXNTZWN0aW9uRGVtbyIsIkJhY2tncm91bmRCZWFtcyIsIlBsYWNlaG9sZGVyc0FuZFZhbmlzaElucHV0RGVtbyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNdWx0aVN0ZXBMb2FkZXIiLCJMb2FkZXIiLCJsb2FkaW5nU3RhdGVzIiwidGV4dCIsIkhvbWUiLCJyZWR1Y2VkTW90aW9uIiwiZm9udFNpemUiLCJhY2NlbnRDb2xvciIsImhpZ2hDb250cmFzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZGluZ1RleHRJbmRleCIsInNldExvYWRpbmdUZXh0SW5kZXgiLCJ0aW1lciIsInNldEludGVydmFsIiwicHJldkluZGV4IiwibGVuZ3RoIiwibG9hZGluZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsIm1haW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpdiIsImR1cmF0aW9uIiwic2VjdGlvbiIsImFyaWEtbGFiZWxsZWRieSIsImltZyIsInNyYyIsImFsdCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaDEiLCJpZCIsInAiLCJmb3JtIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsInZhcmlhbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});