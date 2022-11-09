import axios from "axios";
// import { useSelector } from "react-redux";
// import { getToken } from "../redux/actions/authActions";

// const urQl = "http://localhost:5000/graphql";
const urQl = process.env.REACT_APP_API;
const token = localStorage.getItem("token");
// if not auth then delete token
console.log("token from localStorage (api page) :", token, "urQl: ", urQl);
// const toke = getToken();
// console.log("token from getToken() (api page) :", toke);
// const auth = useSelector((state) => state.authReducer);

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
export const createNote = (body) => axios.post(urQl, body, headers);

export const updateNote = (id, updatedNote) =>
  axios.patch(`${urQl}/${id}`, updatedNote);

export const fetchLabels = (body) => axios.post(urQl, body, headers);
export const createLabel = (body) => axios.post(urQl, body, headers);
export const updateLabel = (body) => axios.post(urQl, body, headers);
export const deleteLabel = (body) => axios.post(urQl, body, headers);

export const registerUser = (body) => axios.post(urQl, body, header2);
export const loginUser = (body) => axios.post(urQl, body, header2);
// export const checkAuth = (body, customHeader) => axios.post(urQl, body, customHeader);
// export const checkAuth = (customHeader) => axios.post(urQl, customHeader);
