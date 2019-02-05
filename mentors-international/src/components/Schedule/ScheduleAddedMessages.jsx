import React from "react";

const ScheduleAddedMessages = props => {
  return (
    <div>
      {props.addedMessages.map((message, index) => (
        <h3 key={index} onClick={e => props.removeMessage(e, index)}>
          {message.messageTitle}
        </h3>
      ))}
    </div>
  );
};

export default ScheduleAddedMessages;
