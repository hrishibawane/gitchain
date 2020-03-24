webpackHotUpdate("static/development/pages/users/display.js",{

/***/ "./pages/users/display/index.js":
/*!**************************************!*\
  !*** ./pages/users/display/index.js ***!
  \**************************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ethereum/projhub */ "./ethereum/projhub.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_ipfs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ethereum/ipfs */ "./ethereum/ipfs.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "/home/hrishib/Desktop/gitchain/pages/users/display/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var DisplayUser = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DisplayUser, _Component);

  function DisplayUser() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DisplayUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DisplayUser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      userIndex: 0,
      userName: "",
      userAddress: "",
      userEmail: "",
      userProjCount: 0,
      projects: [],
      projCards: [],
      loading: false,
      currUserAdd: "",
      currUserId: "",
      isFollower: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onFollow", function _callee() {
      var userAcc, currUserAdd, currUserId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: true
              });

              userAcc = _this.state.userAddress;
              currUserAdd = _this.state.currUserAdd;
              currUserId = _this.state.currUserId;
              console.log(currUserAdd, currUserId);
              _context.prev = 5;
              _context.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.followUser(currUserId, userAcc).send({
                from: currUserAdd
              }));

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](5);
              console.log(_context.t0.msg);

            case 13:
              _this.setState({
                loading: false
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[5, 10]], Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderProjcards", function () {
      var projCards = _this.state.projects.map(function (proj, index) {
        var acc = _this.state.userAddress;
        return {
          key: index,
          header: __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
            route: "/projects/".concat(acc, "/").concat(proj[0]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, __jsx("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, __jsx("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, proj[1])))),
          description: __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, __jsx("p", {
            style: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, proj[3])),
          extra: __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }, __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }, proj[2]))
        };
      });

      _this.setState({
        projCards: projCards
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DisplayUser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var userIndex, userDetails, currUserAdd, currUserId, isFollower, projects, i, proj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userIndex = this.props.userIndex;
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.users(userIndex).call());

            case 3:
              userDetails = _context2.sent;
              _context2.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 6:
              currUserAdd = _context2.sent;
              currUserAdd = currUserAdd[0];
              _context2.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getUserDetails(currUserAdd).call());

            case 10:
              currUserId = _context2.sent;
              currUserId = currUserId[0];
              _context2.next = 14;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.isFollower(currUserId, userDetails[1]).call());

            case 14:
              isFollower = _context2.sent;
              isFollower = isFollower && currUserId != userIndex;
              console.log(isFollower);
              projects = [];
              i = 0;

            case 19:
              if (!(i < userDetails[4])) {
                _context2.next = 27;
                break;
              }

              _context2.next = 22;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_projhub__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getProjectDetails(userDetails[1], i).call());

            case 22:
              proj = _context2.sent;
              projects.push(proj);

            case 24:
              i++;
              _context2.next = 19;
              break;

            case 27:
              this.setState({
                userIndex: userIndex,
                userAddress: userDetails[1],
                userName: userDetails[2],
                userEmail: userDetails[3],
                userProjCount: userDetails[4],
                projects: projects,
                currUserAdd: currUserAdd,
                currUserId: currUserId,
                isFollower: isFollower
              });
              console.log(projects);
              this.renderProjcards();

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Grid"].Column, {
        width: "5",
        style: {
          marginTop: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("h2", {
        style: {
          marginBottom: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.userName), __jsx("p", {
        style: {
          color: "grey",
          marginTop: "0px",
          fontSize: "14px",
          overflow: "hidden",
          textOverflow: "ellipsis"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, this.state.userAddress), __jsx("p", {
        style: {
          fontSize: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Email: ", this.state.userEmail), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        disabled: this.state.isFollower,
        loading: this.state.loading,
        color: "teal",
        content: "Follow",
        onClick: function onClick() {
          return _this2.onFollow();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Grid"].Column, {
        width: "10",
        style: {
          borderLeft: "1px solid",
          borderColor: "lightgrey",
          marginTop: "20px",
          padding: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Card"].Group, {
        items: this.state.projCards,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", {
                userIndex: props.query.index
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return DisplayUser;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DisplayUser);

/***/ })

})
//# sourceMappingURL=display.js.f9a47fb7e1e53c9e4dfb.hot-update.js.map