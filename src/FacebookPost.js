import React from 'react';
import './App.css';


function Post(props) {
    return (
        <div className="Post">
            <h2>{props.author}</h2>
            <h5>{props.description}</h5>
            <button>Like</button>
        </div>
    )
}

export default Post;