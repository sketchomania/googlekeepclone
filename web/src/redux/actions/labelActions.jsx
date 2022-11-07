// import * as actions from "../../constants/actionTypes";
import { labelActions } from "../../constants/actionTypes";
import * as api from "../../api";

const fetchLabelsRequest = () => {
  return {
    type: labelActions.FETCH_ALL_LABELS_REQUEST,
  };
};

const fetchLabelsSuccess = (labels) => {
  return {
    type: labelActions.FETCH_ALL_LABELS_SUCCESS,
    payload: labels,
  };
};

const fetchLabelsFailure = (error) => {
  return {
    type: labelActions.FETCH_ALL_LABELS_FAILURE,
    payload: error,
  };
};

export const fetchLabels = () => async (dispatch) => {
  const body = JSON.stringify({
    query: `query{
      labels{
        _id
        name
        assignedNotes{
          _id
        }
        creator{
          _id
        }
      }
    }`,
    variables: {},
  });

  try {
    dispatch(fetchLabelsRequest());
    const response = await api.fetchLabels(body);
    console.log(
      "fetchLabels called (response): && (response.data.data.labels) is set to labelReducer.labels ✅"
    );

    dispatch(fetchLabelsSuccess(response.data.data.labels));
  } catch (error) {
    console.log("Error :", error);
    dispatch(fetchLabelsFailure(error));
  }
};

export const createLabel = (label) => async (dispatch) => {
  const reqBody = {
    query: `
      mutation CreateLabel($name: String!) {
        createLabel(labelCreateInput: {name: $name}) {
          _id
          name
          assignedNotes{
            _id
          }
        }
      }`,
    variables: {
      name: label.name,
    },
  };

  try {
    const data = await api.createLabel(reqBody);

    dispatch({ type: labelActions.CREATE_LABEL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateLabel = (id, label) => async (dispatch) => {
  try {
    const { data } = await api.updateLabel(id, label);

    dispatch({ type: labelActions.UPDATE_LABEL, payload: data });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const deleteLabel = (labelId) => async (dispatch) => {
  const reqBody = {
    query: `
      mutation DeleteLabel($id: ID!) {
        deleteLabel(labelId: $id) {
          _id
          name
        }
      }`,
    variables: {
      id: labelId,
    },
  };
  try {
    const response = await api.deleteLabel(reqBody);

    dispatch({ type: labelActions.DELETE_LABEL, payload: response });
  } catch (error) {
    console.log("Delete Label Errror: ", error);
  }
};
