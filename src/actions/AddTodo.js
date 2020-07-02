import { ADD_TODO } from "../reducers/TodoReducer";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
