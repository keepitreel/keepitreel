import React, { Component } from "react";
import axios from "axios";
import DisplayMovie from "..//DisplayMovie/DisplayMovie";
import "./Blog.scss";
import Comments from "../Comments/Comments";
import Follow from "../Follow/Follow";
import Like from "../Like/Like";
import DeletePost from "../DeletePost/DeletePost";
import { connect } from "react-redux";
import StarRating from "../StarRating/StarRating";
import MovieBlogs from "../MovieBlogs/MovieBlogs";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/dashboard/getpost/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ post: response.data });
      })
      .catch(error => {
        console.log(error);
      }); //gets single post given post_id
  }
  render() {
    let { post } = this.state;

    let blogStuff = post.map(blog => {
      console.log("RATING", blog.rating);
      return (
        <div className="mainContent">
          <div className="top">
            <div className="movieContainer">
              <DisplayMovie ImdbID={blog.imdbid} />
            </div>
            <div className="blogContent">
              <p>{blog.post_id}</p>
              <h1>{blog.blogtitle}</h1>
              <h3>{blog.username}</h3>
              {this.props.user_id == blog.user_id ? (
                <div className="features">
                  <DeletePost post_id={blog.post_id} />
                </div>
              ) : (
                <div className="features">
                  <Follow following_user_id={blog.user_id} />
                  <Like post_id={blog.post_id} post_user_id={blog.user_id} />
                </div>
              )}

              <StarRating rating={blog.rating} />
            </div>
          </div>
          <div className="bottom">
            <div className="comments">
              <Comments post_id={this.props.match.params.id} />
            </div>
          </div>
        </div>
      );
    });
    return <div className="BlogPage">{blogStuff}</div>;
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id,
    username: reduxState.authReducer.username
  };
};

export default connect(mapStateToProps)(Blog);
