import React from 'react'

const Card = () => {
  return (
    <CardTile>
    <div className="card-banner">
      <img src={image.url} alt={image.alt} className="card-img" />
      <button className="heart" onClick={change}>
        {favourite ? (
          <img src={filled} alt="filled heart" />
        ) : (
          <img src={unfilled} alt="outlined heart" />
        )}
      </button>
    </div>
    <div className="card-content">
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  </CardTile>
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
    overflow: hidden;

      @media screen and (max-width: 450px) {
      
        width: 60vw;
        height: 20vh;
      }`



export default Card