import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${props => !props.lastMessage && "1px dashed gray"};

  & button {
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;

const Message = props => {
  return (
    <MessageWrapper lastMessage={props.lastMessage}>
      <h3>{props.message.message_title}</h3>
      <button onClick={e => props.deleteMessage(e, props.message.id)}>
        Delete
      </button>
    </MessageWrapper>
  );
};

export default Message;
