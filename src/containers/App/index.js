import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../actions";

import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from './selectors';

import NavBar from '../../components/NavBar';

import Dashboard from "../Dashboard";
import Login from "../Login";
import Signup from "../SignUp";
import Home from "../Home";

export function App(props) {
    return (
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>

    )

}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()
});


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default withStyles(styles)(App);
