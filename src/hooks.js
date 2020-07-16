import { useState } from "react";

function useFlip(initialVal = true) {
  // call useState, "reserve piece of state"
  const [isFacingUp, setValue] = useState(initialVal);
  const setIsFacingUp = () => {
    setValue(oldValue => !oldValue);
  };
  
  // return piece of state AND a function to toggle it
  return [isFacingUp, setIsFacingUp];
}

export default useFlip;