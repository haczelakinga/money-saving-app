import { connect } from "react-redux";
import TransactionList from "./TransactionList";
import {
  getAllTransactions,
  deleteTransaction,
  editTransaction,
} from "../../reducers/newTransactionRedux";

const mapStateToProps = (state) => {
  return {
    transactions: getAllTransactions(state),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  editTransaction: (info) => dispatch(editTransaction(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
