import * as actions from "../constants/actionTypes";
import * as api from "../api";

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotes();

    dispatch({ type: actions.FETCH_ALL_NOTES, payload: data });
  } catch (error) {
    console.log(error.message);
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
