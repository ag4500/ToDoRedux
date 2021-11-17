import {
  AddTodo,
  SetTodo,
  Toggle,
  UpdateTodo,
  DeleteTodo,
  UpdatingtodoIndex,
  CompleteTodo,
} from "../actions";
const initialState = {
  todo: {
    title: "",
    desc: "",
  },
  record: [],
  toggle: false,
  updatingTodoIndex: null,
};
export default function todo(state = initialState, action) {
  switch (action.type) {
    case AddTodo:
      return {
        ...state,
        record: [...state.record, action.payload],
        todo: initialState.todo,
      };
    case Toggle:
      return {
        ...state,
        toggle: action.payload,
      };
    case SetTodo:
      return {
        ...state,
        todo: action.payload,
      };
    case UpdatingtodoIndex:
      return {
        ...state,
        updatingTodoIndex: action.payload,
        todo: { ...state.record[action.payload] },
      };
    case UpdateTodo:
      const record = [...state.record];
      record[state.updatingTodoIndex] = action.payload;
      return {
        ...state,
        record,
        todo: initialState.todo,
        updatingTodoIndex: null,
      };
    case DeleteTodo:
      return {
        ...state,
        record: state.record.filter((todo) => todo.id !== action.payload),
      };
    case CompleteTodo:
      return {
        ...state,
        record: state.record.map((data) => {
          if (data.id !== action.payload.id) return data;
          return { ...todo, completed: action.payload.completed };
        }),
      };
    default:
      return state;
  }
}
