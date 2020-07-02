import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions/AddTodo";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  const onSubmit = (e) => {
    // e.preventDefault();
    const todo = { title, description };
    dispatch(addTodo(todo));
  };

  return (
    <form className="addTodo">
      <h2 className="Title">Add Todo</h2>
      <input type="text" placeholder="Title" onChange={onChangeTitle} />
      <textarea placeholder="Description" onChange={onChangeDescription} />
      <button type="button" onClick={onSubmit}>
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
