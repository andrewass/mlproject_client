import * as React from 'react'
import FileUploader from './FileUploader'
import TrainingFile from '../../model/TrainingFile'
import AttributeModel from '../../model/AttributeModel'
import Attributes from './Attributes'
import { Link } from 'react-router-dom';

export default class Preprocess extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.setTrainingFileAttributes = this.setTrainingFileAttributes.bind(this)
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

    render() {
        return (
            <div>
                <FileUploader setTrainingFileAttributes={this.setTrainingFileAttributes}
                    setInstances={this.props.setInstances} />
                <Attributes trainingFile={this.props.trainingFile} sessionId={this.props.sessionId}
                    setTrainingFileAttributes={this.setTrainingFileAttributes} setInstances={this.props.setInstances}  />
                <Link to="/preprocess/edit"><button>Edit</button></Link>
            </div>
        )
    }
}