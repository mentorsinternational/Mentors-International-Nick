import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import ReminderView from "./views/ReminderView";
import SignupView from "./views/SignupView";
import MenteeView from './views/MenteeView';
import AccountView from './views/AccountView';
import NavBar from "./components/nav/NavBar";

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {


  render() {
    return (
      <AppWrapper>
        <NavBar />
        <Route
          exact
          path="/"
          component={HomeView}
        />
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SignupView} />
        <Route
          exact
          path="/reminder"
          render={props =>
            localStorage.getItem("jwt") ? (
              <ReminderView {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/mentees"
          render={props =>
            localStorage.getItem("jwt") ? (
              <MenteeView {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/account"
          render={props =>
            localStorage.getItem("jwt") ? (
              <AccountView {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/editmentee/:mID"
          render={props =>
            localStorage.getItem("jwt") ? (
              <MenteeView {...props} isUpdating={true} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/editreminder/:mID"
          render={props =>
            localStorage.getItem("jwt") ? (
              <ReminderView {...props} isUpdating={true} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </AppWrapper>
    );
  }
}

export default App;