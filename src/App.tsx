import * as React from 'react';
import { NavTab } from 'react-router-tabs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Classify from './components/classify/Classify';
import PreprocessWrapper from './components/preprocess/PreprocessWrapper'
import TrainingFile from './model/TrainingFile';

export default class App extends React.Component<any, any>{

  constructor(props: any) {
    super(props)

    this.state = {
      sessionId: 0,
      trainingFile: TrainingFile
    }
    this.setSessionId = this.setSessionId.bind(this)
    this.setTrainingFile = this.setTrainingFile.bind(this)
  }

  setSessionId(sessionId: Number) {
    this.setState({
      sessionId: sessionId
    })
  }

  setTrainingFile(trainingFile: TrainingFile) {
    this.setState({
      trainingFile: trainingFile
    })
  }

  render() {
    return (
      <Router>
        <NavTab to="/preprocess/main">Preprocess</NavTab>
        <NavTab to="/classify">Classify</NavTab>
        <Switch>
          
          <Route exact path="/preprocess/main" render={(props) =>
            <PreprocessWrapper sessionId={this.state.sessionId} setSessionId={this.setSessionId}
              trainingFile={this.state.trainingFile} setTrainingFile={this.setTrainingFile} />} />
          
          <Route exact path="/classify" render={(props) => 
           <Classify sessionId={this.state.sessionId} trainingFile={this.state.trainingFile} />} />

        </Switch>
      </Router>
    );
  }
}