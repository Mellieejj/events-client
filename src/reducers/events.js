const initialState = null;

export default function eventsReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "EVENTS_FETCHED":
      return action.payload;
    case "EVENT_CREATE_SUCCESS":
      return [...state, action.payload];
    case "EVENT_FETCHED":
      return action.payload;
    default: {
      return state;
    }
  }
}
