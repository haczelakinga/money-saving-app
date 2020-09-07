import { connect } from "react-redux";
import TransactionList from "./TransactionList";
import {
  getAllTransactions,
  deleteTransaction,
  editTransaction,
} from "../../reducers/transactionsRedux";
import { getUserID } from "../../reducers/userRedux";

const mapStateToProps = () => {
  let state = JSON.parse(localStorage.getItem("state"));
  let userID = state.user ? getUserID(state.user) : "";
  return {
    transactions: state.transactions
      ? getAllTransactions(state.transactions, userID)
      : [],
  };
};

export const mapDispatchToProps = (dispatch) => ({
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  editTransaction: (info) => dispatch(editTransaction(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
