import * as React from 'react';
import { NavTab } from 'react-router-tabs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <NavTab to="/preprocess">Preprocess</NavTab>
        <NavTab to="/classify">Classify</NavTab>
        <Route exact path="/preprocess" render={(props) =>
          <PreprocessWrapper sessionId={this.state.sessionId} setSessionId={this.setSessionId}
            trainingFile={this.state.trainingFile} setTrainingFile={this.setTrainingFile} />} />

        <Route exact path="/classify" render={(props) =>
          <Classify sessionId={this.state.sessionId} trainingFile={this.state.trainingFile} />} />
      </Router>
    );
  }
}