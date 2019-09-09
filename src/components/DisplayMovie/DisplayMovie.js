import React, { Component } from "react";
import axios from "axios";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import "./DisplayMovie.scss";
import { tsNonNullExpression } from "@babel/types";

export default class DisplayMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      error: "",
      image: ""
    };
  }

  componentDidMount() {
    console.log("hit");
    axios
      .get(` http://www.omdbapi.com/?i=${this.props.ImdbID}&apikey=579b4fff`)
      .then(response => {
        response.data.Response === "True"
          ? this.setState({ movie: [response.data], error: "" })
          : this.setState({ movie: [], error: response.data.Error });
        axios
          .get(
            `http://img.omdbapi.com/?i=${this.props.ImdbID}&h=500&apikey=579b4fff`
          )
          .then(res => {
            console.log(res.config.url);
            this.setState({ image: res.config.url });
          });
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.movie);
    let { movie } = this.state;
    let movieInformation = movie.map(res => {
      console.log(res);
      let divStyle = {
        backgroundColor: "transparent",
        borderStyle: "none"
      };

      return (
        <div className="DisplayMovieContainer">
          <span className="Info">
            <p>Hover Below For More Info!</p>
          </span>
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="vertical" // horizontal or vertical
            ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: "60%", height: "60%", border: "none" }} /// these are optional style, it is not necessary
          >
            <FrontSide style={{ divStyle }}>
              <img className="MoviePoster" src={this.state.image}></img>
            </FrontSide>

            <BackSide style={this.divStyle}>
              <h2>{res.Title}</h2>
              <span className="MovieRated">
                <p>{res.Rated}</p>
                <p>{res.Production}</p>
              </span>
              <br />
              <p>{res.Released}</p>
              <p>{res.Genre}</p>
              <br />
              <div className="Plot">
                <p>{res.Plot}</p>
              </div>
              <div className="Actors&Writers">
                <p>{res.Actors}</p>
                <p>{res.Writer}</p>
              </div>
              <br />
              {res.Ratings.map(rating => {
                console.log(rating);
                return (
                  <p>
                    {rating.Source}- {rating.Value}
                  </p>
                );
              })}
            </BackSide>
          </Flippy>
        </div>
      );
    });

    return <div className="displayMovie">{movieInformation}</div>;
  }
}
