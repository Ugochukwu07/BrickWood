import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false,
            btn: 'btn-success'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        let text = document.getElementById('myText')
        let buttonNow = document.getElementById('myBtn')
        if(!this.state.isLoggedIn){
            text.innerHTML = "Your Logged In!!"
            buttonNow.innerHTML = "Log Out"
            this.setState({
                isLoggedIn: true,
                btn: 'btn-danger'
            })
        }else{
            buttonNow.innerHTML = "Login"
            text.innerHTML = "Your Have Been Logged Out!!"
            this.setState(
                {
                isLoggedIn: false,
                btn: 'btn-success'
                }
            )
        }
    }

    componentWillUnmount(){
        //teardown the component IMPORTANT
        //[ E.g ]remove event listeners etc
    }

    
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-5 mx-auto bg-white p-2'>
                        <h2 id="myText">Your Not Logged In!</h2>
                        <button id="myBtn" className={'btn ' + this.state.btn} onClick={this.handleClick}>Login Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App