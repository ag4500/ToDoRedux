import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { completetodo,deletetodo, handletoggle, updatingtodoindex } from "./actions/index";
import { Table } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todo from "./TodoForm";
function App() {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.todo);
  console.log(select)
  const handleShowToggle = (id) => {
    if (id === undefined) {
      dispatch(handletoggle(!select.toggle));
    } else {
      const todoIndex = select.record.findIndex((todo) => todo.id === id);
      dispatch(updatingtodoindex(todoIndex));
      dispatch(handletoggle(!select.toggle));
    }
  };
  const handleDelete = (id) => {
    dispatch(deletetodo(id));
  };
  const handleComplete=(e,id)=>{
    console.log( e.target.checked)
    dispatch(completetodo({ id, completed: e.target.checked }))
    
  }
  return (
    <div className="App">
      <Button
        className="mx-2 my-3"
        variant="info"
        onClick={() => handleShowToggle()}
      >
        Add Todo
      </Button>
      <div className="p-3 container text-center bg-light">
        <h1 className="mb-1">Todo...</h1>
      </div>
      {select.toggle ? <Todo /> : undefined}
      <Table striped bordered hover className="container" size="lg">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {select.record.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.title}</td>
              <td>{data.desc}</td>
              <Button
                variant="outline-warning"
                className="mx-1"
                onClick={() => handleShowToggle(data.id)}
              >
                Edit Todo
              </Button>
              <Button
                variant="outline-warning"
                className="mx-1"
                onClick={() => handleDelete(data.id)}
              >
                Delete Todo
              </Button>
              <label>
                complete
                <input
                  type="checkbox"
                  checked={data.completed}
                  onClick={(event) => handleComplete(event, data.id)}
                />
              </label>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default App;
