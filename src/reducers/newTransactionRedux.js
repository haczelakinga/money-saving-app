// export const getAllTransactions = (state) => console.log('all ', state)

// action name creator
const reducerName = 'newTransaction';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_NEW_TRANSACTION = createActionName('SET_NEW_TRANSACTION');

// action creators
export const setNewTransaction = payload => ({ payload, type: SET_NEW_TRANSACTION });

//reducers
export default function reducer(state = [], action = {}) {
    switch (action.type) {

        case SET_NEW_TRANSACTION:
            console.log('state', state , typeof state);
            return [
                ...state,
                {
                    ...action.payload
                }
            ]



        default:
            return state;
    }
}

