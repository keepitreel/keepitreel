import React, { Component } from "react";
import Video from "../../video/curtain.mp4";
import { Redirect } from "react-router-dom";
import { login, updateLogin, register } from "../../redux/authReducer";
import "./Landing-login.style.scss";
import axios from "axios";
import { connect } from "react-redux";
import Unsplash from "react-unsplash-wrapper";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class Login extends Component {
  handleChange = e => {
    this.props.updateLogin(e.target.name, e.target.value);
  };
  handleLogin = event => {
    event.preventDefault();
    this.props.login(this.props.username, this.props.password);
  };
  handleRegister = event => {
    this.props.register(
      this.props.username,
      this.props.name,
      this.props.password,
      this.props.email
    );
  };

  componentDidMount() {
    this.setState({
      video: true
    });
  }

  render() {
    console.log(this.props.user_id);

    return (
      <div className="container">
        <video id="background-video" autoPlay>
          <source muted src={Video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className={"imageBackground"}>
          <Unsplash width="2200" height="1500" collectionId="8620684" />
        </div>
        <div className="content">
          <div className="logotext">
            <h1>Keep it Reel</h1>
          </div>

          <Flippy
            ref={r => (this.flippyHorizontal = r)}
            flipOnClick={false}
            style={{
              width: "20vw",
              height: "25vh",
              border: "none",
              marginLeft: "40%",
              marginTop: "10%",
              display: "flex"
            }}
          >
            <FrontSide
              style={{
                padding: "0"
              }}
            >
              <form className="formfront">
                <div className="frontpagetext">
                  <p>Real People...Reel reviews.</p>
                </div>
                <input
                  name="username"
                  placeholder="Username"
                  type="text"
                  required
                  onChange={this.handleChange}
                  required={true}
                ></input>
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                  required
                ></input>
                <div className="buttons">
                  <button onClick={this.handleLogin}>Login</button>
                  <button
                    type="button"
                    onClick={() => this.flippyHorizontal.toggle()}
                  >
                    Register
                  </button>
                </div>
              </form>
            </FrontSide>
            <BackSide
              style={{
                padding: "0"
              }}
            >
              <form className="formback">
                <input
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <input
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />
                <input
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <div className="buttons">
                  <button
                    type="button"
                    onClick={() => this.flippyHorizontal.toggle()}
                  >
                    Cancel
                  </button>
                  <button onClick={this.handleRegister}>Register</button>
                </div>
              </form>
            </BackSide>
          </Flippy>
        </div>
        {console.log(this.props.user_id)}
        {this.props.user_id !== "" && <Redirect to="/dashboard" />}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
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
  { login, updateLogin, register }
)(Login);
