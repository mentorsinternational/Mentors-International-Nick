import React from "react";

import Mentee from "./Mentee";

const MenteeList = props => {
  return (
    <div>
      <h1>Mentees</h1>
      {props.mentees.map(mentee => (
        <Mentee
          key={mentee.id}
          mentee={mentee}
          deleteMentee={props.deleteMentee}
        />
      ))}
    </div>
  );
};

export default MenteeList;
