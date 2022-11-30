import axios from "axios";
import { getToken } from "../redux/actions/authActions";

const urQl = process.env.REACT_APP_API;

// const token = localStorage.getItem("token");
// const token = getToken();
// console.log("token from localStorage (api page) :", token, "urQl: ", urQl);

// axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.timeout = 15000; // check working of this
axios.defaults.headers.post["Content-Type"] = "application/json";

// const headers = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + token,
//   },
// };
// const header2 = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

const postApiCall = (body) => {
  // const token = localStorage.getItem("token");
  const token = getToken();
  const headers = {
    headers: {
      // "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  console.log("header used: ", headers);
  return axios.post(urQl, body, headers);
};
export const fetchNotes = (body) => postApiCall(body);
export const createNote = (body) => postApiCall(body);
export const updateNote = (body) => postApiCall(body);
export const deleteNote = (body) => postApiCall(body);

export const fetchLabels = (body) => postApiCall(body);
export const createLabel = (body) => postApiCall(body);
export const updateLabel = (body) => postApiCall(body);
export const deleteLabel = (body) => postApiCall(body);

export const registerUser = (body) => axios.post(urQl, body);
export const loginUser = (body) => axios.post(urQl, body);

// export const fetchNotes = (body) => axios.post(urQl, body, headers);
// export const createNote = (body) => axios.post(urQl, body, headers);

// export const fetchLabels = (body) => axios.post(urQl, body, headers);
// export const createLabel = (body) => axios.post(urQl, body, headers);

// export const checkAuth = (body, customHeader) => axios.post(urQl, body, customHeader);
// export const checkAuth = (customHeader) => axios.post(urQl, customHeader);
