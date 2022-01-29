import axios from "axios";

const url = "http://localhost:5000/notes";
const url2 = "http://localhost:5000/labels";

export const fetchNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote);
export const updateNote = (id, updatedNote) => axios.patch(`${url}/${id}`, updatedNote);

export const fetchLabels = () => axios.get(url2);
export const createLabel = (newLabel) => axios.post(url2, newLabel);
export const updateLabel = (id, updatedLabel) => axios.patch(`${url2}/${id}`, updatedLabel);
