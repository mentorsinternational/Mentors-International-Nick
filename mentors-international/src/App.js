import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import MessageView from "./views/MessageView";
import ScheduleView from "./views/ScheduleView";
import SignupView from "./views/SignupView";
import NavBar from "./components/nav/NavBar";

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };
  }

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
          path="/message"
          render={props =>
            localStorage.getItem("jwt") ? (
              <MessageView />
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
      </AppWrapper>
    );
  }
}

export default App;

{
  /* <Route exact path="/" component={HomeView} /> */
}
