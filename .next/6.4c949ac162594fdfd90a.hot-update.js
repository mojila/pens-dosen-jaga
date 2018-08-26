webpackHotUpdate(6,{

/***/ "./components/dashboard-lecturer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_course_page_navigator__ = __webpack_require__("./components/select-course-page/navigator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_material_wrapper__ = __webpack_require__("./components/add-material/wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar__ = __webpack_require__("./components/dashboard-lecturer/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_material_content__ = __webpack_require__("./components/add-material/content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_course_page_footer__ = __webpack_require__("./components/select-course-page/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_ionicons__ = __webpack_require__("./node_modules/react-ionicons/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_ionicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_ionicons__);
var _jsxFileName = "/Users/me.mojila/Projects/next-dosen-jaga/components/dashboard-lecturer/index.js";

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
      }, "Dashboard lecturer")));
    }
  }]);

  return BreadCrumb;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var NewsfeedWrapper = function NewsfeedWrapper(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "mt-2 border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, props.children);
};

var NewsfeedHeader = function NewsfeedHeader(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "d-flex justify-content-start small border-bottom pt-2 pl-2 pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, props.children);
};

var NewsfeedHeaderItem = function NewsfeedHeaderItem(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "border-bottom pt-2 pb-2 " + (props.active ? "border-primary text-primary" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_ionicons___default.a, {
    icon: props.icon,
    color: "#007bff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), props.children);
};

var NewsfeedInput = function NewsfeedInput(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, props.children);
};

var DashboardPage =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__select_course_page_navigator__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__add_material_wrapper__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__sidebar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__add_material_content__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BreadCrumb, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NewsfeedWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NewsfeedHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NewsfeedHeaderItem, {
        icon: "ios-create",
        active: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Update Status")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NewsfeedInput, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* Input */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__select_course_page_footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }))));
    }
  }]);

  return DashboardPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(DashboardPage));

/***/ })

})
//# sourceMappingURL=6.4c949ac162594fdfd90a.hot-update.js.map