import React, { Component } from "react";
import YourBlog from "./YourBlog";
// import { connect } from "react-redux";
// import { getUserBlogs} from "reducer"

class YourBlogs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //need backend to send user's blogs data******************
  componentDidMount() {
    // this.props.getUserBlogs()
  }

  render() {
    // let displayUserBlogs = this.props.blogs.map(blog => {
    //   return <Blog blog="blog"/>
    // })
    return (
      <>
        <div className="yourBlogs-container">
          <h1>Your Blogs</h1>
          {/* <div>{displayUserBlogs}</div> */}
        </div>
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    blogs: reduxState.blogs.blogs
  };
};

// export default connect(mapStatetoProps, {getUserBlogs})(YourBlogs)

export default YourBlogs;
