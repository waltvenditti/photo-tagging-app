import React from "react";
import { useState, useEffect } from "react";

const EndScreen = (props) => {
  const [highScoresSorted, setHighScoresSorted] = useState();

  const divStyle = {
    display: props.display,
  };
  const divStyleHighScore = {
    display: props.displayHighScore,
  }

  useEffect(() => {
    //create a sorted array of the high score objects, sorted in ascending order by size of time value
    //this component receives an array of unsorted 
    // there is a function that can sort the documents from firebase, will have to use that 
  }, [props.highScores])

  return (
    <div className="EndScreenMainDiv" style={divStyle}>
      <div className="ESHighScores">
        <h2>High Scores:</h2>
        <b>
          1. <span>arf : 10s</span>
        </b>
        <b>
          2. <span>arf : 10s</span>
        </b>
        <b>
          3. <span>arf : 10s</span>
        </b>
        <b>
          4. <span>arf : 10s</span>
        </b>
        <b>
          5. <span>arf : 10s</span>
        </b>
        <b>
          6. <span>arfarfarfa : 10s</span>
        </b>
        <b>
          7. <span>arf : 10s</span>
        </b>
        <b>
          8. <span>arf : 10s</span>
        </b>
        <b>
          9. <span>arf : 10s</span>
        </b>
        <b>
          10. <span>arf : 10s</span>
        </b>
      </div>
      <div className="ESUserOptions">
        <h2>You found the characters!</h2>
        <h3>Your time: {props.time / 1000} seconds</h3>
        <div id="ESHighScoreOpts" style={divStyleHighScore}>
          <h2>High score achieved!</h2>
          <h3>Submit name/score: </h3>
          <div>
            <input placeholder="10 character or less"></input>
            <button id="ESBtnSubmit">Submit</button>
          </div>
        </div>
        <button id="ESBtnPlayAgain" onClick={props.onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default EndScreen;

/*

*/
