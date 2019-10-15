import * as types from "./actionTypes";

export function saveApiKey(apiKey) {
  return { type: types.SAVE_SETTINGS, apiKey };
}
