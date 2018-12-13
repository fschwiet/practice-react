import React from 'react'

var globalInstanceCount = 0;

class ComponentLifecycleLogger extends React.Component {

    _instance = ++globalInstanceCount

    constructor(props) {
        super(props)

        this.log("constructor")
    }

    log(message) {
        console.log("CLL#" + this._instance + ": " + message);
    }

    componentDidMount() {
        this.log("componentDidMount")
    }

    render() {
        this.log("render");

        return (
            <div>
                CLL{this._instance}: {this.props.message }
            </div>
        );
    }

    componentDidUpdate() {
        this.log("componentDidUpdate")
    }

    componentWillUnmount() {
        this.log("componentWillUnmount")
    }
}

export default ComponentLifecycleLogger