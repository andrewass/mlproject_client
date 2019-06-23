import * as React from 'react'
import { Link } from 'react-router-dom';
import Instance from './Instance';

export default class Edit extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
    }

    getAttributeNames(firstInstance: any) {
        return firstInstance.attributeNameList.map((attributeName: string) => attributeName + "\t")
    }

    render() {
        return (
            <div>
                <h3>Edit Page</h3>
                <div>
                    <table cellPadding="15">
                        <tbody>
                            {this.getAttributeNames(this.props.instances[0])}
                            {this.props.instances.map((instance: any) =>
                                <tr> <Instance instanceData={instance} /> </tr>)}
                        </tbody>
                    </table>
                </div>
                <Link to="/preprocess"><button>Go back</button></Link>
            </div>
        )
    }
}