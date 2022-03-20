import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

//render takes 2 argus: What do i want to render, Where i want to render it
ReactDOM.render(
    <div className='container'>
        <div className='row'>
            <App />
        </div>
    </div>,
    document.getElementById('root')
)