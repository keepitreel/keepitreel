import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";
import "./YourBlogs.scss";
import "../../App.scss";

class YourBlogs extends Component {
  constructor() {
    super();
    this.state = {
      yourBlogs: []
    };
  }

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
        {/* <div className="tabDisplay"> */}
        <div className="main-wrapper">
          <div className="tabTitle">
            <h4>Your Blogs</h4>
          </div>
          <div className="card">
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
        {/* </div> */}
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
