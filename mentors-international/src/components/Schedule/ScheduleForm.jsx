import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ScheduleForm = props => {
  return (
    <form>
      <h3>Schedule Title</h3>
      <input type="text" />
      <h3>Schedule date</h3>
      <DatePicker
        selected={props.startDate}
        onChange={props.handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
      />
    </form>
  );
};

export default ScheduleForm;
