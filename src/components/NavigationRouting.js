import React from 'react';
import { Route } from 'react-router-dom';
import UploadForm from '../components/UploadForm.js';
import NewsFeed from '../components/Newsfeed.js';


const NavigationRouting = () => {

    return (
        <>
        <Route path="/upload" component={UploadForm}/>
        <Route path="/newsfeed" component={NewsFeed}/>
        </>
    )
}

export default NavigationRouting;