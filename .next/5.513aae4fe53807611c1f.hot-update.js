webpackHotUpdate(5,{

/***/ "./components/select-course-page/sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons__ = __webpack_require__("./node_modules/react-ionicons/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ionicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_ionicons__);
var _jsxFileName = "/Users/me.mojila/Projects/next-dosen-jaga/components/select-course-page/sidebar.js";

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
        className: "bg-light border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 border-bottom small text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "T. Informatika"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Mata Kuliah"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "Desain Web"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small font-weight-bold mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Jumlah Mahasiswa"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "30 Mahasiswa")));
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
        className: "w-25 p-2 border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CourseProfile, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Button */], {
        size: "sm",
        color: "outline-success",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Kuliah Online")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Button */], {
        size: "sm",
        color: "outline-primary",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Buat Tugas")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Button */], {
        size: "sm",
        color: "outline-primary",
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/dashboard/lecturer/course/add-material');
        },
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Buat Materi")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-2 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 small d-flex justify-content-between pointer mb-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Materi"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-book-outline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 small d-flex justify-content-between pointer mb-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Tugas"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-checkmark-circle-outline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 small d-flex justify-content-between pointer mb-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Jadwal"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-calendar-outline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-1 small d-flex justify-content-between pointer mb-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Mahasiswa"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_ionicons___default.a, {
        icon: "ios-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })));
    }
  }]);

  return SidebarCourse;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(SidebarCourse));

/***/ })

})
//# sourceMappingURL=5.513aae4fe53807611c1f.hot-update.js.map