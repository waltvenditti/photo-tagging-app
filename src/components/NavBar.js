import React from "react";

const NavBar = (props) => {
  return (
    <header className="NavBar">
      <div id="TitleAndMessage">
        <h2>
          Find <span style={{color: props.DreddColor}} id="DreddSpan">Dredd</span>, <span  style={{color: props.GladosColor}} id="GladosSpan">GLaDOS</span>, and <span style={{color: props.SCP173Color}}id="SCP173Span">SCP-173</span>
        </h2>
        <p>{props.subtext}</p>
      </div>
      <span id="timer">0:00:0</span>
      <button className="HeaderButton" onClick={props.onClickReset}>Restart</button>
    </header>
  );
};

export default NavBar;
