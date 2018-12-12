import React from 'react'

class Latitude extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: -100, 
            error: null }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ latitude: position.coords.latitude});
            },
            error => {
                this.setState({error: error.message})
            }
        )
    }
    render() {
        return <div>
            <span>latitude: {this.state.latitude}</span>
            <div>{this.state.error}</div>

        </div>
    }
}

export default Latitude