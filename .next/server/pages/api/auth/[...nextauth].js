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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/mongodb */ \"(api)/./pages/api/lib/mongodb.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/userModel */ \"(api)/./pages/models/userModel.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/connectDB */ \"(api)/./pages/api/lib/connectDB.js\");\n\n\n\n\n\n\n\n\n\n(0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5___default()({\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials.email;\n                const password = credentials.password;\n                const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n                    email\n                });\n                if (!user) {\n                    throw new Error(\"Aun no se ha registrado\");\n                }\n                if (user) {\n                    return signInUser({\n                        password,\n                        user\n                    });\n                }\n            }\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }),\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default()({\n            server: {\n                host: process.env.EMAIL_SERVER_HOST,\n                port: process.env.EMAIL_SERVER_PORT,\n                auth: {\n                    user: process.env.EMAIL_SERVER_USER,\n                    pass: process.env.EMAIL_SERVER_PASSWORD\n                }\n            },\n            from: process.env.EMAIL_FROM\n        })\n    ],\n    pages: {\n        signIn: \"/signin\"\n    },\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n    secret: \"secret\",\n    database: process.env.MONGODB_URI\n};\nconst signInUser = async ({ password , user  })=>{\n    if (!user.password) {\n        throw new Error(\"Ingrese una contrase\\xf1a\");\n    }\n    const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_7___default().compare(password, user.password);\n    if (!isMatch) {\n        throw new Error(\"Contrase\\xf1a incorrecta\");\n    }\n    return user;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3FCO0FBQ0U7QUFDSTtBQUNqQjtBQUN1QjtBQUN4QjtBQUNkO0FBQ2E7QUFDekNRLDBEQUFTQTtBQUNGLE1BQU1DLGNBQWM7SUFDekIsaURBQWlEO0lBQ2pEQyxXQUFXO1FBQ1RMLHNFQUFtQkEsQ0FBQztZQUNsQixtRUFBbUU7WUFDbkVNLE1BQU07WUFFTkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtvQkFBUUMsYUFBYTtnQkFBUztnQkFDbkVDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXLEVBQUVPLEdBQUcsRUFBRTtnQkFDaEMsTUFBTUMsUUFBUVIsWUFBWVEsS0FBSztnQkFDL0IsTUFBTUgsV0FBV0wsWUFBWUssUUFBUTtnQkFDckMsTUFBTUksT0FBTyxNQUFNZixpRUFBYSxDQUFDO29CQUFFYztnQkFBTTtnQkFDekMsSUFBSSxDQUFDQyxNQUFNO29CQUNULE1BQU0sSUFBSUUsTUFBTSwyQkFBMkI7Z0JBQzdDLENBQUM7Z0JBQ0QsSUFBSUYsTUFBTTtvQkFDUixPQUFPRyxXQUFXO3dCQUFFUDt3QkFBVUk7b0JBQUs7Z0JBQ3JDLENBQUM7WUFDSDtRQUNGO1FBQ0FuQixpRUFBY0EsQ0FBQztZQUNidUIsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxlQUFlO2dCQUNiQyxRQUFRO29CQUNOQyxRQUFRO29CQUNSQyxhQUFhO29CQUNiQyxlQUFlO2dCQUNqQjtZQUNGO1FBQ0Y7UUFDQWxDLGdFQUFhQSxDQUFDO1lBQ1ptQyxRQUFRO2dCQUNOQyxNQUFNWCxRQUFRQyxHQUFHLENBQUNXLGlCQUFpQjtnQkFDbkNDLE1BQU1iLFFBQVFDLEdBQUcsQ0FBQ2EsaUJBQWlCO2dCQUNuQ0MsTUFBTTtvQkFDSnBCLE1BQU1LLFFBQVFDLEdBQUcsQ0FBQ2UsaUJBQWlCO29CQUNuQ0MsTUFBTWpCLFFBQVFDLEdBQUcsQ0FBQ2lCLHFCQUFxQjtnQkFDekM7WUFDRjtZQUNBQyxNQUFNbkIsUUFBUUMsR0FBRyxDQUFDbUIsVUFBVTtRQUM5QjtLQUNEO0lBQ0RDLE9BQU07UUFBQ0MsUUFBTztJQUFTO0lBQ3ZCQyxTQUFTOUMsMEVBQWNBLENBQUNDLG9EQUFhQTtJQUNyQzhDLFFBQVE7SUFDUkMsVUFBVXpCLFFBQVFDLEdBQUcsQ0FBQ3lCLFdBQVc7QUFDbkMsRUFBRTtBQUNGLE1BQU01QixhQUFhLE9BQU8sRUFBRVAsU0FBUSxFQUFFSSxLQUFJLEVBQUUsR0FBSztJQUMvQyxJQUFJLENBQUNBLEtBQUtKLFFBQVEsRUFBRTtRQUNsQixNQUFNLElBQUlNLE1BQU0sNkJBQTBCO0lBQzVDLENBQUM7SUFDRCxNQUFNOEIsVUFBVSxNQUFNOUMscURBQWMsQ0FBQ1UsVUFBVUksS0FBS0osUUFBUTtJQUM1RCxJQUFJLENBQUNvQyxTQUFTO1FBQ1osTUFBTSxJQUFJOUIsTUFBTSw0QkFBeUI7SUFDM0MsQ0FBQztJQUVELE9BQU9GO0FBQ1Q7QUFDQSxpRUFBZXJCLGdEQUFRQSxDQUFDUyxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdHdhcmVfYmlibGlvdGVjYS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZW1haWxcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vbGliL21vbmdvZGJcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJNb2RlbCdcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi4vbGliL2Nvbm5lY3REQlwiO1xuY29ubmVjdERCKCk7XG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gJ1NpZ24gaW4gd2l0aC4uLicpXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG5cbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICBjb25zdCBlbWFpbCA9IGNyZWRlbnRpYWxzLmVtYWlsO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzLnBhc3N3b3JkO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7IGVtYWlsIH0pO1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdW4gbm8gc2UgaGEgcmVnaXN0cmFkb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIHJldHVybiBzaWduSW5Vc2VyKHsgcGFzc3dvcmQsIHVzZXIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwcm9tcHQ6IFwiY29uc2VudFwiLFxuICAgICAgICAgIGFjY2Vzc190eXBlOiBcIm9mZmxpbmVcIixcbiAgICAgICAgICByZXNwb25zZV90eXBlOiBcImNvZGVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgRW1haWxQcm92aWRlcih7XG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX0hPU1QsXG4gICAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QT1JULFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1VTRVIsXG4gICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BBU1NXT1JELFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX0ZST00sXG4gICAgfSksXG4gIF0sXG4gIHBhZ2VzOntzaWduSW46Jy9zaWduaW4nfSxcbiAgYWRhcHRlcjogTW9uZ29EQkFkYXB0ZXIoY2xpZW50UHJvbWlzZSksXG4gIHNlY3JldDogXCJzZWNyZXRcIixcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLFxufTtcbmNvbnN0IHNpZ25JblVzZXIgPSBhc3luYyAoeyBwYXNzd29yZCwgdXNlciB9KSA9PiB7XG4gIGlmICghdXNlci5wYXNzd29yZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkluZ3Jlc2UgdW5hIGNvbnRyYXNlw7FhXCIpO1xuICB9XG4gIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG4gIGlmICghaXNNYXRjaCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvbnRyYXNlw7FhIGluY29ycmVjdGFcIik7XG4gIH1cblxuICByZXR1cm4gdXNlcjtcbn07XG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJFbWFpbFByb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJNb25nb0RCQWRhcHRlciIsImNsaWVudFByb21pc2UiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiVXNlcnMiLCJiY3J5cHQiLCJjb25uZWN0REIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsIiwidXNlciIsImZpbmRPbmUiLCJFcnJvciIsInNpZ25JblVzZXIiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIiwic2VydmVyIiwiaG9zdCIsIkVNQUlMX1NFUlZFUl9IT1NUIiwicG9ydCIsIkVNQUlMX1NFUlZFUl9QT1JUIiwiYXV0aCIsIkVNQUlMX1NFUlZFUl9VU0VSIiwicGFzcyIsIkVNQUlMX1NFUlZFUl9QQVNTV09SRCIsImZyb20iLCJFTUFJTF9GUk9NIiwicGFnZXMiLCJzaWduSW4iLCJhZGFwdGVyIiwic2VjcmV0IiwiZGF0YWJhc2UiLCJNT05HT0RCX1VSSSIsImlzTWF0Y2giLCJjb21wYXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/lib/connectDB.js":
/*!************************************!*\
  !*** ./pages/api/lib/connectDB.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Ya esta conectado\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {}, (err)=>{\n        if (err) throw err;\n        console.log(\"COneccion satisfactoria\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGliL2Nvbm5lY3REQi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsWUFBVSxJQUFJO0lBQ2hCLElBQUdELDJFQUFrQyxFQUFDO1FBQ2xDSSxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNKLENBQUM7SUFDREwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFDLENBQUMsR0FBRUMsQ0FBQUEsTUFBSztRQUM3QyxJQUFHQSxLQUFLLE1BQU1BLElBQUk7UUFDbEJOLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtBQUNKO0FBQ0EsaUVBQWVKLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0d2FyZV9iaWJsaW90ZWNhLy4vcGFnZXMvYXBpL2xpYi9jb25uZWN0REIuanM/Y2I0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IGNvbm5lY3REQj0oKT0+e1xuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnWWEgZXN0YSBjb25lY3RhZG8nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLHt9LGVycj0+e1xuICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgY29uc29sZS5sb2coXCJDT25lY2Npb24gc2F0aXNmYWN0b3JpYVwiKVxuICAgIH0pXG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/lib/connectDB.js\n");

/***/ }),

