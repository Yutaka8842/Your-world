/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/Yutaka/JavaScript/React/coding-task-inoue-yutaka/pages/index.js\";\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var postList = _ref.postList;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n        children: \"Where in the world?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"search\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: this.state.value,\n        onChange: this.handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().country_container),\n      children: postList.map(function (List) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().country_card),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card_top),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: List.flag,\n              width: 264,\n              height: 160,\n              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().flag)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card_bottom),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().country_name),\n              children: List.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().country_detail),\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().key),\n                  children: \"Population:\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 23\n                }, _this), Number(List.population).toLocaleString()]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().key),\n                  children: \"Region:\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 23\n                }, _this), List.region]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().key),\n                  children: \"Capital:\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 23\n                }, _this), List.capital]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicG9zdExpc3QiLCJzdHlsZXMiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwibWFwIiwiTGlzdCIsImZsYWciLCJuYW1lIiwiTnVtYmVyIiwicG9wdWxhdGlvbiIsInRvTG9jYWxlU3RyaW5nIiwicmVnaW9uIiwiY2FwaXRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQWVlLFNBQVNBLElBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFFekMsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUMsdUVBQWhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxzRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0E7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxLQUFyQztBQUE0QyxnQkFBUSxFQUFFLEtBQUtDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFPRTtBQUFLLGVBQVMsRUFBRUgsa0ZBQWhCO0FBQUEsZ0JBQ0dELFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUN0Qiw0QkFDRTtBQUFLLG1CQUFTLEVBQUVMLDZFQUFoQjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRUEseUVBQWhCO0FBQUEsbUNBQ0UsOERBQUMsbURBQUQ7QUFBTyxpQkFBRyxFQUFFSyxJQUFJLENBQUNDLElBQWpCO0FBQXVCLG1CQUFLLEVBQUUsR0FBOUI7QUFBbUMsb0JBQU0sRUFBRSxHQUEzQztBQUFnRCx1QkFBUyxFQUFFTixxRUFBV007QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUVOLDRFQUFoQjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRUEsNkVBQWhCO0FBQUEsd0JBQ0dLLElBQUksQ0FBQ0U7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBSSx1QkFBUyxFQUFFUCwrRUFBZjtBQUFBLHNDQUNFO0FBQUEsd0NBQUk7QUFBTSwyQkFBUyxFQUFFQSxvRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQUosRUFBb0RRLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDSSxVQUFOLENBQU4sQ0FBd0JDLGNBQXhCLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsd0NBQUk7QUFBTSwyQkFBUyxFQUFFVixvRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQUosRUFBZ0RLLElBQUksQ0FBQ00sTUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0U7QUFBQSx3Q0FBSTtBQUFNLDJCQUFTLEVBQUVYLG9FQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBSixFQUFpREssSUFBSSxDQUFDTyxPQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFpQkQsT0FsQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7S0FqQ3VCZCxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL2FsbCcgIClcbiAgY29uc3QgcG9zdExpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJue1xuICBwcm9wczoge1xuICAgIHBvc3RMaXN0XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgge3Bvc3RMaXN0fSApIHtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldoZXJlIGluIHRoZSB3b3JsZD88L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50cnlfY29udGFpbmVyfT5cbiAgICAgICAge3Bvc3RMaXN0Lm1hcCgoTGlzdCkgPT4ge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRyeV9jYXJkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX3RvcH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17TGlzdC5mbGFnfSB3aWR0aD17MjY0fSBoZWlnaHQ9ezE2MH0gY2xhc3NOYW1lPXtzdHlsZXMuZmxhZ30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9ib3R0b219PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRyeV9uYW1lfT5cbiAgICAgICAgICAgICAgICAgIHtMaXN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50cnlfZGV0YWlsfT5cbiAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5rZXl9PlBvcHVsYXRpb246PC9zcGFuPntOdW1iZXIoTGlzdC5wb3B1bGF0aW9uKS50b0xvY2FsZVN0cmluZygpfTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMua2V5fT5SZWdpb246PC9zcGFuPntMaXN0LnJlZ2lvbn08L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmtleX0+Q2FwaXRhbDo8L3NwYW4+e0xpc3QuY2FwaXRhbH08L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});