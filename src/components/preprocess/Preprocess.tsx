import * as React from 'react'
import FileUploader from './FileUploader'
import TrainingFile from '../../model/TrainingFile'
import AttributeModel from '../../model/AttributeModel'
import Attributes from './Attributes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Edit from './Edit'
import { NavTab } from 'react-router-tabs';
import AttributeInformation from './AttributeInformation';

export default class Preprocess extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            selectedAttribute: null
        }
        this.setTrainingFileAttributes = this.setTrainingFileAttributes.bind(this)
        this.setSelectedAttribute = this.setSelectedAttribute.bind(this)
    }

    setTrainingFileAttributes(data: any) {
        let createdTrainingFile = new TrainingFile("Placeholder title")
        this.props.setSessionId(data.sessionId)
        for (var i in data.attributes) {
            let attribute = new AttributeModel(data.attributes[i].attributeName, data.attributes[i].attributeStats)
            createdTrainingFile.addAttribute(attribute)
        }
        this.props.setTrainingFile(createdTrainingFile)
    }

    setSelectedAttribute(attribute: AttributeModel) {
        this.setState({
            selectedAttribute: attribute
        })
    }

    openInstanceEditView() {
        alert("Opening edit window")
    }

    render() {
        return (
            <div>
                <FileUploader setTrainingFileAttributes={this.setTrainingFileAttributes} />
                <Attributes trainingFile={this.props.trainingFile} sessionId={this.props.sessionId}
                    setTrainingFileAttributes={this.setTrainingFileAttributes}
                    setSelectedAttribute={this.setSelectedAttribute} />
                <AttributeInformation selectedAttribute={this.state.selectedAttribute} />
                <button onClick={this.openInstanceEditView}>Edit Instances</button>
            </div>
        )
    }
}