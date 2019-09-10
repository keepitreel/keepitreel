import React, { Component } from "react";
import Rating from "../Star/Rating";
import DisplayMovie from "..//DisplayMovie/DisplayMovie";
import axios from "axios";
import "./BlogForm.scss";
// this component should take in five props

export default class BlogForm extends Component {
  constructor() {
    super();
    this.state = {
      post_id: "",
      user_id: "",
      text: "",
      imdbid: "",
      posterurl: "",
      rating: "",
      time: "",
      genre: "",
      title: "",
      blogtitle: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateRating = value => {
    console.log(value);
    this.setState({ rating: value });
  };

  editPost = () => {
    let {
      post_id,
      user_id,
      text,
      imdbid,
      posterurl,
      rating,
      time,
      genre,
      title,
      blogtitle
    } = this.state;
    axios
      .put("/api/dashboard/update/post", {
        post_id,
        user_id,
        text,
        imdbid,
        posterurl,
        rating,
        time,
        genre,
        title,
        blogtitle
      })
      .then(response => {
        this.setState({ post: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    let updateRating = this.updateRating;
    axios
      .get(`/api/dashboard/getpost/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          post: response.data,
          blogtitle: response.data[0].blogtitle,
          text: response.data[0].text,
          post_id: response.data[0].post_id,
          user_id: response.data[0].user_id,
          imdbid: response.data[0].imdbid,
          posterurl: response.data[0].posterurl,
          rating: response.data[0].rating,
          time: response.data[0].time,
          genre: response.data[0].genre,
          title: response.data[0].title
        });
      })
      .catch(error => {
        console.log(error);
      }); //gets single post given post_id
  }

  render() {
    console.log(this.state);

    return (
      <div className={"formDiv"}>
        <div className="movieContainer">
          <DisplayMovie ImdbID={this.state.imdbid} />
        </div>
        <div className="EditBlogPage">
          <form>
            <label>
              Title
              <input
                value={this.state.blogtitle}
                required
                name="blogtitle"
                onChange={this.handleChange}
                autoFocus
              ></input>
            </label>
            <label>
              Blog
              <textarea
                value={this.state.text}
                name="text"
                onChange={this.handleChange}
              ></textarea>
            </label>
            <Rating updateRating={this.updateRating} />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
