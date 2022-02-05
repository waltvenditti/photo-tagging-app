import { React, useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import ClickMenu from "./components/ClickMenu";

import GameImg from "./game-image.jpg";
import CharTagGlados from "./components/CharTagGlados";
import CharTagSCP173 from "./components/CharTagSCP173";
import CharTagDredd from "./components/CharTagDredd";

function App() {
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const [character, setCharacter] = useState("");
  const [clickMenuDummy, setClickMenuDummy] = useState(true);
  const [xForClickMenu, setXForClickMenu] = useState(0);
  const [yForClickMenu, setYForClickMenu] = useState(0);
  const [displayForClickMenu, setDisplayForClickMenu] = useState("none");
  const [foundGlados, setFoundGlados] = useState(false);
  const [foundSCP173, setFoundSCP173] = useState(false);
  const [foundDredd, setFoundDredd] = useState(false);
  const [displayGlados, setDisplayGlados] = useState("none");
  const [displaySCP173, setDisplaySCP173] = useState("none");
  const [displayDredd, setDisplayDredd] = useState("none");


  const changeXCoord = (newX) => {
    setXCoord(newX);
  };
  const changeYCoord = (newY) => {
    setYCoord(newY);
  };
  const changeCharacter = (character) => {
    setCharacter(character);
  };
  const changeClickMenuDummy = () => {
    setClickMenuDummy(!clickMenuDummy);
  }
  const changeXForClickMenu = (newX) => {
    setXForClickMenu(newX);
  };
  const changeYForClickMenu = (newY) => {
    setYForClickMenu(newY);
  };
  const changeDisplayForClickMenu = (newDisplay) => {
    setDisplayForClickMenu(newDisplay);
  };
  const changeFoundGlados = () => {
    setFoundGlados(true);
    setDisplayGlados("flex");
  }
  const changeFoundSCP173 = () => {
    setFoundSCP173(true);
    setDisplaySCP173("flex");
  }
  const changeFoundDredd = () => {
    setFoundDredd(true);
    setDisplayDredd("flex");
  }

  const clearClickData = () => {
    changeDisplayForClickMenu("none");
    changeXCoord(0);
    changeYCoord(0);
  };

  useEffect(() => {
    if (checkFoundGlados()) {
      console.log("Found GLaDOS");
    } else if (checkFoundSCP173()) {
      console.log("Found SCP-173");
    } else if (checkFoundDredd()) {
      console.log("Found Judge Dredd");
    } else {
      console.log("Miss");
    }
    clearClickData();
  }, [clickMenuDummy]);

  useEffect(() => {
    if (foundGlados && foundSCP173 && foundDredd) {
      console.log("You Win");
    }
  }, [foundGlados, foundSCP173, foundDredd])

  useEffect(() => {

  }, [foundGlados])
  useEffect(() => {

  }, [foundSCP173])
  useEffect(() => {

  }, [foundDredd])

  const checkFoundGlados = () => {
    if (character !== 'glados') return false;
    if (foundGlados) return false;
    if (xCoord >= 340 && xCoord <= 570 && yCoord >= 2300 && yCoord <= 2450) {
      changeFoundGlados();
      return true;
    } else {
      return false;
    }
  };
  const checkFoundSCP173 = () => {
    if (character !== "scp173") return false;
    if (foundSCP173) return false;
    if (xCoord >= 2040 && xCoord <= 2150 && yCoord >= 740 && yCoord <= 910) {
      changeFoundSCP173();
      return true;
    } else {
      return false;
    }
  };
  const checkFoundDredd = () => {
    if (foundDredd) return false;
    if (character !== "dredd") return false;
    if (xCoord >= 500 && xCoord <= 565 && yCoord >= 1540 && yCoord <= 1630) {
      changeFoundDredd();
      return true;
    } else {
      return false;
    }
  };

  const onClickBtn = (e) => {
    changeCharacter(e.target.value);
    changeDisplayForClickMenu("none");
    changeClickMenuDummy();
  };

  const onClickGameImg = (e) => {
    const xCoord = e.pageX - e.target.offsetLeft;
    const yCoord = e.pageY - e.target.offsetTop;
    changeXForClickMenu(e.pageX);
    changeYForClickMenu(e.pageY);
    if (displayForClickMenu === "none") {
      changeDisplayForClickMenu("flex");
      changeXCoord(xCoord);
      changeYCoord(yCoord);
    } else {
      clearClickData();
    }
  };

  return (
    <div className="App">
      <NavBar />
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
      <ClickMenu
        display={displayForClickMenu}
        width="100px"
        onButtonClicked={onClickBtn}
        top={yForClickMenu}
        left={xForClickMenu}
      />
      <CharTagGlados display={displayGlados}/>
      <CharTagSCP173 display={displaySCP173}/>
      <CharTagDredd display={displayDredd}/>
    </div>
  );
}

export default App;
