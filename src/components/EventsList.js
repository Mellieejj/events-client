import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventsList extends Component {
  render() {
    if (this.props.events) {
      const events = this.props.events.map(event => (
        <li>
          <Link to={`/event/${event.id}`}>{event.name}</Link>
        </li>
      ));
      return <ul>{events}</ul>;
    } else {
      return <p>Loading.....</p>;
    }
  }
}
