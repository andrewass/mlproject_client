import * as React from 'react'
import TrainingFile from '../model/TrainingFile'
import Attribute  from '../model/Attribute'
import FileUploader from './FileUploader'



export default class TrainingField extends React.Component<any, any>{

    constructor(props :any){
        super(props)
        this.state = {
            trainingFile : TrainingFile,
            hasUploadedTrainingFile : false,
        }
        this.setTrainingFileAttributes = this.setTrainingFileAttributes.bind(this)
    }

    setTrainingFileAttributes(data : any){
        let createdTrainingFile = new TrainingFile("Placeholde title")
        for(var i in data.attributes){
            let attribute = new Attribute(data.attributes[i].attributeName)
            createdTrainingFile.addAttribute(attribute)
        }
        this.setState({
            trainingFile : createdTrainingFile
        })
    }

    render(){
        return(
            <FileUploader setTrainingFileAttributes={this.setTrainingFileAttributes}/>
        )
    }

}