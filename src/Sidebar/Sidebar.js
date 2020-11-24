import React from 'react';
import './Sidebar.css';

const sidebar = (props) => {
    return (
        <div className='sidebar' style={window.innerWidth > 1100 ? (props.slideOut ? {right: '0'} : {right: '-30vw'}) : (props.slideOut ? {bottom: '0'} : {bottom: '-20vh'})}>
            <div className='design-button'>
                Design your own
            </div>
        </div>
    )
}

export default sidebar;