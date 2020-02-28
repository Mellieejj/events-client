import React, { Component } from "react";

export default class EventDetails extends Component {
  render() {
    // console.log(this.props.events);

    if (this.props.event) {
      return (
        <div>
          <h1>{this.props.event.name}</h1>
          <i>Date: {this.props.event.date}</i>
          <p>{this.props.event.description}</p>
        </div>
      );
    } else {
      return <p>Loading.....</p>;
    }
  }
}
