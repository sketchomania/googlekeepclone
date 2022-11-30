// import * as actions from "../../constants/actionTypes";
import { noteActions } from "../../constants/actionTypes";
import * as api from "../../api";
// import { getToken } from "./authActions";

// const token = getToken();

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
    // if(token){}
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
  const reqBody = {
    query: `
      mutation UpdateNote($id: ID!, $title: String!, $description: String!) {
        updateNote(id: $id, noteUpdateInput: {title: $title, description: $description}) {
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
      id: id,
      title: note.title,
      description: note.description,
    },
  };
  try {
    const response = await api.updateNote(reqBody);
    console.log("Note update, response: ", response);

    dispatch({
      type: noteActions.UPDATE_NOTE,
      payload: response.data.data.updateNote,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = (noteId) => async (dispatch) => {
  const reqBody = {
    query: `
      mutation DeleteNote($id: ID!) {
        deleteNote(id: $id)
      }`,
    variables: {
      id: noteId,
    },
  };

  try {
    const response = await api.deleteNote(reqBody);

    dispatch({
      type: noteActions.DELETE_NOTE,
      payload: noteId,
    });
    console.log("Delete note called: ", response.data.data);
  } catch (error) {
    console.log("Delete Note Error", error);
  }
};
