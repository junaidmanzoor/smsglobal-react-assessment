import * as types from "./actionTypes";

function reportsReducer(state = { messages: [] }, action) {
  switch (action.type) {
    case types.FETCH_MESSAGES_REQUEST:
      return { ...state };
    case types.FETCH_MESSAGES_SUCCESS:
      return { ...state, ...action.payload };
    case types.FETCH_MESSAGES_FAILURE:
      return { ...state };
    default:
      return state;
  }
}

export default reportsReducer;
