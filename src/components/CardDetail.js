import React from 'react';

//Styling and Tenative Animation
import styled from 'styled-components';
import {motion} from "framer-motion";

//Redux
import { useSelector } from 'react-redux';

//Image Assests 
import card from '../img/Card.svg';
import planet from '../img/Planet.svg';
import vehicleImg from '../img/Vehicles.svg';
import starshipImg from "../img/Starships.svg";
import GenderImage from './GenderImage';

const CardDetail = () => {

  const {detail, homeworld, starship, species, vehicles} = useSelector(state=>state.detail)

 
  return (
    <CardTile>
      <CardBar>
        <CardBarTop>
          <img className="card" src={card} alt="card icon" />
        </CardBarTop>
        <CardBarBottom>{detail?.name}</CardBarBottom>
      </CardBar>
      <CardContainer>
        <div className='titles'>
          <div>
            <GenderImage gender={detail.gender} />
            {(detail?.birth_year ? detail?.birth_year : <div>Unknown</div>)}
          </div>
          {((species === '') ? <div>Human</div>: species?.name)}
        </div>
        <Line/>
        <CardStats>
          <CardStatsTitle>
            <div className="title-left">
              <img src={planet} alt="planet icon" />
              <div>HOMEWORLD</div>
            </div>
            <div>{homeworld?.name}</div>
          </CardStatsTitle>

          {vehicles?.map((vehicle) => (
            <CardStatsTitle key={vehicle.name}>
              <div className="title-left">
                <img src={vehicleImg} alt="vehicle icon" />
                <div>VEHICLE</div>
              </div>
              {((vehicle === 0)?<div>0</div> : <div>{vehicle?.name}</div>)}
            </CardStatsTitle>
          ))}

          {starship?.map((ship) => (
            <CardStatsTitle key={starship.name}>
              <div className="title-left">
                <img src={starshipImg} alt="" />
                <div>STARSHIP</div>
              </div>
              {((ship === 0)?<div>0</div> : <div>{ship?.name}</div>)}
            </CardStatsTitle>
          ))}
        </CardStats>
      </CardContainer>
    </CardTile>
  );
};


const CardTile = styled(motion.article)`
 
  min-height:282px;
  width:800px;
  border-radius:8px;
  overflow: hidden;
  background-color:white;
  font-family: 'Roboto' sans-serif;
  margin-bottom:25px;
  @media screen and (max-width: 767px){
    width:800px;
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
const Line = styled(motion.div)`
  height:1.5px;
  width:auto;
  background-color:#B8B8B8;
  margin-bottom:13px;
  margin-top:8px;
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
 .titles{
  display:flex;
  justify-content:space-between;
  padding-top:8px;
 }
  div{
  display:flex;
 }
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
   :last-child{
      margin-bottom:150px;
    }
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