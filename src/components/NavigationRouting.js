import React from 'react';
import { Route } from 'react-router-dom';
import UploadForm from '../components/UploadForm.js';
import NewsFeed from '../components/Newsfeed.js';
import EditForm from '../components/EditForm.js';
import Story from '../components/Stories';

const NavigationRouting = () => {

  return (
    <>
      <Route
        path="/stories/:id"
        component={Story}
      />
      <Route path="/upload" component={UploadForm} />
      <Route path="/edit/:id" component={EditForm} />
      <Route path="/newsfeed" component={NewsFeed} />
    </>
  );
};

export default NavigationRouting;
