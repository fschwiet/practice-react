import React from 'react'
import ReactDOM from 'react-dom'
import DivWithMessage from './div-with-message'


function App() {
    return (
        <div>
            <DivWithMessage message="hello, world."/>
        </div>

    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))