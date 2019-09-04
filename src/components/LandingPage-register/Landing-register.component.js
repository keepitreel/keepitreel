// import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// // import { connect } from "react-redux";
// import { login, updateLogin, register } from "../../redux/authReducer";

// import "./LandingPage-register.style.scss";

// class Register extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       id: "",
//       Surname: "",
//       displayName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       redirect: false
//     };
//   }

//   handleSurname(e) {
//     this.setState({ Surname: e.target.value });
//   }
//   handleDisplayName(e) {
//     this.setState({ displayName: e.target.value });
//   }
//   handleEmail(e) {
//     this.setState({ email: e.target.value });
//   }
//   handlePassword(e) {
//     this.setState({ password: e.target.value });
//   }
//   handleConfirmPassword(e) {
//     this.setState({ confirmPassword: e.target.value });
//   }

//   registerUser(e) {
//     e.preventDefault();
//     axios
//       .post("/api/login/register", {
//         username: this.state.username,
//         password: this.state.password
//       })
//       .then(response => this.setState({ id: response.data, redirect: true }))
//       .catch(() => {
//         alert("Registration Unseccessful");
//       });
//   }

//   render() {
//     console.log(this.state);
//     if (this.state.redirect) {
//       alert("Please fill out Registration form to continue!");
//       return <Redirect to={`/${this.state.id}`} />;
//     }
//     return (
//       <div className="container">
//         <form>
//           <div className="inputs">
//             <input
//               type="text"
//               name="name"
//               onChange={this.handleSurname}
//               placeholder="Name"
//               label="Surname"
//               required
//             />
//             <input
//               type="text"
//               name="username"
//               onChange={this.handleDisplayName}
//               placeholder="Username"
//               label="Username"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               onChange={this.handleEmail}
//               placeholder="Email"
//               label="Email"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               onChange={this.handlePassword}
//               placeholder="Password"
//               label="Password"
//               required
//             />
//             <input
//               type="password"
//               name="confirmPassword"
//               onChange={this.handleConfirmPassword}
//               placeholder="Confirm-Password"
//               label="Confirm Password"
//               required
//             />
//           </div>
//           <div className="buttons">
//             <Link to="/">
//               <button className="login-button">Login</button>
//             </Link>
//             <button
//               className="signup-button"
//               onClick={e => this.registerUser(e)}
//               type="submit"
//             >
//               SIGN UP
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = reduxState => {
//   return {
//     username: reduxState.authReducer.username,
//     password: reduxState.authReducer.password,
//     user_id: reduxState.authReducer.user_id,
//     name: reduxState.authReducer.name,
//     email: reduxState.authReducer.email
//   };
// };

// export default connect(
//   mapStateToProps,
//   { login, updateLogin, Register }
// )(Login);
