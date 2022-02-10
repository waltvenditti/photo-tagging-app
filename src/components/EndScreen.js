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
    <div className="EndScreenMainDiv" >
      <div className="ESHighScores">
        <h2>High Scores:</h2>
        <b>
          1. <span>{props.highScores[0].name} : {props.highScores[0].score / 1000}s</span>
        </b>
        <b>
          2. <span>{props.highScores[1].name} : {props.highScores[1].score / 1000}s</span>
        </b>
        <b>
          3. <span>{props.highScores[2].name} : {props.highScores[2].score / 1000}s</span>
        </b>
        <b>
          4. <span>{props.highScores[3].name} : {props.highScores[3].score / 1000}s</span>
        </b>
        <b>
          5. <span>{props.highScores[4].name} : {props.highScores[4].score / 1000}s</span>
        </b>
        <b>
          6. <span>{props.highScores[5].name} : {props.highScores[5].score / 1000}s</span>
        </b>
        <b>
          7. <span>{props.highScores[6].name} : {props.highScores[6].score / 1000}s</span>
        </b>
        <b>
          8. <span>{props.highScores[7].name} : {props.highScores[7].score / 1000}s</span>
        </b>
        <b>
          9. <span>{props.highScores[8].name} : {props.highScores[8].score / 1000}s</span>
        </b>
        <b>
          10. <span>{props.highScores[9].name} : {props.highScores[9].score / 1000}s</span>
        </b>
      </div>
      <div className="ESUserOptions">
        <h2>You found the characters!</h2>
        <h3>Your time: {props.time / 1000} seconds</h3>
        <div id="ESHighScoreOpts" style={divStyleHighScore}>
          <h2>High score achieved!</h2>
          <h3>Submit name/score: </h3>
          <div>
            <input placeholder="10 characters max" maxLength="10"></input>
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
