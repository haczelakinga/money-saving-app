import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import { getLoginStatus } from "../../reducers/userRedux";

const mapStateToProps = (state) => {
  return {
    loginStatus: getLoginStatus(state),
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
