// import * as actions from "../../constants/actionTypes";
import { labelActions } from "../../constants/actionTypes";

const initialState = {
  isLoading: true,
  // authChecked: false,
  // loggedIn: false,
  // isAuthenticated: null,
  labels: [],
  isError: ``,
};

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case labelActions.FETCH_ALL_LABELS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case labelActions.FETCH_ALL_LABELS_SUCCESS:
      return {
        isLoading: false,
        labels: action.payload,
        isError: "",
      };
    case labelActions.FETCH_ALL_LABELS_FAILURE:
      return {
        isLoading: false,
        labels: [],
        isError: action.payload,
      };
    case labelActions.FETCH_ALL_LABELS:
      return action.payload;
    case labelActions.CREATE_LABEL:
      return [...state, action.payload];
    case labelActions.UPDATE_LABEL:
      return state.map((label) =>
        label._id === action.payload._id ? action.payload : label
      );
    default:
      return state;
  }
};

export default labelReducer;
