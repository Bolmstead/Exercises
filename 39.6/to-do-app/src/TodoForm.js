import React, {useState} from "react";
import './App.css';

function TodoForm({addTodo}) {
  const initialState = ({
    text: ""
  })
  
  const [formData, setFormData]=useState(initialState)

  const handleChange = e =>{
    setFormData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { text } = formData;
    addTodo(text)
    setFormData(initialState)
  }

  return (
    <div >
      <form onSubmit= {handleSubmit}>
        <label htmlFor="text">New Todo: </label>
        <input name="text" value={formData.text} onChange={handleChange}/>
        <button>Add!</button>
      </form>
    </div>
  );
}

export default TodoForm;
