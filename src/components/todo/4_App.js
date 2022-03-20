import React from 'react'
import Item from './components/todo/item'
import todoData from './components/todo/data'
import Alert from './components/alert'

class Todo extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todoData
        }

        this.handleClick = this.handleClick.bind(this)
    }

    //Life cycle methods
    componentDidMount(){
        //Get the data i need to correctly display
    }

    //componentWillReceiveProps(nextProps){
    UNSAFE_componentWillReceiveProps(nextProps){
        //DEPRCiATED
        if(nextProps.whateveter !== this.props.whateveter){
            //do something important here
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        //return true if you want to update
        //return fasle if you don't want to update

        return true
    }

    componentWillUnmount(){
        //teardown the component IMPORTANT
        //[ E.g ]remove event listeners etc
    }

    checkForCompleteTodo(todoData){
        let counter = 0
        todoData.forEach(item => {
            if(item.completed){
                counter++
            }
        })

        //console.log(counter, todoData.length)

        return (todoData.length === counter) ? true : false
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
                todos: updatedTodo,
                isCompelet: this.checkForCompleteTodo(this.state.todos)
            }
        })
    }
    render(){
        const todoComponents = this.state.todos.map(item => <Item key={item.id} item={item} handleClick={this.handleClick} /> )
        return (
            <div className='row'>
                <div className='col-12 col-md-5 mx-auto'>
                    <h1 className='text-center h1 text-white p-2 rounded bg-primary'>Todo App</h1>
                    <div className="card" /* style={{ width: '18rem' }} */>
                        <div className="card-body">
                            { this.state.isCompelet && <Alert /> }
                            {todoComponents}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Todo