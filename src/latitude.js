import React from 'react'

class Latitude extends React.Component {
    constructor(props) {
        super(props)

        this.state = { latitude: -100}

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ latitude: position.coords.latitude});
            }
        )
    }
    render() {
        return <div>latitude: {this.state.latitude}</div>
    }
}

export default Latitude