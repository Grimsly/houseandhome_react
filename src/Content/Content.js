import React from 'react';
import './Content.css';

const content = (props) => {
    return (
        <div className='content' style={{opacity: props.fadeIn ? '100%' : '0%'}}>
            <h1 className='content-title'>{props.children}</h1>
        </div>
    )
}

export default content;