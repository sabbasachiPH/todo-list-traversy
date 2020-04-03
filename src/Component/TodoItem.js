import React from "react";
import PropTypes from "prop-types";

const TodoItem = props => {
  // console.log("props for TodoItem = ", props);
  // console.log("props for TodoItem = ", props.todo);
  const { id, title } = props.todo;

  const itemStyle = {
    backgroundColor: "#f4f4f4f4",
    padding: "10px",
    borderBottom: "1px doted #ccc",
    textDecoration: props.todo.completed ? "line-through" : "none"
  };

  return (
    <div style={itemStyle}>
      <p>
        <input type="checkbox" onChange={props.markComplete.bind(this, id)} />
        {"  "}
        {title}
        <button onClick={props.delTodo.bind(this, id)} style={btnDelete}>
          x
        </button>
      </p>
    </div>
  );
};

TodoItem.prototype = {
  todo: PropTypes.object.isRequired
};

const btnDelete = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
