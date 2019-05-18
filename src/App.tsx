import * as React from 'react';
import { NavTab } from 'react-router-tabs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Classify from './components/classify/Classify';
import Preprocess from './components/preprocess/Preprocess';

export default class App extends React.Component<any, any>{

  constructor(props: any) {
    super(props)

    this.state = {
      sessionId: 0
    }
    this.setSessionId = this.setSessionId.bind(this)
  }

  setSessionId(receivedSessionId: Number) {
    this.setState({
      sessionId: receivedSessionId
    })
  }

  render() {
    return (
      <Router>
        <NavTab to="/preprocess">Preprocess</NavTab>
        <NavTab to="/classify">Classify</NavTab>
        <Switch>
          <Route path="/preprocess" render={(props) => <Preprocess sessionId={this.state.sessionId} setSessionId={this.setSessionId} />} />
          <Route exact path="/classify" component={Classify} />
        </Switch>
      </Router>
    );
  }
}

