webpackHotUpdate(5,{

/***/ "./pages/dashboard/student/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardStudent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_ionicons__ = __webpack_require__("./node_modules/react-ionicons/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_ionicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_ionicons__);
var _jsxFileName = "/Users/me.mojila/Projects/next-dosen-jaga/pages/dashboard/student/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var NavigatorWrapper = function NavigatorWrapper(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "w-100 p-3 pl-5 pr-5 border-bottom bg-white border-primary shadow d-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.children);
};

var NavigatorContent = function NavigatorContent(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "d-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.children);
};

var Brand = function Brand(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/images/dosenjaga.png",
    height: "32px",
    className: "rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }));
};

var SearchResultItem = function SearchResultItem(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "p-2 small pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, props.children));
};

var Search = function Search(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "pl-2 pr-3 border border-primary d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_ionicons___default.a, {
    icon: "ios-search",
    color: "#9b9b9b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* Input */], {
    className: "border-0",
    bsSize: "sm",
    placeholder: "Cari Mata Kuliah ...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "w-25 p-2 border border-primary bg-white position-absolute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SearchResultItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Web Design (IT)")));
};

var Menu = function Menu(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "d-flex mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, props.children);
};

var MenuItem = function MenuItem(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "small pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_ionicons___default.a, {
    icon: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), " ", props.children);
};

var DashboardStudent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashboardStudent, _React$Component);

  function DashboardStudent() {
    _classCallCheck(this, DashboardStudent);

    return _possibleConstructorReturn(this, (DashboardStudent.__proto__ || Object.getPrototypeOf(DashboardStudent)).apply(this, arguments));
  }

  _createClass(DashboardStudent, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavigatorWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavigatorContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Brand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Search, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavigatorContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuItem, {
        icon: "ios-home-outline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Beranda"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuItem, {
        icon: "ios-sign-out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Keluar")))));
    }
  }]);

  return DashboardStudent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dashboard/student")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.23644d9d5cbf99bf3fca.hot-update.js.map