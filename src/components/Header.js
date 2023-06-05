import React from 'react';


import styled from 'styled-components';
import {motion} from "framer-motion";

//Assests
import bavin from "../img/User (2).svg";
import cards from "../img/Cards.svg";
import decks from "../img/Decks.svg";
import cardsSelected from "../img/Cards Selected.svg";
import decksSelected from "../img/Decks Selected.svg";



const Header = () => {
  return (
    <>
    <Top>
        <div>
            <img src={cardsSelected} alt="" />
            <img src={decks} alt="" />
        </div>
        <div className="title"><span>SW</span>-API Deck Builder</div>
        <img src={bavin} alt="" />
    </Top>
    <Line></Line>
    </>
  )
};

const Top = styled(motion.div)`
    padding-top:5vh;
    display:flex;
    justify-content:space-between;
    width:auto;
    align-items:center;
    .title{
        font-size:20px;
        color:#757575;
    }
    span{
        color:#3B3B3B;
        font-weight:400; 
    }
    img{
        height:30px;
    }
    @media screen and (max-width: 1023px){
    .title{
        display:none;
    }
  }
    
`

const Line = styled(motion.div)`
height:1px;
width:auto;
background-color:#B8B8B8;`

export default Header;