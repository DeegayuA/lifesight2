"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"6e2bad46e9ef\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9ob21lL3Byb2plY3QvYXBwL2dsb2JhbHMuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiNmUyYmFkNDZlOWVmXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/theme-provider.tsx":
/*!***************************************!*\
  !*** ./components/theme-provider.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ \n\nconst ThemeProvider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_c = ()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\")).then((mod)=>mod.ThemeProvider), {\n    loadableGenerated: {\n        modules: [\n            \"components/theme-provider.tsx -> \" + \"next-themes\"\n        ]\n    },\n    ssr: false,\n    loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                visibility: 'hidden'\n            }\n        }, void 0, false, {\n            fileName: \"/home/project/components/theme-provider.tsx\",\n            lineNumber: 11,\n            columnNumber: 20\n        }, undefined)\n});\n_c1 = ThemeProvider;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"ThemeProvider$dynamic\");\n$RefreshReg$(_c1, \"ThemeProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGhlbWUtcHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFbUM7QUFJbkMsTUFBTUMsZ0JBQWdCRCx3REFBT0EsTUFDM0IsSUFBTSx3S0FBcUIsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlGLGFBQWE7Ozs7OztJQUV6REcsS0FBSztJQUNMQyxTQUFTLGtCQUFNLDhEQUFDQztZQUFJQyxPQUFPO2dCQUFFQyxZQUFZO1lBQVM7Ozs7Ozs7O0FBSTdCIiwic291cmNlcyI6WyIvaG9tZS9wcm9qZWN0L2NvbXBvbmVudHMvdGhlbWUtcHJvdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgdHlwZSBUaGVtZVByb3ZpZGVyUHJvcHMgfSBmcm9tIFwibmV4dC10aGVtZXMvZGlzdC90eXBlc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGhlbWVQcm92aWRlciA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnbmV4dC10aGVtZXMnKS50aGVuKChtb2QpID0+IG1vZC5UaGVtZVByb3ZpZGVyKSxcbiAge1xuICAgIHNzcjogZmFsc2UsXG4gICAgbG9hZGluZzogKCkgPT4gPGRpdiBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fT48L2Rpdj4sXG4gIH1cbik7XG5cbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiVGhlbWVQcm92aWRlciIsInRoZW4iLCJtb2QiLCJzc3IiLCJsb2FkaW5nIiwiZGl2Iiwic3R5bGUiLCJ2aXNpYmlsaXR5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/theme-provider.tsx\n"));

/***/ })

});