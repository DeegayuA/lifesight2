"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vitalets";
exports.ids = ["vendor-chunks/@vitalets"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vitalets/google-translate-api/dist/cjs/helpers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vitalets/google-translate-api/dist/cjs/helpers.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.extractTooManyRequestsInfo = void 0;\nfunction extractTooManyRequestsInfo(html) {\n    const ip = html.match(/IP address: (.+?)<br>/)?.[1] || '';\n    const time = html.match(/Time: (.+?)<br>/)?.[1] || '';\n    const url = (html.match(/URL: (.+?)<br>/)?.[1] || '').replace(/&amp;/g, '&');\n    return { ip, time, url };\n}\nexports.extractTooManyRequestsInfo = extractTooManyRequestsInfo;\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZpdGFsZXRzL2dvb2dsZS10cmFuc2xhdGUtYXBpL2Rpc3QvY2pzL2hlbHBlcnMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RSxhQUFhO0FBQ2I7QUFDQSxrQ0FBa0M7QUFDbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQHZpdGFsZXRzL2dvb2dsZS10cmFuc2xhdGUtYXBpL2Rpc3QvY2pzL2hlbHBlcnMuanM/ZmNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXh0cmFjdFRvb01hbnlSZXF1ZXN0c0luZm8gPSB2b2lkIDA7XG5mdW5jdGlvbiBleHRyYWN0VG9vTWFueVJlcXVlc3RzSW5mbyhodG1sKSB7XG4gICAgY29uc3QgaXAgPSBodG1sLm1hdGNoKC9JUCBhZGRyZXNzOiAoLis/KTxicj4vKT8uWzFdIHx8ICcnO1xuICAgIGNvbnN0IHRpbWUgPSBodG1sLm1hdGNoKC9UaW1lOiAoLis/KTxicj4vKT8uWzFdIHx8ICcnO1xuICAgIGNvbnN0IHVybCA9IChodG1sLm1hdGNoKC9VUkw6ICguKz8pPGJyPi8pPy5bMV0gfHwgJycpLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG4gICAgcmV0dXJuIHsgaXAsIHRpbWUsIHVybCB9O1xufVxuZXhwb3J0cy5leHRyYWN0VG9vTWFueVJlcXVlc3RzSW5mbyA9IGV4dHJhY3RUb29NYW55UmVxdWVzdHNJbmZvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vitalets/google-translate-api/dist/cjs/helpers.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@vitalets/google-translate-api/dist/cjs/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vitalets/google-translate-api/dist/cjs/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Translator = exports.translate = void 0;\nconst node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ \"(ssr)/./node_modules/node-fetch/lib/index.js\"));\nconst http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ \"(ssr)/./node_modules/http-errors/index.js\"));\nconst helpers_js_1 = __webpack_require__(/*! ./helpers.js */ \"(ssr)/./node_modules/@vitalets/google-translate-api/dist/cjs/helpers.js\");\nconst defaults = {\n    from: 'auto',\n    to: 'en',\n    host: 'translate.google.com',\n};\nasync function translate(inputText, options) {\n    return new Translator(inputText, options).translate();\n}\nexports.translate = translate;\nclass Translator {\n    constructor(inputText, options) {\n        this.inputText = inputText;\n        this.options = Object.assign({}, defaults, options);\n    }\n    async translate() {\n        const url = this.buildUrl();\n        const fetchOptions = this.buildFetchOptions();\n        const res = await (0, node_fetch_1.default)(url, fetchOptions);\n        if (!res.ok)\n            throw await this.buildError(res);\n        const raw = await res.json();\n        const text = this.buildResText(raw);\n        return { text, raw };\n    }\n    buildUrl() {\n        const { host } = this.options;\n        return [\n            `https://${host}/translate_a/single`,\n            '?client=at',\n            '&dt=t',\n            '&dt=rm',\n            '&dj=1', // result as pretty json instead of deep nested arrays\n        ].join('');\n    }\n    buildBody() {\n        const { from, to } = this.options;\n        const params = {\n            sl: from,\n            tl: to,\n            q: this.inputText,\n        };\n        return new URLSearchParams(params).toString();\n    }\n    buildFetchOptions() {\n        const { fetchOptions } = this.options;\n        const res = Object.assign({}, fetchOptions);\n        res.method = 'POST';\n        res.headers = Object.assign({}, res.headers, {\n            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',\n        });\n        res.body = this.buildBody();\n        return res;\n    }\n    buildResText({ sentences }) {\n        return sentences\n            .filter((s) => 'trans' in s)\n            .map(s => s.trans)\n            .join('');\n    }\n    async buildError(res) {\n        if (res.status === 429) {\n            const text = await res.text();\n            const { ip, time, url } = (0, helpers_js_1.extractTooManyRequestsInfo)(text);\n            const message = `${res.statusText} IP: ${ip}, Time: ${time}, Url: ${url}`;\n            return (0, http_errors_1.default)(res.status, message);\n        }\n        else {\n            return (0, http_errors_1.default)(res.status, res.statusText);\n        }\n    }\n}\nexports.Translator = Translator;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZpdGFsZXRzL2dvb2dsZS10cmFuc2xhdGUtYXBpL2Rpc3QvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCLEdBQUcsaUJBQWlCO0FBQ3RDLHFDQUFxQyxtQkFBTyxDQUFDLGdFQUFZO0FBQ3pELHNDQUFzQyxtQkFBTyxDQUFDLDhEQUFhO0FBQzNELHFCQUFxQixtQkFBTyxDQUFDLDZGQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSx1QkFBdUIsS0FBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQixvQ0FBb0M7QUFDcEM7QUFDQSxzQ0FBc0M7QUFDdEMsK0RBQStEO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQywrQkFBK0IsZ0JBQWdCLE1BQU0sR0FBRyxVQUFVLEtBQUssU0FBUyxJQUFJO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0B2aXRhbGV0cy9nb29nbGUtdHJhbnNsYXRlLWFwaS9kaXN0L2Nqcy9pbmRleC5qcz8wY2JjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UcmFuc2xhdG9yID0gZXhwb3J0cy50cmFuc2xhdGUgPSB2b2lkIDA7XG5jb25zdCBub2RlX2ZldGNoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5vZGUtZmV0Y2hcIikpO1xuY29uc3QgaHR0cF9lcnJvcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaHR0cC1lcnJvcnNcIikpO1xuY29uc3QgaGVscGVyc19qc18xID0gcmVxdWlyZShcIi4vaGVscGVycy5qc1wiKTtcbmNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGZyb206ICdhdXRvJyxcbiAgICB0bzogJ2VuJyxcbiAgICBob3N0OiAndHJhbnNsYXRlLmdvb2dsZS5jb20nLFxufTtcbmFzeW5jIGZ1bmN0aW9uIHRyYW5zbGF0ZShpbnB1dFRleHQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0b3IoaW5wdXRUZXh0LCBvcHRpb25zKS50cmFuc2xhdGUoKTtcbn1cbmV4cG9ydHMudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuY2xhc3MgVHJhbnNsYXRvciB7XG4gICAgY29uc3RydWN0b3IoaW5wdXRUZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gaW5wdXRUZXh0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5idWlsZFVybCgpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB0aGlzLmJ1aWxkRmV0Y2hPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0ICgwLCBub2RlX2ZldGNoXzEuZGVmYXVsdCkodXJsLCBmZXRjaE9wdGlvbnMpO1xuICAgICAgICBpZiAoIXJlcy5vaylcbiAgICAgICAgICAgIHRocm93IGF3YWl0IHRoaXMuYnVpbGRFcnJvcihyZXMpO1xuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5idWlsZFJlc1RleHQocmF3KTtcbiAgICAgICAgcmV0dXJuIHsgdGV4dCwgcmF3IH07XG4gICAgfVxuICAgIGJ1aWxkVXJsKCkge1xuICAgICAgICBjb25zdCB7IGhvc3QgfSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGBodHRwczovLyR7aG9zdH0vdHJhbnNsYXRlX2Evc2luZ2xlYCxcbiAgICAgICAgICAgICc/Y2xpZW50PWF0JyxcbiAgICAgICAgICAgICcmZHQ9dCcsXG4gICAgICAgICAgICAnJmR0PXJtJyxcbiAgICAgICAgICAgICcmZGo9MScsIC8vIHJlc3VsdCBhcyBwcmV0dHkganNvbiBpbnN0ZWFkIG9mIGRlZXAgbmVzdGVkIGFycmF5c1xuICAgICAgICBdLmpvaW4oJycpO1xuICAgIH1cbiAgICBidWlsZEJvZHkoKSB7XG4gICAgICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc2w6IGZyb20sXG4gICAgICAgICAgICB0bDogdG8sXG4gICAgICAgICAgICBxOiB0aGlzLmlucHV0VGV4dCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpO1xuICAgIH1cbiAgICBidWlsZEZldGNoT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgeyBmZXRjaE9wdGlvbnMgfSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7fSwgZmV0Y2hPcHRpb25zKTtcbiAgICAgICAgcmVzLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgcmVzLmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCByZXMuaGVhZGVycywge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcsXG4gICAgICAgIH0pO1xuICAgICAgICByZXMuYm9keSA9IHRoaXMuYnVpbGRCb2R5KCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGJ1aWxkUmVzVGV4dCh7IHNlbnRlbmNlcyB9KSB7XG4gICAgICAgIHJldHVybiBzZW50ZW5jZXNcbiAgICAgICAgICAgIC5maWx0ZXIoKHMpID0+ICd0cmFucycgaW4gcylcbiAgICAgICAgICAgIC5tYXAocyA9PiBzLnRyYW5zKVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBhc3luYyBidWlsZEVycm9yKHJlcykge1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDI5KSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgaXAsIHRpbWUsIHVybCB9ID0gKDAsIGhlbHBlcnNfanNfMS5leHRyYWN0VG9vTWFueVJlcXVlc3RzSW5mbykodGV4dCk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYCR7cmVzLnN0YXR1c1RleHR9IElQOiAke2lwfSwgVGltZTogJHt0aW1lfSwgVXJsOiAke3VybH1gO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBodHRwX2Vycm9yc18xLmRlZmF1bHQpKHJlcy5zdGF0dXMsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICgwLCBodHRwX2Vycm9yc18xLmRlZmF1bHQpKHJlcy5zdGF0dXMsIHJlcy5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVHJhbnNsYXRvciA9IFRyYW5zbGF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vitalets/google-translate-api/dist/cjs/index.js\n");

/***/ })

};
;