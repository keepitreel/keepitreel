import React, { Component } from "react";
import Logo from "../../img/Logo.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, checkForLogin } from "../../redux/authReducer";
import Logo2 from "../../img/Logo2.png";
import "./NavBar.scss";
import axios from "axios";

class Nav extends Component {
  componentDidMount() {
    axios.get("/api/login/sessionuser").then(res => {
      console.log("inside nav");
      console.log(res);
      console.log(res.data.user_id);

      if (res.data.user_id) {
        this.props.checkForLogin(res.data);
      }
    });
  }

  handleLogout = e => {
    console.log("hit");
    this.props.logout();
  };

  render() {
    let path = this.props.location.pathname;

    return (
      path !== "/" && (
        <div className="navPage">
          <div className="logoDiv">
            <Link to="/" className="links">
              <h1 className="logo">KeepItReel</h1>
            </Link>
            <img src={Logo2}></img>
          </div>

          <div className="linkWrap">
            {this.props.user_id ? (
              <Link to={"/"} onClick={this.handleLogout} className="links">
                Logout
              </Link>
            ) : null}
          </div>
        </div>
      )
    );
  }
}

let mapStateToProps = reduxState => {
  return {
    username: reduxState.authReducer.username,
    password: reduxState.authReducer.password,
    user_id: reduxState.authReducer.user_id,
    name: reduxState.authReducer.name,
    email: reduxState.authReducer.email
  };
};

export default connect(
  mapStateToProps,
  { logout, checkForLogin }
)(Nav);
