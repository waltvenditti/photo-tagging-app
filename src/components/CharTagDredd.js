import React from "react";

const CharTagDredd = (props) => {
  const divStyle = {
    display: props.display,
    top: props.top,
    left: props.left,
    width: props.width,
    height: props.height,
    fontSize: props.fontSize
  };
  return (
    <div className="CharTag" id="Dredd" style={divStyle}>
      <p>Judge Dredd</p>
    </div>
  );
};

export default CharTagDredd;
