import React, { Component } from "react";
class Address extends Component {
  render() {
    return (
      <div className="Address">
        <p>{this.props.address}</p>
      </div>
    );
  }
}
export default Address;
