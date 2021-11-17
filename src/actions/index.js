export const SetTodo = "SetTodo";
export const AddTodo = "AddTodo";
export const UpdateTodo = "UpdateTodo";
export const Toggle = "Toggle";
export const DeleteTodo = "DeleteTodo";
export const UpdatingtodoIndex = "UpdatingtodoIndex";
export const CompleteTodo = "CompleteTodo";
export const addtodo = (payload) => ({
  type: AddTodo,
  payload,
});
export const settodo = (payload) => ({
  type: SetTodo,
  payload,
});
export const updatetodo = (payload) => ({
  type: UpdateTodo,
  payload,
});
export const handletoggle = (payload) => ({
  type: Toggle,
  payload,
});
export const updatingtodoindex = (payload) => ({
  type: UpdatingtodoIndex,
  payload,
});
export const deletetodo = (payload) => ({
  type: DeleteTodo,
  payload,
});
export const completetodo = (payload) => ({
  type: CompleteTodo,
  payload,
});