/***/ "(api)/./pages/api/lib/mongodb.js":
/*!**********************************!*\
  !*** ./pages/api/lib/mongodb.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGliL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzdEO0FBRXJDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxVQUFVO0lBQ2RDLG9CQUFvQixJQUFJO0lBQ3hCQyxpQkFBaUIsSUFBSTtBQUN2QjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNQLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSU0sTUFBTSwyQ0FBMEM7QUFDNUQsQ0FBQztBQUVELElBQUlSLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNTLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSixTQUFTLElBQUlSLGdEQUFXQSxDQUFDQyxLQUFLSTtRQUM5Qk0sT0FBT0MsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDN0MsQ0FBQztJQUNESixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSCxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdHdhcmVfYmlibGlvdGVjYS8uL3BhZ2VzL2FwaS9saWIvbW9uZ29kYi5qcz80NmQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxufVxuXG5sZXQgY2xpZW50XG5sZXQgY2xpZW50UHJvbWlzZVxuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXG59IGVsc2Uge1xuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/models/userModel.js":
/*!***********************************!*\
  !*** ./pages/models/userModel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String\n    },\n    email: {\n        type: String\n    },\n    password: {\n        type: String\n    },\n    image: {\n        type: String,\n        default: \"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png\"\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxhQUFhLElBQUlELHdEQUFlLENBQ3BDO0lBQ0VHLE1BQU07UUFDSkMsTUFBTUM7SUFFUjtJQUNBQyxPQUFPO1FBQ0xGLE1BQU1DO0lBQ1I7SUFDQUUsVUFBVTtRQUNSSCxNQUFNQztJQUNSO0lBQ0FHLE9BQU87UUFDTEosTUFBTUM7UUFDTkksU0FDRTtJQUNKO0FBQ0YsR0FDQTtJQUFFQyxZQUFZLElBQUk7QUFBQztBQUdyQixJQUFJQyxVQUFVWCw4REFBcUIsSUFBSUEscURBQWMsQ0FBQyxTQUFTQztBQUMvRCxpRUFBZVUsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvZnR3YXJlX2JpYmxpb3RlY2EvLi9wYWdlcy9tb2RlbHMvdXNlck1vZGVsLmpzP2EyMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcblxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgXCJodHRwczovL3d3dy5wbmdhbGwuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy81L1Byb2ZpbGUtUE5HLUNsaXBhcnQucG5nXCIsXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKFwidXNlcnNcIiwgdXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0O1xuXG5cbiAgICBcbiAgICAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJlbWFpbCIsInBhc3N3b3JkIiwiaW1hZ2UiLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/models/userModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();