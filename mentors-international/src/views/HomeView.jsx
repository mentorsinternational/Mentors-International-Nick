import React, { Component } from "react";
import MessageList from "../components/home/MessageList";
import ScheduleList from "../components/home/ScheduleList";

class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>Home View</h1>
        <MessageList />
        <ScheduleList />
      </div>
    );
  }
}

export default HomeView;
