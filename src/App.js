import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    timesUp: false,
    isStart: false,
  };

  setInput = (e) => {
    const value = {
      [e.target.id]: e.target.value,
    };

    this.setState(value);
  };

  onStart = () => {
    if (this.state.minutes > 59 || this.state.seconds > 59) {
      this.checkValidity();
    } else if (this.state.timesUp === true) {
      this.setState({ timesUp: false });
    } else if (
      this.state.minutes <= 0 &&
      this.state.seconds <= 0 &&
      this.state.hours <= 0
    ) {
      alert("Cannot start with 0");
    } else if(this.state.isStart === true) {
      this.setState({isStart: false})
    } else {
      this.setState({ isStart: true });
      let interval = setInterval(() => {
        if (this.state.seconds > 0) {
          this.setState((prevState) => ({
            seconds: prevState.seconds - 1,
          }));
        } else {
          if (this.state.minutes > 0) {
            this.setState((prevState) => ({
              minutes: prevState.minutes - 1,
              seconds: 59,
            }));
          } else {
            this.setState((prevState) => ({
              minutes: 59,
              seconds: 59,
              hours: prevState.hours - 1,
            }));
          }
        }
        if (
          this.state.hours === 0 &&
          this.state.minutes === 0 &&
          this.state.seconds === 0
        ) {
          this.setState({ timesUp: true, isStart: false });
          clearInterval(interval);
        } else if(this.state.isStart === false) {
          this.setState({ isStart: false });
          clearInterval(interval);
        }
      }, 1000);
    }
  };

  checkValidity = () => {
    if (this.state.minutes > 59) {
      this.setState({ minutes: 0 });
    }
    if (this.state.seconds > 59) {
      this.setState({ seconds: 0 });
    }
    alert("Minutes and Seconds should be less than 60");
  };

  render() {
    return (
      <div className="App">
        <div className={this.state.timesUp === false ? "invisble" : "time-up-block"}>Times Up!!!</div>
        <div className={this.state.timesUp ? "invisble" : "time-block"}>
          <input
            type="number"
            value={this.state.hours}
            name="hours"
            id="hours"
            onChange={this.setInput}
          />
          <label>:</label>
          <input
            type="number"
            value={this.state.minutes}
            name="minutes"
            id="minutes"
            onChange={this.setInput}
          />
          <label>:</label>
          <input
            type="number"
            value={this.state.seconds}
            name="seconds"
            id="seconds"
            onChange={this.setInput}
          />
        </div>
        <button onClick={this.onStart}>
          {this.state.isStart ? "STOP" : "START"}
        </button>
      </div>
    );
  }
}
