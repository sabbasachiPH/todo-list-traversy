import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./Component/Todos";
import Header from "./Component/Layout/Header";
import AddTodo from "./Component/AddTodo";
import { v4 as uuid } from "uuid";
import About from "./Component/Pages/About";
import Axios from "axios";

function App() {
  const [todos, setTodos] = useState([
    // {
    //   id: uuid(),
    //   title: "Take out the trash",
    //   completed: false,
    // },
    // {
    //   id: uuid(),
    //   title: "Take The Dinner",
    //   completed: true,
    // },
    // {
    //   id: uuid(),
    //   title: "Metting with boss",
    //   completed: false,
    // },
  ]);
  //console.log(todos);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(
      (res) => {
        console.log(res.data);
        setTodos(res.data);
      }
    );
  }, []);
  //Toggle the complete Status
  const markComplete = (id) => {
    // console.log("from App.js", uuid());
    console.log("from App.js", id);
    const toggleStatus = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(toggleStatus);
  };

  //Delete the Todo Item from the list
  const delTodo = (id) => {
    //console.log("from App.js delete button id ", id);
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) => {
        const newList = [...todos].filter((todo) => todo.id !== id);
        setTodos(newList);
      }
    );
    // const newList = [...todos].filter((todo) => todo.id !== id);
    // setTodos(newList);
  };

  //addTodo
  const addTodo = (title) => {
    console.log(title);
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false,
    }).then((res) => {
      res.data.id = uuid();
      setTodos([...todos, res.data]);
    });

    // with out JSONplaceholder API
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   completed: false,
    // };
    // setTodos([...todos, newTodo]);
  };
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header></Header>
          <Route exact path="/">
            <React.Fragment>
              <AddTodo addTodo={addTodo}></AddTodo>
              <Todos
                key={todos.id}
                markComplete={markComplete}
                delTodo={delTodo}
                todos={todos}
              ></Todos>
            </React.Fragment>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
