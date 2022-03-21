import React, {Component} from 'react'

export default class FliudInput extends Component{
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