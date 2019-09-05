import React, { Component } from "react";
import axios from "axios";
import DisplayMovie from "..//DisplayMovie/DisplayMovie";
import "./Blog.scss";
import Comments from "../Comments/Comments";
import Follow from "../Follow/Follow";
import Like from "../Like/Like";
import StarRating from "../StarRating/StarRating";

export default class Blog extends Component {
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
    console.log(post);

    let blogStuff = post.map(blog => {
      console.log("RATING", blog.rating);
      return (
        <div>
          <p>{blog.post_id}</p>
          <h1>{blog.blogtitle}</h1>
          <h3>{blog.username}</h3>
          <Follow following_user_id={blog.user_id} />
          <Like post_id={blog.post_id} />
          <StarRating rating={blog.rating} />
          <div className="movieContainer">
            <DisplayMovie ImdbID={blog.imdbid} />
          </div>
        </div>
      );
    });
    return (
      <div className="BlogPage">
        <div className="top">{blogStuff}</div>
        <div className="bottom">
          <div className="comments">
            <Comments post_id={this.props.match.params.id} />
          </div>
        </div>
      </div>
    );
  }
}
