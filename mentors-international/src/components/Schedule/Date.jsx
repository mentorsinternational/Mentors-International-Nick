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

  & h4 {
    margin: 0px;
  }
`;

const RemindDiv = styled.div`
  display: flex;
  & p {
    margin: 0 5px 3px 0;
  }
`;

const Date = props => {
  return (
    <DateWrapper onClick={e => props.removeDate(e, props.index)}>
      <h4>{props.date.date}</h4>
      <RemindDiv>
        <p>Remind me</p>
        <button>Toggle</button>
      </RemindDiv>
    </DateWrapper>
  );
};

export default Date;
