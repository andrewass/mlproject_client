import * as React from 'react'
import axios from 'axios'
import Attribute from './Attribute';


export default class Attributes extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            checkedItems: new Set()
        }
        this.setMarkedAttribute = this.setMarkedAttribute.bind(this)
        this.sendAttributesToUpdate = this.sendAttributesToUpdate.bind(this)
    }

    setMarkedAttribute(e: any) {
        if (this.state.checkedItems.has(e.target.id)) {
            this.state.checkedItems.delete(e.target.id)
        } else {
            this.state.checkedItems.add(e.target.id)
        }
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
                            setSelectedAttribute={this.props.setSelectedAttribute} />)}
                    </tbody>
                </table>
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