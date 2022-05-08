import * as actions from "../../constants/actionTypes";

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
    case actions.FETCH_ALL_NOTES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_ALL_NOTES_SUCCESS:
      return {
        loading: false,
        notes: action.payload,
        error: "",
      };
    case actions.FETCH_ALL_NOTES_FAILURE:
      return {
        loading: false,
        notes: [],
        error: action.payload,
      };
    case actions.FETCH_ALL_NOTES:
      return action.payload;
    case actions.CREATE_NOTE:
      return [...state, action.payload];
    case actions.UPDATE_NOTE:
      return state.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    default:
      return state;
  }
};

export default noteReducer;
