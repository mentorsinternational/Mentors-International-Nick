import React, { Component } from "react";
import MessageForm from "../components/message/MessageForm";
import { connect } from "react-redux";

import { createMessage } from "../store/actions";

class MessageView extends Component {
  state = {
    newMessage: {
      messageTitle: "",
      messageContent: ""
    }
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
  };

  render() {
    return (
      <div>
        <h1>Message View</h1>
        <MessageForm
          newMessage={this.state.newMessage}
          handleChange={this.handleChange}
          createMessage={this.createMessage}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createMessage }
)(MessageView);
