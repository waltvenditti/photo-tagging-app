import React from "react";

const CharTagGlados = (props) => {
  const divStyle = {
    display: props.display
  };
  return (
    <div className="CharTag" id="Glados" style={divStyle}>
        <p>GLaDOS</p>
    </div>
  );
};

export default CharTagGlados;