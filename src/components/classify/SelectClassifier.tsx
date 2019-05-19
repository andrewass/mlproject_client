import React from 'react'
import axios from 'axios'
import Select from 'react-select'


export default class SelectClassifier extends React.Component<any, any>{

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
                <h3>Classifier Component</h3>
                <Select onChange={this.handleChange}
                    value={this.props.classAttribute}
                    options={this.state.classifierList} />
            </div>
        )
    }
}