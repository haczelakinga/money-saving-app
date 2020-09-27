import { connect } from "react-redux";
import SpendsByCategoryChart from "./SpendsByCategoryChart";
import { getAllTransactions } from "../../../reducers/transactionsRedux";
import { getUserID } from "../../../reducers/userRedux";

const mapStateToProps = () => {
  let state = JSON.parse(localStorage.getItem("state"));
  let userID = state.user ? getUserID(state.user) : "";
  return {
    transactions: state.transactions
      ? getAllTransactions(state.transactions, userID)
      : [],
  };
};

export default connect(mapStateToProps, null)(SpendsByCategoryChart);
