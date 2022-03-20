import React, {Component} from 'react'

class App extends Component{
    changeInnerHtml(){
        return document.getElementById('btn').innerHTML = "Hello I am Cliecked"
    }
    render(){
        return (
            <div className='container'>
                <img onMouseOver={this.changeInnerHtml} src='https://www.fillmurray.com/200/100' alt='Lorem 12' />
                <br />
                <br />
                <button id='btn' onClick={this.changeInnerHtml}>Click Me</button>
            </div>
        )
    }
}

export default App