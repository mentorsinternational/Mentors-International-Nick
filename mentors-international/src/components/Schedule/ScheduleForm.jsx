import React from "react";
import DatePicker from "react-datepicker";

import ScheduleMessageListPopUp from "./ScheduleMessageListPopUp";
import ScheduleAddedMessages from "./ScheduleAddedMessages";

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
      <h3>Add Messages to Remider</h3>
      <ScheduleAddedMessages
        removeMessage={props.removeMessage}
        addedMessages={props.addedMessages}
      />
      <ScheduleMessageListPopUp
        messages={props.messages}
        toggleML={props.toggleML}
        addMessage={props.addMessage}
      />
    </form>
  );
};

export default ScheduleForm;
