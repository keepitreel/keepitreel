import React from "react";
import { connect } from "react-redux";
import { getPage } from "../../../redux/movieReducer";
import "./Pagination.scss";

function Pagination(props) {
  console.log(props.movie);
  let buildButtons = [];
  for (let i = 0; i < props.buttons; i++) {
    buildButtons.push(
      <button onClick={() => props.getPage(props.movie, i + 1)}>{i + 1}</button>
    );
  }

  let displayButtons = buildButtons.map(button => {
    return button;
  });

  return <div>{displayButtons}</div>;
}
const mapStateToProps = reduxState => {
  return {
    movies: reduxState.movieReducer.movies,
    error: reduxState.movieReducer.error,
    totoalResults: reduxState.movieReducer.totoalResults,
    buttons: reduxState.movieReducer.buttons,
    pagination: reduxState.movieReducer.pagination,
    displayButtons: reduxState.movieReducer.displayButtons
  };
};

export default connect(
  mapStateToProps,
  { getPage }
)(Pagination);
