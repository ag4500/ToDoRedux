import { connect } from "react-redux";
import { completetodo } from "./actions";
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
const mapDispatchToProps = {
  onTodoClick: completetodo,
};
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(App);
export default VisibleTodoList;
