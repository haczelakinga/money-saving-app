import { connect } from "react-redux";
import { setNewTransaction } from "../../reducers/transactionsRedux";
import NewTransactionForm from "./NewTransactionForm";
import { getUserID } from "../../reducers/userRedux";

const mapStateToProps = () => {
  let state = JSON.parse(localStorage.getItem("state"));
  return {
    userID: state.user ? getUserID(state.user) : "",
  };
};

export const mapDispatchToProps = (dispatch) => ({
  setNewTransaction: (transaction) => dispatch(setNewTransaction(transaction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionForm);
