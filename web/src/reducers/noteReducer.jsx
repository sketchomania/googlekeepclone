import * as actions from "../constants/actionTypes";

const initialState = [];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
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
