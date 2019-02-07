import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import DateList from "./DateList";

import "react-datepicker/dist/react-datepicker.css";

const ScheduleFormWrapper = styled.form`
  width: 100%;
  text-align: left;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 8px;
  font-size: 18px;
  width: 100%;
  margin-top: 10px;
  border: none;

  & .react-datepicker-wrapper {
    width: 100% !important;
    & .react-datepicker__input-container {
      width: 100% !important;

      & input {
        width: 100% !important;
      }
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const DateRemind = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow: hidden;

  /* &:nth-of-type(1) {
    padding-right: 5px;
  }

  &:nth-of-type(2) {
    padding-left: 5px;
  } */
`;

const AddDateBtn = styled.button`
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  background: #26de81;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
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
            dates={props.dates}
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
        {/* <DateRemind>
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
        </DateRemind> */}
      </FlexWrapper>
    </ScheduleFormWrapper>
  );
};

export default ScheduleForm;
