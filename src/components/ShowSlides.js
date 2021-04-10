// import React, { useState } from 'react';

// const ShowSlides = ({slides}) => {

//     console.log("slideTitle"+slides[0].title);
//     const[index , setindex] = useState(0);
//     const render_content= (indx)=>{
  
//       return (<> <h1 data-testid="title" className="heading">{slides[indx].title}</h1><p data-testid="text" className="text">{slides[indx].text}</p></>);
  
//     }
//     const handlenext = ()=>{
//       if(index < slides.length -1){
//         setindex(index+1);
//       }
      
//     }
//     const handleprev = ()=>{
//       if(index> 0){
//         setindex(index-1);
//       }
//     }
  
//     const handlerestart =()=>{
//       setindex(0);
    
//   }
//     return (
//         <>
//             <div className="poster">
//       {render_content(index)}
//       </div>

//       <button data-testid="button-prev" onClick={handleprev} disabled={index==0 ?true:false} >Prev</button>
//       <button data-testid="button-restart"  onClick={handlerestart} disabled={index==0 ?true:false}>Restart</button>
//       <button data-testid="button-next" onClick={handlenext} disabled = {index ==slides.length-1?true:false}>Next</button>
            
//         </>
//     );
// };

// export default ShowSlides;