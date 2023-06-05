
import React, {useEffect} from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { createDeck } from "../actions/deckeAction";

//Components
import Deck from "../components/Deck";

//Styling and Tenative Animation
import styled from 'styled-components';

const Decks = () => {
// Fetching Data 
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(createDeck())
}, [addDeck]);

//Getting Data Back
const {deck} = useSelector((state)=> state.decks);

  return (
    <div>
      {deck.map(()=>{
        return(
          <Deck/>
        )
      })}
    </div>
  )
}

export default Decks