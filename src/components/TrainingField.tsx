import * as React from 'react'
import TrainingFile from '../model/TrainingFile'
import Attribute from '../model/Attribute'
import FileUploader from './FileUploader'
import Instances from './Instances';
import Classifier from './Classifier';


export default class TrainingField extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            trainingFile: TrainingFile,
            hasUploadedTrainingFile: false,
        }
        this.setTrainingFileAttributes = this.setTrainingFileAttributes.bind(this)
    }

    setTrainingFileAttributes(data: any) {
        let createdTrainingFile = new TrainingFile("Placeholde title")
        for (var i in data.attributes) {
            let attribute = new Attribute(data.attributes[i].attributeName, data.attributes[i].attributeStats)
            createdTrainingFile.addAttribute(attribute)
        }
        this.setState({
            trainingFile: createdTrainingFile,
            hasUploadedTrainingFile: true
        })
    }

    render() {
        if (this.state.hasUploadedTrainingFile) {
            return <div>
                <Instances trainingFile={this.state.trainingFile} />
                <Classifier />
            </div>
        } else {
            return <FileUploader setTrainingFileAttributes={this.setTrainingFileAttributes} />
        }
    }

}