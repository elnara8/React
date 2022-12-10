import React, { Component } from "react";
class PersonalInfo extends Component {
  render() {
    return (
      <div className="PersonalInfo">
        <p>{this.props.personalInfo}</p>
      </div>
    );
  }
}
export default PersonalInfo;
