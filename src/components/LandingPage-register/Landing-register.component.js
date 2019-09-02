import React, { Component } from "react";

import "./LandingPage-register.style.scss";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Surname: "",
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = event => {};

  signInWithGoogle = event => {};

  render() {
    return (
      <div className="container">
        <form>
          <div className="inputs">
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Name"
              label="Surname"
              required
            />
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              placeholder="Username"
              label="Username"
              required
            />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="Email"
              label="Email"
              required
            />
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
              label="Password"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              onChange={this.handleChange}
              placeholder="Confirm-Password"
              label="Confirm Password"
              required
            />
          </div>
          <div className="buttons">
            <button type="">Login</button>
            <button type="submit">SIGN UP</button>
          </div>
        </form>
      </div>
    );
  }
}
