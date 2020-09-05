import { getUserStatus } from "../../reducers/userRedux";
import { connect } from "react-redux";
import LoginButton from "./LoginButton";

const mapStateToProps = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return {
    userStatus: user ? getUserStatus(user) : false,
  };
};

export default connect(mapStateToProps, null)(LoginButton);
