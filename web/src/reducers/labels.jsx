import { FETCH_ALL_LABELS, CREATE_LABEL, UPDATE_LABEL } from "../constants/actionTypes";

const labels = (labels = [], action) => {
  switch (action.type) {
    case FETCH_ALL_LABELS:
      return action.payload;
    case CREATE_LABEL:
      return [...labels, action.payload];
    case UPDATE_LABEL:
      return labels.map((label) =>
        label._id === action.payload._id ? action.payload : label
      );
    default:
      return labels;
  }
};
//have a doupt about labels or label should  be used above
export default labels;
