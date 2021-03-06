import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Mentee from "./Mentee";

const MenteeListWrapper = styled.div`
  width: 45%;
  background: white;
  border-radius: 4px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & .present-div {
    width: 100%;
  }

  & h1 {
    margin-top: 0;
  }
`;

const AddMenteeBtn = styled.button`
  background: none;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 15px 45px;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s ease;

  &:hover {
    background: #53b8e8;
  }
`;

const MenteeList = props => {
  return (
    <MenteeListWrapper>
      <div className="present-div">
        <h1>Mentees</h1>
        {props.mentees.map((mentee, index) => (
          <Mentee
            key={mentee.id}
            mentee={mentee}
            deleteMentee={props.deleteMentee}
            lastMentee={index === props.mentees.length - 1}
            editMentee={props.editMentee}
          />
        ))}
      </div>
      <Link to="/mentees">
        <AddMenteeBtn>Add Mentee</AddMenteeBtn>
      </Link>
    </MenteeListWrapper>
  );
};

export default MenteeList;
