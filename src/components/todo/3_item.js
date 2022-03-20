import React, { Component } from 'react'

class Item extends Component{
    render(){
        return(
            <div className="todo-item">
                <input name={this.props.item.id} onChange={() => this.props.handleClick(this.props.item.id)} checked={this.props.item.completed} type="checkbox" />
                <p style={{ textDecoration: this.props.item.completed && 'line-through' }}>{this.props.item.item}</p>
            </div>
        )
    }
}

export default Item