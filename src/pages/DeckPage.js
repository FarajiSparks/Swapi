import React from 'react';
import DeckHeader from "../components/DeckHeader";
import DeckSearch from "../components/DeckSearch";
import Decks from "../components/Decks";
import BreadCrumbs from '../components/BreadCrumbs';

const DeckPage = () => {
  return (
    <>
        <DeckHeader/>
        <BreadCrumbs/>
        <DeckSearch/>
        <Decks/>
    </>
  )
}

export default DeckPage