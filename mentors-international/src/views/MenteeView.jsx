import React, { Component } from "react";
import { connect } from "react-redux";

import { createMentee } from "../store/actions";

import MenteeForm from "../components/mentee/MenteeForm";

class MenteeView extends Component {
  state = {
    new_mentee: {
      mentee_name: "",
      phone_number: ""
    }
  };

  handleChange = e => {
    this.setState({
      new_mentee: {
        ...this.state.new_mentee,
        [e.target.name]: e.target.value
      }
    });
  };

  createMentee = e => {
    e.preventDefault();
    this.props.createMentee(this.state.new_mentee);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Mentee View</h1>
        <MenteeForm
          new_mentee={this.state.new_mentee}
          handleChange={this.handleChange}
          createMentee={this.createMentee}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createMentee }
)(MenteeView);
