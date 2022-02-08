import React from "react";
import PicDredd from '../dredd.png';
import PicGlados from '../glados.png';
import PicSCP173 from '../scp173.png';

const StartScreen = (props) => {
  const divStyle = {
    display: props.display,
  };
  return (
    <div className="StartScreen" style={divStyle}>
      <h1>Find Dredd, GLaDOS, and SCP-173</h1>
      <div className="StScCharsDiv">
        <div className="StScCharCard">
          <h3>Judge Dredd</h3>
          <img src={PicDredd} alt="Judge Dredd" width="200px"/>
        </div>
        <div className="StScCharCard">
          <h3>GLaDOS</h3>
          <img src={PicGlados} alt="GLaDOS" width="200px"/>
        </div>
        <div className="StScCharCard">
          <h3>SCP-173</h3>
          <img src={PicSCP173} alt="SCP-173" width="100px"/>
        </div>
      </div>
      <button onClick={props.onClickBegin}>Begin</button>
    </div>
  );
};

export default StartScreen;
