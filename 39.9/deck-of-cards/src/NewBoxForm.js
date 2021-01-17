import React, {useState} from "react";
import './App.css';

function NewBoxForm({addBox}) {
  const initialState = ({
    color: "",
    height: "",
    width: ""
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
    const { color, height, width } = formData;
    addBox(color, height, width)
    setFormData(initialState)
  }

  return (
    <div >
      <form onSubmit= {handleSubmit}>
        <label htmlFor="color">Color: </label>
        <input name="color" value={formData.color} onChange={handleChange}/><br/>
          <label htmlFor="height">Height: </label>
        <input name="height" value={formData.height} onChange={handleChange}/><br/>
        <label htmlFor="width">Width: </label>
        <input name="width" value={formData.width} onChange={handleChange}/><br/>
        <button>Add!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
