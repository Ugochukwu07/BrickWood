import React, {Component} from "react";
import {Header, Footer} from './personal/HeaderFooter'

export default class Conditional extends Component{

    /* render(){
        if(this.props.isLoading === true)
            return (
                <div className="col-md-6 mx-auto bg-white rounded">
                    <h1>Loading...</h1>
                </div>
            )
        else
            return (
                <div className="col-md-6 mx-auto bg-white rounded">
                    <h1>Loaded, Thanks</h1>
                </div>
            )
    } */

    render(){
        return (
            <div className="col-md-6 mx-auto bg-white rounded">
                <Header />
                
                {this.props.isLoading ? <h1>Loading...</h1> : <h1>Loaded, Thanks</h1>}

                <Footer />
            </div>
        )
    }

}