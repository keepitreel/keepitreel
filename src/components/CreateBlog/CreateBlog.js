import React, { Component } from "react";
import axios from "axios";
import "../CreateBlog/CreateBlog.scss";

export default class CreateBlog extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      error: "",
      image: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        ` http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=579b4fff`
      )
      .then(response => {
        console.log(response);
        response.data.Response === "True"
          ? this.setState({ movie: [response.data], error: "" })
          : this.setState({ movie: [], error: response.data.Error });
        axios
          .get(
            `http://img.omdbapi.com/?i=${this.props.match.params.id}&h=900&apikey=579b4fff`
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
      return (
        <div>
          <h2>{res.Title}</h2>
          <p>{res.Plot}</p>
          <p>{res.Actors}</p>
          <p>{res.Genre}</p>
        </div>
      );
    });

    return (
      <div className="container">
        <div>
          <img src={this.state.image}></img>
          {movieInformation}
        </div>
        <button className="createBlongButton">This is sso</button>
        <div>
          <form>
            <label>
              Title
              <input></input>
            </label>
            <label>
              Blog
              <textarea></textarea>
            </label>
            <label>
              <input type="radio" name="stars" value="1" />
              <span class="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" />
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" />
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="4" />
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="5" />
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
          </form>
        </div>
      </div>
    );
  }
}
