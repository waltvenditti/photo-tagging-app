import { React, useState } from 'react';

import NavBar from "./components/NavBar";
import ClickMenu from "./components/ClickMenu";

import GameImg from "./game-image.jpg";


function App() {

  const [xForClickMenu, setXForClickMenu] = useState(0);
  const [yForClickMenu, setYForClickMenu] = useState(0);
  const [displayForClickMenu, setDisplayForClickMenu] = useState("none");

  const changeXForClickMenu = (newX) => {
    setXForClickMenu(newX);
  }
  const changeYForClickMenu = (newY) => {
    setYForClickMenu(newY);
  }
  const changeDisplayForClickMenu = (newDisplay) => {
    setDisplayForClickMenu(newDisplay);
  }

  const onClickGameImg = (e) => {
    const xCoord = e.pageX - e.target.offsetLeft;
    const yCoord = e.pageY - e.target.offsetTop;
    let result;
    console.log(e);
    console.log(e.pageX, e.pageY)
    console.log(e.target.offsetLeft, e.target.offsetTop)
    console.log(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    if (checkFoundGlados(xCoord, yCoord)) {
      console.log("Found GLaDOS");
    } else if (checkFoundSCP173(xCoord, yCoord)) {
      console.log("Found SCP-173");
    } else if (checkFoundDredd(xCoord, yCoord)) {
      console.log("Found Judge Dredd");
    } else {
      console.log("Miss");
    }
  }

  const checkFoundGlados = (x, y) => {
    if ((x >= 340 && x <= 570) && (y >= 2300 && y <= 2450)) return true;
    else return false;
  }

  const checkFoundSCP173 = (x, y) => {
    if ((x >= 2040 && x <= 2150) && (y >= 740 && y <= 910)) return true;
    else return false;
  }

  const checkFoundDredd = (x, y) => {
    if ((x >= 500 && x <= 565) && (y >= 1540 && y <= 1630)) return true;
    else return false;
  }

  return (
    <div className="App">
      <NavBar/>
      <div>
      <input 
        type="image" 
        alt="game" 
        name="GameImg"
        id="GameImg"
        src={GameImg}
        onClick={onClickGameImg}
        />
      </div>
      <ClickMenu display="flex" width="100px" />
    </div>
  );
}

export default App;
