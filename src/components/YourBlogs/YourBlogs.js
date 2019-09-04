import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";

class YourBlogs extends Component {
  constructor() {
    super();
    this.state = {
      yourBlogs: []
    };
  }

  //need backend to send user's blogs data******************
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
        <div className="friends-container">
          <h1>Your Blogs</h1>
          <div>
            {this.state.yourBlogs.map(yourBlog => (
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
