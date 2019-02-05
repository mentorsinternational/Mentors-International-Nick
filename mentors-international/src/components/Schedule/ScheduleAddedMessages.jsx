import React from "react";
import styled from "styled-components";

const AddedMessages = styled.h4`
  background: white;
  margin: 0;
  margin-bottom: 5px;
  padding: 5px;
  cursor: pointer;
`;

const ScheduleAddedMessages = props => {
  return (
    <div>
      {props.addedMessages.map((message, index) => (
        <AddedMessages key={index} onClick={e => props.removeMessage(e, index)}>
          {message.messageTitle}
        </AddedMessages>
      ))}
    </div>
  );
};

export default ScheduleAddedMessages;
