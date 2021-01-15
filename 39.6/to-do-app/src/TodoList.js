import React, {useState} from "react";
import './App.css';
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'
import { v4 as uuid } from 'uuid'


function TodoList() {
  const initialState = []

  const [todos, setTodos] = useState(initialState)
  const addTodo = (text) => {
    setTodos(todos => [...todos, { id: uuid(), text}])
  }

  const remove = (todo) => {
    setTodos(todos.filter(n => n.id !== todo.id)
    );
  }
  
  return (
    <div >
      <TodoForm addTodo={addTodo}/>
      <div>
        {todos.map((todo) => <Todo id={todo.id} text={todo.text} remove={remove}/>)}
      </div>
    </div>
  );
}

export default TodoList;
