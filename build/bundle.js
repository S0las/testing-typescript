/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Services_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/Component */ \"./src/Services/Component.ts\");\n\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.services = {};\r\n    }\r\n    App.prototype.initComponents = function (app) {\r\n        this.services.component = new _Services_Component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"](app);\r\n    };\r\n    return App;\r\n}());\r\nvar app = new App();\r\napp.initComponents(app);\r\napp.services.component.findAndCreate(document);\r\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/Components/Hello.ts":
/*!*********************************!*\
  !*** ./src/Components/Hello.ts ***!
  \*********************************/
/*! exports provided: Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hello\", function() { return Hello; });\nvar Hello = /** @class */ (function () {\r\n    function Hello() {\r\n        console.log('Hello.ts');\r\n    }\r\n    return Hello;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Components/Hello.ts?");

/***/ }),

/***/ "./src/Components/Second.ts":
/*!**********************************!*\
  !*** ./src/Components/Second.ts ***!
  \**********************************/
/*! exports provided: Second */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Second\", function() { return Second; });\nvar Second = /** @class */ (function () {\r\n    function Second() {\r\n        console.log('Second.ts');\r\n    }\r\n    return Second;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Components/Second.ts?");

/***/ }),

/***/ "./src/RegisteredComponents.ts":
/*!*************************************!*\
  !*** ./src/RegisteredComponents.ts ***!
  \*************************************/
/*! exports provided: RegisteredComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisteredComponents\", function() { return RegisteredComponents; });\n/* harmony import */ var _Components_Hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Hello */ \"./src/Components/Hello.ts\");\n/* harmony import */ var _Components_Second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Second */ \"./src/Components/Second.ts\");\n\r\n\r\nvar RegisteredComponents = {\r\n    'Hello': _Components_Hello__WEBPACK_IMPORTED_MODULE_0__[\"Hello\"],\r\n    'Second': _Components_Second__WEBPACK_IMPORTED_MODULE_1__[\"Second\"]\r\n};\r\n\n\n//# sourceURL=webpack:///./src/RegisteredComponents.ts?");

/***/ }),

/***/ "./src/Services/Component.ts":
/*!***********************************!*\
  !*** ./src/Services/Component.ts ***!
  \***********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony import */ var _RegisteredComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../RegisteredComponents */ \"./src/RegisteredComponents.ts\");\n\r\nvar Component = /** @class */ (function () {\r\n    function Component(app) {\r\n        this.app = app;\r\n        this.registeredComponents = _RegisteredComponents__WEBPACK_IMPORTED_MODULE_0__[\"RegisteredComponents\"];\r\n        this.created = {};\r\n    }\r\n    Component.prototype.findIn = function (element) {\r\n        return element.querySelectorAll('[component]');\r\n    };\r\n    Component.prototype.create = function (components) {\r\n        for (var i = 0, length = components.length; i < length; i++) {\r\n            var component = components[i];\r\n            var componentName = component.getAttribute(\"component\");\r\n            if (this.registeredComponents[componentName]) {\r\n                this.created[componentName] = new this.registeredComponents[componentName];\r\n            }\r\n        }\r\n    };\r\n    Component.prototype.findAndCreate = function (element) {\r\n        var components = this.findIn(element);\r\n        this.create(components);\r\n    };\r\n    return Component;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Services/Component.ts?");

/***/ })

/******/ });