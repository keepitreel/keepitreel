import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./Like.scss";

class Like extends Component {
  constructor() {
    super();
    this.state = {
      like: false
    };
  }
  like = () => {
    console.log(this.state.like);
    let { user_id, post_id } = this.props;
    axios
      .post("/api/viewcard/like", { user_id, post_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    this.setState({ like: !this.state.like });
  };

  unlike = () => {
    console.log(this.state.like);
    let { user_id, post_id } = this.props;
    axios
      .put("/api/viewcard/stoplike", { user_id, post_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    this.setState({ like: !this.state.like });
  };
  render() {
    return (
      <div className="likeDiv">
        <i class="fas fa-thumbs-up"></i>
        <i class="fas fa-thumbs-down"></i>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id,
    username: reduxState.authReducer.username
  };
};

export default connect(mapStateToProps)(Like);
