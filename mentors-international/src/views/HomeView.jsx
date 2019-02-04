import React, { Component } from "react";
import { Link } from "react-router-dom";

import MessageList from "../components/home/MessageList";
import ScheduleList from "../components/home/ScheduleList";

class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>Home View</h1>
        <MessageList />
        <ScheduleList />
        <Link to="/message">
          <button>+ Message</button>
        </Link>
      </div>
    );
  }
}

export default HomeView;
