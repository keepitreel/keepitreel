import React, { Component } from "react";
import routes from "./routes";
import Nav from "./components/Nav/Nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <Nav />
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
