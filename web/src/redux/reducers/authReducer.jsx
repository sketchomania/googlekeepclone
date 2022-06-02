import { authActions } from "../../constants/actionTypes";

const initialState = {
  isLoading: true,
  isAuthenticated: null,
  authChecked: false,
  isLoggedIn: false,
  user: null,
  // token: null,
  token: localStorage.getItem("token"),
  error: ``,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.AUTH_REQUEST:
    case authActions.LOGIN_REQUEST:
    case authActions.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case authActions.REGISTER_SUCCESS:
    case authActions.LOGIN_SUCCESS:
    case authActions.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        authChecked: true,
        isLoggedIn: true,
        user: action.payload,
        token: action.payload.login.token,
        error: action.payload.errors,
      };
    // get token form locastorage as mention in initialState obeject, rather than getting token form the payload data
    case authActions.REGISTER_FAILURE:
    case authActions.LOGIN_FAILURE:
    case authActions.AUTH_FAILURE:
    case authActions.LOGOUT_SUCCESS:
      // localStorage.removeItem("token");
      // don't need here couse we are deleting token in authActions
      return {
        isLoading: false,
        isAuthenticated: false,
        authChecked: true,
        isLoggedIn: false,
        user: null,
        token: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
