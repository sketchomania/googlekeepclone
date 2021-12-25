import { FETCH_ALL_LABELS, CREATE_LABEL, UPDATE_LABEL } from "../constants/actionTypes";

const labels = (labels = [], action) => {
  switch (action.type) {
    case FETCH_ALL_LABELS:
      return action.payload;
    case CREATE_LABEL:
      return [...labels, action.payload];
    default:
      return labels;
  }
};

export default labels;
