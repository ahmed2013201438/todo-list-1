import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todoReducer',
  initialState: [
    { id: 1, title: 'todo1', complate: true },
    { id: 2, title: 'todo2', complate: true },
    { id: 3, title: 'todo3', complate: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        complate: false,
      };

      state.push(newTodo);
    }
  },
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;