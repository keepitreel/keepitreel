import axios from "axios";
const { REACT_APP_MOVIEAPI } = process.env;

const initialState = {
  movies: [],
  movie: "",
  error: "",
  totalResults: 0,
  buttons: 0,
  pagination: [],
  displayButtons: "",
  loading: false
};

const FETCH_MOVIES = "FETCH_MOVIES";
const FETCH_MOVIES_PAGE = "FETCH_MOVIES_PAGE";
const SET_MOVIE = "SET_MOVIE";

export function getMovies(movie) {
  return {
    type: FETCH_MOVIES,
    payload: axios.get(
      `http://www.omdbapi.com/?s=${movie}&page=1&apikey=${REACT_APP_MOVIEAPI}`
    )
  };
}

export function setMovie(movie) {
  return {
    type: SET_MOVIE,
    payload: movie
  };
}

export function getPage(movie, page) {
  console.log(
    `http://www.omdbapi.com/?s=${movie}&page=${page}&apikey=${REACT_APP_MOVIEAPI}`
  );
  return {
    type: FETCH_MOVIES_PAGE,
    payload: axios.get(
      `http://www.omdbapi.com/?s=${movie}&page=${page}&apikey=${REACT_APP_MOVIEAPI}`
    )
  };
}

export default function movieReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_MOVIES}_PENDING`:
      return { ...state, loading: true };

    case `${FETCH_MOVIES}_FULFILLED`:
      return payload.data.Response === "True"
        ? {
            ...state,
            loading: false,
            movies: payload.data.Search,
            totalResults: Number(payload.data.totalResults),
            buttons: Math.ceil(Number(payload.data.totalResults) / 10)
          }
        : {
            movies: [],
            error: payload.data.Error,
            pagination: [],
            displayButtons: ""
          };

    case `${FETCH_MOVIES}_REJECTED`:
      return { error: "Site is currently down" };

    case `${FETCH_MOVIES_PAGE}_FULFILLED`:
      return payload.data.Response
        ? { ...state, movies: payload.data.Search, loading: false }
        : { movies: [], error: payload.data.Error };

    case `${FETCH_MOVIES_PAGE}_PENDING`:
      return { ...state, loading: true };

    case `${FETCH_MOVIES_PAGE}_REJECTED`:
      return { error: "Site is currently down" };

    case SET_MOVIE:
      return { ...state, movie: payload };
    default:
      return state;
  }
}
