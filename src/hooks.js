import { useState } from "react";
import axios from "axios";
import uuid from "uuid";


function useFlip(initialVal = true) {
  // call useState, "reserve piece of state"
  const [isFacingUp, setisFacingUp] = useState(initialVal);
  const flipCard = () => {
    setisFacingUp(oldValue => !oldValue);
  };
  
  // return piece of state AND a function to toggle it
  return [isFacingUp, flipCard];
}

function useAxios(url) {
    const [cards, setCards] = useState([]);
    const addCard = async (param) => {
        console.log(param);
        const response = await axios.get(`${url}${param}`);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
  
    // return piece of state AND a function to toggle it
    return [cards, addCard];
}
  

export {useFlip, useAxios};