import * as actions from "../../constants/actionTypes";
import * as api from "../../api";

export const getLabels = () => async (dispatch) => {
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
    const response = await api.fetchLabels(body);
    console.log(response);

    dispatch({ type: actions.FETCH_ALL_LABELS, payload: response.data.data });
  } catch (error) {
    console.log(error);
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


// query: `query{
//   labels{
//     _id
//     name
//     assignedNotes{
//       _id
//     }
//     creator{
//       _id
//     }
//   }
// }`,