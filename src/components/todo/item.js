import React, { Component } from 'react'

class Item extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    render(){
        const styles = {
            textDecoration: 'line-through',
            fontStyle: 'italic',
            color: '#cdcdcd'
        }
        return(
            <div className='col-12'>
                <div className="todo-item">
                    <input name={this.props.item.id} onChange={() => this.props.handleClick(this.props.item.id)} checked={this.props.item.completed} type="checkbox" />
                    <p style={this.props.item.completed ? styles : null }>{this.props.item.item}</p>
                </div>
            </div>
        )
    }
}

export default Item