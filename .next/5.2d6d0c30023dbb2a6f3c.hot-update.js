webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/me.mojila/Projects/next-dosen-jaga/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Wrapper = function Wrapper(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "p-3 bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.children);
};

var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "p-3 pl-5 pr-5 bg-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.children);
};

var Brand = function Brand(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "p-1 bg-white rounded-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/images/dosenjaga.png",
    height: "32",
    className: "rounded-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }));
};

var Menu = function Menu(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "d-flex justify-content-end flex-reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, props.children);
};

var MenuItem = function MenuItem(_ref) {
  var _ref$to = _ref.to,
      to = _ref$to === void 0 ? "#" : _ref$to,
      children = _ref.children,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "rounded ml-2 pt-2 pl-4 pr-4 small text-uppercase text-white pointer font-weight-light " + (active ? "bg-darkblue" : ""),
    onClick: function onClick() {
      return __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push(to);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, children);
};

var FlexBetween = function FlexBetween(_ref2) {
  var children = _ref2.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "d-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, children);
};

var Divider = function Divider(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "p-".concat(props.size),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  });
};

var Content = function Content(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "w-25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, props.children);
};

var Slide = function Slide(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "w-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, props.children);
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Dosen Jaga")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlexBetween, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Brand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuItem, {
        active: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "About"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Help"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuItem, {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Sign In"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Divider, {
        size: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlexBetween, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "h2 text-white font-weight-bold text-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Pendidikan Jarak Jauh PENS."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Button */], {
        className: "bg-purple border-0",
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/login');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "SIGN IN"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Slide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/759186550427e9606d1c8f52a5df27f2.png",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Divider, {
        size: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.2d6d0c30023dbb2a6f3c.hot-update.js.map