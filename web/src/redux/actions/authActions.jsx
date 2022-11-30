import { authActions } from "../../constants/actionTypes";
import * as api from "../../api";

export const getToken = () => {
  const now = new Date(Date.now()).getTime();
  const timeAllowed = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
  if (timeSinceLastLogin < timeAllowed) {
    return localStorage.getItem("token");
  } else {
    logout();
    return null;
  }
};

const registerUserRequest = () => {
  return {
    type: authActions.REGISTER_REQUEST,
  };
};
const registerUserSuccess = (signupUserData) => {
  return {
    type: authActions.REGISTER_SUCCESS,
    payload: signupUserData,
  };
};
const registerUserFailure = (error) => {
  return {
    type: authActions.REGISTER_FAILURE,
    payload: error,
  };
};

const setToken = (token) => {
  console.log("📌📌token previously getToken(): ", getToken());
  console.log("setToken called: ", token);
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
  console.log("token now getToken(): ", getToken());
};

const deleteToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
  console.log("deleteToken called!!and now token is: ", getToken());
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
      const responseData = response.data.data.createUser;

      if (responseData.token) {
        setToken(responseData.token);
        console.log(
          "rm: SingupUser called: && (response.data.data.createUser) is set to authReducer ✅"
        );
      }

      dispatch(registerUserSuccess(responseData));
    } catch (error) {
      console.log("Signup error: ", error);
      dispatch(registerUserFailure(error.response.data.errors));
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
      console.log(
        "rm: Login called: && (response.data.data.login) is set to authReducer ✅"
      );
    }

    dispatch({
      type: authActions.LOGIN_SUCCESS,
      payload: responseData,
    });
  } catch (error) {
    console.log("Login error: ", error, error.response);
    dispatch({
      type: authActions.LOGIN_FAILURE,
      payload: error.response.data.errors,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    deleteToken();
    dispatch({ type: authActions.LOGOUT_SUCCESS });
  } catch (error) {
    deleteToken();
    dispatch({ type: authActions.LOGOUT_SUCCESS });
    console.log(error);
  }
};

// const autoLogout = (timeLeft) => {
//   setTimeout(() => {
//     logout();
//   }, timeLeft);
// };

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
