import React from "react";
import Joke from './components/Jokes/Joke'
import jokeData from "./components/Jokes/jokesData";

function App(){
    const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)
    return (
        <div className="todo-app">
            {jokeComponents}
        </div>
    )
}

export default App