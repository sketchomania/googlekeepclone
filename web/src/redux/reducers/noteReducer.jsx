import { noteActions } from "../../constants/actionTypes";

const initialState = {
  isLoading: true,
  notes: [],
  isError: ``,
};

const noteReducer = (state = initialState, action) => {
  console.log("logging actions at noteReducer: ", action);
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
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case noteActions.CREATE_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case noteActions.UPDATE_NOTE:
      // state.notes.map ??
      return state.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    case noteActions.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer;
