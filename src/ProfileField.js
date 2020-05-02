import React, { Component } from "react";
import "./userProfile.css";

class ProfileField extends Component {
  render() {
    if (this.props.isEditing) {
      return (
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      );
    }

    return <div>{this.props.value}</div>;
  }
}

export default ProfileField;
