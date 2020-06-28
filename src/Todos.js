import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DeleteTodo } from "./actions/DeleteTodo";
import Todo from "./Todo";

function Todos() {
  const dispatch = useDispatch();

  const onChange = (id) => {
    dispatch(DeleteTodo(id));
  };

  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            
            {...todo}
            key={todo.id}
            deleteTodo={onChange}
          />
        );
      })}
    </div>
  );
}

export default Todos;
