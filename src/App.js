import React from "react";

export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            furit: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.firstName} and ${this.state.furit}`);
        event.preventDefault();
      }

    render(){
        return(
            <div className="col-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">My Form Jame</h5>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-12 my-2">
                                <label forHTML="firstName" className="form-label">First name</label>
                                <input
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    type="text"
                                    placeholder="*Firstname"
                                />
                            </div>
                            <div className="col-md-12 mb-2">
                                <label className="form-label">Pick your favorite flavor:</label>
                                <select className="form-control" name="furit" value={this.state.furit} onChange={this.handleChange}>
                                    <option value="">Choose</option>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </div>
                        </div>
                        <input className="btn btn-primary mt-2" type="submit" value="Submit" />
                    </form>
                  </div>
                </div>
            </div>
        )
    }
}