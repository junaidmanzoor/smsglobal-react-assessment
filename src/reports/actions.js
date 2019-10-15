import * as types from "./actionTypes";
import * as smsApi from "../api/smsApi";

export function fetchMessages(settings) {
  return async dispatch => {
    dispatch({
      type: types.FETCH_MESSAGES_REQUEST
    });
    smsApi.fetchMessages(settings).then(
      response => {
        if (!response.ok) {
          dispatch({
            type: types.FETCH_MESSAGES_FAILURE
          });
        }
        response.json().then(result =>
          dispatch({
            type: types.FETCH_MESSAGES_SUCCESS,
            payload: result
          })
        );
      },
      error =>
        dispatch({
          type: types.FETCH_MESSAGES_FAILURE
        })
    );
  };
}
