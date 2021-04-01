import React, { useState } from 'react';

const ShowSlides = ({slides}) => {

    console.log("slideTitle"+slides[0].title);

    const [currentSlide,setCurrentSlide] = useState(0);
    const [nextBtn,setNextBtn] = useState(false);
    const [prevBtn,setPrevBtn] = useState(false);
    const [resetBtn,setResetBtn] = useState(true);
   
    const getPrevSlide =()=>{
        currentSlide >0 && setCurrentSlide(currentSlide - 1);
        setPrevBtn(true);
    }

    const getNextSlide=()=>{
        currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
        setNextBtn(true);
    }

    const resetSlides =()=>{
        setCurrentSlide(0);
        setResetBtn(false);
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