import React from "react";

import styled from "styled-components";

const MessageFormWrapper = styled.form`
  text-align: right;
  width: 100%;
`;

const MessageInput = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 5px;
`;

const MessageContent = styled.textarea`
  width: 100%;
  font-size: 18px;
  padding: 5px;
`;

const InputTitles = styled.h3`
  margin: 20px 0 10px 0;
  text-align: left;
`;

const MessageForm = props => {
  return (
    <MessageFormWrapper onSubmit={props.createMessage}>
      <InputTitles>Reminder Title</InputTitles>
      <MessageInput
        type="text"
        name="message_title"
        value={props.newMessage.message_title}
        onChange={props.handleChange}
      />
      <InputTitles>Reminder Message</InputTitles>
      <MessageContent
        name="message_content"
        cols="30"
        rows="10"
        value={props.newMessage.message_content}
        onChange={props.handleChange}
      />
    </MessageFormWrapper>
  );
};

export default MessageForm;
