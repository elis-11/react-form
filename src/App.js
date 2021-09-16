import "./App.css";
import { useState } from "react";
import Multiplier from "./components/Multiplier";
import Substracht from "./components/Substracht";
import Adder from "./components/Adder";
import Divider from "./components/Divider";

function App(props) {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const increment1 = () => {
    setCounter1(counter1 + 1);
  };
  const increment2 = () => {
    setCounter2(counter2 + 1);
  };
  const decrement1 = () => {
    setCounter1(counter1 - 1);
  };
  const decrement2 = () => {
    setCounter2(counter2 - 1);
  };

  return (
    <div className="App">
      <div className="increment" onClick={increment1}>
        +
      </div>
      <div className="counter">{counter1}</div>
      <div onClick={decrement1} className="decrement">
        -
      </div>
      <div className="increment" onClick={increment2}>
        +
      </div>
      <div className="counter">{counter2}</div>
      <div onClick={decrement2} className="decrement">
        -
      </div>

      <Multiplier counter1={counter1} counter2={counter2} />
      <Adder counter1={counter1} counter2={counter2} />
      <Substracht counter1={counter1} counter2={counter2} />
      <Divider counter1={counter1} counter2={counter2} />
    </div>
  );
}
export default App;
