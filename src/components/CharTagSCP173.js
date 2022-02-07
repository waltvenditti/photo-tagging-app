import React from "react";

const CharTagSCP173 = (props) => {
  const divStyle = {
    display: props.display,
    top: props.top,
    left: props.left,
    width: props.width,
    height: props.height,
    fontSize: props.fontSize
  };
  return (
    <div className="CharTag" id="SCP173" style={divStyle}>
      <p>SCP-173</p>
    </div>
  );
};

export default CharTagSCP173;