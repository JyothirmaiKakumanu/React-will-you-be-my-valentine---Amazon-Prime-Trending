import React, { useState } from "react";
import '../styles/App.css';
import {slides} from '../data';
import ShowSlides from './ShowSlides';

const App = ({slides}) => {
  console.log("in aPP");
  
  

  return (
    <>
     <div className="App">
      {/* <div id="slide"> */}
        <ShowSlides slides={slides}/>
      {/* </div> */}
     </div> 
    </>
  )
}


export default App;
