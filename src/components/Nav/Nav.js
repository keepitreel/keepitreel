import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav-page">
        <h1>KeepItReel</h1>
        <div className="link-wrap">
          <Link to="/" className="links">
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
