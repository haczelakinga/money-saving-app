import { connect } from 'react-redux';
import {setNewTransaction} from '../../reducers/newTransactionRedux';
import NewTransactionForm from "./NewTransactionForm";

// const mapStateToProps = state => {
//     return {
//         transactions: getAllTransactions(state),
//     };
// };

export const mapDispatchToProps = (dispatch) => ({
    setNewTransaction: transaction => (
        dispatch(setNewTransaction(transaction))
    ),
});

export default connect(null, mapDispatchToProps)(NewTransactionForm);