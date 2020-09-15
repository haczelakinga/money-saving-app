import { getUserDetails, getUserID } from "../../reducers/userRedux";
import {
  getAllIncomes,
  getAllOutcomes,
} from "../../reducers/transactionsRedux";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

const mapStateToProps = () => {
  let state = JSON.parse(localStorage.getItem("state"));
  let userID = state.user ? getUserID(state.user) : "";
  return {
    user: state.user ? getUserDetails(state.user) : "",
    incomes: state.transactions
      ? getAllIncomes(state.transactions, userID)
      : [],
    outcomes: state.transactions
      ? getAllOutcomes(state.transactions, userID)
      : [],
  };
};

export default connect(mapStateToProps, null)(UserProfile);
