import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const completedTodos = todos.filter((todo) => todo.completed);
  const nocompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="app">
      <div className="completed-todos">
        <h2>Выполненные дела:</h2>
        <ul>
          {completedTodos.map((todo) => (
            <li key={todo.id} className="completed">
              {todo.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="nocompleted-todos">
        <h2>Невыполненные дела:</h2>
        <ul>
          {nocompletedTodos.map((todo) => (
            <li key={todo.id} className="nocompleted">
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
