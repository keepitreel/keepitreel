import React from "react";
import "./App.scss";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import { HashRouter } from "react-router-dom";
import routes from "./routes/routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">{routes}</div>
    </HashRouter>
  );
}

export default App;
