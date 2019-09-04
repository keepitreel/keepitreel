import React, { Component } from "react";
import Video from "../../video/curtain.mp4";
import Batman from "../../img/movie-posters/batman.jpg";
import JohnWick from "../../img/movie-posters/johnwick.jpeg";
import Marvel from "../../img/movie-posters/marvel.jpg";
import Titanic from "../../img/movie-posters/Titanic.jpg";
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
