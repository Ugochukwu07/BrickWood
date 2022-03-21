import React, {Components} from "react";

export default class RadioInput extends Components{
    render(){
        let buttons
        buttons = this.props.attr.buttons.map(
            button => {<label class="form-check-label">
                        <input 
                            class="form-check-input" 
                            type="radio" name={button.name} 
                            id={button.id ? button.id : button.name} 
                            value={button.value}
                        /> 
                        {button.placeholder}
                        </label>
            })
        return(
            <div className="col-md-12 my-2">
                <div class="form-check form-check-inline">
                    {buttons}
                </div>
            </div>
        )
    }
}