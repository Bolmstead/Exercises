import React from "react";
import './App.css';

function Box(props) {
  return (
    <div 
    className="box" 
    style={{backgroundColor: props.color, height: `${props.height}px`, width: `${props.width}px`}}>
      <h4 className="x" onClick={() =>props.remove(n)}>
        X
      </h4>
    </div>
  )
}

export default Box;
