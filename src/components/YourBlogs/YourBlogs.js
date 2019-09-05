import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class YourBlogs extends Component {
  constructor() {
    super();
    this.state = {
      yourBlogs: []
    };
  }

  //need backend to send user's blogs data******************
  //pass in user id through props similar to profile comp
  componentDidMount() {
    axios.get(`/api/userpost/${this.props.user_id}`).then(res => {
      this.setState({
        yourBlogs: res.data
      });
    });
  }

  render() {
    return (
      <>
        <h1>Your Blogs</h1>
        <div className="friends-container">
          <div>
            {this.state.yourBlogs.map(yourBlog => (
              <Link to={`/blog/${yourBlog.post_id}`}>
                <Card
                  name={yourBlog.name}
                  post_id={yourBlog.post_id}
                  key={yourBlog.post_id}
                  user_id={yourBlog.user_id}
                  text={yourBlog.text}
                  posterurl={yourBlog.posterurl}
                  title={yourBlog.title}
                  blogtitle={yourBlog.blogtitle}
                  avatarurl={yourBlog.avatarurl}
                  rating={yourBlog.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  };
};

export default connect(mapStatetoProps)(YourBlogs);
