import * as React from 'react'
import { Link } from 'react-router-dom'
import Instance from './Instance'
import "../../stylesheets/styles.css"
import { throws } from 'assert';

export default class Edit extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            instances : this.props.instances    
        }
    }

    render() {
        return (
            <div>
                <h3>Edit Page</h3>
                <Link to="/preprocess"><button>Go back</button></Link>
            </div>
        )
    }
}