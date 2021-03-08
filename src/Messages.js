import React from 'react';

function Messages() {
    const stampa = () => {
        console.log("stampa")
    }
    return (
        <button onClick={stampa}>Click Me Again !!!</button>
    )
}

export default Messages;