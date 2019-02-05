import React from "react";

const Message = props => {
  return (
    <div>
      <h3>{props.message.message_title}</h3>
    </div>
  );
};

export default Message;
