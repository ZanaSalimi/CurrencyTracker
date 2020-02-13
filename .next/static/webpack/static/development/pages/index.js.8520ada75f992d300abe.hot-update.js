webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/Coins.js":
/*!****************************!*\
  !*** ./component/Coins.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\ALPHA\\Documents\\Currency Tracker\\component\\Coins.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Coins =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Coins, _React$Component);

  function Coins() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Coins);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Coins).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Coins, [{
    key: "render",
    value: function render() {
      var _this$props$api$DISPL = this.props.api.DISPLAY,
          BTC = _this$props$api$DISPL.BTC,
          ETH = _this$props$api$DISPL.ETH,
          BCH = _this$props$api$DISPL.BCH,
          EOS = _this$props$api$DISPL.EOS,
          BSV = _this$props$api$DISPL.BSV;
      console.log(ETH);
      return __jsx("div", {
        className: "Cards",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, __jsx("div", {
        className: "coin d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("div", {
        className: "col-7 mt-4 ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Bitcoin ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "BTC")), __jsx("p", {
        className: "font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, BTC.USD.LASTVOLUME), __jsx("p", {
        className: "text-primary font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, BTC.USD.PRICE)), __jsx("div", {
        className: "col text-center mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("p", {
        className: "text-success time-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, BTC.USD.LASTUPDATE), __jsx("img", {
        src: "https://api.coinscrate.com/images/currencies/128/color/btc.png",
        alt: "ETH",
        width: "70px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }))), __jsx("div", {
        className: "coin d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        className: "col-7 mt-4 ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "ETHERIUM ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "ETH")), __jsx("p", {
        className: "font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, ETH.USD.LASTVOLUME), __jsx("p", {
        className: "text-primary font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, ETH.USD.PRICE)), __jsx("div", {
        className: "col text-center mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("p", {
        className: "text-success time-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, ETH.USD.LASTUPDATE), __jsx("img", {
        src: "https://blockchainstocks.com/wp-content/uploads/2017/12/eth-logo.png",
        alt: "ETH",
        width: "70px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }))), __jsx("div", {
        className: "coin d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("div", {
        className: "col-7 mt-4 ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Bitcoin Cash ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "BCH")), __jsx("p", {
        className: "font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, BCH.USD.LASTVOLUME), __jsx("p", {
        className: "text-primary font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, BCH.USD.PRICE)), __jsx("div", {
        className: "col text-center mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("p", {
        className: "text-success time-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, BCH.USD.LASTUPDATE), __jsx("img", {
        src: "https://api.coinscrate.com/images/currencies/128/color/btc.png",
        alt: "ETH",
        width: "70px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))), __jsx("div", {
        className: "coin d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("div", {
        className: "col-7 mt-4 ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "ETHERIUM ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "ETH")), __jsx("p", {
        className: "font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, ETH.USD.LASTVOLUME), __jsx("p", {
        className: "text-primary font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, ETH.USD.PRICE)), __jsx("div", {
        className: "col text-center mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("p", {
        className: "text-success time-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, ETH.USD.LASTUPDATE), __jsx("img", {
        src: "https://blockchainstocks.com/wp-content/uploads/2017/12/eth-logo.png",
        alt: "ETH",
        width: "70px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }))), __jsx("div", {
        className: "coin d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        className: "col-7 mt-4 ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "ETHERIUM ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "ETH")), __jsx("p", {
        className: "font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, ETH.USD.LASTVOLUME), __jsx("p", {
        className: "text-primary font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, ETH.USD.PRICE)), __jsx("div", {
        className: "col text-center mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("p", {
        className: "text-success time-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, ETH.USD.LASTUPDATE), __jsx("img", {
        src: "https://blockchainstocks.com/wp-content/uploads/2017/12/eth-logo.png",
        alt: "ETH",
        width: "70px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }))), __jsx("div", {
        className: "coin d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("div", {
        className: "col-7 mt-4 ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "ETHERIUM ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "ETH")), __jsx("p", {
        className: "font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, ETH.USD.LASTVOLUME), __jsx("p", {
        className: "text-primary font-weight-bolder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, ETH.USD.PRICE)), __jsx("div", {
        className: "col text-center mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("p", {
        className: "text-success time-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, ETH.USD.LASTUPDATE), __jsx("img", {
        src: "https://blockchainstocks.com/wp-content/uploads/2017/12/eth-logo.png",
        alt: "ETH",
        width: "70px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))));
    }
  }]);

  return Coins;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Coins);

/***/ })

})
//# sourceMappingURL=index.js.8520ada75f992d300abe.hot-update.js.map