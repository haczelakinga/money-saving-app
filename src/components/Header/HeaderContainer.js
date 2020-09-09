import { getUserStatus } from "../../reducers/userRedux";
import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = () => {
  let state = JSON.parse(localStorage.getItem("state"));

  return {
    userStatus: state.user ? getUserStatus(state.user) : false,
  };
};

export default connect(mapStateToProps, null)(Header);
