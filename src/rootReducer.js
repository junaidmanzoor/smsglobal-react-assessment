import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import sendMessageReducer from "./sendmessage/reducers";
import settingsReducer from "./settings/reducers";
import reportsReducer from "./reports/reducers";

export default combineReducers({
  routing: routerReducer,
  sendMessageReducer,
  settingsReducer,
  reportsReducer
});
