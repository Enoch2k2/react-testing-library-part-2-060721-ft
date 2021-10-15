import React, { useState } from 'react';
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  return (
    <div className="App">
      <TodoForm addTodo={ addTodo } />
      <TodoList todos={ todos } />
    </div>
  );
}

export default App;
