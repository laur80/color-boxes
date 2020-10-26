import React,{ useState } from "react";
import { choice } from "./helpers";
import "./Box.css";

function Box(props){
  
    const[state,setState]=useState({ color: choice(props.colors) })
   
  
  function pickColor() {
    let newColor;
    do {
      newColor = choice(props.colors);
    } while (newColor === state.color);

    setState({ color: newColor });
  }
  function handleClick() {
    pickColor();
  }
  
    return (
      <div
        className='Box'
        style={{ backgroundColor: state.color }}
        onClick={handleClick}
      />
    );
  
}

export default Box;
