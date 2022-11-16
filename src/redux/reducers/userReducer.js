import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: null,
  token: localStorage.getItem("token"),
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllUsersReducer: (state, action) => {
      state.users = action.payload;
    },
    getDetailsUserReducer: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { getAllUsersReducer, getDetailsUserReducer } = userSlicer.actions;
export default userSlicer.reducer;
