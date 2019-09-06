import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./Like.scss";

class Like extends Component {
  constructor() {
    super();
    this.state = {
      like: false,
      likeClass: "",
      unlikeClass: ""
    };
  }
  like = () => {
    console.log(this.state.like);
    let { user_id, post_id } = this.props;
    axios
      .put("/api/viewcard/thumbsup", { user_id, post_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    this.setState({
      like: !this.state.like,
      likeClass: "likeActive",
      dislikeActive: ""
    });
  };

  unlike = () => {
    console.log(this.state.like);
    let { user_id, post_id } = this.props;
    axios
      .put("/api/viewcard/thumbsdown", { user_id, post_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));

    this.setState({
      like: !this.state.like,
      likeClass: "",
      dislikeActive: "dislikeActive"
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="LikeComponent">
        <div className={"tooltip"}>
          <i
            class={`fas fa-thumbs-up ${this.likeClass}`}
            onClick={this.like}
          ></i>
          <span class="tooltiptext">Like Post</span>
        </div>
        <div className="tooltip">
          <i
            class={`fas fa-thumbs-down tooltip ${this.unlikeClass}`}
            onClick={this.unlike}
          ></i>
          <span class="tooltiptext">Dislike Post</span>
        </div>
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
