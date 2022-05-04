import * as actions from "../constants/actionTypes";

// const initialState = [];
// state = initialState
const labelReducer = (state = [], action) => {
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
//have a doupt about labels or label should  be used above
export default labelReducer;
