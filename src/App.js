import React from 'react';

import { Route, Switch } from 'react-router-dom';

// NavigationBar should be visible on all pages of the app so instead
// of attaching it to a route via the component property i have imported it here
// and am rendering it regardless of the route.
import NavigationBar from './components/NavigationBar.js';

function App() {

  return (
    <div className="App">
      <NavigationBar />
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
