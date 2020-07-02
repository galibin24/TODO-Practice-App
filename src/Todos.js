import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
      <h2 className="TodoTitle">Todos</h2>
      <div className="containerTodos">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} deleteTodo={onChange} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
