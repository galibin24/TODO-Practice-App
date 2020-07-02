import { DELETE_TODO } from "../reducers/TodoReducer";

export const DeleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
