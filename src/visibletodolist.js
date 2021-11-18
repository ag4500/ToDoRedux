import { connect } from "react-redux";
import App from "./App";
const getVisibleTodos = (todo, filter) => {
  switch (filter) {
    case "ShowAll":
      return todo;
    case "ShowCompleted":
      return todo.filter((t) => t.completed);
    case "ShowActive":
      return todo.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};
const mapStateToProps = (state) => ({
  todo: getVisibleTodos(state.todo.record, state.visibilityFilter),
});
const VisibleTodoList = connect(mapStateToProps)(App);
export default VisibleTodoList;
