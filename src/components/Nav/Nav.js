import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../../img/Logo2.png";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="navPage">
        <div className="logoDiv">
          <h1>KeepItReel</h1>
          <img src={Logo2}></img>
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
