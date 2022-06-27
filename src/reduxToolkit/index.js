import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./posts/postSlice";
import todoSlice from "./todos/todoSlice";
import userSlice from "./users/userSlice";

const rootReducer = combineReducers({
  posts: postSlice,
  users: userSlice,
  todos: todoSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
