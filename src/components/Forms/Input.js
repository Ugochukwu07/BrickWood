import React, {Component} from "react";

export default class Input extends Component{

    render(){
        let classNames = 'form-control'
        if(this.props.data.type === 'radio'){
            classNames = 'form-check-input'
        }
        if(this.props.data.type === 'radio'){
            return(
                <div className="col-md-12">
                    <label for={this.props.data.name} className="form-label">{this.props.data.placeholder}</label>
                    <input 
                        name={this.props.data.name}
                        type={(this.props.data.type === null) ? 'text' : this.props.data.type} 
                        className={classNames} 
                        value={this.props.data.value} 
                        onChange={this.props.handleChange} 
                        placeholder={`*${this.props.data.placeholder}`}
                        checked={this.props.data.type === 'radio' && (this.props.data.value === this.props.checked)}
                        required
                    />
                </div>
            )
        }
        return(
            <div className="col-md-12">
                <label for={this.props.data.name} className="form-label">{this.props.data.placeholder}</label>
                <input 
                    name={this.props.data.name}
                    type={this.props.data.type === null ? 'text' : this.props.data.type} 
                    className={classNames} 
                    value={this.props.data.value} 
                    onChange={this.props.handleChange} 
                    placeholder={`*${this.props.data.placeholder}`}
                    required
                />
            </div>
        )
    }
}