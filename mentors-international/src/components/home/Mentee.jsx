import React from "react";
import styled from "styled-components";

const MenteeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => !props.lastMentee && "1px dashed gray"};

  & button {
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: #62cdff;
  cursor: pointer;
`;

const Mentee = props => {
  return (
    <MenteeWrapper lastMentee={props.lastMentee}>
      <h3>{props.mentee.mentee_name}</h3>
      <div>
        <DeleteButton onClick={e => props.deleteMentee(e, props.mentee.id)}>
          Delete
        </DeleteButton>
        <EditButton onClick={e => props.editMentee(e, props.mentee.id)}>
          Edit
        </EditButton>
      </div>
    </MenteeWrapper>
  );
};

export default Mentee;
