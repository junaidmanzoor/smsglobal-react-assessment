import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SendMessage from "./SendMessage";
import * as actions from "./actions";

function mapStateToProps(state) {
  return {
    ...state.sendMessageReducer,
    ...state.settingsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actions, dispatch)
  };
}

const SendMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessage);
export default SendMessageContainer;
