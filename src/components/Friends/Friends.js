import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
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
    axios.get(`/api/friendspost/${this.props.user_id}`).then(res => {
      this.setState({
        friends: res.data
      });
    });
  }

  render() {
    return (
      <>
        <h1>Friends</h1>
        <div className="friends-container">
<<<<<<< HEAD
          <div classname="card">
            {this.state.friends.map(friend => (
              <Card
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
            ))}
          </div>
=======
          <h1>Friends</h1>
          {/* <div>{displayFriends}</div> */}
          {/* <Card /> */}
>>>>>>> master
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

// export default Friends;
