import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import VisibleTodos from "./visibletodolist";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <VisibleTodos />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
