import transactionRedux from "./transactionsRedux";
import userRedux from "./userRedux";
import { combineReducers, createStore } from "redux";
import { loadState, saveState } from "../LocalStorage/LocalStorage";

const persistedState = loadState();

export const allReducers = combineReducers({
  transactions: transactionRedux,
  user: userRedux,
});

export let myStore = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
myStore.subscribe(() => {
  saveState(myStore.getState());
});
