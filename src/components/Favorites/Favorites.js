import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    axios.get(`/api/favoritepost/${this.props.user_id}`).then(res => {
      this.setState({
        favorites: res.data
      });
      console.log(this.state);
    });
  }
  render() {
    return (
      <>
        <h1>Favorites</h1>
        <div className="favorites-container">
          <div>
            {this.state.favorites.map(favorite => (
              <Link to={`/blog/${favorite.post_id}`}>
                <Card
                  name={favorite.name}
                  post_id={favorite.post_id}
                  key={favorite.post_id}
                  user_id={favorite.user_id}
                  text={favorite.text}
                  posterurl={favorite.posterurl}
                  title={favorite.title}
                  blogtitle={favorite.blogtitle}
                  avatarurl={favorite.avatarurl}
                  rating={favorite.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  };
};

export default connect(mapStatetoProps)(Favorites);
