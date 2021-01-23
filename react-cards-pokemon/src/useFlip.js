import { useState } from "react";

function useFlip(initialVal = false) {
  // call useState, "reserve piece of state"
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };
  
  // return piece of state AND a function to toggle it
  return [isFacingUp, flipCard];
}

export default useFlip;
