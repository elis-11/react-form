import './App.css'

const counter = () => {
  const [counter, setCounter] = useState(0);
};



function App() {
  return (
    <div className="App">
      <h4>You clicked {counter} times</h4>
     
    </div>
  );
}
export default App;
