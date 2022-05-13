import { authActions } from "../../constants/actionTypes";
import * as api from "../../api";

const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

const deleteToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
};

export const getToekn = () => {
  const now = new Date(Date.now()).getTime();
  const timeAllowed = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getTime("lastLoginTime");
  if (timeSinceLastLogin < timeAllowed) {
    return localStorage.getItem("token");
  }
};

export const signupUser =
  ({ email, password }) =>
  async (dispatch) => {
    const body = JSON.stringify({
      query: `
        mutation{ 
          createUser(userCreateInput:{
            email: "${email}"
            password: "${password}"
          }){
            _id
            email
            createdNotes{
              _id
            }
            createdLabels{
              _id
            }
            darkMode
          }
        }`,
    });

    try {
      const response = await api.registerUser(body);
      console.log(response);

      setToken(response.headers.get("Authorization"));

      dispatch({
        type: authActions.REGISTER_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: authActions.REGISTER_FAIL });
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const body = JSON.stringify({
      query: `
        query{ 
          login(
            email: "${email}",
            password: "${password}"
          ){
            userId
            token
            tokenExpirationTime
          }
        }
      `,
    });

    try {
      const response = await api.loginUserFunc(body);
      console.log(response);

      setToken(response.headers.get("Authorization"));

      dispatch({
        type: authActions.LOGIN_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: authActions.LOGIN_FAIL });
    }
  };

export const logout = () => async (dispatch) => {
  try {
    const response = await api.logoutUserFunc(body);
    console.log(response);

    dispatch({ type: authActions.LOGOUT_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: authActions.LOGOUT_SUCCESS });
  }
};

export const checkAuth = () => async (dispatch) => {
  const customHeader = {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToekn(),
    },
  };

  try {
    const response = api.checkAuth(body, customHeader);
    console.log(response);

    if (response.ok) {
      return response.data.JSON();
    }

    dispatch({ type: authActions.AUTHENTICATED, payload: response.data.data });
  } catch (error) {
    dispatch({ type: authActions.NOT_AUTHENTICATED });
    console.log(error);
  }
};
