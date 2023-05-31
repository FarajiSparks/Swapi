import React from 'react';

//Styling and Tenative Animation
import styled from 'styled-components';
import {motion} from "framer-motion";

//Image Assests 
import card from '../img/Card.svg';
import add from '../img/Add.svg';
import planet from '../img/Planet.svg';
import vehicle from '../img/Vehicles.svg';
import starship from "../img/Starships.svg";
import GenderImage from './GenderImage';

const Card = ({name,species,dob,gender,homeworld,vehicles, starships}) => {
  return (

   
    <CardTile>
      <CardBar>
        <CardBarTop>
          <img className="card" src={card} alt="card icon" />
          <img className="plus" src={add} alt="add icon" />
        </CardBarTop>
        <CardBarBottom>
          {name}
        </CardBarBottom>
      </CardBar>
      <CardContainer>
        <GenderImage gender={gender} />
          {species}
          {dob}
        <CardStats>
        <CardStatsTitle>
          <div className='title-left'> 
            <img src={planet} alt="" />
            <div>HOMEWORLD</div>
          </div>
          <div>
            {homeworld}
          </div>
        </CardStatsTitle>
        <CardStatsTitle>
          <div className='title-left'> 
            <img src={vehicle} alt="" />
            <div>VEHICLES</div>
          </div>
          <div>
            {vehicles}
          </div>
        </CardStatsTitle>
        <CardStatsTitle>
          <div className='title-left'> 
            <img src={starship} alt="" />
            <div>STARSHIPS</div>
          </div>
          <div>
            {starships.length}
          </div>
        </CardStatsTitle>
          <div>
            {homeworld}
          </div>
        </CardStats>
      </CardContainer>
        
  </CardTile>
 
 
  )
}



const CardTile = styled(motion.article)`
 
  min-height:282px;
  width:216px;
  border-radius:8px;
  overflow: hidden;
  background-color:white;
  font-family: 'Roboto' sans-serif;

      @media screen and (max-width: 450px) {
        width: 60vw;
        height: 20vh;
      }
       
      `

const CardBar = styled(motion.div)`
height:98px;
background-color:#969696;
padding:15px 15px 4px 14px;
`
const CardBarTop = styled(motion.div)`
display:flex;
justify-content:space-between;
  img{
        display:inline ;
        height:1rem;
        width: 1rem;
       
    }
   .card{
          color:red;
        } 
    .plus{
          background-color:white;
          padding:10px 11px;
          border-radius:5px;
          cursor:pointer;
        } 
`
const CardBarBottom = styled(motion.div)`

height:50px;
  display:flex;
  justify-content:left;
  align-items:flex-end;
  color:white;
  font-size:24px;
`

const CardContainer = styled(motion.div)`
 
`
const CardStats = styled(motion.div)`
display:flex;
flex-direction:column;
align-items:center;
`

const CardStatsTitle= styled(motion.div)`
display:flex;
align-items:center;
justify-content: space-between;
background-color:#EDEDED;
margin-bottom:6px;
height:32px;
width:184px;
border-radius:5px;
padding-left:8px;
padding-right:8px;
  .title-left{
    display:flex;
    align-items:center;
    font-size:10px;
    font-weight:500;
    color:#757575;
    div{
      padding-left:3px;
    }
};`

export default Card