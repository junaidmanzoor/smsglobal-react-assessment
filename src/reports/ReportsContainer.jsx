import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Reports from "./Reports";
import * as actions from "./actions";

function mapStateToProps(state) {
  return {
    ...state.reportsReducer,
    ...state.settingsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actions, dispatch)
  };
}

const ReportsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
export default ReportsContainer;
