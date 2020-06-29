import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import AddTodo from "./AddTodo";
import Todos from "./Todos";

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
