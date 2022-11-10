// import * as actions from "../../constants/actionTypes";
import { noteActions } from "../../constants/actionTypes";

const initialState = {
  isLoading: true,
  // authChecked: false,
  // loggedIn: false,
  // isAuthenticated: null,
  notes: [],
  isError: ``,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case noteActions.FETCH_ALL_NOTES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case noteActions.FETCH_ALL_NOTES_SUCCESS:
      return {
        isLoading: false,
        notes: action.payload,
        isError: "",
      };
    case noteActions.FETCH_ALL_NOTES_FAILURE:
      return {
        isLoading: false,
        notes: [],
        isError: action.payload,
      };
    case noteActions.FETCH_ALL_NOTES:
      return action.payload;
    case noteActions.CREATE_NOTE:
      return [...state, action.payload];
    case noteActions.UPDATE_NOTE:
      return state.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    default:
      return state;
  }
};

export default noteReducer;
