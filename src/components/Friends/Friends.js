import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Friends.scss";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get(`/api/friendspost/recent/${this.props.user_id}`).then(res => {
      this.setState({
        friends: res.data
      });
    });
  }

  render() {
    return (
      <>
        <div className="friends-wrapper">
          <h3>Friends</h3>
          <div className="card">
            {this.state.friends.map(friend => (
              <Link to={`/blog/${friend.post_id}`}>
                <Card
                  className="card"
                  name={friend.name}
                  post_id={friend.post_id}
                  key={friend.post_id}
                  user_id={friend.user_id}
                  text={friend.text}
                  posterurl={friend.posterurl}
                  title={friend.title}
                  blogtitle={friend.blogtitle}
                  avatarurl={friend.avatarurl}
                  rating={friend.rating}
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

export default connect(mapStatetoProps)(Friends);
