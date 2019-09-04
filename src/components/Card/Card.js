import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { movies } from "../../redux/movieReducer";
import "./Card.scss";

class Card extends Component {
  constructor() {
    super();
    // this.state = {
    //   username: "",
    //   password: "",
    //   user_id: "",
    //   name: "",
    //   email: "",
    //   avatarurl: "",
    //   posterurl: "",
    //   text: ""
    // };
  }

  // componentDidMount() {
  //   axios.get(`/api/dashboard/getpost/${this.props.post_id}`).then(res => {
  //     console.log(res.data);

  //     this.setState({
  //       username: res.data[0].username,
  //       password: res.data[0].password,
  //       user_id: res.data[0].user_id,
  //       name: res.data[0].name,
  //       email: res.data[0].email,
  //       avatarurl: res.data[0].avatarurl,
  //       posterurl: res.data[0].posterurl,
  //       text: res.data[0].text
  //     });
  //   });
  // }

  render() {
    let {
      name,
      post_id,
      key,
      user_id,
      text,
      posterurl,
      title,
      blogtitle,
      avatarurl,
      rating
    } = this.props;
    return (
      <div className="card-wrapper">
        <div className="poster">
          <img src={posterurl} />
          <div className="blog-info">
            <h2>{blogtitle}</h2>
            <h3>by {name}</h3>
          </div>
          <div className="blog-post">
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
    // });
    // console.log(cardDisplay);
    // return <div className="card-display">{cardDisplay}</div>;
  }
}

const mapStateToProps = reduxState => {
  return {
    // session: reduxState.authReducer,
    // movies: reduxState.movieReducer.movies
  };
};

export default connect(mapStateToProps)(Card);
