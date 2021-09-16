import { useState } from "react";
import "./App.css";
import CounterComp from "./components/CounterComp";
import ResultComp from "./components/ResultComp";

function App() {
  const [counter1, setCounter1] = useState(0);
  const increaseCounter1 = () => {
    setCounter1(counter1 + 1);
  };
  const decreaseCounter1 = () => {
    setCounter1(counter1 - 1);
  };
  const [counter2, setCounter2] = useState(0);
  const increaseCounter2 = () => {
    setCounter2(counter2 + 1);
  };
  const decreaseCounter2 = () => {
    setCounter2(counter2 - 1);
  };
  const addResult = counter1 + counter2;
  const subResult = counter1 - counter2;
  const multResult = counter1 * counter2;
  const divResult = counter1 / counter2;

  const totalResult = addResult + divResult + multResult + subResult;

  return (
    <div className="App">
      <div>
        <CounterComp
          increaseCount={increaseCounter1}
          decreaseCount={decreaseCounter1}
          count={counter1}
        />
        <CounterComp
          increaseCount={increaseCounter2}
          decreaseCount={decreaseCounter2}
          count={counter2}
        />
      </div>
      <div>
        <ResultComp title="Addition" result={addResult} />
      </div>
      <div>
        <ResultComp title="Substraction" result={subResult} />
      </div>
      <div>
        <ResultComp title="Multiplication" result={multResult} />
      </div>
      <div>
        <ResultComp title="Division" result={divResult} />
      </div>
      <div className="total">
        <ResultComp title="Total Result" result={totalResult} />
      </div>
    </div>
  );
}

export default App;
