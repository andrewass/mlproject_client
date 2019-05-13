import * as React from 'react';
import TrainingField from './components/TrainingField';
import { NavTab } from 'react-router-tabs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Classify from './components/classify/Classify';
import Preprocess from './components/preprocess/Preprocess';

export default class App extends React.Component<any, any>{
  render() {
    return (
      <Router>
        <NavTab to="/preprocess">Preprocess</NavTab>
        <NavTab to="/classify">Classify</NavTab>
        <Switch>
          <Route path="/preprocess" component={Preprocess} />
          <Route exact path="/classify" component={Classify} />
        </Switch>
      </Router>
    );
  }
}

