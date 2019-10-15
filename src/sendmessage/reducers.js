import * as types from "./actionTypes";

function sendMessageReducer(state = { sendingMessage: false }, action) {
  switch (action.type) {
    case types.SEND_MESSAGE_REQUEST:
      return { ...state, sendingMessage: true };
    case types.SEND_MESSAGE_SUCCESS:
      return { ...state, sendingMessage: false };
    case types.SEND_MESSAGE_FAILURE:
      return { ...state, sendingMessage: false };
    default:
      return state;
  }
}

export default sendMessageReducer;
