import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LeftMenu from '../general/LeftMenu'
import Edit from './Edit'
import { NavTab } from 'react-router-tabs'
import Preprocess from './Preprocess'

export default class PreprocessWrapper extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
    }

    render() {

        return (
            <div>
                <NavTab to="/preprocess/edit">Edit </NavTab>
                <NavTab to="/preprocess/main">Preprocess</NavTab>
                <Switch>
                    <Route exact path="/preprocess/edit" render={(props) =>
                        <Edit />} />
                    <Route exact path="/preprocess/main" render={(props) =>
                        <Preprocess sessionId={this.props.sessionId} setSessionId={this.props.setSessionId}
                            trainingFile={this.props.trainingFile} setTrainingFile={this.props.setTrainingFile} />} />
                </Switch>
            </div>
        )
    }
}