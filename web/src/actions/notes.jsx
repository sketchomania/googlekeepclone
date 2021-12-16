import * as api from "../api";

//Action Creators
export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotes();

    dispatch({ type: "FETCH_ALL_NOTES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);

    dispatch({ type: "CREATE_NOTE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);

    dispatch({ type: "UPDATE_NOTE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
