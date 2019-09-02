import React, { Component } from "react";
import axios from "axios";

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
    console.log(this.props);
    axios
      .get(` http://www.omdbapi.com/?i=${this.props.ImdbID}&apikey=579b4fff`)
      .then(response => {
        response.data.Response === "True"
          ? this.setState({ movie: [response.data], error: "" })
          : this.setState({ movie: [], error: response.data.Error });
        axios
          .get(
            `http://img.omdbapi.com/?i=${this.props.ImdbID}&h=900&apikey=579b4fff`
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
      return (
        <div>
          <img src={this.state.image}></img>
          <h2>{res.Title}</h2>
          <p>{res.Plot}</p>
          <p>{res.Type}</p>
          <p>{res.Rated}</p>
          <p>{res.Actors}</p>
          <p>{res.Writer}</p>
          <p>{res.Released}</p>
          <p>{res.Genre}</p>
          <p>{res.Production}</p>

          {res.Ratings.map(rating => {
            console.log(rating);
            return (
              <p>
                {rating.Source}- {rating.Value}
              </p>
            );
          })}
        </div>
      );
    });

    return <div className="displayMovie">{movieInformation}</div>;
  }
}
