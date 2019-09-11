import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./Like.scss";

class Like extends Component {
  constructor() {
    super();
    this.state = {
      like: false,
      dislike: false,
      likeClass: "",
      dislikeClass: ""
    };
  }
  like = () => {
    let { user_id, post_id } = this.props;
    console.log(this.state.like);
    this.state.like
      ? this.setState({
          like: !this.state.like,
          likeClass: "",
          dislikeClass: "",
          dislike: false
        })
      : this.setState({
          like: !this.state.like,
          likeClass: "likeActive",
          dislikeClass: "",
          dislike: false
        });
    axios
      .put("/api/viewcard/thumbsup", { user_id, post_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  unlike = () => {
    console.log(this.state.dislike);
    let { user_id, post_id } = this.props;
    this.state.dislike
      ? this.setState({
          dislike: !this.state.dislike,
          likeClass: "",
          dislikeClass: "",
          like: false
        })
      : this.setState({
          dislike: !this.state.dislike,
          dislikeClass: "dislikeActive",
          likeClass: "",
          like: false
        });
    axios
      .put("/api/viewcard/thumbsdown", { user_id, post_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    let { user_id, post_id } = this.props;
    axios
      .put("/api/viewcard/liked", { user_id, post_id })
      .then(res => {
        console.log(res);
        res.data
          ? this.setState({
              like: true,
              likeClass: "likeActive",
              dislike: false,
              dislikeClass: ""
            })
          : 
      axios.put("/api/viewcard/disliked", { user_id, post_id })
          .then(respond => {
             console.log(res);
            respond.data
              ? this.setState({
                  dislike: true,
                  like: false,
                  dislikeClass: "dislikeActive",
                  likeClass: ""
                })
              : this.setState({
                  dislike: false,
                  dislikeClass: ""
                });
          })
          .catch(error2 => {
            console.log(error2);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state);
    return (
      <div className="LikeComponent">
        <div className={"tooltip"}>
          <i
            class={`fas fa-thumbs-up ${this.state.likeClass}`}
            onClick={this.like}
          ></i>
          <span class="tooltiptext">Like Post</span>
        </div>
        <div className="tooltip">
          <i
            class={`fas fa-thumbs-down tooltip ${this.state.dislikeClass}`}
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
