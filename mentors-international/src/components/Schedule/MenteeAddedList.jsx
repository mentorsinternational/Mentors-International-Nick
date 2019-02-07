import React from "react";

const MenteeAddedList = props => {
  return (
    <div>
      {props.added_mentees.map((mentee, index) => (
        <h3 key={index} onClick={e => props.removeMentee(e, mentee.id)}>
          {mentee.mentee_name}
        </h3>
      ))}
    </div>
  );
};

export default MenteeAddedList;
