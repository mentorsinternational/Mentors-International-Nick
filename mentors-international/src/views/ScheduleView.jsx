import React, { Component } from "react";

import ScheduleForm from "../components/Schedule/ScheduleForm";
import moment from "moment";
import { th } from "date-fns/esm/locale";

console.log(moment().format("dddd"));
class ScheduleView extends Component {
  state = {
    startDate: new Date()
  };

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        <h1>Schedule View</h1>
        <ScheduleForm
          startDate={this.state.startDate}
          handleDateChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default ScheduleView;
