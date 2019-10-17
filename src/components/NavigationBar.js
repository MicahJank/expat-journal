import React from 'react';

import { NavLink } from 'react-router-dom';

// import logo
import logo from '../imgs/LogoEJ.png';
// import form component


const NavigationBar = () => {

    return (
        <div className='navigation-bar'>
            <div>
                <img src={logo} alt='expat journal logo' />
            </div>
            <div>
                <NavLink to={'/newsfeed'}>NewsFeed</NavLink>
                <NavLink to={'/saved-content'}>Saved content</NavLink>
                <NavLink to={'/upload'}>Upload</NavLink>
                <NavLink to={'/notifications'}>Notifications</NavLink>
            </div>
        </div>
    )
}

export default NavigationBar;