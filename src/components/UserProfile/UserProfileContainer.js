import { getUserDetails } from "../../reducers/userRedux";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

const mapStateToProps = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return {
    user: user ? getUserDetails(user) : "",
  };
};

export default connect(mapStateToProps, null)(UserProfile);
