import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StarRating from "../StarRating/StarRating";
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
        <Link to={`/blog/${this.props.post_id}`}>
          <div className="poster">
            <img src={posterurl} />
          </div>
          <div className="info-wrapper">
            <div className="blog-info">
              <div className="starRating">
                <StarRating rating={rating} />
              </div>

              <h5>{blogtitle.slice(0, 15) + "..."}</h5>
              <h6>by {name}</h6>
            </div>
            <div className="blog-post">
              <p>{text.slice(0, 60) + "..."}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {};
};

export default connect(mapStateToProps)(Card);
