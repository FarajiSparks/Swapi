import React, { useState } from 'react';

//Styling and Tenative Animation
import styled from 'styled-components';
import {motion} from "framer-motion";

//Redux 
import {useDispatch} from 'react-redux';
import { fetchSearched, loadOldest, loadYoungest, loadAZ } from '../actions/peopleAction';

//Assests
import search from "../img/Search.svg";

//Routes
import {useLocation} from 'react-router-dom';

const CardSearch = () => {

  const location = useLocation();
  const dispatch = useDispatch(); 
  const [textInput, setTextInput] = useState("");


  //Search Function
  const submitSearch = () =>{ 
    dispatch (fetchSearched(textInput));
    setTextInput("");
  }

  const inputHandler = (e) =>{
    setTextInput(e.target.value)
  }
  
  //Alphabetic Sort 
  const filterAZ = () =>{  
    dispatch(loadAZ())
   
  }

  //Young to Old Sort
  const filterYoung = () =>{
    dispatch(loadYoungest())
   
  }

  //Old to Young Sort
  const filterOld = () =>{  
    dispatch(loadOldest())
    
  }


  return (
  <Container>
      <Formy className="search">
            <input id="search-bar" value={textInput} placeholder="Search" onChange={inputHandler}  type="text"/>
            <button onClick={(e)=>submitSearch(e)} type='button'><img className='search-icon' src={search} alt="" /></button>
      </Formy>
      <Filters>
        <button onClick={()=>filterAZ()}>A to Z</button>
        <button onClick={()=>filterYoung()}>Youngest</button>
        <button onClick={()=>filterOld()}>Oldest</button>
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