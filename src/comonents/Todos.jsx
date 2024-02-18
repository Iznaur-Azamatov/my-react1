import React, { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const checkboxChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <div className="container">
      <div className="todo">
        <div className="todo-subtitle">
          <h1>Todo List</h1>
        </div>

        <div className="todo-style">
          {todos.map((todo) => (
            <div className="todo-style__title" key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                <p>{todo.title}</p>
              </span>
              <div className="button-input">
                <button
                  className="btn-delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  X
                </button>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => checkboxChange(todo.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
