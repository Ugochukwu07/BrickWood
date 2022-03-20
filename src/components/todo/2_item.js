import React, { Component } from 'react'

class Item extends Component{
    render(){
        return(
            <div className="todo-item">
                <input name={this.props.item.id} onChange={() => console.log('Changed')} checked={this.props.item.isChecked} type="checkbox" />
                <p style={{ textDecoration: this.props.item.completed && 'line-through' }}>{this.props.item.item}</p>
            </div>
        )
    }
}

export default Item