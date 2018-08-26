webpackHotUpdate(7,{

/***/ "./components/select-course-page/navigator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons__ = __webpack_require__("./node_modules/react-ionicons/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_ionicons__);
var _jsxFileName = "/Users/me.mojila/Projects/next-dosen-jaga/components/select-course-page/navigator.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Logo = function Logo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "pointer",
    onClick: function onClick() {
      return __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/dashboard/lecturer');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.children);
};

var Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Profile.__proto__ || Object.getPrototypeOf(Profile)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        active: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "_onToggle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          active: !_this.state.active
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "_onLogout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/');
      }
    }), _temp));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer noselect",
        onClick: this._onToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: this.state.active ? "ios-person" : "ios-person-outline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), " Profil"), this.state.active && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "profile-menu border bg-white position-absolute mt-3 small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 text-center pointer",
        onClick: this._onLogout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-log-out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), " Log Out")));
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Home = function Home(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "small text-secondary pointer noselect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
    icon: props.active ? "ios-home" : "ios-home-outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), " Beranda");
};

var Menu = function Menu(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, props.children);
};

var Navigator =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Navigator, _React$Component2);

  function Navigator() {
    _classCallCheck(this, Navigator);

    return _possibleConstructorReturn(this, (Navigator.__proto__ || Object.getPrototypeOf(Navigator)).apply(this, arguments));
  }

  _createClass(Navigator, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Navbar */], {
        fixed: "top",
        className: "border-bottom",
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "w-100 d-flex justify-content-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/dosenjaga.png",
        height: "32",
        alt: "Dosen Jaga",
        className: "rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Home, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Profile, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })))));
    }
  }]);

  return Navigator;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(Navigator));

/***/ })

})
//# sourceMappingURL=7.75177f06906bb8d9b34f.hot-update.js.map