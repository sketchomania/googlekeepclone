import { FETCH_ALL_LABELS, CREATE_LABEL, UPDATE_LABEL } from "../constants/actionTypes";
import * as api from "../api";

export const getLabels = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLabels();

    dispatch({ type: FETCH_ALL_LABELS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createLabel = (label) => async (dispatch) => {
  try {
    const { data } = await api.createLabel(label);

    dispatch({ type: CREATE_LABEL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
