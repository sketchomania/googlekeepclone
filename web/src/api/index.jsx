import axios from "axios";

// const urQl = process.env.REACT_APP_API;
const urQl = "http://localhost:5000/graphql";

// we need token
// then pass it inside the header
const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchNotes = (body) => axios.post(urQl, body, headers);
export const createNote = (body) => {
  const reqBody = {
    query: `
      mutation CreateNote($title: String!, $description: String!) {
        createNote(NoteCreateInput: {title: $title, description: $description}) {
          _id
          title
          description
          background
          pinned
          selected
          listMode
          archived
          deleted
          createdAt
          updatedAt
        }
      }
    `,
    variables: {
      title: title,
      description: description,
      color: color,
      isPinned: isPinned,
    },
  };

  axios.post(urQl, body, headers);
};
export const updateNote = (id, updatedNote) =>
  axios.patch(`${urQl}/${id}`, updatedNote);

export const fetchLabels = (body) => axios.post(urQl, body, headers);
export const createLabel = (body) => axios.post(urQl, body, headers);
export const updateLabel = (body) => axios.post(urQl, body, headers);

export const registerUser = (body) => axios.post(urQl, body, headers);
export const loginUser = (body) => axios.post(urQl, body, headers);
// export const checkAuth = (body, customHeader) => axios.post(urQl, body, customHeader);
export const checkAuth = (customHeader) => axios.post(urQl, customHeader);
