import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";
import "./Favorites.scss";
import "../../App.scss";

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
    });
  }
  render() {
    return (
      <>
        {/* <div className="tabDisplay"> */}
        <div className="main-wrapper">
          <div className="tabTitle">
            <h4>Favorites</h4>
          </div>
          <div className="card">
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
        {/* </div> */}
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
