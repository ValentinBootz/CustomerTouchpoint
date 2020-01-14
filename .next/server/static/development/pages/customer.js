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

/***/ "./components/CustomerView.js":
/*!************************************!*\
  !*** ./components/CustomerView.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/valentinbootz/Documents/Master/Deloitte Project Study/touchpoint-next/components/CustomerView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class CustomerView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomerView);

/***/ }),

/***/ "./components/FinanceView.js":
/*!***********************************!*\
  !*** ./components/FinanceView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/valentinbootz/Documents/Master/Deloitte Project Study/touchpoint-next/components/FinanceView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FinanceView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FinanceView);

/***/ }),

/***/ "./components/ServiceView.js":
/*!***********************************!*\
  !*** ./components/ServiceView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/valentinbootz/Documents/Master/Deloitte Project Study/touchpoint-next/components/ServiceView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class ServiceView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ServiceView);

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
/* harmony import */ var _components_CustomerView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CustomerView */ "./components/CustomerView.js");
/* harmony import */ var _components_ServiceView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ServiceView */ "./components/ServiceView.js");
/* harmony import */ var _components_FinanceView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FinanceView */ "./components/FinanceView.js");
var _jsxFileName = "/Users/valentinbootz/Documents/Master/Deloitte Project Study/touchpoint-next/pages/customer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class CustomerPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.openCustomerView = this.openCustomerView.bind(this);
    this.openServiceView = this.openServiceView.bind(this);
    this.openFinanceView = this.openFinanceView.bind(this);
    this.closeView = this.closeView.bind(this);
    this.state = {
      view: 0,
      showCustomerView: false,
      showServiceView: false,
      showFinanceView: false
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

  openCustomerView() {
    this.setState({
      showCustomerView: true
    });
  }

  openServiceView() {
    this.setState({
      showServiceView: true
    });
  }

  openFinanceView() {
    this.setState({
      showFinanceView: true
    });
  }

  closeView() {
    this.setState({
      showCustomerView: false,
      showServiceView: false,
      showFinanceView: false
    });
  }

  render() {
    return __jsx("div", {
      className: "customerContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("div", {
      className: "preload",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, this.state.view == 0 ? __jsx("div", {
      className: 'customerBackground' + this.max,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }) : __jsx("div", {
      className: 'customerBackground' + (this.state.view - 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), this.state.view != this.max && __jsx("div", {
      className: 'customerBackground' + (this.state.view + 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })), __jsx("div", {
      className: 'customerBackground' + this.state.view,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx("div", {
      className: "customerContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      className: "buttonContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("button", {
      className: "rotateButtonPrev",
      onClick: this.handlePrev,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx("button", {
      className: "rotateButtonNext",
      onClick: this.handleNext,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    })), __jsx("div", {
      className: "menuContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("button", {
      className: "menuButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx("div", {
      className: "dropdownContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("button", {
      className: "customerButton",
      onClick: this.openCustomerView,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx("button", {
      className: "serviceButton",
      onClick: this.openServiceView,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx("button", {
      className: "financeButton",
      onClick: this.openFinanceView,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }))), this.state.showCustomerView || this.state.showServiceView || this.state.showFinanceView ? __jsx("div", {
      className: "menuViewContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      className: "menuViewOverlay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx("div", {
      className: "menuViewContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("button", {
      className: "closeButton",
      onClick: this.closeView,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), this.state.showCustomerView ? __jsx("div", {
      className: "formContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_components_CustomerView__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })) : null, this.state.showServiceView ? __jsx("div", {
      className: "formContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(_components_ServiceView__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })) : null, this.state.showFinanceView ? __jsx("div", {
      className: "formContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(_components_FinanceView__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })) : null)) : null));
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