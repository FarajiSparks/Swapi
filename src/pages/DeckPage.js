import React from 'react';
import DeckHeader from "../components/DeckHeader";
import DeckSearch from "../components/DeckSearch";
import Decks from "../components/Decks";

const DeckPage = () => {
  return (
    <>
        <DeckHeader/>
        <DeckSearch/>
        <Decks/>
    </>
  )
}

export default DeckPage