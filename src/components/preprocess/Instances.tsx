import * as React from "react"
import axios from "axios"


export default class Instances extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            checkedItems: new Set()
        }
        this.setSelectedAttribute = this.setSelectedAttribute.bind(this)
        this.sendAttributesToRemove = this.sendAttributesToRemove.bind(this)
    }

    setSelectedAttribute(e: any) {
        if (this.state.checkedItems.has(e.target.id)) {
            this.state.checkedItems.delete(e.target.id)
        } else {
            this.state.checkedItems.add(e.target.id)
        }
    }

    sendAttributesToRemove() {
        const url = "http://localhost:8080/remove-attribute"

        axios.post(url, {
            sessionId: this.props.sessionId,
            attributeNameList: Array.from(this.state.checkedItems)
        })
            .then((response) => {
                this.props.removeAttributes(response.data.attributes)
            })
            .catch((error) => { alert(error) })
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
                        {row.map((row: any) => <tr>
                            <td><input id={row.attributeName} type="checkbox" onChange={this.setSelectedAttribute}></input></td>
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

    render() {
        if (!this.props.trainingFile.attributeList) {
            return (<div></div>)
        }
        else {
            return (
                <div>
                    {this.generateTable(this.props.trainingFile.attributeList)}
                    <button onClick={this.sendAttributesToRemove}>Remove</button>
                </div >
            )
        }
    }


}

