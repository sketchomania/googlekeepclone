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
      "rm: fetchLabels called (response): && (response.data.data.labels) is set to labelReducer ✅"
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
    const response = await api.createLabel(reqBody);
    console.log("Label create, response: ", response);

    dispatch({
      type: labelActions.CREATE_LABEL,
      payload: response.data.data.createLabel,
    });
  } catch (error) {
    console.log("Label create error: ", error);
  }
};

export const updateLabel = (id, label) => async (dispatch) => {
  const reqBody = {
    query: `
      mutation UpdateLabel($id: ID!, $name: String!) {
        updateLabel(id: $id, labelUpdateInput: {name: $name}) {
          _id
          name
          assignedNotes{
            _id
          }
          creator{
            _id
          }
        }
      }
    `,
    variables: {
      id: id,
      name: label.name,
    },
  };
  try {
    const response = await api.updateLabel(reqBody);
    console.log("Label update, response: ", response);

    dispatch({
      type: labelActions.UPDATE_LABEL,
      payload: response.data.data.updateLabel,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const deleteLabel = (labelId) => async (dispatch) => {
  const reqBody = {
    query: `
      mutation DeleteLabel($id: ID!) {
        deleteLabel(id: $id) 
      }`,
    variables: {
      id: labelId,
    },
  };
  try {
    const response = await api.deleteLabel(reqBody);

    dispatch({
      type: labelActions.DELETE_LABEL,
      payload: labelId,
    });
    console.log("Delete label called: ", response.data.data);
  } catch (error) {
    console.log("Delete Label Errror: ", error);
  }
};
