import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render(){
        let wordDisplay
        if(this.state.isLoggedIn){
            wordDisplay = 'In'
        } else {
            wordDisplay = 'Out'
        }
        return (
            <div>
                <h1>Your currently Logged {wordDisplay}</h1>
            </div>
        )
    }
}