import React from "react";

const MessageForm = props => {
  return (
    <form>
      <h3>Message Title</h3>
      <input
        type="text"
        name="messageTitle"
        value={props.newMessage.title}
        onChange={props.handleChange}
      />
      <h3>Message Content</h3>
      <textarea
        name="messageContent"
        cols="30"
        rows="10"
        value={props.newMessage.messageContent}
        onChange={props.handleChange}
      />
      <button>Create Message</button>
    </form>
  );
};

export default MessageForm;
