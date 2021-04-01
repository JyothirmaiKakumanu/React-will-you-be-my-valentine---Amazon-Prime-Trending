import React, { useState } from 'react';

const ShowSlides = ({slides}) => {

    console.log("slideTitle"+slides[0].title);

    const [currentSlide,setCurrentSlide] = useState(0);
    const [nextBtn,setNextBtn] = useState(false);
    const [prevBtn,setPrevBtn] = useState(true);
    const [resetBtn,setResetBtn] = useState(false);
   
    const getPrevSlide =()=>{
        console.log("in prev disable");
        currentSlide >0 && setCurrentSlide(currentSlide - 1);
        console.log("currentSlide"+currentSlide);
        if(currentSlide===0){
            setPrevBtn(true);
        }else{
        setPrevBtn(false);
        }
    }

    const getNextSlide=()=>{
        currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
        if(currentSlide===slides.length-1){
            setNextBtn(true);
        }else{
        setNextBtn(false);
        }
    }

    const resetSlides =()=>{
        setCurrentSlide(0);
        if(currentSlide===0){
            setResetBtn(true);
        }
        else{
            setResetBtn(false);
            setPrevBtn(true);
            setNextBtn(false);
        }

    }

    return (
        <div className="carousel">
            <div className="carouselInner" id="navigation">
                <div className="left">
                    <button  data-testid="button-left" disabled ={prevBtn} onClick={getPrevSlide}>
                        Prev
                    </button>
                </div>
                <div className = "center">
                    <h1 data-testid="title">{slides[currentSlide].title}</h1>
                    <p data-testid="text">{slides[currentSlide].text}</p>
                </div>
                <div className = "right">
                    <button data-testid="button-right" disabled={nextBtn} onClick={getNextSlide}>
                        Next
                    </button>
                </div>
                
            </div>
            <div className ="restart">
                    <button  data-testid="button-restart" disabled={resetBtn} onClick={resetSlides}>
                        Restart
                    </button>
                </div>
            {/* {display(slides)} */}
            
        </div>
    );
};

export default ShowSlides;