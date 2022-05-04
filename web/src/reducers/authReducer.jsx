import * as actions from "../constants/actionTypes";

const initialState = {
  isAuthenticated: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_SUCCESS:
      return action.payload;
    case actions.AUTH_FAIL:
      return action.payload;
    default:
      return initialState;
  }
};

export default authReducer;
