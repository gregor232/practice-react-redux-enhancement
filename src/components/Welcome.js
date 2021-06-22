import React from "react";

const Welcome = (props) => {
  const { color, opacity, onClick } = props;
  return (
    <div
      className={"welcomePopup"}
      style={{ backgroundColor: color, opacity: opacity }}
    >
      <h1>Witamy na naszej stronie!</h1>
      <button onClick={onClick} className={"welcomePopup__button"}>
        x
      </button>
    </div>
  );
};

export default Welcome;
