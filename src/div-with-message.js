import React from 'react'

function DivWithMessage(props) {
    return (
        <div>{props.message}</div>
    );
}

DivWithMessage.defaultProps = {
    message: "this is a default propery"
}

export default DivWithMessage;