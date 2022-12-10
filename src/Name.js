import React, { Component } from "react";
class Name extends Component {
  render() {
    return (
      <div className="Name">
        <p>{this.props.name}</p>
      </div>
    );
  }
}
export default Name;
