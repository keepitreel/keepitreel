import React, { Component } from "react";
import axios from "axios";
import DisplayMovie from "..//DisplayMovie/DisplayMovie";
import "./Blog.scss";
import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";
import Follow from "../Follow/Follow";
import Like from "../Like/Like";
import DeletePost from "../DeletePost/DeletePost";
import { connect } from "react-redux";
import StarRating from "../StarRating/StarRating";
import Unsplash from "react-unsplash-wrapper";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      editTitle: "",
      editText: "",
      editRating: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
      return (
        <div className="BlogContainer">
          <div className="imageBackground">
            <Unsplash width="2200" height="1000" collectionId="8598365" />
          </div>
          <div className="mainContent">
            <div className="top">
              <div className="movieContainer">
                <DisplayMovie ImdbID={blog.imdbid} />
              </div>
              <div className="blogContent">
                <div className="GoToUserPage">
                  <Link to={`/userpage/${blog.user_id}`}>
                    <div className="tooltip">
                      <p className={"username"}>
                        {"Review by: " + blog.username}
                      </p>
                      <span className="tooltiptext">go to userpage</span>
                    </div>
                  </Link>
                </div>
                <h1 className="blogtitle">{blog.blogtitle}</h1>

                {this.props.user_id == blog.user_id ? (
                  <div className="features">
                    <Link to={`/editblog/${blog.post_id}`}>
                      <i class="fas fa-edit"></i>
                    </Link>

                    <DeletePost post_id={blog.post_id} />
                  </div>
                ) : this.props.user_id ? (
                  <div className="features">
                    <Like post_id={blog.post_id} post_user_id={blog.user_id} />
                  </div>
                ) : null}

                <StarRating rating={Number(blog.rating)} />
                <p>{blog.text}</p>
              </div>
            </div>
            <div className="bottom">
              <div className="comments">
                <Comments post_id={this.props.match.params.id} />
              </div>
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
