import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }

        this.byOne = this.byOne.bind(this)
        this.byTwo = this.byTwo.bind(this)
        this.byTwenty = this.byTwenty.bind(this)
        this.reset = this.reset.bind(this)
    }

    byOne(){
        /* let count = this.state.count + 1
        this.setState({count: count}) */

        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    byTwo(){
        this.setState(prevState => {
            return {
                count: prevState.count + 2
            }
        })
    }

    byTwenty(){
        this.setState(prevState => {
            return {
                count: prevState.count + 20
            }
        })
    }

    reset(){
        this.setState({count:0})
    }

    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-8 col-md-5 mx-auto'>
                        <div className='card text-center card-body bg-white'>
                            <h1 className='title my-5'>{this.state.count}</h1>
                            <div class="btn-group my-2">
                                <button className='btn btn-success' onClick={this.byOne}>+1</button>
                                <button className='btn btn-info' onClick={this.byTwo}>+2</button>
                                <button className='btn btn-primary' onClick={this.byTwenty}>+20</button>
                            </div>
                            <button className='btn btn-secondary' onClick={this.reset}>Rest</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App