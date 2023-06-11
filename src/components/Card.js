import React, {useState} from 'react';

//Styling and Tenative Animation
import styled from 'styled-components';
import {motion} from "framer-motion";

//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

//Image Assests 
import card from '../img/Card.svg';
import add from '../img/Add.svg';
import planet from '../img/Planet.svg';
import vehicle from '../img/Vehicles.svg';
import starship from "../img/Starships.svg";
import GenderImage from './GenderImage';
import SelectDeck from './SelectDeck';

//Routing
import { useNavigate } from "react-router-dom";


const Card = ({name,species,url,dob,gender,homeworld,vehicles, starships}) => { 
    //Toggler For Deck Component
    const [toggler, setToggler] = useState(false)
    const toggle = () => {
      setToggler(prev => !prev);
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Card Detail Navigation and Data Fetching
    const loadDetailHandler = ()=>{
      dispatch(loadDetail(url ))
      navigate(`/${name}`);
    }
    console.log(species);

  return (
    <CardTile>
      <CardBar>
        <CardBarTop>
          <button onClick={loadDetailHandler}><img className="card" src={card} alt="card icon" /></button>
          <button onClick={()=>toggle()}><img className="plus" src={add} alt="add icon" /></button>
          {toggler && <SelectDeck/>}
        </CardBarTop>
        <CardBarBottom>
          {name}
        </CardBarBottom>
      </CardBar>
      <CardContainer>
        <div className='titles'>
          <div className='subtitles'>
            <GenderImage gender={gender} />
            {(dob === "unknown") ? <div>unknown</div> : dob}
          </div>
          {(species.length === 0) ? <div>Human</div> : species}
        </div>
        <Line></Line>
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
  width:auto;
  border-radius:8px;
  background-color:white;
  font-family: 'Roboto' sans-serif;
  margin-bottom:25px;
  position:relative;
 
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
justify-content:space-between;
  img{
        display:inline ;
        height:1rem;
        width: 1rem;
       
    }
    .plus{
          background-color:white;
          padding:10px 11px;
          border-radius:5px;
         
        }
    button{ 
      cursor:pointer;
      background-color: transparent;
        border:none;
       -webkit-appearance: none;
       -moz-appearance: none;
        appearance: none;
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
const Line = styled(motion.div)`
  height:1.5px;
  width:auto;
  background-color:#B8B8B8;
  margin-bottom:13px;

`

const CardContainer = styled(motion.div)`

 margin-left:20px;
 margin-right:20px;
 .titles{
  display:flex;
  justify-content:space-between;
  padding-top:8px;
 }
 .subtitles{
  display:flex;

  ;'lkhj 
  
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

export default Card;