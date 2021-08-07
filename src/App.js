import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Complete from "./components/Complete";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Removed from "./components/Removed";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  // eslint-disable-next-line no-unused-vars
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    // getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }
  };

  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Complete</Link>
            </li>
            <li>
              <Link to="/removed">Removed</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <div className="App">
                <header>
                  <h1>Ed's Todo List </h1>
                </header>
                <Form
                  inputText={inputText}
                  todos={todos}
                  setTodos={setTodos}
                  setInputText={setInputText}
                  setStatus={setStatus}
                />
                <TodoList
                  inputText={inputText}
                  setTodos={setTodos}
                  todos={todos}
                  filteredTodos={filteredTodos}
                  setInputText={setInputText}
                />
              </div>
            </Route>
            <Route path="/about">
              <Complete
                setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos}
              />
            </Route>
            <Route path="/removed">
              <Removed
                setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
