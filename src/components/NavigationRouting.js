import React from 'react';
import { Route } from 'react-router-dom';
import UploadForm from '../components/UploadForm.js';
import NewsFeed from '../components/Newsfeed.js';
import FooterBar from '../components/Footer';
import EditForm from '../components/EditForm.js';

const NavigationRouting = () => {
  return (
    <>
      <Route path="/upload" component={UploadForm} />
      <Route path="/edit" component={EditForm} />
      <Route path="/newsfeed" component={NewsFeed} />
      <Route path="/" component={FooterBar} />
    </>
  );
};

export default NavigationRouting;
