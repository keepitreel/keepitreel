import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import { HashRouter } from "react-router-dom";
import routes from "./routes/routes";
import Landing from "./components/LandingPage-login/Landing-login.component";
import Register from "./components/LandingPage-register/Landing-register.component";
import { Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        {routes}
        <Register />
      </div>
    </HashRouter>
  );
}

export default App;
