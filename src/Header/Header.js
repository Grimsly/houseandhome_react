import React from 'react';
import './Header.css';
// import {NavLink, Link} from 'react-router-dom';

const header = () => {
    return (
        <div className='header'>
            <div className='logo'>Houseandhome.com</div>
            <div className='menu'>
                <div>
                    Samples
                </div>
                <div>
                    Store
                </div>
                <div>
                    Contact
                </div>
            </div>
        </div>
    )
}

export default header;