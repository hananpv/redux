import axios from "axios"

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_REQUEST" });

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      dispatch({
        type: "FETCH_SUCCESS",
        payload: response.data,
      });

    } catch (error) {
      dispatch({
        type: "FETCH_FAILURE",
        payload: error.message,
      });
    }
  };
};