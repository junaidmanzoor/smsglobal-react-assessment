import * as types from "./actionTypes";

function settingsReducer(state = { apiKeys: [] }, action) {
  switch (action.type) {
    case types.SAVE_SETTINGS:
      return { ...state, apiKeys: [...state.apiKeys, action.apiKey] };
    case types.DELETE_SETTINGS: {
      const arr = [...state.apiKeys];
      arr.splice(action.key, 1);
      return { ...state, apiKeys: arr };
    }
    default:
      return state;
  }
}

export default settingsReducer;
