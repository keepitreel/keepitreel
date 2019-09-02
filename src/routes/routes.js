import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import CreateBlog from "../components/CreateBlog/CreateBlog";
<<<<<<< HEAD
import Login from "../components/LandingPage-login/Landing-login.component";
import Register from "../components/LandingPage-register/Landing-register.component";

export default (
  <Switch>
    {/* <Route exact path="/" component={Login}></Route> */}
    <Route path="/register" component={Register}></Route>
=======
import LandingPageLogin from "../components/LandingPage-login/Landing-login.component.js";
import Dashboard from "../components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={LandingPageLogin}></Route>
>>>>>>> master
    <Route path="/movie/:id" component={CreateBlog}></Route>
    <Route path="/moviesSearch" component={SearchMovie}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
  </Switch>
);
