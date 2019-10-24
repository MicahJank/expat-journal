import React from 'react';

import { NavLink } from 'react-router-dom';

import NavigationRouting from './NavigationRouting.js';

// import imgs
import logo from '../imgs/LogoEJ.png';
import home from '../imgs/home.png';
import save from '../imgs/save-button-1.png';
import cloud from '../imgs/cloud-computing.png';
import notification from '../imgs/notification.png';



const NavigationBar = () => {

    return (
        <>
        <div className='navigation-bar header'>
            <div className='nav-top'>
                <img src={logo} alt='expat journal logo' />
                <NavLink to={'/profile'}>{localStorage.getItem('username') || 'User'}</NavLink>
            </div>
            <div className='nav-bottom'>
                <div className='link-container'>
                    <NavLink to={'/newsfeed'}>NewsFeed</NavLink>
                    <img src={home} alt='news feed icon' />
                </div>
                <div className='link-container'>
                    <NavLink to={'/saved-content'}>Saved content</NavLink>
                    <img src={save} alt='save content icon' />
                </div>
                <div className='link-container'>
                    <NavLink to={'/upload'}>Upload</NavLink>
                    <img src={cloud} alt='upload icon' />
                </div>
                <div className='link-container'>
                    <NavLink to={'/notifications'}>Notifications</NavLink>
                    <img src={notification} alt='notification icon' />
                </div>
                <input className='nav-search' placeholder='Search country or city' />
            </div>
        </div>

        <NavigationRouting />
        </>

       
       
    )
}

export default NavigationBar;