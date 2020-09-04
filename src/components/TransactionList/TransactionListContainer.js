import { connect } from "react-redux";
import TransactionList from "./TransactionList";
import {
  getAllTransactions,
  deleteTransaction,
  editTransaction,
} from "../../reducers/transactionsRedux";

const mapStateToProps = (state) => {
  let transactions = JSON.parse(localStorage.getItem("transactions"));
  console.log("transakcje", transactions);
  return {
    transactions: getAllTransactions(transactions),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  editTransaction: (info) => dispatch(editTransaction(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
