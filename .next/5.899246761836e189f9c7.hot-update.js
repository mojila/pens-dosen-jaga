webpackHotUpdate(5,{

/***/ "./components/select-course-page/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons__ = __webpack_require__("./node_modules/react-ionicons/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_ionicons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigator__ = __webpack_require__("./components/select-course-page/navigator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer__ = __webpack_require__("./components/select-course-page/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar__ = __webpack_require__("./components/select-course-page/sidebar.js");
var _jsxFileName = "/Users/me.mojila/Projects/next-dosen-jaga/components/select-course-page/index.js";

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
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "Dashboard lecturer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        fontSize: "14",
        icon: "ios-arrow-forward",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-secondary pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Mata Kuliah"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
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
      }, "Desain Web"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
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
      var router = this.props.router;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__navigator__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Container */], {
        className: "p-2 d-flex justify-content-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__sidebar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-fill ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BreadCrumb, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 d-flex justify-content-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["a" /* Button */], {
        size: "sm",
        color: "outline-success",
        onClick: function onClick() {
          return router.push('/dashboard/lecturer/course/add-material');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Tambah Materi")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* Input */], {
        size: "sm",
        placeholder: "Pencarian ...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-start flex-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 border bg-white mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/pdf.png",
        height: "128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small mt-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Dasar Web 1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center text-primary small pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Download")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 border bg-white mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/pdf.png",
        height: "128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small mt-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Dasar Web 2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center text-primary small pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Download")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-light border mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small p-1 pl-4 pr-4 border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "1")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["a" /* Button */], {
        color: "outline-secondary",
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Selanjutnya")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })))));
    }
  }]);

  return SelectCoursePage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(SelectCoursePage));

/***/ })

})
//# sourceMappingURL=5.899246761836e189f9c7.hot-update.js.map