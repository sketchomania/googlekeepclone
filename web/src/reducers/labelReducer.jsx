import * as actions from "../constants/actionTypes";

const initialState = [];

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ALL_LABELS:
      return action.payload;
    case actions.CREATE_LABEL:
      return [...state, action.payload];
    case actions.UPDATE_LABEL:
      return state.map((label) =>
        label._id === action.payload._id ? action.payload : label
      );
    default:
      return state;
  }
};

export default labelReducer;
