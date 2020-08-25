import { connect } from "react-redux";
import { setNewTransaction } from "../../reducers/transactionsRedux";
import NewTransactionForm from "./NewTransactionForm";

export const mapDispatchToProps = (dispatch) => ({
  setNewTransaction: (transaction) => dispatch(setNewTransaction(transaction)),
});

export default connect(null, mapDispatchToProps)(NewTransactionForm);
