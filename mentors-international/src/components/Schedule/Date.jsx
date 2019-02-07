import React from "react";
import styled from "styled-components";

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: white;
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;

  & h4 {
    margin: 0px;
  }
`;

const RemindDiv = styled.div`
  display: flex;
  margin-right: 20px;

  & p {
    margin: 0 5px 3px 0;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
`;

const ToggleBtn = styled.button`
  /* border: 2px solid #62cdff; */
  background: none;
  background: #62cdff;
  border: none;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const PresentFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Date = props => {
  return (
    <DateWrapper>
      <h4>{props.date.date}</h4>
      <PresentFlexDiv>
        <RemindDiv>
          <p>Remind me</p>
          <ToggleBtn onClick={e => props.toggleDateReminder(e, props.index)}>
            {props.date.every_week ? "Every Week" : "Just Once"}
          </ToggleBtn>
        </RemindDiv>
        <DeleteButton onClick={e => props.removeDate(e, props.index)}>
          Delete
        </DeleteButton>
      </PresentFlexDiv>
    </DateWrapper>
  );
};

export default Date;
