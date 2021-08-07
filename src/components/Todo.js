/* eslint-disable no-labels */
/* eslint-disable no-template-curly-in-string */
import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Edit from "./Edit";

const Todo = ({ status, text, todo, todos, setTodos }) => {
 const editHandler = ()=>{
   setTodos(todos.map((item)=>{
    if (item.id === todo.id) {
      return{
        ...item,
        text :item.text

      }
    }
   }))
 }
 const edit = () => {
  setTodos(todos.map((item)=>{
    if(item.id === todo.id){
      item = todo
    }
    return item;
  }));
  alert("ok!!")
  
}
 const inputTextHandler = (e) => {
  console.log(e);
  setTodos(e.target.value);
};
  const deleteHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          if (todo.status === "removed") {
            return {
              ...item,
              status: "asset",
            };
          } else {
            return {
              ...item,
              status: "removed",
            };
          }
        }
        return item;
      })
    );
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <input type="text"  onChange={inputTextHandler} />
      <button onClick={edit}>edit</button>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      {/* <Router>
        <Link to="/removed"> <button  className="complete-btn">
          <i className="fas fa-check">Edit</i></button>
        </Link>
        <Switch>
          <Route path="/removed">
            <Edit setTodos={setTodos} todos={todos} text={text} />
          </Route>
        </Switch>
      </Router> */}

      <button onDoubleClick={editHandler} className="complete-btn">
        <i className="fas fa-check">Edit</i>
      </button>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash">{status}</i>
      </button>
    </div>
  );
};
export default Todo;
