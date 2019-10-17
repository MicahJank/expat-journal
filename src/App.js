import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Switch>
          <Route exact path='/' />
          <Route path='/sign-in' />
          <Route path='/sign-up' />
          <Route path='/upload' />
          <Route path='/newsfeed' />
        </Switch>
    </div>
  );
}

export default App;
