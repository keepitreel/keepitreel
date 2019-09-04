import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  //need backend to send friends data****************
  // app.get("/api/friendspost/:user_id", getFriendsPost);
  // get user id from session
  componentDidMount() {
    axios.get(`/api/friendspost/${this.props.user_id}`).then(res => {
      console.log(this.props.user_id);
      console.log(res.data);
      this.setState({
        friends: res.data
      });
      console.log(this.state);
    });
  }

  render() {
    console.log(this.state.friends);
    return (
      <>
        <div className="friends-container">
          <h1>Friends</h1>
          <div>
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
