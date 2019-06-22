import * as React from 'react'
import LeftMenu from '../general/LeftMenu';

export default class AttributeInformation extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div>
                <LeftMenu />
                <h3>Edit Page</h3>
            </div>
        )
    }
}