import React, { Component } from "react";
import { connect } from "react-redux";

import { createMentee, updateMentee, fetchMentees } from "../store/actions";

import MenteeForm from "../components/mentee/MenteeForm";

class MenteeView extends Component {
  state = {
    new_mentee: {
      mentee_name: "",
      phone_number: ""
    }
  };

  componentDidMount() {
    if (this.props.isUpdating && this.props.mentees.length > 0) {
      const thisMentee = this.props.mentees.find(mentee => {
        console.log(mentee.id, this.props.match.params.mID);
        return String(mentee.id) === this.props.match.params.mID;
      });
      this.setState({
        new_mentee: {
          mentee_name: thisMentee.mentee_name,
          phone_number: thisMentee.phone_number
        },
        updateMenteeId: thisMentee.id
      });
    }
  }

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

  updateMentee = (e, id) => {
    e.preventDefault();
    this.props.updateMentee(id, this.state.new_mentee);
  };

  render() {
    return (
      <div>
        <h1>Mentee View</h1>
        <MenteeForm
          new_mentee={this.state.new_mentee}
          handleChange={this.handleChange}
          createMentee={this.createMentee}
          isUpdating={this.props.isUpdating}
          thisMentee={this.props.thisMentee}
          updateMentee={this.updateMentee}
          updateMenteeId={this.state.updateMenteeId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mentees: state.mentees
  };
};

export default connect(
  mapStateToProps,
  { createMentee, updateMentee, fetchMentees }
)(MenteeView);
