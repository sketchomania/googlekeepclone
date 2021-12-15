import * as api from "../api";

//Action Creators
export const getLabels = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLabels();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createLabel = (label) => async (dispatch) => {
  try {
    const { data } = await api.createLabel(label);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
