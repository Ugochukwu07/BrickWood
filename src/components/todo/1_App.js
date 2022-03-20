import React from 'react'
import Item from './components/todo/item'
import todoData from './components/todo/data'

/* function Todo() {
    const todoComponents = todoData.map(item => <Item key={item.id} item={item} />)
    return (
        <div className='todo-app'>
            <h1>Todo App</h1>
            {todoComponents}
        </div>
    )
} */

class Todo extends React.Component{
    render(){
        const todoComponents = todoData.map(item => <Item key={item.id} item={item} />)
        return (
            <div className='todo-app'>
                <h1>Todo App</h1>
                {todoComponents}
            </div>
        )
    }
}

export default Todo