import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchMessages } from "../store/actions";

import MessageList from "../components/home/MessageList";
import ScheduleList from "../components/home/ScheduleList";

const AddMessageBtn = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 15px 45px;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

class HomeView extends Component {
  componentDidMount() {
    this.props.fetchMessages(1);
  }

  render() {
    return (
      <div>
        <MessageList messages={this.props.messages} />
        <ScheduleList schedules={this.props.schedules} />
        <Link to="/message">
          <AddMessageBtn>+ Message</AddMessageBtn>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    schedules: state.schedules
  };
};

export default connect(
  mapStateToProps,
  { fetchMessages }
)(HomeView);
