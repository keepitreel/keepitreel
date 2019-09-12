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
      dislikeClass: "",
      likenum: 0,
      dislikenum: 0
    };
  }

  getLikeNum = () => {
    let { post_id } = this.props;

    axios
      .get(`/api/viewcard/postlikes/${post_id}`)
      .then(res => {
        this.setState({ likenum: res.data[0].count });
        this.getDislikeNum();
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state);
  };
  getDislikeNum = () => {
    let { post_id } = this.props;

    axios
      .get(`/api/viewcard/postdislikes/${post_id}`)
      .then(res => {
        this.setState({ dislikenum: res.data[0].count });
        this.getLikeNum();
      })
      .catch(error => {
        console.log(error);
      });
  };

  like = () => {
    let { user_id, post_id } = this.props;
    console.log(this.state.like);
    // this.state.like
    //   ? this.setState({
    //       like: !this.state.like,
    //       likeClass: "",
    //       dislikeClass: "",
    //       dislike: false
    //     })
    //   : this.setState({
    //       like: !this.state.like,
    //       likeClass: "likeActive",
    //       dislikeClass: "",
    //       dislike: false
    //     });
    axios
      .put("/api/viewcard/thumbsup", { user_id, post_id })
      .then(res => {
        this.state.like
          ? this.setState({
              like: false,
              likeClass: "",
              dislikeClass: "",
              dislike: false
            })
          : this.setState({
              like: true,
              likeClass: "likeActive",
              dislikeClass: "",
              dislike: false
            });
      })
      .catch(error => console.log(error));
    this.getLikeNum();
  };

  unlike = () => {
    console.log(this.state.dislike);
    let { user_id, post_id } = this.props;

    axios
      .put("/api/viewcard/thumbsdown", { user_id, post_id })
      .then(res => {
        this.state.dislike
          ? this.setState({
              dislike: false,
              likeClass: "",
              dislikeClass: "",
              like: false
            })
          : this.setState({
              dislike: true,
              dislikeClass: "dislikeActive",
              likeClass: "",
              like: false
            });
        this.getDislikeNum();
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
          : axios
              .put("/api/viewcard/disliked", { user_id, post_id })
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
                this.getLikeNum();
                this.getDislikeNum();
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
          <p>{this.state.likenum}</p>
          <span class="tooltiptext">Like Post</span>
        </div>
        <div className="tooltip">
          <i
            class={`fas fa-thumbs-down tooltip ${this.state.dislikeClass}`}
            onClick={this.unlike}
          ></i>
          <p>{this.state.dislikenum}</p>
          <span class="tooltiptext">Dislike Post</span>
        </div>
        {}
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
