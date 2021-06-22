import React from "react";
import Timer from "./Timer";
class TimerContainer extends React.Component {
  state = {
    seconds: "0",
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
        return {
          seconds: state.seconds === 59 ? 0 : parseInt(state.seconds, 10) + 1,
          minutes: state.seconds === 59 ? state.minutes + 1 : state.minutes,
          hours: state.minutes === 59 ? state.hours + 1 : state.hours,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }
}

export default TimerContainer;
