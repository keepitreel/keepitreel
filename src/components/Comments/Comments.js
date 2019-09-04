import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

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
        this.setState({ comment: [...this.state.comment, res.data] });
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
      return (
        <div>
          <h5>{comment.title}</h5>
          <p>{comment.text}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Comments: </h1>
        <textarea
          name="text"
          placeholder="What are your thoughts?"
          onChange={this.handleChange}
        ></textarea>
        <button onClick={this.handleClick}>Submit Comment</button>
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
