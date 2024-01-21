import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const payload = action.payload;
      state.tasks.push({
        ...payload,
        done: false,
        deleted: false,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
