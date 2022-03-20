import React, {Component} from 'react'

export default class Alert extends Component{
    render(){
        return(
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                <strong>Hurray!</strong> You have completed your tasks.
            </div>
        )
    }
}