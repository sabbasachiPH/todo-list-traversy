import React, { useState } from "react";

const AddTodo = props => {
  const [addTodol, setAddTodol] = useState({
    title: ""
  });
  const handleInputChange = e => {
    setAddTodol({ [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.addTodo(addTodol.title);
    // handleInputChange(addTodo.title);
    setAddTodol({ title: "" });
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        placeholder="Add Todo ..."
        value={addTodol.title}
        onChange={handleInputChange}
        style={{ flex: "10", padding: "5px" }}
      />
      <input
        type="submit"
        className="btn"
        value="Submit"
        style={{ flex: "1" }}
      />
    </form>
  );
};

export default AddTodo;
