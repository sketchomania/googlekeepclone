import axios from "axios";

// const urQl = process.env.REACT_APP_API;
const urQl = "http://localhost:5000/graphql";

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchNotes = (body) => axios.post(urQl, body, headers);
export const createNote = (body) => axios.post(urQl, body, headers);
export const updateNote = (id, updatedNote) =>
  axios.patch(`${urQl}/${id}`, updatedNote);

export const fetchLabels = (body) => axios.post(urQl, body, headers);
export const createLabel = (body) => axios.post(urQl, body, headers);
export const updateLabel = (body) => axios.post(urQl, body, headers);

export const registerUser = (body) => axios.post(urQl, body, headers);
export const loginUser = (body) => axios.post(urQl, body, headers);
// export const checkAuth = (body, customHeader) => axios.post(urQl, body, customHeader);
export const checkAuth = (customHeader) => axios.post(urQl, customHeader);
