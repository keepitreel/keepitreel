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
        <div className={"imageBackground"}>
          <Unsplash width="2200" height="1000" collectionId="8598459" />
        </div>
        <h1>Keep it Reel</h1>
        <p>Social Media for Film Enthusiast. </p>
        <p>Real People...Reel reviews.</p>
        <Flippy ref={r => (this.flippyHorizontal = r)} flipOnClick={false}>
          <FrontSide>
            <div>
              <form>
                <input
                  id="username-login"
                  name="username"
                  placeholder="Username"
                  type="text"
                  required
                  onChange={this.handleChange}
                ></input>
                <input
                  id="password-login"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                  required
                ></input>
                <button onClick={this.handleLogin}>Login</button>
              </form>
              <button
                type="button"
                onClick={() => this.flippyHorizontal.toggle()}
              >
                Toggle Me!
              </button>
            </div>
          </FrontSide>
          <BackSide>
            <form>
              <input
                name="username"
                placeholder="username"
                onChange={this.handleChange}
              />
              <input
                name="name"
                placeholder="name"
                onChange={this.handleChange}
              />
              <input
                name="password"
                placeholder="password"
                onChange={this.handleChange}
              />
              <input
                name="email"
                placeholder="email"
                onChange={this.handleChange}
              />
              <button onClick={this.handleRegister}>Register</button>
            </form>
            <button
              type="button"
              onClick={() => this.flippyHorizontal.toggle()}
            >
              Toggle Me!
            </button>
          </BackSide>
        </Flippy>
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
