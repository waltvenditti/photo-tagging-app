import React from "react";

const CharTagGlados = (props) => {
  const divStyle = {
    display: props.display,
    top: props.top,
    left: props.left,
    width: props.width,
    height: props.height,
    fontSize: props.fontSize
  };
  return (
    <div className="CharTag" id="Glados" style={divStyle}>
        <p>GLaDOS</p>
    </div>
  );
};

export default CharTagGlados;