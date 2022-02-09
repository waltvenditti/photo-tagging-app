import React from "react";

const EndScreen = (props) => {
  const divStyle = {
    display: props.display,
  };
  return (
    <div className="EndScreen" style={divStyle}>
      <h2>You Win</h2>
      <h3>Time: {(props.time)/1000} seconds</h3>
      <button onClick={props.onClickPlayAgain}>Play Again</button>
    </div>
  );
};

export default EndScreen;
