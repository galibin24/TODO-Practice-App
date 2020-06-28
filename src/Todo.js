import React from "react";

const Todo = (props) => {
  return (
    <div>
    
      {props.title}
      <button type="button" onClick={() => props.deleteTodo(props.id)}>Delete Todo</button>
      <li>{props.description}</li>
      <br />
    </div>
  );
};

export default Todo;
