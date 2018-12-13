import React from 'react'

class Latitude extends React.Component {
    
    state = { latitude: null, error: null}
    _watchPositionID = null

    componentDidMount() {
        this._watchPositionID = window.navigator.geolocation.watchPosition(
            position => {
                this.setState({ latitude: position.coords.latitude, error: null});
            },
            error => {
                this.setState({ latitude: null, error: error.message || "Unspecified error."})
            }
        )
    }

    componentWillUnmount() {
        
        if (this._watchPositionID !== null) {
            window.navigator.geolocation.clearWatch(this._watchPositionID)
            this._watchPositionID = null
        }
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