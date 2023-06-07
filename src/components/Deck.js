import React from 'react';

//Styling and Tenative Animation
import styled from 'styled-components';
import {motion} from "framer-motion";

import { useDispatch } from "react-redux";

//Image Assests 
import deck from '../img/Deck.svg';
import remove from '../img/Remove.svg';
import jediOrder from '../img/Jedi Order.svg';
import rebelAlliance from '../img/Rebel Alliance.svg';
import galacticEmpire from '../img/Galatic Empire.svg';
import noFaction from '../img/No Faction.svg';
import { deleteDeck } from '../actions/deckAction';



const Deck = ({name, totalCards, faction, id}) => {

  const dispatch = useDispatch();
  const handleDeleteDeck = () =>{
    dispatch(deleteDeck(id))
  }

  const FactionImage = () => {
    let src;
    let color;
    switch (faction) {
    case 'jedi':
    src = jediOrder;
    color = "#C53030";
    break;
    case 'rebel':
    src = rebelAlliance;
    color = "#2F855A";
    break;
    case 'galactic':
    src = galacticEmpire;
    color="#3B3B3B"
    break;
    case 'no faction':
    src = noFaction;
    color = "#969696"
    break;
    default:
    src = galacticEmpire;
    color = "#2F855A";
    }
    return {src, color};
   }

   const {src, color} = FactionImage();


  return (

   
    <DeckTile>

      <DeckBar backgroundcolor={color} backgroundimage={src} >
          <DeckBarTop>
            <img className="card" src={deck} alt="card icon" />
            <button onClick={()=>handleDeleteDeck(id)}><img className="remove" src={remove} alt="add icon" /></button>
          </DeckBarTop>
          <DeckBarBottom>
            {name}
          </DeckBarBottom>
      </DeckBar>
      <DeckContainer>         
        <DeckStats>
          <div className='total'>10</div>
          <div>{totalCards}</div>
        </DeckStats>
      </DeckContainer>
    </DeckTile>
 
  )
}



const DeckTile = styled(motion.article)`
 
  min-height:180px;
  width:216px;
  border-radius:8px;
  overflow: hidden;
  background-color:white;
  font-family: 'Roboto' sans-serif;
  margin-bottom:25px;
  @media screen and (max-width: 767px){
    width:100%;
  }
`

const DeckBar = styled(motion.div)`
height:98px;
padding:15px 15px 4px 14px;
background-color:${props => props.backgroundcolor};
background-image: url(${props => props.backgroundimage});
background-size: 'cover',
background-position: 'right',
background-repeat: 'no-repeat',
`
const DeckBarTop = styled(motion.div)`
display:flex;
justify-content:space-between;
  img{
        display:inline ;
        height:1rem;
        width: 1rem;
       
    }
    .remove{
          background-color:black;
          opacity:0.8;
          padding:10px 11px;
          border-radius:5px;
          cursor:pointer;
         ;
        } 
    button{
      background-color: transparent;
      border:none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
`
const DeckBarBottom = styled(motion.div)`

height:50px;
  display:flex;
  justify-content:left;
  align-items:flex-end;
  color:white;
  font-size:24px;
`

const DeckContainer = styled(motion.div)`

 margin-left:20px;
 margin-right:20px;
`
const DeckStats = styled(motion.div)`
display:flex;
justify-content:space-around;
padding-bottom:10px;
.total{
  font-size:48px;
  font-weight:300;
}
`


export default Deck;