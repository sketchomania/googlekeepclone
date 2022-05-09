import { authActions } from "../../constants/actionTypes";

const initialState = {
  authChecked: false,
  loggedIn: false,
  isAuthenticated: null,
  currentUser: {},
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      };
    case authActions.NOT_AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: false,
        currentUser: {},
      };
    default:
      return state;
  }
};

export default authReducer;
