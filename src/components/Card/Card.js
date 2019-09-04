import React, { Component } from "react";
import { connect } from "react-redux";
import "./Card.scss";

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    let {
      name,
      post_id,
      key,
      user_id,
      text,
      posterurl,
      title,
      blogtitle,
      avatarurl,
      rating
    } = this.props;
    return (
      <div className="card-wrapper">
        <div className="poster">
          <img src={posterurl} />
        </div>
        <div className="blog-info">
          <h2>{blogtitle}</h2>
          <h3>by {name}</h3>
        </div>
        <div className="blog-post">
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    // session: reduxState.authReducer,
    // movies: reduxState.movieReducer.movies
  };
};

export default connect(mapStateToProps)(Card);
