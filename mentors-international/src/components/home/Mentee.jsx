import React from "react";
import styled from "styled-components";

const MenteeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;

const Mentee = props => {
  return (
    <MenteeWrapper>
      <h3>{props.mentee.mentee_name}</h3>
      <button onClick={e => props.deleteMentee(e, props.mentee.id)}>
        Delete
      </button>
    </MenteeWrapper>
  );
};

export default Mentee;
