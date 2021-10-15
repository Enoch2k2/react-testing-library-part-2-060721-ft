import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [ title, setTitle ] = useState('');
  const [ completed, setCompleted ] = useState(false);

  const handleChange = e => {
    if(e.target.type == 'checkbox') {
      setCompleted(!completed);
    } else {
      setTitle(e.target.value);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    addTodo({
      title,
      completed
    })
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={ title } onChange={ handleChange }/>
      </div>
      <div>
        <label htmlFor="completed">Completed</label>
        <input type="checkbox" id="completed" checked={ completed } onChange={ handleChange }/>
      </div>

      <input type="submit" value='Create Todo' />
    </form>
  )
}

export default TodoForm
