import { React, useEffect, useState, useRef } from "react";

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
  const [imgWidth, setImgWidth] = useState(0);
  // for the arrays in the three hooks below,
  // positions in the array are:
  // 0=top, 1=left, 2=width, 3=height, 4=fontSize
  // to be passed as properties to char tags andu used in style
  const [tagDimsDreddConst, setTagDimsDreddConst] = useState(['1580px', '470px', '120px', '30px', '16px']);
  const [tagDimsGladosConst, setTagDimsGladosConst] = useState(['2420px', '450px', '90px', '30px', '16px']);
  const [tagDimsSCP173Const, setTagDimsSCP173Const] = useState(['780px', '2050px', '90px', '30px', '16px']);

  const [tagDimsDredd, setTagDimsDredd] = useState(['1585px', '485px', '120px', '30px', '16px']);
  const [tagDimsGlados, setTagDimsGlados] = useState(['2415px', '500px', '90px', '30px', '16px']);
  const [tagDimsSCP173, setTagDimsSCP173] = useState(['790px', '2065px', '90px', '30px', '16px']);

  // index values: 0=Dredd, 1=Glados, 2=SCP-173
  //     found=rgb(4, 107, 0)
  // not found=rgb(218, 2, 2)
  const [spanColors, setSpanColors] = useState(["rgb(218, 2, 2)", "rgb(218, 2, 2)", "rgb(218, 2, 2)"]);
  const [navbarText, setNavbarText] = useState("Find the characters.");


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
  const changeFoundDredd = () => {
    updateTagDims();
    setFoundDredd(true);
    setDisplayDredd("flex");
    changeSpanColors(0, "rgb(4, 107, 0)");
    changeNavbarText("Found Judge Dredd.");
  }
  const changeFoundGlados = () => {
    updateTagDims();
    setFoundGlados(true);
    setDisplayGlados("flex");
    changeSpanColors()
    changeSpanColors(1, "rgb(4, 107, 0)");
    changeNavbarText("Found GLaDOS.");
  }
  const changeFoundSCP173 = () => {
    updateTagDims();
    setFoundSCP173(true);
    setDisplaySCP173("flex");
    changeSpanColors(2, "rgb(4, 107, 0)");
    changeNavbarText("Found SCP-173.");
  }
  const changeImgWidth = (newWidth) => {
    setImgWidth(newWidth);
  }
  const changeSpanColors = (index, color) => {
    const newColors = [...spanColors];
    newColors[index] = color;
    setSpanColors(newColors);
  }
  const changeNavbarText = (newText) => {
    setNavbarText(newText);
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
    if (checkFoundGlados()) return;
    if (checkFoundSCP173()) return;
    if (checkFoundDredd()) return;
    changeNavbarText("Try again.");
  }, [clickMenuDummy]);
  
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
    const shrinkRatio = imgWidth/2500;
    // update Dredd
    const newDreddDims = [
      modPXDimensions(tagDimsDreddConst[0], shrinkRatio),
      modPXDimensions(tagDimsDreddConst[1], shrinkRatio),
      modPXDimensions(tagDimsDreddConst[2], shrinkRatio),
      modPXDimensions(tagDimsDreddConst[3], shrinkRatio),
      modPXDimensions(tagDimsDreddConst[4], shrinkRatio)
    ]
    setTagDimsDredd(newDreddDims);
    // update GLaDOS
    const newGladosDims = [
      modPXDimensions(tagDimsGladosConst[0], shrinkRatio),
      modPXDimensions(tagDimsGladosConst[1], shrinkRatio),
      modPXDimensions(tagDimsGladosConst[2], shrinkRatio),
      modPXDimensions(tagDimsGladosConst[3], shrinkRatio),
      modPXDimensions(tagDimsGladosConst[4], shrinkRatio)
    ]
    setTagDimsGlados(newGladosDims);
    // update SCP-173
    const newSCP173Dims = [
      modPXDimensions(tagDimsSCP173Const[0], shrinkRatio),
      modPXDimensions(tagDimsSCP173Const[1], shrinkRatio),
      modPXDimensions(tagDimsSCP173Const[2], shrinkRatio),
      modPXDimensions(tagDimsSCP173Const[3], shrinkRatio),
      modPXDimensions(tagDimsSCP173Const[4], shrinkRatio)
    ]
    setTagDimsSCP173(newSCP173Dims);
  }

  const modPXDimensions = (oldDim, adjRatio) => {
    let newDim = parseInt(oldDim.slice(0,-2));
    newDim *= adjRatio;
    if (newDim - Math.floor(newDim) !== 0) {
      newDim = newDim.toFixed(4);
    }
    newDim += 'px';
    return newDim;
  }

  const onClickBtn = (e) => {
    changeCharacter(e.target.value);
    changeDisplayForClickMenu("none");
    changeClickMenuDummy();
  };

  const onClickGameImg = (e) => {
    changeImgWidth(e.target.width);
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

  const onClickReset = () => {
    setSpanColors(["rgb(218, 2, 2)", "rgb(218, 2, 2)", "rgb(218, 2, 2)"])
    changeNavbarText("Find the characters");
    setFoundDredd(false);
    setFoundGlados(false);
    setFoundSCP173(false);
    setDisplayDredd("none");
    setDisplayGlados("none");
    setDisplaySCP173("none");
    // reset timer (whenever that's done)
  }

  useEffect(() => {
    updateTagDims();
  }, [imgWidth]);

  useEffect(() => {
    if (foundDredd && foundGlados && foundSCP173) {
      changeNavbarText("You win.");
    }
  }, [foundDredd, foundGlados, foundSCP173]);

  return (
    <div className="App">
      <NavBar 
        DreddColor={spanColors[0]}
        GladosColor={spanColors[1]}
        SCP173Color={spanColors[2]}
        subtext={navbarText}
        onClickReset={onClickReset}
      />
      <div className="ImageDiv">
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
      <CharTagGlados 
        display={displayGlados}
        top={tagDimsGlados[0]}
        left={tagDimsGlados[1]}
        width={tagDimsGlados[2]}
        height={tagDimsGlados[3]}
        fontSize={tagDimsGlados[4]}
        />
      <CharTagSCP173 
        display={displaySCP173}
        top={tagDimsSCP173[0]}
        left={tagDimsSCP173[1]}
        width={tagDimsSCP173[2]}
        height={tagDimsSCP173[3]}
        fontSize={tagDimsSCP173[4]}
        />
      <CharTagDredd 
        display={displayDredd}
        top={tagDimsDredd[0]}
        left={tagDimsDredd[1]}
        width={tagDimsDredd[2]}
        height={tagDimsDredd[3]}
        fontSize={tagDimsDredd[4]}
        />
    </div>
  );
}

export default App;
