import * as React from 'react'
import FileUploader from './FileUploader';
import TrainingFile from '../../model/TrainingFile';
import Attribute from '../../model/Attribute';
import Instances from './Instances';

export default class Preprocess extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            trainingFile: TrainingFile,
            hasUploadedTrainingFile: false,
        }
        this.setTrainingFileAttributes = this.setTrainingFileAttributes.bind(this)
        this.removeAttributeFromTrainingFile = this.removeAttributeFromTrainingFile.bind(this)
    }

    setTrainingFileAttributes(data: any) {
        let createdTrainingFile = new TrainingFile("Placeholder title")
        this.props.setSessionId(data.sessionId)
        for (var i in data.attributes) {
            let attribute = new Attribute(data.attributes[i].attributeName, data.attributes[i].attributeStats)
            createdTrainingFile.addAttribute(attribute)
        }
        this.setState({
            trainingFile: createdTrainingFile,
            hasUploadedTrainingFile: true
        })
    }

    removeAttributeFromTrainingFile(attributeList : any){
        this.state.trainingFile.removeAttributes(attributeList)
    }

    render() {
        return (
            <div>
                <FileUploader setTrainingFileAttributes={this.setTrainingFileAttributes} />
                <Instances trainingFile={this.state.trainingFile} sessionId={this.props.sessionId}
                    removeAttributes={this.removeAttributeFromTrainingFile} />
            </div>
        )
    }
}