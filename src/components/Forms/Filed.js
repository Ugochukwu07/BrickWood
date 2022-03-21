import React, {Component} from 'react'

class FliudInput extends Component{
    render(){
        return(
            <div className="col-md-12 my-2">
                <label htmlFor={this.props.attr.name} className="form-label">{this.props.attr.placeholder}</label>
                <input
                    name={this.props.attr.name}
                    value={this.props.attr.value}
                    onChange={this.props.function.handleChange}
                    className="form-control"
                    type={this.props.attr.type === null ? 'text' : this.props.attr.type}
                    placeholder={`*${this.props.attr.placeholder}`}
                />
            </div>
        )
    }
}

class RadioInput extends Component{
    render(){
        let buttons = this.props.attr.buttons.map((button) => 
                        <div>
                            <label className="form-check-label">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name={this.props.attr.name} 
                                    id={button.id ? button.id : button.name} 
                                    value={button.value}
                                    checked={this.props.attr.value === button.value}
                                    onChange={this.props.function.handleChange}
                                />
                                {button.placeholder}
                            </label>
                        </div>
                        
                        )
        return(
            <div className="col-md-12 my-2">
                <div className="form-check form-check-inline">
                    {buttons}
                </div>
            </div>
        )
    }
}

class SelectInput extends Component{
    render(){
        let options
        options = this.props.attr.options.map(option => <option value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>)
        return(
            <div className="col-md-12 mb-2">
                <label className="form-label">{this.props.attr.label}:</label>
                <select className="form-control" name={this.props.attr.name} value={this.props.attr.value} onChange={this.props.function.handleChange}>
                    <option value="">Choose</option>
                    {options}
                </select>
            </div>
        )
    }
}

class CheckboxInput extends Component{
    render(){
        return(
            <div className="col-md-12 mb-2">
                <div className="form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        name={this.props.attr.name} 
                        id={this.props.attr.id && this.props.attr.name}
                        checked={this.props.attr.checked}
                        onChange={this.props.function.handleChange}
                    />
                    <label className="form-check-label" htmlFor={this.props.attr.name}>
                        {this.props.attr.placeholder}
                    </label>
                </div>
            </div>
        )
    }
}

export {FliudInput, RadioInput, SelectInput, CheckboxInput}