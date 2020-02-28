import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_FETCHED = "EVENT_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";

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

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  payload: event
});

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

const eventFetched = event => {
  console.log(event);
  return {
    type: EVENT_FETCHED,
    payload: event
  };
};

export const loadEvent = id => dispatch => {
  request
    .get(`${baseUrl}/event/${id}`)
    .send(id)
    .then(response => {
      console.log("loadEvent", response);
      dispatch(eventFetched(response.body));
    })
    .catch(console.error);
};
