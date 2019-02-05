import React from "react";

const ScheduleList = props => {
  return (
    <div>
      <h1>Schedules</h1>
      {props.schedules.map((schedule, index) => (
        <h3 key={index}>{schedule.schedule}</h3>
      ))}
    </div>
  );
};

export default ScheduleList;
