/* Unfinished */

import React, {Component} from "react";
import Input from "./components/Forms/Input"
import InputData from "./components/Forms/fileds"

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            email: "",
            gender: "",
            inputData: InputData,
            checked: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.renderInput = this.renderInput.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        //type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value}) 
        switch (type) {
            case 'checkbox':
                this.setState({[name]: checked})
                break;
            case 'radio':
                this.setState({checked: value, [name]: value})
                break;
            default:
                console.log(value)
                this.setState({[name]: value})
                break;
        }
    }

    renderInput(){
        const InputComponents = this.state.inputData.map(filed => <Input key={filed.id} checked={this.state.checked} data={filed} handleChange={this.handleChange} />)
        return InputComponents
    }

    render(){
        return(
            <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                            <div className='text-center'>
                                <h1>This my Form</h1>
                            </div>
                    <form className="row g-3 needs-validation">
                        <div className="row">
                            {this.renderInput()}
                            <span className="badge bg-primary">{this.state.gender}</span>
                            
                        </div>
                    </form>
                  </div>
                </div>
            </div>
        )
    }
}