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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_settings_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/settings-provider */ \"(app-pages-browser)/./components/settings-provider.tsx\");\n/* harmony import */ var _components_ui_background_lines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/background-lines */ \"(app-pages-browser)/./components/ui/background-lines.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app/page.tsx\",\"import\":\"Playfair_Display\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"playfairDisplay\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app/page.tsx\\\",\\\"import\\\":\\\"Playfair_Display\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"playfairDisplay\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ui_bento__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/bento */ \"(app-pages-browser)/./components/ui/bento.tsx\");\n/* harmony import */ var _components_ui_background_beams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/background-beams */ \"(app-pages-browser)/./components/ui/background-beams.tsx\");\n/* harmony import */ var _components_vanishing_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/vanishing_text */ \"(app-pages-browser)/./components/vanishing_text.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_ui_multi_step_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ui/multi-step-loader */ \"(app-pages-browser)/./components/ui/multi-step-loader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst loadingStates = [\n    {\n        text: \"Preparing to enhance accessibility features...\"\n    },\n    {\n        text: \"Gathering the latest research on visual impairments...\"\n    },\n    {\n        text: \"Configuring AI integration for personalized assistance...\"\n    },\n    {\n        text: \"Setting up OCR technology for text extraction...\"\n    },\n    {\n        text: \"Activating real-time voice recognition and text-to-speech capabilities...\"\n    },\n    {\n        text: \"Customizing user interface with light/dark mode options...\"\n    },\n    {\n        text: \"Optimizing the platform for gamification and interactive tools...\"\n    },\n    {\n        text: \"Finalizing accessibility features for social inclusion and independence...\"\n    }\n];\nfunction Home() {\n    _s();\n    const { reducedMotion, fontSize, accentColor, highContrast } = (0,_components_settings_provider__WEBPACK_IMPORTED_MODULE_1__.useSettings)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(true); // Initializing loading state to true\n    const [loadingTextIndex, setLoadingTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            // Simulate completion of loading process after 1 second\n            const loadingTimeout = setTimeout({\n                \"Home.useEffect.loadingTimeout\": ()=>{\n                    setLoading(false);\n                }\n            }[\"Home.useEffect.loadingTimeout\"], 4000); // Adjusted to 1 second\n            return ({\n                \"Home.useEffect\": ()=>{\n                    clearTimeout(loadingTimeout); // Cleanup timeout on unmount\n                }\n            })[\"Home.useEffect\"];\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen p-4 sm:p-6\",\n        style: {\n            fontSize: \"\".concat(fontSize / 16, \"rem\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_multi_step_loader__WEBPACK_IMPORTED_MODULE_10__.MultiStepLoader, {\n                loadingStates: loadingStates,\n                loading: loading,\n                duration: 500\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"rounded-lg relative h-[70vh] flex items-center justify-center overflow-hidden mx-auto z-20 max-w-[1280px] mt-[5rem]\",\n                \"aria-labelledby\": \"hero-heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_background_lines__WEBPACK_IMPORTED_MODULE_2__.BackgroundLines, {\n                    reducedMotion: reducedMotion,\n                    className: \"flex items-center justify-center w-full flex-col px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/hero.jpg\",\n                                    alt: \"Immersive Background\",\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"object-cover w-full h-full opacity-40 brightness-60 contrast-10\", highContrast && \"brightness-40 contrast-150 border-2 border-white antialiased\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 3\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-black/40\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 3\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 10\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_vanishing_text__WEBPACK_IMPORTED_MODULE_8__.PlaceholdersAndVanishInputDemo, {}, void 0, false, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_bento__WEBPACK_IMPORTED_MODULE_6__.FeaturesSectionDemo, {}, void 0, false, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20\",\n                \"aria-labelledby\": \"waitlist-heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[40rem] w-full rounded-md relative border flex flex-col items-center justify-center antialiased\",\n                    style: {\n                        backgroundColor: \"var(--background)\",\n                        color: \"var(--foreground)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-2xl mx-auto p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    id: \"join-heading\",\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"relative z-10 text-lg md:text-7xl bg-clip-text text-foreground text-center font-bold\", (next_font_google_target_css_path_app_page_tsx_import_Playfair_Display_arguments_subsets_latin_variableName_playfairDisplay___WEBPACK_IMPORTED_MODULE_11___default().className)),\n                                    style: {\n                                        fontSize: \"\".concat(fontSize / 16 * 3.125, \"rem\")\n                                    },\n                                    children: \"Join LifeSight: as a volunteer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10\",\n                                    style: {\n                                        fontSize: \"\".concat(fontSize / 16 * 0.875, \"rem\")\n                                    },\n                                    children: \"LifeSight is a powerful tool designed for visually impaired users. We are committed to providing inclusive and accessible solutions for education, social inclusion, and everyday tasks. Our app leverages AI-powered OCR, voice input/output, and offline functionality to make the world more accessible to all.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10\",\n                                    style: {\n                                        fontSize: \"\".concat(fontSize / 16 * 0.875, \"rem\")\n                                    },\n                                    children: \"Sign up now to receive updates and be part of the LifeSight community!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"relative w-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                            type: \"email\",\n                                            placeholder: \"your-email@example.com\",\n                                            \"aria-label\": \"Enter your email address\",\n                                            className: \"rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4\",\n                                            style: {\n                                                fontSize: \"\".concat(fontSize / 16 * 0.875, \"rem\"),\n                                                backgroundColor: \"var(--input)\",\n                                                color: \"var(--foreground)\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                            lineNumber: 159,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"default\",\n                                            type: \"submit\",\n                                            className: \"absolute right-0 top-0 bg-teal-500 text-white p-2 rounded-sm border-r border-y border-neutral-800 focus:ring-2 focus:ring-teal-500\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                className: \"h-5 w-5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                                lineNumber: 175,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                            lineNumber: 170,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_background_beams__WEBPACK_IMPORTED_MODULE_7__.BackgroundBeams, {}, void 0, false, {\n                            fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                            lineNumber: 180,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deeghayuadhikari/Documents/LifeSight/app/page.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MvKJDp4RQ2k8zclAJoKE82sE4RU=\", false, function() {\n    return [\n        _components_settings_provider__WEBPACK_IMPORTED_MODULE_1__.useSettings\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFDbkNvQixpQkFBaUI7Z0RBQ2pCQyxPQUFPOzRDQUNUOzs7Ozs7c0RBRUYsOERBQUN0Qyx5REFBTUE7NENBQ0w4QyxTQUFROzRDQUNSSCxNQUFLOzRDQUNMZixXQUFVO3NEQUVWLDRFQUFDM0IsdUZBQVVBO2dEQUFDMkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSzVCLDhEQUFDdEIsNEVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0dBdEl3QlM7O1FBQ3lDakIsc0VBQVdBOzs7S0FEcERpQiIsInNvdXJjZXMiOlsiL1VzZXJzL2RlZWdoYXl1YWRoaWthcmkvRG9jdW1lbnRzL0xpZmVTaWdodC9hcHAvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTZXR0aW5ncyB9IGZyb20gJ0AvY29tcG9uZW50cy9zZXR0aW5ncy1wcm92aWRlcic7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kTGluZXMgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYmFja2dyb3VuZC1saW5lcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2NhcmQnO1xuaW1wb3J0IHsgRXllLCBNZXNzYWdlU3F1YXJlVGV4dCwgUGhvbmUsIExpZ2h0YnVsYiwgVXNlcnMsIENhbGVuZGFyRGF5cywgTmV3c3BhcGVyLCBBcnJvd1JpZ2h0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvaW5wdXQnO1xuaW1wb3J0IHsgVG9vbHRpcFByb3ZpZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3Rvb2x0aXAnO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIENhcm91c2VsQ29udGVudCwgQ2Fyb3VzZWxJdGVtIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2Nhcm91c2VsJztcbmltcG9ydCB7IEFuYWx5dGljcyB9IGZyb20gXCJAdmVyY2VsL2FuYWx5dGljcy9yZWFjdFwiXG5pbXBvcnQgeyBTcGVlZEluc2lnaHRzIH0gZnJvbSBcIkB2ZXJjZWwvc3BlZWQtaW5zaWdodHMvbmV4dFwiXG5pbXBvcnQgeyBQbGF5ZmFpcl9EaXNwbGF5IH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSc7XG5pbXBvcnQgeyBGZWF0dXJlc1NlY3Rpb25EZW1vIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2JlbnRvJztcbmltcG9ydCB7IEJhY2tncm91bmRCZWFtcyB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9iYWNrZ3JvdW5kLWJlYW1zJztcbmltcG9ydCB7IFBsYWNlaG9sZGVyc0FuZFZhbmlzaElucHV0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3BsYWNlaG9sZGVycy1hbmQtdmFuaXNoLWlucHV0JztcbmltcG9ydCB7IFBsYWNlaG9sZGVyc0FuZFZhbmlzaElucHV0RGVtbyB9IGZyb20gJ0AvY29tcG9uZW50cy92YW5pc2hpbmdfdGV4dCc7XG5jb25zdCBwbGF5ZmFpckRpc3BsYXkgPSBQbGF5ZmFpcl9EaXNwbGF5KHsgc3Vic2V0czogWydsYXRpbiddIH0pO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE11bHRpU3RlcExvYWRlciBhcyBMb2FkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL211bHRpLXN0ZXAtbG9hZGVyXCI7XG5pbXBvcnQgeyBJY29uU3F1YXJlUm91bmRlZFggfSBmcm9tIFwiQHRhYmxlci9pY29ucy1yZWFjdFwiO1xuXG5jb25zdCBsb2FkaW5nU3RhdGVzID0gW1xuICB7XG4gICAgdGV4dDogXCJQcmVwYXJpbmcgdG8gZW5oYW5jZSBhY2Nlc3NpYmlsaXR5IGZlYXR1cmVzLi4uXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkdhdGhlcmluZyB0aGUgbGF0ZXN0IHJlc2VhcmNoIG9uIHZpc3VhbCBpbXBhaXJtZW50cy4uLlwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJDb25maWd1cmluZyBBSSBpbnRlZ3JhdGlvbiBmb3IgcGVyc29uYWxpemVkIGFzc2lzdGFuY2UuLi5cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiU2V0dGluZyB1cCBPQ1IgdGVjaG5vbG9neSBmb3IgdGV4dCBleHRyYWN0aW9uLi4uXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkFjdGl2YXRpbmcgcmVhbC10aW1lIHZvaWNlIHJlY29nbml0aW9uIGFuZCB0ZXh0LXRvLXNwZWVjaCBjYXBhYmlsaXRpZXMuLi5cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiQ3VzdG9taXppbmcgdXNlciBpbnRlcmZhY2Ugd2l0aCBsaWdodC9kYXJrIG1vZGUgb3B0aW9ucy4uLlwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJPcHRpbWl6aW5nIHRoZSBwbGF0Zm9ybSBmb3IgZ2FtaWZpY2F0aW9uIGFuZCBpbnRlcmFjdGl2ZSB0b29scy4uLlwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJGaW5hbGl6aW5nIGFjY2Vzc2liaWxpdHkgZmVhdHVyZXMgZm9yIHNvY2lhbCBpbmNsdXNpb24gYW5kIGluZGVwZW5kZW5jZS4uLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyByZWR1Y2VkTW90aW9uLCBmb250U2l6ZSwgYWNjZW50Q29sb3IsIGhpZ2hDb250cmFzdCB9ID0gdXNlU2V0dGluZ3MoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7ICAvLyBJbml0aWFsaXppbmcgbG9hZGluZyBzdGF0ZSB0byB0cnVlXG4gIGNvbnN0IFtsb2FkaW5nVGV4dEluZGV4LCBzZXRMb2FkaW5nVGV4dEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2ltdWxhdGUgY29tcGxldGlvbiBvZiBsb2FkaW5nIHByb2Nlc3MgYWZ0ZXIgMSBzZWNvbmRcbiAgICBjb25zdCBsb2FkaW5nVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSwgNDAwMCk7ICAvLyBBZGp1c3RlZCB0byAxIHNlY29uZFxuICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGxvYWRpbmdUaW1lb3V0KTsgLy8gQ2xlYW51cCB0aW1lb3V0IG9uIHVubW91bnRcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBwLTQgc206cC02XCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2fXJlbWAsXG4gICAgICB9fVxuICAgID4gIFxuICAgICAgPExvYWRlciBsb2FkaW5nU3RhdGVzPXtsb2FkaW5nU3RhdGVzfSBsb2FkaW5nPXtsb2FkaW5nfSBkdXJhdGlvbj17NTAwfSAvPlxuICAgICAgICB7LyogSGVybyBTZWN0aW9uICovfVxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyByZWxhdGl2ZSBoLVs3MHZoXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gbXgtYXV0byB6LTIwIG1heC13LVsxMjgwcHhdIG10LVs1cmVtXVwiXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlcm8taGVhZGluZ1wiXG4gICAgICA+XG4gICAgICAgIDxCYWNrZ3JvdW5kTGluZXNcbiAgICAgICAgICByZWR1Y2VkTW90aW9uPXtyZWR1Y2VkTW90aW9ufVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBmbGV4LWNvbCBweC00XCJcbiAgICAgICAgPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XG4gIDxpbWdcbiAgICBzcmM9XCJodHRwczovL3B1Yi1mMzc0NmU4YmJjNjI0ZWY1YTY5ODdlYWMwNWVmZTNmNy5yMi5kZXYvaGVyby5qcGdcIlxuICAgIGFsdD1cIkltbWVyc2l2ZSBCYWNrZ3JvdW5kXCJcbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbCBvcGFjaXR5LTQwIGJyaWdodG5lc3MtNjAgY29udHJhc3QtMTBcIixcbiAgICAgIGhpZ2hDb250cmFzdCAmJiBcImJyaWdodG5lc3MtNDAgY29udHJhc3QtMTUwIGJvcmRlci0yIGJvcmRlci13aGl0ZSBhbnRpYWxpYXNlZFwiXG4gICAgKX1cbiAgLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrLzQwXCI+PC9kaXY+XG48L2Rpdj5cbiAgICAgICAgICA8UGxhY2Vob2xkZXJzQW5kVmFuaXNoSW5wdXREZW1vIC8+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LTV4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRcIiwgcGxheWZhaXJEaXNwbGF5LmNsYXNzTmFtZSl9IHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMy4xMjV9cmVtYCB9fT5cbiAgICAgICAgICAgICAgRW1wb3dlcmluZyBJbmRlcGVuZGVuY2UgVGhyb3VnaCBBSSBWaXNpb25cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtd2hpdGUvODBcIiBzdHlsZT17eyBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDEuMjV9cmVtYCB9fT5cbiAgICAgICAgICAgICAgRXhwZXJpZW5jZSBhIG5ldyBsZXZlbCBvZiBhY2Nlc3NpYmlsaXR5IHdpdGggb3VyIEFJLXBvd2VyZWQgdG9vbHMgZGVzaWduZWQgZm9yIHRoZSB2aXN1YWxseSBpbXBhaXJlZC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBhc0NoaWxkIHZhcmlhbnQ9XCJhY2NlbnRcIiBzaXplPVwibGdcIiBzdHlsZT17eyBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDAuODc1fXJlbWAsIGJhY2tncm91bmRDb2xvcjogYWNjZW50Q29sb3IgfX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcHBcIj5HZXQgU3RhcnRlZDwvTGluaz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gYXNDaGlsZCB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMC44NzV9cmVtYCB9fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xlYXJuLW1vcmVcIj5MZWFybiBNb3JlPC9MaW5rPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9CYWNrZ3JvdW5kTGluZXM+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgICAgIFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gbWF4LXctWzEyODBweF0gbXgtYXV0byB6LTIwJz5cbiAgICAgICAgPEZlYXR1cmVzU2VjdGlvbkRlbW8gLz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFdhaXRsaXN0IFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIG1heC13LVsxMjgwcHhdIG14LWF1dG8gei0yMFwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ3YWl0bGlzdC1oZWFkaW5nXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImgtWzQwcmVtXSB3LWZ1bGwgcm91bmRlZC1tZCByZWxhdGl2ZSBib3JkZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYW50aWFsaWFzZWRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1iYWNrZ3JvdW5kKVwiLCAvLyBVc2luZyBkeW5hbWljIGJhY2tncm91bmQgY29sb3IgZnJvbSBDU1MgdmFyaWFibGVzXG4gICAgICAgICAgY29sb3I6IFwidmFyKC0tZm9yZWdyb3VuZClcIiwgLy8gVXNpbmcgZHluYW1pYyB0ZXh0IGNvbG9yIGZyb20gQ1NTIHZhcmlhYmxlc1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvIHAtNFwiPlxuICAgICAgICAgIDxoMVxuICAgICAgICAgICAgaWQ9XCJqb2luLWhlYWRpbmdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgXCJyZWxhdGl2ZSB6LTEwIHRleHQtbGcgbWQ6dGV4dC03eGwgYmctY2xpcC10ZXh0IHRleHQtZm9yZWdyb3VuZCB0ZXh0LWNlbnRlciBmb250LWJvbGRcIixcbiAgICAgICAgICAgICAgcGxheWZhaXJEaXNwbGF5LmNsYXNzTmFtZVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMy4xMjV9cmVtYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEpvaW4gTGlmZVNpZ2h0OiBhcyBhIHZvbHVudGVlclxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZCBtYXgtdy1sZyBteC1hdXRvIG15LTIgdGV4dC1zbSB0ZXh0LWNlbnRlciByZWxhdGl2ZSB6LTEwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMC44NzV9cmVtYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExpZmVTaWdodCBpcyBhIHBvd2VyZnVsIHRvb2wgZGVzaWduZWQgZm9yIHZpc3VhbGx5IGltcGFpcmVkIHVzZXJzLiBXZSBhcmVcbiAgICAgICAgICAgIGNvbW1pdHRlZCB0byBwcm92aWRpbmcgaW5jbHVzaXZlIGFuZCBhY2Nlc3NpYmxlIHNvbHV0aW9ucyBmb3IgZWR1Y2F0aW9uLFxuICAgICAgICAgICAgc29jaWFsIGluY2x1c2lvbiwgYW5kIGV2ZXJ5ZGF5IHRhc2tzLiBPdXIgYXBwIGxldmVyYWdlcyBBSS1wb3dlcmVkIE9DUixcbiAgICAgICAgICAgIHZvaWNlIGlucHV0L291dHB1dCwgYW5kIG9mZmxpbmUgZnVuY3Rpb25hbGl0eSB0byBtYWtlIHRoZSB3b3JsZCBtb3JlXG4gICAgICAgICAgICBhY2Nlc3NpYmxlIHRvIGFsbC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZCBtYXgtdy1sZyBteC1hdXRvIG15LTIgdGV4dC1zbSB0ZXh0LWNlbnRlciByZWxhdGl2ZSB6LTEwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZSAvIDE2ICogMC44NzV9cmVtYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gdXAgbm93IHRvIHJlY2VpdmUgdXBkYXRlcyBhbmQgYmUgcGFydCBvZiB0aGUgTGlmZVNpZ2h0IGNvbW11bml0eSFcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyLWVtYWlsQGV4YW1wbGUuY29tXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTgwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy10ZWFsLTUwMCB3LWZ1bGwgcmVsYXRpdmUgei0xMCBtdC00XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogYCR7Zm9udFNpemUgLyAxNiAqIDAuODc1fXJlbWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLWlucHV0KVwiLCAvLyBVc2luZyBkeW5hbWljIGlucHV0IGNvbG9yIGZyb20gQ1NTIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInZhcigtLWZvcmVncm91bmQpXCIsIC8vIFVzaW5nIGR5bmFtaWMgdGV4dCBjb2xvciBmcm9tIENTUyB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTAgYmctdGVhbC01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1zbSBib3JkZXItciBib3JkZXIteSBib3JkZXItbmV1dHJhbC04MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctdGVhbC01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEJhY2tncm91bmRCZWFtcyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZXR0aW5ncyIsIkJhY2tncm91bmRMaW5lcyIsIkJ1dHRvbiIsIkFycm93UmlnaHQiLCJjbiIsIklucHV0IiwicGxheWZhaXJEaXNwbGF5IiwiRmVhdHVyZXNTZWN0aW9uRGVtbyIsIkJhY2tncm91bmRCZWFtcyIsIlBsYWNlaG9sZGVyc0FuZFZhbmlzaElucHV0RGVtbyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNdWx0aVN0ZXBMb2FkZXIiLCJMb2FkZXIiLCJsb2FkaW5nU3RhdGVzIiwidGV4dCIsIkhvbWUiLCJyZWR1Y2VkTW90aW9uIiwiZm9udFNpemUiLCJhY2NlbnRDb2xvciIsImhpZ2hDb250cmFzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZGluZ1RleHRJbmRleCIsInNldExvYWRpbmdUZXh0SW5kZXgiLCJsb2FkaW5nVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtYWluIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkdXJhdGlvbiIsInNlY3Rpb24iLCJhcmlhLWxhYmVsbGVkYnkiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImgxIiwiaWQiLCJwIiwiZm9ybSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJ2YXJpYW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});