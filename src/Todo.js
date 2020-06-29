import React from "react";

const Todo = (props) => (
  <div className="Todo">
    <h1 className="Title">{props.title}</h1>
    <p className="Description">{props.description}</p>
    <button
      className="Button"
      type="button"
      onClick={() => props.deleteTodo(props.id)}
    >
      Delete Todo
    </button>
  </div>
);

export default Todo;
