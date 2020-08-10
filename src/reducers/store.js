import newTransactionRedux from './newTransactionRedux';
// import transactionListRedux from './transactionListRedux';
import {combineReducers, createStore} from "redux";


export const allReducers = combineReducers({
    transactions: newTransactionRedux,
    // transactionsList: transactionListRedux
});

const initialState = {
    transactions: [
        {
            name: 'DEFAULT',
            amount: 30,
            date: '2020-02-02',
            category: 'fas fa-lightbulb-on'
        }
    ]
}

export let myStore = createStore(
    allReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

