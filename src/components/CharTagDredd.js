import React from "react";

const CharTagDredd = (props) => {
  const divStyle = {
    display: props.display,
  };
  return (
    <div className="CharTag" id="Dredd" style={divStyle}>
      <p>Judge Dredd</p>
    </div>
  );
};

export default CharTagDredd;
