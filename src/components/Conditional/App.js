import React from 'react'
import Conditional from './components/conditional'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }

    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2500);
    }

    componentWillUnmount(){
        //teardown the component IMPORTANT
        //[ E.g ]remove event listeners etc
    }

    
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <Conditional isLoading={this.state.isLoading} />
                </div>
            </div>
        )
    }
}

export default App