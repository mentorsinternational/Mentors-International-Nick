import React from "react";
import styled from "styled-components";

import Date from "./Date";

const DateListWrapper = styled.div`
  border: 1px dashed #cccccc;
  padding: 10px 10px 6px 10px;
  border-radius: 4px;
`;

const StartAdding = styled.h3`
  color: #cccccc;
`;

const DateList = props => {
  return (
    <DateListWrapper>
      {props.dates.length === 0 && (
        <StartAdding>Start Adding Dates!</StartAdding>
      )}
      {props.dates.map((date, index) => (
        <Date
          date={date}
          key={index}
          index={index}
          removeDate={props.removeDate}
          toggleDateReminder={props.toggleDateReminder}
        />
      ))}
    </DateListWrapper>
  );
};

export default DateList;
