import * as React from 'react'
import SelectClassifier from './SelectClassifier'
import Evaluate from './Evaluate'
import SelectClassAttribute from './SelectClassAttribute';

export default class Classity extends React.Component<any, any>{

    constructor(props: any) {
        super(props)

        this.state = {
            classAttribute: "",
            classifier: ""
        }
        this.setClassAttribute = this.setClassAttribute.bind(this)
        this.setClassifier = this.setClassifier.bind(this)
    }

    setClassAttribute(classAttribute: any) {
        this.setState({ classAttribute: classAttribute })
    }

    setClassifier(classifier: String) {
        this.setState({ classifier: classifier })
    }

    render() {
        return (
            <div>
                <SelectClassifier setClassifier={this.setClassifier} classifier={this.state.classifier} />
                <SelectClassAttribute setClassAttribute={this.setClassAttribute} classAttribute={this.state.classAttribute}
                    trainingFile={this.props.trainingFile} />
                <Evaluate sessionId={this.props.sessionId} classAttribute={this.state.classAttribute}
                    classifier={this.state.classifier.value} />
            </div>
        )
    }
}