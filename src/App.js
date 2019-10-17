import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/sign-in" component={LoginPage} />
      <Route path="/sign-up" />
    </div>
  );
}

export default App;
