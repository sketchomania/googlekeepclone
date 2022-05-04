import * as actions from "../constants/actionTypes";
import * as api from "../api";

export const getLabels = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLabels();

    dispatch({ type: actions.FETCH_ALL_LABELS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createLabel = (label) => async (dispatch) => {
  try {
    const { data } = await api.createLabel(label);

    dispatch({ type: actions.CREATE_LABEL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateLabel = (id, label) => async (dispatch) => {
  try {
    const { data } = await api.updateLabel(id, label);

    dispatch({ type: actions.UPDATE_LABEL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
