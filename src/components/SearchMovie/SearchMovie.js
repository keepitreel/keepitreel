import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Unsplash from "react-unsplash-wrapper";
import "./SearchMovie.scss";
import Pagination from "./Pagination/Pagination";
import NoMovies from "../../img/NoImage.png";

import { getMovies, getPage } from "../../redux/movieReducer";
import { get } from "http";

class SearchMovie extends Component {
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
    console.log("hit");
    this.props.getMovies(this.state.movie);

    // this.setState({ pagination: [], displayButtons: "" });
    // axios
    //   .get(
    //     `http://www.omdbapi.com/?s=${this.state.movie}&page=1&apikey=579b4fff`
    //   )
    //   .then(response => {
    //     console.log(response);
    //     response.data.Response === "True"
    //       ? this.setState({
    //           movies: response.data.Search,
    //           error: "",
    //           totalResults: Number(response.data.totalResults),
    //           buttons: Math.ceil(Number(response.data.totalResults) / 10)
    //         })
    //       : this.setState({
    //           movies: [],
    //           error: response.data.Error,
    //           pagination: [],
    //           displayButtons: ""
    //         });
    //     response.data.Response === "True" && this.buildButtons();
    //   });
  };

  getPage = pageNumber => {
    console.log("hit");
    console.log(pageNumber);
    this.props.getPage(this.state.movie, pageNumber);

    // axios
    //   .get(
    //     `http://www.omdbapi.com/?s=${this.state.movie}&page=${pageNumber}&apikey=579b4fff`
    //   )
    //   .then(response => {
    //     console.log(response);
    //     response.data.Response === "True"
    //       ? this.setState({
    //           movies: response.data.Search
    //         })
    //       : this.setState({ movies: [], error: response.data.Error });
    //   });
    // this.refs.hello.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    let { error, movies } = this.props;
    console.log(this.props);
    movies ? console.log("hello") : console.log("goodbye");

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
              <img
                src={`http://img.omdbapi.com/?i=${movie.imdbID}&h=900&apikey=579b4fff`}
                onerror="this.src='https://placeimg.com/200/300/animals';"
              ></img>
            )}
          </Link>
        </div>
      );
    });
    return (
      <div ref="hello" className="searchMoviePage">
        <div className={"imageBackground"}>
          <Unsplash width="1500" height="1000" collectionId="5048230 2597671" />
        </div>

        <div className="movieContainer">
          <div idName={"searchDiv"} className="searchDiv">
            <input
              name="movie"
              onChange={this.handleChnage}
              placeholder="search for movie"
            />
            <button onClick={this.search}>Search</button>
          </div>
          {error && error}
          {displayMovies && (
            <div className="searchResults">
              <div className="displayMovies">{displayMovies}</div>
              {console.log(this.state.movie)}
              <Pagination movie={this.state.movie} />
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
    displayButtons: reduxState.movieReducer.displayButtons
  };
};

export default connect(
  mapStateToProps,
  { getMovies, getPage }
)(SearchMovie);
