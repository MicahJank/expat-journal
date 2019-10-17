import React from 'react';

import { NavLink } from 'react-router-dom';

// import logo
// import form component


const NavigationBar = () => {

    return (
        <div>
            <NavLink>NewsFeed</NavLink>
            <NavLink>Saved content</NavLink>
            <NavLink>Upload</NavLink>
            <NavLink>Notifications</NavLink>
        </div>
    )
}

export default NavigationBar;