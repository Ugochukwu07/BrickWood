import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "Ugochukwu",
            age: 22
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>I am {this.state.age} years old</h3>
            </div>
        )
    }
}