import React from "react";
import styled from "styled-components";

const MenteeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${props => !props.lastMentee && "1px dashed gray"};

  & button {
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;

const Mentee = props => {
  return (
    <MenteeWrapper lastMentee={props.lastMentee}>
      <h3>{props.mentee.mentee_name}</h3>
      <button onClick={e => props.deleteMentee(e, props.mentee.id)}>
        Delete
      </button>
      <button onClick={e => props.editMentee(e, props.mentee.id)}>Edit</button>
    </MenteeWrapper>
  );
};

export default Mentee;
