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

const MenteeForm = () => {
  return (
    <form>
      <MenteeTitles>Mentee Name</MenteeTitles>
      <MenteeInput type="text" placeholder="Mentee Name..." />
      <MenteeTitles>Mentee Phone Number</MenteeTitles>
      <MenteeInput type="number" placeholder="Mentee Phone Number..." />
    </form>
  );
};

export default MenteeForm;
