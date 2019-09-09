import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./Comments.scss";
class Comments extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: null,
      comments: []
    };
  }

  handleClick = () => {
    console.log(this.props);
    let { text } = this.state;
    let { post_id, user_id, username } = this.props;
    let title = username;
    axios
      .post("/api/comment/createcomment", {
        text,
        user_id,
        post_id,
        title
      })
      .then(res => {
        console.log(res.data[0]);
        this.setState({
          comments: [res.data[0], ...this.state.comments],
          text: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    axios.get(`/api/comment/${this.props.post_id}`).then(res => {
      this.setState({ comments: res.data });
    });
  }
  render() {
    console.log(this.state);
    let { comments } = this.state;
    let displayComments = comments.map(comment => {
      console.log(comment);
      return (
        <div className="commentDiv">
          <h5>{comment.title}</h5>
          <p>{comment.text}</p>
        </div>
      );
    });
    return (
      <div className="CommentPage">
        <div className="commentHeader">
          <h1>Comments: </h1>
          <div className="makeComment">
            <textarea
              value={this.state.text}
              name="text"
              placeholder="What are your thoughts?"
              onChange={this.handleChange}
            ></textarea>
            <button onClick={this.handleClick}>Submit Comment</button>
          </div>
        </div>
        {displayComments}
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

export default connect(mapStateToProps)(Comments);
