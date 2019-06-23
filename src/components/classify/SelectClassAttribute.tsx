import React from 'react'
import axios from 'axios'
import Select from 'react-select'


export default class SelectClassAttribute extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            attributeList: []
        }
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        let attributes = this.props.trainingFile.attributeList
        var newElement = [] as any[]
        
        for (var i in attributes) {
            newElement.push({ value:attributes[i].attributeName, label:attributes[i].attributeName})
        }
        this.setState({attributeList : newElement})
    }


    onChange(selectedOption : any) {
        this.props.setClassAttribute(selectedOption.value)
    }

    render() {
        return (
            <div>
                <h3>Select Class Attribute</h3>
                <Select onChange={this.onChange}
                    options={this.state.attributeList} />
            </div>
        )
    }
}