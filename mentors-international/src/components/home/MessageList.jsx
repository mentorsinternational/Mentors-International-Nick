import React from "react";

import Message from "./Message";

const MessageList = props => {
  return (
    <div>
      <h1>Recent Messages</h1>
      {props.messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
