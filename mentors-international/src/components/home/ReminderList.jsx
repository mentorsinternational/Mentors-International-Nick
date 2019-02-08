import React from "react";

import Message from "./Message";

const ReminderList = props => {
  return (
    <div>
      <h1>Recent Reminders</h1>
      {props.messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default ReminderList;
