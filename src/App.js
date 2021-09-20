import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

const Step1 =() => <>Step 1</>;
const Step2 =() => <>Step 2</>;
const Step3 =() => <>Step 3</>;
const Result =() => <>Result</>;

const Header =() => <h1>Ultimate React form</h1>

function App() {
  return (
    <>
<Header />
<Router>
  <Switch>
    <Route exact path="/" component={Step1} />
    <Route  path="/step2" component={Step2} />
    <Route  path="/step3" component={Step3} />
    <Route  path="/result" component={Result} />
  </Switch>
</Router>

    </>

    );
}
export default App;
