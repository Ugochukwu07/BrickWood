import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            bio: "",
            terms: true,
            gender: "",
            State: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            /* [event.target.name]: event.target.value */
            [name]: value
        }) ;
    }

    handleSubmit(event){
        console.log(event.target)
    }

    render(){
        return (
            <div className='row'>
                <div className='col-12 col-md-7 mx-auto'>
                    <div className="card">
                        <div className="card-body">
                            <div className='text-center'>
                                <h1>This my Form</h1>
                            </div>
                            <form className="row g-3 needs-validation" onSubmit={this.handleSubmit}>
                              <div className="col-md-12">
                                <label for="validationCustom01" className="form-label">First name</label>
                                <input type="text" name='firstName' className="form-control" onChange={this.handleChange} id="validationCustom01" value={this.state.firstName} required />
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              </div>
                              <div className="col-md-12">
                                <label for="validationCustom02" className="form-label">Last name</label>
                                <input type="text" name="lastName" className="form-control" onChange={this.handleChange} id="validationCustom02" value={this.state.lastName} required />
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              </div>
                              <div className="col-md-6">
                                <label for="validationCustomUsername" className="form-label">Username</label>
                                <div className="input-group">
                                  <span className="input-group-text" id="inputGroupPrepend">@</span>
                                  <input 
                                  type="text" 
                                  className="form-control" 
                                  id="validationCustomUsername" 
                                  aria-describedby="inputGroupPrepend" 
                                  required 
                                  />
                                  <div className="invalid-feedback">
                                    Please choose a username.
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <label for="validationCustom03" className="form-label">City</label>
                                <input type="text" className="form-control" id="validationCustom03" required />
                                <div className="invalid-feedback">
                                  Please provide a valid city.
                                </div>
                              </div>
                              <div className="col-md-12">
                                <label for="validationCustom04" className="form-label">State</label>
                                <select
                                className="form-select" 
                                value={this.state.State} 
                                id="validationCustom04" 
                                required
                                name='State'
                                onChange={this.handleChange}
                                >
                                  <option selected disabled value="">Choose...</option>
                                  <option value="ANA">ANA</option>
                                  <option value="ABJ">ABJ</option>
                                  <option value="BR">BR</option>
                                </select>
                                {this.state.State === "" ? "" : <p className="badge my-2 p-1 bg-success">You seleted {this.state.State}</p>}
                              </div>
                              <div className='col-md-12'>
                                <div className='d-flex'>
                                    <div class="form-check me-3">
                                        <label class="form-check-label">
                                        <input 
                                            type="radio" 
                                            class="form-check-input" 
                                            name="gender" 
                                            id="gender" 
                                            checked={this.state.gender === "male"}
                                            value="male"
                                            onChange={this.handleChange}
                                        />
                                        Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input 
                                            type="radio"
                                            value="female" 
                                            class="form-check-input" 
                                            name="gender" 
                                            id="gender"
                                            checked={this.state.gender === "female"}
                                            onChange={this.handleChange}
                                        />
                                        Female
                                        </label>
                                    </div>
                                </div>
                                {this.state.gender === "" ? "" : <p className={'badge my-2 bg-' + (this.state.gender === 'male' ? 'success' : 'info')}>You seleted {this.state.gender}</p>}
                              </div>
                              <div className="col-md-12">
                                  <div className="mb-3">
                                    <label for="bio" className="form-label"></label>
                                    <textarea
                                        className="form-control"
                                        onChange={this.handleChange} 
                                        value={this.state.bio} 
                                        name="bio" 
                                        id="bio" 
                                        rows="3" 
                                    />
                                  </div>
                              </div>

                              <div className="col-12">
                                <div className="form-check">
                                  <input 
                                    className="form-check-input"
                                    type="checkbox" 
                                    checked={this.state.terms}
                                    id="invalidCheck"
                                    required
                                    name='terms'
                                    onChange={this.handleChange}
                                  />
                                  <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                  </label>
                                  <div className="invalid-feedback">
                                    You must agree before submitting.
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                              </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default App