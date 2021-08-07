import React from "react";
import RemovedList from "./RemovedList";

const Navbar = ({ todos, setTodos, filteredTodos }) => {
  let elements = filteredTodos.map((todo) => {
    let result='';
    if(todo.completed && todo.status === 'asset'){
      result =
      <RemovedList
              key={todo.id}
              text={todo.text}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
              status={todo.status}
      />
    }
    return result;
  })

  return (
    <div className="todo-container">
      <ul className="todo-list">
    {elements}
    </ul>
  </div>
  );
}

export default Navbar;
