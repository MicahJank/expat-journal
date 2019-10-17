import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <div className="App">
      <Route path="/sign-in" component={LoginPage} />
      <Route path="/sign-up" component={SignUpPage} />
    </div>
  );
}

export default App;
