import React from 'react'
import Item from './item'

function Todo() {
    return (
        <div className='todo-app'>
            <h1>Todo App</h1>
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default Todo