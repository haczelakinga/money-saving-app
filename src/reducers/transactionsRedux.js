export const getAllTransactions = (transactions, userID) => {
  let filtered = transactions.filter(
    (transaction) => transaction.userID === userID
  );

  return filtered.sort(function (a, b) {
    let dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });
};

export const getAllIncomes = (transactions, userId) => {
  let allIncomes = null;
  let usersIncomeTransactions = getAllTransactions(transactions, userId).filter(
    (transaction) => transaction.transactionType === "Income"
  );

  for (let transaction of usersIncomeTransactions) {
    allIncomes += parseFloat(transaction.amount);
  }

  return +(Math.round(allIncomes + "e+2") + "e-2");
};

export const getAllOutcomes = (transactions, userId) => {
  let allOutcomes = null;
  let usersOutcomeTransactions = getAllTransactions(
    transactions,
    userId
  ).filter((transaction) => transaction.transactionType === "Outcome");

  for (let transaction of usersOutcomeTransactions) {
    allOutcomes += parseFloat(transaction.amount);
  }

  return +(Math.round(allOutcomes + "e+2") + "e-2");
};

// action name creator
const reducerName = "newTransaction";
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const SET_NEW_TRANSACTION = createActionName("SET_NEW_TRANSACTION");
export const DELETE_TRANSACTION = createActionName("DELETE_TRANSACTION");
export const EDIT_TRANSACTION = createActionName("EDIT_TRANSACTION");

// action creators
export const setNewTransaction = (payload) => ({
  payload,
  type: SET_NEW_TRANSACTION,
});
export const deleteTransaction = (payload) => ({
  payload,
  type: DELETE_TRANSACTION,
});
export const editTransaction = (payload) => ({
  payload,
  type: EDIT_TRANSACTION,
});

//reducers
export default function reducer(state = [], action = {}) {
  let newState;
  switch (action.type) {
    case SET_NEW_TRANSACTION:
      newState = [
        ...state,
        {
          ...action.payload,
        },
      ];
      return newState;
    case DELETE_TRANSACTION:
      newState = state.filter(
        (transaction) => transaction.uuid !== action.payload
      );
      return newState;

    case EDIT_TRANSACTION:
      const key = action.payload.name;

      newState = state.map((transaction) => {
        if (transaction.uuid !== action.payload.uuid) {
          return transaction;
        }
        return {
          ...transaction,
          [key]: action.payload.value,
        };
      });
      return newState;

    default:
      return state;
  }
}
