import * as React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Edit from './Edit'
import { Link } from 'react-router-dom'
import Preprocess from './Preprocess'

export default class PreprocessWrapper extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
    }

    render() {

        return (
            <div>
                <Router>
                    <Route exact path="/preprocess/edit" component={Edit} />
                    <Route exact path="/preprocess" render={(props) =>
                        <Preprocess sessionId={this.props.sessionId} setSessionId={this.props.setSessionId}
                            trainingFile={this.props.trainingFile} setTrainingFile={this.props.setTrainingFile} />} />
                </Router>
            </div>
        )
    }
}