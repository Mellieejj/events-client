import React, { Component } from "react";
import { connect } from "react-redux";
import EventDetails from "./EventsDetails";
import { loadEvent, updateEvent, deleteEvent } from "../actions/events";

class EventsDetailsContainer extends Component {
  componentDidMount() {
    console.log("details container", this.props.match.params);

    this.props.loadEvent(Number(this.props.match.params.id));
  }

  render() {
    return <EventDetails event={this.props.event} />;
  }
}

const mapStateToProps = state => ({
  event: state.events
});

export default connect(mapStateToProps, { loadEvent })(EventsDetailsContainer);
