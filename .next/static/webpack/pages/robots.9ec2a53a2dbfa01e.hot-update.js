"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/robots",{

/***/ "./pages/robots.js":
/*!*************************!*\
  !*** ./pages/robots.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_griffinbaker_Desktop_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_griffinbaker_Desktop_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_griffinbaker_Desktop_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Robots(props) {\n    var _this = this;\n    console.log(props.robots);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Robots\"\n            }, void 0, false, {\n                fileName: \"/Users/griffinbaker/Desktop/next-ssr/pages/robots.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/griffinbaker/Desktop/next-ssr/pages/robots.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/griffinbaker/Desktop/next-ssr/pages/robots.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: props.robots.map(function(robot) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: robot.name\n                    }, robot.id, false, {\n                        fileName: \"/Users/griffinbaker/Desktop/next-ssr/pages/robots.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/griffinbaker/Desktop/next-ssr/pages/robots.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/griffinbaker/Desktop/next-ssr/pages/robots.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Robots;\nRobots.getInitialProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_griffinbaker_Desktop_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var res, data;\n    return _Users_griffinbaker_Desktop_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://jsonplaceholder.typicode.com/users\");\n            case 2:\n                res = _ctx.sent;\n                _ctx.next = 5;\n                return res.json();\n            case 5:\n                data = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    robots: data\n                });\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Robots);\nvar _c;\n$RefreshReg$(_c, \"Robots\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb2JvdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFBNkI7QUFDVTtBQUV2QyxTQUFTRSxNQUFNLENBQUNDLEtBQUssRUFBRTs7SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxRQUFNOzs7OztvQkFBSzswQkFDZiw4REFBQ1Isa0RBQUk7Z0JBQUNTLElBQUksRUFBQyxHQUFHOzBCQUNaLDRFQUFDQyxRQUFNOzhCQUFDLE1BQUk7Ozs7O3dCQUFTOzs7OztvQkFDaEI7MEJBQ1AsOERBQUNILEtBQUc7MEJBQ0RKLEtBQUssQ0FBQ0csTUFBTSxDQUFDSyxHQUFHLENBQUNDLFNBQUFBLEtBQUs7eUNBQ3JCLDhEQUFDQyxJQUFFO2tDQUFpQkQsS0FBSyxDQUFDRSxJQUFJO3VCQUFyQkYsS0FBSyxDQUFDRyxFQUFFOzs7OzZCQUFtQjtpQkFDckMsQ0FBQzs7Ozs7b0JBQ0U7Ozs7OztZQUNGLENBQ047Q0FDSDtBQWZRYixLQUFBQSxNQUFNO0FBaUJmQSxNQUFNLENBQUNjLGVBQWUsR0FBRyx1UEFBa0I7UUFDbkNDLEdBQUcsRUFDSEMsSUFBSTs7Ozs7dUJBRFFqQix5REFBSyxDQUFDLDRDQUE0QyxDQUFDOztnQkFBL0RnQixHQUFHLFlBQTREOzt1QkFDbERBLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFOztnQkFBdkJELElBQUksWUFBbUI7NkNBQ3RCO29CQUFFWixNQUFNLEVBQUVZLElBQUk7aUJBQUU7Ozs7OztDQUN4QixHQUFDO0FBRUYsK0RBQWVoQixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9ib3RzLmpzPzY4MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5mdW5jdGlvbiBSb2JvdHMocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMucm9ib3RzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlJvYm90czwvaDE+XG4gICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgPGJ1dHRvbj5Ib21lPC9idXR0b24+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2PlxuICAgICAgICB7cHJvcHMucm9ib3RzLm1hcChyb2JvdCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cm9ib3QuaWR9Pntyb2JvdC5uYW1lfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJvYm90cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IHJvYm90czogZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9ib3RzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJmZXRjaCIsIlJvYm90cyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInJvYm90cyIsImRpdiIsImgxIiwiaHJlZiIsImJ1dHRvbiIsIm1hcCIsInJvYm90IiwibGkiLCJuYW1lIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/robots.js\n"));

/***/ })

});