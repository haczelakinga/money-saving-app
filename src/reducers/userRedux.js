export const getUserDetails = (user) => user;
export const getUserStatus = (user) => user.loginStatus;

// action name creator
const reducerName = "user";
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const SET_USER = createActionName("SET_USER");
export const LOG_OUT_USER = createActionName("LOG_OUT_USER");

// action creators
export const setUserDetails = (payload) => ({
  payload,
  type: SET_USER,
});

export const logOutUser = (payload) => ({
  payload,
  type: LOG_OUT_USER,
});

//reducers
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...action.payload };

    case LOG_OUT_USER:
      localStorage.removeItem("user");
      return { ...action.payload };

    default: {
      return state;
    }
  }
}
