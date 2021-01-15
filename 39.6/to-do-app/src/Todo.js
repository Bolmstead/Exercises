import React from "react";
import './App.css';

function Todo(props) {

  let propsVar = props;

  const handleRemove = () => {
    props.remove(propsVar)
  }
  console.log("props,", props)

  return (
    <div 
    key={props.id}>
      <button onClick={() =>handleRemove()}>
        X
      </button>
      <li>
        {props.text}
      </li>
    </div>
  )
}

export default Todo;
