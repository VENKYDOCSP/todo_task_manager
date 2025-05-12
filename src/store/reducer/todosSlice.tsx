import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../../type/TodoTaskType";

const initialState: { list: Task[] } = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Task[]>) => {
      state.list = action.payload;
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
