import React from "react";
import {FliudInput, SelectInput, RadioInput, CheckboxInput} from "./components/Forms/Filed"

export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "male",
            furit: "",
            terms: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit(event) {
        //alert(`A name was submitted: ${this.state.firstName} and ${this.state.furit}`);
        console.log(this.state)
        event.preventDefault();
      }

    render(){
        return(
            <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">My Form Jame</h5>
                    <hr />
                    <form id="myForm" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <FliudInput  key="1"
                                attr={{ 
                                    name: "firstName", 
                                    value: this.state.firstName, 
                                    placeholder: "First Name",
                                    type: "text"
                                }} 
                                function={{ 
                                    handleChange: this.handleChange 
                                }} 
                            />
                            <FliudInput  key="2"
                                attr={{ 
                                    name: "lastName", 
                                    value: this.state.lastName, 
                                    placeholder: "Last Name",
                                    type: "text"
                                }} 
                                function={{ 
                                    handleChange: this.handleChange 
                                }} 
                            />
                            <FliudInput  key="3"
                                attr={{ 
                                    name: "age", 
                                    value: this.state.age, 
                                    placeholder: "Your Age",
                                    type: "number"
                                }} 
                                function={{ 
                                    handleChange: this.handleChange 
                                }} 
                            />
                            <SelectInput  key="4"
                                attr={{ 
                                    name: "furit", 
                                    label: "Pick your favorite flavor" , 
                                    options: ["grapefruit", "lime", "cocnunt", "mango"]
                                }} 
                                function={{ 
                                    handleChange: this.handleChange
                                }}
                            />
                            <SelectInput  key="5"
                                attr={{ 
                                    name: "city", 
                                    label: "Pick Your City" , 
                                    options: ["Oko", "Ekwulobia"]
                                }} 
                                function={{ 
                                    handleChange: this.handleChange
                                }}
                            />
                            <RadioInput key="6"
                                attr={{
                                    name: "gender",
                                    value: this.state.gender,
                                    buttons: [
                                        {
                                            value: "female",
                                            placeholder: "Female"
                                        },
                                        {
                                            value: "male",
                                            placeholder: "Male"
                                        }
                                    ]
                                 }} 
                                 function={{ 
                                    handleChange: this.handleChange
                                 }}
                            />
                            <CheckboxInput
                                attr={{ 
                                    placeholder: "Agree to our terms and conditions",
                                    name: "terms",
                                    checked: this.state.checked,
                                    id: "terms"
                                 }}
                                function={{ 
                                    handleChange: this.handleChange
                                 }}
                            />
                        </div>
                        <input className="btn btn-primary mt-2" type="submit" value="Submit" />
                    </form>
                  </div>
                </div>
            </div>
        )
    }
}