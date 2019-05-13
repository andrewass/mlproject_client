import * as React from 'react'
import Attribute from '../../model/Attribute'

export default class Instances extends React.Component<any, any>{

    render() {
        if (!this.props.trainingFile.attributeList) {
            return (<div></div>)
        }
        else {
            return (
                <div>
                    {this.generateTable(this.props.trainingFile.attributeList)}
                </div >
            )
        }
    }

    generateTable(row: any) {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>Attribute Name</td>
                        <td>Distinct Values</td>
                        <td>Total Values</td>
                        <td>Missing Values</td>
                    </tr>
                    {row.map((row: any) => <tr>
                        <td>{row.attributeName}</td>
                        <td>{row.attributeStats.distinctCount}</td>
                        <td>{row.attributeStats.totalCount}</td>
                        <td>{row.attributeStats.missingCount}</td>
                    </tr>)}
                </tbody>
            </table>
        )
    }
}

