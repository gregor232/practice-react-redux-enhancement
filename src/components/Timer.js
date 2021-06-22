import React from "react";

class Timer extends React.Component {
  render() {
    const { onGetHours, onGetMinutes, onGetSeconds } = this.props;
    return (
      <section>
        Dziękujemy, że jesteś z nami już {onGetHours}h {onGetMinutes}m{" "}
        {onGetSeconds}s.
      </section>
    );
  }
}

export default Timer;
