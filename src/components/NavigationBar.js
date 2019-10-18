import React from 'react';

import { NavLink } from 'react-router-dom';

// import logo
import logo from '../imgs/LogoEJ.png';
// import form component


const NavigationBar = () => {

    return (
        <div className='navigation-bar'>
            <div className='nav-top'>
                <img src={logo} alt='expat journal logo' />
                <NavLink to={'/profile'}>UserName</NavLink>
            </div>
            <div className='nav-bottom'>
                <NavLink to={'/newsfeed'}>NewsFeed</NavLink>
                <NavLink to={'/saved-content'}>Saved content</NavLink>
                <NavLink to={'/upload'}>Upload</NavLink>
                <NavLink to={'/notifications'}>Notifications</NavLink>
                <input className='nav-search' placeholder='Search country or city' />
            </div>
        </div>
    )
}

export default NavigationBar;