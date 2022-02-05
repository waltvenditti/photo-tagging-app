import React from "react";

const ClickMenu = (props) => {
  const divStyle = {
    display: props.display,
    width: props.width,
    top: props.top,
    left: props.left,
  };
  return (
    <div className="ClickMenu" style={divStyle}>
      <button className="ClickMenuBtn" onClick={props.onButtonClicked} value="glados">
        GLaDOS
      </button>
      <button className="ClickMenuBtn" onClick={props.onButtonClicked} value="scp173">
        SCP-173
      </button>
      <button className="ClickMenuBtn" onClick={props.onButtonClicked} value="dredd">
        Judge Dredd
      </button>
    </div>
  );
};

export default ClickMenu;
