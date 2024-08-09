import { useState } from "react";
import "./App.css";
import Tabs from "./Compenents/Tabs";
import TrafficLight from "./Compenents/TrafficLight";
import ColorBox from "./Compenents/ColorBox";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <h1>Tab Content</h1>
        <Tabs />
      </div>

      {/* <div className="app-container">
        <h1>Traffic Light</h1>
        <TrafficLight />
      </div> */}

      <div className="app-container">
        <h1>Color Box</h1>
        <ColorBox color="red" />
        <ColorBox color="yellow" />
        <ColorBox color="aqua" />
        <ColorBox color="purple" />
      </div>
    </>
  );
}

export default App;
