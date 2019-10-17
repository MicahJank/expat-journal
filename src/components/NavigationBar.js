import React from 'react';

import { NavLink } from 'react-router-dom';

// import logo
// import form component


const NavigationBar = () => {

    return (
        <div>
            <NavLink to={'/newsfeed'}>NewsFeed</NavLink>
            <NavLink to={'/saved-content'}>Saved content</NavLink>
            <NavLink to={'/upload'}>Upload</NavLink>
            <NavLink to={'/notifications'}>Notifications</NavLink>
        </div>
    )
}

export default NavigationBar;