import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class SearchMovie extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: "",
      error: ""
    };
  }

  handleChnage = e => {
    this.setState({ [e.target.name]: e.target.value.replace(" ", "-") });
  };

  search = () => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.movie}&page=1&apikey=579b4fff`
      )
      .then(response => {
        console.log(response.data);
        response.data.Response === "True"
          ? this.setState({ movies: response.data.Search, error: "" })
          : this.setState({ movies: [], error: response.data.Error });
      });
  };
  render() {
    let { error, movies } = this.state;
    console.log(movies);
    let displayMovies = movies.map(movie => {
      console.log(movie);
      return (
        movie.Poster !== "N/A" && (
          <Link to={`/movie/${movie.imdbID}`}>
            <div>
              <h1>
                {movie.Title}
                {movie.Year}
              </h1>
              <img src={movie.Poster}></img>
            </div>
          </Link>
        )
      );
    });

    return (
      <div>
        <input
          name="movie"
          onChange={this.handleChnage}
          placeholder="search for movie"
        />
        <button onClick={this.search}>Search</button>
        {error && error}
        {displayMovies}
      </div>
    );
  }
}
