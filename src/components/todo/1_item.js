import React, { Component } from 'react'

/* function Item(props) {
    return(
        <div className="todo-item">
            <input name={props.item.id} checked={props.item.completed} type="checkbox" />
            <p style={{ textDecoration: props.item.completed && 'line-through' }}>{props.item.item}</p>
        </div>
    )
} */

class Item extends Component{
    render(){
        return(
            <div className="todo-item">
                <input name={this.props.item.id} checked={this.props.item.isChecked} type="checkbox" />
                <p style={{ textDecoration: this.props.item.completed && 'line-through' }}>{this.props.item.item}</p>
            </div>
        )
    }
}

export default Item