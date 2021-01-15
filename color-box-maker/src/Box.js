import React from "react";
import './App.css';

function Box(props) {
  const handleRemove = () => {
    props.remove(props)
  }
  console.log("props,", props)

  return (
    <div 
    key={props.id}
    className="box" 
    style={{backgroundColor: props.color, height: `${props.height}px`, width: `${props.width}px`}}>
      <h4 className="x" onClick={(props) =>handleRemove(props)}>
        X
      </h4>
    </div>
  )
}

export default Box;
