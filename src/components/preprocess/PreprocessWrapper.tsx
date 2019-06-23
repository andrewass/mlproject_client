import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Edit from './Edit'
import Preprocess from './Preprocess'

export default class PreprocessWrapper extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            instances: null
        }
        this.setInstances = this.setInstances.bind(this)
    }

    setInstances(instances: any) {
        this.setState({
            instances: instances
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/preprocess/edit" render={(props) =>
                        <Edit instances={this.state.instances} />} />
                    <Route exact path="/preprocess" render={(props) =>
                        <Preprocess sessionId={this.props.sessionId} setSessionId={this.props.setSessionId}
                            trainingFile={this.props.trainingFile} setTrainingFile={this.props.setTrainingFile}
                            setInstances={this.setInstances} />} />
                </Router>
            </div>
        )
    }
}