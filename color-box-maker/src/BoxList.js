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
    console.log("REMOVING BOX", box)
  }
  return (
    <div >
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxes.map(({ id, color, height, width}) => <Box id={id} color={color} height={height} width={width} remove={remove}/>)}
      </div>
    </div>
  );
}

export default Boxlist;
