import React from 'react'


const Cards = () => {
    return(
      <div>hello</div>
    )
}

const CardTile = styled(motion.article)`
 min-height:30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    img{
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
    text-align:center;
    border-radius:1rem ;
    cursor: pointer;
    overflow: hidden;

      @media screen and (max-width: 450px) {
      
        width: 60vw;
        height: 20vh;
      }`

export default Cards