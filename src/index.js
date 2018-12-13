import React from 'react'
import ReactDOM from 'react-dom'
import DivWithMessage from './div-with-message'
import Latitude from './latitude'
import ComponentLifecycleLogger from './component-lifecycle-logger'


function App() {

    return (
        <div>
            <DivWithMessage message="hello, world."/>

            <ComponentLifecycleLogger message="every component has its lifecycle events"/>
            
            <Latitude/>
        </div>

    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))