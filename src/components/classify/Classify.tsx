import * as React from 'react'
import SelectClassifier from './SelectClassifier'
import TestOptions from './TestOptions'
import SelectClassAttribute from './SelectClassAttribute';

export default class Classity extends React.Component<any, any>{

    constructor(props: any) {
        super(props)

        this.state = {
            classAttribute: "",
            classifier: ""
        }
        this.setClassAttribute = this.setClassAttribute.bind(this)
    }

    setClassAttribute(classAttribute: any) {
        this.setState({ classAttribute: classAttribute })
    }

    render() {
        return (
            <div>
                <SelectClassifier />
                <SelectClassAttribute setClassAttribute={this.setClassAttribute} classAttribute={this.state.classAttribute}
                    trainingFile={this.props.trainingFile} />
                <TestOptions />
            </div>
        )
    }
}