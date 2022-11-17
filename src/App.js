import React, { useState } from 'react';
import './App.css';
import Todotable from './components/Todolist';

function App() {
  const [todo, setTodo] = useState({desc: '', date:''});
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value});
  }


  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>Description</label>
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        <label>Date</label>
        <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        <input type="submit" value="add" />
      </form>
      <Todotable todos={todos} />
    </div>
  );
}

export default App;
