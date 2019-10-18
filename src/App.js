import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
        <Route path="/sign-in" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/upload" />
        <Route path="/newsfeed" />
      </Switch>
    </div>
  );
}

export default App;
