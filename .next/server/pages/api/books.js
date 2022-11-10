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
exports.id = "pages/api/books";
exports.ids = ["pages/api/books"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/books/index.js":
/*!**********************************!*\
  !*** ./pages/api/books/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/connectDB */ \"(api)/./pages/api/lib/connectDB.js\");\n/* harmony import */ var _models_bookModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bookModel */ \"(api)/./pages/models/bookModel.js\");\n\n\n(0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nasync function handler(req, res) {\n    const { method , body  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const books = await _models_bookModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n                res.status(200).json(books);\n            } catch (error) {\n                return res.status(500).json({\n                    error: error.message\n                });\n            }\n        case \"POST\":\n            try {\n                const newBook = new _models_bookModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](body);\n                const savedBook = await newBook.save();\n                return res.status(201).json(savedBook);\n            } catch (error1) {\n                return res.status(500).json({\n                    error: error1.message\n                });\n            }\n        default:\n            return res.status(400).json({\n                message: \"this method is not supported\"\n            });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYm9va3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBQ0U7QUFDM0NBLDBEQUFTQTtBQUNNLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQUssRUFBQ0MsT0FBTSxFQUFDQyxLQUFJLEVBQUMsR0FBQ0g7SUFDbkIsT0FBUUU7UUFDTixLQUFLO1lBQ0gsSUFBSTtnQkFDRixNQUFNRSxRQUFRLE1BQU1OLDhEQUFVO2dCQUM5QkcsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7WUFDdkIsRUFBRSxPQUFPSSxPQUFPO2dCQUNkLE9BQU9QLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU9BLE1BQU1DLE9BQU87Z0JBQUM7WUFDckQ7UUFFRixLQUFLO1lBQ0gsSUFBSTtnQkFDRixNQUFNQyxVQUFVLElBQUlaLHlEQUFLQSxDQUFDSztnQkFDMUIsTUFBTVEsWUFBWSxNQUFNRCxRQUFRRSxJQUFJO2dCQUNwQyxPQUFPWCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSTtZQUM5QixFQUFFLE9BQU9ILFFBQU87Z0JBQ2QsT0FBT1AsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsT0FBT0EsT0FBTUMsT0FBTztnQkFBQztZQUNyRDtRQUVGO1lBQ0UsT0FBT1IsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUUsU0FBUztZQUErQjtJQUMxRTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0d2FyZV9iaWJsaW90ZWNhLy4vcGFnZXMvYXBpL2Jvb2tzL2luZGV4LmpzPzY3NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi4vbGliL2Nvbm5lY3REQlwiO1xuaW1wb3J0IEJvb2tzIGZyb20gXCIuLi8uLi9tb2RlbHMvYm9va01vZGVsXCI7XG5jb25uZWN0REIoKTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3R7bWV0aG9kLGJvZHl9PXJlcTtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBib29rcyA9IGF3YWl0IEJvb2tzLmZpbmQoKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYm9va3MpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICB9XG5cbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV3Qm9vayA9IG5ldyBCb29rcyhib2R5KTtcbiAgICAgICAgY29uc3Qgc2F2ZWRCb29rID0gYXdhaXQgbmV3Qm9vay5zYXZlKCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihzYXZlZEJvb2spO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJ0aGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJCb29rcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwiYm9va3MiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsIm5ld0Jvb2siLCJzYXZlZEJvb2siLCJzYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/books/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/lib/connectDB.js":
/*!************************************!*\
  !*** ./pages/api/lib/connectDB.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Ya esta conectado\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {}, (err)=>{\n        if (err) throw err;\n        console.log(\"COneccion satisfactoria\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGliL2Nvbm5lY3REQi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsWUFBVSxJQUFJO0lBQ2hCLElBQUdELDJFQUFrQyxFQUFDO1FBQ2xDSSxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNKLENBQUM7SUFDREwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFDLENBQUMsR0FBRUMsQ0FBQUEsTUFBSztRQUM3QyxJQUFHQSxLQUFLLE1BQU1BLElBQUk7UUFDbEJOLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtBQUNKO0FBQ0EsaUVBQWVKLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0d2FyZV9iaWJsaW90ZWNhLy4vcGFnZXMvYXBpL2xpYi9jb25uZWN0REIuanM/Y2I0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBjb25uZWN0REI9KCk9PntcclxuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdZYSBlc3RhIGNvbmVjdGFkbycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkse30sZXJyPT57XHJcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDT25lY2Npb24gc2F0aXNmYWN0b3JpYVwiKVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/lib/connectDB.js\n");

/***/ }),

