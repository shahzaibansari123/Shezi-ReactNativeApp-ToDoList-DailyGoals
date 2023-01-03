import axios from "axios";

const serverUrl = "";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${serverUrl}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailed", payload: error.response.data.message });
  }
};

export const getMyProfile = () => async (dispatch) => {
  try {
  } catch (error) {}
};
