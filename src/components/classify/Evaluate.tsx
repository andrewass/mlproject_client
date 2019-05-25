import React from 'react'
import axios from 'axios'

export default class Evaluate extends React.Component<any, any>{

    constructor(props : any){
        super(props)
        this.state = {
            evaluationResult : "Run evaluation to see result..."
        }
        this.runEvaluation = this.runEvaluation.bind(this)
    }

    runEvaluation(){
        const url = "http://localhost:8080/evaluate"
        const request = {
            sessionId: this.props.sessionId,
            classifierName : "Naive Bayes",
            evaluationName : "Cross Validation"
        }
        axios.post(url, request)
            .then((response) => {
                alert("pre set state  :"+this.state.evaluationResult)
                this.setState({
                    evaluationResult : response.data.evaluationSummary
                })
                alert("post set state  :"+this.state.evaluationResult)
            })
            .catch((error) => { alert(error) })
    }


    render() {
        return (
            <div>
                <h3>Evaluate</h3>
                <textarea readOnly value={this.state.evaluationResult} />
            
                <button onClick={this.runEvaluation}>Run Evaluator</button>
            </div>
        )
    }
}