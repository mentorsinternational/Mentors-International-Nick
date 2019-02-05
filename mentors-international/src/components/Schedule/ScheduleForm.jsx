import React from "react";
import DatePicker from "react-datepicker";

const ScheduleForm = props => {
  return (
    <form>
      <h3>Schedule Title</h3>
      <input type="text" />
      <h3>Date</h3>
      <DatePicker
        selected={props.startDate}
        onChange={props.handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
      />
      <h3>Remind me:</h3>
      <button onClick={props.toggle}>
        {props.justOnce ? "Just Once" : "Every Week"}
      </button>
    </form>
  );
};

export default ScheduleForm;
