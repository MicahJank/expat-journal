import React from 'react';


const Stories = props => {
    return (
      
      <>

            <h1>{props.title}</h1>
           <img src={props.image} alt="" />
           <p>{props.paragraph}</p>

           </>
       
    )
}

export default Stories;