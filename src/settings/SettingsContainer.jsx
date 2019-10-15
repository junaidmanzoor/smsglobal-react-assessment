import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Settings from "./Settings";
import * as actions from "./actions";

function mapStateToProps(state) {
  return {
    ...state.settingsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actions, dispatch)
  };
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
export default SettingsContainer;
