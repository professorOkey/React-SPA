import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/request";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  return request(`/todos?_limit=10`);
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    changeCompleted(state, action) {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].completed = !state.todos[index].completed;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export default todoSlice.reducer;
export const { changeCompleted } = todoSlice.actions;
