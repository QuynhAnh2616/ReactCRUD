import React from "react";
import RemovedList from "./RemovedList";

const Removed = ({  todos, setTodos, filteredTodos }) => {

  let removedlist = filteredTodos.map((todo) => {
    let result = "";
    if (todo.status === 'removed') {
      result = (
        <RemovedList
          key={todo.id}
          text={todo.text}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          status={todo.status}
        />
      );
    }
    return result;
  });
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {removedlist}
      </ul>
    </div>
  );
};

export default Removed;
