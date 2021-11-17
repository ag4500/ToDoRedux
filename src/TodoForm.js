import React from "react";
import { handletoggle, settodo, addtodo, updatetodo } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
function Todo() {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.todo);
  const getId = select.todo.id;
  const { title, desc } = select.todo;
  const onChange = (event) => {
    const { name, value } = event.target;
    const updatedTodo = { ...select.todo, [name]: value };
    dispatch(settodo(updatedTodo));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!title) return;
    if (!select.updatingTodoIndex && select.updatingTodoIndex !== 0) {
      dispatch(addtodo({ ...select.todo, id: new Date().getTime() }));
      dispatch(handletoggle(!select.toggle));
    } else {
      dispatch(updatetodo({ ...select.todo }));
      dispatch(handletoggle(!select.toggle));
    }
  };
  const handleHideToggle = () => {
    dispatch(handletoggle(!select.toggle));
  };
  return (
    <div className="container p-3 text-center bg-light">
      <Modal show={select.toggle} onHide={handleHideToggle}>
        <Modal.Header closeButton>
          {getId === undefined ? (
            <Modal.Title>Add Todo</Modal.Title>
          ) : (
            <Modal.Title>Edit Todo</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <InputGroup className=" p-2 -3 ">
              <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
              <FormControl
                type="text"
                name="title"
                value={title}
                onChange={(event) => onChange(event)}
              />
            </InputGroup>
            <InputGroup className="p-2 -3 ">
              <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
              <FormControl
                type="text"
                name="desc"
                value={desc}
                onChange={(event) => onChange(event)}
              />
            </InputGroup>
            <Modal.Footer>
              {getId === undefined ? (
                <Button variant="success" type="submit">
                  Add Todo
                </Button>
              ) : (
                <Button variant="warning" type="submit">
                  Edit Todo
                </Button>
              )}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Todo;
