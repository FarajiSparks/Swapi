import React from 'react';

//Styling and Tenative Animation
import styled from 'styled-components';
import {motion} from "framer-motion";

//Image Assests 
import card from '../img/Card.svg';
import planet from '../img/Planet.svg';
import vehicle from '../img/Vehicles.svg';
import starship from "../img/Starships.svg";
import GenderImage from './GenderImage';

const CardDetail = ({ name, species, dob, gender, homeworld, vehicles, starships }) => {
  return (
    <CardTile>
      <CardBar>
        <CardBarTop>
          <img className="card" src={card} alt="card icon" />
        </CardBarTop>
        <CardBarBottom>{name}</CardBarBottom>
      </CardBar>
      <CardContainer>
        <GenderImage gender={gender} />
        {species}
        {dob}
        <CardStats>
          <CardStatsTitle>
            <div className="title-left">
              <img src={planet} alt="" />
              <div>HOMEWORLD</div>
            </div>
            <div>{homeworld}</div>
          </CardStatsTitle>

          {vehicles.map((vehicleUrl) => (
            <CardStatsTitle key={vehicleUrl}>
              <div className="title-left">
                <img src={vehicle} alt="" />
                <div>VEHICLE</div>
              </div>
              <div>{vehicleUrl}</div>
            </CardStatsTitle>
          ))}

          {starships.map((starshipUrl) => (
            <CardStatsTitle key={starshipUrl}>
              <div className="title-left">
                <img src={starship} alt="" />
                <div>STARSHIP</div>
              </div>
              <div>{starshipUrl}</div>
            </CardStatsTitle>
          ))}
        </CardStats>
      </CardContainer>
    </CardTile>
  );
};


const CardTile = styled(motion.article)`
 
  min-height:282px;
  width:auto;
  border-radius:8px;
  overflow: hidden;
  background-color:white;
  font-family: 'Roboto' sans-serif;
  margin-bottom:25px;
  @media screen and (max-width: 767px){
    width:100%;
  }
       
      `

const CardBar = styled(motion.div)`
height:98px;
background-color:#969696;
padding:15px 15px 4px 14px;
`
const CardBarTop = styled(motion.div)`
display:flex;
justify-content:left;
  img{
        display:inline ;
        height:1rem;
        width: 1rem;
       
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

 margin-left:20px;
 margin-right:20px;
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
width:100%;
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

export default CardDetail;