import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = (props) => {
  console.log("props for Todos = ", props);
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={props.markComplete}
          delTodo={props.delTodo}
        ></TodoItem>
      ))}

      {/* If any one create this app without todoItem
       {props.todos.map(td => (
        <Todos todo={td.title}></Todos>
      ))} */}
    </div>
  );
};
//PropTypes
// Todos.PropTypes ={
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired,
// };

export default Todos;
