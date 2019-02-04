import React, { Component } from "react";
import MessageForm from "../components/message/MessageForm";

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

  render() {
    return (
      <div>
        <h1>Message View</h1>
        <MessageForm
          newMessage={this.state.newMessage}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default MessageView;
