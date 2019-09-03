import React, { Component } from "react";
import axios from "axios";
import "../CreateBlog/CreateBlog.scss";
import DisplayMovie from "../DisplayMovie/DisplayMovie";

export default class CreateBlog extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      error: "",
      image: "",
      rating: 0,
      submit: false
    };
  }

  handleSubmit = () => {
    axios.post().then();
    this.setState({ submit: true });
  };

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
    return (
      <div className="CreateBlogPage">
        <div className="ContainerBlog">
          <div className="DisplayMovieDiv">
            <DisplayMovie ImdbID={this.props.match.params.id} />
          </div>
          <div className={"formDiv"}>
            <form>
              <label>
                Title
                <input></input>
              </label>
              <label>
                Blog
                <textarea></textarea>
              </label>
              <div className="ratingDiv">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
