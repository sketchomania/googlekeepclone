import { authActions } from "../../constants/actionTypes";
import { getToken } from "../actions/authActions";

// const token = localStorage.getItem("token");
const token = getToken();

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  token: token ? token : null,
  isError: ``,
};

const authReducer = (state = initialState, action) => {
  // console.log("logging actions at authReducer: ", action);
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
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case authActions.REGISTER_FAILURE:
    case authActions.LOGIN_FAILURE:
    case authActions.AUTH_FAILURE:
    case authActions.LOGOUT_SUCCESS:
      return {
        isLoading: false,
        isLoggedIn: false,
        user: null,
        token: null,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
