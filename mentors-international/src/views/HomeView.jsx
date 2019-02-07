import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import {
  fetchMessages,
  fetchMentees,
  deleteMentee,
  deleteMessage
} from "../store/actions";
import history from "../history";

import ReminderList from "../components/home/ReminderList";
import MenteeList from "../components/home/MenteeList";

const HomeViewWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

class HomeView extends Component {
  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchMentees();
  }

  deleteMentee = (e, id) => {
    e.preventDefault();
    this.props.deleteMentee(id);
  };

  deleteMessage = (e, id) => {
    e.preventDefault();
    this.props.deleteMessage(id);
  };

  editMentee = (e, id) => {
    e.preventDefault();
    history.push(`/editmentee/${id}`);
  };

  render() {
    return (
      <>
        <h1>Home</h1>
        <HomeViewWrapper>
          {!this.props.isFetchingMessages && !this.props.isFetchingMentees ? (
            <>
              <ReminderList
                messages={this.props.messages}
                deleteMessage={this.deleteMessage}
              />
              <MenteeList
                mentees={this.props.mentees}
                deleteMentee={this.deleteMentee}
                editMentee={this.editMentee}
              />
            </>
          ) : (
            <Loader type="TailSpin" color="#62cdff" height="100" width="100" />
          )}
        </HomeViewWrapper>
      </>
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
  { fetchMessages, fetchMentees, deleteMentee, deleteMessage }
)(HomeView);
