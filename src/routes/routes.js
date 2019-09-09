import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import CreateBlog from "../components/CreateBlog/CreateBlog";
import LandingPageLogin from "../components/LandingPage-login/Landing-login.component";
import Dashboard from "../components/Dashboard/Dashboard";
import Blog from "../components/Blog/Blog";
import UserPage from "../components/UserPage/UserPage";

export default (
  <Switch>
    <Route exact path="/" component={LandingPageLogin}></Route>
    <Route path="/movie/:id" component={CreateBlog}></Route>
    <Route path="/search" component={SearchMovie}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/blog/:id" component={Blog}></Route>
    <Route path="/userpage/:id" component={UserPage}></Route>
  </Switch>
);
