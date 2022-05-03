import * as actions from "../constants/actionTypes";
import * as api from "../api";

export const registereUser =
  ({ email, password }) =>
  async (dispatch) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const { data } = await api.registerUser(body, headers);

      dispatch({ type: actions.REGISTER_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.REGISTER_FAIL });
    }
  };
