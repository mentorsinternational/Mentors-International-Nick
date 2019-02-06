import React from "react";
import styled from "styled-components";

import Date from "./Date";

const DateList = props => {
  return (
    <div>
      {props.reminder_dates.map((date, index) => (
        <Date
          date={date}
          key={index}
          index={index}
          removeDate={props.removeDate}
          toggleDateReminder={props.toggleDateReminder}
        />
      ))}
    </div>
  );
};

export default DateList;
