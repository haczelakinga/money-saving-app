import { getUserStatus, logOutUser } from "../../reducers/userRedux";
import { connect } from "react-redux";
import LoginButton from "./LoginButton";

const mapStateToProps = () => {
  let state = JSON.parse(localStorage.getItem("state"));

  return {
    userStatus: state.user ? getUserStatus(state.user) : false,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
