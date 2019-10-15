import * as types from "./actionTypes";
import * as smsApi from "../api/smsApi";

export function sendMessage(payload, settings) {
  const { origin, destination, message } = payload;
  const messages = [];
  const splits = message.match(/.{1,160}/g);
  splits.forEach(s => {
    messages.push({
      origin,
      destination,
      message: s
    });
  });

  return dispatch => {
    dispatch({
      type: types.SEND_MESSAGE_REQUEST
    });
    smsApi.sendMessage({ messages }, settings).then(
      response => {
        if (!response.ok) {
          dispatch({
            type: types.SEND_MESSAGE_FAILURE
          });
        }
        dispatch({
          type: types.SEND_MESSAGE_SUCCESS,
          payload: response.json()
        });
      },
      error =>
        dispatch({
          type: types.SEND_MESSAGE_FAILURE
        })
    );
  };
}
