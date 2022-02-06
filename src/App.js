import { React, useEffect, useState, useRef } from "react";

import NavBar from "./components/NavBar";
import ClickMenu from "./components/ClickMenu";

import GameImg from "./game-image.jpg";
import CharTagGlados from "./components/CharTagGlados";
import CharTagSCP173 from "./components/CharTagSCP173";
import CharTagDredd from "./components/CharTagDredd";
import ScreenMessage from "./components/ScreenMessage";

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
  const [message, setMessage] = useState("WRONG.");
  const [msgDisplay, setMsgDisplay] = useState("none");
  const [timer, setTimer] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [tagDimsDredd, setTagDimsDredd] = useState(['1585px', '485px', '120px', '30px'])
  const [tagDimsGlados, setTagDimsGlados] = useState(['2415px', '500px', '90px', '30px'])
  const [tagDimsSCP173, setTagDimsSCP173] = useState(['790px', '2065px', '90px', '30px'])


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
    updateTagDims();
    setFoundGlados(true);
    setDisplayGlados("flex");
  }
  const changeFoundSCP173 = () => {
    updateTagDims();
    setFoundSCP173(true);
    setDisplaySCP173("flex");
  }
  const changeFoundDredd = () => {
    updateTagDims();
    setFoundDredd(true);
    setDisplayDredd("flex");
  }
  const changeMessage = (newMessage) => {
    setMessage(newMessage);
  }
  const ChangeMsgDisplay = (dispValue) => {
    setMsgDisplay(dispValue);
  }
  const changeTimer = (timer) => {
    setTimer(timer);
  }
  const changeImgWidth = (newWidth) => {
    setImgWidth(newWidth);
  }

  const clearClickData = () => {
    changeDisplayForClickMenu("none");
    changeXCoord(0);
    changeYCoord(0);
  };

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (checkFoundGlados()) {
      changeMessage("Found GLaDOS");
      setMsgDisplay("flex");
    } else if (checkFoundSCP173()) {
      changeMessage("Found SCP-173");
      setMsgDisplay("flex");
    } else if (checkFoundDredd()) {
      changeMessage("Found Judge Dredd");
      setMsgDisplay("flex");
    } else {
      changeMessage("Try Again.");
      setMsgDisplay("flex");
    }
    clearClickData();
  }, [clickMenuDummy]);

  useEffect(() => {
    if (foundGlados && foundSCP173 && foundDredd) {
      changeMessage("You Win");
      setMsgDisplay("flex");
    }
  }, [foundGlados, foundSCP173, foundDredd])

  useEffect(() => {

  }, [foundGlados])
  useEffect(() => {

  }, [foundSCP173])
  useEffect(() => {

  }, [foundDredd])

  
  useEffect(() => {
    // clearTimeout(timer);
    let newTimer = setTimeout(() => {
      ChangeMsgDisplay("none");
    }, 4000)
    // changeTimer(newTimer);
  }, [msgDisplay])
  

  const checkFoundGlados = () => {
    // 2500 is native image width
    const shrinkRatio = imgWidth/2500;
    if (character !== 'glados') return false;
    if (foundGlados) return false;
    if (xCoord >= (shrinkRatio*340) && xCoord <= (shrinkRatio*570) && yCoord >= (shrinkRatio*2300) && yCoord <= (shrinkRatio*2450)) {
      changeFoundGlados();
      return true;
    } else {
      return false;
    }
  };
  const checkFoundSCP173 = () => {
    // 2500 is native image width
    const shrinkRatio = imgWidth/2500;
    if (character !== "scp173") return false;
    if (foundSCP173) return false;
    if (xCoord >= (shrinkRatio*2040) && xCoord <= (shrinkRatio*2150) && yCoord >= (shrinkRatio*740) && yCoord <= (shrinkRatio*910)) {
      changeFoundSCP173();
      return true;
    } else {
      return false;
    }
  };
  const checkFoundDredd = () => {
    // 2500 is native image width
    const shrinkRatio = imgWidth/2500;
    if (foundDredd) return false;
    if (character !== "dredd") return false;
    if (xCoord >= (shrinkRatio*500) && xCoord <= (shrinkRatio*565) && yCoord >= (shrinkRatio*1540) && yCoord <= (shrinkRatio*1630)) {
      changeFoundDredd();
      return true;
    } else {
      return false;
    }
  };

  const updateTagDims = () => {

  }

  const onClickBtn = (e) => {
    changeCharacter(e.target.value);
    changeDisplayForClickMenu("none");
    changeClickMenuDummy();
  };

  const onClickGameImg = (e) => {
    changeImgWidth(e.target.width);
    console.log(e.target.width, e.target.height);
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
      <ScreenMessage message={message} display={msgDisplay}/>
    </div>
  );
}

export default App;
