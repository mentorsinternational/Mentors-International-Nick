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

const MenteeForm = props => {
  return (
    <form onSubmit={props.createMentee}>
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
      <button>Add Mentee</button>
    </form>
  );
};

export default MenteeForm;
