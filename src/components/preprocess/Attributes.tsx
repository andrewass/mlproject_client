import * as React from 'react'
import axios from 'axios'
import Attribute from './Attribute';
import AttributeModel from '../../model/AttributeModel';
import AttributeInformation from './AttributeInformation';


export default class Attributes extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            checkedItems: new Set(),
            selectedAttribute : null
        }
        this.setMarkedAttribute = this.setMarkedAttribute.bind(this)
        this.sendAttributesToUpdate = this.sendAttributesToUpdate.bind(this)
        this.setSelectedAttribute = this.setSelectedAttribute.bind(this)
    }

    setMarkedAttribute(e: any) {
        if (this.state.checkedItems.has(e.target.id)) {
            this.state.checkedItems.delete(e.target.id)
        } else {
            this.state.checkedItems.add(e.target.id)
        }
    }

    setSelectedAttribute(attribute: AttributeModel) {
        this.setState({
            selectedAttribute: attribute
        })
    }

    sendAttributesToUpdate() {
        const url = "http://localhost:8080/remove-attribute"
        const request = {
            sessionId: this.props.sessionId,
            attributeNameList: Array.from(this.state.checkedItems)
        }
        this.state.checkedItems.clear()
        this.unCheck()
        axios.post(url, request)
            .then((response) => {
                this.props.setTrainingFileAttributes(response.data)
            })
            .catch((error) => { alert(error) })
    }

    generateTable(row: any) {
        return (
            <div>
                <table cellPadding="15">
                    <tbody>
                        <tr>
                            <td>Attributes</td>
                        </tr>
                        {row.map((row: any) =>
                            <Attribute attribute={row} setMarkedAttribute={this.setMarkedAttribute} 
                            setSelectedAttribute={this.setSelectedAttribute} />)}
                    </tbody>
                </table>
                <AttributeInformation selectedAttribute={this.state.selectedAttribute} />
            </div>
        )
    }

    unCheck() {
        var checkedBoxes: any = document.getElementsByClassName("checkbox");
        for (let item of checkedBoxes) {
            item.checked = false;
        }
    }

    render() {
        if (this.props.trainingFile.attributeList) {
            return (
                <div>
                    {this.generateTable(this.props.trainingFile.attributeList)}
                    <button onClick={this.sendAttributesToUpdate}>Remove</button>
                </div >
            )
        }
        else {
            return null
        }
    }
}