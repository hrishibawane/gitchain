webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/projhub */ "./ethereum/projhub.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/home/hrishib/Desktop/gitchain/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var ProjIndex = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProjIndex, _Component);

  function ProjIndex() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProjIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjIndex)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      account: "",
      username: "",
      useremail: "",
      userid: "",
      projCount: 0,
      isUser: false,
      name: "",
      email: "",
      items: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderProjects", function _callee() {
      var projCount, acc, projects, i, proj, items;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(_this.state.projCount);
              projCount = _this.state.projCount;
              acc = _this.state.account;
              projects = [];
              i = 0;

            case 5:
              if (!(i < projCount)) {
                _context.next = 13;
                break;
              }

              _context.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getProjectDetails(acc, i).call());

            case 8:
              proj = _context.sent;
              projects.push(proj);

            case 10:
              i++;
              _context.next = 5;
              break;

            case 13:
              // console.log(projects[0][0], projects[0][1]);
              items = projects.map(function (project, index) {
                return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Item, {
                  key: index,
                  style: {
                    padding: "10px",
                    margin: "10px",
                    border: "1px solid",
                    borderColor: "grey"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  },
                  __self: this
                }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Content, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  },
                  __self: this
                }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Header, {
                  style: {
                    marginBottom: "10px",
                    fontSize: "18px"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
                  route: "/projects/".concat(project[0]),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  },
                  __self: this
                }, __jsx("a", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  },
                  __self: this
                }, project[1]))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Description, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  },
                  __self: this
                }, __jsx("p", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  },
                  __self: this
                }, project[2]), __jsx("p", {
                  style: {
                    textOverflow: "ellipsis"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  },
                  __self: this
                }, project[3]))));
              });

              _this.setState({
                items: items
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "createUser", function _callee2() {
      var name, email, acc;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = _this.state.name;
              email = _this.state.email;
              acc = _this.state.account;

              _this.setState({
                name: "",
                email: ""
              });

              _context2.prev = 4;
              _context2.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.createUser(name, email).send({
                from: acc
              }));

            case 7:
              console.log("User Registered");
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](4);
              console.log(_context2.t0.message);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[4, 10]], Promise);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProjIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var accs, isUser, userDetails;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 2:
              accs = _context3.sent;
              _context3.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.isUser(accs[0]).call());

            case 5:
              isUser = _context3.sent;
              console.log(isUser);
              this.setState({
                account: accs[0],
                isUser: isUser
              });

              if (!isUser) {
                _context3.next = 14;
                break;
              }

              _context3.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getUserDetails(accs[0]).call());

            case 11:
              userDetails = _context3.sent;
              this.setState({
                userid: userDetails[0],
                username: userDetails[2],
                email: userDetails[3],
                projCount: userDetails[4]
              });
              this.renderProjects();

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        style: {
          margin: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Followers")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("h3", {
        style: {
          marginLeft: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Projects"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"], {
        items: this.state.items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: "4",
        style: {
          border: "2px solid",
          borderColor: "grey"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Signup"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("label", {
        style: {
          width: "15%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Name:"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        style: {
          width: "70%"
        },
        placeholder: "Name",
        disabled: this.state.isUser,
        value: this.state.name,
        onChange: function onChange(event) {
          return _this2.setState({
            name: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("label", {
        style: {
          width: "15%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Email:"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        style: {
          width: "70%"
        },
        placeholder: "Email",
        disabled: this.state.isUser,
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState({
            email: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        disabled: this.state.isUser,
        fluid: true,
        color: "teal",
        size: "medium",
        content: "Sign Up",
        onClick: this.createUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }))))));
    }
  }]);

  return ProjIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjIndex);

/***/ })

})
//# sourceMappingURL=index.js.543772588b36e449136f.hot-update.js.map