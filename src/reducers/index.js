import { combineReducers } from "redux";
import todo from "./todo";
import visibilityFilter from "./visibilityfilter";
export default combineReducers({
  todo,
  visibilityFilter,
});
