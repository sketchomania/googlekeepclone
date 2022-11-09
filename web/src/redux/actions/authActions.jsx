import { authActions } from "../../constants/actionTypes";
import * as api from "../../api";

const registerUserRequest = () => {
  return {
    type: authActions.REGISTER_REQUEST,
  };
};
const registerUserSuccess = (user) => {
  return {
    type: authActions.REGISTER_SUCCESS,
    payload: user,
  };
};
const registerUserFailure = (error) => {
  return {
    type: authActions.REGISTER_FAILURE,
    payload: error,
  };
};

const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

const deleteToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
};

export const getToken = () => {
  const now = new Date(Date.now()).getTime();
  const timeAllowed = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
  if (timeSinceLastLogin < timeAllowed) {
    return localStorage.getItem("token");
  } else {
    return null;
  }
};

export const signupUser =
  ({ email, password }) =>
  async (dispatch) => {
    const body = JSON.stringify({
      query: `
        mutation{ 
          createUser(userCreateInput:{email: "${email}", password: "${password}"}){
            user{
              _id
              email
              password
              createdNotes{
                _id
              }
              createdLabels{
                _id
              }
            }
            token
            tokenExpirationTime
          }
        }`,
    });

    try {
      dispatch(registerUserRequest());
      const response = await api.registerUser(body);
      console.log(response);

      // setToken(response.headers.get("Authorization"));
      dispatch(registerUserSuccess(response.data));

      // dispatch({
      //   type: authActions.REGISTER_SUCCESS,
      //   payload: response.data,
      // });
    } catch (error) {
      console.log(error);
      // dispatch({ type: authActions.REGISTER_FAILURE });
      dispatch(registerUserFailure(error));
    }
  };

export const login = (credential) => async (dispatch) => {
  const body = JSON.stringify({
    query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            user{
              _id
              email
              darkMode
              createdNotes{
                _id
              }
              createdLabels{
                _id
              }
            }
            token
            tokenExpirationTime
          }
        }
      `,
    variables: {
      email: credential.email,
      password: credential.password,
    },
  });

  try {
    const response = await api.loginUser(body);
    const responseData = response.data.data.login;

    if (responseData.token) {
      setToken(responseData.token);
      console.log("token (authActions):", responseData);
    }

    dispatch({
      type: authActions.LOGIN_SUCCESS,
      payload: responseData,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: authActions.LOGIN_FAILURE });
  }
};

export const logout = () => async (dispatch) => {
  try {
    // const response = await api.logoutUserFunc(body);
    // console.log(response);

    deleteToken();
    dispatch({ type: authActions.LOGOUT_SUCCESS });
  } catch (error) {
    deleteToken();
    dispatch({ type: authActions.LOGOUT_SUCCESS });
    console.log(error);
  }
};

// export const checkAuth = () => async (dispatch) => {
//   // const body = JSON.stringify({});

//   const customHeader = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: getToken(),
//     },
//   };

//   try {
//     dispatch({ type: authActions.AUTH_REQUEST });
//     // const response = api.checkAuth(body, customHeader);
//     const response = api.checkAuth(customHeader);
//     console.log(response);

//     if (response.ok) {
//       return response.data.JSON();
//     }

//     dispatch({ type: authActions.AUTH_SUCCESS, payload: response.data.data });
//   } catch (error) {
//     dispatch({ type: authActions.AUTH_FAILURE });
//     console.log(error);
//   }
// };
