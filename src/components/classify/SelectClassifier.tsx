import React from 'react'
import axios from 'axios'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


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
            </div>
        )
    }
}