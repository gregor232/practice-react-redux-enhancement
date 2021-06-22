import React from "react";
import Timer from "./Timer";
class TimerContainer extends React.Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  };

  getHours(state) {
    return state.hours;
  }

  getMinutes(state) {
    return state.minutes;
  }

  getSeconds(state) {
    return state.seconds;
  }

  render() {
    return (
      <Timer
        onGetHours={this.getHours(this.state)}
        onGetMinutes={this.getMinutes(this.state)}
        onGetSeconds={this.getSeconds(this.state)}
      ></Timer>
    );
  }

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState((state) => {
        const mins = state.seconds / 60;
        const hours = state.seconds / 60;
        return {
          ...state,
          seconds: state.seconds + 1,
          minutes: mins.toFixed(0),
          hours: hours.toFixed(0),
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }
}

export default TimerContainer;
