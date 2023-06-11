import React from 'react';

//Styling and Tenative Animation
import styled from 'styled-components';
import {motion} from "framer-motion";

//Assests
import bavin from "../img/User (2).svg";
import cards from "../img/Cards.svg";
import decksSelected from "../img/Decks Selected.svg";

//Routing
import { useNavigate } from "react-router-dom";


const DeckHeader = () => {

    const navigate = useNavigate(); 

    //Home Navigation For Routing
    const homeHandler = () =>{
        navigate("/");
    }
    const decksHandler = () =>{
        navigate("/decks");
    }
   
  return (
    <>
    <Top>
        <div>
            <button  onClick={()=>homeHandler()}><img src={cards} alt="card unselected" /></button>
            <button onClick={()=>decksHandler()}><img src={decksSelected} alt="deck selected" /></button>
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
    button{
        cursor:pointer;
        background-color: transparent;
       
        border:none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
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

export default DeckHeader;