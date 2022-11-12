import axios from "axios";

// const urQl = "http://localhost:5000/graphql";
const urQl = process.env.REACT_APP_API;
const token = localStorage.getItem("token");
console.log("token from localStorage (api page) :", token, "urQl: ", urQl);

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

const postApiCall = (body) => axios.post(urQl, body, headers);

export const fetchNotes = (body) => postApiCall(body);
export const createNote = (body) => postApiCall(body);
export const deleteNote = (body) => postApiCall(body);
// export const fetchNotes = (body) => axios.post(urQl, body, headers);
// export const createNote = (body) => axios.post(urQl, body, headers);

export const updateNote = (id, updatedNote) =>
  axios.patch(`${urQl}/${id}`, updatedNote);

export const fetchLabels = (body) => postApiCall(body);
export const createLabel = (body) => postApiCall(body);
// export const fetchLabels = (body) => axios.post(urQl, body, headers);
// export const createLabel = (body) => axios.post(urQl, body, headers);
export const updateLabel = (body) => axios.post(urQl, body, headers);
export const deleteLabel = (body) => axios.post(urQl, body, headers);

export const registerUser = (body) => axios.post(urQl, body, header2);
export const loginUser = (body) => axios.post(urQl, body, header2);

// export const checkAuth = (body, customHeader) => axios.post(urQl, body, customHeader);
// export const checkAuth = (customHeader) => axios.post(urQl, customHeader);
