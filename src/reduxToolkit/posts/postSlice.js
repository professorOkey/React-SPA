import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/request";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return request(`/posts?_limit=10`);
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    shownModal: false,
  },
  reducers: {
    showModal(state) {
      state.shownModal = !state.shownModal;
    },
    addPost(state, action) {
      request("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "posts/json",
        },
        body: JSON.stringify(action.payload),
      });
      state.posts.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
export const { showModal, addPost } = postSlice.actions;
