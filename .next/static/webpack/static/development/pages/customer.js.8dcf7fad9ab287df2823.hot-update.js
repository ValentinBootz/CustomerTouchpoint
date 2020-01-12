webpackHotUpdate("static/development/pages/customer.js",{

/***/ "./pages/customer.js":
/*!***************************!*\
  !*** ./pages/customer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/valentinbootz/Documents/Master/Deloitte Project Study/touchpoint-next/pages/customer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

var CustomerPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomerPage, _React$Component);

  function CustomerPage() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomerPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomerPage).call(this));
    _this.handleNext = _this.handleNext.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handlePrev = _this.handlePrev.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      view: 1
    };
    _this.max = 35;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomerPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      debugger;

      do {
        this.handleNext();
      } while (this.state.view != 5);
    }
  }, {
    key: "handleNext",
    value: function handleNext() {
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
  }, {
    key: "handlePrev",
    value: function handlePrev() {
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
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "customerContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("div", {
        className: 'customerBackground' + this.state.view,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("div", {
        className: "customerContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        className: "buttonContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("button", {
        className: "rotateButtonPrev",
        onClick: this.handlePrev,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx("button", {
        className: "rotateButtonNext",
        onClick: this.handleNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), __jsx("div", {
        className: "menuContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("button", {
        className: "menuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("div", {
        className: "dropdownContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("button", {
        className: "customerButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("button", {
        className: "serviceButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("button", {
        className: "dealerButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })))));
    }
  }]);

  return CustomerPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CustomerPage);

/***/ })

})
//# sourceMappingURL=customer.js.8dcf7fad9ab287df2823.hot-update.js.map