/***/ "(api)/./pages/models/bookModel.js":
/*!***********************************!*\
  !*** ./pages/models/bookModel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Schema = mongoose.Schema;\nconst bookSchema = new mongoose.Schema({\n    title: {\n        type: String,\n        required: [\n            true,\n            \"se requiere un titulo\"\n        ]\n    },\n    autor: {\n        type: String,\n        required: [\n            true,\n            \"se require un autor\"\n        ]\n    },\n    image: {\n        type: String,\n        required: [\n            true,\n            \"se require una imagen del libros\"\n        ]\n    }\n}, {\n    timestamps: true,\n    versionKey: false\n});\nlet Dataset = mongoose.models.books || mongoose.model(\"books\", bookSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9tb2RlbHMvYm9va01vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUNuQyxNQUFNQyxTQUFTRixTQUFTRSxNQUFNO0FBRTlCLE1BQU1DLGFBQWEsSUFBSUgsU0FBU0UsTUFBTSxDQUFDO0lBQ3JDRSxPQUFPO1FBQUNDLE1BQU1DO1FBQVFDLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBd0I7SUFBQztJQUNoRUMsT0FBTztRQUFDSCxNQUFLQztRQUFPQyxVQUFTO1lBQUMsSUFBSTtZQUFDO1NBQXNCO0lBQUE7SUFDekRFLE9BQU87UUFBQ0osTUFBS0M7UUFBT0MsVUFBUztZQUFDLElBQUk7WUFBQztTQUFtQztJQUFBO0FBRXhFLEdBQUU7SUFDQUcsWUFBVyxJQUFJO0lBQ2ZDLFlBQVcsS0FBSztBQUNsQjtBQUVBLElBQUlDLFVBQVNaLFNBQVNhLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJZCxTQUFTZSxLQUFLLENBQUMsU0FBUVo7QUFDN0QsaUVBQWVTLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0d2FyZV9iaWJsaW90ZWNhLy4vcGFnZXMvbW9kZWxzL2Jvb2tNb2RlbC5qcz9iNjBjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuXG5jb25zdCBib29rU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHRpdGxlOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogW3RydWUsIFwic2UgcmVxdWllcmUgdW4gdGl0dWxvXCJdIH0sXG4gIGF1dG9yOiB7dHlwZTpTdHJpbmcscmVxdWlyZWQ6W3RydWUsJ3NlIHJlcXVpcmUgdW4gYXV0b3InXX0sXG4gIGltYWdlOiB7dHlwZTpTdHJpbmcscmVxdWlyZWQ6W3RydWUsJ3NlIHJlcXVpcmUgdW5hIGltYWdlbiBkZWwgbGlicm9zJ119LFxuXG59LHtcbiAgdGltZXN0YW1wczp0cnVlLFxuICB2ZXJzaW9uS2V5OmZhbHNlXG59KTtcblxubGV0IERhdGFzZXQ9IG1vbmdvb3NlLm1vZGVscy5ib29rcyB8fCBtb25nb29zZS5tb2RlbCgnYm9va3MnLGJvb2tTY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgRGF0YXNldDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJTY2hlbWEiLCJib29rU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJhdXRvciIsImltYWdlIiwidGltZXN0YW1wcyIsInZlcnNpb25LZXkiLCJEYXRhc2V0IiwibW9kZWxzIiwiYm9va3MiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/models/bookModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/books/index.js"));
module.exports = __webpack_exports__;

})();