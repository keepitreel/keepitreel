import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";
import "./YourBlogs.scss";
import DisplayTickets from "../DisplayTickets/DisplayTickets";

class YourBlogs extends Component {
  constructor() {
    super();
    this.state = {
      yourBlogs: []
    };
  }

  componentDidMount() {
    axios.get(`/api/userpost/${this.props.user_id}`).then(res => {
      this.setState({
        yourBlogs: res.data
      });
    });
  }

  render() {
    let cards = this.state.yourBlogs.map(commCard => (
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

export default connect(null)(YourBlogs);
