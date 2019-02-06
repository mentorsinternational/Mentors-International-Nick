import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { createMessage } from "../store/actions";

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

class MessageView extends Component {
  state = {
    newMessage: {
      message_title: "",
      message_content: "",
      reminder_dates: []
    },
    startDate: new Date()
  };

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
        />
        <CreateMessageButton>Create Message</CreateMessageButton>
      </ReminderWrapper>
    );
  }
}

export default connect(
  null,
  { createMessage }
)(MessageView);
