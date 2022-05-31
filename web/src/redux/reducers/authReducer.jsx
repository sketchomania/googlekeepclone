import { authActions } from "../../constants/actionTypes";

const initialState = {
  loading: true,
  authChecked: false,
  isAuthenticated: null,
  isLoggedIn: false,
  user: null,
  token:null,
  error: ``,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.AUTH_REQUEST:
    case authActions.LOGIN_REQUEST:
    case authActions.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authActions.REGISTER_SUCCESS:
    case authActions.LOGIN_SUCCESS:
    case authActions.AUTH_SUCCESS:
      return {
        loading: false,
        authChecked: true,
        isAuthenticated: true,
        isLoggedIn: true,
        user: action.payload,
        token: action.payload.login.token,
        error: action.payload.errors,
      };
    case authActions.REGISTER_FAILURE:
    case authActions.LOGIN_FAILURE:
    case authActions.AUTH_FAILURE:
      return {
        loading: false,
        authChecked: true,
        isAuthenticated: false,
        isLoggedIn: false,
        user: null,
        token:null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
