import React from 'react'
import axios from 'axios'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export default class Classifier extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            selectedClassifier: "",
            classifierList: []
        }
    }

    componentDidMount() {
        this.fillClassifierList()
    }

    handleChange = (selectedOption: any) => {
        this.setState({
            selectedClassifier : selectedOption
        })
    }

    fillClassifierList() {
        const url = "http://localhost:8080/get-classifiers"
        axios.get(url)
            .then((response: any) => {
                this.setState({
                    classifierList: response.data.classifiers
                })
            })
            .catch((error: any) => { console.log(error) })
    }

    render() {
        return (
            <div>
                <h1>Classifier Component</h1>
                <Select onChange={this.handleChange}
                    value={this.state.selectedClassifier}
                    options={this.state.classifierList} />
            </div>
        )
    }
}