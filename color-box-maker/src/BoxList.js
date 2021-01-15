import React, {useState} from "react";
import './App.css';
import Box from './Box.js'
import NewBoxForm from './NewBoxForm.js'
import { v4 as uuid } from 'uuid'


function Boxlist() {
  const initialState = []

  const [boxes, setBoxes] = useState(initialState)
  const addBox = (color, height, width) => {
    setBoxes(boxes => [...boxes, { id: uuid(), color, height, width}])
  }

  const remove = (box) => {
    setBoxes(boxes.filter(n => n !== box.id)
    );
  }
  
  return (
    <div >
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxes.map((box) => <Box id={box.id} color={box.color} height={box.height} width={box.width} remove={remove}/>)}
      </div>
    </div>
  );
}

export default Boxlist;
