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
        axios
          .put("/api/viewcard/stopdislike", user_id, post_id)
          .then(response => {
            console.log("outter:" + res, "inner:" + response);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => console.log(error));
    this.setState({ like: !this.state.like });
  };

  unlike = () => {
    console.log(this.state.like);
    let { user_id, post_id } = this.props;
    axios
      .post("/api/viewcard/dislike", { user_id, post_id })
      .then(res => {
        axios
          .put("/api/viewcard/stoplike", { user_id, post_id })
          .then(res => {
            console.log(res);
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));

    this.setState({ like: !this.state.like });
  };
  render() {
    return (
      <div className="likeDiv">
        {this.props.user_id !== this.props.post_user_id && (
          <div>
            {" "}
            <i class="fas fa-thumbs-up" onClick={this.like}></i>
            <i class="fas fa-thumbs-down" onClick={this.unlike}></i>
          </div>
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

export default connect(mapStateToProps)(Like);
