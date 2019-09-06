import React, { Component } from "react";
import Video from "../../video/curtain.mp4";
import Batman from "../../img/movie-posters/batman.jpg";
import JohnWick from "../../img/movie-posters/johnwick.jpeg";
import Marvel from "../../img/movie-posters/marvel.jpg";
import Titanic from "../../img/movie-posters/Titanic.jpg";
import { Redirect } from "react-router-dom";
import { login, updateLogin, register } from "../../redux/authReducer";
import "./Landing-login.style.css";
import axios from "axios";
import { connect } from "react-redux";

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
        <div className="movie-poster-images">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Batman}
                  alt="Batman-Poster"
                  className="batman-poster"
                />
              </div>
              <div className="flip-card-back">
                {/* the back of the card goes in this area */}
              </div>
            </div>
          </div>

          <img
            src={JohnWick}
            alt="JohnWick-Poster"
            className="johnwick-poster"
          />
          <img src={Marvel} alt="Marvel-Poster" className="marvel-poster" />
          <img src={Titanic} alt="Titanic-Poster" className="titanic-poster" />
        </div>
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
