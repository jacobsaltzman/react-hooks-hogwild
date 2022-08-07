import React from "react";
import hogs from "../porkers_data";

function Piglist(){

  const pigs = hogs.map(({name, image}) => (
    <div>
    <p>{name}</p>
    <img src={image}></img>
    </div>
  )
  ) 
  // const pigImages = hogs.map

  return(
    <div>
   {pigs}
   </div>

  )

}

export default Piglist;