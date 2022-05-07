import * as actions from "../constants/actionTypes";
import * as api from "../api";

export const getNotes = () => async (dispatch) => {
  const body = JSON.stringify({
    query: `query{
      notes{
        _id
        title
        description
        updatedAt
        createdAt
        creator{
          _id
        }
        labels{
          _id
        }
        background
        pinned
        selected
        listMode
        archived
        deleted
      }
    }`,
    variables: {},
  });

  try {
    const response = await api.fetchNotes(body);
    console.log(response);

    dispatch({ type: actions.FETCH_ALL_NOTES, payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);

    dispatch({ type: actions.CREATE_NOTE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);

    dispatch({ type: actions.UPDATE_NOTE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = (id, note) => async (dispatch) => {
  try {
    console.log("Delete note called");
  } catch (error) {
    console.log(error);
  }
};
