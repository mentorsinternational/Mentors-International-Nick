import React from "react";

const MessageList = props => {
  return (
    <div>
      <h1>Recent Messages</h1>
      {props.messages.map((message, index) => (
        <h3 key={index}>{message.message}</h3>
      ))}
    </div>
  );
};

export default MessageList;
