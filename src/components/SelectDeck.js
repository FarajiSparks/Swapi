import React, {useEffect} from 'react';


import { loadDeck } from '../actions/deckAction';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {motion} from "framer-motion";


const SelectDeck = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadDeck());
      }, [dispatch]);
      const {decks} = useSelector((state) => state.decks);


  return (
    <SelectContainer>
        <Container>
            <div className="title">Select a deck</div>
            <Line/>
            {(decks === [] && <div>No decks created</div>)}
            <DeckList>{decks.map((deck)=>{
                return(<ListItem id={deck.id}>{deck.name}</ListItem>)
            })}</DeckList>
        </Container>
    </SelectContainer>
  )
}

const SelectContainer = styled(motion.div)`
    width:216px;
    height:auto;
    background: #EDEDED;
    border: 1px solid #B8B8B8;
    box-shadow: 0px 19px 25px rgba(0, 0, 0, 0.14944), 0px 1.26352px 1.66253px rgba(0, 0, 0, 0.37);
    border-radius: 4px;
    position:absolute;
    top:55px;
    right:20px;
 
`
const Line = styled(motion.div)`
height:1px;
width:auto;
background-color:#B8B8B8;`

const Container = styled(motion.div)`
    margin-left:20px;
    margin-right:20px;
    .title{
        padding-top:8px;
        padding-bottom:8px;
    }
`

const DeckList = styled(motion.div)`
    list-style-type:none;
    display:flex;
flex-direction:column;
align-items:center;
`

const ListItem = styled(motion.div)`
display:flex;
align-items:center;
justify-content: space-between;
background-color:white;
margin-bottom:6px;
height:32px;
width:100%;
border-radius:5px;
padding-left:8px;
padding-right:8px;
  :first-child{
    margin-top:10px;
  }
  :last-child{
    margin-bottom:50px;
  }  
`
export default SelectDeck;