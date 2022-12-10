import React, { Component } from "react";
class Email extends Component {
  render() {
    return (
      <div className="Email">
        <p>{this.props.email}</p>
      </div>
    );
  }
}
export default Email;
