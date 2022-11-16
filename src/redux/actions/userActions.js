import axios from "axios";

import { getAllUsersReducer, getDetailsUserReducer, } from "../reducers/userReducer";

export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(getAllUsersReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getDetailsUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch(getDetailsUserReducer(data));
  } catch (error) {
    throw error;
  }
};
