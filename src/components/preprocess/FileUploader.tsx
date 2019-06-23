import * as React from 'react'
import axios from "axios"

export default class FileUploader extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.uploadFile = this.uploadFile.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    handleSubmit() { }

    onChange(event: any) {
        let file = event.target.files[0]
        let fileReader = new FileReader()
        fileReader.readAsText(file)
        fileReader.onload = (e: any) => {
            const url = "http://localhost:8080/upload-file"
            const formData = new FormData();
            formData.append("file", file)
            formData.append("sessionId", "0")
            formData.append("isTraining", "true")
            this.uploadFile(url, formData)
        }
    }

    uploadFile(url: any, formData: any) {
        axios.post(url, formData)
            .then((response) => { 
                this.props.setTrainingFileAttributes(response.data)
                this.props.setInstances(response.data.instances)
            })
            .catch((error) => { console.log(error) })
    }

    render() {
        return (
            <div>
                <h2>FILE UPLOADER COMPONENT</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="file" onChange={this.onChange} /><br />
                </form>
            </div>
        )
    }
}