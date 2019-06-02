import * as React from 'react'
import axios from 'axios'


export default class Attributes extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            checkedItems: new Set()
        }
        this.setMarkedAttribute = this.setMarkedAttribute.bind(this)
        this.sendAttributesToUpdate = this.sendAttributesToUpdate.bind(this)
        this.handleTableRowClick = this.handleTableRowClick.bind(this)
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

    handleTableRowClick(event: any) {
        this.props.setSelectedAttribute(event.currentTarget.id)
    }

    generateTable(row: any) {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Select</td>
                            <td>Attribute Name</td>
                            <td>Distinct Values</td>
                            <td>Total Values</td>
                            <td>Missing Values</td>
                        </tr>
                        {row.map((row: any) => <tr onClick={this.handleTableRowClick}>
                            <td><input className="checkbox" id={row.attributeName} type="checkbox" onChange={this.setMarkedAttribute} /></td>
                            <td>{row.attributeName}</td>
                            <td>{row.attributeStats.distinctCount}</td>
                            <td>{row.attributeStats.totalCount}</td>
                            <td>{row.attributeStats.missingCount}</td>
                        </tr>)}
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

