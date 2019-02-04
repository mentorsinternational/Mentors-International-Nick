import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import MessageView from "./views/MessageView";
import ScheduleView from "./views/ScheduleView";
import NavBar from "./components/nav/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
        <Route exact path="/message" component={MessageView} />
        <Route exact path="/schedule" component={ScheduleView} />
      </div>
    );
  }
}

export default App;
