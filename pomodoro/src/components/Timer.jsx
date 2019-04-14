// Timer component
import React, { Component } from "react";
const ms = require("pretty-ms");
class Timer extends Component {
  state = { millisecondsLeft: 25 * 60 * 1000 };
  render() {
    return (
      <div>
        <h3> timer: {ms(this.state.millisecondsLeft)}</h3>
        <button className="btn btn-primary">Start Timer</button>
      </div>
    );
  }
}

export default Timer;
