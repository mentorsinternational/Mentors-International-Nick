import React, { Component } from "react";

import ScheduleForm from "../components/Schedule/ScheduleForm";
import moment from "moment";

console.log(moment().format("dddd"));
class ScheduleView extends Component {
  state = {
    startDate: new Date(),
    justOnce: true
  };

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  toggle = e => {
    e.preventDefault();
    this.setState({
      justOnce: !this.state.justOnce
    });
  };

  render() {
    return (
      <div>
        <h1>Schedule View</h1>
        <ScheduleForm
          startDate={this.state.startDate}
          handleDateChange={this.handleDateChange}
          justOnce={this.state.justOnce}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

export default ScheduleView;
