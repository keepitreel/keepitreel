import React from "react";
import "./StarRating.scss";

function StarRated(props) {
  console.log(props.rating);
  let { rating } = props;

  return (
    <div>
      {rating === 0 ? (
        <div className="StarContainer">
          <span className="Star"></span>
          <span className="emoji">No Rating 🚫</span>
        </div>
      ) : rating === 1 ? (
        <div className="StarContainer">
          <span className="Star">★</span>
          <span className="emoji">Terrible 🤮</span>
        </div>
      ) : rating == 2 ? (
        <div className="StarContainer">
          <span className="Star">★★</span>
          <span className="emoji">Mediocre 😒</span>
        </div>
      ) : rating == 3 ? (
        <div className="StarContainer">
          <span className="Star">★★★</span>
          <span className="emoji">Average 😐</span>
        </div>
      ) : rating == 4 ? (
        <div className="StarContainer">
          <span className="Star">★★★★</span>
          <span className="emoji"> Solid 🙂</span>
        </div>
      ) : (
        <div className="StarContainer">
          <span className="Star">★★★★★</span>
          <span className="emoji">Fantastic 🔥</span>
        </div>
      )}
    </div>
  );
}

export default StarRated;
