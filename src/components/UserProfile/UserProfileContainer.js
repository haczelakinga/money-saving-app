import { getUserDetails } from "../../reducers/userRedux";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

const mapStateToProps = () => {
  let state = JSON.parse(localStorage.getItem("state"));

  return {
    user: state.user ? getUserDetails(state.user) : "",
  };
};

export default connect(mapStateToProps, null)(UserProfile);
