import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { createMessage, fetchMentees, updateMessage } from "../store/actions";

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
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: #53b8e8;
  }
`;

class ReminderView extends Component {
  state = {
    newMessage: {
      message_title: "",
      message_content: "",
      dates: []
    },
    startDate: new Date(),
    showPopup: false
  };

  componentDidMount() {
    this.props.fetchMentees();
    if (this.props.isUpdating) {
      const thisMessage = this.props.messages.find(
        message => String(message.id) === this.props.match.params.mID
      );
      console.log(thisMessage);
      this.setState({
        newMessage: {
          ...this.state.newMessage,
          message_title: thisMessage.message_title,
          message_content: thisMessage.message_content
          //dates: [...thisMessage.dates]
        },
        thisMessageId: thisMessage.id
      });
    }
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
        dates: [
          ...this.state.newMessage.dates,
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
        dates: this.state.newMessage.dates.filter(
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
        dates: this.state.newMessage.dates.map((date, index) => {
          if (index === otherIndex) {
            return {
              ...date,
              every_week: !date.every_week
            };
          } else {
            return date;
          }
        })
      }
    });
  };

  addMentee = (e, mentee) => {
    e.preventDefault();
    this.setState({
      newMessage: {
        ...this.state.newMessage,
        added_mentees: [...this.state.newMessage.added_mentees, mentee]
      },
      showPopup: false
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
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  updateMessage = e => {
    e.preventDefault();
    this.props.updateMessage(this.state.thisMessageId, this.state.newMessage);
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
          dates={this.state.newMessage.dates}
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
        {this.props.isUpdating ? (
          <CreateMessageButton onClick={this.updateMessage}>
            Update Message
          </CreateMessageButton>
        ) : (
          <CreateMessageButton onClick={this.createMessage}>
            Create Message
          </CreateMessageButton>
        )}
      </ReminderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    mentees: state.mentees,
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  { createMessage, fetchMentees, updateMessage }
)(ReminderView);
