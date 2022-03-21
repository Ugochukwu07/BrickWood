import React, {Component} from 'react'

export default class SelectInput extends Component{
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