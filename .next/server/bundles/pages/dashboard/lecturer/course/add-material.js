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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 20 */
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

// EXTERNAL MODULE: external "react-ionicons"
var external__react_ionicons_ = __webpack_require__(3);
var external__react_ionicons__default = /*#__PURE__*/__webpack_require__.n(external__react_ionicons_);

// EXTERNAL MODULE: ./components/select-course-page/navigator.js
var select_course_page_navigator = __webpack_require__(5);

// EXTERNAL MODULE: ./components/add-material/content.js
var content = __webpack_require__(7);

// EXTERNAL MODULE: ./components/select-course-page/footer.js
var footer = __webpack_require__(6);

// EXTERNAL MODULE: ./components/select-course-page/sidebar.js
var sidebar = __webpack_require__(8);

// EXTERNAL MODULE: ./components/add-material/wrapper.js
var wrapper = __webpack_require__(9);

// CONCATENATED MODULE: ./components/add-material/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var add_material_BreadCrumb =
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
      }, "Dashboard lecturer"), external__react__default.a.createElement("div", {
        className: "small"
      }, external__react__default.a.createElement(external__react_ionicons__default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward"
      })), external__react__default.a.createElement("div", {
        className: "small text-secondary pointer"
      }, "Mata Kuliah"), external__react__default.a.createElement("div", {
        className: "small"
      }, external__react__default.a.createElement(external__react_ionicons__default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward"
      })), external__react__default.a.createElement("div", {
        className: "small text-secondary pointer"
      }, "Desain Web"), external__react__default.a.createElement("div", {
        className: "small"
      }, external__react__default.a.createElement(external__react_ionicons__default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward"
      })), external__react__default.a.createElement("div", {
        className: "small text-secondary pointer"
      }, "Materi"), external__react__default.a.createElement("div", {
        className: "small"
      }, external__react__default.a.createElement(external__react_ionicons__default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward"
      })), external__react__default.a.createElement("div", {
        className: "small text-secondary pointer"
      }, "Tambah Materi")));
    }
  }]);

  return BreadCrumb;
}(external__react__default.a.Component);

var add_material_Category =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Category, _React$Component2);

  function Category() {
    _classCallCheck(this, Category);

    return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
  }

  _createClass(Category, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "d-flex justify-content-between mb-2"
      }, this.props.children);
    }
  }]);

  return Category;
}(external__react__default.a.Component);

var add_material_Title =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Title, _React$Component3);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "small mb-2"
      }, this.props.children);
    }
  }]);

  return Title;
}(external__react__default.a.Component);

var add_material_AddMaterialPage =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(AddMaterialPage, _React$Component4);

  function AddMaterialPage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AddMaterialPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AddMaterialPage.__proto__ || Object.getPrototypeOf(AddMaterialPage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "_onLogoClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var router = _this.props.router;
        router.push('/dashboard/lecturer');
      }
    }), _temp));
  }

  _createClass(AddMaterialPage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(select_course_page_navigator["a" /* default */], null), external__react__default.a.createElement(wrapper["a" /* default */], null, external__react__default.a.createElement(sidebar["a" /* default */], null), external__react__default.a.createElement(content["a" /* default */], null, external__react__default.a.createElement(add_material_BreadCrumb, null), external__react__default.a.createElement("div", {
        className: "p-2 border mt-2"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(add_material_Title, null, "Pilih Jenis Materi"), external__react__default.a.createElement(add_material_Category, null, external__react__default.a.createElement("div", {
        className: "p-2 bg-light border flex-fill mr-2 pointer rounded"
      }, external__react__default.a.createElement("div", {
        className: "d-flex justify-content-between"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(external__react_ionicons__default.a, {
        icon: "ios-book-outline",
        fontSize: "32"
      })), external__react__default.a.createElement("div", {
        className: "flex-fill text-center mt-1"
      }, "E-Book"))), external__react__default.a.createElement("div", {
        className: "p-2 bg-light border flex-fill mr-2 pointer rounded"
      }, external__react__default.a.createElement("div", {
        className: "d-flex justify-content-between"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(external__react_ionicons__default.a, {
        icon: "ios-videocam-outline",
        fontSize: "32"
      })), external__react__default.a.createElement("div", {
        className: "flex-fill text-center mt-1"
      }, "Video")))), external__react__default.a.createElement(add_material_Title, null, "Tentang Buku"), external__react__default.a.createElement("div", null, external__react__default.a.createElement("hr", null)), external__react__default.a.createElement("div", {
        className: "mb-2"
      }, external__react__default.a.createElement(external__reactstrap_["Input"], {
        size: "sm",
        placeholder: "Judul Buku"
      })), external__react__default.a.createElement("div", {
        className: "mb-2"
      }, external__react__default.a.createElement("textarea", {
        className: "form-control form-control-sm",
        placeholder: "Deskripsi Buku"
      })))), external__react__default.a.createElement(footer["a" /* default */], null))));
    }
  }]);

  return AddMaterialPage;
}(external__react__default.a.Component);

/* harmony default export */ var add_material = (Object(router_["withRouter"])(add_material_AddMaterialPage));
// CONCATENATED MODULE: ./pages/dashboard/lecturer/course/add-material.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return add_material_AddMaterial; });
function add_material__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { add_material__typeof = function _typeof(obj) { return typeof obj; }; } else { add_material__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return add_material__typeof(obj); }

function add_material__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_material__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_material__createClass(Constructor, protoProps, staticProps) { if (protoProps) add_material__defineProperties(Constructor.prototype, protoProps); if (staticProps) add_material__defineProperties(Constructor, staticProps); return Constructor; }

function add_material__possibleConstructorReturn(self, call) { if (call && (add_material__typeof(call) === "object" || typeof call === "function")) { return call; } return add_material__assertThisInitialized(self); }

function add_material__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function add_material__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var add_material_AddMaterial =
/*#__PURE__*/
function (_React$Component) {
  add_material__inherits(AddMaterial, _React$Component);

  function AddMaterial() {
    add_material__classCallCheck(this, AddMaterial);

    return add_material__possibleConstructorReturn(this, (AddMaterial.__proto__ || Object.getPrototypeOf(AddMaterial)).apply(this, arguments));
  }

  add_material__createClass(AddMaterial, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "Tambah Materi")), external__react__default.a.createElement("div", null, external__react__default.a.createElement(add_material, null)));
    }
  }]);

  return AddMaterial;
}(external__react__default.a.Component);



/***/ })
/******/ ]);