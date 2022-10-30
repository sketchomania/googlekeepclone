import axios from "axios";

// const urQl = process.env.REACT_APP_API;
const urQl = "http://localhost:5000/graphql";
const token = "token_of_user";

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};

const header2 = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchNotes = (body) => axios.post(urQl, body, headers);
// make this one as fetchNotes
export const createNote = (body) => {
  const reqBody = {
    query: `
      mutation CreateNote($title: String!, $description: String!) {
        createNote(noteCreateInput: {title: $title, description: $description}) {
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
      title: body.title,
      description: body.description,
      color: body.color,
      isPinned: body.isPinned,
    },
  };

  axios.post(urQl, reqBody, headers);
};
export const updateNote = (id, updatedNote) =>
  axios.patch(`${urQl}/${id}`, updatedNote);

export const fetchLabels = (body) => axios.post(urQl, body, headers);
export const createLabel = (body) => axios.post(urQl, body, headers);
export const updateLabel = (body) => axios.post(urQl, body, headers);

export const registerUser = (body) => axios.post(urQl, body, header2);
export const loginUser = (body) => axios.post(urQl, body, header2);
// export const checkAuth = (body, customHeader) => axios.post(urQl, body, customHeader);
export const checkAuth = (customHeader) => axios.post(urQl, customHeader);

/*
const callFormDataGetApi = async (endPoint) => {
  let token = getAuthToken();
  custom_console("get token ==>> ", endPoint, token);
  return Axios({
    url: endPoint,
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  }).then(parseResponse);
};
*/
