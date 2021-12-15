import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote);
// export const fetchLabels = () => axios.get(url);
// export const createLabel = (newLabel) => axios.post(url, newLabel);
