import * as React from 'react'
import FileUploader from './FileUploader';
import TrainingFile from '../../model/TrainingFile';
import Attribute from '../../model/Attribute';
import Attributes from './Attributes';

export default class Preprocess extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.setTrainingFileAttributes = this.setTrainingFileAttributes.bind(this)
    }

    setTrainingFileAttributes(data: any) {
        let createdTrainingFile = new TrainingFile("Placeholder title")
        this.props.setSessionId(data.sessionId)
        for (var i in data.attributes) {
            let attribute = new Attribute(data.attributes[i].attributeName, data.attributes[i].attributeStats)
            createdTrainingFile.addAttribute(attribute)
        }
        this.props.setTrainingFile(createdTrainingFile)
    }

    render() {
        return (
            <div>
                <FileUploader setTrainingFileAttributes={this.setTrainingFileAttributes} />
                <Attributes trainingFile={this.props.trainingFile} sessionId={this.props.sessionId}
                    setTrainingFileAttributes={this.setTrainingFileAttributes} />
            </div>
        )
    }
}