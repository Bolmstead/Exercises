import React, { useState } from "react";
import Bubble from './Bubble'
import './App.css';

function App() {

  const [colors, setColors] = useState(["gray"]);
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }

  function addCircle(){
    setColors(colors=> [...colors, getRandomColor()])
  }

  return (
    <div>
      <button onClick={addCircle()}> Add Bubble! </button>
      <div>
        {colors.map((color) => (
          <Bubble color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
