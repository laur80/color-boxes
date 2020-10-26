import React from "react";
import Box from "./Box";
import "./BoxContainer.css";

const b ={
  a:1,x:55
};
const a=[1,2,3];
// const c=Array.from(b);
const c={...a}
console.log(c);

export default function BoxContainer (){
  const init = {
    numBoxes: 18,
    allColors: ["purple", "magenta", "violet", "pink"]
  };

    const boxes = Array.from({ length: init.numBoxes }).map(() => (
      <Box colors={init.allColors} />
    ));

    return <div className='BoxContainer'>{boxes}</div>;
    
  }
