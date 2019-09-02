import React, { Component } from "react";
import Video from "../../video/curtain.mp4";
import { Redirect } from "react-router-dom";

import "./Landing-login.style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      signin: false
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleUsername = event => {
    this.setState({ username: event.target.value });
    console.log(event.target.value);
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
    console.log(event.target.value);
  };

  componentDidMount() {
    this.setState({
      video: true
    });
  }

  render() {
    return (
      <div className="container">
        <video id="background-video" autoPlay>
          <source muted src={Video} type="video/mp4" />
        </video>
        <div className="sign-in-container">
          <h1>Keep it Reel</h1>
          <p>Social Media for Film Enthusiast. Real People...Reel reviews.</p>
          <form>
            <span className="username-input-box">
              <input
                placeholder="Username"
                type="text"
                required
                onChange={this.handleUsername}
              ></input>
            </span>
            <br />
            <span className="password-input-box">
              <input
                placeholder="Password"
                type="password"
                onChange={this.handlePassword}
                required
              ></input>
            </span>
            <br />
            <div className="buttons">
              <button>Register</button>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
