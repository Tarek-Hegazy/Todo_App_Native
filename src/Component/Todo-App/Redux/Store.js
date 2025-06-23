import { configureStore } from "@reduxjs/toolkit";
import todosSlicer from "./TodosSlicer";

const store = configureStore({
  reducer: {
    todosState: todosSlicer.reducer,
  },
});

export default store;