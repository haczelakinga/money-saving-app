import newTransaction from './newTransactionRedux';
import {combineReducers, createStore} from "redux";

export const allReducers = combineReducers({
    transactions: newTransaction
});

const initialState = {
    transactions: []
}

export let myStore = createStore(
    allReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

