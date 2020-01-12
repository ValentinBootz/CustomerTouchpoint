module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CustomerForm.js":
/*!************************************!*\
  !*** ./components/CustomerForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/valentinbootz/Documents/Master/Deloitte Project Study/touchpoint-next/components/CustomerForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class MenuView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "Customer Form"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MenuView);

/***/ }),

/***/ "./pages/customer.js":
/*!***************************!*\
  !*** ./pages/customer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CustomerForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CustomerForm */ "./components/CustomerForm.js");
var _jsxFileName = "/Users/valentinbootz/Documents/Master/Deloitte Project Study/touchpoint-next/pages/customer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class CustomerPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.openCustomerMenu = this.openCustomerMenu.bind(this);
    this.state = {
      view: 0,
      showMenuView: false,
      showCustomerForm: false
    };
    this.max = 35;
  }

  handleNext() {
    if (this.state.view == this.max) {
      this.setState({
        view: 0
      });
    } else {
      this.setState({
        view: this.state.view + 1
      });
    }
  }

  handlePrev() {
    if (this.state.view == 0) {
      this.setState({
        view: this.max
      });
    } else {
      this.setState({
        view: this.state.view - 1
      });
    }
  }

  openCustomerMenu() {
    this.setState({
      showMenuView: true,
      showCustomerForm: true
    });
  }

  closeMenuView() {
    this.setState({
      showMenuView: false,
      showCustomerForm: false
    });
  }

  render() {
    return __jsx("div", {
      className: "customerContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: 'customerBackground' + this.state.view,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx("div", {
      className: "customerContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("div", {
      className: "buttonContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("button", {
      className: "rotateButtonPrev",
      onClick: this.handlePrev,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), __jsx("button", {
      className: "rotateButtonNext",
      onClick: this.handleNext,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), __jsx("div", {
      className: "menuContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("button", {
      className: "menuButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), __jsx("div", {
      className: "dropdownContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("button", {
      className: "customerButton",
      onClick: this.openCustomerMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx("button", {
      className: "serviceButton",
      onClick: this.openServiceMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx("button", {
      className: "dealerButton",
      onClick: this.openDealerMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }))), this.state.showMenuView ? __jsx("div", {
      className: "menuViewContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "menuViewOverlay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx("button", {
      className: "closeButton",
      onClick: this.closeMenuView,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx("div", {
      className: "menuViewContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, this.state.showCustomerForm ? __jsx(_components_CustomerForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }) : null)) : null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomerPage);

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/customer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/valentinbootz/Documents/Master/Deloitte Project Study/touchpoint-next/pages/customer.js */"./pages/customer.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=customer.js.map