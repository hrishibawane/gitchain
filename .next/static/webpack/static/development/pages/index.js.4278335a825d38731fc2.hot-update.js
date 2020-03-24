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
      items: [],
      loading: false,
      follows: [],
      currUser: "",
      userCount: 0,
      followList: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderFollowers", function _callee() {
      var followList;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(_this.state.follows);
              followList = _this.state.follows.map(function (user, index) {
                return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Item, {
                  key: index,
                  style: {
                    padding: "5px",
                    margin: "5px"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  },
                  __self: this
                }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Content, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  },
                  __self: this
                }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Header, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  },
                  __self: this
                }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
                  route: "/users/".concat(index),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  },
                  __self: this
                }, __jsx("a", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  },
                  __self: this
                }, user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Description, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  },
                  __self: this
                }, __jsx("p", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  },
                  __self: this
                }, "Projects: ", user.projCount))));
              });

              _this.setState({
                followList: followList
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderProjects", function _callee2() {
      var projCount, acc, projects, i, proj, items;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(_this.state.projCount);
              projCount = _this.state.projCount;
              acc = _this.state.account;
              projects = [];
              i = 0;

            case 5:
              if (!(i < projCount)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getProjectDetails(acc, i).call());

            case 8:
              proj = _context2.sent;
              projects.push(proj);

            case 10:
              i++;
              _context2.next = 5;
              break;

            case 13:
              // console.log(projects[0][0], projects[0][1]);
              items = projects.map(function (project, index) {
                var acc = _this.state.account;
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
                    lineNumber: 95
                  },
                  __self: this
                }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Content, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  },
                  __self: this
                }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Header, {
                  style: {
                    marginBottom: "10px",
                    fontSize: "18px"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  },
                  __self: this
                }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
                  route: "/projects/".concat(acc, "/").concat(project[0]),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  },
                  __self: this
                }, __jsx("a", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  },
                  __self: this
                }, project[1]))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"].Description, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                  },
                  __self: this
                }, __jsx("p", {
                  style: {
                    color: "grey"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                  },
                  __self: this
                }, project[2]), __jsx("p", {
                  style: {
                    color: "black",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  },
                  __self: this
                }, project[3]))));
              });

              _this.setState({
                items: items
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "createUser", function _callee3() {
      var name, email, acc;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              name = _this.state.name;
              email = _this.state.email;
              acc = _this.state.account;

              _this.setState({
                name: "",
                email: "",
                loading: true
              });

              _context3.prev = 4;
              _context3.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.createUser(name, email).send({
                from: acc
              }));

            case 7:
              console.log("User Registered");
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](4);
              console.log(_context3.t0.message);

            case 13:
              _this.setState({
                loading: false
              });

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[4, 10]], Promise);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProjIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var accs, isUser, userCount, userDetails, follows, i, user, isFollower;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 2:
              accs = _context4.sent;
              _context4.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.isUser(accs[0]).call());

            case 5:
              isUser = _context4.sent;
              _context4.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.userCount().call());

            case 8:
              userCount = _context4.sent;
              console.log(isUser);
              this.setState({
                account: accs[0],
                isUser: isUser
              });

              if (!isUser) {
                _context4.next = 31;
                break;
              }

              _context4.next = 14;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getUserDetails(accs[0]).call());

            case 14:
              userDetails = _context4.sent;
              follows = [];
              i = 0;

            case 17:
              if (!(i < userCount)) {
                _context4.next = 28;
                break;
              }

              _context4.next = 20;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.users(i).call());

            case 20:
              user = _context4.sent;
              _context4.next = 23;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.isFollower(userDetails[0], user.owner).call());

            case 23:
              isFollower = _context4.sent;

              if (isFollower) {
                follows.push(user);
              }

            case 25:
              i++;
              _context4.next = 17;
              break;

            case 28:
              this.setState({
                userid: userDetails[0],
                username: userDetails[2],
                email: userDetails[3],
                projCount: userDetails[4],
                follows: follows,
                userCount: userCount
              });
              this.renderProjects();
              this.renderFollowers();

            case 31:
            case "end":
              return _context4.stop();
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
          lineNumber: 132
        },
        __self: this
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("div", {
        style: {
          margin: "10px",
          fontSize: "16px",
          display: "flex",
          alignItems: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Signed in as ", this.state.username), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        style: {
          margin: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: "4",
        style: {
          backgroundColor: "#f0f0f1"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("h3", {
        style: {
          marginLeft: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Followers"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"], {
        divided: true,
        items: this.state.followList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("h3", {
        style: {
          marginLeft: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Projects"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["List"], {
        items: this.state.items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: "4",
        style: {
          backgroundColor: "#f0f0f1"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Signup"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        style: {
          padding: "10px",
          border: "2px solid",
          borderColor: "grey"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("label", {
        style: {
          width: "15%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
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
          lineNumber: 149
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("label", {
        style: {
          width: "15%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
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
          lineNumber: 161
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        loading: this.state.loading,
        disabled: this.state.isUser,
        fluid: true,
        color: "teal",
        size: "medium",
        content: "Sign Up",
        onClick: this.createUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
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
//# sourceMappingURL=index.js.4278335a825d38731fc2.hot-update.js.map