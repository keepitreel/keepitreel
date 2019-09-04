import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";

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
        <div className="friends-container">
          <h1>Favorites</h1>
          <div>
            {this.state.favorites.map(favorite => (
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
