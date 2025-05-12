import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterState, filterType, Task } from "../../type/TodoTaskType";

const initialState: FilterState = {
  value: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<filterType>) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
