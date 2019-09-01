import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Unsplash from "react-unsplash-wrapper";
import "./SearchMovie.scss";
import { thisExpression } from "@babel/types";
import Pagination from "./Pagination/Pagination";
import NoMovies from "../../img/NoImage.png";

export default class SearchMovie extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      movie: "",
      error: "",
      totalResults: 0,
      buttons: 0,
      pagination: [],
      displayButtons: ""
    };
  }

  handleChnage = e => {
    this.setState({ [e.target.name]: e.target.value.replace(" ", "-") });
  };

  buildButtons = () => {
    let { buttons, pagination } = this.state;
    if (buttons > 0) {
      for (let i = 0; i < buttons; i++) {
        pagination.push(
          <Pagination name={i} getPage={this.getPage} index={i} />
        );
      }
    }
    let displayButtons = pagination.map(button => {
      return button;
    });

    this.setState({ displayButtons });
  };

  search = () => {
    this.setState({ pagination: [], displayButtons: "" });
    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.movie}&page=1&apikey=579b4fff`
      )
      .then(response => {
        console.log(response.data.totalResults);
        response.data.Response === "True"
          ? this.setState({
              movies: response.data.Search,
              error: "",
              totalResults: Number(response.data.totalResults),
              buttons: Math.ceil(Number(response.data.totalResults) / 10)
            })
          : this.setState({ movies: [], error: response.data.Error });
        this.buildButtons();
      });
  };

  getPage = pageNumber => {
    console.log("hit");
    console.log(pageNumber);

    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.movie}&page=${pageNumber}&apikey=579b4fff`
      )
      .then(response => {
        console.log(response);
        response.data.Response === "True"
          ? this.setState({
              movies: response.data.Search
            })
          : this.setState({ movies: [], error: response.data.Error });
      });
    this.refs.hello.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    let { error, movies, buttons, displayButtons } = this.state;
    console.log(this.state);
    let displayMovies = movies.map(movie => {
      return (
        <div className="movieDiv">
          <Link to={`/movie/${movie.imdbID}`}>
            <h1>{movie.Year}</h1>
            {movie.Poster === "N/A" ? (
              <div>
                <img src={NoMovies}></img>
                <h5>{movie.Title}</h5>
              </div>
            ) : (
              <img src={movie.Poster}></img>
            )}
          </Link>
        </div>
      );
    });

    console.log(buttons);

    return (
      <div ref="hello" className="searchMoviePage">
        <div className={"imageBackground"}>
          <Unsplash
            width="1500"
            height="1000"
            collectionId="829179 2346803 3963214 1366240"
          />
        </div>

        {error && error}
        <div className="movieContainer">
          <div idName={"searchDiv"} className="searchDiv">
            <input
              name="movie"
              onChange={this.handleChnage}
              placeholder="search for movie"
            />
            <button onClick={this.search}>Search</button>
          </div>

          {displayMovies && displayMovies}
          {displayButtons && displayButtons}
        </div>
      </div>
    );
  }
}
