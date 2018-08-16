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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_ionicons__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CourseProfile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CourseProfile, _React$Component);

  function CourseProfile() {
    _classCallCheck(this, CourseProfile);

    return _possibleConstructorReturn(this, (CourseProfile.__proto__ || Object.getPrototypeOf(CourseProfile)).apply(this, arguments));
  }

  _createClass(CourseProfile, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bg-light border"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 border-bottom small text-center"
      }, "T. Informatika"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 small"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small font-weight-bold"
      }, "Mata Kuliah"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Desain Web"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small font-weight-bold mt-2"
      }, "Jumlah Mahasiswa"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "30 Mahasiswa")));
    }
  }]);

  return CourseProfile;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var SidebarCourse =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SidebarCourse, _React$Component2);

  function SidebarCourse() {
    _classCallCheck(this, SidebarCourse);

    return _possibleConstructorReturn(this, (SidebarCourse.__proto__ || Object.getPrototypeOf(SidebarCourse)).apply(this, arguments));
  }

  _createClass(SidebarCourse, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "w-25 p-2 border"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CourseProfile, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"], {
        size: "sm",
        color: "outline-success",
        block: true
      }, "Kuliah Online")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"], {
        size: "sm",
        color: "outline-primary",
        block: true
      }, "Buat Tugas")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"], {
        size: "sm",
        color: "outline-primary",
        block: true
      }, "Buat Materi")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-2 mb-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 small d-flex justify-content-between pointer mb-1"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Materi"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-book-outline"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 small d-flex justify-content-between pointer mb-1"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Tugas"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-checkmark-circle-outline"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 small d-flex justify-content-between pointer mb-1"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Jadwal"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-calendar-outline"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 small d-flex justify-content-between pointer mb-1"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Mahasiswa"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-contact"
      })));
    }
  }]);

  return SidebarCourse;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(SidebarCourse));

/***/ }),
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
/* 11 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar__ = __webpack_require__(8);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var BreadCrumb =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-start"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer"
      }, "Dashboard lecturer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer"
      }, "Mata Kuliah"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer"
      }, "Desain Web"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer"
      }, "Materi")));
    }
  }]);

  return BreadCrumb;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var SelectCoursePage =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SelectCoursePage, _React$Component2);

  function SelectCoursePage() {
    _classCallCheck(this, SelectCoursePage);

    return _possibleConstructorReturn(this, (SelectCoursePage.__proto__ || Object.getPrototypeOf(SelectCoursePage)).apply(this, arguments));
  }

  _createClass(SelectCoursePage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__navigator__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-5"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"], {
        className: "p-2 d-flex justify-content-between"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__sidebar__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-fill ml-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BreadCrumb, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border mt-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 d-flex justify-content-between"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Button"], {
        size: "sm",
        color: "outline-success"
      }, "Tambah Materi")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Input"], {
        size: "sm",
        placeholder: "Pencarian ..."
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border mt-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-start flex-wrap"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 border bg-white mr-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pointer"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/pdf.png",
        height: "128"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small mt-2 text-center"
      }, "Dasar Web 1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center text-primary small pointer"
      }, "Download")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 border bg-white mr-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pointer"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/pdf.png",
        height: "128"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small mt-2 text-center"
      }, "Dasar Web 2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center text-primary small pointer"
      }, "Download")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border mt-2"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mr-1"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small p-1 pl-4 pr-4 border"
      }, "1")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Button"], {
        color: "outline-secondary",
        size: "sm"
      }, "Selanjutnya")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__footer__["a" /* default */], null)))));
    }
  }]);

  return SelectCoursePage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(SelectCoursePage));

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
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

// EXTERNAL MODULE: external "react-ionicons"
var external__react_ionicons_ = __webpack_require__(3);
var external__react_ionicons__default = /*#__PURE__*/__webpack_require__.n(external__react_ionicons_);

// EXTERNAL MODULE: ./components/dashboard-lecturer/sidebar.js + 1 modules
var sidebar = __webpack_require__(10);

