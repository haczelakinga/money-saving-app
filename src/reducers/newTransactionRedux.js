export const getAllTransactions = ({ transactions }) => {
  return transactions.sort(function (a, b) {
    let dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });
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
  switch (action.type) {
    case SET_NEW_TRANSACTION:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case DELETE_TRANSACTION:
      return state.filter((transaction) => transaction.uuid !== action.payload);

    case EDIT_TRANSACTION:
      const key = action.payload.name;

      return state.map((transaction) => {
        if (transaction.uuid !== action.payload.uuid) {
          return transaction;
        }
        return {
          ...transaction,
          [key]: action.payload.value,
        };
      });

    default:
      return state;
  }
}
