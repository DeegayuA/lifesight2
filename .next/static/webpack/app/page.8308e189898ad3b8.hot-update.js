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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_settings_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/settings-provider */ \"(app-pages-browser)/./components/settings-provider.tsx\");\n/* harmony import */ var _components_ui_background_lines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/background-lines */ \"(app-pages-browser)/./components/ui/background-lines.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app/page.tsx\",\"import\":\"Playfair_Display\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"playfairDisplay\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app/page.tsx\\\",\\\"import\\\":\\\"Playfair_Display\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"playfairDisplay\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ui_bento__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/bento */ \"(app-pages-browser)/./components/ui/bento.tsx\");\n/* harmony import */ var _components_ui_background_beams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/background-beams */ \"(app-pages-browser)/./components/ui/background-beams.tsx\");\n/* harmony import */ var _components_vanishing_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/vanishing_text */ \"(app-pages-browser)/./components/vanishing_text.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_ui_multi_step_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ui/multi-step-loader */ \"(app-pages-browser)/./components/ui/multi-step-loader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst loadingStates = [\n    {\n        text: \"Enhancing accessibility features...\"\n    },\n    {\n        text: \"Researching visual impairments...\"\n    },\n    {\n        text: \"Configuring AI assistance...\"\n    },\n    {\n        text: \"Setting up OCR for text extraction...\"\n    },\n    {\n        text: \"Activating voice recognition & TTS...\"\n    },\n    {\n        text: \"Customizing UI with light/dark modes...\"\n    },\n    {\n        text: \"Optimizing for gamification & tools...\"\n    },\n    {\n        text: \"Finalizing social inclusion features...\"\n    }\n];\nfunction Home() {\n    _s();\n    const { reducedMotion, fontSize, accentColor, highContrast } = (0,_components_settings_provider__WEBPACK_IMPORTED_MODULE_1__.useSettings)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(true); // Initializing loading state to true\n    const [loadingTextIndex, setLoadingTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            // Simulate completion of loading process after 1 second\n            const loadingTimeout = setTimeout({\n                \"Home.useEffect.loadingTimeout\": ()=>{\n                    setLoading(false);\n                }\n            }[\"Home.useEffect.loadingTimeout\"], 4000); // Adjusted to 1 second\n            return ({\n                \"Home.useEffect\": ()=>{\n                    clearTimeout(loadingTimeout); // Cleanup timeout on unmount\n                }\n            })[\"Home.useEffect\"];\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen p-4 sm:p-6\",\n        style: {\n            fontSize: \"\".concat(fontSize / 16, \"rem\")\n        },\n        children: [\n            !reducedMotion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_multi_step_loader__WEBPACK_IMPORTED_MODULE_10__.MultiStepLoader, {\n                loadingStates: loadingStates,\n                loading: loading,\n                duration: 500\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            \"        \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"rounded-lg relative h-[70vh] flex items-center justify-center overflow-hidden mx-auto z-20 max-w-[1280px] mt-[5rem]\",\n                \"aria-labelledby\": \"hero-heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_background_lines__WEBPACK_IMPORTED_MODULE_2__.BackgroundLines, {\n                    reducedMotion: reducedMotion,\n                    className: \"flex items-center justify-center w-full flex-col px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/hero.jpg\",\n                                    alt: \"Immersive Background\",\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"object-cover w-full h-full opacity-40 brightness-60 contrast-10\", highContrast && \"brightness-40 contrast-150 border-2 border-white antialiased\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-black/40\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_vanishing_text__WEBPACK_IMPORTED_MODULE_8__.PlaceholdersAndVanishInputDemo, {}, void 0, false, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_bento__WEBPACK_IMPORTED_MODULE_6__.FeaturesSectionDemo, {}, void 0, false, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20\",\n                \"aria-labelledby\": \"waitlist-heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[40rem] w-full rounded-md relative border flex flex-col items-center justify-center antialiased\",\n                    style: {\n                        backgroundColor: \"var(--background)\",\n                        color: \"var(--foreground)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-2xl mx-auto p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    id: \"join-heading\",\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"relative z-10 text-lg md:text-7xl bg-clip-text text-foreground text-center font-bold\", (next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11___default().className)),\n                                    style: {\n                                        fontSize: \"\".concat(fontSize / 16 * 3.125, \"rem\")\n                                    },\n                                    children: \"Join LifeSight: as a volunteer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10\",\n                                    style: {\n                                        fontSize: \"\".concat(fontSize / 16 * 0.875, \"rem\")\n                                    },\n                                    children: \"LifeSight is a powerful tool designed for visually impaired users. We are committed to providing inclusive and accessible solutions for education, social inclusion, and everyday tasks. Our app leverages AI-powered OCR, voice input/output, and offline functionality to make the world more accessible to all.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 143,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10\",\n                                    style: {\n                                        fontSize: \"\".concat(fontSize / 16 * 0.875, \"rem\")\n                                    },\n                                    children: \"Sign up now to receive updates and be part of the LifeSight community!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"relative w-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                            type: \"email\",\n                                            placeholder: \"your-email@example.com\",\n                                            \"aria-label\": \"Enter your email address\",\n                                            className: \"rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4\",\n                                            style: {\n                                                fontSize: \"\".concat(fontSize / 16 * 0.875, \"rem\"),\n                                                backgroundColor: \"var(--input)\",\n                                                color: \"var(--foreground)\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                            lineNumber: 160,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"default\",\n                                            type: \"submit\",\n                                            className: \"absolute right-0 top-0 bg-teal-500 text-white p-2 rounded-sm border-r border-y border-neutral-800 focus:ring-2 focus:ring-teal-500\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                className: \"h-5 w-5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                                lineNumber: 176,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                            lineNumber: 171,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_background_beams__WEBPACK_IMPORTED_MODULE_7__.BackgroundBeams, {}, void 0, false, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 181,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MvKJDp4RQ2k8zclAJoKE82sE4RU=\", false, function() {\n    return [\n        _components_settings_provider__WEBPACK_IMPORTED_MODULE_1__.useSettings\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxLQUFLLE9BQU07Z0RBQ25Db0IsaUJBQWlCO2dEQUNqQkMsT0FBTzs0Q0FDVDs7Ozs7O3NEQUVGLDhEQUFDdEMseURBQU1BOzRDQUNMOEMsU0FBUTs0Q0FDUkgsTUFBSzs0Q0FDTGYsV0FBVTtzREFFViw0RUFBQzNCLHVGQUFVQTtnREFBQzJCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUs1Qiw4REFBQ3RCLDRFQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtHQXZJd0JTOztRQUN5Q2pCLHNFQUFXQTs7O0tBRHBEaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWVnaGF5dWFkaGlrYXJpL0RvY3VtZW50cy9MaWZlU2lnaHQvYXBwL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3MgfSBmcm9tICdAL2NvbXBvbmVudHMvc2V0dGluZ3MtcHJvdmlkZXInO1xuaW1wb3J0IHsgQmFja2dyb3VuZExpbmVzIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2JhY2tncm91bmQtbGluZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9jYXJkJztcbmltcG9ydCB7IEV5ZSwgTWVzc2FnZVNxdWFyZVRleHQsIFBob25lLCBMaWdodGJ1bGIsIFVzZXJzLCBDYWxlbmRhckRheXMsIE5ld3NwYXBlciwgQXJyb3dSaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2lucHV0JztcbmltcG9ydCB7IFRvb2x0aXBQcm92aWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy91aS90b29sdGlwJztcbmltcG9ydCB7IENhcm91c2VsLCBDYXJvdXNlbENvbnRlbnQsIENhcm91c2VsSXRlbSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9jYXJvdXNlbCc7XG5pbXBvcnQgeyBBbmFseXRpY3MgfSBmcm9tIFwiQHZlcmNlbC9hbmFseXRpY3MvcmVhY3RcIlxuaW1wb3J0IHsgU3BlZWRJbnNpZ2h0cyB9IGZyb20gXCJAdmVyY2VsL3NwZWVkLWluc2lnaHRzL25leHRcIlxuaW1wb3J0IHsgUGxheWZhaXJfRGlzcGxheSB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xuaW1wb3J0IHsgRmVhdHVyZXNTZWN0aW9uRGVtbyB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9iZW50byc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kQmVhbXMgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYmFja2dyb3VuZC1iZWFtcyc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlcnNBbmRWYW5pc2hJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9wbGFjZWhvbGRlcnMtYW5kLXZhbmlzaC1pbnB1dCc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlcnNBbmRWYW5pc2hJbnB1dERlbW8gfSBmcm9tICdAL2NvbXBvbmVudHMvdmFuaXNoaW5nX3RleHQnO1xuY29uc3QgcGxheWZhaXJEaXNwbGF5ID0gUGxheWZhaXJfRGlzcGxheSh7IHN1YnNldHM6IFsnbGF0aW4nXSB9KTtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNdWx0aVN0ZXBMb2FkZXIgYXMgTG9hZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9tdWx0aS1zdGVwLWxvYWRlclwiO1xuaW1wb3J0IHsgSWNvblNxdWFyZVJvdW5kZWRYIH0gZnJvbSBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjtcblxuY29uc3QgbG9hZGluZ1N0YXRlcyA9IFtcbiAge1xuICAgIHRleHQ6IFwiRW5oYW5jaW5nIGFjY2Vzc2liaWxpdHkgZmVhdHVyZXMuLi5cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiUmVzZWFyY2hpbmcgdmlzdWFsIGltcGFpcm1lbnRzLi4uXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkNvbmZpZ3VyaW5nIEFJIGFzc2lzdGFuY2UuLi5cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiU2V0dGluZyB1cCBPQ1IgZm9yIHRleHQgZXh0cmFjdGlvbi4uLlwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJBY3RpdmF0aW5nIHZvaWNlIHJlY29nbml0aW9uICYgVFRTLi4uXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkN1c3RvbWl6aW5nIFVJIHdpdGggbGlnaHQvZGFyayBtb2Rlcy4uLlwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJPcHRpbWl6aW5nIGZvciBnYW1pZmljYXRpb24gJiB0b29scy4uLlwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJGaW5hbGl6aW5nIHNvY2lhbCBpbmNsdXNpb24gZmVhdHVyZXMuLi5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgcmVkdWNlZE1vdGlvbiwgZm9udFNpemUsIGFjY2VudENvbG9yLCBoaWdoQ29udHJhc3QgfSA9IHVzZVNldHRpbmdzKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAgLy8gSW5pdGlhbGl6aW5nIGxvYWRpbmcgc3RhdGUgdG8gdHJ1ZVxuICBjb25zdCBbbG9hZGluZ1RleHRJbmRleCwgc2V0TG9hZGluZ1RleHRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNpbXVsYXRlIGNvbXBsZXRpb24gb2YgbG9hZGluZyBwcm9jZXNzIGFmdGVyIDEgc2Vjb25kXG4gICAgY29uc3QgbG9hZGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0sIDQwMDApOyAgLy8gQWRqdXN0ZWQgdG8gMSBzZWNvbmRcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQobG9hZGluZ1RpbWVvdXQpOyAvLyBDbGVhbnVwIHRpbWVvdXQgb24gdW5tb3VudFxuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8bWFpblxuICAgICAgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtNCBzbTpwLTZcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IGAke2ZvbnRTaXplIC8gMTZ9cmVtYCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyFyZWR1Y2VkTW90aW9uICYmIChcbiAgICAgICAgPExvYWRlciBsb2FkaW5nU3RhdGVzPXtsb2FkaW5nU3RhdGVzfSBsb2FkaW5nPXtsb2FkaW5nfSBkdXJhdGlvbj17NTAwfSAvPlxuICAgICAgKX0gICAgICAgIHsvKiBIZXJvIFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvblxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHJlbGF0aXZlIGgtWzcwdmhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiBteC1hdXRvIHotMjAgbWF4LXctWzEyODBweF0gbXQtWzVyZW1dXCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaGVyby1oZWFkaW5nXCJcbiAgICAgID5cbiAgICAgICAgPEJhY2tncm91bmRMaW5lc1xuICAgICAgICAgIHJlZHVjZWRNb3Rpb249e3JlZHVjZWRNb3Rpb259XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGZsZXgtY29sIHB4LTRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcHViLWYzNzQ2ZThiYmM2MjRlZjVhNjk4N2VhYzA1ZWZlM2Y3LnIyLmRldi9oZXJvLmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIkltbWVyc2l2ZSBCYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICBcIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsIG9wYWNpdHktNDAgYnJpZ2h0bmVzcy02MCBjb250cmFzdC0xMFwiLFxuICAgICAgICAgICAgICAgIGhpZ2hDb250cmFzdCAmJiBcImJyaWdodG5lc3MtNDAgY29udHJhc3QtMTUwIGJvcmRlci0yIGJvcmRlci13aGl0ZSBhbnRpYWxpYXNlZFwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrLzQwXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyc0FuZFZhbmlzaElucHV0RGVtbyAvPlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NuKFwidGV4dC01eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCIsIHBsYXlmYWlyRGlzcGxheS5jbGFzc05hbWUpfSBzdHlsZT17eyBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDMuMTI1fXJlbWAgfX0+XG4gICAgICAgICAgICAgIEVtcG93ZXJpbmcgSW5kZXBlbmRlbmNlIFRocm91Z2ggQUkgVmlzaW9uXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlLzgwXCIgc3R5bGU9e3sgZm9udFNpemU6IGAke2ZvbnRTaXplIC8gMTYgKiAxLjI1fXJlbWAgfX0+XG4gICAgICAgICAgICAgIEV4cGVyaWVuY2UgYSBuZXcgbGV2ZWwgb2YgYWNjZXNzaWJpbGl0eSB3aXRoIG91ciBBSS1wb3dlcmVkIHRvb2xzIGRlc2lnbmVkIGZvciB0aGUgdmlzdWFsbHkgaW1wYWlyZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gYXNDaGlsZCB2YXJpYW50PVwiYWNjZW50XCIgc2l6ZT1cImxnXCIgc3R5bGU9e3sgZm9udFNpemU6IGAke2ZvbnRTaXplIC8gMTYgKiAwLjg3NX1yZW1gLCBiYWNrZ3JvdW5kQ29sb3I6IGFjY2VudENvbG9yIH19PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXBwXCI+R2V0IFN0YXJ0ZWQ8L0xpbms+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIGFzQ2hpbGQgdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwibGdcIiBzdHlsZT17eyBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDAuODc1fXJlbWAgfX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sZWFybi1tb3JlXCI+TGVhcm4gTW9yZTwvTGluaz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvQmFja2dyb3VuZExpbmVzPlxuICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIG1heC13LVsxMjgwcHhdIG14LWF1dG8gei0yMCc+XG4gICAgICAgIDxGZWF0dXJlc1NlY3Rpb25EZW1vIC8+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBXYWl0bGlzdCBTZWN0aW9uICovfVxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIG1heC13LVsxMjgwcHhdIG14LWF1dG8gei0yMFwiXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIndhaXRsaXN0LWhlYWRpbmdcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC1bNDByZW1dIHctZnVsbCByb3VuZGVkLW1kIHJlbGF0aXZlIGJvcmRlciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBhbnRpYWxpYXNlZFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1iYWNrZ3JvdW5kKVwiLCAvLyBVc2luZyBkeW5hbWljIGJhY2tncm91bmQgY29sb3IgZnJvbSBDU1MgdmFyaWFibGVzXG4gICAgICAgICAgICBjb2xvcjogXCJ2YXIoLS1mb3JlZ3JvdW5kKVwiLCAvLyBVc2luZyBkeW5hbWljIHRleHQgY29sb3IgZnJvbSBDU1MgdmFyaWFibGVzXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG8gcC00XCI+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgaWQ9XCJqb2luLWhlYWRpbmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgIFwicmVsYXRpdmUgei0xMCB0ZXh0LWxnIG1kOnRleHQtN3hsIGJnLWNsaXAtdGV4dCB0ZXh0LWZvcmVncm91bmQgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgcGxheWZhaXJEaXNwbGF5LmNsYXNzTmFtZVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDMuMTI1fXJlbWAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSm9pbiBMaWZlU2lnaHQ6IGFzIGEgdm9sdW50ZWVyXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kIG1heC13LWxnIG14LWF1dG8gbXktMiB0ZXh0LXNtIHRleHQtY2VudGVyIHJlbGF0aXZlIHotMTBcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDAuODc1fXJlbWAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTGlmZVNpZ2h0IGlzIGEgcG93ZXJmdWwgdG9vbCBkZXNpZ25lZCBmb3IgdmlzdWFsbHkgaW1wYWlyZWQgdXNlcnMuIFdlIGFyZVxuICAgICAgICAgICAgICBjb21taXR0ZWQgdG8gcHJvdmlkaW5nIGluY2x1c2l2ZSBhbmQgYWNjZXNzaWJsZSBzb2x1dGlvbnMgZm9yIGVkdWNhdGlvbixcbiAgICAgICAgICAgICAgc29jaWFsIGluY2x1c2lvbiwgYW5kIGV2ZXJ5ZGF5IHRhc2tzLiBPdXIgYXBwIGxldmVyYWdlcyBBSS1wb3dlcmVkIE9DUixcbiAgICAgICAgICAgICAgdm9pY2UgaW5wdXQvb3V0cHV0LCBhbmQgb2ZmbGluZSBmdW5jdGlvbmFsaXR5IHRvIG1ha2UgdGhlIHdvcmxkIG1vcmVcbiAgICAgICAgICAgICAgYWNjZXNzaWJsZSB0byBhbGwuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmQgbWF4LXctbGcgbXgtYXV0byBteS0yIHRleHQtc20gdGV4dC1jZW50ZXIgcmVsYXRpdmUgei0xMFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMC44NzV9cmVtYCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIHVwIG5vdyB0byByZWNlaXZlIHVwZGF0ZXMgYW5kIGJlIHBhcnQgb2YgdGhlIExpZmVTaWdodCBjb21tdW5pdHkhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXItZW1haWxAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTgwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy10ZWFsLTUwMCB3LWZ1bGwgcmVsYXRpdmUgei0xMCBtdC00XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGAke2ZvbnRTaXplIC8gMTYgKiAwLjg3NX1yZW1gLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLWlucHV0KVwiLCAvLyBVc2luZyBkeW5hbWljIGlucHV0IGNvbG9yIGZyb20gQ1NTIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwidmFyKC0tZm9yZWdyb3VuZClcIiwgLy8gVXNpbmcgZHluYW1pYyB0ZXh0IGNvbG9yIGZyb20gQ1NTIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBiZy10ZWFsLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLXNtIGJvcmRlci1yIGJvcmRlci15IGJvcmRlci1uZXV0cmFsLTgwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy10ZWFsLTUwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8QmFja2dyb3VuZEJlYW1zIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZXR0aW5ncyIsIkJhY2tncm91bmRMaW5lcyIsIkJ1dHRvbiIsIkFycm93UmlnaHQiLCJjbiIsIklucHV0IiwicGxheWZhaXJEaXNwbGF5IiwiRmVhdHVyZXNTZWN0aW9uRGVtbyIsIkJhY2tncm91bmRCZWFtcyIsIlBsYWNlaG9sZGVyc0FuZFZhbmlzaElucHV0RGVtbyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNdWx0aVN0ZXBMb2FkZXIiLCJMb2FkZXIiLCJsb2FkaW5nU3RhdGVzIiwidGV4dCIsIkhvbWUiLCJyZWR1Y2VkTW90aW9uIiwiZm9udFNpemUiLCJhY2NlbnRDb2xvciIsImhpZ2hDb250cmFzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZGluZ1RleHRJbmRleCIsInNldExvYWRpbmdUZXh0SW5kZXgiLCJsb2FkaW5nVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtYWluIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkdXJhdGlvbiIsInNlY3Rpb24iLCJhcmlhLWxhYmVsbGVkYnkiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImgxIiwiaWQiLCJwIiwiZm9ybSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJ2YXJpYW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});