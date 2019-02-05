import React from "react";

import styled from "styled-components";

const MessageFormWrapper = styled.form`
  text-align: right;
  max-width: 800px;
  margin: 0 auto;
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

const CreateMessageButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 15px 45px;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

const MessageForm = props => {
  return (
    <MessageFormWrapper onSubmit={props.createMessage}>
      <InputTitles>Message Title</InputTitles>
      <MessageInput
        type="text"
        name="message_title"
        value={props.newMessage.message_title}
        onChange={props.handleChange}
      />
      <InputTitles>Message Content</InputTitles>
      <MessageContent
        name="message_content"
        cols="30"
        rows="10"
        value={props.newMessage.message_content}
        onChange={props.handleChange}
      />
      <CreateMessageButton>Create Message</CreateMessageButton>
    </MessageFormWrapper>
  );
};

export default MessageForm;
