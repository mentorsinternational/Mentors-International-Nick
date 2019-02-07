import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Message from "./Message";

const ReminderListWrapper = styled.div`
  width: 45%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  & h1 {
    margin-top: 0;
  }
`;

const AddMessageBtn = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 15px 45px;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

const ReminderList = props => {
  return (
    <ReminderListWrapper>
      <div>
        <h1>Recent Reminders</h1>
        {props.messages.map((message, index) => (
          <Message
            key={message.id}
            message={message}
            deleteMessage={props.deleteMessage}
            lastMessage={index === props.messages.length - 1}
          />
        ))}
      </div>
      <Link to="/reminder">
        <AddMessageBtn>Create Reminder</AddMessageBtn>
      </Link>
    </ReminderListWrapper>
  );
};

export default ReminderList;
