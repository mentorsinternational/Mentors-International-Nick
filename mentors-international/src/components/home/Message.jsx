import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;

const Message = props => {
  return (
    <MessageWrapper>
      <h3>{props.message.message_title}</h3>
      <button>Delete</button>
    </MessageWrapper>
  );
};

export default Message;
