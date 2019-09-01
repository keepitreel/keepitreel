import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoGif from "../../img/logo.gif";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="navPage">
        <div className="logoDiv">
          <h1>KeepItReel</h1>
          <img src={LogoGif}></img>
        </div>
        <div className="linkWrap">
          <Link to="/" className="links">
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
