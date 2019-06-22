import * as React from 'react'

export default class Attribute extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.handleAttributeSelection = this.handleAttributeSelection.bind(this)
    }

    handleAttributeSelection(event: any) {
        this.props.setSelectedAttribute(this.props.attribute)
    }

    render() {
        return (
            <div>
                <tr onClick={this.handleAttributeSelection}>
                    <td><input className="checkbox" id={this.props.attribute.attributeName} type="checkbox"
                        onChange={this.props.setMarkedAttribute} /></td>
                    <td>{this.props.attribute.attributeName}</td>
                </tr>
            </div>
        )
    }
}