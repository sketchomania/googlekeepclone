import { authActions } from "../../constants/actionTypes";

const initialState = {
  loading: true,
  authChecked: false,
  isAuthenticated: null,
  loggedIn: false,
  user: null,
  currentUser: {},
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
    case authActions.AUTHENTICATED:
      return {
        loading: true,
        authChecked: true,
        isAuthenticated: true,
        loggedIn: true,
        currentUser: action.payload,
        user: action.payload,
      };
    case authActions.REGISTER_FAILURE:
    case authActions.LOGIN_FAILURE:
    case authActions.AUTH_FAILURE:
    case authActions.NOT_AUTHENTICATED:
      return {
        loading: false,
        authChecked: true,
        isAuthenticated: false,
        loggedIn: false,
        currentUser: {},
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
