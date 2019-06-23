import * as React from 'react'

export default class Instance extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            attributeNameList : this.props.instanceData.attributeNameList,
            attributeValueList : this.props.instanceData.attributeValueList
        }
    }

    getAttributeValues(){
        let tester = 1 + 1 
    }

    render() {
        return (
            this.state.attributeValueList.map((value : string) => value+"\n")
        )
    }
}