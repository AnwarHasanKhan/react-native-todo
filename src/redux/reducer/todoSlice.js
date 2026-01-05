import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",

  initialState: [],

  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false
          }
        };
      }
    },

    toggleTodo(state, action) {
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo(state, action) {
      return state.filter(t => t.id !== action.payload);
    }
  }
});


// 3️⃣ Export actions
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

// 4️⃣ Export reducer
export default todoSlice.reducer;
