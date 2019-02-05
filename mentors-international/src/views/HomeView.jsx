import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import MessageList from "../components/home/MessageList";
import ScheduleList from "../components/home/ScheduleList";

const AddMessageBtn = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 15px 45px;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>Home View</h1>
        <MessageList messages={this.props.messages} />
        <ScheduleList schedules={this.props.schedules} />
        <Link to="/message">
          <AddMessageBtn>+ Message</AddMessageBtn>
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
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
