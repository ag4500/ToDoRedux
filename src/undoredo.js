import React from "react";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <span className="container">
    <Button variant="secondary" onClick={onUndo} disabled={!canUndo}>
      Undo
    </Button>{" "}
    <Button variant="info" onClick={onRedo} disabled={!canRedo}>
      Redo
    </Button>
  </span>
);
const mapStateToProps = (state) => ({
  canUndo: state.todo.past.length > 0,
  canRedo: state.todo.future.length > 0,
});
const mapDispatchToProps = {
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo,
};
const undoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
export default undoRedo;
