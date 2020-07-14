import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    timesUp: false
  }



  render() {
    return (
      <div className="App">
        <div className = "time-block">
          <input type = "number" value = {this.state.hours} name ="hours" id = "hours"/>
          <label>:</label>
          <input type = "number" value = {this.state.minutes} name ="hours" id = "hours"/>
          <label>:</label>
          <input type = "number" value = {this.state.seconds} name ="hours" id = "hours"/>
        </div>
      </div>
    )
  }
}
