// import * as actions from "../../constants/actionTypes";
import { noteActions } from "../../constants/actionTypes";
import * as api from "../../api";

const fetchNotesRequest = () => {
  return {
    type: noteActions.FETCH_ALL_NOTES_REQUEST,
  };
};

const fetchNotesSuccess = (notes) => {
  return {
    type: noteActions.FETCH_ALL_NOTES_SUCCESS,
    payload: notes,
  };
};

const fetchNotesFailure = (error) => {
  return {
    type: noteActions.FETCH_ALL_NOTES_FAILURE,
    payload: error,
  };
};

export const fetchNotes = () => async (dispatch) => {
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
    dispatch(fetchNotesRequest());
    const response = await api.fetchNotes(body);
    console.log(
      "rm: fetchNotes called (response) && (response.data.data.notes)is set to noteReducer.notes ✅"
    );

    dispatch(fetchNotesSuccess(response.data.data.notes));
  } catch (error) {
    console.log("Error: ", error);
    dispatch(fetchNotesFailure(error));
  }
};

export const createNote = (note) => async (dispatch) => {
  const reqBody = {
    query: `
      mutation CreateNote($title: String!, $description: String!) {
        createNote(noteCreateInput: {title: $title, description: $description}) {
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
      }
    `,
    variables: {
      title: note.title,
      description: note.description,
      color: note.color,
      isPinned: note.isPinned,
    },
  };

  try {
    const response = await api.createNote(reqBody);
    console.log("Note create, response: ", response);

    dispatch({
      type: noteActions.CREATE_NOTE,
      payload: response.data.data.createNote,
    });
  } catch (error) {
    console.log("Note create error: ", error);
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const response = await api.updateNote(id, note);
    console.log("Note update, response: ", response);

    dispatch({ type: noteActions.UPDATE_NOTE, payload: response });
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
