import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchMessages, fetchMentees } from "../store/actions";

import ReminderList from "../components/home/ReminderList";
import MenteeList from "../components/home/MenteeList";

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
  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchMentees();
  }

  render() {
    return (
      <div>
        <ReminderList messages={this.props.messages} />
        <MenteeList mentees={this.props.mentees} />
        <Link to="/message">
          <AddMessageBtn>Create Reminder</AddMessageBtn>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    schedules: state.schedules,
    mentees: state.mentees
  };
};

export default connect(
  mapStateToProps,
  { fetchMessages, fetchMentees }
)(HomeView);
