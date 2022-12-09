import { labelActions } from "../../constants/actionTypes";

const initialState = {
  isLoading: true,
  labels: [],
  isError: ``,
};

const labelReducer = (state = initialState, action) => {
  // console.log("logging actions at labelReducer: ", action);
  switch (action.type) {
    case labelActions.FETCH_ALL_LABELS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case labelActions.FETCH_ALL_LABELS_SUCCESS:
      return {
        isLoading: false,
        labels: action.payload,
        isError: "",
      };
    case labelActions.FETCH_ALL_LABELS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case labelActions.CREATE_LABEL:
      return {
        ...state,
        labels: [action.payload, ...state.labels],
      };
    case labelActions.UPDATE_LABEL:
      return {
        ...state,
        labels: state.labels.map((label) => 
          label._id === action.payload._id ? action.payload : label
        )
      }
      // state.labels.map ??
      // return state.map((label) =>
      //   label._id === action.payload._id ? action.payload : label
      // );
    case labelActions.DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default labelReducer;
