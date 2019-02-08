import React from "react";
import styled from "styled-components";

const MenteeInput = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

const MenteeTitles = styled.h3`
  margin: 20px 0 10px 0;
  text-align: left;
`;

const MenteeFormWrapper = styled.form`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

const MenteeFormBtn = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 15px 45px;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30px;
  width: 100%;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: #53b8e8;
  }
`;

const MenteeForm = props => {
  return (
    <MenteeFormWrapper>
      <MenteeTitles>Mentee Name</MenteeTitles>
      <MenteeInput
        type="text"
        placeholder="Mentee Name..."
        name="mentee_name"
        value={props.new_mentee.mentee_name}
        onChange={props.handleChange}
      />
      <MenteeTitles>Mentee Phone Number</MenteeTitles>
      <MenteeInput
        type="number"
        placeholder="Mentee Phone Number..."
        name="phone_number"
        value={props.new_mentee.phone_number}
        onChange={props.handleChange}
      />
      {props.isUpdating ? (
        <MenteeFormBtn
          onClick={e => props.updateMentee(e, props.updateMenteeId)}
        >
          Update Mentee
        </MenteeFormBtn>
      ) : (
        <MenteeFormBtn onClick={props.createMentee}>Add Mentee</MenteeFormBtn>
      )}
    </MenteeFormWrapper>
  );
};

export default MenteeForm;
