webpackHotUpdate(7,{

/***/ "./components/add-material/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons__ = __webpack_require__("./node_modules/react-ionicons/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_ionicons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_course_page_navigator__ = __webpack_require__("./components/select-course-page/navigator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content__ = __webpack_require__("./components/add-material/content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_course_page_footer__ = __webpack_require__("./components/select-course-page/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_course_page_sidebar__ = __webpack_require__("./components/select-course-page/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wrapper__ = __webpack_require__("./components/add-material/wrapper.js");
var _jsxFileName = "/Users/me.mojila/Projects/next-dosen-jaga/components/add-material/index.js";

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
        className: "p-2 bg-light border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Dashboard lecturer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Mata Kuliah"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Desain Web"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Materi"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Tambah Materi")));
    }
  }]);

  return BreadCrumb;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Category =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-between mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.props.children);
    }
  }]);

  return Category;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Title =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, this.props.children);
    }
  }]);

  return Title;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var AddMaterialPage =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__select_course_page_navigator__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__wrapper__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__select_course_page_sidebar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__content__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BreadCrumb, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 border mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Pilih Jenis Materi"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Category, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border flex-fill mr-2 pointer rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-book-outline",
        fontSize: "32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-fill text-center mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "E-Book"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border flex-fill mr-2 pointer rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-videocam-outline",
        fontSize: "32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-fill text-center mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Video")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Tentang Buku"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* Input */], {
        size: "sm",
        placeholder: "Judul Buku",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        className: "form-control form-control-sm",
        placeholder: "Deskripsi Buku",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["a" /* Button */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Buat")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__select_course_page_footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }))));
    }
  }]);

  return AddMaterialPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(AddMaterialPage));

/***/ })

})
//# sourceMappingURL=7.b9def6bb93d88dfea429.hot-update.js.map