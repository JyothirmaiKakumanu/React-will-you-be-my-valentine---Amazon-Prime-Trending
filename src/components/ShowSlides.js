import React, { useState } from 'react';

const ShowSlides = ({slides}) => {

    console.log("slideTitle"+slides[0].title);

    const [currentSlide,setCurrentSlide] = useState(0);
    const [nextBtn,setNextBtn] = useState(false);
    const [prevBtn,setPrevBtn] = useState(true);
    const [resetBtn,setResetBtn] = useState(true);
   
    const getPrevSlide =()=>{
        console.log("in prev disable");
        currentSlide >0 && setCurrentSlide(currentSlide - 1);
        console.log("currentSlide"+currentSlide);
        if(currentSlide===0){
            setPrevBtn(true);
            setResetBtn(true);
        }else{
        setPrevBtn(false);
        setResetBtn(false);
        }
        setNextBtn(false);
        
    }

    const getNextSlide=()=>{
        currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
        if(currentSlide===slides.length-1){
            setNextBtn(true);
            // setResetBtn(true);
        }else{
        setNextBtn(false);
        setResetBtn(false);
        }
        setPrevBtn(false);
        // setResetBtn(false);
        
    }

    const resetSlides =()=>{
        console.log(currentSlide);
        setCurrentSlide(0);
        console.log(currentSlide);
        if(currentSlide===0){
            console.log("inside reset");
            setResetBtn(true);
        }
        else{
            console.log("else reset");
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