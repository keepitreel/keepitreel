import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import CreateBlog from "../components/CreateBlog/CreateBlog";
import LandingPageLogin from "../components/LandingPage-login/Landing-login.component.js";
import Dashboard from "../components/Dashboard/Dashboard";
import Blog from "../components/Blog/Blog";

export default (
  <Switch>
    <Route exact path="/" component={LandingPageLogin}></Route>
    <Route path="/movie/:id" component={CreateBlog}></Route>
    <Route path="/moviesSearch" component={SearchMovie}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/blog/:id" component={Blog}></Route>
  </Switch>
);
