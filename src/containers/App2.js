import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import * as Actions from "../actions";

import {Router, Switch, Route } from 'react-router-dom';

import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./SignUp";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // const { classes } = this.props;
    return <div className="App">

          <Router>

            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/login/">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/signup/">signup</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/dashboard/">Dashboard</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>



            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Router>

      </div>
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default withStyles(styles)(App);
