module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-ionicons");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_ionicons__);
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
        className: "mt-1"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer noselect",
        onClick: this._onToggle
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: this.state.active ? "ios-person" : "ios-person-outline"
      }), " Profil"), this.state.active && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "profile-menu border bg-white position-absolute mt-3 small"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 text-center pointer",
        onClick: this._onLogout
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-log-out"
      }), " Log Out")));
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Navbar"], {
        fixed: "top",
        className: "border-bottom",
        color: "white"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "w-100 d-flex justify-content-between"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/dosenjaga.png",
        height: "32",
        alt: "Dosen Jaga",
        className: "rounded"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Profile, null))));
    }
  }]);

  return Navigator;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(Navigator));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border mt-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-between"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small"
      }, "Dosen Jaga PENS 2018 \xA9"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small d-flex justify-content-start"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mr-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#"
      }, "Tentang")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mr-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#"
      }, "Pusat Bantuan"))))));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(Footer));

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Content =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-fill ml-2"
      }, this.props.children);
    }
  }]);

  return Content;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(Content));

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Wrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-5"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Container"], {
        className: "p-2 d-flex justify-content-between"
      }, this.props.children));
    }
  }]);

  return Wrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-ionicons"
var external__react_ionicons_ = __webpack_require__(3);
var external__react_ionicons__default = /*#__PURE__*/__webpack_require__.n(external__react_ionicons_);

// CONCATENATED MODULE: ./components/dashboard-lecturer/user-profile.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var user_profile_UserProfile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserProfile, _React$Component);

  function UserProfile() {
    _classCallCheck(this, UserProfile);

    return _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).apply(this, arguments));
  }

  _createClass(UserProfile, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "p-2 border"
      }, external__react__default.a.createElement("div", {
        className: "d-flex justify-content-between"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("img", {
        src: "/static/images/ava.png",
        height: "72",
        className: "rounded"
      })), external__react__default.a.createElement("div", {
        className: "flex-fill ml-2 small"
      }, external__react__default.a.createElement("div", {
        className: "font-weight-bold small"
      }, "Nama"), external__react__default.a.createElement("div", null, "Moch. Aji Laksono"), external__react__default.a.createElement("div", {
        className: "font-weight-bold small"
      }, "Jabatan"), external__react__default.a.createElement("div", null, "Dosen"))));
    }
  }]);

  return UserProfile;
}(external__react__default.a.Component);

/* harmony default export */ var user_profile = (Object(router_["withRouter"])(user_profile_UserProfile));
// CONCATENATED MODULE: ./components/dashboard-lecturer/sidebar.js
function sidebar__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sidebar__typeof = function _typeof(obj) { return typeof obj; }; } else { sidebar__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sidebar__typeof(obj); }

function sidebar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sidebar__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sidebar__createClass(Constructor, protoProps, staticProps) { if (protoProps) sidebar__defineProperties(Constructor.prototype, protoProps); if (staticProps) sidebar__defineProperties(Constructor, staticProps); return Constructor; }

function sidebar__possibleConstructorReturn(self, call) { if (call && (sidebar__typeof(call) === "object" || typeof call === "function")) { return call; } return sidebar__assertThisInitialized(self); }

function sidebar__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sidebar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var sidebar_SidebarWrapper =
/*#__PURE__*/
function (_React$Component) {
  sidebar__inherits(SidebarWrapper, _React$Component);

  function SidebarWrapper() {
    sidebar__classCallCheck(this, SidebarWrapper);

    return sidebar__possibleConstructorReturn(this, (SidebarWrapper.__proto__ || Object.getPrototypeOf(SidebarWrapper)).apply(this, arguments));
  }

  sidebar__createClass(SidebarWrapper, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "w-25 p-2 border"
      }, this.props.children);
    }
  }]);

  return SidebarWrapper;
}(external__react__default.a.Component);

var sidebar_AbsentButton =
/*#__PURE__*/
function (_React$Component2) {
  sidebar__inherits(AbsentButton, _React$Component2);

  function AbsentButton() {
    sidebar__classCallCheck(this, AbsentButton);

    return sidebar__possibleConstructorReturn(this, (AbsentButton.__proto__ || Object.getPrototypeOf(AbsentButton)).apply(this, arguments));
  }

  sidebar__createClass(AbsentButton, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "mt-2"
      }, external__react__default.a.createElement("div", {
        className: "p-2 bg-secondary d-flex justify-content-between pointer"
      }, external__react__default.a.createElement("div", {
        className: "text-white text-uppercase small"
      }, "Absen"), external__react__default.a.createElement("div", {
        className: "text-white text-uppercase small"
      }, external__react__default.a.createElement(external__react_ionicons__default.a, {
        icon: "ios-lock",
        color: "#fff"
      }))));
    }
  }]);

  return AbsentButton;
}(external__react__default.a.Component);

