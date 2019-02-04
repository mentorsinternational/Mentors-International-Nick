import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import MessageList from "../components/home/MessageList";
import ScheduleList from "../components/home/ScheduleList";

class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>Home View</h1>
        <MessageList messages={this.props.messages} />
        <ScheduleList schedules={this.props.schedules} />
        <Link to="/message">
          <button>+ Message</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    schedules: state.schedules
  };
};

export default connect(
  mapStateToProps,
  {}
)(HomeView);
