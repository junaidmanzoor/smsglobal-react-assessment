import * as types from "./actionTypes";

function settingsReducer(state = { apiKeys: [] }, action) {
  switch (action.type) {
    case types.SAVE_SETTINGS:
      return { ...state, apiKeys: [...state.apiKeys, action.apiKey] };
    default:
      return state;
  }
}

export default settingsReducer;
