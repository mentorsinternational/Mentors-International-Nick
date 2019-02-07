import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => !props.lastMessage && "1px dashed gray"};
  width: 100%;

  & button {
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: #62cdff;
  cursor: pointer;
`;

const Message = props => {
  return (
    <MessageWrapper lastMessage={props.lastMessage}>
      <h3>{props.message.message_title}</h3>
      <div>
        <DeleteButton onClick={e => props.deleteMessage(e, props.message.id)}>
          Delete
        </DeleteButton>
        <EditButton onClick={e => props.editReminder(e, props.message.id)}>
          Edit
        </EditButton>
      </div>
    </MessageWrapper>
  );
};

export default Message;
