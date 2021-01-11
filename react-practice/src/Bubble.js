import React from "react";
import './App.css';


const Bubble = (props) => {
  return (
    <div 
    className="bubble"
    style={{backgroundColor: props.color}}
    >
    </div>
  )
}

export default Bubble;
