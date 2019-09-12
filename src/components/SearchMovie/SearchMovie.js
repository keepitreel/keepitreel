import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import Unsplash from "react-unsplash-wrapper";
import "./SearchMovie.scss";
import Pagination from "./Pagination/Pagination";
import NoMovies from "../../img/NoImage.png";
import Gif from "../../img/loading.gif";

import { getMovies, getPage, setMovie } from "../../redux/movieReducer";

class SearchMovie extends Component {
  constructor() {
    super();

    this.state = {
      movie: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value.replace(" ", "-") });
  };

  search = () => {
    console.log("hit");
    this.props.setMovie(this.state.movie);
    this.props.getMovies(this.state.movie);
  };

  getPage = pageNumber => {
    console.log("hit");
    console.log(pageNumber);
    this.props.getPage(this.state.movie, pageNumber);
  };

  render() {
    let { error, movies } = this.props;
    console.log(this.props);
    movies ? console.log("hello") : console.log("goodbye");

    let displayMovies = movies.map(movie => {
      return (
        <div className="movieDiv">
          <Link to={`/movie/${movie.imdbID}`}>
            {movie.Poster === "N/A" ? (
              <div>
                <img src={NoMovies}></img>
              </div>
            ) : (
              <img src={movie.Poster}></img>
            )}
            <h4>
              {movie.Title}-{movie.Year}
            </h4>
          </Link>
        </div>
      );
    });
    return (
      <div ref="hello" className="searchMoviePage">
        {!this.props.user_id && <Redirect to="/" />}
        <div className={"imageBackground"}>
          <Unsplash width="1800" height="1000" collectionId="3677449" />
        </div>

        <div className="movieContainer">
          <div idName={"searchDiv"} className="searchDiv">
            <input
              id="input-search-movie"
              name="movie"
              onChange={this.handleChange}
              placeholder="search for movie"
              autoFocus
            />
            <button id="search-mov-btn" onClick={this.search}>
              Search
            </button>
          </div>
          {error && error}
          {this.props.loading && (
            <div className="searchResults">
              <div className="displayMovies">
                <img src={Gif}></img>
              </div>
            </div>
          )}
          {displayMovies && (
            <div className="searchResults">
              <div className="displayMovies">{displayMovies}</div>
              {console.log(this.state.movie)}
              <div className="buttonsDivContainer">
                <Pagination />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    movies: reduxState.movieReducer.movies,
    movie: reduxState.movieReducer.movie,
    error: reduxState.movieReducer.error,
    totoalResults: reduxState.movieReducer.totoalResults,
    buttons: reduxState.movieReducer.buttons,
    pagination: reduxState.movieReducer.pagination,
    displayButtons: reduxState.movieReducer.displayButtons,
    loading: reduxState.movieReducer.loading,
    user_id: reduxState.authReducer.user_id
  };
};

export default connect(
  mapStateToProps,
  { getMovies, getPage, setMovie }
)(SearchMovie);
