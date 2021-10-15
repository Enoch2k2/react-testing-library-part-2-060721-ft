import React from 'react'

const TodoList = ({ todos }) => {

  const todoLis = todos.map((todo, i) => <li key={i}>{todo.title} - {todo.completed ? 'completed' : 'not completed'}</li>);

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        { todoLis }
      </ul>
    </div>
  )
}

export default TodoList
