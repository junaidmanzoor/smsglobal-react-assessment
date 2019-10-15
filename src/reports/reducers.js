import * as types from "./actionTypes";

function reportsReducer(state = { messages: [] }, action) {
  switch (action.type) {
    case types.FETCH_MESSAGES_REQUEST:
      return { ...state, fetchingMessages: true };
    case types.FETCH_MESSAGES_SUCCESS:
      return { ...state, ...action.payload, fetchingMessages: false };
    case types.FETCH_MESSAGES_FAILURE:
      return { ...state, fetchingMessages: false };
    default:
      return state;
  }
}

export default reportsReducer;
