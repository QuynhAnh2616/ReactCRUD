import React from 'react'

const RemovedList = ({status, text, todo, todos, setTodos }) => {

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
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
         {text}
        </li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash">{status}</i>
        </button>
        
      </div>
    )
}

export default RemovedList
