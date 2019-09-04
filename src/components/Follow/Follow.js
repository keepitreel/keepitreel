import React, { Component } from "react";
import { connect } from "react-redux";
import "./Follow.scss";
import axios from "axios";

class Follow extends Component {
  constructor() {
    super();
    this.state = {
      follow: false
    };
  }
  follow = () => {
    console.log(this.state.follow);
    let { user_id, following_user_id } = this.props;
    axios
      .post("/api/viewcard/follow", { user_id, following_user_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    this.setState({ follow: !this.state.follow });
  };

  unfollow = () => {
    console.log(this.state.follow);
    let { user_id, following_user_id } = this.props;
    axios
      .put("/api/viewcard/unfollow", { user_id, following_user_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    this.setState({ follow: !this.state.follow });
  };

  render() {
    return (
      <div className="FollowDiv">
        {this.state.follow ? (
          <i class="fas fa-user-plus unfollow" onClick={this.unfollow}></i>
        ) : (
          <i class="fas fa-user-plus follow" onClick={this.follow}></i>
        )}
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

export default connect(mapStateToProps)(Follow);
