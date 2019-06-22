import * as React from 'react'

export default class AttributeInformation extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
    }

    render() {
        if (this.props.selectedAttribute) {
            return (
                <div>
                    <textarea readOnly value={this.props.selectedAttribute.toString()} rows={20} cols={70} />
                </div>
            )
        }
        else{
            return <div></div>
        }   
    }

}