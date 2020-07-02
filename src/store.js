import { createStore, combineReducers } from "redux";

import TodoReducer from "./reducers/TodoReducer";

//
const reducer = combineReducers({ todo: TodoReducer });

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
