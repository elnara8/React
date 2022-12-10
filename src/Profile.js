import React, { Component } from "react";
import Name from "./Name";
import Email from "./Email";
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";
class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <Name name="Name: Elnara Gasimova" />
        <Address address="Address: Azerbaijan - Baku" />
        <Email email="Email: gsmva.elnara@gmail.com" />
        <PersonalInfo personalInfo="Personal Info: I am 19 years old.I do not have any experience" />
      </div>
    );
  }
}
export default Profile;