var sidebar_Course =
/*#__PURE__*/
function (_React$Component3) {
  sidebar__inherits(Course, _React$Component3);

  function Course() {
    var _ref;

    var _temp, _this;

    sidebar__classCallCheck(this, Course);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return sidebar__possibleConstructorReturn(_this, (_temp = _this = sidebar__possibleConstructorReturn(this, (_ref = Course.__proto__ || Object.getPrototypeOf(Course)).call.apply(_ref, [this].concat(args))), Object.defineProperty(sidebar__assertThisInitialized(_this), "_onClickCourse", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        return router__default.a.push('/dashboard/lecturer/course/selected?nomor=' + e.target.id);
      }
    }), Object.defineProperty(sidebar__assertThisInitialized(_this), "_onClickMore", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return router__default.a.push('/dashboard/lecturer/course');
      }
    }), _temp));
  }

  sidebar__createClass(Course, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "mt-2 border"
      }, external__react__default.a.createElement("div", {
        className: "p-2 border-bottom text-center small text-uppercase"
      }, "Mata Kuliah"), external__react__default.a.createElement("div", {
        className: "bg-light"
      }, external__react__default.a.createElement("div", {
        id: "1",
        className: "p-2 small pointer mb-2",
        onClick: this._onClickCourse
      }, "Web Design")), external__react__default.a.createElement("div", {
        className: "p-2 border-top text-center small text-uppercase pointer",
        onClick: this._onClickMore
      }, "Selengkapnya"));
    }
  }]);

  return Course;
}(external__react__default.a.Component);

var sidebar_Sidebar =
/*#__PURE__*/
function (_React$Component4) {
  sidebar__inherits(Sidebar, _React$Component4);

  function Sidebar() {
    sidebar__classCallCheck(this, Sidebar);

    return sidebar__possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
  }

  sidebar__createClass(Sidebar, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(sidebar_SidebarWrapper, null, external__react__default.a.createElement(user_profile, null), external__react__default.a.createElement(sidebar_AbsentButton, null), external__react__default.a.createElement(sidebar_Course, null));
    }
  }]);

  return Sidebar;
}(external__react__default.a.Component);

/* harmony default export */ var sidebar = __webpack_exports__["a"] = (Object(router_["withRouter"])(sidebar_Sidebar));

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "reactstrap"
var external__reactstrap_ = __webpack_require__(2);
var external__reactstrap__default = /*#__PURE__*/__webpack_require__.n(external__reactstrap_);

// EXTERNAL MODULE: ./components/select-course-page/navigator.js
var select_course_page_navigator = __webpack_require__(5);

// EXTERNAL MODULE: ./components/add-material/wrapper.js
var wrapper = __webpack_require__(9);

// EXTERNAL MODULE: ./components/dashboard-lecturer/sidebar.js + 1 modules
var sidebar = __webpack_require__(10);

// EXTERNAL MODULE: ./components/add-material/content.js
var content = __webpack_require__(7);

// EXTERNAL MODULE: ./components/select-course-page/footer.js
var footer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/dashboard-lecturer/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var dashboard_lecturer_BreadCrumb =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BreadCrumb, _React$Component);

  function BreadCrumb() {
    _classCallCheck(this, BreadCrumb);

    return _possibleConstructorReturn(this, (BreadCrumb.__proto__ || Object.getPrototypeOf(BreadCrumb)).apply(this, arguments));
  }

  _createClass(BreadCrumb, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "p-2 bg-light border"
      }, external__react__default.a.createElement("div", {
        className: "d-flex justify-content-start"
      }, external__react__default.a.createElement("div", {
        className: "small text-secondary pointer"
      }, "Dashboard lecturer")));
    }
  }]);

  return BreadCrumb;
}(external__react__default.a.Component);

var dashboard_lecturer_DashboardPage =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(DashboardPage, _React$Component2);

  function DashboardPage() {
    _classCallCheck(this, DashboardPage);

    return _possibleConstructorReturn(this, (DashboardPage.__proto__ || Object.getPrototypeOf(DashboardPage)).apply(this, arguments));
  }

  _createClass(DashboardPage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(select_course_page_navigator["a" /* default */], null), external__react__default.a.createElement(wrapper["a" /* default */], null, external__react__default.a.createElement(sidebar["a" /* default */], null), external__react__default.a.createElement(content["a" /* default */], null, external__react__default.a.createElement(dashboard_lecturer_BreadCrumb, null), external__react__default.a.createElement(footer["a" /* default */], null))));
    }
  }]);

  return DashboardPage;
}(external__react__default.a.Component);

/* harmony default export */ var dashboard_lecturer = (Object(router_["withRouter"])(dashboard_lecturer_DashboardPage));
// CONCATENATED MODULE: ./pages/dashboard/lecturer/index.js
function lecturer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { lecturer__typeof = function _typeof(obj) { return typeof obj; }; } else { lecturer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return lecturer__typeof(obj); }

function lecturer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lecturer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lecturer__createClass(Constructor, protoProps, staticProps) { if (protoProps) lecturer__defineProperties(Constructor.prototype, protoProps); if (staticProps) lecturer__defineProperties(Constructor, staticProps); return Constructor; }

function lecturer__possibleConstructorReturn(self, call) { if (call && (lecturer__typeof(call) === "object" || typeof call === "function")) { return call; } return lecturer__assertThisInitialized(self); }

function lecturer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function lecturer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var lecturer_LecturerMain =
/*#__PURE__*/
function (_React$Component) {
  lecturer__inherits(LecturerMain, _React$Component);

  function LecturerMain() {
    lecturer__classCallCheck(this, LecturerMain);

    return lecturer__possibleConstructorReturn(this, (LecturerMain.__proto__ || Object.getPrototypeOf(LecturerMain)).apply(this, arguments));
  }

  lecturer__createClass(LecturerMain, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "Dashboard Dosen")), external__react__default.a.createElement("div", null, external__react__default.a.createElement(dashboard_lecturer, null)));
    }
  }]);

  return LecturerMain;
}(external__react__default.a.Component);

/* harmony default export */ var lecturer = __webpack_exports__["default"] = (lecturer_LecturerMain);

/***/ })
/******/ ]);