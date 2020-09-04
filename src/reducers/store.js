import transactionRedux from "./transactionsRedux";
import userRedux from "./userRedux";

import { combineReducers, createStore } from "redux";

export const allReducers = combineReducers({
  transactions: transactionRedux,
  user: userRedux,
});

const initialState = {
  // transactions: [
  //   {
  //     uuid: "8787878787",
  //     name: "DEFAULT3",
  //     amount: 30,
  //     date: "2020-02-03",
  //     category: "Bills",
  //     categoryIcon: "fas fa-lightbulb",
  //   },
  //   {
  //     uuid: "8787843378787",
  //     name: "DEFAULT1",
  //     amount: 30,
  //     date: "2020-02-01",
  //     category: "School",
  //     categoryIcon: "fas fa-utensils",
  //   },
  //   {
  //     uuid: "878785668787",
  //     name: "DEFAULT2",
  //     amount: 30,
  //     date: "2020-02-02",
  //     category: "Car",
  //     categoryIcon: "fas fa-car",
  //   },
  // ],
  user: {},
};

export let myStore = createStore(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
