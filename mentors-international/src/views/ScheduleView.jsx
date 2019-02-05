import React, { Component } from "react";
import { connect } from "react-redux";

import ScheduleForm from "../components/Schedule/ScheduleForm";
import moment from "moment";

// console.log(moment().format("dddd"));
class ScheduleView extends Component {
  state = {
    startDate: new Date(),
    justOnce: true,
    toggleML: false,
    addedMessages: []
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

  toggleMessageList = e => {
    e.preventDefault();
    this.setState({
      toggleML: !this.state.toggleML
    });
  };

  addMessage = (e, message) => {
    e.preventDefault();
    this.setState({
      addedMessages: [...this.state.addedMessages, message],
      toggleML: false
    });
  };

  removeMessage = (e, otherIndex) => {
    e.preventDefault();
    this.setState({
      addedMessages: this.state.addedMessages.filter(
        (message, index) => index !== otherIndex
      )
    });
  };

  render() {
    return (
      <div>
        <h1>Schedule View</h1>
        <ScheduleForm
          startDate={this.state.startDate}
          handleDateChange={this.handleDateChange}
          justOnce={this.state.justOnce}
          toggle={this.toggle}
          messages={this.props.messages}
          toggleML={this.state.toggleML}
          addedMessages={this.state.addedMessages}
          addMessage={this.addMessage}
          removeMessage={this.removeMessage}
          toggleMessageList={this.toggleMessageList}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(
  mapStateToProps,
  {}
)(ScheduleView);
