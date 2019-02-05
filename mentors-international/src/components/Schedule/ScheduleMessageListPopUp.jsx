import React from "react";

import styled from "styled-components";

const PopUpMessList = styled.div`
  display: ${props => (props.toggleML ? "block" : "none")};
  background: white;
  padding: 10px;
`;

const MessageTitles = styled.h4`
  font-weight: normal;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const ScheduleMessageList = props => {
  return (
    <PopUpMessList toggleML={props.toggleML}>
      <h3>Add a Message</h3>
      {props.messages.map((message, index) => (
        <MessageTitles onClick={e => props.addMessage(e, message)} key={index}>
          {message.messageTitle}
        </MessageTitles>
      ))}
    </PopUpMessList>
  );
};

export default ScheduleMessageList;
