import React from 'react'
import ReactDOM from 'react-dom'
import DivWithMessage from './div-with-message'
import Latitude from './latitude'


function App() {

    return (
        <div>
            <DivWithMessage message="hello, world."/>
            <Latitude/>
        </div>

    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))