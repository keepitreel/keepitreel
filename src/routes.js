import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

export default (
  <Switch>
    {/* <Route exact path="/" component={LandingPage} /> */}
    <Route path="/" component={Dashboard} />
    {/* <Route path="/community" component={Community} />
    <Route path="/favoriteBlogs" component={FavoriteBlogs} />
    <Route path="/yourBlogs" component={YourBlogs} /> */}
  </Switch>
);
