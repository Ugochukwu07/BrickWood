import React from "react";

function Joke(props) {
    return (
        <div className="todo-item">
            <h3 style={{ display: (props.question) ? 'block' : 'none' }}>Question : {props.question}</h3>
            <h3 style={{ display: (props.answer) ? 'block' : 'none' }}>Answer : {props.answer}</h3>
        </div>
    )
}

export default Joke