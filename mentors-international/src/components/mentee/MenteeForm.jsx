import React from "react";
import styled from "styled-components";

const MenteeInput = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 5px;
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
  margin-top: 10px;
  width: 100%;
`;

const MenteeForm = props => {
  return (
    <MenteeFormWrapper onSubmit={props.createMentee}>
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
      <MenteeFormBtn>Add Mentee</MenteeFormBtn>
    </MenteeFormWrapper>
  );
};

export default MenteeForm;
