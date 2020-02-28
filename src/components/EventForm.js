import React, { Component } from "react";

export default class EventForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <p>
            Name of the Event:
            <input
              name="name"
              type="text"
              value={this.props.value.name}
              onChange={this.props.onChange}
            />{" "}
          </p>
          <p>
            Date of the Event:
            <input
              name="date"
              type="date"
              onChange={this.props.onChange}
            />{" "}
          </p>
          <p>
            Description of the Event:
            <textarea
              name="description"
              type="text"
              value={this.props.value.description}
              onChange={this.props.onChange}
            />{" "}
          </p>
          <button type="submit">Add Event</button>
        </form>
      </div>
    );
  }
}
