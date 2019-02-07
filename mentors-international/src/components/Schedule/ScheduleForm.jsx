import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import DateList from "./DateList";
import MenteeListPopup from "./MenteeListPopup";
import MenteeAddedList from "./MenteeAddedList";

import "react-datepicker/dist/react-datepicker.css";

const ScheduleFormWrapper = styled.form`
  width: 100%;
  text-align: left;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 5px;
  font-size: 18px;
  width: 100%;
  margin-top: 30px;

  & .react-datepicker__input-container {
    width: 100%;

    & input {
      width: 100%;
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const DateRemind = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;

  &:nth-of-type(1) {
    padding-right: 5px;
  }

  &:nth-of-type(2) {
    padding-left: 5px;
  }
`;

const AddDateBtn = styled.button`
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
`;

const SectionTitles = styled.h3`
  margin: 0 0 20px 0;
`;

const ScheduleForm = props => {
  return (
    <ScheduleFormWrapper>
      <FlexWrapper>
        <DateRemind>
          <SectionTitles>Add Reminder Dates</SectionTitles>
          <DateList
            reminder_dates={props.reminder_dates}
            removeDate={props.removeDate}
            toggleDateReminder={props.toggleDateReminder}
          />
          <div>
            <StyledDatePicker
              selected={props.startDate}
              onChange={props.handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
            <AddDateBtn onClick={props.addDate}>Add Date</AddDateBtn>
          </div>
        </DateRemind>
        <DateRemind>
          <SectionTitles>Mentees to Remind</SectionTitles>
          <MenteeAddedList
            added_mentees={props.added_mentees}
            removeMentee={props.removeMentee}
          />
          <button onClick={props.togglePopup}>Select Mentee</button>
          <MenteeListPopup
            mentees={props.mentees}
            addMentee={props.addMentee}
            showPopup={props.showPopup}
          />
        </DateRemind>
      </FlexWrapper>
    </ScheduleFormWrapper>
  );
};

export default ScheduleForm;
