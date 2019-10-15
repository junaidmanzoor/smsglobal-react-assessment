import * as types from "./actionTypes";

function sendMessageReducer(state = {}, action) {
  switch (action.type) {
    case types.SEND_MESSAGE_REQUEST:
      return { ...state };
    case types.SEND_MESSAGE_SUCCESS:
      return { ...state };
    case types.SEND_MESSAGE_FAILURE:
      return { ...state };
    default:
      return state;
  }
}

export default sendMessageReducer;