// EXTERNAL MODULE: ./components/select-course-page/navigator.js
var select_course_page_navigator = __webpack_require__(5);

// EXTERNAL MODULE: ./components/add-material/wrapper.js
var wrapper = __webpack_require__(9);

// EXTERNAL MODULE: ./components/add-material/content.js
var content = __webpack_require__(7);

// EXTERNAL MODULE: ./components/select-course-page/footer.js
var footer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/dashboard-lecturer-course/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var dashboard_lecturer_course_BreadCrum = function BreadCrum(props) {
  return external__react__default.a.createElement("div", {
    className: "p-2 bg-light border"
  }, external__react__default.a.createElement("div", {
    className: "d-flex justify-content-start"
  }, external__react__default.a.createElement("div", {
    className: "small text-secondary pointer"
  }, "Dashboard lecturer"), external__react__default.a.createElement("div", {
    className: "small text-secondary ml-2 mr-2"
  }, ">"), external__react__default.a.createElement("div", {
    className: "small text-secondary pointer"
  }, "Mata Kuliah")));
};

var dashboard_lecturer_course_CoursesWrapper = function CoursesWrapper(props) {
  return external__react__default.a.createElement("div", {
    className: "border p-2 bg-light d-flex justify-content-between mt-2"
  }, props.children);
};

var dashboard_lecturer_course_Course = function Course(props) {
  return external__react__default.a.createElement("div", {
    className: "m-2 border w-25"
  }, props.children);
};

var dashboard_lecturer_course_CourseTitle = function CourseTitle(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
    className: "d-flex justify-content-start"
  }, external__react__default.a.createElement("div", {
    className: "course-title-bubble small text-center bg-primary text-white mr-2"
  }, props.children.substr(0, 1)), external__react__default.a.createElement("div", {
    className: ""
  }, external__react__default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return router__default.a.push('/dashboard/lecturer/course/selected?nomor=1');
    }
  }, props.children))));
};

var dashboard_lecturer_course_CourseBody = function CourseBody(props) {
  return external__react__default.a.createElement("div", {
    className: "p-2"
  }, props.children);
};

var dashboard_lecturer_course_CourseHeader = function CourseHeader(props) {
  return external__react__default.a.createElement("div", {
    className: "p-2 border-bottom bg-white d-flex justify-content-between"
  }, props.children);
};

var dashboard_lecturer_course_CourseOnlineStatus = function CourseOnlineStatus(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(external__react_ionicons__default.a, {
    icon: "ios-flash-outline",
    color: "green"
  }));
};

var dashboard_lecturer_course_CourseMaterialCount = function CourseMaterialCount(props) {
  return external__react__default.a.createElement("div", {
    className: "border d-flex justify-content-between"
  }, props.children);
};

var dashboard_lecturer_course_CourseMaterialCountVideo = function CourseMaterialCountVideo(props) {
  return external__react__default.a.createElement("div", {
    className: "flex-fill"
  }, external__react__default.a.createElement("div", {
    className: "border-bottom p-2 text-center small bg-white"
  }, "Video"), external__react__default.a.createElement("div", {
    className: "p-2 text-center font-weight-bold"
  }, props.children));
};

var dashboard_lecturer_course_CourseMaterialCountEBook = function CourseMaterialCountEBook(props) {
  return external__react__default.a.createElement("div", {
    className: "flex-fill"
  }, external__react__default.a.createElement("div", {
    className: "border-bottom p-2 text-center small bg-white"
  }, "E-Book"), external__react__default.a.createElement("div", {
    className: "p-2 text-center font-weight-bold"
  }, props.children));
};

var dashboard_lecturer_course_CourseMaterialAssignment = function CourseMaterialAssignment(props) {
  return external__react__default.a.createElement("div", {
    className: "border mt-2"
  }, external__react__default.a.createElement("div", {
    className: "p-2 border-bottom text-center small bg-white"
  }, "Tugas"), external__react__default.a.createElement("div", {
    className: "p-2 font-weight-bold text-center"
  }, props.children));
};

