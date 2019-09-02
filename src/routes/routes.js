import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import CreateBlog from "../components/CreateBlog/CreateBlog";
import Login from "../components/LandingPage-login/Landing-login.component";
import Register from "../components/LandingPage-register/Landing-register.component";

export default (
  <Switch>
    {/* <Route exact path="/" component={Login}></Route> */}
    <Route path="/register" component={Register}></Route>
    <Route path="/movie/:id" component={CreateBlog}></Route>
    <Route path="/moviesSearch" component={SearchMovie}></Route>
  </Switch>
);
