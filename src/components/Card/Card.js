import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import movies from "../../redux/movieReducer";
import "./Card.scss";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user_id: "",
      name: "",
      email: "",
      avatarurl: "",
      posterurl: "",
      text: ""
    };
  }

  componentDidMount() {
    axios.get(`/api/dashboard/getpost:${post_id}`).then(res => {
      this.setState({
        username: res.data.username,
        password: res.data.password,
        user_id: res.data.user_id,
        name: res.data.name,
        email: res.data.email,
        avatarurl: res.data.avatarurl,
        posterurl: res.data.posterurl,
        text: res.data.text
      });
    });
  }

  render() {
    let {
      username,
      password,
      user_id,
      name,
      email,
      avatarurl,
      posterurl,
      text
    } = this.state;
    let cardDisplay = this.props.movies.map((movie, index) => {
      return (
        <div className="poster">
          <img src={movie.posterurl} />
          <div className="blog-info">
            <h2>Title of Blog</h2>
            <h3>by {movie.username}</h3>
          </div>
          <div className="blog-post">
            <p>{movie.text}</p>
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = reduxState => {
  return {
    session: reduxState.authReducer,
    movies: reduxState.movieReducer
  };
};

export default connect(mapStateToProps)(Card);
