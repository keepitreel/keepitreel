import axios from axios;

const initialState= {
  movies: [],
  movie: "",
  error: "",
  totalResults: 0,
  buttons: 0,
  pagination: [],
  displayButtons: "" 
}


const FETCH_MOVIES = "FETCH_MOVIES";


export function getMovies(){
  return {
    type: FETCH_MOVIES,
    payload: axios
    .get(
      `http://www.omdbapi.com/?s=${this.state.movie}&page=1&apikey=579b4fff`
    )
    .then(response => {
      response.data
         }).catch(error = console.log(error))
  }}


  export function movieReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type){
     case `${FETCH_MOVIES}_PENDING`:
       return {...state, loading: true}
    
     case `${FETCH_MOVIES}_FULFILLED`:
      return  payload.Data.Response === "True" ? 
       {...state, loading:false, movies: payload.data.Search, totalResults: payload.data.Number(payload.data.totalResults), buttons: Math.ceil(Number(payload.data.totalResults) / 10) }:
       {movies: [], error: payload.data.Error, pagination:[], displayButtons:""}
    }
  }