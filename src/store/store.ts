import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducer/todosSlice";
import filterReducer from "./reducer/filterSlice";

export const store = configureStore({
  reducer: {
    todo: todosReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
