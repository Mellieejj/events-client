const initialState = null;

export default function eventsReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "EVENTS_FETCHED":
      return action.payload;
    default: {
      return state;
    }
  }
}
