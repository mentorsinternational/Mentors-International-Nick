import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import { fetchMessages, fetchMentees, deleteMentee } from "../store/actions";

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

  deleteMentee = (e, id) => {
    e.preventDefault();
    this.props.deleteMentee(id);
    this.props.fetchMentees();
  };

  render() {
    return (
      <div>
        {!this.props.isFetchingMessages && !this.props.isFetchingMentees ? (
          <>
            <ReminderList messages={this.props.messages} />
            <MenteeList
              mentees={this.props.mentees}
              deleteMentee={this.deleteMentee}
            />
          </>
        ) : (
          <Loader type="TailSpin" color="#62cdff" height="100" width="100" />
        )}
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
    mentees: state.mentees,
    isFetchingMessages: state.isFetchingMessages,
    isFetchingMentees: state.isFetchingMentees
  };
};

export default connect(
  mapStateToProps,
  { fetchMessages, fetchMentees, deleteMentee }
)(HomeView);
