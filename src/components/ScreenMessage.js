import React from "react";

const ScreenMessage = (props) => {
  const divStyle = {
    display: props.display,
  };
  return (
    <div className="ScreenMessage"  style={divStyle}>
      <p>{props.message}</p>
    </div>
  );
};

export default ScreenMessage;