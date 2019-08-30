import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import CreateBlog from "../components/CreateBlog/CreateBlog";

export default (
  <Switch>
    <Route path="/movie/:id" component={CreateBlog}></Route>
    <Route path="/moviesSearch" component={SearchMovie}></Route>
  </Switch>
);
