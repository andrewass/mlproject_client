import * as React from 'react'
import LeftMenu from '../general/LeftMenu';
import { Link } from 'react-router-dom';

export default class Edit extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div>
                <LeftMenu />
                <h3>Edit Page</h3>
                <Link to="/preprocess"><button>Go back</button></Link>
            </div>
        )
    }
}