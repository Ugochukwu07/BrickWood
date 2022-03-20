import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            charater: {}
        }
    }

    //Life cycle methods
    componentDidMount(){
        this.setState({
                loading: !this.state.loading,
                charater: this.state.charater
        })
        fetch('https://swapi.dev/api/film/3')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    charater: data
                })
            })
    }

    componentWillUnmount(){
        //teardown the component IMPORTANT
        //[ E.g remove event listeners etc
    }

    
    render(){
        return (
            <div className='row'>
                <div className='col-12 col-md-5 mx-auto'>
                    <div className="card">
                        <div className="card-body">
                            {this.state.loading === true ? 'Loading...' : <h1>{this.state.charater.name}</h1>}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default App