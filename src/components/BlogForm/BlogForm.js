import React, { Component } from "react";
import Rating from "../Star/Rating";

// this component should take in five props

export default class BlogForm extends Component {
  constructor() {
    super();
    this.state = {
      blogtitle: "",
      text: "",
      rating: 0
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateRating = value => {
    this.setState({ rating: value });
  };

  render() {
    let { post } = this.props;
    let form = post.map(blog => {
      return (
        <form>
          <label>
            Title
            <input
              value={blog.blogtitle}
              required
              name="blogtitle"
              onChange={this.handleChange}
              autoFocus
            ></input>
          </label>
          <label>
            Blog
            <textarea
              value={blog.text}
              name="text"
              onChange={this.handleChange}
            ></textarea>
          </label>
          <Rating updateRating={this.updateRating} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      );
    });
    return <div className={"formDiv"}>{form}</div>;
  }
}
