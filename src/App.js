import NavBar from "./components/NavBar";
import GameImg from "./game-image.jpg";

function App() {

  const onClickGameImg = (e) => {
    console.log(e);
    console.log(e.pageX, e.pageY)
    console.log(e.target.offsetLeft, e.target.offsetTop)
    console.log(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
  }

  return (
    <div className="App">
      <NavBar/>
      <div>
      <input 
        type="image" 
        alt="game" 
        src={GameImg}
        onClick={onClickGameImg}
        />
      </div>
    </div>
  );
}

export default App;
