import * as actions from "../../constants/actionTypes";
import { noteActions } from "../../constants/actionTypes";

const initialState = {
  loading: true,
  // authChecked: false,
  // loggedIn: false,
  // isAuthenticated: null,
  notes: [],
  error: ``,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case noteActions.FETCH_ALL_NOTES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case noteActions.FETCH_ALL_NOTES_SUCCESS:
      return {
        loading: false,
        notes: action.payload,
        error: "",
      };
    case noteActions.FETCH_ALL_NOTES_FAILURE:
      return {
        loading: false,
        notes: [],
        error: action.payload,
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
