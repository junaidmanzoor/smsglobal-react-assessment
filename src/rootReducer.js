import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import notesReducer from "./notes/reducers"
import sendMessageReducer from './sendmessage/reducers'

export default combineReducers({
  routing: routerReducer,
  notesReducer,
  sendMessageReducer
})