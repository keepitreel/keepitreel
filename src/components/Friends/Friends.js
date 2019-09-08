import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";
import "./Friends.scss";
import DisplayTickets from "../DisplayTickets/DisplayTickets";

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
    let cards = this.state.friends.map(commCard => (
      <Card
        name={commCard.name}
        post_id={commCard.post_id}
        key={commCard.post_id}
        user_id={commCard.user_id}
        text={commCard.text}
        posterurl={commCard.posterurl}
        title={commCard.title}
        blogtitle={commCard.blogtitle}
        avatarurl={commCard.avatarurl}
        rating={commCard.rating}
      />
    ));
    return (
      <div className="mappedCard">
        <DisplayTickets displayName={"Community"} tickets={cards} />
      </div>
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
