import React from "react";
import styled from "styled-components";

const MenteeListPopupWrapper = styled.div`
  background: white;
  text-align: center;
  display: ${props => (props.showPopup ? "block" : "none")};
`;

const MenteePULLabel = styled.h3`
  margin: 0;
  padding: 5px 0 8px 0;
  font-weight: normal;
  cursor: pointer;
  border-bottom: 1px solid lightgray;

  &:hover {
    font-weight: bold;
  }
`;

const MenteeListPopup = props => {
  return (
    <MenteeListPopupWrapper showPopup={props.showPopup}>
      {props.mentees.map(mentee => (
        <MenteePULLabel
          key={mentee.id}
          onClick={e => props.addMentee(e, mentee)}
        >
          {mentee.mentee_name}
        </MenteePULLabel>
      ))}
    </MenteeListPopupWrapper>
  );
};

export default MenteeListPopup;
