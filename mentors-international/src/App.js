import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import ReminderView from "./views/ReminderView";
import ScheduleView from "./views/ScheduleView";
import SignupView from "./views/SignupView";
import MenteeView from './views/MenteeView';
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
          render={props =>
            localStorage.getItem("jwt") ? (
              <HomeView />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SignupView} />
        <Route
          exact
          path="/reminder"
          render={props =>
            localStorage.getItem("jwt") ? (
              <ReminderViewWithRouter />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/schedule"
          render={props =>
            localStorage.getItem("jwt") ? (
              <ScheduleView />
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
              <MenteeViewWithRouter />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </AppWrapper>
    );
  }
}

const ReminderViewWithRouter = withRouter(ReminderView);
const MenteeViewWithRouter = withRouter(MenteeView);

export default App;