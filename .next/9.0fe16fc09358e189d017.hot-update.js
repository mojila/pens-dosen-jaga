webpackHotUpdate(9,{

/***/ "./components/form-login/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lecturer__ = __webpack_require__("./components/form-login/lecturer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student__ = __webpack_require__("./components/form-login/student.js");
var _jsxFileName = "/Users/me.mojila/Projects/next-dosen-jaga/components/form-login/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var FormLogin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormLogin, _React$Component);

  function FormLogin() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, FormLogin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = FormLogin.__proto__ || Object.getPrototypeOf(FormLogin)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        isLecturer: true,
        isStudent: false
      }
    }), _temp));
  }

  _createClass(FormLogin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.style.backgroundColor = "#f1f1f1";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var router = this.props.router;
      var _state = this.state,
          isLecturer = _state.isLecturer,
          isStudent = _state.isStudent;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* Container */], {
        className: "mt-md-5 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Col */], {
        md: {
          size: 6,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bg-white rounded p-3 shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 flex-fill text-center rounded-left text-uppercase pointer small " + (isLecturer ? "bg-primary text-white" : "bg-white border"),
        onClick: function onClick(e) {
          return _this2.setState({
            isStudent: false,
            isLecturer: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "lecturer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 flex-fill text-center rounded-right text-uppercase pointer small " + (isStudent ? "bg-primary text-white" : "bg-white border"),
        onClick: function onClick(e) {
          return _this2.setState({
            isStudent: true,
            isLecturer: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "student")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), isLecturer && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__lecturer__["a" /* default */], {
        router: router,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), isStudent && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__student__["a" /* default */], {
        router: router,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })))));
    }
  }]);

  return FormLogin;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(FormLogin));

/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ })

})
//# sourceMappingURL=9.0fe16fc09358e189d017.hot-update.js.map