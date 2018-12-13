import React from 'react'

class Latitude extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: null, 
            error: null }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ latitude: position.coords.latitude});
            },
            error => {
                this.setState({error: error.message || "Unspecified error."})
            }
        )
    }
    render() {

        if (this.state.latitude !== null)
            return (
                <div>latitude: {this.state.latitude}</div>
            );

        if (this.state.error !== null)
            return (
                <div>error: {this.state.error}</div>
            );

        return (
            <div>loading...</div>
        );
    }
}

export default Latitude