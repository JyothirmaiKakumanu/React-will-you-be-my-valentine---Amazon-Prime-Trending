import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data';

const App = ({slides}) => {
  console.log("in aPP");
  console.log("slidestitle"+slides[0].title);

  const showSlides =(slides)=>{
    let allslides = slides.map((slide,index)=>{
      return (
        <h1 data-testid="title" key="index" value="index">{slide.title}</h1>
      )
    })
    return allslides;
  }

  return (
    <>
      {/* {slides.map((slide)=>{
        <>
          <h1 data-testid="title">{slide.title}</h1>
        </>
      }} */}
      <div id="amazonslides">
        {showSlides(slides)}
      </div>
    </>
  )
}


export default App;
