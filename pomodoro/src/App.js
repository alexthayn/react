import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Timer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
