import axios from "axios";

const url = "http://localhost:5000/notes";
const url2 = "http://localhost:5000/labels";
const urQl = "http://localhost:5000/graphql";

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

// export const fetchNotes = () => axios.get(urQl);
export const fetchNotes = (body) => axios.post(urQl,body,headers);
export const createNote = (newNote) => axios.post(url, newNote);
export const updateNote = (id, updatedNote) => axios.patch(`${url}/${id}`, updatedNote);

export const fetchLabels = () => axios.get(url2);
export const createLabel = (newLabel) => axios.post(url2, newLabel);
export const updateLabel = (id, updatedLabel) => axios.patch(`${url2}/${id}`, updatedLabel);

export const registerUser = (email,password) => axios.post(urQl);
// export const registerUser = (email,password) => axios.post(urQl, body, headers);