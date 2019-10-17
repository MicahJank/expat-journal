import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={LoginPage} />
    </div>
  );
}

export default App;
