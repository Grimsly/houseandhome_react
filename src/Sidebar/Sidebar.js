import React from 'react';
import './Sidebar.css';

const sidebar = (props) => {
    return (
        <div className='sidebar' style={{right: props.slideOut ? '0' : '-30vw'}}>
            <div className='design-button'>
                Design your own
            </div>
        </div>
    )
}

export default sidebar;