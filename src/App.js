import React from 'react';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';

// NavigationBar should be visible on all pages of the app so instead
// of attaching it to a route via the component property i have imported it here
// and am rendering it regardless of the route.
import NavigationBar from './components/NavigationBar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/sign-in" component={LoginPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <PrivateRoute path="/" component={NavigationBar} />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
