import React from 'react';
import { Route } from 'react-router-dom';
import UploadForm from '../components/UploadForm.js';


const NavigationRouting = () => {

    return (
        <Route path="/upload" component={UploadForm}/>
    )
}

export default NavigationRouting;