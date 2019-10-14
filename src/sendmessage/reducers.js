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

// function filterArrayByValue(arr, value) {
//   return arr.filter(item => {
//     return item.id !== value;
//   });
// }

export default sendMessageReducer;
