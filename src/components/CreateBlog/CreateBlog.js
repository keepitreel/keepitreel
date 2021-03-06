import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../CreateBlog/CreateBlog.scss";
import MovieBlogs from "../MovieBlogs/MovieBlogs";
import DisplayMovie from "../DisplayMovie/DisplayMovie";
import { Redirect } from "react-router-dom";
import Rating from "../Star/Rating";

class CreateBlog extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      error: "",
      image: "",
      rating: 0,
      submit: false,
      text: "",
      blogTitle: "",
      movietitle: ""
    };
  }

  updateRating = value => {
    this.setState({ rating: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let { movie, text, blogtitle, rating } = this.state;
    let imdbid = movie[0].imdbID;
    let posterurl = movie[0].Poster;
    let genre = movie[0].Genre;
    let title = movie[0].Title;
    let user_id = this.props.user_id;
    let time = Date(Date.now());
    console.log(this.state);
    axios
      .post("/api/blog/createpost", {
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
        console.log(response);
        this.setState({
          submit: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    axios
      .get(
        ` http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=579b4fff`
      )
      .then(response => {
        console.log(response);
        response.data.Response === "True"
          ? this.setState({
              movie: [response.data],
              error: "",
              movietitle: response.data.Title
            })
          : this.setState({ movie: [], error: response.data.Error });
        axios
          .get(
            `http://img.omdbapi.com/?i=${this.props.match.params.id}&h=900&apikey=579b4fff`
          )
          .then(res => {
            console.log(res.config.url);
            this.setState({ image: res.config.url });
          });
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state);
    return (
      <div className="CreateBlogPage">
        {(!this.props.user_id || this.state.submit) && <Redirect to="/" />}
        <div className="ContainerBlog">
          <div className="DisplayMovieDiv">
            <DisplayMovie ImdbID={this.props.match.params.id} />
          </div>
          <div className={"formDiv"}>
            <form>
              <label>
                Title
                <input
                  required
                  name="blogtitle"
                  onChange={this.handleChange}
                  autoFocus
                ></input>
              </label>
              <label>
                Blog
                <textarea
                  name="text"
                  onChange={this.handleChange}
                  placeholder={
                    "Hello " +
                    this.props.username +
                    "! Write a REEL review about " +
                    this.state.movietitle
                  }
                ></textarea>
              </label>
              <Rating updateRating={this.updateRating} />
              <button className="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <h1>Reel Reviews</h1>
        <MovieBlogs ImdbID={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    username: reduxState.authReducer.username,
    user_id: reduxState.authReducer.user_id
  };
};

export default connect(mapStateToProps)(CreateBlog);
