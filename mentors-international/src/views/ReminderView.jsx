import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { createMessage, fetchMentees } from "../store/actions";

import MessageForm from "../components/reminder/ReminderForm";
import ScheduleForm from "../components/Schedule/ScheduleForm";

const ReminderWrapper = styled.div`
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;
  text-align: right;
`;

const ReminderTitle = styled.h1`
  text-align: center;
`;

const CreateMessageButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 15px 45px;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

class ReminderView extends Component {
  state = {
    newMessage: {
      message_title: "",
      message_content: "",
      reminder_dates: [],
      added_mentees: []
    },
    startDate: new Date(),
    showPopup: false
  };

  componentDidMount() {
    this.props.fetchMentees();
  }
  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  toggle = e => {
    e.preventDefault();
    this.setState({
      justOnce: !this.state.justOnce
    });
  };

  handleChange = e => {
    this.setState({
      newMessage: {
        ...this.state.newMessage,
        [e.target.name]: e.target.value
      }
    });
  };

  createMessage = e => {
    e.preventDefault();
    this.props.createMessage(this.state.newMessage);
    this.props.history.push("/");
  };

  addDate = e => {
    e.preventDefault();
    this.setState({
      newMessage: {
        ...this.state.newMessage,
        reminder_dates: [
          ...this.state.newMessage.reminder_dates,
          {
            date: moment(this.state.startDate).format("LLL"),
            every_week: false
          }
        ]
      }
    });
  };

  removeDate = (e, otherIndex) => {
    e.preventDefault();
    this.setState({
      newMessage: {
        ...this.state.newMessage,
        reminder_dates: this.state.newMessage.reminder_dates.filter(
          (date, index) => index !== otherIndex
        )
      }
    });
  };

  toggleDateReminder = (e, otherIndex) => {
    e.preventDefault();
    this.setState({
      newMessage: {
        ...this.state.newMessage,
        reminder_dates: this.state.newMessage.reminder_dates.map(
          (date, index) => {
            if (index === otherIndex) {
              return {
                ...date,
                every_week: !date.every_week
              };
            } else {
              return date;
            }
          }
        )
      }
    });
  };

  addMentee = (e, mentee) => {
    e.preventDefault();
    this.setState({
      newMessage: {
        ...this.state.newMessage,
        added_mentees: [...this.state.newMessage.added_mentees, mentee]
      }
    });
  };

  removeMentee = (e, id) => {
    e.preventDefault();
    this.setState({
      newMessage: {
        ...this.state.newMessage,
        added_mentees: this.state.newMessage.added_mentees.filter(
          mentee => mentee.id !== id
        )
      }
    });
  };

  togglePopup = e => {
    e.preventDefault();
    console.log("click");
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <ReminderWrapper>
        <ReminderTitle>Create Reminder</ReminderTitle>
        <MessageForm
          newMessage={this.state.newMessage}
          handleChange={this.handleChange}
        />
        <ScheduleForm
          startDate={this.state.startDate}
          handleDateChange={this.handleDateChange}
          toggle={this.toggle}
          reminder_dates={this.state.newMessage.reminder_dates}
          addDate={this.addDate}
          removeDate={this.removeDate}
          toggleDateReminder={this.toggleDateReminder}
          mentees={this.props.mentees}
          added_mentees={this.state.newMessage.added_mentees}
          addMentee={this.addMentee}
          removeMentee={this.removeMentee}
          showPopup={this.state.showPopup}
          togglePopup={this.togglePopup}
        />
        <CreateMessageButton onClick={this.createMessage}>
          Create Message
        </CreateMessageButton>
      </ReminderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    mentees: state.mentees
  };
};

export default connect(
  mapStateToProps,
  { createMessage, fetchMentees }
)(ReminderView);
