import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import { movieReducer } from "./redux/movieReducer";
import { authReducer } from "./redux/authReducer";

const root = combineReducers({
  movieReducer,
  authReducer
});

export default createStore(root, applyMiddleware(promise));
