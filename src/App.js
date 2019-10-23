import React from "react";

import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import { Route, Switch } from "react-router-dom";

// NavigationBar should be visible on all pages of the app so instead
// of attaching it to a route via the component property i have imported it here
// and am rendering it regardless of the route.
import NavigationBar from "./components/NavigationBar.js";
import UploadForm from "./components/UploadForm.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/sign-in" component={LoginPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route path="/" component={NavigationBar} />
        <Route path="/newsfeed" />
      </Switch>
    </div>
  );
}

export default App;
