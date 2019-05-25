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
        this.handleChange = this.handleChange.bind(this)
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
                this.setValueAndLabelOnClassifiers(response.data.classifiers)
            })
            .catch((error: any) => { console.log(error) })
    }   

    setValueAndLabelOnClassifiers(classifiers : any){
        var tempList = [] as any[]
        for (var i in classifiers) {
            tempList.push({ 
                value : classifiers[i], 
                label : classifiers[i]
            })
        }
        this.setState({classifierList : tempList})
    }

   
    render() {
        return (
            <div>
                <h3>Classifier Component</h3>
                <Select onChange={this.handleChange}
                    options={this.state.classifierList} />
            </div>
        )
    }
}