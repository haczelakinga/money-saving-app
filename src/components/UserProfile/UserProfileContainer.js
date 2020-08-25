import { getUserDetails } from "../../reducers/userRedux";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

const mapStateToProps = (state) => {
  return {
    user: getUserDetails(state),
  };
};

export default connect(mapStateToProps, null)(UserProfile);
