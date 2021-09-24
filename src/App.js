import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Step1 } from './Step1';
import { step2 } from './Step2';

const Step3 =() => <>Step 3</>;
const Result =() => <>Result</>;


function App() {
  return (
    <>
<Header />
<Router>
  <Switch>
    <Route exact path="/" component={Step1}/>
    <Route  path="/step2" component={step2} />
    <Route  path="/step3" component={Step3} />
    <Route  path="/result" component={Result} /> 
  </Switch>
</Router>

    </>

    );
}
export default App;
