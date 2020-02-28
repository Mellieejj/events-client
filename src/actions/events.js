import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";

const baseUrl = "http://localhost:4000";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
});

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return;
  request(`${baseUrl}/event`)
    .then(response => {
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};
