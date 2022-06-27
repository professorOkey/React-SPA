import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/request";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return request(`/users?_limit=10`);
});

export const fetchUserDetails = createAsyncThunk(
  "users/fetchUserDetails",
  async (params = {}) => {
    return request(`/users/${params.id}/${params.category}`);
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userDetails: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
      });
  },
});

export default userSlice.reducer;
