<<<<<<< HEAD
import React from "react";
import { Route } from "react-router-dom";
import UploadForm from "../components/UploadForm.js";
import NewsFeed from "../components/Newsfeed.js";
import FooterBar from "../components/Footer";
import EditForm from "../components/EditForm.js";
import Story from "../components/Stories";
=======
import React from 'react';
import { Route } from 'react-router-dom';
import UploadForm from '../components/UploadForm.js';
import NewsFeed from '../components/Newsfeed.js';
import EditForm from '../components/EditForm.js';
>>>>>>> cf3a11b786911f50f6aedaf514aa468d2acf7af1

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
