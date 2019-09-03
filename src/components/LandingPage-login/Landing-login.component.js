import React, { Component } from "react";
import Video from "../../video/curtain.mp4";
import { Redirect } from "react-router-dom";
import { login, updateLogin, register } from "../../redux/authReducer";
import "./Landing-login.style.css";
import Axios from "axios";
import { connect } from "react-redux";

class Login extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // username: "",
  //     // password: ""
  //     // // login: false
  //   };
  // }

  //redirect to dashboard
  // async login(e) {
  //   e.preventDefault();
  //   const { username, password } = this.state;
  //   await this.props.login({ username, password });
  // .catch(error => console.log(error));
  // if (res.data.loggedIn) this.setState({ login: true });
  // this.props(res.data.loggedIn);
  // }

  // validateForm() {
  //   return this.state.username.length > 0 && this.state.password.length > 0;
  // }

  handleChange = e => {
    this.props.updateLogin(e.target.name, e.target.value);
  };
  handleLogin = event => {
    event.preventDefault();
    this.props.login(this.props.username, this.props.password);
    //axios post endpoint
  };
  handleRegister = event => {
    this.props.register(
      this.props.username,
      this.props.name,
      this.props.password,
      this.props.email
    );
    //axios post endpoint
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
        <div className="sign-in-container">
          <h1>Keep it Reel</h1>
          <p>Social Media for Film Enthusiast. Real People...Reel reviews.</p>
          <form>
            <span className="username-input-box">
              <input
                name="username"
                placeholder="Username"
                type="text"
                required
                onChange={this.handleChange}
              ></input>
            </span>
            <br />
            <span className="password-input-box">
              <input
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
                required
              ></input>
            </span>
            <br />
            <div className="register-form">
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
            </div>
            <div className="buttons">
              <button onClick={this.handleRegister}>Register</button>
              <button onClick={this.handleLogin}>Login</button>
            </div>
          </form>
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

// export default Login;
