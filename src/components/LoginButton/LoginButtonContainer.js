import { getUserStatus, logOutUser } from "../../reducers/userRedux";
import { connect } from "react-redux";
import LoginButton from "./LoginButton";

const mapStateToProps = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return {
    userStatus: user ? getUserStatus(user) : false,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
