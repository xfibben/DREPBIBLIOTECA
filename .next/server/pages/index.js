"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 12\n        }, this);\n    }\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-700 h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                name: \"navbar\",\n                className: \"bg-gray-900 py-3 flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid content-center mx-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://1.bp.blogspot.com/-m_V7SVYx_KY/X5oVT7yWvHI/AAAAAAABlmg/AAEmKBdzPek_tjQSOUlvi77wYX22XPLvACLcBGAsYHQ/s174\",\n                            className: \"w-20\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n                            lineNumber: 15,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        name: \"foto usuario\",\n                        className: \"w-80 mx-10 flex justify-evenly\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>router.push(\"/admin\"),\n                                className: \"bg-blue-500 my-4 px-1 rounded-xl hover:bg-blue-700 hover:text-white\",\n                                children: \"Administrar Libros\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                                className: \"bg-blue-500 my-4 px-1 rounded-xl hover:bg-blue-700 hover:text-white\",\n                                children: \"Cerrar sesion\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"grid content-center text-white\",\n                                children: session?.user?.name\n                            }, void 0, false, {\n                                fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: session?.user?.image,\n                                className: \"w-16\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/arturoeycktapiaramos/Documents/reactjs/DREPBIBLIOTECA/pages/index.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this);\n    } else {\n        router.push(\"/signin\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBc0Q7QUFDTjtBQUVqQyxTQUFTSSxPQUFPO0lBQzdCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdSLDJEQUFVQTtJQUM1QyxJQUFJUSxXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNDO3NCQUFFOzs7Ozs7SUFDWixDQUFDO0lBQ0QsSUFBR0YsU0FBUTtRQUNULHFCQUNJLDhEQUFDRztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUUsTUFBSztnQkFBU0QsV0FBVTs7a0NBQzNCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQ0dDLEtBQUk7NEJBQ0pILFdBQVU7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ0Q7d0JBQUlFLE1BQUs7d0JBQWVELFdBQVU7OzBDQUNqQyw4REFBQ0k7Z0NBQ0dDLFNBQVMsSUFBTVgsT0FBT1ksSUFBSSxDQUFDO2dDQUMzQk4sV0FBVTswQ0FDYjs7Ozs7OzBDQUdELDhEQUFDSTtnQ0FDR0MsU0FBUyxJQUFNZix3REFBT0E7Z0NBQ3RCVSxXQUFVOzBDQUNiOzs7Ozs7MENBR0QsOERBQUNPO2dDQUFHUCxXQUFVOzBDQUNYSixTQUFTWSxNQUFNUDs7Ozs7OzBDQUVsQiw4REFBQ0M7Z0NBQUlDLEtBQUtQLFNBQVNZLE1BQU1DO2dDQUFPVCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUt0RCxPQUFLO1FBQ0hOLE9BQU9ZLElBQUksQ0FBQztJQUNkLENBQUM7QUFFSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdHdhcmVfYmlibGlvdGVjYS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uLjwvcD47XG4gIH1cbiAgaWYoc2Vzc2lvbil7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTcwMCBoLXNjcmVlblwiPlxuICAgICAgICAgIDxkaXYgbmFtZT1cIm5hdmJhclwiIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHB5LTMgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBjb250ZW50LWNlbnRlciBteC0xMFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovLzEuYnAuYmxvZ3Nwb3QuY29tLy1tX1Y3U1ZZeF9LWS9YNW9WVDd5V3ZISS9BQUFBQUFBQmxtZy9BQUVtS0JkelBla190alFTT1Vsdmk3N3dZWDIyWFBMdkFDTGNCR0FzWUhRL3MxNzRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMFwiXG4gICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBuYW1lPVwiZm90byB1c3VhcmlvXCIgY2xhc3NOYW1lPVwidy04MCBteC0xMCBmbGV4IGp1c3RpZnktZXZlbmx5XCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYWRtaW4nKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIG15LTQgcHgtMSByb3VuZGVkLXhsIGhvdmVyOmJnLWJsdWUtNzAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRtaW5pc3RyYXIgTGlicm9zXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBteS00IHB4LTEgcm91bmRlZC14bCBob3ZlcjpiZy1ibHVlLTcwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENlcnJhciBzZXNpb25cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJncmlkIGNvbnRlbnQtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7c2Vzc2lvbj8udXNlcj8ubmFtZX1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Nlc3Npb24/LnVzZXI/LmltYWdlfSBjbGFzc05hbWU9XCJ3LTE2XCI+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfWVsc2V7XG4gICAgcm91dGVyLnB1c2goJy9zaWduaW4nKVxuICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbk91dCIsIlJvdXRlciIsInVzZVJvdXRlciIsIkhvbWUiLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwiaW1nIiwic3JjIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJoMSIsInVzZXIiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();