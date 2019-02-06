import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import ScheduleMessageListPopUp from "./ScheduleMessageListPopUp";
import ScheduleAddedMessages from "./ScheduleAddedMessages";

import "react-datepicker/dist/react-datepicker.css";

const ScheduleFormWrapper = styled.form`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const ScheduleTitleInput = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 5px;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 5px;
  font-size: 18px;
`;

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const DateRemind = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  & h3 {
    margin: 0;
    margin-top: 4px;
    margin-right: 5px;
  }

  &:nth-of-type(2) {
    justify-content: flex-end;
  }
`;

const AddMessageBtn = styled.button`
  margin-bottom: 10px;
  padding: 5px 25px;
  font-size: 18px;
`;

const ScheduleForm = props => {
  return (
    <ScheduleFormWrapper>
      <h3>Schedule Title</h3>
      <ScheduleTitleInput type="text" />
      <FlexWrapper>
        <DateRemind>
          <h3>Date</h3>
          <StyledDatePicker
            selected={props.startDate}
            onChange={props.handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
          />
        </DateRemind>
        <DateRemind>
          <h3>Remind me</h3>
          <button onClick={props.toggle}>
            {props.justOnce ? "Just Once" : "Every Week"}
          </button>
        </DateRemind>
      </FlexWrapper>
      <h3>Messages</h3>
      <ScheduleAddedMessages
        removeMessage={props.removeMessage}
        addedMessages={props.addedMessages}
      />
      <AddMessageBtn onClick={props.toggleMessageList}>
        Add Message
      </AddMessageBtn>
      <ScheduleMessageListPopUp
        messages={props.messages}
        toggleML={props.toggleML}
        addMessage={props.addMessage}
      />
    </ScheduleFormWrapper>
  );
};

export default ScheduleForm;
