import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getBlogs } from "reducer";

class Community extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //need backend to send blogs based on most recent****************
  componentDidMount() {
    this.props.getBlogs();
  }

  render() {
    // let displayBlogs = this.props.blogs.map(blog => {
    //   return <Blog blog={blog} />;
    // });
    return (
      <>
        <div className="community-container">
          <h1>Community</h1>
          {/* <div>{displayFriends}</div> */}
        </div>
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    community: reduxState.community.community
  };
};

// export default connect(mapStatetoProps, {getBlogs})(Community)

export default Community;
