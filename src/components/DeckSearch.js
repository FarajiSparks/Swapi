import React, { useState } from 'react';

import styled from 'styled-components';
import {motion} from "framer-motion";

//Redux and Routes
import {useDispatch} from 'react-redux';
import { searchDeck } from '../actions/deckAction';

//Assests
import search from "../img/Search.svg";

const CardSearch = () => {

  const dispatch = useDispatch(); 
  const [textInput, setTextInput] = useState("");

  const submitSearch = (e) =>{
    e.preventDefault(); 
    dispatch (searchDeck(textInput));
    setTextInput("");
    console.log(searchDeck(textInput));
  }

  const inputHandler = (e) =>{
    setTextInput(e.target.value)
  }
  

  return (
  <Container>
      <Formy className="search">
            <input id="search-bar" value={textInput} placeholder="Search" onChange={inputHandler} type="text"/>
            <button href="#" onClick={()=>submitSearch()} type='submit'><img className='search-icon' src={search} alt="" /></button>
      </Formy>
      <Filters>
        <button>+</button>
      </Filters>
   </Container>
  )
}

const Container = styled(motion.div)`
display:flex;
justify-content:start;
margin-top:30px;

`

const Formy = styled(motion.form)`
width:352px;
height:50px;
button{
  background-color: transparent;
  height:0;
  width:0;
  padding: 0;
  margin: 0;
  border:none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

#search-bar{
  margin: 0 auto;
  width: 100%;
  height: 32px;
  padding: 0 20px;
  font-size: 1rem;
  outline: none;
  border:none;
  border-radius:5px;
 }
.search-icon{
  position: relative;
  float: right;
  width: 20px;
  height: 75px;
  top: -56px;
  right: -378px;
  cursor:pointer;
}
`
const Filters = styled(motion.div)`

  padding-left:45px;
  
  button{
  border:none;
  padding-left:10px;
  padding-right:10px;
  margin-right:7px;
  height: 32px;
  cursor:pointer;
}
`
export default CardSearch