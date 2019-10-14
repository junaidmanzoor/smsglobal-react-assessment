import * as types from "./actionTypes";
import * as smsApi from "../api/smsApi";

const MESSAGE_CHAR_LIMIT = 160;

export function sendMessage(payload, settings) {
  const { origin, destination, message } = payload;
  const messages = [];
  const splits = message.match(/.{1,MESSAGE_CHAR_LIMIT}/g);
  splits.forEach(s => {
    messages.push({
      origin,
      destination,
      message: s
    });
  });

  return dispatch => {
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
