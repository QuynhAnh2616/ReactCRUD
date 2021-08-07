import React from "react";
import Todo from "./Todo";

const TodoList = ({inputText, todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            status={todo.status}
            inputText={inputText}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
