import { connect } from "react-redux";
import TransactionList from "./TransactionList";
import { getAllTransactions } from "../../reducers/transactionListRedux";

const mapStateToProps = (state) => {
  return {
    transactions: getAllTransactions(state),
  };
};

export default connect(mapStateToProps, null)(TransactionList);
