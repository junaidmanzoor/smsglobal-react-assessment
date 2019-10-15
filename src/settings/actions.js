import * as types from "./actionTypes";

export function saveApiKey(apiKey) {
  return { type: types.SAVE_SETTINGS, apiKey };
}

export function deleteApiKey(key) {
  return { type: types.DELETE_SETTINGS, key };
}
