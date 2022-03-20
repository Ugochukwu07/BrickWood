import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render(){
        return (
            <div>
                <h1>Is React Good to learn? {this.state.answer}</h1>
            </div>
        )
    }
}