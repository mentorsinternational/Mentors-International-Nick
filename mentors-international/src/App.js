import React, { Component } from "react";
import { Route } from "react-router-dom";
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
  render() {
    return (
      <AppWrapper>
        <NavBar />
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SignupView} />
        <Route exact path="/message" component={MessageView} />
        <Route exact path="/schedule" component={ScheduleView} />
      </AppWrapper>
    );
  }
}

export default App;
