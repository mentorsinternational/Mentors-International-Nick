import React from "react";

const MenteeList = props => {
  return (
    <div>
      <h1>Mentees</h1>
      {props.schedules.map((schedule, index) => (
        <h3 key={index}>{schedule.schedule}</h3>
      ))}
    </div>
  );
};

export default MenteeList;
