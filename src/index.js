import React from 'react'
import ReactDOM from 'react-dom'
import DivWithMessage from './div-with-message'
import Latitude from './latitude'
import ComponentLifecycleLogger from './component-lifecycle-logger'
import { createStore, combineReducers } from 'redux'
import {  Provider } from 'react-redux'


var emptyReducer = (state = null, action) => state;

var store = createStore(combineReducers({
    empty : emptyReducer
}));

class App extends React.Component {

    state = { time: 0}

    componentDidMount() {
        setInterval(() => this.setState({time: this.state.time + 1}), 1000);
    }

    render() {

        var controlToTestUnmount = null;
        
        if (this.state.time % 5 !== 0)
        {
            controlToTestUnmount = (
                <ComponentLifecycleLogger message={"current time is " + this.state.time} />
            );
        }


        return (
            <Provider store={store}>
                <div>
                    <DivWithMessage message="hello, world."/>

                    <Latitude/>

                    {controlToTestUnmount}

                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))