import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Message from "./Message";

const ReminderListWrapper = styled.div`
  width: 45%;
  background: white;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  & h1 {
    margin-top: 0;
  }

  & .present-div {
    width: 100%;
  }
`;

const AddMessageBtn = styled.button`
  background: none;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 15px 45px;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s ease;

  &:hover {
    background: #53b8e8;
  }
`;

const ReminderList = props => {
  return (
    <ReminderListWrapper>
      <div className="present-div">
        <h1>Recent Reminders</h1>
        {props.messages.map((message, index) => (
          <Message
            key={message.id}
            message={message}
            deleteMessage={props.deleteMessage}
            lastMessage={index === props.messages.length - 1}
            editReminder={props.editReminder}
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