var dashboard_lecturer_course_DashboardLecturerCourse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashboardLecturerCourse, _React$Component);

  function DashboardLecturerCourse() {
    _classCallCheck(this, DashboardLecturerCourse);

    return _possibleConstructorReturn(this, (DashboardLecturerCourse.__proto__ || Object.getPrototypeOf(DashboardLecturerCourse)).apply(this, arguments));
  }

  _createClass(DashboardLecturerCourse, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(select_course_page_navigator["a" /* default */], null), external__react__default.a.createElement(wrapper["a" /* default */], null, external__react__default.a.createElement(sidebar["a" /* default */], null), external__react__default.a.createElement(content["a" /* default */], null, external__react__default.a.createElement(dashboard_lecturer_course_BreadCrum, null), external__react__default.a.createElement(dashboard_lecturer_course_CoursesWrapper, null, external__react__default.a.createElement(dashboard_lecturer_course_Course, null, external__react__default.a.createElement(dashboard_lecturer_course_CourseHeader, null, external__react__default.a.createElement(dashboard_lecturer_course_CourseTitle, null, "Web Design"), external__react__default.a.createElement(dashboard_lecturer_course_CourseOnlineStatus, null)), external__react__default.a.createElement(dashboard_lecturer_course_CourseBody, null, external__react__default.a.createElement(dashboard_lecturer_course_CourseMaterialCount, null, external__react__default.a.createElement(dashboard_lecturer_course_CourseMaterialCountVideo, null, "10"), external__react__default.a.createElement(dashboard_lecturer_course_CourseMaterialCountEBook, null, "10")), external__react__default.a.createElement(dashboard_lecturer_course_CourseMaterialAssignment, null, "10")))), external__react__default.a.createElement(footer["a" /* default */], null))));
    }
  }]);

  return DashboardLecturerCourse;
}(external__react__default.a.Component);

/* harmony default export */ var dashboard_lecturer_course = (Object(router_["withRouter"])(dashboard_lecturer_course_DashboardLecturerCourse));
// EXTERNAL MODULE: ./components/select-course-page/index.js
var select_course_page = __webpack_require__(11);

// CONCATENATED MODULE: ./pages/dashboard/lecturer/course/index.js
function course__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { course__typeof = function _typeof(obj) { return typeof obj; }; } else { course__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return course__typeof(obj); }

function course__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function course__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function course__createClass(Constructor, protoProps, staticProps) { if (protoProps) course__defineProperties(Constructor.prototype, protoProps); if (staticProps) course__defineProperties(Constructor, staticProps); return Constructor; }

function course__possibleConstructorReturn(self, call) { if (call && (course__typeof(call) === "object" || typeof call === "function")) { return call; } return course__assertThisInitialized(self); }

function course__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function course__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var course_LecturerCourse =
/*#__PURE__*/
function (_React$Component) {
  course__inherits(LecturerCourse, _React$Component);

  function LecturerCourse(props) {
    var _this;

    course__classCallCheck(this, LecturerCourse);

    _this = course__possibleConstructorReturn(this, (LecturerCourse.__proto__ || Object.getPrototypeOf(LecturerCourse)).call(this, props));
    _this.state = {
      selectCourse: ""
    };
    return _this;
  }

  course__createClass(LecturerCourse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (router__default.a.query.id) {
        this.setState({
          selectCourse: router__default.a.query.id
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var selectCourse = this.state.selectCourse;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "Dashboard Dosen: Mata Kuliah")), external__react__default.a.createElement("div", null, !selectCourse && external__react__default.a.createElement(dashboard_lecturer_course, null), selectCourse && external__react__default.a.createElement(select_course_page["a" /* default */], null)));
    }
  }]);

  return LecturerCourse;
}(external__react__default.a.Component);

/* harmony default export */ var course = __webpack_exports__["default"] = (course_LecturerCourse);

/***/ })
/******/ ]);