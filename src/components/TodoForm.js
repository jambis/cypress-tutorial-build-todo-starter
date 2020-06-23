import React from "react";

export default (props) => (
  <form onSubmit={props.handleTodoSubmit}>
    <input
      type="text"
      className="new-todo"
      value={props.currentTodo}
      onChange={(e) => props.handleNewTodoChange(e)}
      placeholder="What needs to be done?"
      autoFocus
    />
  </form>
);
