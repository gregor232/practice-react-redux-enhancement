import React from "react";
import Welcome from "../components/Welcome";
const withPopup = function (step, frames, color) {
  return function (WrappedComponent) {
    return class Animation extends React.Component {
      state = {
        opacity: 0,
        visible: true,
      };
      componentDidMount() {
        this.id = setInterval(() => {
          this.setState(({ opacity }) => {
            if (opacity < 1) {
              opacity = opacity + step;
              return { ...this.state, opacity };
            }
            clearInterval(this.id);
            return { ...this.state, opacity: 1 };
          });
        }, 1000 / frames);
      }
      componentWillUnmount() {
        clearInterval(this.id);
      }
      render() {
        if (this.state.visible === false) {
          return <h1>Witamy na naszej stronie!</h1>;
        }
        return (
          <WrappedComponent
            color={color}
            opacity={this.state.opacity}
            onClick={() => this.setState({ ...this.state, visible: false })}
          />
        );
      }
    };
  };
};

export default withPopup;
