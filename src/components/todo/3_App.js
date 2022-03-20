import React from 'react'
import Item from './components/todo/item'
import todoData from './components/todo/data'

class Todo extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todoData
        }

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(id){
        this.setState(prevState => {
            const updatedTodo = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodo
            }
        })
    }
    render(){
        const todoComponents = this.state.todos.map(item => <Item key={item.id} item={item} handleClick={this.handleClick} /> )
        return (
            <div className='col-12 col-md-5 mx-auto'>
                <h1 className='text-center h1 text-white p-2 rounded bg-primary'>Todo App</h1>
                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body">
                    {todoComponents}
                  </div>
                </div>
                
            </div>
        )
    }
}

export default Todo