import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from '../Auth/Login/Login.web';
import Signup from '../Auth/Signup/Signup.web';
import Meeting from '../Meeting/Meeting.web';
import history from '../../../History';
export default function Navigation() {
  return (
    <Router >
    <Switch history={history}>

        <Route exact  path="/" component={Meeting} />
        <Route exact  path="/Login" component={Login} />

        <Route path="/Signup" component={Signup} />

        {/* <Route  path="/" component={WelcomePage} /> */}

      </Switch>
    </Router>
  );
}


