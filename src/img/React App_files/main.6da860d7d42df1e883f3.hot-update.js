webpackHotUpdate("main",{

/***/ "./src/components/Friends/Friends.js":
/*!*******************************************!*\
  !*** ./src/components/Friends/Friends.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card/Card */ "./src/components/Card/Card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Friends_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Friends.scss */ "./src/components/Friends/Friends.scss");
/* harmony import */ var _Friends_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Friends_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_authReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/authReducer */ "./src/redux/authReducer.js");
var _jsxFileName = "/Users/layne/DevMountain/movieproject/keepitreel/src/components/Friends/Friends.js";








class Friends extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {} // axios.get("/api/login/sessionuser").then(res => {
  //   if (res.data.user_id) {
  //     this.props.checkForLogin(res.data);
  // axios
  //   .get(`/api/friendspost/recent/${this.props.user_id}`)
  //   .then(res => {
  //     console.log(res);
  //     this.setState({
  //       friends: res.data
  //     });
  //   })
  //   .catch(error => console.log(error));
  //   });
  //   console.log("friends didmount and this.props.user_id is");
  //   console.log(this.props.user_id);
  // }


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "friends-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Friends"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, this.state.friends.map(friend => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/blog/".concat(friend.post_id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "card",
      name: friend.name,
      post_id: friend.post_id,
      key: friend.post_id,
      user_id: friend.user_id,
      text: friend.text,
      posterurl: friend.posterurl,
      title: friend.title,
      blogtitle: friend.blogtitle,
      avatarurl: friend.avatarurl,
      rating: friend.rating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }))))));
  }

} // let mapStatetoProps = reduxState => {
//   return {
//     user_id: reduxState.authReducer.user_id
//   };
// };
// export default connect(mapStatetoProps)(Friends);


let mapStateToProps = reduxState => {
  return {
    username: reduxState.authReducer.username,
    password: reduxState.authReducer.password,
    user_id: reduxState.authReducer.user_id,
    name: reduxState.authReducer.name,
    email: reduxState.authReducer.email
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  checkForLogin: _redux_authReducer__WEBPACK_IMPORTED_MODULE_6__["checkForLogin"]
})(Friends));

/***/ })

})
//# sourceMappingURL=main.6da860d7d42df1e883f3.hot-update.js.map