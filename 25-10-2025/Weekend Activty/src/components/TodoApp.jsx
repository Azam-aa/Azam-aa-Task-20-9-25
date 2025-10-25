import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if(task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-4">
      <h3>Todo App</h3>
      <input 
        type="text" 
        value={task} 
        onChange={e => setTask(e.target.value)} 
        className="form-control mt-3" 
        placeholder="Enter task"
      />
      <button onClick={addTodo} className="btn btn-primary mt-2">Add Task</button>
      <ul className="list-group mt-3">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {todo}
            <button onClick={() => deleteTodo(index)} className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp;
